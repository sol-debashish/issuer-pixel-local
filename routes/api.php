<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::namespace('Api\V1')->group(function () {

    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::post('password/email', 'AuthController@forgot');
    Route::post('email-exists-check', 'AuthController@emailExistsCheck');
    Route::post('company-name-exists-check', 'AuthController@companyNameExistsCheck');
    Route::post('password/reset', 'AuthController@reset')->name('password.reset');

    Route::post('contact', 'AuthController@contact');

    Route::get('country-list', 'AjaxController@getCountries');
    Route::get('get-state-list/{country_id}', 'AjaxController@getStates');
    Route::get('get-state-or-province-status/{country_id}', 'AjaxController@getStatesOrProvinceCondition');
    Route::get('get-city-list/{state_id}', 'AjaxController@getCities');
    Route::get('get-esg-score-list', 'AjaxController@getEsgScoreList');
    Route::get('get-esg-rating-list', 'AjaxController@getEsgRatingList');
    Route::get('get-owned-business-list', 'AjaxController@getOwnBusinessList');

    Route::get('industry-list', 'AjaxController@getIndustries');

    Route::get('get-entity-type/{country_id}', 'AjaxController@getEntityType');
    Route::get('get-private-public-company-type', 'AjaxController@getPrivatePublicCompanyType');
    Route::get('get-base-currency-list', 'AjaxController@getBaseCurrencyList');
    Route::get('get-legal-entity-type-list', 'AjaxController@getLegalEntityTypeList');
    Route::get('get-trading-and-reporting-status-list/{type}', 'AjaxController@getTreadingAndReportingStatusList');
    Route::get('get-all-trading-and-reporting-status-list', 'AjaxController@getAllTreadingAndReportingStatusList');
    Route::get('get-publicly-traded-company-type-list', 'AjaxController@getPubliclyTradedCompanyTypeList');
    Route::get('get-exchange-traded-list', 'AjaxController@getExchangeTradedList');
    Route::get('get-financing-type-list', 'AjaxController@getFinancingTypeList');
    Route::get('get-patent-type-list', 'AjaxController@getPatentTypeList');
    Route::get('get-employee-number-list', 'AjaxController@getEmployeeNumberList');
    Route::get('get-shareholder-number-list', 'AjaxController@getShareholderNumberList');
    Route::get('get-research-coverage-type-list', 'AjaxController@getResearchCoverageTypeList');
    Route::get('get-analyst-rating-list', 'AjaxController@getAnalystRatingList');
    Route::get('get-shared-community-research-platform-list', 'AjaxController@getSharedCommunityResearchPlatformList');
    Route::get('get-upload-related-document-type-list', 'AjaxController@getUploadRelatedDocumentTypeList');

    Route::get('get-node-list/{id}/{type}/{parent_type}', 'AjaxController@getNodeList');
    Route::get('get-media-sub-type/{type}', 'AjaxController@getSubMediaType');
    Route::get('get-subject-type/{type}', 'AjaxController@getSubjectType');
    Route::get('get-media-cover-type/{type}', 'AjaxController@getMediaCoverType');
    Route::get('get-media-presenter-type/{type}', 'AjaxController@getMediaPresenterType');
    Route::get('get-podcast-guest', 'AjaxController@getPodcastGuestList');

    Route::get('/youtube-video', 'VideoController@getYoutubeVideo');

    /*profile questionnaire related api*/
    Route::post('store-questionnaire/{profileInfo}', 'ProfileController@storeQuestionnaire');
    Route::get('get-stepwise-data/{id}/{profileInfo}', 'ProfileController@getStepwiseCompanyData');
    Route::get('get-completed-step/{profileInfo}', 'ProfileController@getCompletedStep');
//    Route::get('get-social-media-category', 'AjaxController@getSocialMediaCategories');
    Route::get('get-intelletual-property-list', 'AjaxController@getIntelletualPropertyList');
//    Route::post('unauth-suggestion-request', 'AjaxController@unAuthSuggestionRequest');
    Route::post('add-multiple-node', 'AjaxController@addMultipleNode');
    Route::post('update-hierarchy-node', 'AjaxController@updateHierarchyNode');
    Route::get('get-multiple-node', 'AjaxController@getMultipleNode');
    Route::post('skip-and-go-dashboard', 'AuthController@loginFromQuestionneire');
    /*end profile questionnire related api*/

    /*feedback related api*/
    Route::post('feedback', 'FeedbackController@store');
    /*feedback related api*/

    /*Subscribe related api*/
    Route::post('subscribe', 'SubscribeController@store');
    /*Subscribe related api*/

    /* video/audio details page share related api */
    Route::get('get-video-info', 'VideoController@getVideoDetailsInfo');
    Route::get('get-other-video-info', 'VideoController@getOtherVideoByCompany');

    Route::get('get-audio-info', 'AudioController@getAudioDetailsInfo');
    Route::get('get-other-audio-info', 'AudioController@getOtherAudioByCompany');

    Route::get('get-media-categorization-lookup-for-collapse', 'AjaxController@mediaCategorizationLookupForCollapse');
    /* end video/audio details page share related api */

    /* company page share related api */
    Route::get('company-bio', 'CompanyController@companyBio');
    Route::get('company-bio-video', 'VideoController@getCompanyBioVideo');
    Route::get('company-bio-audio', 'AudioController@getCompanyBioAudio');
    Route::get('company-bio-multiple-node/{slug}', 'AjaxController@getCompanyBioMultipleNode');

    /* screener page related api */
    Route::get('screener-data', 'ScreenerController@index');
    Route::get('new-screener-data', 'ScreenerController@newScreener');
    Route::get('get-all-social-media-platform', 'AjaxController@getAllSocialMediaPlatform');
    Route::get('leadership-and-goverrance-roles', 'AjaxController@getLeadershipAndGovernanceRoles');


    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/user', function (Request $request){
            return $request->user();
        });

        Route::post('logout', 'AuthController@logout');
        Route::post('back-to-admin', 'AuthController@backToAdmin');

        Route::post('taxonomy-data-store', 'AjaxController@taxonomyDataStore');

        Route::get('/audio', 'AudioController@index');
        Route::get('/audio-step1/{id}/edit', 'AudioController@step1Edit');
        Route::put('/audio-step1/{id}', 'AudioController@step1Update');
        Route::get('/audio-step2/{id}/edit', 'AudioController@step2Edit');
        Route::put('/audio-step2/{id}', 'AudioController@step2Update');
        Route::put('update-audio-info/{id}', 'AudioController@infoUpdate');

        Route::post('suggestion-request', 'AjaxController@suggestionRequest');

        Route::get('dacast-video', 'VideoController@getDacastVideo');

        Route::get('video-step1/{id}/edit', 'VideoController@step1Edit');
        Route::put('video-step1/{id}', 'VideoController@step1Update');
        Route::get('dacast-video-step2/{id}/edit', 'VideoController@step2Edit');
        Route::put('dacast-video-step2/{id}', 'VideoController@step2Update');
        Route::put('update-video-info/{id}', 'VideoController@infoUpdate');
        Route::post('update-video-thumb/{id}', 'VideoController@uploadThumbnail');

        Route::get('company-questionnaire-data/{step}', 'ProfileController@companyQuestionnaireData');
        Route::get('company-questionnaire-data/{step}/edit', 'ProfileController@companyQuestionnaireData');
        Route::put('company-questionnaire-data/{step}', 'ProfileController@companyQuestionnaireDataUpdate');
        Route::post('company-questionnaire-data/{step}', 'ProfileController@companyQuestionnaireDataUpdate');
        Route::delete('delete-lag-member/{member}', 'ProfileController@destroyLagMember');

        Route::delete('delete-media-file/{file}', 'AjaxController@destroyMediaFile');
        Route::post('change-media-file-status', 'AjaxController@changeMediaFileStatus');

        Route::get('general-information', 'ProfileController@generalInformationEdit');
        Route::put('general-information', 'ProfileController@generalInformationUpdate');
        Route::put('update-password', 'ProfileController@PasswordUpdate');

        Route::post('hierarchy-completed-status', 'CompanyController@hierarchyCompletedStatusChange');
        Route::get('hierarchy-completed-status', 'CompanyController@hierarchyCompletedStatus');
        Route::get('profile-completed-status', 'CompanyController@profileCompletedStatus');
        Route::post('company-photo-upload', 'CompanyController@photoUpload');
        Route::post('company-icon-upload', 'CompanyController@iconUpload');
        Route::get('social-media-platform', 'AjaxController@getSocialMediaPlatform');

        /* audio/video hierarchy related api*/
        Route::get('company-hierarchy-data', 'CompanyController@getHierarchyData');
        Route::post('add-audio-video-multiple-node', 'AjaxController@addAudioVideoMultipleNode');
        Route::post('update-audio-video-node', 'AjaxController@updateAudioVideoNode');
        Route::get('get-media-categorization-lookup', 'AjaxController@mediaCategorizationLookup');
        Route::post('audio-questionnaire', 'AudioController@store');

        Route::post('video-form-validate', 'VideoController@formValidate');
        Route::get('dashboard-statistics', 'CompanyController@dashboardStatistics');
        Route::post('support-contact', 'CompanyController@supportContact');
        Route::get('generate-company-pdf', 'CompanyController@generateCompanyPdf');

        Route::get('get-media-categorization-lookupid-by-uuid/{uuid}', 'AjaxController@mediaCategorizationLookupIdByUuid');
        /* end audio/video hierarchy related api*/

        /*Personalized News Related API*/
        Route::get('get-personalized-news/{search_text}/{newsType}', 'PersonalizedNewsController@getNews');
        Route::get('get-company-industries', 'PersonalizedNewsController@getCompanyIndustries');
        Route::get('get-company-nodes', 'PersonalizedNewsController@getCompanyNodes');
        Route::get('get-dashboard-news', 'PersonalizedNewsController@getDashboardNews');

        Route::get('media-form-data', 'MediaFileController@getMediaFormData');
        Route::post('update-media-form-data', 'MediaFileController@updateMediaFormData');

        Route::post('set-fb-access-token', 'SocialIntegrationController@setFbAccessToken');
        Route::post('social-sharing', 'SocialIntegrationController@socialSharing');
        Route::get('get-social-integrated-list', 'SocialIntegrationController@socialIntegratedList');
        Route::post('/twitter-info', 'SocialIntegrationController@setTwitterInfo');
        Route::get('get-twitter-metrics-data', 'SocialIntegrationController@getTwitterData');
        Route::get('get-facebook-metrics-data', 'SocialIntegrationController@getFacebookData');
        Route::get('get-linkedin-metrics-data', 'SocialIntegrationController@getLinkedinData');

        Route::get('notifications/{totalNotifications}', 'NotificationsController@notifications');
        Route::get('mark-all-as-read/{totalNotifications}', 'NotificationsController@markAllAsRead');
        Route::get('recent-notifications/{latestNotificationTime}/{totalNotifications}', 'NotificationsController@recentNotifications');

        Route::post('media-subject-suggestion-request', 'MediaFileController@suggestionRequest');
        Route::get('bulletins/{bulletinIndex}', 'BulletinsController@getBulletins');


        Route::post('folder', 'ContentFolderController@store');
        Route::get('get-root-node-folder', 'ContentFolderController@getRootNodeFolder');
        Route::get('get-all-media-files', 'ContentFolderController@getAllMediaFiles');
        Route::get('get-all-folders', 'ContentFolderController@getAllFolders');
        Route::get('get-single-folder/{id}', 'ContentFolderController@getSingleFolder');
        Route::delete('delete-folder/{id}', 'ContentFolderController@deleteFolder');
        Route::put('edit-folder', 'ContentFolderController@editFolder');
        Route::put('drag-and-drop-folder', 'ContentFolderController@dragAndDropFolder');
        Route::post('folder-wise-media', 'ContentFolderController@folderWiseMedia');
        Route::get('get-breadcrumb/{id}', 'ContentFolderController@getBreadcrumb');
        Route::put('update-file-folder', 'ContentFolderController@updateFileFolder');

        Route::get('chat-messages', 'ChatController@message');
        Route::get('chat-member-list', 'ChatController@memberList');
        Route::get('chat-member-info', 'ChatController@memberInfo');
        Route::get('chat-company-content', 'ChatController@companyContent');
        Route::get('update-user-message-status', 'ChatController@updateUserMessageStatus');
        Route::post('update-message', 'ChatController@updateMessage');
        Route::post('delete-message', 'ChatController@deleteMessage');

        Route::post('dacast-video', 'VideoController@mediaUpload');
        Route::post('video-upload', 'VideoController@newUpload')->middleware('throttle:1000,1');
        Route::post('audio-upload', 'AudioController@newUpload')->middleware('throttle:1000,1');
        Route::post('media-file-upload', 'MediaFileController@upload')->middleware('throttle:1000,1');

        Route::post('send-internal-message', 'InternalMessageController@sendInternalMessage');
        Route::get('messages/{totalMessages}/{receiverCompanyId}', 'InternalMessageController@messages');
        Route::post('mark-all-as-read', 'InternalMessageController@markAllAsRead');
        Route::get('recent-messages/{latestMessageTime}/{totalMessages}/{receiverCompanyId}', 'InternalMessageController@recentMessages');
        Route::get('messages-list/{messageIndex}/{receiverCompanyId}', 'InternalMessageController@index');
        Route::get('recent-messages-list/{messageIndex}/{latestMessageTime}/{receiverCompanyId}', 'InternalMessageController@recentMessagesList');
        Route::post('update-message-status', 'InternalMessageController@updateReadStatus');

        /*Search History */
        Route::get('search-histories', 'SearchHistoryController@index');
        Route::post('save-search-history', 'SearchHistoryController@store');
        Route::delete('delete-search-history/{id}', 'SearchHistoryController@destroy');
        /*End Search History */
    });
});
