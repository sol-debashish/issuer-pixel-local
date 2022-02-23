@extends('layouts.admin')
@section('content')
    <!-- Content Header (Page header) -->
    @include('partials.admin_breadcrumb', ['header_title' => 'Dashboard',
                                            'breadcrumbs' => [
                                                'Dashboard',
                                            ]
                                        ])

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="dashboard-content row">
                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-warning">
                        <div class="inner">
                            <h3>{{$dashboardStatistics->total_issuer}}</h3>

                            <p>Total issuers on platform</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-person-add"></i>
                        </div>

                    </div>
                </div>

                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-success">
                        <div class="inner">
                            <h3>{{$dashboardStatistics->last_signup}}</h3>

                            <p>Issuer signups in last 7 days</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-stats-bars"></i>
                        </div>

                    </div>
                </div>
                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-danger">
                        <div class="inner">
                            <h3>{{ number_format((float) $dashboardStatistics->login_count, 2, '.', '')}}</h3>
                            <p>Average logons per day</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-key"></i>
                        </div>

                    </div>
                </div>
                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-fuchsia">
                        <div class="inner">
                            <h3>{{ number_format((float) $dashboardStatistics->avg_time_span, 2, '.', '')}}(min)</h3>

                            <p>Average time spent</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-clock"></i>
                        </div>

                    </div>
                </div>

                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-gradient-gray">
                        <div class="inner">
                            <h3>{{ number_format((float)$dashboardStatistics->total_video/$dashboardStatistics->total_issuer, 2, '.', '')}}</h3>

                            <p>Average number of videos per issuer</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-videocamera"></i>
                        </div>

                    </div>
                </div>
                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-info">
                        <div class="inner">
                            <h3>{{number_format((float)$dashboardStatistics->total_audio/ $dashboardStatistics->total_issuer, 2, '.', '')}}</h3>
                            <p>Average number of Audio files per issuer</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-music-note"></i>
                        </div>

                    </div>
                </div>
                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-gradient-green">
                        <div class="inner">
                            <h3>0</h3>
                            <p>Average number of documents per issuer</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-document"></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
