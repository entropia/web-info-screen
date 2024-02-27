<?php

include_once __DIR__ . '/../modules/entropialeaks.php';
include_once __DIR__ . '/../modules/events.php';
include_once __DIR__ . '/../modules/tram-departure.php';
include_once __DIR__ . '/../modules/weather.php';

class Api
{
    public function __construct()
    {
        $request_parameters = self::getRequestParameters();

        $response = [];

        header('Content-Type: application/json;charset=utf-8');

        echo json_encode($response, JSON_FORCE_OBJECT);
    }

    protected static function getRequestParameters(): array
    {
        return $_GET;
    }
}

new Api();
