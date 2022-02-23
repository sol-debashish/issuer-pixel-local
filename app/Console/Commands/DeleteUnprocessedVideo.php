<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class DeleteUnprocessedVideo extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'deleteUnprocessedVideo:daily';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete all unprocessed video daily';

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
        collect(Storage::disk('local')->listContents('chunks', true))
            ->each(function($file) {
                if ($file['type'] == 'file' && $file['timestamp'] < now()->subDays(1)->getTimestamp()) {
                    Storage::disk('local')->delete($file['path']);
                }
            });
    }
}
