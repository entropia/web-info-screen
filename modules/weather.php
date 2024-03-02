<?php

class WeatherModule
{
    const API_URL = 'https://api.open-meteo.com/v1/dwd-icon';
    const API_GET_PARAMETERS_FEATURES = '?hourly=temperature_2m,precipitation,weather_code&forecast_hours=6';
    const API_GET_PARAMETER_LATITUDE = '&latitude=';
    const API_GET_PARAMETER_LONGITUDE = '&longitude=';
    const API_GET_PARAMETER_TIMEZONE = '&timezone=';

    public function requestData(array $request_parameters): array
    {
        $latitude = $request_parameters['latitude'];
        $longitude = $request_parameters['longitude'];
        $timezone = $request_parameters['timezone'];

        return [];
    }
}
