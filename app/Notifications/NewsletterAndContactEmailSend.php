<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewsletterAndContactEmailSend extends Notification implements ShouldQueue
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
            ->line("Feedback from: {$this->details['name']} ({$this->details['email']})" )
            ->line("Company: {$this->details['company']}" )
            ->line("Phone: {$this->details['phone']}" )
            ->line("Message: {$this->details['message']}")
            ;
    }

    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
