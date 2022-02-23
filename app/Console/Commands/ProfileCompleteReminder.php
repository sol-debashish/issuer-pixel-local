<?php

namespace App\Console\Commands;

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProfileCompleteReminder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'profileCompleteReminder:tridays';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Profile Complete Reminder';

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
        $get_profiles = User::join('companies', 'users.id', '=', 'companies.profile_created_by')
            ->select(DB::Raw('users.id,users.email,(companies.general_info_completed+companies.contact_completed+companies.structure_completed+companies.valuation_completed+companies.social_presence_completed+companies.hierarchy_completed) as total_score'))
            ->where('users.created_at', '<=', Carbon::now()->subDays(3)->toDateTimeString())
            ->where('users.role', 'Company')
            ->where('users.reminder_email_send', 0)
            ->get();
        $user_id_array = [];
        if (!$get_profiles->isEmpty()) {
            foreach ($get_profiles as $key => $prow) {
                $user_email = $prow->email;
                $user_id_array[] = $prow->id;
                if ($prow->total_score < 100) {
                    $receiveremail = array(
                        'email' => $user_email
                    );
                    $domain = 'issuerpixel.com';
                    Mail::send('email.profile_reminder', ['domainName' => $domain], function ($message) use ($receiveremail) {
                        $message->from('noreply@issuerpixel.com', 'Issuer Pixel');
                        $message->to($receiveremail['email'])->subject('Complete your profile');
                    });
                }
            }
            if (count($user_id_array) > 0) {
                User::WhereIn('id', array_values($user_id_array))->update(['reminder_email_send' => 1]);
            }
        }
    }
}
