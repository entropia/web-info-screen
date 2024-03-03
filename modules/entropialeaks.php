<?php

class EntropiaLeaksModule
{
    const API_URL = 'https://chaos.social/api/v1/timelines/tag/';

    protected string $request_uri;

    public function requestData(array $request_parameters): array
    {
        $hashtag = $request_parameters['hashtag'];

        $this->request_uri = self::API_URL . $hashtag;

        return json_decode(file_get_contents($this->request_uri), JSON_OBJECT_AS_ARRAY);
    }
}
