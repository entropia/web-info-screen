<?php

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
