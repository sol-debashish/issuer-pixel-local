<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UsersController;

Route::namespace('Admin')->group(function () {

    // Authentication Routes...
    Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
    Route::post('login', 'Auth\LoginController@login');


    // Password Reset Routes...
    Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

    Route::middleware('is_administrator')->group(function () {
        Route::get('/', 'IndexController@dashboard')->name('home');

        Route::get('industry', 'IndustryController@index')->name('industry.index');

        Route::get('industry/{industry}', 'IndustryController@show')->name('industry.show');

        Route::get('industry/{industry}/edit', 'IndustryController@edit')->name('industry.edit');
        Route::put('industry/{industry}', 'IndustryController@update')->name('industry.update');

        Route::get('industry_node/{industry}', 'IndustryController@node')->name('industry.node');

        Route::get('archived-industry', 'IndustryController@archived')->name('industry.archived');
        Route::post('active-industry', 'IndustryController@active')->name('industry.active');

        Route::get('search-node-tree', 'AjaxController@nodeTreeSearch')->name('search.node.tree');
        Route::get('all-cross-node-category', 'AjaxController@getAllCrossNodeCategory')->name('all.cross.node.category');

        Route::post('update-node', 'AjaxController@updateNode')->name('update.node');

        Route::get('change-password', 'SettingController@changePassword')->name('change.password');
        Route::post('change-password', 'SettingController@storeChangePassword')->name('store.change.password');
        Route::post('logout', 'Auth\LoginController@logout')->name('logout');

        Route::get('node-pdf-generate/{industry}', 'PdfController@nodeGenerate')->name('node.pdf.generate');

        Route::post('industry', 'IndustryController@store')->name('industry.store');
        Route::post('create-node', 'AjaxController@createNode')->name('create.node');
        Route::post('delete-node', 'AjaxController@deleteNode')->name('delete.node');
        Route::post('delete-cross-index', 'AjaxController@deleteCrossIndex')->name('delete.cross.index');
        Route::post('delete-node-warp', 'AjaxController@deleteNodeWarp')->name('delete.node.warp');
        Route::post('industry_duplicate', 'IndustryController@duplicate')->name('industry.duplicate');
        Route::post('node-duplicate-industry', 'IndustryController@nodeDuplicateAsIndustry')->name('node.duplicate.as.industry');
        Route::post('node-move', 'IndustryController@nodeMove')->name('node.move');
        Route::post('node-crossindex', 'IndustryController@nodeCrossindex')->name('node.crossindex');
        Route::post('node-warp', 'IndustryController@nodeWarp')->name('node.nodewarp');
        Route::post('node-issuer', 'IndustryController@addIssuer')->name('node.issuer');
        Route::post('update-node-issuer', 'IndustryController@updateIssuer')->name('update.node.issuer');
        Route::post('delete-node-issuer', 'IndustryController@deleteIssuer')->name('delete.node.issuer');

        Route::post('manual-snapshot', 'SnapshotController@storeManualSnapshot')->name('manual.snapshot');
        Route::get('manual-snapshot', 'SnapshotController@getManualSnapshot')->name('get.manual.snapshot');
        Route::post('restore-manual-snapshot', 'SnapshotController@restoreManualSnapshot')->name('restore.manual.snapshot');
        Route::post('delete-manual-snapshot', 'SnapshotController@deleteManualSnapshot')->name('delete.manual.snapshot');

        Route::get('get-node-related-data', 'AjaxController@getNodeRelatedData')->name('get.node.related.data');
        Route::get('get-node-edit-data', 'AjaxController@getNodeEditData')->name('get.node.edit.data');
        Route::get('get-child-node-copy-data', 'AjaxController@getChildNodeData')->name('get.child.node.copy.data');
        Route::post('child-node-copy', 'IndustryController@childNodeCopy')->name('child.node.copy');
        Route::get('get-cross-list-data', 'AjaxController@getCrossIndexListData')->name('get.cross.list.data');
        Route::get('get-node-warp-list-data', 'AjaxController@getNodeWarpListData')->name('get.node.warp.list.data');
        Route::get('get-allnode-counter-data', 'AjaxController@getAllNodeCounterListData')->name('get.allnode.counter.data');

        Route::get('industry-node-statistics', 'IndustryController@nodeStatistics')->name('industry.node.statistics');
        Route::get('industry-node-log', 'IndustryController@nodeLog')->name('industry.node.log');

        Route::get('hierarchy-suggestion', 'SuggestionController@hierarchySuggestion')->name('hierarchy.suggestion');
        Route::get('hierarchy-suggestion/{suggestion}', 'SuggestionController@hierarchyShow')->name('hierarchy.suggestion.show');
        Route::post('hierarchy-suggestion-accept-reject', 'SuggestionController@acceptRejectHierarchySuggestion')->name('hiearchy.suggestion.accept.reject');

        Route::get('media-subject-suggestion', 'SuggestionController@mediaSubjectSuggestion')->name('media.subject.suggestion');
        Route::get('media-subject-suggestion/{suggestion}', 'SuggestionController@mediaSubjectShow')->name('media.subject.suggestion.show');
        Route::post('media-subject-suggestion-accept-reject', 'SuggestionController@acceptRejectSubjectSuggestion')->name('media.subject.suggestion.accept.reject');

        Route::get('issuers', 'UsersController@issuers')->name('users.issuers');
        Route::resource('bulletins', 'BulletinController');
        Route::post('delete-bulletin', 'BulletinController@deleteBulletin')->name('bulletins.delete');

        Route::post('node-keyword', 'NodeKeywordController@store')->name('create.node.keyword');
        Route::get('node-keyword', 'NodeKeywordController@getNodeKeyword')->name('get.node.keyword');
        Route::post('delete-node-keyword', 'NodeKeywordController@deleteNodeKeyword')->name('delete.node.keyword');

        Route::get('news', 'NewsController@index')->name('news.index');
        Route::post('associate-node', 'NewsController@associateNode')->name('news.associateNode');
        Route::get('association-details', 'NewsController@showAssociationDetails')->name('news.show');

        Route::get('twitter-trends', 'TwitterTrendsController@index')->name('twitter.trends.index');

        Route::middleware('is_super_or_view_only_or_full_admin_or_customer_support')->group(function () {

            Route::resource('users', 'UsersController');
            Route::get('help-and-support', 'HelpAndSupportController@index')->name('help.and.support');
            Route::get('help-and-support/{support}', 'HelpAndSupportController@show')->name('help.and.support.show');
            Route::post('help-and-support-status-change', 'HelpAndSupportController@statusChange')->name('help.and.support.status.change');

            Route::middleware('is_super_or_full_admin_or_customer_support')->group(function () {

                Route::delete('issuer/{issuer}', 'UsersController@destroyIssuer')->name('users.delete.issuer');
                Route::post('issuer/{issuer}', 'UsersController@deactiveIssuer')->name('users.deactive.issuer');
                Route::get('issuer-media-file/{user}', 'IssuersController@mediaFiles')->name('issuers.media.file');
                Route::get('issuer-questionnaire-admin/{user}/{type}/{file_id?}', 'IssuersController@issuerQuestionnaireAdmin')->name('issuer.questionnaire.admin');
                Route::get('feedback', 'FeedbackController@index')->name('feedback.index');
                Route::get('subscriber', 'SubscriberController@index')->name('subscriber.index');
                Route::get('feedback/{feedback}', 'FeedbackController@show')->name('feedback.show');
                Route::get('audit-log', 'AuditLogController@index')->name('audit.log.index');
                Route::post('delete-audit-log', 'AuditLogController@destroy')->name('audit.log.delete');
                Route::get('export-audit-log', 'AuditLogController@export')->name('audit.log.export');
                Route::get('reset-issuer-password/{user}', 'UsersController@resetIssuerPassword')->name('users.reset.issuer.password');
                Route::post('reset-issuer-password/{user}', 'UsersController@storeResetIssuerPassword')->name('users.store.reset.issuer.password');

                Route::middleware('is_admin')->group(function () {
                    Route::delete('delete-issuer/{issuer}', 'UsersController@deactiveIssuer')->name('users.deactive.issuer');
                    Route::get('reset-user-password/{user}', 'UsersController@resetUserPassword')->name('users.reset.password');
                    Route::post('reset-user-password/{user}', 'UsersController@storeResetUserPassword')->name('users.store.reset.password');
                    Route::get('snapshot', 'SnapshotController@index')->name('snapshot.index');
                    Route::get('snapshot-download/{filename}/{extension}', 'SnapshotController@download')->name('snapshot.download');
                    Route::post('snapshot-restore', 'SnapshotController@restore')->name('snapshot.restore');

                    Route::get('get-time-spant-report', 'ReportController@getTimeSpant')->name('get.time.spant.report');

                    Route::resource('crossIndex', 'CrossIndexController');
                    Route::get('cross-index', 'CrossIndexController@home')->name('cross.index.home');
                    Route::post('mass-cross-node-category', 'CrossIndexController@getMassCrossNodeCategory')->name('mass.cross.node.category');
                    Route::post('add-mass-cross-nodes', 'CrossIndexController@storeMassCrossNodes')->name('crossIndex.add-mass-cross-nodes');
                    Route::post('industry-publish-unpublish', 'IndustryController@publishUnpublish')->name('industry.publish.unpublish');
                });
            });


        });
        Route::get('time-spent-on-node', 'AjaxController@timeSpentStore')->name('time.spent.on.node');
    });
    Route::post('get-child-node', 'AjaxController@getChildNode')->name('get.child.node')->middleware('throttle:100000,1');

});


//Auth::routes();
//
//Route::get('/home', 'HomeController@index')->name('home');
