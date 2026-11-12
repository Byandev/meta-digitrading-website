<?php

test('returns a successful response', function () {
    $response = $this->get(route('home'));

    $response->assertOk();
});

test('about page returns a successful response', function () {
    $response = $this->get(route('about'));

    $response->assertOk();
});

test('services page returns a successful response', function () {
    $response = $this->get(route('services'));

    $response->assertOk();
});
