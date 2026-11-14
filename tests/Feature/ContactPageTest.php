<?php

use App\Mail\ContactMessageReceived;
use Illuminate\Support\Facades\Mail;

test('contact page returns a successful response', function () {
    $response = $this->get(route('contact'));

    $response->assertOk();
});

test('contact form sends the message to the company inbox', function () {
    Mail::fake();

    $response = $this->post(route('contact.store'), [
        'name' => 'Juan Dela Cruz',
        'email' => 'juan@example.com',
        'phone' => '+63 900 000 0000',
        'subject' => 'Partnership inquiry',
        'message' => 'We would like to work with you.',
    ]);

    $response->assertRedirect(route('contact'));

    Mail::assertSent(ContactMessageReceived::class, function (ContactMessageReceived $mail): bool {
        return $mail->hasTo(config('mail.contact_address'))
            && $mail->hasReplyTo('juan@example.com')
            && $mail->contactMessage['subject'] === 'Partnership inquiry';
    });

    (new ContactMessageReceived([
        'name' => 'Juan Dela Cruz',
        'email' => 'juan@example.com',
        'phone' => null,
        'subject' => 'Partnership inquiry',
        'message' => 'We would like to work with you.',
    ]))->assertSeeInHtml('We would like to work with you.')->assertSeeInHtml('Not provided');
});

test('contact form requires name, email, subject, and message', function () {
    Mail::fake();

    $response = $this->post(route('contact.store'), [
        'email' => 'not-an-email',
    ]);

    $response->assertSessionHasErrors(['name', 'email', 'subject', 'message']);
    $response->assertSessionDoesntHaveErrors('phone');

    Mail::assertNothingSent();
});
