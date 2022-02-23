<?php

namespace App\Http\Controllers\Admin;

use App\Models\Industry;
use Barryvdh\Snappy\Facades\SnappyPdf as PDF;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PdfController extends Controller
{
    public function nodeGenerate(Industry $industry)
    {
        //$industry = $industry->load(['sector.subSector.group.subGroup.echelon.subEchelon.tier.subTier.layer.subLayer.deck.subDeck.floor.subFloor.basement.subBasement.mine.subMine']);
        $industry = $industry->load(['sectorSelectedField.subSectorSelectedField.groupSelectedField.subGroupSelectedField.echelonSelectedField.subEchelonSelectedField.tierSelectedField.subTierSelectedField.layerSelectedField.subLayerSelectedField.deckSelectedField.subDeckSelectedField.floorSelectedField.subFloorSelectedField.basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);

        $view = 'admin.pdf._vertical_node_generate';
        if(request()->view == 'h')
        {
            $view = 'admin.pdf._horizental_node_generate';
        }

        $data = [
            'industry' => $industry,
        ];
        $totalNode = 1;
        $totalNode += $industry->sector->count();
        $totalNode += $industry->subSector->count();
        $totalNode += $industry->group->count();
        $totalNode += $industry->subGroup->count();
        $totalNode += $industry->echelon->count();
        $totalNode += $industry->subEchelon->count();
        $totalNode += $industry->tier->count();
        $totalNode += $industry->subTier->count();
        $totalNode += $industry->layer->count();
        $totalNode += $industry->subLayer->count();

        $totalNode += $industry->deck->count();
        $totalNode += $industry->subDeck->count();

        $totalNode += $industry->floor->count();
        $totalNode += $industry->subFloor->count();

        $totalNode += $industry->basement->count();
        $totalNode += $industry->subBasement->count();
        $totalNode += $industry->mine->count();
        $totalNode += $industry->subMine->count();

        if(request()->view == 'h')
        {
            if($totalNode > 0 && $totalNode <= 14 ){
                $pageHeight = '210';
                $pageWidth = '297';
            }
            elseif($totalNode > 14 && $totalNode < 1000){
                $pageHeight = '210';
                $pageWidth = $totalNode * 24;
            }
            elseif($totalNode > 1000){
                $pageHeight = '210';
                $pageWidth = 1000 * 24;
            }
        }
        $pdf = PDF::loadView($view, $data)->setOption('margin-bottom', 0);
        $pdf->setTimeout(600); // 600 seconds

        if(request()->view == 'h') {
            $pdf->setOption('page-width', $pageWidth)
                ->setOption('page-height', $pageHeight);
        }
        return $pdf->download("node.pdf");
    }
}
