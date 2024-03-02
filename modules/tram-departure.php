<?php

class TramDepartureModule
{
    const API_URL = 'https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST';
    const API_GET_PARAMETERS = '?outputFormat=JSON&depType=stopEvents&mode=direct&type_dm=stop&useRealtime=1';
    const API_STOP_ID_GET_PARAMETER = '&name_dm=';

    protected string $request_uri;

    public function requestData(array $request_parameters): array
    {
        $stop_id = $request_parameters['stop-id'];

        $this->request_uri = self::API_URL . self::API_GET_PARAMETERS . self::API_STOP_ID_GET_PARAMETER . $stop_id;

        return json_decode(file_get_contents($this->request_uri), JSON_OBJECT_AS_ARRAY);
    }
}
