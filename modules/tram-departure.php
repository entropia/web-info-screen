<?php

class TramDepartureModule
{
    const API_URL = 'https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST';
    const API_GET_PARAMETERS = '?outputFormat=JSON&depType=stopEvents&mode=direct&type_dm=stop&useRealtime=1';
    const API_STOP_ID_GET_PARAMETER = '&name_dm=';

    public function __construct()
    {

    }

    public function requestData(array $request_parameters)
    {

    }
}
