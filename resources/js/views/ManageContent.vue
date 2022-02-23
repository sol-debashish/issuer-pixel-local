<template>
    <div>
        <section class='dashboard pt-0 manage-content'>
            <div class="row">
                <div class="col-lg-2 col-md-3">
                    <FolderSystem @folderWiseMedia="folderWiseMedia" ref="fs"></FolderSystem>
                </div>
                <div class="col-lg-10 col-md-9">
                    <h4 class="text-theme-dark-blue">Content Library</h4>
                    <p class="text-theme-dark-blue"> You currently have {{totalVideo}} video and {{totalAudio}} audio uploaded</p>
                    <div class="mb-4">
                        <router-link
                            class="btn btn-lg dashboard-btn-upload ml-0 upload-content"
                            style="color: #ffffff"
                            :to="{ name: 'videoQuestionnaire' }">
                            <i class="fa fa-video"></i> Upload Video
                        </router-link>
                        <router-link
                            class="btn btn-lg dashboard-btn-upload ml-3 upload-content"
                            :class="linkGrayOut"
                            :to="{ name: 'audioQuestionnaire' }">
                            <i class="fa fa-headphones-alt"></i> Upload Audio
                        </router-link>
                        <div class="manage-content-banner">
                            <p>To activate your content click "Activate" (blue hyperlinks)</p>
                        </div>
                        <!--<router-link
                            class="btn btn-sm btn-primary"
                            style="color: #ffffff"
                            :to="{name: 'DocumentUpload' }">
                            Upload Documents
                        </router-link>-->
                    </div>

                    <!--Breadcrumb-->
                    <Breadcrumb></Breadcrumb>

                    <div class="position-relative">
                        <b-tabs class="content-customized-tab">
                            <b-tab title="Video" @click="loadTabContent('video')"
                                   :active="activeTab === 0">
                                <b-card-text>
                                    <!--Channel Search Section Video-->
                                    <div class="search-across-channel">
                                        <div class="input-group">
                                            <div class="input-group-append">
                                                <span class="btn dashboard-search-icon" @click="searchContent('video')">
                                                    <i class="fa fa-search"></i>
                                                </span>
                                            </div>
                                            <input type="text"
                                                   class="form-control dashboard-search-input"
                                                   v-model="videoSearch"
                                                   @input="searchContent('video')"
                                                   placeholder="Search across your channel"/>

                                        </div>
                                    </div>
                                    <!--End-->
                                    <div class="table-responsive media-data-list">
                                        <div class="loader" v-if="contentLoading"></div>
                                        <table class="table issuer-content-table">
                                            <thead>
                                            <tr class="text-center">
                                                <th >
                                                    Content
                                                    <!--                                                    <div class="form-check">-->
                                                    <!--                                                        <label class="form-check-label">-->
                                                    <!--                                                            <input type="checkbox" @click='checkAllVideo()'-->
                                                    <!--                                                                   v-model='ischeckAllVideo' class="form-check-input">Select-->
                                                    <!--                                                            All Video Files-->
                                                    <!--                                                        </label>-->
                                                    <!--                                                    </div>-->
                                                    &nbsp;
                                                </th>
                                                <th>Title</th>
                                                <th>Subject</th>
                                                <th>Type</th>
                                                <th class="text-left-responsive">Classification</th>
                                                <th class="text-right-responsive">Status</th>
                                                <th class="responsive-date-hide">Date</th>
                                                <th>Views</th>
                                                <th>Activation Status</th>
                                                <th>Visibility</th>
                                                <th class="action-min-width">Actions</th>
                                            </tr>
                                            </thead>

                                            <tbody class="issuer-content-table-body">
                                            <tr v-for="(video, index) in videos">

                                                <td class="text-left">
                                                    <div class="content-thumbnail position-relative">
                                                        <router-link v-if='video.status == 2 && video.is_meta_info_completed == 1 && video.is_hierarchy_info_completed == 1' link
                                                                     :to="{ name: 'ViewVideoDetails',params: { slug: slug, id: video.uuid }}">
                                                            <img
                                                                :src="video.thumb_url ? video.thumb_url : 'https://view.vzaar.com/'+ video.video_id +'/image'"
                                                                :data-id="video.id"
                                                                :data-type="video.media_type"
                                                                :data-media-content-id="video.media_content_id"
                                                                height="50" width="110"
                                                                @dragstart="handleDragStart"
                                                                @dragover="handleOnDragOver"
                                                                @dragleave="onDragLeave"
                                                                draggable="true"
                                                                @mousedown="mouseDownONElm"
                                                                @mouseleave="mouseUpONElm"
                                                                class="img img-responsive video-btn video-thumb moveable">
                                                        </router-link>
                                                        <template v-else-if="video.status == 2">
                                                            <img
                                                                :src="video.thumb_url ? video.thumb_url : 'https://view.vzaar.com/'+ video.video_id +'/image'"
                                                                :data-id="video.id"
                                                                :data-type="video.media_type"
                                                                :data-media-content-id="video.media_content_id"
                                                                @dragstart="handleDragStart"
                                                                @dragover="handleOnDragOver"
                                                                @dragleave="onDragLeave"
                                                                draggable="true"
                                                                @mousedown="mouseDownONElm"
                                                                @mouseleave="mouseUpONElm"
                                                                height="50" width="110"
                                                                class="img img-responsive video-btn video-thumb moveable">
                                                        </template>
                                                        <template v-else>
                                                            <img src="../assets/white-transparent.png"
                                                                :data-id="video.id"
                                                                :data-type="video.media_type"
                                                                :data-media-content-id="video.media_content_id"
                                                                @dragstart="handleDragStart"
                                                                @dragover="handleOnDragOver"
                                                                @dragleave="onDragLeave"
                                                                draggable="true"
                                                                @mousedown="mouseDownONElm"
                                                                @mouseleave="mouseUpONElm"
                                                                height="50" width="110"
                                                                class="img img-responsive video-btn video-thumb moveable">
                                                        </template>
                                                        <div v-if="video.status != 1" class="rounded-circle thumb-edit-icon text-center"  @click="showImageCropperModal(video.id)">
                                                            <img src="/images/pencil-icon.png" height="15px"/>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td class="media-title-td px-1">
                                                    <template v-if="video.name" >
                                                       <a href="javascript:void(0)" class="text-decoration-none"><span
                                                           draggable="true"
                                                           @dragstart="handleDragStart"
                                                           @dragover="handleOnDragOver"
                                                           @dragleave="onDragLeave"
                                                           @mousedown="mouseDownONElm"
                                                           @mouseleave="mouseUpONElm"
                                                           :data-id="video.id"
                                                           :data-type="video.media_type"
                                                           :data-media-content-id="video.media_content_id"
                                                           class="moveable"> {{ video.name }}</span></a>
                                                    </template>
                                                    <template v-else>
                                                        <router-link link :to="{ name: 'videoAddMeta',params: { uuid: video.uuid}}">
                                                            Activate
                                                        </router-link>
                                                    </template>
                                                </td>

                                                <td>
                                                    <template v-if="video.subject_type.length">
                                                        <a href="javascript:;"
                                                           @click.prevent="showAllSubjectModal(video.subject_type, 'Video')">
                                                            View
                                                        </a>
                                                    </template>
                                                    <template v-else>
                                                        <router-link link :to="{ name: 'videoAddMeta',params: { uuid: video.uuid}}">
                                                            Activate
                                                        </router-link>
                                                    </template>
                                                </td>
                                                <td>
                                                    <template v-if="video.media_sub_type_name">
                                                        {{video.media_sub_type_name}}
                                                    </template>
                                                    <template v-else>
                                                        <router-link link :to="{ name: 'videoAddMeta',params: { uuid: video.uuid}}">
                                                            Activate
                                                        </router-link>
                                                    </template>
                                                </td>

                                                <td>
                                                    <template v-if="video.taxonomy_id">
                                                        <a href="javascript:;"
                                                           @click="showAllTaxonomiesModal"
                                                           :data-video-id="video.id"
                                                           :data-uuid="video.uuid"
                                                           :data-taxonomy-id="video.taxonomy_id">View
                                                        </a>
                                                    </template>
                                                    <template v-else>
                                                        <router-link link :to="{ name: 'videoAddMeta',params: { uuid: video.uuid}}">
                                                            Activate
                                                        </router-link>
                                                    </template>
                                                </td>

                                                <td v-if='video.status == 1'>
                                                    Processing
                                                    <a href="javascript:;"
                                                       v-b-tooltip.hover.top="'This video is currently being processed, it may take up to 2 hours to become available for viewing.'">
                                                        <i class="fas fa-info-circle text-dark"></i>
                                                    </a>
                                                </td>

                                                <td v-else-if='video.status == 2'>
                                                    Available
                                                </td>

                                                <td v-else-if='video.status == 3'>
                                                    Private
                                                </td>

                                                <td class="responsive-date-hide"><span>{{video.publication_date}}</span></td>

                                                <td><span>{{numShortFormatter(video.view_counter)}}</span></td>
                                                <td><i class="fa fa-circle fs-14" :class="(video.is_meta_info_completed == 1 && video.is_hierarchy_info_completed == 1) ? 'media-file-published': 'media-file-unpublished'"></i></td>

                                                <td>
                                                    <select class="custom-select" :id="'publicationStatusVideo' + video.id"
                                                            @change="changePublishedStatus('video',video.id, video.publish_status)">
                                                        <option value="0"
                                                                v-bind:selected="video.publish_status == 0">
                                                            Private
                                                        </option>
                                                        <option value="1"
                                                                v-bind:selected="video.publish_status == 1">
                                                            Public
                                                        </option>
                                                    </select>
                                                </td>

                                                <td>
                                                    <div class="content-actions">
                                                        <ul>
                                                            <li v-if='video.status == 2 && video.is_meta_info_completed == 1 && video.is_hierarchy_info_completed == 1'>
                                                                <a href="javascript:;" v-b-tooltip.hover.top="'Share Video'"
                                                                   @click.prevent="shareMediaLink(video.id,video.uuid, video.publish_status,'video-details', slug)">
                                                                    <i class="fa fa-share-alt"></i>
                                                                </a>
                                                            </li>
                                                            <li v-if='video.status == 2 && video.is_meta_info_completed == 1 && video.is_hierarchy_info_completed == 1'>
                                                                <router-link  link
                                                                             :to="{ name: 'ViewVideoDetails',params: {slug: slug, id: video.uuid }}">
                                                                    <i class="fas fa-eye"
                                                                    v-b-tooltip.hover.top="'View Video'"></i>
                                                                </router-link>
                                                            </li>
                                                            <li>
                                                                <i class="fas fa-pen" type="button" id="videoEditButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>

                                                                <div class="dropdown-menu" aria-labelledby="videoEditButton">

                                                                    <router-link class="dropdown-item " link
                                                                                 :to="{ name: 'VideoStepOneEdit',params: { id: video.uuid }}">
                                                                        Edit Video Classification
                                                                    </router-link>

                                                                    <router-link class="dropdown-item " link
                                                                                 :to="{ name: 'VideoStepTwoEdit',params: { id: video.uuid }}">
                                                                        Edit Video Details
                                                                    </router-link>
                                                                </div>

                                                            </li>

                                                            <li>
                                                                <a href="javascript:;" class="del-btn" v-b-tooltip.hover.top="'Remove  Video'"
                                                                   @click="deleteMedia(video, 'videos')">
                                                                    <i class="fa fa-trash-alt"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr v-if="! videos.length">
                                                <td colspan="10" class="text-center">No video file
                                                    found
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colspan="10">
                                                    <pagination v-if="videoPagination.last_page > 1"
                                                                :pagination="videoPagination"
                                                                :offset="5"
                                                                @paginate="getVideoList()"></pagination>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-card-text>
                            </b-tab>

                            <b-tab title="Audio" @click="loadTabContent('audio')"
                                   :active="activeTab === 1">
                                <b-card-text>
                                    <!--Channel Search Section Audio-->
                                    <div class="search-across-channel">
                                        <div class="input-group">
                                            <div class="input-group-append">
                                            <span class="btn dashboard-search-icon" @click="searchContent('audio')">
                                                <i class="fa fa-search"></i>
                                            </span>
                                            </div>
                                            <input type="text"
                                                   class="form-control dashboard-search-input"
                                                   v-model="audioSearch"
                                                   @input="searchContent('audio')"
                                                   placeholder="Search across your channel"/>
                                        </div>
                                    </div>
                                    <!--End-->
                                    <div class="table-responsive">
                                        <table class="table issuer-content-table media-data-list">
                                            <div class="loader" v-if="contentLoading"></div>
                                            <thead>
                                            <tr class="text-center">
                                                <th>
                                                    Content
                                                    <!--                                                    <div class="form-check">-->
                                                    <!--                                                        <label class="form-check-label">-->
                                                    <!--                                                            <input type="checkbox" @click='checkAllAudio()'-->
                                                    <!--                                                                   v-model='ischeckAllAudio' class="form-check-input">Select-->
                                                    <!--                                                            All Audio Files-->
                                                    <!--                                                        </label>-->
                                                    <!--                                                    </div>-->
                                                    &nbsp;
                                                </th>
                                                <th>Title</th>
                                                <th>Subject</th>
                                                <th>Type</th>
                                                <th class="text-left-responsive">Classification</th>
                                                <th class="text-right-responsive">Status</th>
                                                <th class="responsive-date-hide">Date</th>
                                                <th>Views</th>
                                                <th>Activation Status</th>
                                                <th>Visibility</th>
                                                <th class="action-min-width">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody class="issuer-content-table-body">
                                                <tr v-for="audio in audios">
                                                    <td>
                                                        <router-link v-if='audio.status == 2 &&  audio.is_meta_info_completed == 1 && audio.is_hierarchy_info_completed == 1' link
                                                                     :to="{ name: 'ViewAudioDetails',params: { slug: slug, id: audio.uuid }}">
                                                            <img src="/images/audio_thumb.png" alt=""
                                                                 height="50"
                                                                 width="110"
                                                                 draggable="true"
                                                                 @dragstart="handleDragStart"
                                                                 @dragover="handleOnDragOver"
                                                                 @dragleave="onDragLeave"
                                                                 @mousedown="mouseDownONElm"
                                                                 @mouseleave="mouseUpONElm"
                                                                 :data-id="audio.id"
                                                                 :data-type="audio.media_type"
                                                                 :data-media-content-id="audio.media_content_id"
                                                                 class="img img-responsive moveable">
                                                        </router-link>
                                                        <template v-else-if="audio.status == 2" draggable="true">
                                                            <img src="/images/audio_thumb.png" alt=""
                                                                 height="50"
                                                                 width="110"
                                                                 draggable="true"
                                                                 @dragstart="handleDragStart"
                                                                 @dragover="handleOnDragOver"
                                                                 @dragleave="onDragLeave"
                                                                 @mousedown="mouseDownONElm"
                                                                 @mouseleave="mouseUpONElm"
                                                                 :data-id="audio.id"
                                                                 :data-type="audio.media_type"
                                                                 :data-media-content-id="audio.media_content_id"
                                                                 class="img img-responsive moveable">
                                                        </template>
                                                        <template v-else>
                                                            <img src="../assets/white-transparent.png"
                                                                 height="50"
                                                                 width="110"
                                                                 draggable="true"
                                                                 @dragstart="handleDragStart"
                                                                 @dragover="handleOnDragOver"
                                                                 @dragleave="onDragLeave"
                                                                 @mousedown="mouseDownONElm"
                                                                 @mouseleave="mouseUpONElm"
                                                                 :data-id="audio.id"
                                                                 :data-type="audio.media_type"
                                                                 :data-media-content-id="audio.media_content_id"
                                                                 class="img img-responsive video-thumb moveable">
                                                        </template>
                                                    </td>
                                                    <td class="text-center media-title-td px-1">
                                                        <template v-if="audio.name">
                                                            <a href="javascript:void(0)" class="text-decoration-none"><span
                                                                draggable="true"
                                                                @dragstart="handleDragStart"
                                                                @dragover="handleOnDragOver"
                                                                @dragleave="onDragLeave"
                                                                :data-id="audio.id"
                                                                :data-type="audio.media_type"
                                                                :data-media-content-id="audio.media_content_id"
                                                                @mousedown="mouseDownONElm"
                                                                @mouseleave="mouseUpONElm"
                                                                class="moveable">{{audio.name}}</span></a>
                                                        </template>
                                                        <template v-else>
                                                            <router-link link :to="{ name: 'audioAddMeta',params: { uuid: audio.uuid}}">
                                                                Activate
                                                            </router-link>
                                                        </template>
                                                    </td>
                                                    <td class="text-center">
                                                        <template v-if="audio.subject_type.length">
                                                            <a href="javascript:;"
                                                               @click.prevent="showAllSubjectModal(audio.subject_type, 'Audio')">View</a>
                                                        </template>
                                                        <template v-else>
                                                            <router-link link :to="{ name: 'audioAddMeta',params: { uuid: audio.uuid}}">
                                                                Activate
                                                            </router-link>
                                                        </template>
                                                    </td>
                                                    <td class="text-center">
                                                        <template v-if="audio.media_sub_type_name">
                                                            {{audio.media_sub_type_name}}
                                                        </template>
                                                        <template v-else>
                                                            <router-link link :to="{ name: 'audioAddMeta',params: { uuid: audio.uuid}}">
                                                                Activate
                                                            </router-link>
                                                        </template>
                                                    </td>
                                                    <td class="text-center">
                                                        <template v-if="audio.taxonomy_id">
                                                            <a href="javascript:;"
                                                               @click="showAllTaxonomiesModal"
                                                               :data-audio-id="audio.id"
                                                               :data-uuid="audio.uuid"
                                                               :data-taxonomy-id="audio.taxonomy_id">View</a>
                                                        </template>
                                                        <template v-else>
                                                            <router-link link :to="{ name: 'audioAddMeta',params: { uuid: audio.uuid}}">
                                                                Activate
                                                            </router-link>
                                                        </template>
                                                    </td>
                                                    <td class="text-center" v-if='audio.status == 1'>
                                                        Processing
                                                        <a href="javascript:;"
                                                           v-b-tooltip.hover.top="'This audio file is currently being processed, it may take up to 2 hours to become available.'">
                                                            <i class="fas fa-info-circle text-dark"></i>
                                                        </a>
                                                    </td>
                                                    <td class="text-center" v-else-if='audio.status == 2'>
                                                        Available
                                                    </td>
                                                    <td class="text-center" v-else-if='audio.status == 3'>
                                                        Private
                                                    </td>
                                                    <td class="text-center responsive-date-hide">{{audio.publication_date}}</td>
                                                    <td class="text-center">{{numShortFormatter(audio.view_counter)}}</td>
                                                    <td><i class="fa fa-circle fs-14" :class="audio.is_meta_info_completed == 1 && audio.is_hierarchy_info_completed == 1 ? 'media-file-published': 'media-file-unpublished'"></i></td>
                                                    <td>
                                                        <select class="custom-select" :id="'publicationStatusAudio' + audio.id"
                                                                @change="changePublishedStatus('audio',audio.id, audio.publish_status)">
                                                            <option value="0"
                                                                    v-bind:selected="audio.publish_status == 0">
                                                                Private
                                                            </option>
                                                            <option value="1"
                                                                    v-bind:selected="audio.publish_status == 1">
                                                                Public
                                                            </option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <div class="content-actions">
                                                            <ul>
                                                                <li v-if='audio.status == 2 &&  audio.is_meta_info_completed == 1 && audio.is_hierarchy_info_completed == 1'>
                                                                    <a href="javascript:;" v-b-tooltip.hover.top="'Share Audio'"
                                                                       @click.prevent="shareMediaLink(audio.id,audio.uuid, audio.publish_status,'audio-details', slug)">
                                                                        <i class="fa fa-share-alt"></i>
                                                                    </a>
                                                                </li>
                                                                <li v-if='audio.status == 2 &&  audio.is_meta_info_completed == 1 && audio.is_hierarchy_info_completed == 1'>
                                                                    <router-link  link
                                                                                  :to="{ name: 'ViewAudioDetails',params: {slug: slug, id: audio.uuid }}">
                                                                        <i class="fas fa-eye"
                                                                           v-b-tooltip.hover.top="'View Audio'"></i>
                                                                    </router-link>
                                                                </li>
                                                                <li>
                                                                    <i class="fas fa-pen" type="button" id="audioEditButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>

                                                                    <div class="dropdown-menu" aria-labelledby="audioEditButton">

                                                                        <router-link class="dropdown-item " link
                                                                                     :to="{ name: 'AudioStepOneEdit',params: { id: audio.uuid}}">
                                                                            Edit Audio Classification
                                                                        </router-link>

                                                                        <router-link class="dropdown-item " link
                                                                                     :to="{ name: 'AudioStepTwoEdit',params: { id: audio.uuid }}">
                                                                            Edit Audio Details
                                                                        </router-link>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:;" class="del-btn" v-b-tooltip.hover.top="'Remove  Audio'"
                                                                       @click="deleteMedia(audio, 'audios')">
                                                                        <i class="fa fa-trash-alt"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            <tr v-if="! audios.length">
                                                <td colspan="10" class="text-center">No audio file
                                                    found
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colspan="10">
                                                    <pagination v-if="audioPagination.last_page > 1"
                                                                :pagination="audioPagination"
                                                                :offset="5"
                                                                @paginate="getAudioList()"></pagination>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-card-text>
                            </b-tab>
                            <!--<b-tab title="Documents" @click="loadTabContent('document')" :active="activeTab === 2">
                                <b-card-text>
                                    &lt;!&ndash;Channel Search Section Video&ndash;&gt;
                                    <div class="search-across-channel">
                                        <form>
                                            <div class="input-group">
                                                <input type="text" class="form-control dashboard-search-input"
                                                       placeholder="Search across your channel">
                                                <div class="input-group-append">
                                                <span class="btn dashboard-search-icon">
                                                    <i class="fa fa-search"></i>
                                                </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    &lt;!&ndash;End&ndash;&gt;
                                    <div class="table-responsive">
                                        <table class="table issuer-content-table">
                                            <thead>
                                            &lt;!&ndash;<tr>
                                                <td colspan="4"><i class="fas fa-sort-amount-up"></i> Filter</td>
                                            </tr>&ndash;&gt;
                                            <tr>
                                                <th>
                                                    <div class="form-check">
                                                        <label class="form-check-label">
                                                            <input type="checkbox" class="form-check-input" value="">Select
                                                            All
                                                            Files
                                                        </label>
                                                    </div>
                                                </th>
                                                <th>Status</th>
                                                <th>Date</th>
                                                <th>Views</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colspan="5">No file found
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-card-text>
                            </b-tab>-->
                        </b-tabs>
                    </div>
                </div>
            </div>
            <loader :is-visible="isLoading"></loader>

            <!-- All Taxonomies modal started -->
            <b-modal centered ref="all-taxonomies-modal" id="all-taxonomies-modal" size="xl" hide-footer
                     title="All Classification">
                <div class="row mx-auto w-100 text-center modal-classifications-container">
                    <div
                        no-body
                        class="border-0 col-lg-3 col-md-4 pb-3"
                        v-for="(each,index) in mediaHierarchyInfo"
                        :key="each.categorization_id"
                    >
                        <CompanyNodeCollapses v-bind:each="each" :objectIndex="index" :enableEditButton="enableClassificationsEditButton"></CompanyNodeCollapses>

                    </div>
                </div>
            </b-modal>
            <b-modal
                id="modalShareLink"
                ref="modalShareLink"
                title="Share"
                size="lg"
                centered
                class="min-modal-height"
                hide-footer>
                <share-modal :publicShareLink="this.publicShareLink" :sharableMediaId="this.sharableMediaId" :shareMediaType="this.shareMediaType"></share-modal>
            </b-modal>
            <!--show All Subject Modal-->
            <b-modal
                id="modalAllSubject"
                ref="modalAllSubject"
                :title="allSubjectModalTitle"
                centered
                hide-footer title-class="modal-title-new">
                <ul class="text-center pl-0 modal-list-data">
                    <li v-for="mediaSubject in selectedMediaSubject">{{mediaSubject.name}}</li>
                </ul>
            </b-modal>
            <!-- Image cropper modal-->
            <b-modal
                centered
                id="image-cropper-modal"
                ref="image-cropper-modal"
                size="lg"
                content-class="thumb-edit-modal"
            >
                <template #modal-header>
                    <div class="w-100">
                        <h3 class="float-left">Change Thumbnail Image</h3>
                        <b-button
                            class="modal-close close float-right"
                            @click="closeImageCropperModal"
                        >x
                        </b-button>
                    </div>
                </template>
                <div class="uploader"
                     @dragenter="OnCropperDragEnter"
                     @dragleave="OnCropperDragLeave"
                     @dragover.prevent
                     @drop="onCropperDrop"
                >
                    <ImageCropper :src="imageSrc" customAspectRatio="'16/9'" ref="imageCropper" />
                </div>
                <div class="text-center" v-if="!imageSrc">Upload a photo. Then crop and adjust it to perfection.</div>
                <a class="float-right mt-4 image-rotate-icon" v-if="imageSrc" @click="imageRotate">Rotate <i class="fas fa-undo"></i></a>

                <template #modal-footer>
                    <label class="btn btn-default">
                        <input type="file" name="audioFile" id="audioFile" ref="audioFile" v-if="!isUploading"
                               style="display:None;"
                               @change="onInputChange"
                               accept="image/*">
                        <span v-if="imageSrc">Change photo</span>
                        <span v-else>Upload photo</span>

                    </label>
                    <button v-if="imageSrc" class="btn btn-default" :disabled='isDisabled' @click="uploadImage">{{isUploading ? "Uploading..." : "Save photo"}}</button>
                </template>
            </b-modal>
        </section>
    </div>
</template>

<script>
import Content from "../apis/Content";
import Common from "../apis/Common";
import CompanyNodeCollapses from "../components/CompanyNodeCollapses";
import FolderSystem from "../components/FolderSystem";
import Breadcrumb from "../components/partials/Breadcrumb";
import AudioVideo from "../apis/AudioVideo";

export default {
        data() {
            return {
                videoSearch: "",
                audioSearch: "",
                totalVideo: 1,
                totalAudio: 0,
                isLoading: false,
                mediaHierarchyInfo: "",
                activeTab: 0,
                industryColor: "#D4AF37",
                audios: [],
                videos: [],
                audioUrl: '',
                audioName: '',
                videoSrc: '',
                audioTabContentLoaded: false,
                videoTabContentLoaded: false,
                contentLoading: false,
                videoPagination: {
                    'current_page': 1
                },
                audioPagination: {
                    'current_page': 1
                },
                publicShareLink: "",
                sharableMediaId: "",
                sharableMediaUUId: "",
                shareMediaType: "",
                allSubjectModalTitle: "",
                selectedMediaSubject: [],
                linkGrayOut: '',
                enableClassificationsEditButton: false,
                slug: '',
                folderWiseMediaData: [],
                draggedFileId: '',
                draggedFileType: '',
                draggedFileMediaContentId: '',
                targetedFolderId: '',
                triggeredFromParent: false,
                draggingFromTable: false,
                isLeaf: false,
                errors: [],
                imageSrc: "",
                isDisabled: false,
                isUploading: false,
                isDragging: false,
                dragCount: 0,
                videoFileId: ''
            };
        },
        props: ['resumble'],
        methods: {
            folderWiseMedia(values) {
                this.folderWiseMediaData = JSON.stringify(values);

                this.audioTabContentLoaded = false;
                this.videoTabContentLoaded = false;

                if(this.activeTab == 1) {
                    this.getAudioList(true)
                } else {
                    this.getVideoList(true);
                }
            },
            showModal(e) {
                this.audioUrl = e.target.getAttribute('data-audio-url');
                this.audioName = e.target.getAttribute('data-audio-name');

                this.$root.$emit('bv::show::modal', 'modal-view-audio', '#btnShow')
            },
            getAudioList(clearPage = false) {
                    if (clearPage) {
                        this.audioPagination.current_page = 1;
                        this.contentLoading = true
                    } else {
                        this.isLoading = true
                    }
                    Content.audio(this.audioPagination.current_page, this.audioSearch, this.folderWiseMediaData)
                        .then((response) => {
                            this.isLoading = false
                            this.contentLoading = false
                            this.audios = [];
                            this.audios = response.data.data.data.data;
                            this.audioPagination = response.data.data.pagination;
                            this.totalAudio = response.data.data.data.total;
                            this.totalVideo = response.data.data.total_video;
                        })
                        .catch(error => {
                            if (!!error.response) {
                                this.isLoading = false
                                this.contentLoading = false
                                if (error.response.status == 401) {
                                    this.$emit('logout')
                                }
                            }
                        });
            },
            getVideoList(clearPage = false) {
                    if (clearPage) {
                        this.videoPagination.current_page = 1;
                        this.contentLoading = true
                    } else {
                        this.isLoading = true
                    }
                    Content.video(this.videoPagination.current_page, this.videoSearch, this.folderWiseMediaData)
                        .then((response) => {
                            this.isLoading = false
                            this.contentLoading = false
                            this.videos = [];
                            this.videos = response.data.data.data.data;
                            this.videoPagination = response.data.data.pagination;
                            this.totalVideo = response.data.data.data.total;
                            this.totalAudio = response.data.data.total_audio;
                            // this.videoIds = Object.keys(this.videos).map((key) => {
                            //     return this.videos[key].id
                            // })
                        })
                        .catch(error => {
                            if (!!error.response) {
                                this.isLoading = false
                                this.contentLoading = false
                                if (error.response.status == 401) {
                                    this.$emit('logout')
                                }
                            }
                        });
            },
            deleteMedia: function (item, type) {
                var vueInstance = this;
                $.confirm({
                    title: 'Are you sure you want to remove this file?',
                    content: '<hr class="m-0">',
                    titleClass: 'font-weight-bold text-center jconfirm-modal-title',
                    closeIcon: true,
                    columnClass: 'medium',
                    animation: 'top',
                    closeAnimation: 'top',
                    bgOpacity: 0.6,
                    buttons: {
                        Yes: {
                            btnClass: 'btn-success rounded-pill mr-3',
                            action: function () {
                                vueInstance.isLoading = true
                                Content.deleteMediaFile(item.id)
                                    .then((response) => {
                                        vueInstance.isLoading = false
                                        var index = vueInstance[type].indexOf(item)
                                        vueInstance[type].splice(index, 1)
                                        toastr.success(response.data.success.message)
                                        vueInstance.$refs.fs.getRootNodeFolder()
                                    })
                                    .catch(error => {
                                        vueInstance.isLoading = false
                                        if (error.response.status === 403) {
                                            toastr.error(error.response.data.error.message)
                                        } else if (error.response.status == 401) {
                                            this.$emit('logout')
                                        } else {
                                            toastr.error(error)
                                        }
                                    });
                            },
                        },
                        Cancel: {
                            btnClass: 'btn-default rounded-pill'
                        },
                    }
                });
            },
            loadTabContent: function (type) {

                switch (type) {
                    case 'video':
                        if (!this.videoTabContentLoaded) {
                            this.getVideoList();
                            this.videoTabContentLoaded = true
                        }
                        this.activeTab = 0
                        break;
                    case 'audio':
                        if (!this.audioTabContentLoaded) {
                            this.getAudioList();
                            this.audioTabContentLoaded = true
                        }
                        this.activeTab = 1
                        break;
                    case 'document':
                        this.activeTab = 2
                        break;
                }
            },
            randomColor(index) {

                let industryColor;
                if (index == 0) {
                    industryColor = '#990100';
                } else if ((index % 3) == 0) {
                    industryColor = '#990100';
                } else if ((index % 3) == 1) {
                    industryColor = '#ED7E31';
                } else if ((index % 3) == 2) {
                    industryColor = '#2F9898';
                }
                return industryColor;
            },
            showAllSubjectModal: function (data, type) {
                this.allSubjectModalTitle = "Subjects of Company " + type
                this.selectedMediaSubject = data
                this.$bvModal.show('modalAllSubject');
            },
            showAllTaxonomiesModal: function (event) {
                this.isLoading = true
                this.mediaHierarchyInfo = []
                axios.get('/api/get-media-categorization-lookup-for-collapse?id=' + event.target.getAttribute('data-taxonomy-id')+'&uuid='+ event.target.getAttribute('data-uuid'))
                    .then((response) => {
                        this.mediaHierarchyInfo = response.data.data
                        this.$refs['all-taxonomies-modal'].show()
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        if (error.response.status === 422) {
                            toastr.error(error.response.data.error.message)
                        } else if (error.response.status == 401) {
                            this.$emit('logout')
                        } else {
                            toastr.error(error)
                        }
                    });
            },
            searchContent: function (type) {
                if ('video' == type) {
                    this.getVideoList('clearPage')
                } else if ('audio' == type) {
                    this.getAudioList('clearPage')
                }
            },
            shareMediaLink: function (mediaId, mediaUId, publicationStatus, type, slug) {
                this.sharableMediaId = mediaId;
                this.sharableMediaUUId = mediaUId;
                this.shareMediaType = type;
                this.oneClickShareData = [];
                this.ischeckAllSocial = false;
                this.oneClickMessage = "";
                if (publicationStatus == 0) {
                    // this.$bvModal.show('modalCheckPublicationStatus');
                    this.publishedAndShareLink();
                } else {
                    this.publicShareLink = document.location.origin + '/company/' + slug + '/' + type + '/' + mediaUId;
                    this.$bvModal.show('modalShareLink');
                }
            },
            publishedAndShareLink: function () {
                Content.changeMediaFileStatus({'id': this.sharableMediaId, 'status': 0})
                    .then((response) => {
                        this.publicShareLink = document.location.origin + '/company/'  + this.slug + '/' + this.shareMediaType + '/' + this.sharableMediaUUId;
                        this.publicationStatus = 1;
                        if (this.shareMediaType == 'video-details') {
                            $('#publicationStatusVideo' + this.sharableMediaId).val(1).trigger("change");
                        }
                        if (this.shareMediaType == 'audio-details') {
                            $('#publicationStatusAudio' + this.sharableMediaId).val(1).trigger("change");
                        }
                    })
                    .catch(error => {
                        toastr.error(error)
                    });
                //this.$bvModal.hide('modalCheckPublicationStatus');
                this.$bvModal.show('modalShareLink');
            },
            changePublishedStatus: function (type, itemId, currentStatus) {
                var vueInstance = this;
                $.confirm({
                    title: 'Publish status changes',
                    content: "Are you sure you want to change publish status?",
                    buttons: {
                        Yes: {
                            btnClass: 'btn-success',
                            action: function () {
                                vueInstance.isLoading = true
                                Content.changeMediaFileStatus({'id': itemId, 'status': currentStatus})
                                    .then((response) => {
                                        vueInstance.isLoading = false
                                        toastr.success(response.data.success.message)
                                    })
                                    .catch(error => {
                                        vueInstance.isLoading = false
                                        if (error.response.status === 403) {
                                            $.confirm({
                                                title: '',
                                                content: error.response.data.error.message,
                                                columnClass: 'medium',
                                                type: 'purple',
                                                typeAnimated: true,
                                                buttons: {
                                                    OK: function () {
                                                    },
                                                }
                                            });
                                        } else if (error.response.status == 401) {
                                            this.$emit('logout')
                                        } else {
                                            toastr.error(error)
                                        }
                                        if (type == 'video') {
                                            $('#publicationStatusVideo' + itemId).val(currentStatus).trigger("change");
                                        }
                                        if (type == 'audio') {
                                            $('#publicationStatusAudio' + itemId).val(currentStatus).trigger("change");
                                        }
                                    });
                            },
                        },
                        Cancel: {
                            action: function () {
                                if (type == 'video') {
                                    $('#publicationStatusVideo' + itemId).val(currentStatus).trigger("change");
                                }
                                if (type == 'audio') {
                                    $('#publicationStatusAudio' + itemId).val(currentStatus).trigger("change");
                                }
                            }
                        }
                    }
                });
            },
            handleDragStart(event) {
                event.dataTransfer.setData('Text', 'foo');
            },
            handleOnDragOver(event) {
                event.preventDefault()
            },
            onDragLeave(event) {
                if (event.target.getAttribute('data-id')) {
                    this.draggedFileId = event.target.getAttribute('data-id');
                    this.draggedFileType = event.target.getAttribute('data-type');
                    this.draggedFileMediaContentId = event.target.getAttribute('data-media-content-id');
                    this.draggingFromTable = true;
                }
            },
            mouseDownONElm(e) {
                let dataId = e.target.getAttribute('data-id');
                let allMovableClasses = document.getElementsByClassName('moveable');
                for (let i = 0; i < allMovableClasses.length; i++) {
                    if (allMovableClasses[i].getAttribute('data-id') != dataId) {
                        allMovableClasses[i].closest('td').classList.add('disable-pointer');
                    }
                }
            },
            mouseUpONElm(e) {
                let dataId = e.target.getAttribute('data-id');
                let allMovableClasses = document.getElementsByClassName('moveable');
                for (let i = 0; i < allMovableClasses.length; i++) {
                    if (allMovableClasses[i].getAttribute('data-id') != dataId) {
                        allMovableClasses[i].closest('td').classList.remove('disable-pointer');
                    }
                }
            },
            async updateFileFolder (mediaFileId, folderId, isLeaf = false) {
                Content.updateFilFolder({'media_file_id': mediaFileId, 'folder_id': folderId, 'is_leaf': isLeaf})
                    .then((response) => {
                        if (response.data.resultCode == 200) {
                            this.$refs.fs.getRootNodeFolder();
                        }
                    })
                    .catch(error => {
                        toastr.error(error)
                    }).finally(() => this.triggerTargetedFolderClick() );
            },
            triggerTargetedFolderClick() {
                if (!this.isLeaf) {
                    this.triggeredFromParent = true;
                    //trigger click event on targeted folder to make it expanded.
                    let element = document.getElementById(this.targetedFolderId);
                    element.querySelector('.vtl-node-content').click();
                }
                this.draggedFileId = '';
                this.targetedFolderId = '';
                this.isLeaf = false;
                this.triggeredFromParent = false;
            },

            //cropper
            showImageCropperModal(media_file_id) {
                this.videoFileId = media_file_id;
                this.$refs['image-cropper-modal'].show()
            },
            closeImageCropperModal: function () {
                let vi = this;
                if(this.imageSrc)
                {
                    $.confirm({
                        title: 'Discard changes',
                        content: "Are you sure you want to discard changes you made?",
                        columnClass: 'medium',
                        type: 'blue',
                        typeAnimated: true,
                        buttons: {
                            Cancel: function () {
                            },
                            Discard: function () {
                                vi.$refs['image-cropper-modal'].hide()
                                vi.imageSrc = ""
                                vi.isDisabled = false
                                vi.isUploading = false
                            }
                        }
                    },this);

                }else {
                    this.$refs['image-cropper-modal'].hide()
                }
            },
            setImage: function (file) {
                // const file = e.target.files[0]
                if(!!file[0]){
                    if (!file[0].type.includes("image/")) {
                        alert("Please select an image file")
                        return
                    }
                    if (typeof FileReader === "function") {
                        const reader = new FileReader()
                        reader.onload = event => {
                            this.imageSrc = event.target.result
                            // Rebuild cropperjs with the updated source
                            this.$refs.imageCropper.cropper.replace(event.target.result)
                        }
                        reader.readAsDataURL(file[0])
                    } else {
                        alert("Sorry, FileReader API not supported")
                    }
                }
            },
            imageRotate() {
                // Get image data for post processing, e.g. upload or setting image src
                this.$refs.imageCropper.cropper.rotate(90)
            },
            OnCropperDragEnter(e) {
                e.preventDefault();
                this.dragCount++;
                this.isDragging = true;
                return false;
            },
            OnCropperDragLeave(e) {
                e.preventDefault();
                this.dragCount--;
                if (this.dragCount <= 0)
                    this.isDragging = false;
            },
            onInputChange(e) {
                this.setImage(e.target.files);
            },
            onCropperDrop(e) {
                e.preventDefault();
                e.stopPropagation();
                this.isDragging = false;
                this.setImage(e.dataTransfer.files)
            },
            uploadImage() {
                this.isDisabled = true;
                this.isUploading = true;
                let vi = this;

                this.$refs.imageCropper.cropper.getCroppedCanvas().toBlob(function (blob) {
                    let formData = new FormData()
                    formData.append("name", "image-name-" + new Date().getTime())
                    formData.append("file", blob)
                    AudioVideo.updateVideoThumbnail(formData, vi.videoFileId)
                        .then((response) => {
                            vi.videos.forEach((video, index) => {
                                if (video.id == vi.videoFileId) {
                                    vi.videos[index].thumb_url = response.data.data.thumb_url;
                                    return;
                                }
                            });

                            vi.$refs['image-cropper-modal'].hide()
                            vi.isDisabled = false;
                            vi.isUploading = false;
                            vi.imageSrc = '';
                            toastr.success(response.data.success.message)
                        })
                        .catch((error) => {
                            toastr.error(error)
                        });
                })
            },
        },
        mounted() {
            this.slug = localStorage.getItem('companySlugName');
            if (localStorage.getItem('videoUploadRemainingDays') == 0 && localStorage.getItem('isVideoUploaded') == 'no') {
                this.linkGrayOut = 'trialExpired';
            }
            switch (this.$route.hash) {
                case '#video':
                    this.activeTab = 0
                    break;
                case '#audio':
                    this.activeTab = 1
                    this.getAudioList();
                    this.audioTabContentLoaded = true
                    break;
                case '#file':
                    this.activeTab = 2
                    break;
            }
            var vi = this;
            if (!!this.resumble && this.resumble.files.length > 0)
            {
                this.resumble.on('fileSuccess', function (file) {
                    switch (vi.activeTab) {
                        case 1:
                            vi.getAudioList('clearPage')
                            if(!! vi.$refs.fs){
                                vi.$refs.fs.getRootNodeFolder()
                            }
                            break;
                        case 0:
                            vi.getVideoList('clearPage')
                            if(!! vi.$refs.fs){
                                vi.$refs.fs.getRootNodeFolder()
                            }
                    }
                });
            }
        },
        created: async function () {
            this.numShortFormatter = Common.ViewListenNumFormatter;
            this.getVideoList();
            //this.socialSharing();
            document.addEventListener('keydown', function(evt){
                if (evt.keyCode == 27) {
                    if(!!jconfirm.instances[0]){
                        jconfirm.instances[0].close();
                    }
                }
            });
            document.ondrop = async (e) => {
                e.preventDefault();
               let folder = e.target.closest('.vtl-node.vtl-tree-node');
               if (folder && folder.getAttribute('id')) {
                   this.targetedFolderId = folder.getAttribute('id');
               } else if (e.target.closest('.vtl-node.vtl-leaf-node')) {
                   this.targetedFolderId = e.target.closest('.vtl-node.vtl-leaf-node').getAttribute('id');
                   this.isLeaf = true;
               }

               if (!!this.draggedFileId && !!this.targetedFolderId) {
                   await this.updateFileFolder(this.draggedFileId, this.targetedFolderId, this.isLeaf);
               }
            }
        },
        components: {
            loader: () => import("../components/Loader"),
            pagination: () => import("../components/PaginationComponent"),
            ShareModal: () => import("../components/ShareModal"),
            CompanyNodeCollapses,
            FolderSystem,
            Breadcrumb,
            ImageCropper:() => import("../components/ImageCropper"),
        }
    };
</script>
<style scoped>
    .video-checkbox {
        vertical-align: top;
        float: left;
        margin-right: 5px;
    }

    .video-thumb {
        background-size: 50px 50px;
        background-position: center;
    }

    .media-data-list { /* Components Root Element ID */
        position: relative;
    }

    .loader { /* Loader Div Class */
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
        background-color: #eceaea;
        background-image: url(/images/small-loader.gif);
        background-size: 50px;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 10000000;
        opacity: 0.4;
        filter: alpha(opacity=40);
    }

    select.select-padding {
        padding: 5px;
    }

    .modal-list-data {
        list-style: inside;
    }

    .share-container{
        text-align: center;
        margin: 35px 80px;
        padding: 20px;
        border-radius: 6px;
        box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.25);
    }
    .modal-share-icon {
        padding: 15px;
        background-color: #f7f7fa;
        position: relative;
        vertical-align: middle;
    }
    .share-choose-icon a{
        color: #000000;
    }
    span.moveable{ cursor: move}
   .disable-pointer{pointer-events: none}

</style>

<style>
    .jconfirm-modal-title {
        font-size: 16px !important;
        color: #1e0857;
    }

    .manage-content .jconfirm-buttons {
        float: none !important;
        display: flex;
        justify-content: center;
    }
    .manage-content-banner {
        display: inline-block;
        background-color: rgb(255, 196, 46);
        padding: 12px 17px;
        margin-left: 20px;
    }
    .manage-content-banner p {
        margin: 0px;
        padding: 0px;
        color: #ffffff;
        font-weight: 600;
        font-size: 14px;
    }
    .tooltip { top: 0; }

    .upload-content {
        border-radius: 6px;
    }
    .content-customized-tab .nav-link {
        color: #1e0857 !important;
    }
    .content-customized-tab .nav-item a {
        border-radius: 6px;
    }
    .content-customized-tab .nav-tabs .nav-link.active {
        background-color: #2a8bf2 !important;
    }
    .content-manage-breadcrumb {
        /* width: 300px; */
        background: #FFFFFF;
        color: #1e0857;
        padding: 15px 20px;
        font-size: 14px;
    }
    .content-manage-breadcrumb ul {
        margin: 0px;
        padding: 0px;
        list-style: none;
        display: inline;
    }
    .content-manage-breadcrumb ul li{
        display: inline-block;
        margin: 0px;
        padding: 0px;
    }
    .content-manage-breadcrumb ul li i{
        margin: 0px 10px;
    }
    .content-manage-breadcrumb ul li:last-child i {
        display: none;
    }
    .issuer-content-table thead tr th {
        color: #1e0857;
        font-size: 14px;
        font-weight: 600;
        min-width: 65px; /*changed by khalid*/
    }
    .issuer-content-table tbody tr td div.content-thumbnail img{
        width: 110px;
        height: 50px;
        background-color: #FFFFFF;
        /*border-radius: 6px;*/
    }
    .issuer-content-table tbody tr {
        border-bottom: 10px solid #F7F7FA;
        border-top: 10px solid #F7F7FA;
    }
    .issuer-content-table tbody tr td {
        text-align: center;
        padding: 0px;
    }
    .issuer-content-table tbody tr td a {
        font-size: 14px;
        color:  #2f80ed;
        font-weight: 400;
    }
    .issuer-content-table tbody tr td a:hover{
        text-decoration: underline;
    }
    .issuer-content-table tbody tr td span {
        color: #4f4f4f;
    }
    .issuer-content-table tbody div.content-actions {

    }
    .issuer-content-table tbody div.content-actions ul {
        margin: 0px;
        padding: 0px;
        list-style: none;
        display: inline;
    }
    .issuer-content-table tbody div.content-actions ul li {
        display: inline-block;
        margin: 0px;
        padding: 0px;
    }
    .issuer-content-table tbody div.content-actions ul li a, #videoEditButton, #audioEditButton{
        padding: 5px;
        color: #8b878d;
    }
    .issuer-content-table tbody div.content-actions ul li a:hover, #videoEditButton:hover, #audioEditButton:hover{
        color: #000;
    }
    .issuer-content-table tbody div.content-actions ul li a.del-btn{
        color: rgba(235, 87, 87, 0.9);
    }
    .issuer-content-table tbody div.content-actions ul li a.del-btn:hover{
        color: #ff0000;
    }
    .media-file-unpublished{
        color: #ff0000;
    }
    .media-file-published{
        color: #32cd32;
    }
    /*css added by khalid*/
    .action-min-width{
        min-width: 130px;
    }
    .issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon {
        background-color: #fff;
        border: 1px solid #cccccc63;
        cursor: pointer;
        height: 27px;
        position: absolute;
        top: -9px;
        right: -10px;
        bottom: 0;
        padding-bottom: 2px;
        width: 27px;
    }
    .issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon > img {
        height: 15px;
        width: auto;
    }
    .thumb-edit-modal .cropper-view-box { border-radius: 0 }

    @media screen and (min-width: 1200px) and (max-width: 1367px) {
        .issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon > img { margin-top: 3px; }
    }
    @media screen and (min-width: 1400px) and (max-width: 1445px) {
        .issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon > img { margin-top: 3px; }
    }
    @media(min-width: 1600px) {
        .issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon { right: -5px; }
        .issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon > img { margin-top: -3px; }
    }
    @media(min-width: 1800px) {
        .issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon { right: 5px; }
    }
    @media(min-width: 1900px) {
        .issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon { right: 14px; }
    }
    @media(min-width: 2100px) {
        .issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon { right: 29px; }
    }
    @media(min-width: 2400px) {
        .issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon { right: 55px; }
    }
</style>
