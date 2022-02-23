<div class="container">
    <div id="tree" class="tree">
        <ul>
            <li>
                @php $industryCode = $industry->code; @endphp
                @include('admin.pdf._node', ['item' => $industry, 'code' => $industryCode, 'color'=>'industry-bg-color'])
                <ul>
                    @foreach($industry->sectorSelectedField as $sector)
                        <li class="parent_li sector">
                            @php $sectorCode = $industry->code. $sector->raw_code; @endphp
                            @include('admin.pdf._node', ['item' => $sector, 'code' => $sectorCode, 'color'=>'sector-bg-color'])
                            @if(count($sector->subSectorSelectedField))
                                <ul>
                                    @foreach($sector->subSectorSelectedField as $subSector)

                                        @php $subSectorCode = $industry->code. $sector->raw_code. $subSector->raw_code; @endphp
                                        <li class="parent_li sub-sector">
                                            @include('admin.pdf._node', ['item' => $subSector, 'code' => $subSectorCode, 'color'=>'sub-sector-bg-color'])
                                            @if(count($subSector->groupSelectedField))
                                                <ul>
                                                    @foreach($subSector->groupSelectedField as $group)
                                                        @php $groupCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code; @endphp
                                                        <li class="parent_li group">
                                                            @include('admin.pdf._node', ['item' => $group, 'code' => $groupCode, 'color'=>'group-bg-color'])

                                                            @if(count($group->subGroupSelectedField))
                                                                <ul>
                                                                    @foreach($group->subGroupSelectedField as $subGroup)
                                                                        @php $subGroupCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code. $subGroup->raw_code; @endphp
                                                                        <li class="parent_li sub-group">
                                                                            @include('admin.pdf._node', ['item' => $subGroup, 'code' => $subGroupCode, 'color'=>'sub-group-bg-color'])

                                                                            @if(count($subGroup->echelonSelectedField))
                                                                                <ul>
                                                                                    @foreach($subGroup->echelonSelectedField as $echelon)
                                                                                        @php $echelonCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code.
                                                                                                $subGroup->raw_code. $echelon->raw_code; @endphp
                                                                                        <li class="parent_li echelon">
                                                                                            @include('admin.pdf._node', ['item' => $echelon, 'code' => $echelonCode, 'color'=>'echelon-bg-color'])

                                                                                            @if(count($echelon->subEchelonSelectedField))
                                                                                                <ul>
                                                                                                    @foreach($echelon->subEchelonSelectedField as $subEchelon)
                                                                                                        @php $subEchelonCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code.
                                                                                                            $subGroup->raw_code. $echelon->raw_code . $subEchelon->raw_code; @endphp
                                                                                                        <li class="parent_li sub-echelon">
                                                                                                            @include('admin.pdf._node', ['item' => $subEchelon, 'code' => $subEchelonCode, 'color'=>'sub-echelon-bg-color'])

                                                                                                            @if(count($subEchelon->tierSelectedField))
                                                                                                                <ul>
                                                                                                                    @foreach($subEchelon->tierSelectedField as $tier)
                                                                                                                        @php $tierCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code.
                                                                                                                            $subGroup->raw_code. $echelon->raw_code . $subEchelon->raw_code. $tier->raw_code; @endphp
                                                                                                                        <li class="parent_li tier">
                                                                                                                            @include('admin.pdf._node', ['item' => $tier, 'code' => $tierCode, 'color'=>'tier-bg-color'])

                                                                                                                            @if(count($tier->subTierSelectedField))
                                                                                                                                <ul>
                                                                                                                                    @foreach($tier->subTierSelectedField as $subTier)
                                                                                                                                        @php $subTierCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code.
                                                                                                                                            $subGroup->raw_code. $echelon->raw_code . $subEchelon->raw_code. $tier->raw_code . $subTier->raw_code ; @endphp
                                                                                                                                        <li class="parent_li sub-tier">
                                                                                                                                            @include('admin.pdf._node', ['item' => $subTier, 'code' => $subTierCode, 'color'=>'sub-tier-bg-color'])

                                                                                                                                            @if(count($subTier->layerSelectedField))
                                                                                                                                                <ul>
                                                                                                                                                    @foreach($subTier->layerSelectedField as $layer)
                                                                                                                                                        @php $layerCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code.
                                                                                                                                                            $subGroup->raw_code. $echelon->raw_code . $subEchelon->raw_code. $tier->raw_code .
                                                                                                                                                            $subTier->raw_code . $layer->raw_code ; @endphp
                                                                                                                                                        <li class="parent_li layer">
                                                                                                                                                            @include('admin.pdf._node', ['item' => $layer, 'code' => $layerCode, 'color'=>'layer-bg-color'])

                                                                                                                                                            @if(count($layer->subLayerSelectedField))
                                                                                                                                                                <ul>
                                                                                                                                                                    @foreach($layer->subLayerSelectedField as $subLayer)
                                                                                                                                                                        @php $subLayerCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code.
                                                                                                                                                                            $subGroup->raw_code. $echelon->raw_code . $subEchelon->raw_code. $tier->raw_code .
                                                                                                                                                                            $subTier->raw_code . $layer->raw_code . $subLayer->raw_code ; @endphp
                                                                                                                                                                        <li class="parent_li sub-layer">
                                                                                                                                                                            @include('admin.pdf._node', ['item' => $subLayer, 'code' => $subLayerCode, 'color'=>'sub-layer-bg-color'])

                                                                                                                                                                            @if(count($subLayer->deckSelectedField))
                                                                                                                                                                                <ul>
                                                                                                                                                                                    @foreach($subLayer->deckSelectedField as $deck)
                                                                                                                                                                                        @php $deckCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code.
                                                                                                                                                                                        $subGroup->raw_code. $echelon->raw_code . $subEchelon->raw_code. $tier->raw_code .
                                                                                                                                                                                        $subTier->raw_code . $layer->raw_code . $subLayer->raw_code . $deck->raw_code ; @endphp
                                                                                                                                                                                        <li class="parent_li deck">
                                                                                                                                                                                            @include('admin.pdf._node', ['item' => $deck, 'code' => $deckCode, 'color'=>'deck-bg-color'])

                                                                                                                                                                                            @if(count($deck->subDeckSelectedField))
                                                                                                                                                                                                <ul>
                                                                                                                                                                                                    @foreach($deck->subDeckSelectedField as $subDeck)
                                                                                                                                                                                                        @php $subDeckCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code.
                                                                                                                                                                                                        $subGroup->raw_code. $echelon->raw_code . $subEchelon->raw_code. $tier->raw_code .
                                                                                                                                                                                                        $subTier->raw_code . $layer->raw_code . $subLayer->raw_code . $deck->raw_code  . $subDeck->raw_code ; @endphp

                                                                                                                                                                                                        <li class="parent_li sub-deck">
                                                                                                                                                                                                            @include('admin.pdf._node', ['item' => $subDeck, 'code' => $subDeckCode, 'color'=>'sub-deck-bg-color'])

                                                                                                                                                                                                            @if(count($subDeck->floorSelectedField))
                                                                                                                                                                                                                <ul>
                                                                                                                                                                                                                    @foreach($subDeck->floorSelectedField as $floor)

                                                                                                                                                                                                                        @php $floorCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code.
                                                                                                                                                                                                                        $subGroup->raw_code. $echelon->raw_code . $subEchelon->raw_code. $tier->raw_code .
                                                                                                                                                                                                                        $subTier->raw_code . $layer->raw_code . $subLayer->raw_code . $deck->raw_code  .
                                                                                                                                                                                                                        $subDeck->raw_code  . $floor->raw_code ; @endphp
                                                                                                                                                                                                                        <li class="parent_li floor">
                                                                                                                                                                                                                            @include('admin.pdf._node', ['item' => $floor , 'code' => $floorCode, 'color'=>'floor-bg-color'])

                                                                                                                                                                                                                            @if(count($floor->subFloorSelectedField))
                                                                                                                                                                                                                                <ul>
                                                                                                                                                                                                                                    @foreach($floor->subFloorSelectedField as $subFloor)
                                                                                                                                                                                                                                        @php $subFloorCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code.
                                                                                                                                                                                                                                        $subGroup->raw_code. $echelon->raw_code . $subEchelon->raw_code. $tier->raw_code .
                                                                                                                                                                                                                                        $subTier->raw_code . $layer->raw_code . $subLayer->raw_code . $deck->raw_code  .
                                                                                                                                                                                                                                        $subDeck->raw_code  . $floor->raw_code . $subFloor->raw_code ; @endphp
                                                                                                                                                                                                                                        <li class="parent_li sub-floor">
                                                                                                                                                                                                                                            @include('admin.pdf._node', ['item' => $subFloor, 'code' => $subFloorCode, 'color'=>'sub-floor-bg-color'])

                                                                                                                                                                                                                                            @if(count($subFloor->basementSelectedField))
                                                                                                                                                                                                                                                <ul>
                                                                                                                                                                                                                                                    @foreach($subFloor->basementSelectedField as $basement)
                                                                                                                                                                                                                                                        @php $basementCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code.
                                                                                                                                                                                                                                                            $subGroup->raw_code. $echelon->raw_code . $subEchelon->raw_code. $tier->raw_code .
                                                                                                                                                                                                                                                            $subTier->raw_code . $layer->raw_code . $subLayer->raw_code . $deck->raw_code  .
                                                                                                                                                                                                                                                            $subDeck->raw_code  . $floor->raw_code . $subFloor->raw_code . $basement->raw_code ; @endphp
                                                                                                                                                                                                                                                        <li class="parent_li basement">
                                                                                                                                                                                                                                                            @include('admin.pdf._node', ['item' => $basement, 'code' => $basementCode, 'color'=>'basement-bg-color'])

                                                                                                                                                                                                                                                            @if(count($basement->subBasementSelectedField))
                                                                                                                                                                                                                                                                <ul>
                                                                                                                                                                                                                                                                    @foreach($basement->subBasementSelectedField as $subBasement)
                                                                                                                                                                                                                                                                        @php $subBasementCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code.
                                                                                                                                                                                                                                                                        $subGroup->raw_code. $echelon->raw_code . $subEchelon->raw_code. $tier->raw_code .
                                                                                                                                                                                                                                                                        $subTier->raw_code . $layer->raw_code . $subLayer->raw_code . $deck->raw_code  .
                                                                                                                                                                                                                                                                        $subDeck->raw_code  . $floor->raw_code . $subFloor->raw_code . $basement->raw_code . $subBasement->raw_code ; @endphp
                                                                                                                                                                                                                                                                        <li class="parent_li sub-basement">
                                                                                                                                                                                                                                                                            @include('admin.pdf._node', ['item' => $subBasement ,  'code' => $subBasementCode, 'color'=>'sub-basement-bg-color'])

                                                                                                                                                                                                                                                                            @if(count($subBasement->mineSelectedField))
                                                                                                                                                                                                                                                                                <ul>
                                                                                                                                                                                                                                                                                    @foreach($subBasement->mineSelectedField as $mine)
                                                                                                                                                                                                                                                                                        @php $mineCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code.
                                                                                                                                                                                                                                                                                            $subGroup->raw_code. $echelon->raw_code . $subEchelon->raw_code. $tier->raw_code .
                                                                                                                                                                                                                                                                                            $subTier->raw_code . $layer->raw_code . $subLayer->raw_code . $deck->raw_code  .
                                                                                                                                                                                                                                                                                            $subDeck->raw_code  . $floor->raw_code . $subFloor->raw_code . $basement->raw_code .
                                                                                                                                                                                                                                                                                            $subBasement->raw_code . $mine->raw_code ; @endphp

                                                                                                                                                                                                                                                                                        <li class="parent_li mine">
                                                                                                                                                                                                                                                                                            @include('admin.pdf._node', ['item' => $mine , 'code' => $mineCode, 'color'=>'mine-bg-color'])

                                                                                                                                                                                                                                                                                            @if(count($mine->subMineSelectedField))
                                                                                                                                                                                                                                                                                                <ul>
                                                                                                                                                                                                                                                                                                    @foreach($mine->subMineSelectedField as $subMine)
                                                                                                                                                                                                                                                                                                        @php $subMineCode = $industry->code. $sector->raw_code. $subSector->raw_code. $group->raw_code.
                                                                                                                                                                                                                                                                                                            $subGroup->raw_code. $echelon->raw_code . $subEchelon->raw_code. $tier->raw_code .
                                                                                                                                                                                                                                                                                                            $subTier->raw_code . $layer->raw_code . $subLayer->raw_code . $deck->raw_code  .
                                                                                                                                                                                                                                                                                                            $subDeck->raw_code  . $floor->raw_code . $subFloor->raw_code . $basement->raw_code .
                                                                                                                                                                                                                                                                                                            $subBasement->raw_code . $mine->raw_code . $subMine->raw_code ; @endphp
                                                                                                                                                                                                                                                                                                        <li class="parent_li sub-mine">
                                                                                                                                                                                                                                                                                                            @include('admin.pdf._node', ['item' => $subMine, 'code' => $subMineCode, 'color'=>'sub-mine-bg-color'])
                                                                                                                                                                                                                                                                                                        </li>
                                                                                                                                                                                                                                                                                                    @endforeach
                                                                                                                                                                                                                                                                                                </ul>
                                                                                                                                                                                                                                                                                            @endif
                                                                                                                                                                                                                                                                                        </li>
                                                                                                                                                                                                                                                                                    @endforeach
                                                                                                                                                                                                                                                                                </ul>
                                                                                                                                                                                                                                                                            @endif
                                                                                                                                                                                                                                                                        </li>
                                                                                                                                                                                                                                                                    @endforeach
                                                                                                                                                                                                                                                                </ul>
                                                                                                                                                                                                                                                            @endif
                                                                                                                                                                                                                                                        </li>
                                                                                                                                                                                                                                                    @endforeach
                                                                                                                                                                                                                                                </ul>
                                                                                                                                                                                                                                            @endif
                                                                                                                                                                                                                                        </li>
                                                                                                                                                                                                                                    @endforeach
                                                                                                                                                                                                                                </ul>
                                                                                                                                                                                                                            @endif
                                                                                                                                                                                                                        </li>
                                                                                                                                                                                                                    @endforeach
                                                                                                                                                                                                                </ul>
                                                                                                                                                                                                            @endif
                                                                                                                                                                                                        </li>
                                                                                                                                                                                                    @endforeach
                                                                                                                                                                                                </ul>
                                                                                                                                                                                            @endif
                                                                                                                                                                                        </li>
                                                                                                                                                                                    @endforeach
                                                                                                                                                                                </ul>
                                                                                                                                                                            @endif
                                                                                                                                                                        </li>
                                                                                                                                                                    @endforeach
                                                                                                                                                                </ul>
                                                                                                                                                            @endif
                                                                                                                                                        </li>
                                                                                                                                                    @endforeach
                                                                                                                                                </ul>
                                                                                                                                            @endif
                                                                                                                                        </li>
                                                                                                                                    @endforeach
                                                                                                                                </ul>
                                                                                                                            @endif
                                                                                                                        </li>
                                                                                                                    @endforeach
                                                                                                                </ul>
                                                                                                            @endif
                                                                                                        </li>
                                                                                                    @endforeach
                                                                                                </ul>
                                                                                            @endif
                                                                                        </li>
                                                                                    @endforeach
                                                                                </ul>
                                                                            @endif
                                                                        </li>
                                                                    @endforeach
                                                                </ul>
                                                            @endif
                                                        </li>
                                                    @endforeach
                                                </ul>
                                            @endif
                                        </li>
                                    @endforeach
                                </ul>
                            @endif
                        </li>
                    @endforeach
                </ul>
            </li>
        </ul>
    </div>
</div>
