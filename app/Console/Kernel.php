<?php

namespace App\Console;

use Aws\Command;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\DailyNodeBackup::class,
        Commands\WeeklyDbBackup::class,
        Commands\ProfileCompleteReminder::class,
        Commands\NodeIndustryNews::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('nodeIndustryNews:everyday')->dailyAt('01:00');
        $schedule->command('backup:daily')/*->everyMinute();*/->dailyAt('02:00');
        $schedule->command('backupFullDb:daily')/*->everyFourMinutes();*/->dailyAt('03:00');
        $schedule->command('deleteUnprocessedVideo:daily')->dailyAt('04:00');
        $schedule->command('dacastVideoSync:daily')->everyMinute();
        $schedule->command('profileCompleteReminder:tridays')->dailyAt('05:00');
        $schedule->command('linkedin_token_expire:daily')->dailyAt('06:00');
        $schedule->command('socialAnalytics:update')->dailyAt('06:30');
        foreach(['01:30', '13:30'] as $time) {
            $schedule->command('twitterTrendingTags:store')->dailyAt($time);
        }
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
