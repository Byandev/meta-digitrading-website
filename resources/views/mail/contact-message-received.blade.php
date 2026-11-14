<x-mail::message>
# New Contact Form Message

**Name:** {{ $contactMessage['name'] }}<br>
**Email:** {{ $contactMessage['email'] }}<br>
**Phone:** {{ $contactMessage['phone'] ?? 'Not provided' }}<br>
**Subject:** {{ $contactMessage['subject'] }}

{{ $contactMessage['message'] }}
</x-mail::message>
