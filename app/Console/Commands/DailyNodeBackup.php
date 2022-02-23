<?php

namespace App\Console\Commands;

use App\Traits\NodeMap;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Spatie\DbDumper\Databases\MySql;
use Spatie\DbDumper\Compressors\GzipCompressor;

class DailyNodeBackup extends Command
{
    use NodeMap;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'backup:daily';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Backup node data daily';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $nodes = $this->nodeMap;

        foreach($nodes as $node)
        {
            $table[] = $node['table'];
        }

        $file_name = 'backup_node_' . time();
        $s3_env = config('filesystems.disks.s3.s3_env');

        /*delete all after last 10 files*/
        collect(Storage::disk('local')->listContents('node_backup', true))
            ->each(function($file) {
                if ($file['type'] == 'file' && $file['timestamp'] < now()->subDays(9)->getTimestamp()) {
                    Storage::disk('local')->delete($file['path']);
                }
            });

        collect(Storage::disk('s3')->listContents("{$s3_env}/node_backup", true))
            ->each(function($file) {
                if ($file['type'] == 'file' && $file['timestamp'] < now()->subDays(9)->getTimestamp()) {
                    Storage::disk('s3')->delete($file['path']);
                }
            });

        MySql::create()
            ->setDumpBinaryPath(config('database.connections.mysql.mysqldbdump_location'))
            ->setHost(config('database.connections.mysql.host'))
            ->setDbName(config('database.connections.mysql.database'))
            ->setUserName(config('database.connections.mysql.username'))
            ->setPassword( config('database.connections.mysql.password'))
            ->includeTables($table)
            ->doNotCreateTables()
            ->setGtidPurged(config('database.connections.mysql.gtid_purge'))
            ->addExtraOption('--complete-insert')
            ->addExtraOption('--skip-triggers')
            ->useCompressor(new GzipCompressor())
            ->dumpToFile(storage_path("app/node_backup/{$file_name}.sql.gz"));

        Storage::disk('s3')->putFileAs(
            "{$s3_env}/node_backup",
            storage_path("app/node_backup/{$file_name}.sql.gz"),
            "{$file_name}.sql.gz",
            'public'
        );
    }

}
