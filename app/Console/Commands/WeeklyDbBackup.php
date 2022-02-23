<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Spatie\DbDumper\Compressors\GzipCompressor;
use Spatie\DbDumper\Databases\MySql;
use Symfony\Component\Process\Process;

class WeeklyDbBackup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'backupFullDb:daily';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Full Database Backup in daily';

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
        $date = Carbon::now()->format('Y-m-d_h-i');
        $s3_env = config('filesystems.disks.s3.s3_env');

        /*delete all after last 10 files*/
        collect(Storage::disk('local')->listContents('weekly_db_backup', true))
            ->each(function($file) {
                if ($file['type'] == 'file' && $file['timestamp'] < now()->subDays(30)->getTimestamp()) {
                    Storage::disk('local')->delete($file['path']);
                }
            });

        collect(Storage::disk('s3')->listContents("{$s3_env}/weekly_db_backup", true))
            ->each(function($file) {
                if ($file['type'] == 'file' && $file['timestamp'] < now()->subDays(30)->getTimestamp()) {
                    Storage::disk('s3')->delete($file['path']);
                }
            });

        MySql::create()
            ->setDumpBinaryPath(config('database.connections.mysql.mysqldbdump_location'))
            ->setHost(config('database.connections.mysql.host'))
            ->setDbName(config('database.connections.mysql.database'))
            ->setUserName(config('database.connections.mysql.username'))
            ->setPassword( config('database.connections.mysql.password'))
            ->setGtidPurged(config('database.connections.mysql.gtid_purge'))
            ->useCompressor(new GzipCompressor())
            ->dumpToFile(storage_path("app/weekly_db_backup/{$date}.sql.gz"));

        Storage::disk('s3')->putFileAs(
            "{$s3_env}/weekly_db_backup",
            storage_path("app/weekly_db_backup/{$date}.sql.gz"),
            "{$date}.sql.gz",
            'public'
        );
    }
}
