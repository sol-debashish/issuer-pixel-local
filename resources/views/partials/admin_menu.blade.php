<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="{{route('admin.home')}}" class="brand-link" style="background-color: #fff !important; color: #000;">
        <img src="{{asset('images/issuer_pixel.jpg')}}" alt="{{ config('app.name', 'IssuerPixel') }} Logo" class="brand-image">
        <span class="brand-text font-weight-light">{{ config('app.name', 'Issuer Pixel') }}</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="{{asset('images/no_image.jpg')}}" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <span class="d-block" style="color:#ffffff;">{{auth()->user()->name}}</span>
            </div>
        </div>

        @php
            $dashboardRoute = [
                            'admin.home',
                        ];
            $industryRoute = [
                            'admin.industry.index',
                            'admin.industry.create',
                            'admin.industry.edit',
                            'admin.industry.node',
                        ];
            $userRoute = [
                        'admin.users.index',
                        'admin.users.create',
                        'admin.users.edit',
                        'admin.users.show',
                        'admin.users.reset.password'
                    ];
            $issuersRoute = [
                        'admin.users.issuers',
                        'admin.issuers.media.file',
                        'admin.users.reset.issuer.password'
                    ];
             $crossIndexRoute = [
                        'admin.cross.index.home',
                    ];
             $feedbackRoute = [
                        'admin.feedback.index',
                    ];

            $archivedIndustryRoute = [
                            'admin.industry.archived',
                        ];
            $snapshotRoute = [
                            'admin.snapshot.index',
                        ];
            $auditLogRoute = [
                            'admin.audit.log.index',
                        ];
            $reportRoute = [
                            'admin.get.time.spant.report',
                        ];
            $nodeStatistics = [
                            'admin.industry.node.statistics',
                        ];
            $nodeLog = [
                            'admin.industry.node.log',
                        ];
            $subjectSuggestionsRoute = [
                            'admin.media.subject.suggestion',
                            'admin.media.subject.suggestion.show',
                        ];
            $helpAndSupportRoute = [
                            'admin.help.and.support',
                            'admin.help.and.support.show',
                        ];
            $hierarchySuggestionsRoute = [
                            'admin.hierarchy.suggestion',
                        ];
            $subscriberRoute = [
                        'admin.subscriber.index',
                    ];
            $bulletinRoute = [
                'admin.bulletins.index',
                'admin.bulletins.create',
                'admin.bulletins.edit'
            ];
            $newsRoute = [
                'admin.news.index',
                'admin.news.show'
            ];
            $twitterTrendsRoute = [
                'admin.twitter.trends.index'
            ];

        @endphp
        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->
                <li class="nav-item">
                    <a href="{{route('admin.home')}}" class="nav-link @if(in_array(Request::route()->getName(), $dashboardRoute)) active @endif">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>Dashboard</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{route('admin.industry.index')}}" class="nav-link industry-bg-color {{--@if(in_array(Request::route()->getName(), $industryRoute)) active @endif--}}">
                        <i class="far fa-dot-circle nav-icon"></i>
                        <p>Industry</p>
                    </a>
                </li>

                @if(in_array(Request::route()->getName(), ['admin.industry.node']))
                    <ul class="industry-nodes-menus">
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create" data-iid="{{$industry->id}}" data-type="sector" class="nav-link add-sector sector-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Sector</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-sector"  class="nav-link  add-sub-sector sub-sector-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Sub Sector</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="group"  class="nav-link  add-group group-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Group</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-group"  class="nav-link add-sub-group sub-group-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Sub Group</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="echelon"  class="nav-link add-echelon echelon-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Echelon</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-echelon" class="nav-link add-sub-echelon sub-echelon-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Sub Echelon</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="tier"  class="nav-link  add-tier tier-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Tier</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-tier"  class="nav-link  add-sub-tier sub-tier-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Sub Tier</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="layer"  class="nav-link add-layer layer-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Layer</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-layer"  class="nav-link add-sub-layer sub-layer-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Sub Layer</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="deck"  class="nav-link add-deck deck-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Deck</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-deck" class="nav-link  add-sub-deck sub-deck-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Sub Deck</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}"  data-action="create"  data-iid="{{$industry->id}}"  data-type="floor" class="nav-link add-floor floor-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Floor</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-floor" class="nav-link add-sub-floor sub-floor-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Sub Floor</p>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="basement" class="nav-link add-basement basement-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Basement</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-basement" class="nav-link add-sub-basement sub-basement-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Sub Basement</p>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="mine" class="nav-link add-mine mine-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Mine</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-mine" class="nav-link add-sub-mine sub-mine-bg-color">
                                <i class="fas fa-circle nav-icon"></i>
                                <p>Add Sub Mine</p>
                            </a>
                        </li>
                    </ul>
                @endif

                @if(!auth()->user()->isCustomerSupport())
                    <li class="nav-item has-treeview  @if(in_array(Request::route()->getName(), $nodeStatistics) || in_array(Request::route()->getName(), $nodeLog))  menu-open @endif">
                        <a href="#" class="nav-link  @if(in_array(Request::route()->getName(), $nodeStatistics) || in_array(Request::route()->getName(), $nodeLog)) active @endif">
                            <i class="fas fa-chart-area nav-icon"></i>
                            <p>Node Statistics & Log</p>
                            <i class="right fas fa-angle-left"></i>
                        </a>
                        <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route("admin.industry.node.statistics") }}" class="nav-link @if(in_array(Request::route()->getName(), $nodeStatistics)) active @endif">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Statistics</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route("admin.industry.node.log") }}" class="nav-link @if(in_array(Request::route()->getName(), $nodeLog)) active @endif">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Log</p>
                            </a>
                        </li>
                        </ul>
                    </li>
                @endif


                <li class="nav-item has-treeview  @if(in_array(Request::route()->getName(), $hierarchySuggestionsRoute) || in_array(Request::route()->getName(), $subjectSuggestionsRoute))  menu-open @endif">
                    <a href="#" class="nav-link  @if(in_array(Request::route()->getName(), $hierarchySuggestionsRoute) || in_array(Request::route()->getName(), $subjectSuggestionsRoute)) active @endif">
                        <i class="fas fa-hand-holding nav-icon"></i>
                        <p>Suggestions</p>
                        <i class="right fas fa-angle-left"></i>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route("admin.hierarchy.suggestion") }}" class="nav-link @if(in_array(Request::route()->getName(), $hierarchySuggestionsRoute)) active @endif">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Hierarchy Suggestions</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route("admin.media.subject.suggestion") }}" class="nav-link @if(in_array(Request::route()->getName(), $subjectSuggestionsRoute)) active @endif">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Subject Suggestions</p>
                            </a>
                        </li>
                    </ul>
                </li>



                @if(!auth()->user()->isCustomerSupport())
                <li class="nav-item">
                    <a href="{{route('admin.industry.archived')}}" class="nav-link @if(in_array(Request::route()->getName(), $archivedIndustryRoute)) active @endif">
                        <i class="nav-icon fas fa-file-archive"></i>
                        <p>Archived Industries</p>
                    </a>
                </li>
                @endif

                @if(!auth()->user()->isDataAnalysis())
                <li class="nav-item">
                    <a href="{{ route("admin.users.index") }}" class="nav-link @if(in_array(Request::route()->getName(), $userRoute)) active @endif">
                        <i class="far fa-user nav-icon"></i>
                        <p>System Users</p>
                    </a>
                </li>
                @endif

                @if(auth()->user()->isAdminOrSuperAdminOrDataAnalysisOrCustomerSupport())
                <li class="nav-item">
                    <a href="{{ route("admin.users.issuers") }}" class="nav-link @if(in_array(Request::route()->getName(), $issuersRoute)) active @endif">
                        <i class="far fa-user nav-icon"></i>
                        <p>Issuers</p>
                    </a>
                </li>
                @endif

                @if(auth()->user()->isAdminOrSuperAdminOrCustomerSupport())
                <li class="nav-item">
                    <a href="{{ route("admin.feedback.index") }}" class="nav-link @if(in_array(Request::route()->getName(), $feedbackRoute)) active @endif">
                        <i class="far fa-comment-alt  nav-icon"></i>
                        <p>Feedback</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route("admin.audit.log.index") }}" class="nav-link @if(in_array(Request::route()->getName(), $auditLogRoute)) active @endif">
                        <i class="fas fa-clipboard-list nav-icon"></i>
                        <p>Audit Log</p>
                    </a>
                </li>
                @endif

                @if(auth()->user()->IsSuperAdminOrAdminOrViewOnlyAdminOrCustomerSupport())
                    <li class="nav-item">
                        <a href="{{ route("admin.help.and.support") }}" class="nav-link @if(in_array(Request::route()->getName(), $helpAndSupportRoute)) active @endif">
                            <i class="fas fa-ticket-alt nav-icon"></i>
                            <p>Help and support</p>
                        </a>
                    </li>
                @endif

                @if(auth()->user()->isAdminOrSuperAdmin())
                <li class="nav-item">
                    <a href="{{ route("admin.cross.index.home") }}" class="nav-link @if(in_array(Request::route()->getName(), $crossIndexRoute)) active @endif">
                        <i class="fas fa-search nav-icon"></i>
                        <p>Cross-Index Search</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{ route("admin.snapshot.index") }}" class="nav-link @if(in_array(Request::route()->getName(), $snapshotRoute)) active @endif">
                        <i class="fas fa-database nav-icon"></i>
                        <p>Node Data Snapshot</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('admin.get.time.spant.report') }}" class="nav-link @if(in_array(Request::route()->getName(), $reportRoute)) active @endif">
                        <i class="far fa-hourglass nav-icon"></i>
                        <p>Time Spent Report</p>
                    </a>
                </li>
                @endif

                <li class="nav-item">
                    <a href="{{ route("admin.subscriber.index") }}" class="nav-link @if(in_array(Request::route()->getName(), $subscriberRoute)) active @endif">
                        <i class="fa fa-users nav-icon"></i>
                        <p>Subscribers</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{ route("admin.bulletins.index") }}" class="nav-link @if(in_array(Request::route()->getName(), $bulletinRoute)) active @endif">
                        <i class="fas fa-bullhorn nav-icon"></i>
                        <p>Bulletins</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{ route("admin.news.index") }}" class="nav-link @if(in_array(Request::route()->getName(), $newsRoute)) active @endif">
                        <i class="fas fa-newspaper nav-icon"></i>
                        <p>News Archive</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{ route("admin.twitter.trends.index") }}" class="nav-link @if(in_array(Request::route()->getName(), $twitterTrendsRoute)) active @endif">
                        <i class="fas fa-tags nav-icon"></i>
                        <p>Trending Tags</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{ route("admin.change.password") }}" class="nav-link @if(in_array(Request::route()->getName(), ["admin.change.password"])) active @endif">
                        <i class="fas fa-key nav-icon"></i>
                        <p>Change Password</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="javascript:;;" class="nav-link" onclick="event.preventDefault(); document.getElementById('logoutform').submit();">
                        <i class="nav-icon fas fa-sign-out-alt"></i>
                        <p>Logout</p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
</aside>
