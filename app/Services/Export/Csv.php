<?php namespace App\Services\Export;

use App\Services\Export\Contact\ExportContract;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class Csv implements ExportContract {

    public function output($data)
    {
        $headers = array(
            'Content-Type' => 'text/csv',
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Content-Disposition' => 'attachment; filename=' . time() . '.csv',
            'Expires' => '0',
            'Pragma' => 'public',
        );
        $columns = array('#', 'Type','Date', 'Duration in (hh:mm)','User Name', 'User Email');


        $response = new StreamedResponse(function () use ($data, $columns) {
            // Open output stream
            $file = fopen('php://output', 'w');
            fputcsv($file, $columns, ',');

            foreach ($data as $row) {
                if(null == $row->causer)
                {

                    $description = explode('|', $row->description);
                    $userName = ((sizeof($description)> 1) ? $description[0]: 'Anonymous');
                    $userEmail = !empty($description[1]) ? $description[1]: '';
                }
                else{
                    $userName = $row->causer->name;
                    $userEmail = $row->causer->email;
                }

                fputcsv($file, array($row->id, $row->log_name, $row->created_at, $row->getExtraProperty('duration') ?? '-', $userName, $userEmail));
            };

            // Close the output stream
            fclose($file);
        }, 200, $headers);

        return $response->send();
    }
}
