<?php

class EntropiaLeaksModule
{
    const API_URL = 'https://chaos.social/api/v1/timelines/tag/';

    protected string $request_uri;

    public function requestData(array $request_parameters)
    {
        $hashtag = $request_parameters['hashtag'];

        $this->request_uri = self::API_URL . $hashtag;

    }
}
