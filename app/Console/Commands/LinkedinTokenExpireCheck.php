<?php

namespace App\Console\Commands;

use App\Models\SocialIntegration;
use App\Notifications\InternalNotification;
use Carbon\Carbon;
use Illuminate\Console\Command;

class LinkedinTokenExpireCheck extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'linkedin_token_expire:daily';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Linkedin token expire check';

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
        $linkedData = SocialIntegration::with('companyOwner')->where(['share_platform' => 'linkedin'])->whereNotNull('access_token')->whereNotNull('expires_in')->get();
        foreach($linkedData as $linkedin)
        {
            $expireDate = Carbon::parse($linkedin->created_at)->addSeconds($linkedin->expires_in)->format('Y-m-d');
            $currentDate = Carbon::now()->format('Y-m-d');
            if($currentDate == $expireDate)
            {
                //send mail notification to that company
                $linkedin->companyOwner->notify(new \App\Notifications\LinkedinTokenExpireNotification());

                $data = [
                    'message' => 'Your linkedIn token has been expired.'
                ];
                //send notification to company
                $linkedin->companyOwner->notify(new InternalNotification($data));
                //update access token
                $linkedin->access_token = null;
                $linkedin->save();
            }

        }
    }

}
