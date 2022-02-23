@if('SingleSector' == $type)
    @include('partials._node_view_list', ['type' => 'sector', 'item' => $item, 'childNodeExists' => $item->subSectorSelectedField->count()])
    @if($item->subSectorSelectedField->count())
        <ul>
            @foreach($item->subSectorSelectedField as $subSector)
                <li class="parent_li sub-sector" id="parent_li_node_sub-sector_{{$subSector->id}}">
                    @include('partials._node_view_list', ['type' => 'sub-sector', 'item' => $subSector, 'childNodeExists' => $subSector->groupSelectedField->count()])

                    @if($subSector->groupSelectedField->count())
                        <ul>
                            @foreach($subSector->groupSelectedField as $group)
                                <li class="parent_li group" id="parent_li_node_group_{{$group->id}}">
                                    @include('partials._node_view_list', ['type' => 'group', 'item' => $group, 'childNodeExists' => $group->subGroupSelectedField->count()])

                                    @if($group->subGroupSelectedField->count())
                                        <ul>
                                            @foreach($group->subGroupSelectedField as $subGroup)
                                                <li class="parent_li sub-group" id="parent_li_node_sub-group_{{$subGroup->id}}">
                                                    @include('partials._node_view_list', ['type' => 'sub-group', 'item' => $subGroup, 'childNodeExists' => $subGroup->echelonSelectedField->count()])

                                                    @if($subGroup->echelonSelectedField->count())
                                                        <ul>
                                                            @foreach($subGroup->echelonSelectedField as $echelon)
                                                                <li class="parent_li echelon" id="parent_li_node_echelon_{{$echelon->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'echelon', 'item' => $echelon, 'childNodeExists' => $echelon->subEchelonSelectedField->count()])

                                                                    @if($echelon->subEchelonSelectedField->count())
                                                                        <ul>
                                                                            @foreach($echelon->subEchelonSelectedField as $subEchelon)
                                                                                <li class="parent_li sub-echelon" id="parent_li_node_sub-echelon_{{$subEchelon->id}}">
                                                                                    @include('partials._node_view_list', ['type' => 'sub-echelon', 'item' => $subEchelon, 'childNodeExists' => $subEchelon->tierSelectedField->count()])

                                                                                    @if($subEchelon->tierSelectedField->count())
                                                                                        <ul>
                                                                                            @foreach($subEchelon->tierSelectedField as $tier)
                                                                                                <li class="parent_li tier" id="parent_li_node_tier_{{$tier->id}}">
                                                                                                    @include('partials._node_view_list', ['type' => 'tier', 'item' => $tier, 'childNodeExists' => $tier->subTierSelectedField->count()])

                                                                                                    @if($tier->subTierSelectedField->count())
                                                                                                        <ul>
                                                                                                            @foreach($tier->subTierSelectedField as $subTier)
                                                                                                                <li class="parent_li sub-tier" id="parent_li_node_sub-tier_{{$subTier->id}}">
                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-tier', 'item' => $subTier, 'childNodeExists' => $subTier->layerSelectedField->count()])

                                                                                                                    @if($subTier->layerSelectedField->count())
                                                                                                                        <ul>
                                                                                                                            @foreach($subTier->layerSelectedField as $layer)
                                                                                                                                <li class="parent_li layer" id="parent_li_node_layer_{{$layer->id}}">
                                                                                                                                    @include('partials._node_view_list', ['type' => 'layer', 'item' => $layer,'childNodeExists' => $layer->subLayerSelectedField->count()])

                                                                                                                                    @if($layer->subLayerSelectedField->count())
                                                                                                                                        <ul>
                                                                                                                                            @foreach($layer->subLayerSelectedField as $subLayer)
                                                                                                                                                <li class="parent_li sub-layer" id="parent_li_node_sub-layer_{{$subLayer->id}}">
                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-layer', 'item' => $subLayer, 'childNodeExists' => $subLayer->deckSelectedField->count()])

                                                                                                                                                    @if($subLayer->deckSelectedField->count())
                                                                                                                                                        <ul>
                                                                                                                                                            @foreach($subLayer->deckSelectedField as $deck)
                                                                                                                                                                <li class="parent_li deck" id="parent_li_node_deck_{{$deck->id}}">
                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'deck', 'item' => $deck, 'childNodeExists' => $deck->subDeckSelectedField->count()])

                                                                                                                                                                    @if($deck->subDeckSelectedField->count())
                                                                                                                                                                        <ul>
                                                                                                                                                                            @foreach($deck->subDeckSelectedField as $subDeck)
                                                                                                                                                                                <li class="parent_li sub-deck" id="parent_li_node_sub-deck_{{$subDeck->id}}">
                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-deck', 'item' => $subDeck,'childNodeExists' => $subDeck->floorSelectedField->count()])

                                                                                                                                                                                    @if($subDeck->floorSelectedField->count())
                                                                                                                                                                                        <ul>
                                                                                                                                                                                            @foreach($subDeck->floorSelectedField as $floor)
                                                                                                                                                                                                <li class="parent_li floor" id="parent_li_node_floor_{{$floor->id}}">
                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'floor', 'item' => $floor, 'childNodeExists' => $floor->subFloorSelectedField->count()])

                                                                                                                                                                                                    @if($floor->subFloorSelectedField->count())
                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                            @foreach($floor->subFloorSelectedField as $subFloor)
                                                                                                                                                                                                                <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                                                                                                                                                                                                                    @if($subFloor->basementSelectedField->count())
                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                            @foreach($subFloor->basementSelectedField as $basement)
                                                                                                                                                                                                                                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                                                                                                                                                                                                                    @if($basement->subBasementSelectedField->count())
                                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                                            @foreach($basement->subBasementSelectedField as $subBasement)
                                                                                                                                                                                                                                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                                                                                                                                                                                                                    @if($subBasement->mineSelectedField->count())
                                                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                                                            @foreach($subBasement->mineSelectedField as $mine)
                                                                                                                                                                                                                                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                                                                                                                                                                                                                    @if($mine->subMineSelectedField->count())
                                                                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                                                                                                                                                                                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('Industry' == $type)
    @foreach($item->sectorSelectedField as $sector)
        <li class="parent_li sector" id="parent_li_node_sector_{{$sector->id}}">
            @include('partials._node_view_list', ['type' => 'sector', 'item' => $sector, 'childNodeExists' => $sector->subSectorSelectedField->count()])
            @if($sector->subSectorSelectedField->count())
                <ul>
                    @foreach($sector->subSectorSelectedField as $subSector)
                        <li class="parent_li sub-sector" id="parent_li_node_sub-sector_{{$subSector->id}}">
                            @include('partials._node_view_list', ['type' => 'sub-sector', 'item' => $subSector, 'childNodeExists' => $subSector->groupSelectedField->count()])

                            @if($subSector->groupSelectedField->count())
                                <ul>
                                    @foreach($subSector->groupSelectedField as $group)
                                        <li class="parent_li group" id="parent_li_node_group_{{$group->id}}">
                                            @include('partials._node_view_list', ['type' => 'group', 'item' => $group, 'childNodeExists' => $group->subGroupSelectedField->count()])

                                            @if($group->subGroupSelectedField->count())
                                                <ul>
                                                    @foreach($group->subGroupSelectedField as $subGroup)
                                                        <li class="parent_li sub-group" id="parent_li_node_sub-group_{{$subGroup->id}}">
                                                            @include('partials._node_view_list', ['type' => 'sub-group', 'item' => $subGroup, 'childNodeExists' => $subGroup->echelonSelectedField->count()])

                                                            @if($subGroup->echelonSelectedField->count())
                                                                <ul>
                                                                    @foreach($subGroup->echelonSelectedField as $echelon)
                                                                        <li class="parent_li echelon" id="parent_li_node_echelon_{{$echelon->id}}">
                                                                            @include('partials._node_view_list', ['type' => 'echelon', 'item' => $echelon, 'childNodeExists' => $echelon->subEchelonSelectedField->count()])

                                                                            @if($echelon->subEchelonSelectedField->count())
                                                                                <ul>
                                                                                    @foreach($echelon->subEchelonSelectedField as $subEchelon)
                                                                                        <li class="parent_li sub-echelon" id="parent_li_node_sub-echelon_{{$subEchelon->id}}">
                                                                                            @include('partials._node_view_list', ['type' => 'sub-echelon', 'item' => $subEchelon, 'childNodeExists' => $subEchelon->tierSelectedField->count()])

                                                                                            @if($subEchelon->tierSelectedField->count())
                                                                                                <ul>
                                                                                                    @foreach($subEchelon->tierSelectedField as $tier)
                                                                                                        <li class="parent_li tier" id="parent_li_node_tier_{{$tier->id}}">
                                                                                                            @include('partials._node_view_list', ['type' => 'tier', 'item' => $tier, 'childNodeExists' => $tier->subTierSelectedField->count()])

                                                                                                            @if($tier->subTierSelectedField->count())
                                                                                                                <ul>
                                                                                                                    @foreach($tier->subTierSelectedField as $subTier)
                                                                                                                        <li class="parent_li sub-tier" id="parent_li_node_sub-tier_{{$subTier->id}}">
                                                                                                                            @include('partials._node_view_list', ['type' => 'sub-tier', 'item' => $subTier, 'childNodeExists' => $subTier->layerSelectedField->count()])

                                                                                                                            @if($subTier->layerSelectedField->count())
                                                                                                                                <ul>
                                                                                                                                    @foreach($subTier->layerSelectedField as $layer)
                                                                                                                                        <li class="parent_li layer" id="parent_li_node_layer_{{$layer->id}}">
                                                                                                                                            @include('partials._node_view_list', ['type' => 'layer', 'item' => $layer,'childNodeExists' => $layer->subLayerSelectedField->count()])

                                                                                                                                            @if($layer->subLayerSelectedField->count())
                                                                                                                                                <ul>
                                                                                                                                                    @foreach($layer->subLayerSelectedField as $subLayer)
                                                                                                                                                        <li class="parent_li sub-layer" id="parent_li_node_sub-layer_{{$subLayer->id}}">
                                                                                                                                                            @include('partials._node_view_list', ['type' => 'sub-layer', 'item' => $subLayer, 'childNodeExists' => $subLayer->deckSelectedField->count()])

                                                                                                                                                            @if($subLayer->deckSelectedField->count())
                                                                                                                                                                <ul>
                                                                                                                                                                    @foreach($subLayer->deckSelectedField as $deck)
                                                                                                                                                                        <li class="parent_li deck" id="parent_li_node_deck_{{$deck->id}}">
                                                                                                                                                                            @include('partials._node_view_list', ['type' => 'deck', 'item' => $deck, 'childNodeExists' => $deck->subDeckSelectedField->count()])

                                                                                                                                                                            @if($deck->subDeckSelectedField->count())
                                                                                                                                                                                <ul>
                                                                                                                                                                                    @foreach($deck->subDeckSelectedField as $subDeck)
                                                                                                                                                                                        <li class="parent_li sub-deck" id="parent_li_node_sub-deck_{{$subDeck->id}}">
                                                                                                                                                                                            @include('partials._node_view_list', ['type' => 'sub-deck', 'item' => $subDeck,'childNodeExists' => $subDeck->floorSelectedField->count()])

                                                                                                                                                                                            @if($subDeck->floorSelectedField->count())
                                                                                                                                                                                                <ul>
                                                                                                                                                                                                    @foreach($subDeck->floorSelectedField as $floor)
                                                                                                                                                                                                        <li class="parent_li floor" id="parent_li_node_floor_{{$floor->id}}">
                                                                                                                                                                                                            @include('partials._node_view_list', ['type' => 'floor', 'item' => $floor, 'childNodeExists' => $floor->subFloorSelectedField->count()])

                                                                                                                                                                                                            @if($floor->subFloorSelectedField->count())
                                                                                                                                                                                                                <ul>
                                                                                                                                                                                                                    @foreach($floor->subFloorSelectedField as $subFloor)
                                                                                                                                                                                                                        <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                                                                                                                                                                                                                            @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                                                                                                                                                                                                                            @if($subFloor->basementSelectedField->count())
                                                                                                                                                                                                                                <ul>
                                                                                                                                                                                                                                    @foreach($subFloor->basementSelectedField as $basement)
                                                                                                                                                                                                                                        <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                                                                                                                                                                                                                            @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                                                                                                                                                                                                                            @if($basement->subBasementSelectedField->count())
                                                                                                                                                                                                                                                <ul>
                                                                                                                                                                                                                                                    @foreach($basement->subBasementSelectedField as $subBasement)
                                                                                                                                                                                                                                                        <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                                                                                                                                                                                                                            @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                                                                                                                                                                                                                            @if($subBasement->mineSelectedField->count())
                                                                                                                                                                                                                                                                <ul>
                                                                                                                                                                                                                                                                    @foreach($subBasement->mineSelectedField as $mine)
                                                                                                                                                                                                                                                                        <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                                                                                                                                                                                                                            @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                                                                                                                                                                                                                            @if($mine->subMineSelectedField->count())
                                                                                                                                                                                                                                                                                <ul>
                                                                                                                                                                                                                                                                                    @foreach($mine->subMineSelectedField as $subMine)
                                                                                                                                                                                                                                                                                        <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                                                                                                                                                                                                                            @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('Sector' == $type)
    @if($item->subSectorSelectedField->count())
        <ul>
            @foreach($item->subSectorSelectedField as $subSector)
                <li class="parent_li sub-sector" id="parent_li_node_sub-sector_{{$subSector->id}}">
                    @include('partials._node_view_list', ['type' => 'sub-sector', 'item' => $subSector, 'childNodeExists' => $subSector->groupSelectedField->count()])

                    @if($subSector->groupSelectedField->count())
                        <ul>
                            @foreach($subSector->groupSelectedField as $group)
                                <li class="parent_li group" id="parent_li_node_group_{{$group->id}}">
                                    @include('partials._node_view_list', ['type' => 'group', 'item' => $group, 'childNodeExists' => $group->subGroupSelectedField->count()])

                                    @if($group->subGroupSelectedField->count())
                                        <ul>
                                            @foreach($group->subGroupSelectedField as $subGroup)
                                                <li class="parent_li sub-group" id="parent_li_node_sub-group_{{$subGroup->id}}">
                                                    @include('partials._node_view_list', ['type' => 'sub-group', 'item' => $subGroup, 'childNodeExists' => $subGroup->echelonSelectedField->count()])

                                                    @if($subGroup->echelonSelectedField->count())
                                                        <ul>
                                                            @foreach($subGroup->echelonSelectedField as $echelon)
                                                                <li class="parent_li echelon" id="parent_li_node_echelon_{{$echelon->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'echelon', 'item' => $echelon, 'childNodeExists' => $echelon->subEchelonSelectedField->count()])

                                                                    @if($echelon->subEchelonSelectedField->count())
                                                                        <ul>
                                                                            @foreach($echelon->subEchelonSelectedField as $subEchelon)
                                                                                <li class="parent_li sub-echelon" id="parent_li_node_sub-echelon_{{$subEchelon->id}}">
                                                                                    @include('partials._node_view_list', ['type' => 'sub-echelon', 'item' => $subEchelon, 'childNodeExists' => $subEchelon->tierSelectedField->count()])

                                                                                    @if($subEchelon->tierSelectedField->count())
                                                                                        <ul>
                                                                                            @foreach($subEchelon->tierSelectedField as $tier)
                                                                                                <li class="parent_li tier" id="parent_li_node_tier_{{$tier->id}}">
                                                                                                    @include('partials._node_view_list', ['type' => 'tier', 'item' => $tier, 'childNodeExists' => $tier->subTierSelectedField->count()])

                                                                                                    @if($tier->subTierSelectedField->count())
                                                                                                        <ul>
                                                                                                            @foreach($tier->subTierSelectedField as $subTier)
                                                                                                                <li class="parent_li sub-tier" id="parent_li_node_sub-tier_{{$subTier->id}}">
                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-tier', 'item' => $subTier, 'childNodeExists' => $subTier->layerSelectedField->count()])

                                                                                                                    @if($subTier->layerSelectedField->count())
                                                                                                                        <ul>
                                                                                                                            @foreach($subTier->layerSelectedField as $layer)
                                                                                                                                <li class="parent_li layer" id="parent_li_node_layer_{{$layer->id}}">
                                                                                                                                    @include('partials._node_view_list', ['type' => 'layer', 'item' => $layer,'childNodeExists' => $layer->subLayerSelectedField->count()])

                                                                                                                                    @if($layer->subLayerSelectedField->count())
                                                                                                                                        <ul>
                                                                                                                                            @foreach($layer->subLayerSelectedField as $subLayer)
                                                                                                                                                <li class="parent_li sub-layer" id="parent_li_node_sub-layer_{{$subLayer->id}}">
                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-layer', 'item' => $subLayer, 'childNodeExists' => $subLayer->deckSelectedField->count()])

                                                                                                                                                    @if($subLayer->deckSelectedField->count())
                                                                                                                                                        <ul>
                                                                                                                                                            @foreach($subLayer->deckSelectedField as $deck)
                                                                                                                                                                <li class="parent_li deck" id="parent_li_node_deck_{{$deck->id}}">
                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'deck', 'item' => $deck, 'childNodeExists' => $deck->subDeckSelectedField->count()])

                                                                                                                                                                    @if($deck->subDeckSelectedField->count())
                                                                                                                                                                        <ul>
                                                                                                                                                                            @foreach($deck->subDeckSelectedField as $subDeck)
                                                                                                                                                                                <li class="parent_li sub-deck" id="parent_li_node_sub-deck_{{$subDeck->id}}">
                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-deck', 'item' => $subDeck,'childNodeExists' => $subDeck->floorSelectedField->count()])

                                                                                                                                                                                    @if($subDeck->floorSelectedField->count())
                                                                                                                                                                                        <ul>
                                                                                                                                                                                            @foreach($subDeck->floorSelectedField as $floor)
                                                                                                                                                                                                <li class="parent_li floor" id="parent_li_node_floor_{{$floor->id}}">
                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'floor', 'item' => $floor, 'childNodeExists' => $floor->subFloorSelectedField->count()])

                                                                                                                                                                                                    @if($floor->subFloorSelectedField->count())
                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                            @foreach($floor->subFloorSelectedField as $subFloor)
                                                                                                                                                                                                                <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                                                                                                                                                                                                                    @if($subFloor->basementSelectedField->count())
                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                            @foreach($subFloor->basementSelectedField as $basement)
                                                                                                                                                                                                                                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                                                                                                                                                                                                                    @if($basement->subBasementSelectedField->count())
                                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                                            @foreach($basement->subBasementSelectedField as $subBasement)
                                                                                                                                                                                                                                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                                                                                                                                                                                                                    @if($subBasement->mineSelectedField->count())
                                                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                                                            @foreach($subBasement->mineSelectedField as $mine)
                                                                                                                                                                                                                                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                                                                                                                                                                                                                    @if($mine->subMineSelectedField->count())
                                                                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                                                                                                                                                                                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('SubSector' == $type)
    @if($item->groupSelectedField->count())
        <ul>
            @foreach($item->groupSelectedField as $group)
                <li class="parent_li group" id="parent_li_node_group_{{$group->id}}">
                    @include('partials._node_view_list', ['type' => 'group', 'item' => $group, 'childNodeExists' => $group->subGroupSelectedField->count()])

                    @if($group->subGroupSelectedField->count())
                        <ul>
                            @foreach($group->subGroupSelectedField as $subGroup)
                                <li class="parent_li sub-group" id="parent_li_node_sub-group_{{$subGroup->id}}">
                                    @include('partials._node_view_list', ['type' => 'sub-group', 'item' => $subGroup, 'childNodeExists' => $subGroup->echelonSelectedField->count()])

                                    @if($subGroup->echelonSelectedField->count())
                                        <ul>
                                            @foreach($subGroup->echelonSelectedField as $echelon)
                                                <li class="parent_li echelon" id="parent_li_node_echelon_{{$echelon->id}}">
                                                    @include('partials._node_view_list', ['type' => 'echelon', 'item' => $echelon, 'childNodeExists' => $echelon->subEchelonSelectedField->count()])

                                                    @if($echelon->subEchelonSelectedField->count())
                                                        <ul>
                                                            @foreach($echelon->subEchelonSelectedField as $subEchelon)
                                                                <li class="parent_li sub-echelon" id="parent_li_node_sub-echelon_{{$subEchelon->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'sub-echelon', 'item' => $subEchelon, 'childNodeExists' => $subEchelon->tierSelectedField->count()])

                                                                    @if($subEchelon->tierSelectedField->count())
                                                                        <ul>
                                                                            @foreach($subEchelon->tierSelectedField as $tier)
                                                                                <li class="parent_li tier" id="parent_li_node_tier_{{$tier->id}}">
                                                                                    @include('partials._node_view_list', ['type' => 'tier', 'item' => $tier, 'childNodeExists' => $tier->subTierSelectedField->count()])

                                                                                    @if($tier->subTierSelectedField->count())
                                                                                        <ul>
                                                                                            @foreach($tier->subTierSelectedField as $subTier)
                                                                                                <li class="parent_li sub-tier" id="parent_li_node_sub-tier_{{$subTier->id}}">
                                                                                                    @include('partials._node_view_list', ['type' => 'sub-tier', 'item' => $subTier, 'childNodeExists' => $subTier->layerSelectedField->count()])

                                                                                                    @if($subTier->layerSelectedField->count())
                                                                                                        <ul>
                                                                                                            @foreach($subTier->layerSelectedField as $layer)
                                                                                                                <li class="parent_li layer" id="parent_li_node_layer_{{$layer->id}}">
                                                                                                                    @include('partials._node_view_list', ['type' => 'layer', 'item' => $layer,'childNodeExists' => $layer->subLayerSelectedField->count()])

                                                                                                                    @if($layer->subLayerSelectedField->count())
                                                                                                                        <ul>
                                                                                                                            @foreach($layer->subLayerSelectedField as $subLayer)
                                                                                                                                <li class="parent_li sub-layer" id="parent_li_node_sub-layer_{{$subLayer->id}}">
                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-layer', 'item' => $subLayer, 'childNodeExists' => $subLayer->deckSelectedField->count()])

                                                                                                                                    @if($subLayer->deckSelectedField->count())
                                                                                                                                        <ul>
                                                                                                                                            @foreach($subLayer->deckSelectedField as $deck)
                                                                                                                                                <li class="parent_li deck" id="parent_li_node_deck_{{$deck->id}}">
                                                                                                                                                    @include('partials._node_view_list', ['type' => 'deck', 'item' => $deck, 'childNodeExists' => $deck->subDeckSelectedField->count()])

                                                                                                                                                    @if($deck->subDeckSelectedField->count())
                                                                                                                                                        <ul>
                                                                                                                                                            @foreach($deck->subDeckSelectedField as $subDeck)
                                                                                                                                                                <li class="parent_li sub-deck" id="parent_li_node_sub-deck_{{$subDeck->id}}">
                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-deck', 'item' => $subDeck,'childNodeExists' => $subDeck->floorSelectedField->count()])

                                                                                                                                                                    @if($subDeck->floorSelectedField->count())
                                                                                                                                                                        <ul>
                                                                                                                                                                            @foreach($subDeck->floorSelectedField as $floor)
                                                                                                                                                                                <li class="parent_li floor" id="parent_li_node_floor_{{$floor->id}}">
                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'floor', 'item' => $floor, 'childNodeExists' => $floor->subFloorSelectedField->count()])

                                                                                                                                                                                    @if($floor->subFloorSelectedField->count())
                                                                                                                                                                                        <ul>
                                                                                                                                                                                            @foreach($floor->subFloorSelectedField as $subFloor)
                                                                                                                                                                                                <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                                                                                                                                                                                                    @if($subFloor->basementSelectedField->count())
                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                            @foreach($subFloor->basementSelectedField as $basement)
                                                                                                                                                                                                                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                                                                                                                                                                                                    @if($basement->subBasementSelectedField->count())
                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                            @foreach($basement->subBasementSelectedField as $subBasement)
                                                                                                                                                                                                                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                                                                                                                                                                                                    @if($subBasement->mineSelectedField->count())
                                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                                            @foreach($subBasement->mineSelectedField as $mine)
                                                                                                                                                                                                                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                                                                                                                                                                                                    @if($mine->subMineSelectedField->count())
                                                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                                                                                                                                                                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('Group' == $type)
    @if($item->subGroupSelectedField->count())
        <ul>
            @foreach($item->subGroupSelectedField as $subGroup)
                <li class="parent_li sub-group" id="parent_li_node_sub-group{{$subGroup->id}}">
                    @include('partials._node_view_list', ['type' => 'sub-group', 'item' => $subGroup, 'childNodeExists' => $subGroup->echelonSelectedField->count()])

                    @if($subGroup->echelonSelectedField->count())
                        <ul>
                            @foreach($subGroup->echelonSelectedField as $echelon)
                                <li class="parent_li echelon" id="parent_li_node_echelon_{{$echelon->id}}">
                                    @include('partials._node_view_list', ['type' => 'echelon', 'item' => $echelon, 'childNodeExists' => $echelon->subEchelonSelectedField->count()])

                                    @if($echelon->subEchelonSelectedField->count())
                                        <ul>
                                            @foreach($echelon->subEchelonSelectedField as $subEchelon)
                                                <li class="parent_li sub-echelon" id="parent_li_node_sub-echelon_{{$subEchelon->id}}">
                                                    @include('partials._node_view_list', ['type' => 'sub-echelon', 'item' => $subEchelon, 'childNodeExists' => $subEchelon->tierSelectedField->count()])

                                                    @if($subEchelon->tierSelectedField->count())
                                                        <ul>
                                                            @foreach($subEchelon->tierSelectedField as $tier)
                                                                <li class="parent_li tier" id="parent_li_node_tier_{{$tier->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'tier', 'item' => $tier, 'childNodeExists' => $tier->subTierSelectedField->count()])

                                                                    @if($tier->subTierSelectedField->count())
                                                                        <ul>
                                                                            @foreach($tier->subTierSelectedField as $subTier)
                                                                                <li class="parent_li sub-tier" id="parent_li_node_sub-tier_{{$subTier->id}}">
                                                                                    @include('partials._node_view_list', ['type' => 'sub-tier', 'item' => $subTier, 'childNodeExists' => $subTier->layerSelectedField->count()])

                                                                                    @if($subTier->layerSelectedField->count())
                                                                                        <ul>
                                                                                            @foreach($subTier->layerSelectedField as $layer)
                                                                                                <li class="parent_li layer" id="parent_li_node_layer_{{$layer->id}}">
                                                                                                    @include('partials._node_view_list', ['type' => 'layer', 'item' => $layer,'childNodeExists' => $layer->subLayerSelectedField->count()])

                                                                                                    @if($layer->subLayerSelectedField->count())
                                                                                                        <ul>
                                                                                                            @foreach($layer->subLayerSelectedField as $subLayer)
                                                                                                                <li class="parent_li sub-layer" id="parent_li_node_sub-layer_{{$subLayer->id}}">
                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-layer', 'item' => $subLayer, 'childNodeExists' => $subLayer->deckSelectedField->count()])

                                                                                                                    @if($subLayer->deckSelectedField->count())
                                                                                                                        <ul>
                                                                                                                            @foreach($subLayer->deckSelectedField as $deck)
                                                                                                                                <li class="parent_li deck" id="parent_li_node_deck_{{$deck->id}}">
                                                                                                                                    @include('partials._node_view_list', ['type' => 'deck', 'item' => $deck, 'childNodeExists' => $deck->subDeckSelectedField->count()])

                                                                                                                                    @if($deck->subDeckSelectedField->count())
                                                                                                                                        <ul>
                                                                                                                                            @foreach($deck->subDeckSelectedField as $subDeck)
                                                                                                                                                <li class="parent_li sub-deck" id="parent_li_node_sub-deck_{{$subDeck->id}}">
                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-deck', 'item' => $subDeck,'childNodeExists' => $subDeck->floorSelectedField->count()])

                                                                                                                                                    @if($subDeck->floorSelectedField->count())
                                                                                                                                                        <ul>
                                                                                                                                                            @foreach($subDeck->floorSelectedField as $floor)
                                                                                                                                                                <li class="parent_li floor" id="parent_li_node_floor_{{$floor->id}}">
                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'floor', 'item' => $floor, 'childNodeExists' => $floor->subFloorSelectedField->count()])

                                                                                                                                                                    @if($floor->subFloorSelectedField->count())
                                                                                                                                                                        <ul>
                                                                                                                                                                            @foreach($floor->subFloorSelectedField as $subFloor)
                                                                                                                                                                                <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                                                                                                                                                                                    @if($subFloor->basementSelectedField->count())
                                                                                                                                                                                        <ul>
                                                                                                                                                                                            @foreach($subFloor->basementSelectedField as $basement)
                                                                                                                                                                                                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                                                                                                                                                                                    @if($basement->subBasementSelectedField->count())
                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                            @foreach($basement->subBasementSelectedField as $subBasement)
                                                                                                                                                                                                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                                                                                                                                                                                    @if($subBasement->mineSelectedField->count())
                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                            @foreach($subBasement->mineSelectedField as $mine)
                                                                                                                                                                                                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                                                                                                                                                                                    @if($mine->subMineSelectedField->count())
                                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                                                                                                                                                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('SubGroup' == $type)
    @if($item->echelonSelectedField->count())
        <ul>
            @foreach($item->echelonSelectedField as $echelon)
                <li class="parent_li echelon" id="parent_li_node_echelon_{{$echelon->id}}">
                    @include('partials._node_view_list', ['type' => 'echelon', 'item' => $echelon, 'childNodeExists' => $echelon->subEchelonSelectedField->count()])

                    @if($echelon->subEchelonSelectedField->count())
                        <ul>
                            @foreach($echelon->subEchelonSelectedField as $subEchelon)
                                <li class="parent_li sub-echelon" id="parent_li_node_sub-echelon_{{$subEchelon->id}}">
                                    @include('partials._node_view_list', ['type' => 'sub-echelon', 'item' => $subEchelon, 'childNodeExists' => $subEchelon->tierSelectedField->count()])

                                    @if($subEchelon->tierSelectedField->count())
                                        <ul>
                                            @foreach($subEchelon->tierSelectedField as $tier)
                                                <li class="parent_li tier" id="parent_li_node_tier_{{$tier->id}}">
                                                    @include('partials._node_view_list', ['type' => 'tier', 'item' => $tier, 'childNodeExists' => $tier->subTierSelectedField->count()])

                                                    @if($tier->subTierSelectedField->count())
                                                        <ul>
                                                            @foreach($tier->subTierSelectedField as $subTier)
                                                                <li class="parent_li sub-tier" id="parent_li_node_sub-tier_{{$subTier->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'sub-tier', 'item' => $subTier, 'childNodeExists' => $subTier->layerSelectedField->count()])

                                                                    @if($subTier->layerSelectedField->count())
                                                                        <ul>
                                                                            @foreach($subTier->layerSelectedField as $layer)
                                                                                <li class="parent_li layer" id="parent_li_node_layer_{{$layer->id}}">
                                                                                    @include('partials._node_view_list', ['type' => 'layer', 'item' => $layer,'childNodeExists' => $layer->subLayerSelectedField->count()])

                                                                                    @if($layer->subLayerSelectedField->count())
                                                                                        <ul>
                                                                                            @foreach($layer->subLayerSelectedField as $subLayer)
                                                                                                <li class="parent_li sub-layer" id="parent_li_node_sub-layer_{{$subLayer->id}}">
                                                                                                    @include('partials._node_view_list', ['type' => 'sub-layer', 'item' => $subLayer, 'childNodeExists' => $subLayer->deckSelectedField->count()])

                                                                                                    @if($subLayer->deckSelectedField->count())
                                                                                                        <ul>
                                                                                                            @foreach($subLayer->deckSelectedField as $deck)
                                                                                                                <li class="parent_li deck" id="parent_li_node_deck_{{$deck->id}}">
                                                                                                                    @include('partials._node_view_list', ['type' => 'deck', 'item' => $deck, 'childNodeExists' => $deck->subDeckSelectedField->count()])

                                                                                                                    @if($deck->subDeckSelectedField->count())
                                                                                                                        <ul>
                                                                                                                            @foreach($deck->subDeckSelectedField as $subDeck)
                                                                                                                                <li class="parent_li sub-deck" id="parent_li_node_sub-deck_{{$subDeck->id}}">
                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-deck', 'item' => $subDeck,'childNodeExists' => $subDeck->floorSelectedField->count()])

                                                                                                                                    @if($subDeck->floorSelectedField->count())
                                                                                                                                        <ul>
                                                                                                                                            @foreach($subDeck->floorSelectedField as $floor)
                                                                                                                                                <li class="parent_li floor" id="parent_li_node_floor_{{$floor->id}}">
                                                                                                                                                    @include('partials._node_view_list', ['type' => 'floor', 'item' => $floor, 'childNodeExists' => $floor->subFloorSelectedField->count()])

                                                                                                                                                    @if($floor->subFloorSelectedField->count())
                                                                                                                                                        <ul>
                                                                                                                                                            @foreach($floor->subFloorSelectedField as $subFloor)
                                                                                                                                                                <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                                                                                                                                                                    @if($subFloor->basementSelectedField->count())
                                                                                                                                                                        <ul>
                                                                                                                                                                            @foreach($subFloor->basementSelectedField as $basement)
                                                                                                                                                                                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                                                                                                                                                                    @if($basement->subBasementSelectedField->count())
                                                                                                                                                                                        <ul>
                                                                                                                                                                                            @foreach($basement->subBasementSelectedField as $subBasement)
                                                                                                                                                                                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                                                                                                                                                                    @if($subBasement->mineSelectedField->count())
                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                            @foreach($subBasement->mineSelectedField as $mine)
                                                                                                                                                                                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                                                                                                                                                                    @if($mine->subMineSelectedField->count())
                                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                                                                                                                                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('Echelon' == $type)
    @if($item->subEchelonSelectedField->count())
        <ul>
            @foreach($item->subEchelonSelectedField as $subEchelon)
                <li class="parent_li sub-echelon" id="parent_li_node_sub-echelon_{{$subEchelon->id}}">
                    @include('partials._node_view_list', ['type' => 'sub-echelon', 'item' => $subEchelon, 'childNodeExists' => $subEchelon->tierSelectedField->count()])

                    @if($subEchelon->tierSelectedField->count())
                        <ul>
                            @foreach($subEchelon->tierSelectedField as $tier)
                                <li class="parent_li tier" id="parent_li_node_tier_{{$tier->id}}">
                                    @include('partials._node_view_list', ['type' => 'tier', 'item' => $tier, 'childNodeExists' => $tier->subTierSelectedField->count()])

                                    @if($tier->subTierSelectedField->count())
                                        <ul>
                                            @foreach($tier->subTierSelectedField as $subTier)
                                                <li class="parent_li sub-tier" id="parent_li_node_sub-tier_{{$subTier->id}}">
                                                    @include('partials._node_view_list', ['type' => 'sub-tier', 'item' => $subTier, 'childNodeExists' => $subTier->layerSelectedField->count()])

                                                    @if($subTier->layerSelectedField->count())
                                                        <ul>
                                                            @foreach($subTier->layerSelectedField as $layer)
                                                                <li class="parent_li layer" id="parent_li_node_layer_{{$layer->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'layer', 'item' => $layer,'childNodeExists' => $layer->subLayerSelectedField->count()])

                                                                    @if($layer->subLayerSelectedField->count())
                                                                        <ul>
                                                                            @foreach($layer->subLayerSelectedField as $subLayer)
                                                                                <li class="parent_li sub-layer" id="parent_li_node_sub-layer_{{$subLayer->id}}">
                                                                                    @include('partials._node_view_list', ['type' => 'sub-layer', 'item' => $subLayer, 'childNodeExists' => $subLayer->deckSelectedField->count()])

                                                                                    @if($subLayer->deckSelectedField->count())
                                                                                        <ul>
                                                                                            @foreach($subLayer->deckSelectedField as $deck)
                                                                                                <li class="parent_li deck" id="parent_li_node_deck_{{$deck->id}}">
                                                                                                    @include('partials._node_view_list', ['type' => 'deck', 'item' => $deck, 'childNodeExists' => $deck->subDeckSelectedField->count()])

                                                                                                    @if($deck->subDeckSelectedField->count())
                                                                                                        <ul>
                                                                                                            @foreach($deck->subDeckSelectedField as $subDeck)
                                                                                                                <li class="parent_li sub-deck" id="parent_li_node_sub-deck_{{$subDeck->id}}">
                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-deck', 'item' => $subDeck,'childNodeExists' => $subDeck->floorSelectedField->count()])

                                                                                                                    @if($subDeck->floorSelectedField->count())
                                                                                                                        <ul>
                                                                                                                            @foreach($subDeck->floorSelectedField as $floor)
                                                                                                                                <li class="parent_li floor" id="parent_li_node_floor_{{$floor->id}}">
                                                                                                                                    @include('partials._node_view_list', ['type' => 'floor', 'item' => $floor, 'childNodeExists' => $floor->subFloorSelectedField->count()])

                                                                                                                                    @if($floor->subFloorSelectedField->count())
                                                                                                                                        <ul>
                                                                                                                                            @foreach($floor->subFloorSelectedField as $subFloor)
                                                                                                                                                <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                                                                                                                                                    @if($subFloor->basementSelectedField->count())
                                                                                                                                                        <ul>
                                                                                                                                                            @foreach($subFloor->basementSelectedField as $basement)
                                                                                                                                                                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                                                                                                                                                    @if($basement->subBasementSelectedField->count())
                                                                                                                                                                        <ul>
                                                                                                                                                                            @foreach($basement->subBasementSelectedField as $subBasement)
                                                                                                                                                                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                                                                                                                                                    @if($subBasement->mineSelectedField->count())
                                                                                                                                                                                        <ul>
                                                                                                                                                                                            @foreach($subBasement->mineSelectedField as $mine)
                                                                                                                                                                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                                                                                                                                                    @if($mine->subMineSelectedField->count())
                                                                                                                                                                                                        <ul>
                                                                                                                                                                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                                                                                                                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('SubEchelon' == $type)
    @if($item->tierSelectedField->count())
        <ul>
            @foreach($item->tierSelectedField as $tier)
                <li class="parent_li tier" id="parent_li_node_tier_{{$tier->id}}">
                    @include('partials._node_view_list', ['type' => 'tier', 'item' => $tier, 'childNodeExists' => $tier->subTierSelectedField->count()])

                    @if($tier->subTierSelectedField->count())
                        <ul>
                            @foreach($tier->subTierSelectedField as $subTier)
                                <li class="parent_li sub-tier" id="parent_li_node_sub-tier_{{$subTier->id}}">
                                    @include('partials._node_view_list', ['type' => 'sub-tier', 'item' => $subTier, 'childNodeExists' => $subTier->layerSelectedField->count()])

                                    @if($subTier->layerSelectedField->count())
                                        <ul>
                                            @foreach($subTier->layerSelectedField as $layer)
                                                <li class="parent_li layer" id="parent_li_node_layer_{{$layer->id}}">
                                                    @include('partials._node_view_list', ['type' => 'layer', 'item' => $layer,'childNodeExists' => $layer->subLayerSelectedField->count()])

                                                    @if($layer->subLayerSelectedField->count())
                                                        <ul>
                                                            @foreach($layer->subLayerSelectedField as $subLayer)
                                                                <li class="parent_li sub-layer" id="parent_li_node_sub-layer_{{$subLayer->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'sub-layer', 'item' => $subLayer, 'childNodeExists' => $subLayer->deckSelectedField->count()])

                                                                    @if($subLayer->deckSelectedField->count())
                                                                        <ul>
                                                                            @foreach($subLayer->deckSelectedField as $deck)
                                                                                <li class="parent_li deck" id="parent_li_node_deck_{{$deck->id}}">
                                                                                    @include('partials._node_view_list', ['type' => 'deck', 'item' => $deck, 'childNodeExists' => $deck->subDeckSelectedField->count()])

                                                                                    @if($deck->subDeckSelectedField->count())
                                                                                        <ul>
                                                                                            @foreach($deck->subDeckSelectedField as $subDeck)
                                                                                                <li class="parent_li sub-deck" id="parent_li_node_sub-deck_{{$subDeck->id}}">
                                                                                                    @include('partials._node_view_list', ['type' => 'sub-deck', 'item' => $subDeck,'childNodeExists' => $subDeck->floorSelectedField->count()])

                                                                                                    @if($subDeck->floorSelectedField->count())
                                                                                                        <ul>
                                                                                                            @foreach($subDeck->floorSelectedField as $floor)
                                                                                                                <li class="parent_li floor" id="parent_li_node_floor_{{$floor->id}}">
                                                                                                                    @include('partials._node_view_list', ['type' => 'floor', 'item' => $floor, 'childNodeExists' => $floor->subFloorSelectedField->count()])

                                                                                                                    @if($floor->subFloorSelectedField->count())
                                                                                                                        <ul>
                                                                                                                            @foreach($floor->subFloorSelectedField as $subFloor)
                                                                                                                                <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                                                                                                                                    @if($subFloor->basementSelectedField->count())
                                                                                                                                        <ul>
                                                                                                                                            @foreach($subFloor->basementSelectedField as $basement)
                                                                                                                                                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                                                                                                                                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                                                                                                                                    @if($basement->subBasementSelectedField->count())
                                                                                                                                                        <ul>
                                                                                                                                                            @foreach($basement->subBasementSelectedField as $subBasement)
                                                                                                                                                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                                                                                                                                    @if($subBasement->mineSelectedField->count())
                                                                                                                                                                        <ul>
                                                                                                                                                                            @foreach($subBasement->mineSelectedField as $mine)
                                                                                                                                                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                                                                                                                                    @if($mine->subMineSelectedField->count())
                                                                                                                                                                                        <ul>
                                                                                                                                                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                                                                                                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('Tier' == $type)
    @if($item->subTierSelectedField->count())
        <ul>
            @foreach($item->subTierSelectedField as $subTier)
                <li class="parent_li sub-tier" id="parent_li_node_sub-tier_{{$subTier->id}}">
                    @include('partials._node_view_list', ['type' => 'sub-tier', 'item' => $subTier, 'childNodeExists' => $subTier->layerSelectedField->count()])

                    @if($subTier->layerSelectedField->count())
                        <ul>
                            @foreach($subTier->layerSelectedField as $layer)
                                <li class="parent_li layer" id="parent_li_node_layer_{{$layer->id}}">
                                    @include('partials._node_view_list', ['type' => 'layer', 'item' => $layer,'childNodeExists' => $layer->subLayerSelectedField->count()])

                                    @if($layer->subLayerSelectedField->count())
                                        <ul>
                                            @foreach($layer->subLayerSelectedField as $subLayer)
                                                <li class="parent_li sub-layer" id="parent_li_node_sub-layer_{{$subLayer->id}}">
                                                    @include('partials._node_view_list', ['type' => 'sub-layer', 'item' => $subLayer, 'childNodeExists' => $subLayer->deckSelectedField->count()])

                                                    @if($subLayer->deckSelectedField->count())
                                                        <ul>
                                                            @foreach($subLayer->deckSelectedField as $deck)
                                                                <li class="parent_li deck" id="parent_li_node_deck_{{$deck->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'deck', 'item' => $deck, 'childNodeExists' => $deck->subDeckSelectedField->count()])

                                                                    @if($deck->subDeckSelectedField->count())
                                                                        <ul>
                                                                            @foreach($deck->subDeckSelectedField as $subDeck)
                                                                                <li class="parent_li sub-deck" id="parent_li_node_sub-deck_{{$subDeck->id}}">
                                                                                    @include('partials._node_view_list', ['type' => 'sub-deck', 'item' => $subDeck,'childNodeExists' => $subDeck->floorSelectedField->count()])

                                                                                    @if($subDeck->floorSelectedField->count())
                                                                                        <ul>
                                                                                            @foreach($subDeck->floorSelectedField as $floor)
                                                                                                <li class="parent_li floor" id="parent_li_node_floor_{{$floor->id}}">
                                                                                                    @include('partials._node_view_list', ['type' => 'floor', 'item' => $floor, 'childNodeExists' => $floor->subFloorSelectedField->count()])

                                                                                                    @if($floor->subFloorSelectedField->count())
                                                                                                        <ul>
                                                                                                            @foreach($floor->subFloorSelectedField as $subFloor)
                                                                                                                <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                                                                                                                    @if($subFloor->basementSelectedField->count())
                                                                                                                        <ul>
                                                                                                                            @foreach($subFloor->basementSelectedField as $basement)
                                                                                                                                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                                                                                                                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                                                                                                                    @if($basement->subBasementSelectedField->count())
                                                                                                                                        <ul>
                                                                                                                                            @foreach($basement->subBasementSelectedField as $subBasement)
                                                                                                                                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                                                                                                                    @if($subBasement->mineSelectedField->count())
                                                                                                                                                        <ul>
                                                                                                                                                            @foreach($subBasement->mineSelectedField as $mine)
                                                                                                                                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                                                                                                                    @if($mine->subMineSelectedField->count())
                                                                                                                                                                        <ul>
                                                                                                                                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                                                                                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('SubTier' == $type)
    @if($item->layerSelectedField->count())
        <ul>
            @foreach($item->layerSelectedField as $layer)
                <li class="parent_li layer" id="parent_li_node_layer_{{$layer->id}}">
                    @include('partials._node_view_list', ['type' => 'layer', 'item' => $layer,'childNodeExists' => $layer->subLayerSelectedField->count()])

                    @if($layer->subLayerSelectedField->count())
                        <ul>
                            @foreach($layer->subLayerSelectedField as $subLayer)
                                <li class="parent_li sub-layer" id="parent_li_node_sub-layer_{{$subLayer->id}}">
                                    @include('partials._node_view_list', ['type' => 'sub-layer', 'item' => $subLayer, 'childNodeExists' => $subLayer->deckSelectedField->count()])

                                    @if($subLayer->deckSelectedField->count())
                                        <ul>
                                            @foreach($subLayer->deckSelectedField as $deck)
                                                <li class="parent_li deck" id="parent_li_node_deck_{{$deck->id}}">
                                                    @include('partials._node_view_list', ['type' => 'deck', 'item' => $deck, 'childNodeExists' => $deck->subDeckSelectedField->count()])

                                                    @if($deck->subDeckSelectedField->count())
                                                        <ul>
                                                            @foreach($deck->subDeckSelectedField as $subDeck)
                                                                <li class="parent_li sub-deck" id="parent_li_node_sub-deck_{{$subDeck->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'sub-deck', 'item' => $subDeck,'childNodeExists' => $subDeck->floorSelectedField->count()])

                                                                    @if($subDeck->floorSelectedField->count())
                                                                        <ul>
                                                                            @foreach($subDeck->floorSelectedField as $floor)
                                                                                <li class="parent_li floor" id="parent_li_node_floor_{{$floor->id}}">
                                                                                    @include('partials._node_view_list', ['type' => 'floor', 'item' => $floor, 'childNodeExists' => $floor->subFloorSelectedField->count()])

                                                                                    @if($floor->subFloorSelectedField->count())
                                                                                        <ul>
                                                                                            @foreach($floor->subFloorSelectedField as $subFloor)
                                                                                                <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                                                                                                    @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                                                                                                    @if($subFloor->basementSelectedField->count())
                                                                                                        <ul>
                                                                                                            @foreach($subFloor->basementSelectedField as $basement)
                                                                                                                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                                                                                                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                                                                                                    @if($basement->subBasementSelectedField->count())
                                                                                                                        <ul>
                                                                                                                            @foreach($basement->subBasementSelectedField as $subBasement)
                                                                                                                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                                                                                                    @if($subBasement->mineSelectedField->count())
                                                                                                                                        <ul>
                                                                                                                                            @foreach($subBasement->mineSelectedField as $mine)
                                                                                                                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                                                                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                                                                                                    @if($mine->subMineSelectedField->count())
                                                                                                                                                        <ul>
                                                                                                                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                                                                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('Layer' == $type)
    @if($item->subLayerSelectedField->count())
        <ul>
            @foreach($item->subLayerSelectedField as $subLayer)
                <li class="parent_li sub-layer" id="parent_li_node_sub-layer_{{$subLayer->id}}">
                    @include('partials._node_view_list', ['type' => 'sub-layer', 'item' => $subLayer, 'childNodeExists' => $subLayer->deckSelectedField->count()])

                    @if($subLayer->deckSelectedField->count())
                        <ul>
                            @foreach($subLayer->deckSelectedField as $deck)
                                <li class="parent_li deck" id="parent_li_node_deck_{{$deck->id}}">
                                    @include('partials._node_view_list', ['type' => 'deck', 'item' => $deck, 'childNodeExists' => $deck->subDeckSelectedField->count()])

                                    @if($deck->subDeckSelectedField->count())
                                        <ul>
                                            @foreach($deck->subDeckSelectedField as $subDeck)
                                                <li class="parent_li sub-deck" id="parent_li_node_sub-deck_{{$subDeck->id}}">
                                                    @include('partials._node_view_list', ['type' => 'sub-deck', 'item' => $subDeck,'childNodeExists' => $subDeck->floorSelectedField->count()])

                                                    @if($subDeck->floorSelectedField->count())
                                                        <ul>
                                                            @foreach($subDeck->floorSelectedField as $floor)
                                                                <li class="parent_li floor" id="parent_li_node_floor_{{$floor->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'floor', 'item' => $floor, 'childNodeExists' => $floor->subFloorSelectedField->count()])

                                                                    @if($floor->subFloorSelectedField->count())
                                                                        <ul>
                                                                            @foreach($floor->subFloorSelectedField as $subFloor)
                                                                                <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                                                                                    @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                                                                                    @if($subFloor->basementSelectedField->count())
                                                                                        <ul>
                                                                                            @foreach($subFloor->basementSelectedField as $basement)
                                                                                                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                                                                                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                                                                                    @if($basement->subBasementSelectedField->count())
                                                                                                        <ul>
                                                                                                            @foreach($basement->subBasementSelectedField as $subBasement)
                                                                                                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                                                                                    @if($subBasement->mineSelectedField->count())
                                                                                                                        <ul>
                                                                                                                            @foreach($subBasement->mineSelectedField as $mine)
                                                                                                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                                                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                                                                                    @if($mine->subMineSelectedField->count())
                                                                                                                                        <ul>
                                                                                                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                                                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('SubLayer' == $type)
    @if($item->deckSelectedField->count())
        <ul>
            @foreach($item->deckSelectedField as $deck)
                <li class="parent_li deck" id="parent_li_node_deck_{{$deck->id}}">
                    @include('partials._node_view_list', ['type' => 'deck', 'item' => $deck, 'childNodeExists' => $deck->subDeckSelectedField->count()])

                    @if($deck->subDeckSelectedField->count())
                        <ul>
                            @foreach($deck->subDeckSelectedField as $subDeck)
                                <li class="parent_li sub-deck" id="parent_li_node_sub-deck_{{$subDeck->id}}">
                                    @include('partials._node_view_list', ['type' => 'sub-deck', 'item' => $subDeck,'childNodeExists' => $subDeck->floorSelectedField->count()])

                                    @if($subDeck->floorSelectedField->count())
                                        <ul>
                                            @foreach($subDeck->floorSelectedField as $floor)
                                                <li class="parent_li floor" id="parent_li_node_floor_{{$floor->id}}">
                                                    @include('partials._node_view_list', ['type' => 'floor', 'item' => $floor, 'childNodeExists' => $floor->subFloorSelectedField->count()])

                                                    @if($floor->subFloorSelectedField->count())
                                                        <ul>
                                                            @foreach($floor->subFloorSelectedField as $subFloor)
                                                                <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                                                                    @if($subFloor->basementSelectedField->count())
                                                                        <ul>
                                                                            @foreach($subFloor->basementSelectedField as $basement)
                                                                                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                                                                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                                                                    @if($basement->subBasementSelectedField->count())
                                                                                        <ul>
                                                                                            @foreach($basement->subBasementSelectedField as $subBasement)
                                                                                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                                                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                                                                    @if($subBasement->mineSelectedField->count())
                                                                                                        <ul>
                                                                                                            @foreach($subBasement->mineSelectedField as $mine)
                                                                                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                                                                    @if($mine->subMineSelectedField->count())
                                                                                                                        <ul>
                                                                                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('Deck' == $type)
    @if($item->subDeckSelectedField->count())
        <ul>
            @foreach($item->subDeckSelectedField as $subDeck)
                <li class="parent_li sub-deck" id="parent_li_node_sub-deck_{{$subDeck->id}}">
                    @include('partials._node_view_list', ['type' => 'sub-deck', 'item' => $subDeck,'childNodeExists' => $subDeck->floorSelectedField->count()])
                    @if($subDeck->floorSelectedField->count())
                        <ul>
                            @foreach($subDeck->floorSelectedField as $floor)
                                <li class="parent_li floor" id="parent_li_node_floor_{{$floor->id}}">
                                    @include('partials._node_view_list', ['type' => 'floor', 'item' => $floor, 'childNodeExists' => $floor->subFloorSelectedField->count()])

                                    @if($floor->subFloorSelectedField->count())
                                        <ul>
                                            @foreach($floor->subFloorSelectedField as $subFloor)
                                                <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                                                    @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                                                    @if($subFloor->basementSelectedField->count())
                                                        <ul>
                                                            @foreach($subFloor->basementSelectedField as $basement)
                                                                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                                                    @if($basement->subBasementSelectedField->count())
                                                                        <ul>
                                                                            @foreach($basement->subBasementSelectedField as $subBasement)
                                                                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                                                    @if($subBasement->mineSelectedField->count())
                                                                                        <ul>
                                                                                            @foreach($subBasement->mineSelectedField as $mine)
                                                                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                                                    @if($mine->subMineSelectedField->count())
                                                                                                        <ul>
                                                                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('SubDeck' == $type)
    @if($item->floorSelectedField->count())
        <ul>
            @foreach($item->floorSelectedField as $floor)
                <li class="parent_li floor" id="parent_li_node_floor_{{$floor->id}}">
                    @include('partials._node_view_list', ['type' => 'floor', 'item' => $floor, 'childNodeExists' => $floor->subFloorSelectedField->count()])

                    @if($floor->subFloorSelectedField->count())
                        <ul>
                            @foreach($floor->subFloorSelectedField as $subFloor)
                                <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                                    @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                                    @if($subFloor->basementSelectedField->count())
                                        <ul>
                                            @foreach($subFloor->basementSelectedField as $basement)
                                                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                                    @if($basement->subBasementSelectedField->count())
                                                        <ul>
                                                            @foreach($basement->subBasementSelectedField as $subBasement)
                                                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                                    @if($subBasement->mineSelectedField->count())
                                                                        <ul>
                                                                            @foreach($subBasement->mineSelectedField as $mine)
                                                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                                    @if($mine->subMineSelectedField->count())
                                                                                        <ul>
                                                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('Floor' == $type)
    @if($item->subFloorSelectedField->count())
        <ul>
            @foreach($item->subFloorSelectedField as $subFloor)
                <li class="parent_li sub-floor" id="parent_li_node_sub-floor_{{$subFloor->id}}">
                    @include('partials._node_view_list', ['type' => 'sub-floor', 'item' => $subFloor, 'childNodeExists' => $subFloor->basementSelectedField->count()])

                    @if($subFloor->basementSelectedField->count())
                        <ul>
                            @foreach($subFloor->basementSelectedField as $basement)
                                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                                    @if($basement->subBasementSelectedField->count())
                                        <ul>
                                            @foreach($basement->subBasementSelectedField as $subBasement)
                                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                                    @if($subBasement->mineSelectedField->count())
                                                        <ul>
                                                            @foreach($subBasement->mineSelectedField as $mine)
                                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                                    @if($mine->subMineSelectedField->count())
                                                                        <ul>
                                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('SubFloor' == $type)
    @if($item->basementSelectedField->count())
        <ul>
            @foreach($item->basementSelectedField as $basement)
                <li class="parent_li basement" id="parent_li_node_basement_{{$basement->id}}">
                    @include('partials._node_view_list', ['type' => 'basement', 'item' => $basement, 'childNodeExists' => $basement->subBasementSelectedField->count()])

                    @if($basement->subBasementSelectedField->count())
                        <ul>
                            @foreach($basement->subBasementSelectedField as $subBasement)
                                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                                    @if($subBasement->mineSelectedField->count())
                                        <ul>
                                            @foreach($subBasement->mineSelectedField as $mine)
                                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                                    @if($mine->subMineSelectedField->count())
                                                        <ul>
                                                            @foreach($mine->subMineSelectedField as $subMine)
                                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('Basement' == $type)
    @if($item->subBasementSelectedField->count())
        <ul>
            @foreach($item->subBasementSelectedField as $subBasement)
                <li class="parent_li sub-basement" id="parent_li_node_sub-basement_{{$subBasement->id}}">
                    @include('partials._node_view_list', ['type' => 'sub-basement', 'item' => $subBasement, 'childNodeExists' => $subBasement->mineSelectedField->count()])

                    @if($subBasement->mineSelectedField->count())
                        <ul>
                            @foreach($subBasement->mineSelectedField as $mine)
                                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                                    @if($mine->subMineSelectedField->count())
                                        <ul>
                                            @foreach($mine->subMineSelectedField as $subMine)
                                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
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
@elseif('SubBasement' == $type)
    @if($item->mineSelectedField->count())
        <ul>
            @foreach($item->mineSelectedField as $mine)
                <li class="parent_li mine" id="parent_li_node_mine_{{$mine->id}}">
                    @include('partials._node_view_list', ['type' => 'mine', 'item' => $mine, 'childNodeExists' => $mine->subMineSelectedField->count()])

                    @if($mine->subMineSelectedField->count())
                        <ul>
                            @foreach($mine->subMineSelectedField as $subMine)
                                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
                                </li>
                            @endforeach
                        </ul>
                    @endif
                </li>
            @endforeach
        </ul>
    @endif
@elseif('Mine' == $type)
    @if($item->subMineSelectedField->count())
        <ul>
            @foreach($item->subMineSelectedField as $subMine)
                <li class="parent_li sub-mine" id="parent_li_node_sub-mine_{{$subMine->id}}">
                    @include('partials._node_view_list', ['type' => 'sub-mine', 'item' => $subMine, 'childNodeExists' => false])
                </li>
            @endforeach
        </ul>
    @endif
@endif
