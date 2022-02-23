<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SuggestionNotificationEmailSend extends Notification implements ShouldQueue
{
    use Queueable;

    private $details;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($details)
    {
        $this->details = $details;

    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->from($this->details['email'])
            ->subject($this->details['subject'])
            ->greeting('')
            ->line($this->details['title'])
            ->line("Suggested name: " . $this->details['suggestion_explanation'])
            ->line("Reason: " . $this->details['suggestion_reason'])
            ->line("Suggestion ID: " . $this->details['suggestion_id_time']);
    }

    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
