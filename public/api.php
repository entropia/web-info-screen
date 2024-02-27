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

        $response = self::callModule($request_parameters);

        header('Content-Type: application/json;charset=utf-8');

        echo json_encode($response, JSON_FORCE_OBJECT);
    }

    protected static function callModule(array $request_parameters)
    {
        switch ($request_parameters['module']) {
            case 'eantropialeaks':
                $response = (new EntropiaLeaksModule)->requestData($request_parameters);
                break;

            case 'events':
                $response = (new EventsModule)->requestData($request_parameters);
                break;

            case 'tram-departure':
                $response = (new TramDepartureModule)->requestData($request_parameters);
                break;

            case 'weather':
                $response = (new WeatherModule)->requestData($request_parameters);
                break;
        }

        return $response;
    }

    protected static function getRequestParameters(): array
    {
        return $_GET;
    }
}

new Api();
