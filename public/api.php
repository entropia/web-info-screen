<?php

class Api
{
    public function __construct()
    {
        $response = [];

        header('Content-Type: application/json;charset=utf-8');

        echo json_encode($response, JSON_FORCE_OBJECT);
    }
}

new Api();
