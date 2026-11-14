<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactMessageRequest;
use App\Mail\ContactMessageReceived;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    /**
     * Show the contact page.
     */
    public function show(): Response
    {
        return Inertia::render('contact');
    }

    /**
     * Send a message from the contact form to the company inbox.
     */
    public function store(ContactMessageRequest $request): RedirectResponse
    {
        Mail::to(config('mail.contact_address'))
            ->send(new ContactMessageReceived($request->validated()));

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Thanks for reaching out! We\'ll get back to you soon.')]);

        return to_route('contact');
    }
}
