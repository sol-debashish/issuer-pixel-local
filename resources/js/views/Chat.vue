<template>
    <div class="chat">
        <div class="container-fluid px-0">

            <div class='row'>
                <div class='col-lg-5'>
                    <div class='row'>
                        <div class='col-md-7 grid-margin p-0'>
                            <div v-if="senderCompanyNotFound"
                                 class="row collapse show no-gutters d-flex h-100 position-relative">
                                <div class="col text-center mb-5">
                                    <img src="/images/issuerpixel_logo.png" alt="issuerpixel_logo" class="my-5">
                                    <h3 class="mt-5">Company not found</h3>
                                </div>
                            </div>
                            <div class='card' v-else>
                                <div class='card-body general-info' style="height:785px; overflow:auto;">

                                    <b-tabs class="general-nav" fill>
                                        <b-tab title-link-class="tab-menu-responsive general-tab" title="General"
                                               @click="senderLoadTabContent('senderGeneralInfo')"
                                               :active="senderActiveTab === 0">
                                            <div class="chat-message-search-loader"
                                                 v-if="senderGeneralContentLoading"></div>
                                            <b-card-text>
                                                <div class="row mx-auto w-100 content-div">
                                                    <ul class="general-info">
                                                        <li v-if="senderIcon" class="text-center mt-3">
                                                            <img :src="senderIcon" alt=""
                                                                 class="company-profile-photo rounded-circle" width="70"
                                                                 height="70">
                                                        </li>
                                                        <li class="li-margin-top" v-if="senderAddress"><i class="fas fa-map-marker-alt"></i> {{
                                                            senderAddress }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="senderPhoneNumber"><i
                                                            class="fas fa-phone-alt"></i> {{ senderPhoneNumber }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="senderName"><i
                                                            class="fas fa-link"></i> <a href="https://issuerpixel.com"
                                                                                        target="_blank">https://issuerpixel.com</a>
                                                        </li>
                                                        <li class="li-margin-top" v-if="senderCeo"><strong>CEO: </strong>{{
                                                            senderCeo }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="senderCfo"><strong>CFO: </strong>{{
                                                            senderCfo }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="senderPublicPrivateType"><strong>Type: </strong>{{
                                                            senderPublicPrivateType }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="senderEntityType"><strong>Legal
                                                            Entity Type: </strong>{{ senderEntityType }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="senderAuditedFinancials"><strong>Audited
                                                            Financials: </strong>{{ senderAuditedFinancials }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="senderIntellectualProperty.length">
                                                            <strong>Intellectual Property:</strong>
                                                            <span v-for="(ip, ipIndex) in senderIntellectualProperty"
                                                                  :key="ipIndex">
                                                              {{ nameWithComma(ip.name, ipIndex, senderIntellectualProperty.length) }}
                                                            </span>
                                                        </li>
                                                        <li class="li-margin-top" v-if="senderNumberOfShareholder"><strong>Number
                                                            of Shareholders: </strong>{{ senderNumberOfShareholder }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="senderRecentValuation"><strong>Most
                                                            Recent Valuation: </strong>{{ senderRecentValuation }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="senderNumberOfEmployee"><strong>Number
                                                            Of Employee: </strong>{{ senderNumberOfEmployee }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="senderConglomerate"><strong>Number
                                                            Of Employee: </strong><a href="">Show List of Companies</a></li>

                                                        <li class="social-media-icon li-margin-top"
                                                            v-if="senderCompanySocialMediaPlatform.length">
                                                            <p class="mb-2"><strong>Social Media Channels: </strong></p>
                                                            <template
                                                                v-for="(platform, platformIndex) in senderCompanySocialMediaPlatform">

                                                                <a :href="validateURL(platform.pivot.value)"
                                                                   target="_blank">
                                                                    <div class="scoop-icon"
                                                                         v-if="'scoop' == platform.url_validate_string">
                                                                        <svg enable-background="new 0 0 128 128"
                                                                             id="Social_Icons"
                                                                             version="1.1" viewBox="0 0 128 128"
                                                                             xml:space="preserve"
                                                                             xmlns="http://www.w3.org/2000/svg"
                                                                             xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x32__stroke"><g id="Scoopit"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128"/><path
                                                                            clip-rule="evenodd"
                                                                            d="M83.622,90.814h16.529v15.89H83.622V90.814z     M44.126,20.568c-4.682,0.051-11.6,0.042-16.277,0l-0.028,14.168h16.291L44.126,20.568z M69.044,20.568l-16.553-0.009    l0.023,21.856L27.756,42.41l0.037,32.14l0.005,32.177h16.436l-0.047-52.974l8.295-0.005l-0.019,38.027    c0,1.919,0.117,3.833,0.364,5.737c0.686,5.471,3.025,8.295,8.108,9.304c5.602,1.111,11.992,0.537,17.612-0.065l0.023-11.32    c-0.378,0.009-3.776,0.009-4.15,0c-3.646-0.126-5.326-1.667-5.345-5.317L69.03,53.744l9.537,0.005l0.005-11.283l-9.551-0.005    L69.044,20.568z M83.617,38.605l2.259,44.441c3.3-0.065,8.762-0.047,12.062-0.014l2.236-44.585l0.042-17.893H83.608L83.617,38.605    z M0,128V0h128v128H0z"
                                                                            fill="#000000" fill-rule="evenodd"
                                                                            id="Scoopit_1_"/></g></g></svg>
                                                                    </div>
                                                                    <div class="tiktok-icon"
                                                                         v-else-if="'tiktok.com' == platform.url_validate_string">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                            aria-hidden="true"
                                                                            focusable="false" width="22px" height="22px"
                                                                            preserveAspectRatio="xMidYMid meet"
                                                                            viewBox="0 0 32 32">
                                                                            <path
                                                                                d="M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563c1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291c-.76-.344-1.468-.787-2.161-1.24c-.009 3.896.016 7.787-.025 11.667c-.104 1.864-.719 3.719-1.803 5.255c-1.744 2.557-4.771 4.224-7.88 4.276c-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22.3 22.3 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615c2.208-1.923 5.301-2.839 8.197-2.297c.027 1.975-.052 3.948-.052 5.923c-1.323-.428-2.869-.308-4.025.495a4.618 4.618 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145c.317 2.188 2.421 4.027 4.667 3.828c1.489-.016 2.916-.88 3.692-2.145c.251-.443.532-.896.547-1.417c.131-2.385.079-4.76.095-7.145c.011-5.375-.016-10.735.025-16.093z"
                                                                                fill="#626262"/>
                                                                        </svg>
                                                                    </div>

                                                                    <i v-else :class="platform.icon_class"></i>
                                                                </a>
                                                            </template>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </b-card-text>
                                        </b-tab>
                                        <b-tab title-link-class="tab-menu-responsive" title="Classifications"
                                               @click="senderLoadTabContent('senderClassifications')"
                                               :active="senderActiveTab === 1">
                                            <div class="chat-message-search-loader"
                                                 v-if="senderClassificationlContentLoading"></div>
                                            <b-card-text>
                                                <div class="row mx-auto w-100 text-center content-div ">
                                                    <div class="row mx-auto w-100 text-center mt-4 mb-5 classification-center">

                                                        <div class="row mx-auto w-100" v-if="! hideCatContainer">
                                                            <div
                                                                no-body
                                                                class="border-0 col-lg-12 col-md-12 pb-3"
                                                                v-for="(each,index) in multipleNodes"
                                                                :key="each.categorization_id"
                                                            >
                                                                <CompanyNodeCollapses v-bind:each="each"
                                                                                      :objectIndex="index"
                                                                                      :enableEditButton="enableEditButton"></CompanyNodeCollapses>

                                                            </div>
                                                        </div>
                                                        <div class="classification-center" v-if="hideCatContainer">Company
                                                            classifications not found
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card-text>
                                        </b-tab>
                                        <b-tab title-link-class="tab-menu-responsive general-tab" title="Content"
                                               @click="senderLoadTabContent('senderContent')"
                                               :active="senderActiveTab === 2">
                                            <div class="chat-message-search-loader"
                                                 v-if="senderContentlContentLoading"></div>
                                            <b-card-text>
                                                <div class="row mx-auto w-100 text-center content-div" v-if="! senderHideContent">
                                                    <table class="mt-4 content-table">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th class="content-title-text">Content Title</th>
                                                                <th class="content-title-text">Content Type</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr  v-for="content in contents">
                                                                <td>
                                                                    <div class="video-thumb-table" v-if='content.media_type == 2'>
                                                                        <router-link link
                                                                                     :to="{ name: 'ViewVideoDetails',params: { id: content.uuid }}">
                                                                            <img
                                                                                :src="'https://view.vzaar.com/'+ content.video_id +'/image'"
                                                                                alt=""

                                                                                class="img img-responsive video-btn video-thumb video-image">
                                                                        </router-link>

                                                                    </div>
                                                                    <router-link v-else link
                                                                                 :to="{ name: 'ViewAudioDetails',params: { id: content.uuid }}">
                                                                        <img src="/images/audio_thumb.png" alt=""
                                                                             class="audio-image">
                                                                    </router-link>
                                                                </td>
                                                                <td class="content-text">{{content.name | truncate(100, '...')}}</td>
                                                                <td class="content-text" v-if="content.media_type == 2">Video</td>
                                                                <td class="content-text" v-else>Audio</td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="3">
                                                                    <pagination v-if="senderContentPagination.last_page > 1"
                                                                                :pagination="senderContentPagination" :offset="5"
                                                                                @paginate="getSenderContentList()"></pagination>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="text-center mt-4" v-if="senderHideContent">Company Content not
                                                    found
                                                </div>
                                            </b-card-text>
                                        </b-tab>
                                    </b-tabs>

                                </div>
                            </div>
                        </div>
                        <div class='col-md-5 grid-margin p-0'>
                            <div class='card'>
                                <div class='card-body' style="height:785px; overflow:auto;"
                                     @scroll="messageBoxScrolling" ref="messageBox">
                                    <div class="card-title clearfix">
                                        <p class='mb-0 float-left mesg-heading-text'>Messages </p>
                                        <span class="float-right plus-button" @click="showSearchModal()"><i
                                            class="fas fa-plus"></i></span>
                                    </div>

                                    <p class="custom-hr-theme my-0"></p>
                                    <div class='row state-container mt-2'>
                                        <div class="col pb-3">
                                            <div class="chat-message-search-loader" v-if="contentLoading"></div>
                                            <div class="">
                                                <div class="input-group search-input">
                                                    <div class="input-group-append">
                                                        <span class="btn-chat-search dashboard-search-icon">
                                                            <i class="fa fa-search"></i>
                                                        </span>
                                                    </div>
                                                    <input type="text" class="form-control"
                                                           v-model="chatMessageSearch"
                                                           @keyup="getChatMessage()"
                                                           placeholder="Search"/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <span v-for="latestChatMessage in latestChatMessages">
                                        <div class='row state-container user-list-border'
                                             :class="(latestChatMessage.userId == activeUser)? 'active-user': ''">
                                            <div class="col-lg-12 pb-3 mt-3"
                                                 @click="chat(latestChatMessage.userId, latestChatMessage.createdAt, latestChatMessage.companySlug, latestChatMessage.unreadMessages)">
                                                <i class="fa fa-circle online"
                                                   v-if="checkOnline(latestChatMessage.userId)"></i>
                                                <img class="img-xs rounded-circle" :src="latestChatMessage.companyPhoto"
                                                     :alt="latestChatMessage.userName" width="80" height="80">
                                                <span class="user-list-name"
                                                      :class="(latestChatMessage.userId == activeUser)? 'active-user-name-color': ''">{{latestChatMessage.userName}}</span>
                                                <span class="pull-right created-date float-right member-list-time"
                                                      :class="(latestChatMessage.userId == activeUser)? 'active-time-color': ''">{{latestChatMessage.createdAt}}</span>
                                            </div>
                                             <div class="col-lg-12 pb-3">
                                                <b-badge pill variant="secondary" class="unread-message float-right ml-1" v-if="latestChatMessage.unreadMessages">
                                                    {{latestChatMessage.unreadMessages}}
                                                </b-badge>
                                                <p class="message-text-color"
                                                   :class="(latestChatMessage.userId == activeUser)? 'active-msg-color': ''"
                                                   v-if="latestChatMessage.fileFormat == ''">{{latestChatMessage.message}}</p>
                                                <p class="message-text-color"
                                                   v-else-if="latestChatMessage.fileFormat === 'image'"><span
                                                    class="latest-msg-image"><img src="/images/chat-icons/image-file-icon.png"
                                                                                  alt="" class="mr-2">Photo</span></p>
                                                <p class="message-text-color"
                                                   v-else-if="latestChatMessage.fileFormat === 'video'"><span
                                                    class="latest-msg-video"><img src="/images/chat-icons/latest-msg-film.png"
                                                                                  alt="" class="mr-2">Video</span></p>
                                                 <p class="message-text-color"
                                                    v-else-if="latestChatMessage.fileFormat === 'audio'"><span
                                                     class="latest-msg-video"><i class=" fa fa-headphones-alt mr-2"></i>Audio</span></p>
                                                <p v-else><span
                                                    class="latest-msg-file"><img src="/images/chat-icons/latest-file.png" alt=""
                                                                                 class="mr-2">File</span></p>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--right-now-working-->
                <div class='col-lg-7'>
                    <div class='row'>
                        <div class='col-md-7 grid-margin p-0' v-if="activeUser != ''">
                            <div class="chat-message-search-loader" v-if="fileUploading"></div>
                            <div class='card'>
                                <div class='card-body popup-icons-design'>

                                    <transition name="fade">
                                        <ul v-if="seen" class="popup-ul" v-closable="{exclude: ['button'], handler: 'onClose'}">
                                            <li class="li-first popup-li"><img src="/images/chat-icons/film-icon.png"
                                                                      alt=""><input name="attachment" type="file"
                                                                                    v-on:change="file($event)" multiple
                                                                                    accept="video/*"></li>
                                            <li class="li-first popup-li"><img src="/images/chat-icons/image-file-icon.png">
                                                <input name="attachment" type="file" v-on:change="file($event)"
                                                       accept="image/*"></li>
                                            <li class="li-first popup-li"><img src="/images/chat-icons/file-icon.png" alt="">
                                                <input name="attachment" type="file" v-on:change="file($event)"></li>
                                        </ul>
                                    </transition>

                                    <div class='row state-container mt-2'>
                                        <div class="col pb-3">
                                            <div class="chatbox" v-bind:id="'chatbox-' + cChat.id">
                                                <div class="box box-primary direct-chat direct-chat-primary">
                                                    <div class="box-header with-border">
                                                        <h3 class="box-title d-inline" v-if="cChat.name">
                                                            <img v-if="cChat.image"
                                                                 class="chat-header-image rounded-circle"
                                                                 :src="storeagePath+'/company_image/'+cChat.image"
                                                                 :alt="cChat.name" >
                                                            <img v-else class="chat-header-image rounded-circle"
                                                                 src="/images/image-placeholder-1.png" :alt="cChat.name"
                                                                 >
                                                        </h3>
                                                        <div class="d-inline name-part">
                                                            <span class="name-part-child warp-text-title">{{ cChat.name }} <br><span
                                                                class="created-date" v-if="cChat.lastOnline">last online {{cChat.lastOnline}}</span></span>
                                                        </div>
                                                    <!--===================Future work==================-->
                                                    <!--  <div class="chat-menu d-inline mr-2">-->
                                                    <!--  <i class="fas fa-ellipsis-v chat-menu-icon"></i>-->
                                                    <!-- </div>-->
                                                        <div class="chat-menu d-inline">
                                                            <i class="fa fa-paperclip chat-file-icon"></i>
                                                            <input name="attachment" type="file"
                                                                   v-on:change="file($event)">
                                                        </div>
                                                    </div>

                                                    <div style="" class="box-body">
                                                        <div class="direct-chat-messages"
                                                             v-bind:id="'chatboxscroll-' + cChat.id">
                                                            <div v-for="(messagePacket, index) in messages"
                                                                :key="messagePacket.id"
                                                                 class="direct-chat-msg"
                                                                 v-bind:class="{ 'right' : (messagePacket.fromUserId == user_id) }"
                                                                 :style="(messagePacket.fromUserId == user_id) ? 'margin-left: 50px;' : 'margin-right: 50px;'"
                                                                @mouseover="showEditDelete(messagePacket.id)"
                                                                @mouseleave="hideEditDelete(messagePacket.id)">

                                                                <img v-if="messagePacket.image"
                                                                     :align="messagePacket.fromUserId == user_id ? 'right': 'left'"
                                                                     class="img-xs rounded-circle"
                                                                     :src="storeagePath+'/company_image/'+messagePacket.image"
                                                                     width="40" height="40">

                                                                <img v-else-if="messagePacket.newMessageSenderImage"
                                                                     :align="messagePacket.fromUserId == user_id ? 'right': 'left'"
                                                                     class="img-xs rounded-circle"
                                                                     :src="messagePacket.newMessageSenderImage"
                                                                     :alt="cChat.name" width="40" height="40">
                                                                <img v-else
                                                                     :align="messagePacket.fromUserId == user_id ? 'right': 'left'"
                                                                     class="img-xs rounded-circle"
                                                                     src="/images/image-placeholder-1.png"
                                                                     :alt="cChat.name" width="40" height="40">


                                                                <div v-if="messagePacket.type == 'text'" :id="'message-' + messagePacket.id"
                                                                     v-bind:class="{ 'pull-right' : (messagePacket.fromUserId == user_id), 'pull-left' : (messagePacket.fromUserId != user_id) }"
                                                                     class="direct-chat-text clearfix"
                                                                     :style="(messagePacket.fromUserId == user_id) ? 'margin: 0px 50px 0px auto; word-break: break-all; padding: 3px 10px; width: fit-content;' : 'margin: 0px auto 0px 50px; word-break: break-all;padding: 3px 10px; width: fit-content;'">
                                                                    {{messagePacket.message}}

                                                                </div>
                                                                <span class="chat-edit-option clearfix d-none" v-if="messagePacket.fromUserId == user_id" :id="'edit-delete-' + messagePacket.id">
                                                                     <span  @click="showEditMenu(messagePacket.id)" class="menu-position">
                                                                         <i class="fas fa-ellipsis-v edit-menu-icon"></i>
                                                                         <small :id="'showEditOption-' + messagePacket.id" style="display: none" class="showEditMenu" >
                                                                             <span></span>
                                                                                <span class="edit-menu-item" v-if="messagePacket.type =='text'" @click="editMessage(messagePacket.id)">Edit</span>
                                                                                <span class="edit-menu-item" @click="deleteMessage(messagePacket.id, messagePacket.type, index)">Delete</span>
                                                                         </small>
                                                                     </span>
                                                                </span>


                                                                <div v-if="messagePacket.type == 'file'"
                                                                     v-bind:class="{ 'pull-right' : (messagePacket.fromUserId == user_id), 'pull-left' : (messagePacket.fromUserId != user_id) }"
                                                                     class="direct-chat-text clearfix"
                                                                     :style="(messagePacket.fromUserId == user_id) ? 'margin: 0px 50px 0px auto; word-break: break-all; padding: 3px 3px; overflow: hidden; width: fit-content;' : 'margin: 0px auto 0px 50px; word-break: break-all; padding: 3px 3px; overflow: hidden; width: fit-content;'"
                                                                    @mouseover="showEditDelete(messagePacket.id)"
                                                                    @mouseleave="hideEditDelete(messagePacket.id)">
                                                                    <a v-if="messagePacket.fileFormat == 'image'"
                                                                       :href="messagePacket.filePath"
                                                                       :title="messagePacket.message" target="_new"><img
                                                                        height="110px;" width="110px;"
                                                                        :src="messagePacket.filePath"></a>
                                                                    <a v-else-if="messagePacket.fileFormat == 'video'" :href="messagePacket.filePath"
                                                                        :title="messagePacket.message"
                                                                       target="_new"><span class="info-box-icon"
                                                                                           style="color: gray;background:none;"><img src="/images/chat-icons/film@3x.png"
                                                                                                      alt="" ></span>
                                                                    </a>
                                                                    <a v-else-if="messagePacket.fileFormat == 'audio'" :href="messagePacket.filePath"
                                                                       download :title="messagePacket.message"
                                                                       target="_new"><span class="info-box-icon"
                                                                                           style="color: gray;background:none;"><i class=" fa fa-headphones-alt"></i></span>
                                                                    </a>
                                                                    <a v-else :href="messagePacket.filePath"
                                                                       download :title="messagePacket.message"
                                                                       target="_new"><span class="info-box-icon"
                                                                                           style="color: gray;background:none;"><img src="/images/chat-icons/file-text@3x.png"
                                                                                                                                     alt="" ></span>
                                                                    </a>
                                                                </div>

                                                                <span :id="'edit-status-' + messagePacket.id" class="d-none">{{messagePacket.editStatus}}</span>
                                                                <small style="width:50px;" :style="messagePacket.fromUserId == user_id ? 'float:right; text-align:end;': 'float:left;'" :id="'edit-status-text-' + messagePacket.id" class="direct-chat-info clearfix direct-chat-timestamp ">
                                                                    <span v-if="messagePacket.editStatus">(edited) </span>
                                                                </small>
                                                                <div class="direct-chat-info clearfix"
                                                                     :style="messagePacket.fromUserId == user_id ? 'float:right;': 'float:left;'">
                                                                    <small class="direct-chat-timestamp">{{
                                                                        messagePacket.date + ' ' + messagePacket.time |
                                                                        dateFormat }}</small>

                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div style="display: block;" class="box-footer">
                                                        <div class="input-group">
                                                            <span v-if="!editMessageAction" class="input-group-btn">


                                                                <div class="btn btn-default btn-file " ref="button"
                                                                     @click="seen = !seen">
                                                                    <img src="/images/chat-icons/plus-icon.png" alt="">
                                                                </div>
                                                            </span>
                                                            <span v-else class="input-group-btn">
                                                                <div class="btn btn-default btn-file" @click="resetMessageUpdate">
                                                                    <i class="fa fa-times message-update-reset-icon"></i>
                                                                </div>
                                                            </span>
                                                            <input name="message" ref="inputfocusfinal"  v-bind:id="'msginput-' + cChat.id"
                                                                   v-model.trim="message"
                                                                   placeholder="Type a message here "
                                                                   class="form-control text-input chat-box-input talha-focus" type="text"
                                                                   v-on:keydown="editMessageAction ? updateMessage($event, updateMessageId) : sendMessage($event)" autocomplete="off">
                                                            <span class="input-group-btn">
                                                                <span class="smile-icon" @click="toogleDialogEmoji" ref="emojiicon"><i
                                                                    class="far fa-smile"></i></span>
                                                                <div class="btn btn-default btn-file send-icon-image"
                                                                     @click.left="editMessageAction ? updateMessage($event, updateMessageId) : sendMessage($event)">
                                                                    <img src="/images/chat-icons/send-icon.png" alt="">
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <VEmojiPicker
                                                            v-closable="{exclude: ['emojiicon'], handler: 'offEmojiDiv'}"
                                                            v-show="showDialog"
                                                            :style="{ height: '100' }"
                                                            labelSearch="Search"
                                                            lang="pt-BR"
                                                            @select="onSelectEmoji"
                                                        />
                                                    </div>
                                                </div>
                                                <span class="d-inline-block">
                                                    <span v-if="typing" class="typing-message">{{ cChat.name }} {{ typing }}</span>
                                                </span>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-md-5 grid-margin p-0' v-if="activeUser != ''">
                            <div v-if="receiverCompanyNotFound"
                                 class="row collapse show no-gutters d-flex h-100 position-relative">
                                <div class="col text-center mb-5">
                                    <img src="/images/issuerpixel_logo.png" alt="issuerpixel_logo" class="my-5">
                                    <h3 class="mt-5">Company not found</h3>
                                </div>
                            </div>
                            <div class='card' v-else>
                                <div class='card-body general-info' style="height:785px; overflow:auto;">


                                    <b-tabs class="general-nav" fill>
                                        <b-tab title-link-class="tab-menu-responsive" class="general-tab"
                                               title="General" @click="loadTabContent('receiverGeneralInfo')"
                                               :active="activeTab === 0">
                                            <div class="chat-message-search-loader"
                                                 v-if="receiverGeneralContentLoading"></div>
                                            <b-card-text>
                                                <div class="row mx-auto w-100 content-div">
                                                    <ul class="general-info">
                                                        <li v-if="icon" class="text-center mt-3">
                                                            <img :src="icon" alt=""
                                                                 class="company-profile-photo rounded-circle" width="70"
                                                                 height="70">
                                                        </li>

                                                        <li class="li-margin-top" v-if="address"><i
                                                            class="fas fa-map-marker-alt"></i> {{ address }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="phoneNumber"><i
                                                            class="fas fa-phone-alt"></i> {{ phoneNumber }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="receiverName"><i
                                                            class="fas fa-link"></i> <a href="https://issuerpixel.com"
                                                                                        target="_blank">https://issuerpixel.com</a>
                                                        </li>
                                                        <li class="li-margin-top" v-if="ceo"><strong>CEO: </strong>{{ ceo }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="cfo"><strong>CFO: </strong>{{ cfo }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="publicPrivateType">
                                                            <strong>Type: </strong>{{ publicPrivateType }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="entityType"><strong>Legal Entity
                                                            Type: </strong>{{ entityType }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="auditedFinancials"><strong>Audited
                                                            Financials: </strong>{{ auditedFinancials }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="intellectualProperty.length">
                                                            <strong>Intellectual Property:</strong>
                                                            <span v-for="(ip, ipIndex) in intellectualProperty"
                                                                  :key="ipIndex">
                                                  {{ nameWithComma(ip.name, ipIndex, intellectualProperty.length) }}
                                                </span>
                                                        </li>
                                                        <li class="li-margin-top" v-if="numberOfShareholder"><strong>Number
                                                            of Shareholders: </strong>{{ numberOfShareholder }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="recentValuation"><strong>Most Recent
                                                            Valuation: </strong>{{ recentValuation }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="numberOfEmployee"><strong>Number Of
                                                            Employee: </strong>{{ numberOfEmployee }}
                                                        </li>
                                                        <li class="li-margin-top" v-if="conglomerate"><strong>Number Of
                                                            Employee: </strong><a href="">Show List of Companies</a></li>
                                                        <!--                                        <li>{{ companySocialMediaPlatform }}</li>-->
                                                        <li class="social-media-icon li-margin-top"
                                                            v-if="companySocialMediaPlatform.length">
                                                            <p class="mb-2"><strong>Social Media Channels: </strong></p>
                                                            <template
                                                                v-for="(platform, platformIndex) in companySocialMediaPlatform">
                                                                <!--                                                {{ platform.name }}-->
                                                                <a :href="validateURL(platform.pivot.value)"
                                                                   target="_blank">
                                                                    <div class="scoop-icon"
                                                                         v-if="'scoop' == platform.url_validate_string">
                                                                        <svg enable-background="new 0 0 128 128"
                                                                             id="Social_Icons"
                                                                             version="1.1" viewBox="0 0 128 128"
                                                                             xml:space="preserve"
                                                                             xmlns="http://www.w3.org/2000/svg"
                                                                             xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x32__stroke"><g id="Scoopit"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128"/><path
                                                                            clip-rule="evenodd"
                                                                            d="M83.622,90.814h16.529v15.89H83.622V90.814z     M44.126,20.568c-4.682,0.051-11.6,0.042-16.277,0l-0.028,14.168h16.291L44.126,20.568z M69.044,20.568l-16.553-0.009    l0.023,21.856L27.756,42.41l0.037,32.14l0.005,32.177h16.436l-0.047-52.974l8.295-0.005l-0.019,38.027    c0,1.919,0.117,3.833,0.364,5.737c0.686,5.471,3.025,8.295,8.108,9.304c5.602,1.111,11.992,0.537,17.612-0.065l0.023-11.32    c-0.378,0.009-3.776,0.009-4.15,0c-3.646-0.126-5.326-1.667-5.345-5.317L69.03,53.744l9.537,0.005l0.005-11.283l-9.551-0.005    L69.044,20.568z M83.617,38.605l2.259,44.441c3.3-0.065,8.762-0.047,12.062-0.014l2.236-44.585l0.042-17.893H83.608L83.617,38.605    z M0,128V0h128v128H0z"
                                                                            fill="#000000" fill-rule="evenodd"
                                                                            id="Scoopit_1_"/></g></g></svg>
                                                                    </div>
                                                                    <div class="tiktok-icon"
                                                                         v-else-if="'tiktok.com' == platform.url_validate_string">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                            aria-hidden="true"
                                                                            focusable="false" width="22px" height="22px"
                                                                            preserveAspectRatio="xMidYMid meet"
                                                                            viewBox="0 0 32 32">
                                                                            <path
                                                                                d="M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563c1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291c-.76-.344-1.468-.787-2.161-1.24c-.009 3.896.016 7.787-.025 11.667c-.104 1.864-.719 3.719-1.803 5.255c-1.744 2.557-4.771 4.224-7.88 4.276c-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22.3 22.3 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615c2.208-1.923 5.301-2.839 8.197-2.297c.027 1.975-.052 3.948-.052 5.923c-1.323-.428-2.869-.308-4.025.495a4.618 4.618 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145c.317 2.188 2.421 4.027 4.667 3.828c1.489-.016 2.916-.88 3.692-2.145c.251-.443.532-.896.547-1.417c.131-2.385.079-4.76.095-7.145c.011-5.375-.016-10.735.025-16.093z"
                                                                                fill="#626262"/>
                                                                        </svg>
                                                                    </div>

                                                                    <i v-else :class="platform.icon_class"></i>
                                                                </a>
                                                            </template>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </b-card-text>
                                        </b-tab>
                                        <b-tab title-link-class="tab-menu-responsive" title="Classifications"
                                               @click="loadTabContent('receiverClassifications')"
                                               :active="activeTab === 1">
                                            <div class="chat-message-search-loader"
                                                 v-if="receiverClassificationlContentLoading"></div>
                                            <b-card-text>
                                                <div class="row mx-auto w-100 text-center content-div">
                                                    <div class="text-center mt-4 mb-5">
                                                        <div class="row mx-auto w-100" v-if="! receiverHideCatContainer">
                                                            <div
                                                                no-body
                                                                class="border-0 col-lg-12 col-md-12 pb-3"
                                                                v-for="(each,index) in receiverMultipleNodes"
                                                                :key="each.categorization_id"
                                                            >
                                                                <CompanyNodeCollapses v-bind:each="each"
                                                                                      :objectIndex="index"
                                                                                      :enableEditButton="enableEditButton"></CompanyNodeCollapses>

                                                            </div>
                                                        </div>
                                                        <div class="text-center" v-if="receiverHideCatContainer">Company
                                                            classifications not found
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card-text>
                                        </b-tab>
                                        <b-tab title-link-class="tab-menu-responsive" title="Content"
                                               @click="loadTabContent('receiverContent')" :active="activeTab === 2">
                                            <div class="chat-message-search-loader"
                                                 v-if="receiverContentlContentLoading"></div>
                                            <b-card-text>
                                                <div class="row mx-auto w-100 text-center content-div" v-if="! receiverHideContent">
                                                    <table class="mt-4 content-table">
                                                        <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th class="content-title-text">Content Title</th>
                                                            <th class="content-title-text">Content Type</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr  v-for="content in receiverContents">
                                                            <td>
                                                                <div class="video-thumb-table" v-if='content.media_type == 2'>
                                                                    <router-link link
                                                                                 :to="{ name: 'ViewVideoDetails',params: { id: content.uuid }}">
                                                                        <img
                                                                            :src="'https://view.vzaar.com/'+ content.video_id +'/image'"
                                                                            alt=""

                                                                            class="img img-responsive video-btn video-thumb video-image">
                                                                    </router-link>

                                                                </div>
                                                                <router-link v-else link
                                                                             :to="{ name: 'ViewAudioDetails',params: { id: content.uuid }}">
                                                                    <img src="/images/audio_thumb.png" alt=""
                                                                         class="audio-image">
                                                                </router-link>
                                                            </td>
                                                            <td class="content-text">{{content.name | truncate(100, '...')}}</td>
                                                            <td class="content-text" v-if="content.media_type == 2">Video</td>
                                                            <td class="content-text" v-else="">Audio</td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="3">
                                                                <pagination v-if="receiverContentPagination.last_page > 1"
                                                                            :pagination="receiverContentPagination" :offset="5"
                                                                            @paginate="getReceiverContentList()"></pagination>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="text-center mt-4" v-if="receiverHideContent">Company Content not
                                                    found
                                                </div>
                                            </b-card-text>
                                        </b-tab>
                                    </b-tabs>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <!--chat functionality-->
        <!--        <div class="panel panel-default ffside">-->
        <!--            <div class="panel-heading">Users</div>-->
        <!--            <div class="panel-body" style="padding:0px;">-->
        <!--                <ul class="list-group">-->
        <!--                    <li class="list-group-item" v-for="chatList in chatLists" style="cursor: pointer;" @click="chat(chatList)">{{ chatList.name }}  <i class="fa fa-circle pull-right" v-bind:class="{'online': (chatList.online=='Y')}"></i>  <span class="badge" v-if="chatList.msgCount !=0">{{ chatList.msgCount }}</span></li>-->
        <!--                    <li class="list-group-item" v-if="socketConnected.status == false">{{ socketConnected.msg }}</li>-->
        <!--                </ul>-->
        <!--            </div>-->
        <!--        </div>-->
        <!--chat functionality end-->
        <loader :is-visible="isLoading"></loader>
        <b-modal centered ref="search-modal" size="md" hide-footer title="Search Issuer">
            <div class="row">
                <div class="col-sm-12 form-group">
                    <v-select label="name" :filterable="false" :options="memberList" @search="memberSearch"
                              @input="setChatBox" placeholder="Type here...">
                        <!--                           <div class="spinner" v-show="spinner">Loading...</div>-->

                        <template slot="option" slot-scope="option">
                            <div class="d-center">
                                <img :src='option.companyPhoto' width="35"/>
                                {{ option.userName }}
                            </div>
                        </template>
                        <template slot="selected-option" slot-scope="option">
                            <div class="selected d-center">
                                <img :src='option.companyPhoto' width="35"/>
                                {{ option.userName }}
                            </div>
                        </template>
                    </v-select>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import Vue from 'vue'

    import ChatMessages from "../apis/ChatMessages";
    import vSelect from 'vue-select';
    import Content from "../apis/Content";

    import CompanyNodeCollapses from "../components/CompanyNodeCollapses";
    import { VEmojiPicker, emojisDefault, categoriesDefault } from "v-emoji-picker";

    // This variable will hold the reference to
    // document's click handler
    let handleOutsideClick
    Vue.directive('closable', {
        bind (el, binding, vnode) {
            // Here's the click/touchstart handler
            // (it is registered below)
            handleOutsideClick = (e) => {
                e.stopPropagation()
                // Get the handler method name and the exclude array
                // from the object used in v-closable
                const { handler, exclude } = binding.value
                // This variable indicates if the clicked element is excluded
                let clickedOnExcludedEl = false
                exclude.forEach(refName => {
                    // We only run this code if we haven't detected
                    // any excluded element yet
                    if (!clickedOnExcludedEl) {
                        // Get the element using the reference name
                        const excludedEl = vnode.context.$refs[refName]
                        // See if this excluded element
                        // is the same element the user just clicked on
                        clickedOnExcludedEl = excludedEl.contains(e.target)
                    }
                })
                // We check to see if the clicked element is not
                // the dialog element and not excluded
                if (!el.contains(e.target) && !clickedOnExcludedEl) {
                    // If the clicked element is outside the dialog
                    // and not the button, then call the outside-click handler
                    // from the same component this directive is used in
                    vnode.context[handler]()
                }
            }
            // Register click/touchstart event listeners on the whole page
            document.addEventListener('click', handleOutsideClick)
            document.addEventListener('touchstart', handleOutsideClick)
        },
        unbind () {
            // If the element that has v-closable is removed, then
            // unbind click/touchstart listeners from the whole page
            document.removeEventListener('click', handleOutsideClick)
            document.removeEventListener('touchstart', handleOutsideClick)
        }
    })

    export default {
        data() {
            return {
                // isLoading: false,
                senderIcon: "",
                senderName: "",
                senderAddress: "",
                senderPhoneNumber: "",
                senderEntityType: "",
                senderCeo: "",
                senderCfo: "",
                senderRecentValuation: "",
                senderNumberOfEmployee: "",
                senderNumberOfShareholder: "",
                senderBaseCurrency: "",
                senderConglomerate: "",
                senderConductedFinancing: "",
                senderResearchCoverage: "",
                senderAuditedFinancials: "",
                senderIntellectualProperty: [],
                senderPublicPrivateType: "",
                senderCompanySocialMediaPlatform: [],

                //Receiver info
                icon: "",
                receiverName: "",
                address: "",
                phoneNumber: "",
                entityType: "",
                ceo: "",
                cfo: "",
                recentValuation: "",
                numberOfEmployee: "",
                numberOfShareholder: "",
                baseCurrency: "",
                conglomerate: "",
                conductedFinancing: "",
                researchCoverage: "",
                auditedFinancials: "",
                intellectualProperty: [],
                publicPrivateType: "",
                companySocialMediaPlatform: [],

                user_id: null,
                ws_url: null,
                socket: null,
                cBox: null,
                latestChatMessages: [],
                isLoading: false,
                contentLoading: false,
                messageWindowSize: 300,
                storeagePath: localStorage.getItem('storagePath'),
                chatMessageSearch: "",
                chatMessagePagination: {
                    'current_page': 1
                },
                memberList: [],
                chatLists: [],
                chatBox: [],
                socketConnected: {
                    status: false,
                    msg: 'Connecting Please Wait...'
                },
                bArr: {},

                cChat: {},
                messages: [],
                message: '',
                typing: '',
                timeout: '',
                companyImage: '',
                seen: false,
                activeTab: 0,
                senderActiveTab: 0,
                companySlug: '',
                senderCompanySlug: '',
                multipleNodes: [],
                hideCatContainer: false,
                enableEditButton: false,
                receiverHideCatContainer: false,
                receiverMultipleNodes: [],
                memberIds: [],
                contents: [],
                senderHideContent: false,
                receiverContents: [],
                receiverHideContent: false,
                activeUser: '',
                receiverCompanyNotFound: false,
                senderCompanyNotFound: false,
                senderGeneralTabContentLoaded: false,
                senderClassificationTabContentLoaded: false,
                senderContentTabContentLoaded: false,

                receiverGeneralTabContentLoaded: false,
                receiverClassificationTabContentLoaded: false,
                receiverContentTabContentLoaded: false,

                senderGeneralContentLoading: true,
                senderClassificationlContentLoading: true,
                senderContentlContentLoading: true,

                receiverGeneralContentLoading: false,
                receiverClassificationlContentLoading: false,
                receiverContentlContentLoading: false,
                senderContentPagination: {
                    'current_page': 1
                },
                receiverContentPagination: {
                    'current_page': 1
                },
                firstLoad: true,
                fileUploading: false,
                editMessageAction: false,
                updateMessageId: null,
                showDialog: false,
            };

        },

        methods: {
            onClose() {
                this.seen = false
            },
            offEmojiDiv(){
                this.showDialog = false
            },


            toogleDialogEmoji() {
                this.showDialog = !this.showDialog;
            },
            onSelectEmoji(emoji) {
                this.message += emoji.data;
                // Optional
                // this.toogleDialogEmoji();
            },

            loadTabContent: function (type) {
                switch (type) {
                    case 'receiverGeneralInfo':
                        if (!this.receiverGeneralTabContentLoaded) {
                            this.receiverGeneralContentLoading = true;
                            Content.companyBio(this.companySlug)
                                .then((response) => {
                                    this.receiverGeneralContentLoading = false;
                                    var bioData = response.data.data;
                                    this.entityType = bioData.entityType;
                                    this.phoneNumber = bioData.phone_number;
                                    this.receiverName = bioData.name;
                                    if (!!bioData.headquarters) {
                                        var addressOne = (!!bioData.headquarters.address.street_address_one) ? bioData.headquarters.address.street_address_one + ', ' : '';
                                        var addressTwo = (!!bioData.headquarters.address.street_address_two) ? bioData.headquarters.address.street_address_two + ', ' : ''
                                        var city = (!!bioData.headquarters.address.city) ? bioData.headquarters.address.city + ', ' : '';
                                        var state = (!! bioData.headquarters.address.states) ? bioData.headquarters.address.states.name + ', ' : '';
                                        var zip = (!!bioData.headquarters.address.zip) ? bioData.headquarters.address.zip + ', ' : '';
                                        var country = (!!bioData.headquarters.address.country) ? bioData.headquarters.address.country.name : '';
                                        this.address = addressOne + addressTwo + city + state + zip + country;
                                    }
                                    this.ceo = (bioData.ceo != null) ? bioData.ceo : '';
                                    this.cfo = (bioData.cfo != null) ? bioData.cfo : '';
                                    this.numberOfEmployee = (bioData.numberof_employees != null) ? bioData.numberof_employees.name : '';
                                    this.numberOfShareholder = (bioData.numberof_shareholders != null) ? bioData.numberof_shareholders.name : '';
                                    this.baseCurrency = (bioData.base_currency != null) ? bioData.base_currency.name : '';
                                    this.recentValuation = (bioData.recent_valuation != null) ? bioData.recent_valuation : '';
                                    this.auditedFinancials = (bioData.audited_financials != null) ? bioData.audited_financials ? 'Yes' : 'No' : '';
                                    this.conglomerate = (bioData.conglomerate != null) ? bioData.conglomerate ? 'Yes' : 'No' : '';
                                    this.conductedFinancing = (bioData.conducted_financing_six_month != null) ? bioData.conducted_financing_six_month ? 'Yes' : 'No' : '';
                                    this.publicPrivateType = (bioData.public_private_type != null) ? bioData.public_private_type.name : '';
                                    this.intellectualProperty = (bioData.intellectual_property != null) ? bioData.intellectual_property : '';
                                    this.researchCoverage = (bioData.research_coverage != null) ? bioData.research_coverage : '';
                                    this.companySocialMediaPlatform = (bioData.company_social_media_platform != null) ? bioData.company_social_media_platform : '';
                                    this.icon = (!!bioData.icon) ? bioData.storage_path + '/company_icon/' + bioData.icon : "/images/image-placeholder-1.png"
                                })
                                .catch(error => {
                                    // console.log(error)
                                    if (error.response.status === 404) {
                                        this.receiverCompanyNotFound = true
                                    }
                                });
                            this.receiverGeneralTabContentLoaded = true;
                        }
                        this.activeTab = 0
                        break;
                    case 'receiverClassifications':
                        this.receiverClassificationlContentLoading = true;
                        axios.get('/api/company-bio-multiple-node/' + this.companySlug)
                            .then((response) => {
                                this.receiverClassificationlContentLoading = false;
                                this.receiverMultipleNodes = response.data.data;
                                if (this.receiverMultipleNodes.length < 1) {
                                    this.receiverHideCatContainer = true;
                                } else {
                                    this.receiverHideCatContainer = false;
                                }
                            })
                            .catch(error => {
                            });
                        this.activeTab = 1
                        break;
                    case 'receiverContent':
                        if (!this.receiverContentTabContentLoaded) {
                        this.receiverContentlContentLoading = true;
                        this.getReceiverContentList();
                        this.receiverContentTabContentLoaded = false;
                        }
                        this.activeTab = 2
                        break;
                }
            },
            senderLoadTabContent: function (type) {
                switch (type) {
                    case 'senderGeneralInfo':
                        if (!this.senderGeneralTabContentLoaded) {
                            Content.companyBio(this.senderCompanySlug)
                                .then((response) => {
                                    this.senderGeneralContentLoading = false;
                                    var bioData = response.data.data;
                                    this.senderEntityType = bioData.entityType;
                                    this.senderPhoneNumber = bioData.phone_number;
                                    this.senderName = bioData.name;
                                    if (!!bioData.headquarters) {
                                        // console.log(bioData.headquarters)
                                        var senderAddressOne = (!!bioData.headquarters.address.street_address_one) ? bioData.headquarters.address.street_address_one + ', ' : '';
                                        var senderAddressTwo = (!!bioData.headquarters.address.street_address_two) ? bioData.headquarters.address.street_address_two + ', ' : ''
                                        var senderCity = (!!bioData.headquarters.address.city) ? bioData.headquarters.address.city + ', ' : '';
                                        var senderState = (!! bioData.headquarters.address.states) ? bioData.headquarters.address.states.name + ', ' : '';
                                        var senderZip = (!!bioData.headquarters.address) ? bioData.headquarters.address.zip + ', ' : '';
                                        var senderCountry = (!!bioData.headquarters.address.country) ? bioData.headquarters.address.country.name : '';
                                        this.senderAddress = senderAddressOne + senderAddressTwo + senderCity + senderState + senderZip + senderCountry;
                                    }
                                    this.senderCeo = (bioData.ceo != null) ? bioData.ceo : '';
                                    this.senderCfo = (bioData.cfo != null) ? bioData.cfo : '';
                                    this.senderNumberOfEmployee = (bioData.numberof_employees != null) ? bioData.numberof_employees.name : '';
                                    this.senderNumberOfShareholder = (bioData.numberof_shareholders != null) ? bioData.numberof_shareholders.name : '';
                                    this.senderBaseCurrency = (bioData.base_currency != null) ? bioData.base_currency.name : '';
                                    this.senderRecentValuation = (bioData.recent_valuation != null) ? bioData.recent_valuation : '';
                                    this.senderAuditedFinancials = (bioData.audited_financials != null) ? bioData.audited_financials ? 'Yes' : 'No' : '';
                                    this.senderConglomerate = (bioData.conglomerate != null) ? bioData.conglomerate ? 'Yes' : 'No' : '';
                                    this.senderConductedFinancing = (bioData.conducted_financing_six_month != null) ? bioData.conducted_financing_six_month ? 'Yes' : 'No' : '';
                                    this.senderPublicPrivateType = (bioData.public_private_type != null) ? bioData.public_private_type.name : '';
                                    this.senderIntellectualProperty = (bioData.intellectual_property != null) ? bioData.intellectual_property : '';
                                    this.senderResearchCoverage = (bioData.research_coverage != null) ? bioData.research_coverage : '';
                                    this.senderCompanySocialMediaPlatform = (bioData.company_social_media_platform != null) ? bioData.company_social_media_platform : '';
                                    this.senderIcon = (!!bioData.icon) ? bioData.storage_path + '/company_icon/' + bioData.icon : "/images/image-placeholder-1.png";
                                })
                                .catch(error => {
                                    // console.log(error)
                                    this.isLoading = false
                                    if (error.response.status === 404) {

                                        this.senderCompanyNotFound = true
                                    }
                                });
                            this.senderGeneralTabContentLoaded = true;
                        }

                        this.senderActiveTab = 0
                        break;
                    case 'senderClassifications':
                        if (!this.senderClassificationTabContentLoaded) {

                            axios.get('/api/company-bio-multiple-node/' + this.senderCompanySlug)
                                .then((response) => {
                                    this.senderClassificationlContentLoading = false;
                                    this.multipleNodes = response.data.data;
                                    if (this.multipleNodes.length < 1) {
                                        this.hideCatContainer = true;
                                    }
                                })
                                .catch(error => {

                                });
                            this.senderClassificationTabContentLoaded = true;
                        }

                        this.senderActiveTab = 1
                        break;

                    case 'senderContent':
                        if (!this.senderContentTabContentLoaded) {
                            this.getSenderContentList();
                            this.senderContentTabContentLoaded = true;
                            }
                        this.senderActiveTab = 2
                        break;
                }
            },
            getReceiverContentList(clearPage = false){
                if (clearPage) {
                    this.receiverContentPagination.current_page = 1;
                    this.receiverContentlContentLoading = true;
                }
                Content.companyContent(this.receiverContentPagination.current_page, this.companySlug)
                    .then((response) => {
                        this.receiverContentlContentLoading = false;
                        this.receiverContents = [];
                            this.receiverContents = response.data.data.data.data;
                        if (this.receiverContents.length < 1) {
                            this.receiverHideContent = true;
                        } else {
                            this.receiverHideContent = false;
                        }
                        this.receiverContentPagination = response.data.data.pagination;
                    })
                    .catch(error => {
                    });
            },
            getSenderContentList(clearPage = false){
                if (clearPage) {
                    this.senderContentPagination.current_page = 1;
                    this.senderContentlContentLoading = true;
                }

                Content.companyContent(this.senderContentPagination.current_page, this.senderCompanySlug)
                    .then((response) => {
                        this.senderContentlContentLoading = false;
                        this.isLoading = false
                        this.contentLoading = false

                        this.contents = [];
                            this.contents = response.data.data.data.data;
                        if (this.contents.length < 1) {
                            this.senderHideContent = true;
                        } else {
                            this.senderHideContent = false;
                        }
                        this.senderContentPagination = response.data.data.pagination;
                    })
                    .catch(error => {

                    });
            },
            chat: function (userId, lastOnline = '', companySlug = '', unreadMessages) {

                this.resetMessageUpdate();
                if(unreadMessages > 0) {
                    this.updateUserMessageStatus(userId);
                }

                var chat = {};

                Object.keys(this.chatLists).map((key) => {
                    if (this.chatLists[key].id == userId) {
                        chat = this.chatLists[key];
                    }
                })

                this.companySlug = companySlug;
                this.loadTabContent('receiverGeneralInfo');
                this.activeUser = userId;
                this.cChat = chat;
                this.cChat.lastOnline = lastOnline;
                this.socket.emit('getMessages', {fromUserId: this.user_id, toUserId: this.cChat.id});
                this.socket.on('getMessagesResponse', this.getMessagesResponse);
                this.socket.on('addMessageResponse', this.addMessageResponse);
                this.socket.on('typing', this.typingListener);
                this.socket.on('image-uploaded', this.imageuploaded);
                this.socket.on('message-inserted', this.messageInserted);
                this.receiverGeneralTabContentLoaded = false;

                // if(!this.chatBox.includes(chat.id)){
                //     console.log('if call')
                //     chat.msgCount = 0;
                //     const chatboxObj = Vue.extend(this.cBox);
                //     let b = new chatboxObj({
                //         propsData: {
                //             socket: this.socket,
                //             user_id: this.user_id,
                //             cChat: chat,
                //             chatBoxClose: this.chatBoxClose,
                //             chatBoxMinimize: this.chatBoxMinimize,
                //             WS_URL: this.ws_url
                //         }
                //     }).$mount();
                //     $('body').append(b.$el);
                //     this.bArr[chat.id] = b;
                //     this.chatBox.unshift(chat.id);
                //     $('#msginput-'+chat.id).focus();
                // }
                // else {
                //
                //     console.log('else call')
                //     var index = this.chatBox.indexOf(chat.id);
                //     this.chatBox.splice(index, 1);
                //     this.chatBox.unshift(chat.id);
                //     $('#msginput-'+chat.id).focus();
                // }
                // this.calcChatBoxStyle();
            },
            updateUserMessageStatus(fromUserId) {
                ChatMessages.updateUserMessageStatus(fromUserId)
                    .then((response) => {
                        this.getChatMessage();
                    })
                    .catch(error => {
                        // console.log('updateUserMessageStatus error: ');
                        // console.log(error);
                        toastr.error('Operation failed!');
                    });
            },
            nameWithComma(name, index, totalElement) {
                if (index !== totalElement - 1) {
                    return `${name},`;
                } else {
                    return name;
                }
            },
            validateURL: function (link) {
                if (link.indexOf("http://") == 0 || link.indexOf("https://") == 0) {
                    return link;
                } else {
                    return 'https://' + link;
                }
            },
            getChatMessage: function () {
                if(this.firstLoad) {
                    this.contentLoading = true
                    this.firstLoad = false
                }

                ChatMessages.latestMessage(this.chatMessagePagination.current_page, this.chatMessageSearch)
                    .then((response) => {
                        this.latestChatMessages = response.data.data.latestChatMessages
                        this.chatMessagePagination = response.data.data.pagination;
                        this.memberIds = response.data.data.memberIds;
                        this.contentLoading = false

                    })
                    .catch(error => {
                        console.log(error)
                        this.contentLoading = false
                        // toastr.error(error)
                    });
            },
            checkOnline: function (userId) {
                var onlineStatus = false;
                Object.keys(this.chatLists).map((key) => {
                    if (this.chatLists[key].id == userId && this.chatLists[key].online == "Y") {
                        onlineStatus = true;
                    }
                })
                return onlineStatus;
            },
            showSearchModal: function () {
                this.$refs['search-modal'].show();
            },
            memberSearch(search, loading) {

                this.memberList = [];
                ChatMessages.memberList(search, JSON.stringify(this.memberIds))
                    .then((response) => {
                        this.memberList = response.data.data
                    })
                    .catch(error => {
                        console.log(error)
                        this.isLoading = false
                    });
            },
            setChatBox: function (value) {
                ChatMessages.chatMemberInfo(value.userId)
                    .then((response) => {
                        value.message = response.data.data.message;
                        value.fileFormat = response.data.data.fileFormat;
                        value.createdAt = response.data.data.createdAt;
                        value.unreadMessages = 0;

                        this.latestChatMessages.unshift(value)
                        this.memberIds.unshift(value.userId)
                        this.chat(value.userId, value.createdAt, value.companySlug, value.unreadMessages)
                        this.$refs['search-modal'].hide();
                    })
                    .catch(error => {
                        console.log(error)
                    });
            },
            messageBoxScrolling: function () {
                if (this.$refs.messageBox.scrollTop + this.$refs.messageBox.clientHeight >= this.$refs.messageBox.scrollHeight - 1) {
                    if (this.chatMessagePagination.current_page < this.chatMessagePagination.last_page) {
                        ChatMessages.latestMessage(this.chatMessagePagination.current_page + 1, this.chatMessageSearch)
                            .then((response) => {
                                this.latestChatMessages.push(...response.data.data.latestChatMessages);
                                this.chatMessagePagination = response.data.data.pagination;
                                this.memberIds.push(...response.data.data.memberIds);
                            })
                            .catch(error => {
                                console.log(error)
                                // toastr.error(error)
                            });
                    }
                }
            },
            /*chat window related function*/
            sendMessage: function (event) {
                if (event.keyCode === 13 || event.type == 'click') {
                    if (this.message.length > 0) {
                        let messagePacket = this.createMsgObj('text', '', this.message);
                        this.socket.emit('addMessage', messagePacket);
                        //this.messages.push(messagePacket);
                        this.message = "";
                        this.scrollToBottom();
                        this.getChatMessage();
                    } else {
                        this.blankMessageAlert();
                    }
                } else {
                    if ((event.keyCode != 116) && (event.keyCode != 82 && !event.ctrlKey)) {
                        this.socket.emit('typing', {typing: 'typing...', socket_id: this.cChat.socket_id});
                        clearTimeout(this.timeout);
                        this.timeout = setTimeout(this.timeoutFunction, 500);
                    }
                }
            },
            messageInserted: function (data) {
                if(data.addMessageCounter == 0) {
                    this.messages.push(data);
                    data.addMessageCounter++;
                }
            },
            updateMessage: function (event, messageId) {
                if (event.keyCode === 13 || event.type == 'click') {
                    if (this.message.length > 0) {
                        ChatMessages.update({'messageId': messageId, 'message': this.message})
                            .then((response) => {
                                $('#message-' + messageId).html(this.message);
                                let editStatus = $('#edit-status-' + messageId).text();

                                if(editStatus == '0') {
                                    $('#edit-status-' + messageId).html('1');
                                    $('#edit-status-text-' + messageId).html('(edited)');
                                }

                                this.socket.emit(
                                    'editMessageReceiver',
                                    {
                                        fromUserId: this.user_id,
                                        toSocketId: this.cChat.socket_id,
                                        messageId: messageId,
                                        message: this.message
                                    }
                                );
                                this.resetMessageUpdate();
                                this.getChatMessage();
                            })
                            .catch(error => {
                                // console.log('updateUserMessageStatus error: ');
                                // console.log(error);
                                toastr.error('Operation failed!');
                            });
                    } else {
                        this.blankMessageAlert();
                    }
                } else {
                    if ((event.keyCode != 116) && (event.keyCode != 82 && !event.ctrlKey)) {
                        this.socket.emit('typing', {typing: 'typing...', socket_id: this.cChat.socket_id});
                        clearTimeout(this.timeout);
                        this.timeout = setTimeout(this.timeoutFunction, 500);
                    }
                }
            },
            resetMessageUpdate() {
                // console.log(this.updateMessageId);
                this.editMessageAction = false;
                this.updateMessageId = null;
                this.message = "";
            },
            blankMessageAlert() {
                $.alert({
                    title: 'Please enter your message.',
                    content: '<span class="m-0"></span>',
                    titleClass: 'font-weight-bold text-center jconfirm-modal-title pb-0',
                    columnClass: 'small',
                    animateFromElement: false,
                    closeAnimation: 'scale',
                    bgOpacity: 0.6,
                    buttons: {
                        Ok: {
                            btnClass: 'btn-default rounded-pill'
                        }
                    }
                });
            },
            deleteMessage: function (messageId, messageType, index) {
                let vueInstance = this;
                $.confirm({
                    title: 'Are you sure to delete this message?',
                    content: '<hr class="m-0">',
                    titleClass: 'font-weight-bold text-center jconfirm-modal-title',
                    columnClass: 'medium',
                    animateFromElement: false,
                    closeAnimation: 'scale',
                    bgOpacity: 0.6,
                    buttons: {
                        Yes: {
                            btnClass: 'btn-danger rounded-pill text-capitalize',
                            action: function () {
                                if(messageType == 'file') {
                                    vueInstance.fileUploading = true;
                                }
                                ChatMessages.delete({'messageId': messageId})
                                    .then((response) => {
                                        vueInstance.fileUploading = false;
                                        vueInstance.messages.splice(index, 1);
                                        vueInstance.socket.emit('deleteMessageReceiver', {fromUserId: vueInstance.user_id, toSocketId: vueInstance.cChat.socket_id, index: index});
                                        vueInstance.getChatMessage();
                                    })
                                    .catch(error => {
                                        // console.log('updateUserMessageStatus error: ');
                                        // console.log(error);
                                        toastr.error('Operation failed!');
                                    });
                            },
                        },
                        Cancel: {
                            btnClass: 'btn-default rounded-pill text-capitalize'
                        }
                    }
                });
            },
            deleteMessageReceiver: function (data) {
                if (data.fromUserId == this.cChat.id) {
                    this.messages.splice(data.index, 1);
                }
                this.getChatMessage();
            },
            editMessage: function (messageId) {
                this.editMessageAction = true;
                this.updateMessageId = messageId;
                this.message = $.trim($('#message-' + messageId).text());
                $('#msginput-' + this.cChat.id).focus();
            },
            editMessageReceiver: function (data) {
                if (data.fromUserId == this.cChat.id) {
                    $('#message-' + data.messageId).html(data.message);
                    let editStatus = $('#edit-status-' + data.messageId).text();

                    if(editStatus == '0') {
                        $('#edit-status-' + data.messageId).html('1');
                        $('#edit-status-text-' + data.messageId).html('(edited)');
                    }
                }
                this.getChatMessage();
            },
            showEditMenu(messageId){
                $('#showEditOption-' + messageId).toggle();
            },
            showEditDelete(messageId) {
                $('#edit-delete-' + messageId).attr('class', 'chat-edit-option clearfix d-block');
            },
            hideEditDelete(messageId) {
                $('#edit-delete-' + messageId).attr('class', 'chat-edit-option clearfix d-none');
                $('#showEditOption-' + messageId).hide();
            },
            timeoutFunction: function () {
                this.socket.emit("typing", {typing: false, socket_id: this.cChat.socket_id});
            },
            scrollToBottom: function () {
                $("#chatboxscroll-" + this.cChat.id).stop().animate({scrollTop: $("#chatboxscroll-" + this.cChat.id)[0].scrollHeight});
            },
            createMsgObj: function (type, fileFormat, message) {
                return {
                    type: type,
                    fileFormat: fileFormat,
                    filePath: '',
                    fromUserId: this.user_id,
                    toUserId: this.cChat.id,
                    toSocketId: this.cChat.socket_id,
                    message: message,
                    newMessageSenderImage: this.companyImage,
                    time: new moment().format("hh:mm A"),
                    date: new moment().format("Y-MM-D")
                }
            },
            addMessageResponse: function (data) {
                if(data.addMessageCounter == 0) {
                    if (data && data.fromUserId == this.cChat.id) {
                        this.messages.push(data);
                        this.scrollToBottom();
                        this.getChatMessage();
                        data.addMessageCounter++;
                    }
                }
            },
            typingListener: function (data) {
                if (data.typing && data.to_socket_id == this.cChat.socket_id) {
                    this.typing = "is " + data.typing;
                } else {
                    this.typing = "";
                }
            },
            getMessagesResponse: function (data) {
                if (data.toUserId == this.cChat.id) {
                    this.messages = data.result;
                    this.$nextTick(function () {
                        this.scrollToBottom();
                    });
                }
            },
            imageuploaded: function (data) {
                if(data.addMessageCounter == 0) {
                    if (data && data.toUserId == this.cChat.id) {
                        $(".overlay").parent().parent().remove();
                        this.messages.push(data);
                        this.fileUploading = false;
                        this.scrollToBottom();
                        this.getChatMessage();
                        data.addMessageCounter++;
                    }
                }
            },
            file: function (event) {
                var file = event.target.files[0];
                if (this.validateSize(file)) {
                    let fileFormat = file.type.split('/')[0];
                    let reader = new FileReader();
                    reader.onload = function () {
                        let messagePacket = this.createMsgObj('file', fileFormat, reader.result);
                        messagePacket['fileName'] = file.name;
                        this.fileUploading = true;
                        this.socket.emit('upload-image', messagePacket);
                        messagePacket.type = "text";
                        if (fileFormat != 'image') {
                            messagePacket.message = '<span class="info-box-icon bg-primary" style="color: gray;background:none;"><i class="fa fa-paperclip"></i></span><div class="overlay"><i style="color:#fff" class="fa fa-refresh fa-spin"></i></div>';
                        }
                        else {
                            let src = URL.createObjectURL(new Blob([reader.result]));
                            messagePacket.message = '<img height="100px;" width="100px;" src="' + src + '"><div class="overlay"><i style="color:#fff" class="fa fa-refresh fa-spin"></i></div>';
                        }

                        //this.messages.push(messagePacket);
                        this.scrollToBottom();
                        this.getChatMessage();
                    }.bind(this);
                    reader.readAsArrayBuffer(file);
                } else {
                    event.target.value = "";
                    alert('File size exceeds 10 MB');
                }
            },
            validateSize: function (file) {
                var fileSize = file.size / 1024 / 1024; // in MB
                if (fileSize > 10) {
                    return false;
                }
                return true;
            }

        },
        filters: {
            dateFormat: function (value) {
                return new moment(value).fromNow();
            },
            truncate: function (text, length, suffix) {
                if (text.length > length) {
                    return text.substring(0, length) + suffix;
                } else {
                    return text;
                }
            },
        },

        created: function () {
            // this.isLoading = true;
            this.senderCompanySlug = JSON.parse(localStorage.getItem("info")).company_slug_name;
            this.senderLoadTabContent('senderGeneralInfo', this.senderCompanySlug);

            this.getChatMessage();
            const company_image = JSON.parse(localStorage.getItem("info")).company_image;
            this.companyImage = ("" != company_image) ? company_image : "/images/image-placeholder-1.png";
        },
        mounted: function () {
            this.$nextTick(function () {
                this.messageWindowSize = window.innerHeight - 150
            });
            this.user_id = localStorage.getItem('userid');
            this.ws_url = $('meta[name=ws_url]').attr("content");
            this.socket = io(this.ws_url, {query: "id= " + this.user_id});

            // chat box object start here
            this.cBox = {
                data: function () {
                    return {
                        messages: [],
                        message: '',
                        typing: '',
                        timeout: ''
                    }
                },
                props: ['user_id', 'cChat', 'socket', 'chatBoxClose', 'chatBoxMinimize', 'ws_url'],
                mounted: function () {
                    this.socket.emit('getMessages', {fromUserId: this.user_id, toUserId: this.cChat.id});
                    this.socket.on('getMessagesResponse', this.getMessagesResponse);
                    this.socket.on('addMessageResponse', this.addMessageResponse);
                    this.socket.on('typing', this.typingListener);
                    this.socket.on('image-uploaded', this.imageuploaded);
                },
                destroyed: function () {
                    this.socket.removeListener('getMessagesResponse', this.getMessagesResponse);
                    this.socket.removeListener('addMessageResponse', this.addMessageResponse);
                    this.socket.removeListener('typing', this.typingListener);
                },
                methods: {
                    sendMessage: function (event) {
                        if (event.keyCode === 13) {
                            if (this.message.length > 0) {
                                let messagePacket = this.createMsgObj('text', '', this.message);
                                this.socket.emit('addMessage', messagePacket);
                                this.messages.push(messagePacket);
                                this.message = "";
                                this.scrollToBottom();
                            } else {
                                alert("Please Enter Your Message.");
                            }
                        } else {
                            if ((event.keyCode != 116) && (event.keyCode != 82 && !event.ctrlKey)) {
                                this.socket.emit('typing', {typing: 'typing...', socket_id: this.cChat.socket_id});
                                clearTimeout(this.timeout);
                                this.timeout = setTimeout(this.timeoutFunction, 500);
                            }
                        }
                    },
                    timeoutFunction: function () {
                        this.socket.emit("typing", {typing: false, socket_id: this.cChat.socket_id});
                    },
                    scrollToBottom: function () {
                        $("#chatboxscroll-" + this.cChat.id).stop().animate({scrollTop: $("#chatboxscroll-" + this.cChat.id)[0].scrollHeight}, 1);
                    },
                    createMsgObj: function (type, fileFormat, message) {
                        return {
                            type: type,
                            fileFormat: fileFormat,
                            filePath: '',
                            fromUserId: this.user_id,
                            toUserId: this.cChat.id,
                            toSocketId: this.cChat.socket_id,
                            message: message,
                            time: new moment().format("hh:mm A"),
                            date: new moment().format("Y-MM-D")
                        }
                    },
                    addMessageResponse: function (data) {
                        console.log('add message response call')
                        if (data && data.fromUserId == this.cChat.id) {
                            this.messages.push(data);
                            this.scrollToBottom();
                        }
                    },
                    typingListener: function (data) {
                        if (data.typing && data.to_socket_id == this.cChat.socket_id) {
                            this.typing = "is " + data.typing;
                        } else {
                            this.typing = "";
                        }
                    },
                    getMessagesResponse: function (data) {
                        if (data.toUserId == this.cChat.id) {
                            this.messages = data.result;
                            this.$nextTick(function () {
                                this.scrollToBottom();
                            });
                        }
                    },
                    imageuploaded: function (data) {
                        if (data && data.toUserId == this.cChat.id) {
                            $(".overlay").parent().parent().remove();
                            this.messages.push(data);
                            this.scrollToBottom();
                        }
                    },
                    file: function (event) {
                        var file = event.target.files[0];
                        if (this.validateSize(file)) {
                            let fileFormat = file.type.split('/')[0];
                            let reader = new FileReader();
                            reader.onload = function () {
                                let messagePacket = this.createMsgObj('file', fileFormat, reader.result);
                                messagePacket['fileName'] = file.name;
                                this.socket.emit('upload-image', messagePacket);
                                messagePacket.type = "text";
                                if (fileFormat != 'image') {
                                    messagePacket.message = '<span class="info-box-icon bg-primary" style="color: gray;background:none;"><i class="fa fa-paperclip"></i></span><div class="overlay"><i style="color:#fff" class="fa fa-refresh fa-spin"></i></div>';
                                } else {
                                    let src = URL.createObjectURL(new Blob([reader.result]));
                                    messagePacket.message = '<img height="100px;" width="100px;" src="' + src + '"><div class="overlay"><i style="color:#fff" class="fa fa-refresh fa-spin"></i></div>';
                                }
                                this.messages.push(messagePacket);
                                this.scrollToBottom();
                            }.bind(this);
                            reader.readAsArrayBuffer(file);
                        } else {
                            event.target.value = "";
                            alert('File size exceeds 10 MB');
                        }
                    },
                    validateSize: function (file) {
                        var fileSize = file.size / 1024 / 1024; // in MB
                        if (fileSize > 10) {
                            return false;
                        }
                        return true;
                    }
                },
                filters: {
                    dateFormat: function (value) {
                        // return new moment(value).format("D-MMM-YY");
                        return new moment(value).fromNow();
                    }
                },
                template: `
        <div class="chat_box" v-bind:id="'chatbox-' + cChat.id" style="right:270px">
            <div class="box box-primary direct-chat direct-chat-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">{{ cChat.name }}</h3> <span>{{ typing }}</span>
                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse" @click="chatBoxMinimize(cChat.id)"><i class="fa fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-box-tool" @click="chatBoxClose(cChat.id)"><i class="fa fa-times"></i>
                        </button>
                    </div>
                </div>


                <div style="" class="box-body">
                    <div class="direct-chat-messages" v-bind:id="'chatboxscroll-' + cChat.id">
                        <div v-for="messagePacket in messages" class="direct-chat-msg" v-bind:class="{ 'right' : (messagePacket.fromUserId == user_id) }">
                            <div class="direct-chat-info clearfix">
                                <small class="direct-chat-timestamp"  v-bind:class="{ 'pull-right' : (messagePacket.fromUserId == user_id), 'pull-left' : (messagePacket.fromUserId != user_id) }">{{ messagePacket.date + ' ' + messagePacket.time | dateFormat }}</small>
                            </div>

                            <div v-if="messagePacket.type == 'text'" v-bind:class="{ 'pull-right' : (messagePacket.fromUserId == user_id), 'pull-left' : (messagePacket.fromUserId != user_id) }" v-html=messagePacket.message class="direct-chat-text clearfix" style="margin-right: 1px;margin-left: 1px;word-break: break-all;padding: 3px 10px;">
                            </div>

                            <div v-if="messagePacket.type == 'file'" v-bind:class="{ 'pull-right' : (messagePacket.fromUserId == user_id), 'pull-left' : (messagePacket.fromUserId != user_id) }" class="direct-chat-text clearfix" style="margin-right: 1px;margin-left: 1px;word-break: break-all;padding: 3px 3px;">
                                <a v-if="messagePacket.fileFormat == 'image'" :href="'` + this.ws_url + `' + messagePacket.filePath" download :title="messagePacket.message" target="_new"><img height="110px;" width="110px;" :src="'` + this.ws_url + `' + messagePacket.filePath"></a>
                                <a v-else :href="'` + this.ws_url + `' + messagePacket.filePath" download :title="messagePacket.message" target="_new"><span class="info-box-icon" style="color: gray;background:none;"><i class="fa fa-paperclip"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: block;" class="box-footer">
                    <div class="input-group">
                        <input name="message" v-bind:id="'msginput-' + cChat.id" v-model.trim="message" placeholder="Type Message And Hit Enter" class="form-control" type="text" v-on:keydown="sendMessage($event)">
                        <span class="input-group-btn">
                            <div class="btn btn-default btn-file">
                                <i class="fa fa-paperclip"></i>
                                <input name="attachment" type="file" v-on:change="file($event)">
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>`
            };

            var vm = this;
            this.socket.on('connect', function (data) {
                vm.socketConnected.status = true;
                this.emit('chatList', vm.user_id);
            });
            this.socket.on('connect_error', function () {
                vm.socketConnected.status = false;
                vm.socketConnected.msg = 'Could not connect to server';
                vm.chatLists = [];
            });
            this.socket.on('chatListRes', function (data) {
                if (data.userDisconnected) {
                    vm.chatLists.findIndex(function (el) {
                        if (el.socket_id == data.socket_id) {
                            el.online = 'N';
                            el.socket_id = '';
                        }
                    });
                } else if (data.userConnected) {
                    vm.chatLists.findIndex(function (el) {
                        if (el.id == data.userId) {
                            el.online = 'Y';
                            el.socket_id = data.socket_id;
                        }
                    });
                } else {
                    data.chatList.findIndex(function (el) {
                        el.msgCount = 0;
                    });
                    vm.chatLists = data.chatList;
                }
            });
            // user chat box not open, count incomming  messages
            this.socket.on('addMessageResponse', function (data) {
                vm.getChatMessage();

                if(data.fromUserId == vm.cChat.id) {
                    vm.updateUserMessageStatus(data.fromUserId)
                }

                if (!vm.chatBox.includes(data.fromUserId)) {
                    vm.chatLists.findIndex(function (el) {
                        if (el.id == data.fromUserId) {
                            el.msgCount += 1;
                        }
                    });
                }
            });

            this.socket.on('deleteMessageResponse', function(data) {
                vm.deleteMessageReceiver(data);
            });

            this.socket.on('editMessageResponse', function(data) {
                vm.editMessageReceiver(data);
            });
        },
        destroyed: function () {
            this.socket.disconnect();
            $('.chat_box').remove();

            /*chat window related*/
            this.socket.removeListener('getMessagesResponse', this.getMessagesResponse);
            this.socket.removeListener('addMessageResponse', this.addMessageResponse);
            this.socket.removeListener('typing', this.typingListener);
        },
        components: {
            loader: () => import("../components/Loader"),
            pagination: () => import("../components/PaginationComponent"),
            vSelect, CompanyNodeCollapses, VEmojiPicker,
        }
    };
</script>

<style lang="scss">
    .content-div {
        ul li {
            font-size: 12px;
            margin-bottom: 15px;
        }

       ul li.social-media-icon i {
            padding: 8px;
            font-size: 22px;
        }

        li.social-media-icon .scoop-icon, li.social-media-icon .tiktok-icon {
            display: inline-flex;
            height: 22px;
            margin: 0 7px;
        }
    }
</style>

<style>
    /*chat info fox related style*/
    .info-box {
        display: block;
        min-height: 90px;
        background: #fff;
        width: 100%;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        margin-bottom: 15px
    }

    .info-box small {
        font-size: 14px
    }

    .info-box .progress {
        background: rgba(0, 0, 0, 0.2);
        margin: 5px -10px 5px -10px;
        height: 2px
    }

    .info-box .progress,
    .info-box .progress .progress-bar {
        border-radius: 0
    }

    .info-box .progress .progress-bar {
        background: #fff
    }

    .info-box-icon {
        border-top-left-radius: 2px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 2px;
        display: block;
        float: left;
        height: 90px;
        width: 90px;
        text-align: center;
        font-size: 45px;
        line-height: 90px;
        background: rgba(0, 0, 0, 0.2)
    }

    .info-box-icon > img {
        max-width: 100%
    }

    .info-box-content {
        padding: 5px 10px;
        margin-left: 90px
    }

    .info-box-number {
        display: block;
        font-weight: bold;
        font-size: 18px
    }

    .progress-description,
    .info-box-text {
        display: block;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .info-box-text {
        text-transform: uppercase
    }

    .info-box-more {
        display: block
    }

    /*end chat infofox related style*/

    .chat_box {
        width: 260px;
        padding: 5px;
        position: fixed;
        bottom: 0px;
    }

    .box {
        position: relative;
        border-radius: 3px;
        background: #ffffff;
        /*margin-bottom: 20px;*/
        width: 100%;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1)
    }

    .box.box-primary {
        border-top-color: #3c8dbc
    }

    .box.box-info {
        border-top-color: #00c0ef
    }

    .box.box-danger {
        border-top-color: #dd4b39
    }

    .box.box-warning {
        border-top-color: #f39c12
    }

    .box.box-success {
        border-top-color: #00a65a
    }

    .box.box-default {
        border-top-color: #d2d6de
    }

    .box.collapsed-box .box-body,
    .box.collapsed-box .box-footer {
        display: none
    }

    .box .nav-stacked > li {
        border-bottom: 1px solid #f4f4f4;
        margin: 0
    }

    .box .nav-stacked > li:last-of-type {
        border-bottom: none
    }

    .box.height-control .box-body {
        max-height: 300px;
        overflow: auto
    }

    .box .border-right {
        border-right: 1px solid #f4f4f4
    }

    .box .border-left {
        border-left: 1px solid #f4f4f4
    }

    .box.box-solid {
        border-top: 0
    }

    .box.box-solid > .box-header .btn.btn-default {
        background: transparent
    }

    .box.box-solid > .box-header .btn:hover,
    .box.box-solid > .box-header a:hover {
        background: rgba(0, 0, 0, 0.1)
    }

    .box.box-solid.box-default {
        border: 1px solid #d2d6de
    }

    .box.box-solid.box-default > .box-header {
        color: #444;
        background: #d2d6de;
        background-color: #d2d6de
    }

    .box.box-solid.box-default > .box-header a,
    .box.box-solid.box-default > .box-header .btn {
        color: #444
    }

    .box.box-solid.box-primary {
        border: 1px solid #3c8dbc
    }

    .box.box-solid.box-primary > .box-header {
        color: #fff;
        background: #3c8dbc;
        background-color: #3c8dbc
    }

    .box.box-solid.box-primary > .box-header a,
    .box.box-solid.box-primary > .box-header .btn {
        color: #fff
    }

    .box.box-solid.box-info {
        border: 1px solid #00c0ef
    }

    .box.box-solid.box-info > .box-header {
        color: #fff;
        background: #00c0ef;
        background-color: #00c0ef
    }

    .box.box-solid.box-info > .box-header a,
    .box.box-solid.box-info > .box-header .btn {
        color: #fff
    }

    .box.box-solid.box-danger {
        border: 1px solid #dd4b39
    }

    .box.box-solid.box-danger > .box-header {
        color: #fff;
        background: #dd4b39;
        background-color: #dd4b39
    }

    .box.box-solid.box-danger > .box-header a,
    .box.box-solid.box-danger > .box-header .btn {
        color: #fff
    }

    .box.box-solid.box-warning {
        border: 1px solid #f39c12
    }

    .box.box-solid.box-warning > .box-header {
        color: #fff;
        background: #f39c12;
        background-color: #f39c12
    }

    .box.box-solid.box-warning > .box-header a,
    .box.box-solid.box-warning > .box-header .btn {
        color: #fff
    }

    .box.box-solid.box-success {
        border: 1px solid #00a65a
    }

    .box.box-solid.box-success > .box-header {
        color: #fff;
        background: #00a65a;
        background-color: #00a65a
    }

    .box.box-solid.box-success > .box-header a,
    .box.box-solid.box-success > .box-header .btn {
        color: #fff
    }

    .box.box-solid > .box-header > .box-tools .btn {
        border: 0;
        box-shadow: none
    }

    .box.box-solid[class*='bg'] > .box-header {
        color: #fff
    }

    .box .box-group > .box {
        margin-bottom: 5px
    }

    .box .knob-label {
        text-align: center;
        color: #333;
        font-weight: 100;
        font-size: 12px;
        margin-bottom: 0.3em
    }

    .box > .overlay,
    .overlay-wrapper > .overlay,
    .box > .loading-img,
    .overlay-wrapper > .loading-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%
    }

    .box .overlay,
    .overlay-wrapper .overlay {
        z-index: 50;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 3px
    }

    .box .overlay > .fa,
    .overlay-wrapper .overlay > .fa {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -15px;
        margin-top: -15px;
        color: #000;
        font-size: 30px
    }

    .box .overlay.dark,
    .overlay-wrapper .overlay.dark {
        background: rgba(0, 0, 0, 0.5)
    }

    .box-header:before,
    .box-body:before,
    .box-footer:before,
    .box-header:after,
    .box-body:after,
    .box-footer:after {
        content: " ";
        display: table
    }

    .box-header:after,
    .box-body:after,
    .box-footer:after {
        clear: both
    }

    .box-header {
        color: #444;
        display: block;
        padding: 10px;
        position: relative
    }

    /*.box-header.with-border {
        border-bottom: 1px solid #f4f4f4
    }*/

    .collapsed-box .box-header.with-border {
        border-bottom: none
    }

    .box-header > .fa,
    .box-header > .glyphicon,
    .box-header > .ion,
    .box-header .box-title {
        display: inline-block;
        font-size: 18px;
        margin: 0;
        line-height: 1
    }

    .box-header > .fa,
    .box-header > .glyphicon,
    .box-header > .ion {
        margin-right: 5px
    }

    .box-header > .box-tools {
        position: absolute;
        right: 10px;
        top: 5px
    }

    .box-header > .box-tools [data-toggle="tooltip"] {
        position: relative
    }

    .box-header > .box-tools.pull-right .dropdown-menu {
        right: 0;
        left: auto
    }

    .box-header > .box-tools .dropdown-menu > li > a {
        color: #444 !important
    }

    .btn-box-tool {
        padding: 5px;
        font-size: 12px;
        background: transparent;
        color: #97a0b3
    }

    .open .btn-box-tool,
    .btn-box-tool:hover {
        color: #606c84
    }

    .btn-box-tool.btn:active {
        box-shadow: none
    }

    .box-body {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
        padding: 10px
    }

    .no-header .box-body {
        border-top-right-radius: 3px;
        border-top-left-radius: 3px
    }

    .box-body > .table {
        margin-bottom: 0
    }

    .box-body .fc {
        margin-top: 5px
    }

    .box-body .full-width-chart {
        margin: -19px
    }

    .box-body.no-padding .full-width-chart {
        margin: -9px
    }

    .box-body .box-pane {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 3px
    }

    .box-body .box-pane-right {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 0
    }

    .box-footer {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top: 1px solid #f4f4f4;
        padding: 10px;
        background-color: #fff
    }

    .chart-legend {
        margin: 10px 0
    }

    @media (max-width: 991px) {
        .chart-legend > li {
            float: left;
            margin-right: 10px
        }
    }

    .box-comments {
        background: #f7f7f7
    }

    .box-comments .box-comment {
        padding: 8px 0;
        border-bottom: 1px solid #eee
    }

    .box-comments .box-comment:before,
    .box-comments .box-comment:after {
        content: " ";
        display: table
    }

    .box-comments .box-comment:after {
        clear: both
    }

    .box-comments .box-comment:last-of-type {
        border-bottom: 0
    }

    .box-comments .box-comment:first-of-type {
        padding-top: 0
    }

    .box-comments .box-comment img {
        float: left
    }

    .box-comments .comment-text {
        margin-left: 40px;
        color: #555
    }

    .box-comments .username {
        color: #444;
        display: block;
        font-weight: 600
    }

    .box-comments .text-muted {
        font-weight: 400;
        font-size: 12px
    }

    .todo-list {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: auto
    }

    .todo-list > li {
        border-radius: 2px;
        padding: 10px;
        background: #f4f4f4;
        margin-bottom: 2px;
        border-left: 2px solid #e6e7e8;
        color: #444
    }

    .todo-list > li:last-of-type {
        margin-bottom: 0
    }

    .todo-list > li > input[type='checkbox'] {
        margin: 0 10px 0 5px
    }

    .todo-list > li .text {
        display: inline-block;
        margin-left: 5px;
        font-weight: 600
    }

    .todo-list > li .label {
        margin-left: 10px;
        font-size: 9px
    }

    .todo-list > li .tools {
        display: none;
        float: right;
        color: #dd4b39
    }

    .todo-list > li .tools > .fa,
    .todo-list > li .tools > .glyphicon,
    .todo-list > li .tools > .ion {
        margin-right: 5px;
        cursor: pointer
    }

    .todo-list > li:hover .tools {
        display: inline-block
    }

    .todo-list > li.done {
        color: #999
    }

    .todo-list > li.done .text {
        text-decoration: line-through;
        font-weight: 500
    }

    .todo-list > li.done .label {
        background: #d2d6de !important
    }

    .todo-list .danger {
        border-left-color: #dd4b39
    }

    .todo-list .warning {
        border-left-color: #f39c12
    }

    .todo-list .info {
        border-left-color: #00c0ef
    }

    .todo-list .success {
        border-left-color: #00a65a
    }

    .todo-list .primary {
        border-left-color: #3c8dbc
    }

    .todo-list .handle {
        display: inline-block;
        cursor: move;
        margin: 0 5px
    }

    .chat {
        padding: 5px 20px 5px 10px
    }

    .chat .item {
        margin-bottom: 10px
    }

    .chat .item:before,
    .chat .item:after {
        content: " ";
        display: table
    }

    .chat .item:after {
        clear: both
    }

    .chat .item > img {
        width: 40px;
        height: 40px;
        border: 2px solid transparent;
        border-radius: 50%
    }

    .chat .item > .online {
        border: 2px solid #00a65a
    }

    .chat .item > .offline {
        border: 2px solid #dd4b39
    }

    .chat .item > .message {
        margin-left: 55px;
        margin-top: -40px
    }

    .chat .item > .message > .name {
        display: block;
        font-weight: 600
    }

    .chat .item > .attachment {
        border-radius: 3px;
        background: #f4f4f4;
        margin-left: 65px;
        margin-right: 15px;
        padding: 10px
    }

    .chat .item > .attachment > h4 {
        margin: 0 0 5px 0;
        font-weight: 600;
        font-size: 14px
    }

    .chat .item > .attachment > p,
    .chat .item > .attachment > .filename {
        font-weight: 600;
        font-size: 13px;
        font-style: italic;
        margin: 0
    }

    .chat .item > .attachment:before,
    .chat .item > .attachment:after {
        content: " ";
        display: table
    }

    .chat .item > .attachment:after {
        clear: both
    }

    .box-input {
        max-width: 200px
    }

    .modal .panel-body {
        color: #444
    }

    .info-box {
        display: block;
        min-height: 90px;
        background: #fff;
        width: 100%;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        margin-bottom: 15px
    }

    .info-box small {
        font-size: 14px
    }

    .info-box .progress {
        background: rgba(0, 0, 0, 0.2);
        margin: 5px -10px 5px -10px;
        height: 2px
    }

    .info-box .progress,
    .info-box .progress .progress-bar {
        border-radius: 0
    }

    .info-box .progress .progress-bar {
        background: #fff
    }

    .info-box-icon {
        border-top-left-radius: 2px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 2px;
        display: block;
        float: left;
        height: 90px;
        width: 90px;
        text-align: center;
        font-size: 45px;
        line-height: 90px;
        background: rgba(0, 0, 0, 0.2)
    }

    .info-box-icon > img {
        max-width: 100%
    }

    .info-box-content {
        padding: 5px 10px;
        margin-left: 90px
    }

    .info-box-number {
        display: block;
        font-weight: bold;
        font-size: 18px
    }

    .progress-description,
    .info-box-text {
        display: block;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .info-box-text {
        text-transform: uppercase
    }

    .info-box-more {
        display: block
    }

    .progress-description {
        margin: 0
    }

    .timeline {
        position: relative;
        margin: 0 0 30px 0;
        padding: 0;
        list-style: none
    }

    .timeline:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 4px;
        background: #ddd;
        left: 31px;
        margin: 0;
        border-radius: 2px
    }

    .timeline > li {
        position: relative;
        margin-right: 10px;
        margin-bottom: 15px
    }

    .timeline > li:before,
    .timeline > li:after {
        content: " ";
        display: table
    }

    .timeline > li:after {
        clear: both
    }

    .timeline > li > .timeline-item {
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin-top: 0;
        background: #fff;
        color: #444;
        margin-left: 60px;
        margin-right: 15px;
        padding: 0;
        position: relative
    }

    .timeline > li > .timeline-item > .time {
        color: #999;
        float: right;
        padding: 10px;
        font-size: 12px
    }

    .timeline > li > .timeline-item > .timeline-header {
        margin: 0;
        color: #555;
        border-bottom: 1px solid #f4f4f4;
        padding: 10px;
        font-size: 16px;
        line-height: 1.1
    }

    .timeline > li > .timeline-item > .timeline-header > a {
        font-weight: 600
    }

    .timeline > li > .timeline-item > .timeline-body,
    .timeline > li > .timeline-item > .timeline-footer {
        padding: 10px
    }

    .timeline > li > .fa,
    .timeline > li > .glyphicon,
    .timeline > li > .ion {
        width: 30px;
        height: 30px;
        font-size: 15px;
        line-height: 30px;
        position: absolute;
        color: #666;
        background: #d2d6de;
        border-radius: 50%;
        text-align: center;
        left: 18px;
        top: 0
    }

    .timeline > .time-label > span {
        font-weight: 600;
        padding: 5px;
        display: inline-block;
        background-color: #fff;
        border-radius: 4px
    }

    .timeline-inverse > li > .timeline-item {
        background: #f0f0f0;
        border: 1px solid #ddd;
        -webkit-box-shadow: none;
        box-shadow: none
    }

    .timeline-inverse > li > .timeline-item > .timeline-header {
        border-bottom-color: #ddd
    }

    /*.btn {*/
    /*    border-radius: 3px;*/
    /*    -webkit-box-shadow: none;*/
    /*    box-shadow: none;*/
    /*    border: 1px solid transparent*/
    /*}*/

    .btn.uppercase {
        text-transform: uppercase
    }

    .btn.btn-flat {
        border-radius: 0;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        border-width: 1px
    }

    .btn:active {
        -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        -moz-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125)
    }

    .btn:focus {
        outline: none
    }

    .btn.btn-file {
        position: relative;
        overflow: hidden;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        color: #ffffff;
        background: #1E0857;
    }

    .btn.btn-file img {
        margin-top: 2px;
        margin-left: -5px;
    }

    .send-icon-image img {
        margin-left: -3px !important;
    }

    .btn.btn-file > input[type='file'] {
        position: absolute;
        top: 0;
        right: 0;
        min-width: 100%;
        min-height: 100%;
        font-size: 100px;
        text-align: right;
        opacity: 0;
        filter: alpha(opacity=0);
        outline: none;
        background: white;
        cursor: inherit;
        display: block;
    }

    .btn-default {
        background-color: #f4f4f4;
        color: #444;
    }

    .btn-default:hover,
    .btn-default:active,
    .btn-default.hover {
        box-shadow: 0 5px 25px 0 rgba(42, 139, 242, 0.1), 0 7px 25px 0 rgba(42, 139, 242, 0.1), 0 10px 15px 0 rgba(42, 139, 242, 0.2);
    }
    /*======commented by khalid 12/29/2021 start ======*/
    /*    .btn-primary {*/
    /*        background-color: #3c8dbc;*/
    /*        border-color: #367fa9*/
    /*    }*/

    /*.btn-primary:hover,*/
    /*.btn-primary:active,*/
    /*.btn-primary.hover {*/
    /*    background-color: #367fa9*/
    /*}*/

    /*======commented by khalid 12/29/2021 end ======*/

    .btn-success {
        background-color: #00a65a;
        border-color: #008d4c
    }

    .btn-success:hover,
    .btn-success:active,
    .btn-success.hover {
        background-color: #008d4c
    }

    .btn-info {
        background-color: #00c0ef;
        border-color: #00acd6
    }

    .btn-info:hover,
    .btn-info:active,
    .btn-info.hover {
        background-color: #00acd6
    }

    .btn-danger {
        background-color: #dd4b39;
        border-color: #d73925
    }

    .btn-danger:hover,
    .btn-danger:active,
    .btn-danger.hover {
        background-color: #d73925
    }

    .btn-warning {
        background-color: #f39c12;
        border-color: #e08e0b
    }

    .btn-warning:hover,
    .btn-warning:active,
    .btn-warning.hover {
        background-color: #e08e0b
    }

    .btn-outline {
        border: 1px solid #fff;
        background: transparent;
        color: #fff
    }

    .btn-outline:hover,
    .btn-outline:focus,
    .btn-outline:active {
        color: rgba(255, 255, 255, 0.7);
        border-color: rgba(255, 255, 255, 0.7)
    }

    .btn-link {
        -webkit-box-shadow: none;
        box-shadow: none
    }

    .btn[class*='bg-']:hover {
        -webkit-box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.2);
        box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.2)
    }

    .btn-app {
        border-radius: 3px;
        position: relative;
        padding: 15px 5px;
        margin: 0 0 10px 10px;
        min-width: 80px;
        height: 60px;
        text-align: center;
        color: #666;
        border: 1px solid #ddd;
        background-color: #f4f4f4;
        font-size: 12px
    }

    .btn-app > .fa,
    .btn-app > .glyphicon,
    .btn-app > .ion {
        font-size: 20px;
        display: block
    }

    .btn-app:hover {
        background: #f4f4f4;
        color: #444;
        border-color: #aaa
    }

    .btn-app:active,
    .btn-app:focus {
        -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        -moz-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125)
    }

    .btn-app > .badge {
        position: absolute;
        top: -3px;
        right: -10px;
        font-size: 10px;
        font-weight: 400
    }

    .callout {
        border-radius: 3px;
        margin: 0 0 20px 0;
        padding: 15px 30px 15px 15px;
        border-left: 5px solid #eee
    }

    .callout a {
        color: #fff;
        text-decoration: underline
    }

    .callout a:hover {
        color: #eee
    }

    .callout h4 {
        margin-top: 0;
        font-weight: 600
    }

    .callout p:last-child {
        margin-bottom: 0
    }

    .callout code,
    .callout .highlight {
        background-color: #fff
    }

    .callout.callout-danger {
        border-color: #c23321
    }

    .callout.callout-warning {
        border-color: #c87f0a
    }

    .callout.callout-info {
        border-color: #0097bc
    }

    .callout.callout-success {
        border-color: #00733e
    }

    .alert {
        border-radius: 3px
    }

    .alert h4 {
        font-weight: 600
    }

    .alert .icon {
        margin-right: 10px
    }

    .alert .close {
        color: #000;
        opacity: .2;
        filter: alpha(opacity=20)
    }

    .alert .close:hover {
        opacity: .5;
        filter: alpha(opacity=50)
    }

    .alert a {
        color: #fff;
        text-decoration: underline
    }

    .alert-success {
        border-color: #008d4c
    }

    .alert-danger,
    .alert-error {
        border-color: #d73925
    }

    .alert-warning {
        border-color: #e08e0b
    }

    .alert-info {
        border-color: #00acd6
    }

    .nav > li > a:hover,
    .nav > li > a:active,
    .nav > li > a:focus {
        color: #444;
        background: #f7f7f7
    }

    .nav-pills > li > a {
        border-radius: 0;
        border-top: 3px solid transparent;
        color: #444
    }

    .nav-pills > li > a > .fa,
    .nav-pills > li > a > .glyphicon,
    .nav-pills > li > a > .ion {
        margin-right: 5px
    }

    .nav-pills > li.active > a,
    .nav-pills > li.active > a:hover,
    .nav-pills > li.active > a:focus {
        border-top-color: #3c8dbc
    }

    .nav-pills > li.active > a {
        font-weight: 600
    }

    .nav-stacked > li > a {
        border-radius: 0;
        border-top: 0;
        border-left: 3px solid transparent;
        color: #444
    }

    .nav-stacked > li.active > a,
    .nav-stacked > li.active > a:hover {
        background: transparent;
        color: #444;
        border-top: 0;
        border-left-color: #3c8dbc
    }

    .nav-stacked > li.header {
        border-bottom: 1px solid #ddd;
        color: #777;
        margin-bottom: 10px;
        padding: 5px 10px;
        text-transform: uppercase
    }

    .nav-tabs-custom {
        margin-bottom: 20px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        border-radius: 3px
    }

    .nav-tabs-custom > .nav-tabs {
        margin: 0;
        border-bottom-color: #f4f4f4;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px
    }

    .nav-tabs-custom > .nav-tabs > li {
        border-top: 3px solid transparent;
        margin-bottom: -2px;
        margin-right: 5px
    }

    .nav-tabs-custom > .nav-tabs > li > a {
        color: #444;
        border-radius: 0
    }

    .nav-tabs-custom > .nav-tabs > li > a.text-muted {
        color: #999
    }

    .nav-tabs-custom > .nav-tabs > li > a,
    .nav-tabs-custom > .nav-tabs > li > a:hover {
        background: transparent;
        margin: 0
    }

    .nav-tabs-custom > .nav-tabs > li > a:hover {
        color: #999
    }

    .nav-tabs-custom > .nav-tabs > li:not(.active) > a:hover,
    .nav-tabs-custom > .nav-tabs > li:not(.active) > a:focus,
    .nav-tabs-custom > .nav-tabs > li:not(.active) > a:active {
        border-color: transparent
    }

    .nav-tabs-custom > .nav-tabs > li.active {
        border-top-color: #3c8dbc
    }

    .nav-tabs-custom > .nav-tabs > li.active > a,
    .nav-tabs-custom > .nav-tabs > li.active:hover > a {
        background-color: #fff;
        color: #444
    }

    .nav-tabs-custom > .nav-tabs > li.active > a {
        border-top-color: transparent;
        border-left-color: #f4f4f4;
        border-right-color: #f4f4f4
    }

    .nav-tabs-custom > .nav-tabs > li:first-of-type {
        margin-left: 0
    }

    .nav-tabs-custom > .nav-tabs > li:first-of-type.active > a {
        border-left-color: transparent
    }

    .nav-tabs-custom > .nav-tabs.pull-right {
        float: none !important
    }

    .nav-tabs-custom > .nav-tabs.pull-right > li {
        float: right
    }

    .nav-tabs-custom > .nav-tabs.pull-right > li:first-of-type {
        margin-right: 0
    }

    .nav-tabs-custom > .nav-tabs.pull-right > li:first-of-type > a {
        border-left-width: 1px
    }

    .nav-tabs-custom > .nav-tabs.pull-right > li:first-of-type.active > a {
        border-left-color: #f4f4f4;
        border-right-color: transparent
    }

    .nav-tabs-custom > .nav-tabs > li.header {
        line-height: 35px;
        padding: 0 10px;
        font-size: 20px;
        color: #444
    }

    .nav-tabs-custom > .nav-tabs > li.header > .fa,
    .nav-tabs-custom > .nav-tabs > li.header > .glyphicon,
    .nav-tabs-custom > .nav-tabs > li.header > .ion {
        margin-right: 5px
    }

    .nav-tabs-custom > .tab-content {
        background: #fff;
        padding: 10px;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px
    }

    .nav-tabs-custom .dropdown.open > a:active,
    .nav-tabs-custom .dropdown.open > a:focus {
        background: transparent;
        color: #999
    }

    .nav-tabs-custom.tab-primary > .nav-tabs > li.active {
        border-top-color: #3c8dbc
    }

    .nav-tabs-custom.tab-info > .nav-tabs > li.active {
        border-top-color: #00c0ef
    }

    .nav-tabs-custom.tab-danger > .nav-tabs > li.active {
        border-top-color: #dd4b39
    }

    .nav-tabs-custom.tab-warning > .nav-tabs > li.active {
        border-top-color: #f39c12
    }

    .nav-tabs-custom.tab-success > .nav-tabs > li.active {
        border-top-color: #00a65a
    }

    .nav-tabs-custom.tab-default > .nav-tabs > li.active {
        border-top-color: #d2d6de
    }

    .pagination > li > a {
        background: #fafafa;
        color: #666
    }

    .pagination.pagination-flat > li > a {
        border-radius: 0 !important
    }

    .products-list {
        list-style: none;
        margin: 0;
        padding: 0
    }

    .products-list > .item {
        border-radius: 3px;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        padding: 10px 0;
        background: #fff
    }

    .products-list > .item:before,
    .products-list > .item:after {
        content: " ";
        display: table
    }

    .products-list > .item:after {
        clear: both
    }

    .products-list .product-img {
        float: left
    }

    .products-list .product-img img {
        width: 50px;
        height: 50px
    }

    .products-list .product-info {
        margin-left: 60px
    }

    .products-list .product-title {
        font-weight: 600
    }

    .products-list .product-description {
        display: block;
        color: #999;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
    }

    .product-list-in-box > .item {
        -webkit-box-shadow: none;
        box-shadow: none;
        border-radius: 0;
        border-bottom: 1px solid #f4f4f4
    }

    .product-list-in-box > .item:last-of-type {
        border-bottom-width: 0
    }

    .table > thead > tr > th,
    .table > tbody > tr > th,
    .table > tfoot > tr > th,
    .table > thead > tr > td,
    .table > tbody > tr > td,
    .table > tfoot > tr > td {
        border-top: 1px solid #f4f4f4
    }

    .table > thead > tr > th {
        border-bottom: 2px solid #f4f4f4
    }

    .table tr td .progress {
        margin-top: 5px
    }

    .table-bordered {
        border: 1px solid #f4f4f4
    }

    .table-bordered > thead > tr > th,
    .table-bordered > tbody > tr > th,
    .table-bordered > tfoot > tr > th,
    .table-bordered > thead > tr > td,
    .table-bordered > tbody > tr > td,
    .table-bordered > tfoot > tr > td {
        border: 1px solid #f4f4f4
    }

    .table-bordered > thead > tr > th,
    .table-bordered > thead > tr > td {
        border-bottom-width: 2px
    }

    .table.no-border,
    .table.no-border td,
    .table.no-border th {
        border: 0
    }

    table.text-center,
    table.text-center td,
    table.text-center th {
        text-align: center
    }

    .table.align th {
        text-align: left
    }

    .table.align td {
        text-align: right
    }

    .label-default {
        background-color: #d2d6de;
        color: #444
    }

    .direct-chat .box-body {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        position: relative;
        overflow-x: hidden;
        padding: 0
    }

    .direct-chat.chat-pane-open .direct-chat-contacts {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0)
    }

    .direct-chat-messages {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
        padding: 10px;
        height: 574px;
        overflow: auto
    }
    .direct-chat-msg{
        position: relative;
    }
    .direct-chat-msg,
    .direct-chat-text {
        display: block
    }

    .direct-chat-msg {
        margin-bottom: 10px
    }

    .direct-chat-msg:before,
    .direct-chat-msg:after {
        content: " ";
        display: table
    }

    .direct-chat-msg:after {
        clear: both
    }

    .direct-chat-messages,
    .direct-chat-contacts {
        -webkit-transition: -webkit-transform .5s ease-in-out;
        -moz-transition: -moz-transform .5s ease-in-out;
        -o-transition: -o-transform .5s ease-in-out;
        transition: transform .5s ease-in-out
    }

    .direct-chat-text {
        border-radius: 0 5px 5px 5px;
        position: relative;
        padding: 5px 10px;
        /* background: #d2d6de;*/
        border: 1px solid #419BF9;
        margin: 5px 0 0 50px;
        color: #8B878D;
    }

    /*
        .direct-chat-text:after,
        .direct-chat-text:before {
            position: absolute;
            right: 100%;
            top: 15px;
            border: solid transparent;
            border-right-color: #d2d6de;
            content: ' ';
            height: 0;
            width: 0;
            pointer-events: none
        }*/

    .direct-chat-text:after {
        border-width: 5px;
        margin-top: -5px
    }

    .direct-chat-text:before {
        border-width: 6px;
        margin-top: -6px
    }

    .right .direct-chat-text {
        margin-right: 50px;
        margin-left: 0
    }

    .right .direct-chat-text:after,
    .right .direct-chat-text:before {
        right: auto;
        left: 100%;
        border-right-color: transparent;
        border-left-color: #d2d6de
    }

    .direct-chat-img {
        border-radius: 50%;
        float: left;
        width: 40px;
        height: 40px
    }

    .right .direct-chat-img {
        float: right
    }

    .direct-chat-info {
        display: block;
        margin-bottom: 2px;
        font-size: 12px
    }

    .direct-chat-name {
        font-weight: 600
    }

    .direct-chat-timestamp {
        color: #999
    }

    .direct-chat-contacts-open .direct-chat-contacts {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0)
    }

    .direct-chat-contacts {
        -webkit-transform: translate(101%, 0);
        -ms-transform: translate(101%, 0);
        -o-transform: translate(101%, 0);
        transform: translate(101%, 0);
        position: absolute;
        top: 0;
        bottom: 0;
        height: 250px;
        width: 100%;
        background: #222d32;
        color: #fff;
        overflow: auto
    }

    .contacts-list > li {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 10px;
        margin: 0
    }

    .contacts-list > li:before,
    .contacts-list > li:after {
        content: " ";
        display: table
    }

    .contacts-list > li:after {
        clear: both
    }

    .contacts-list > li:last-of-type {
        border-bottom: none
    }

    .contacts-list-img {
        border-radius: 50%;
        width: 40px;
        float: left
    }

    .contacts-list-info {
        margin-left: 45px;
        color: #fff
    }

    .contacts-list-name,
    .contacts-list-status {
        display: block
    }

    .contacts-list-name {
        font-weight: 600
    }

    .contacts-list-status {
        font-size: 12px
    }

    .contacts-list-date {
        color: #aaa;
        font-weight: normal
    }

    .contacts-list-msg {
        color: #999
    }

    .direct-chat-danger .right > .direct-chat-text {
        background: #dd4b39;
        border-color: #dd4b39;
        color: #fff
    }

    .direct-chat-danger .right > .direct-chat-text:after,
    .direct-chat-danger .right > .direct-chat-text:before {
        border-left-color: #dd4b39
    }

    .direct-chat-primary .right > .direct-chat-text {

        border-color: #E8E8E8;
        border-radius: 5px 5px 0px 5px;

    }

    .direct-chat-primary .right > .direct-chat-text:after,
    .direct-chat-primary .right > .direct-chat-text:before {
        border-left-color: #3c8dbc;
    }

    .direct-chat-warning .right > .direct-chat-text {
        background: #f39c12;
        border-color: #f39c12;
        color: #fff
    }

    .direct-chat-warning .right > .direct-chat-text:after,
    .direct-chat-warning .right > .direct-chat-text:before {
        border-left-color: #f39c12
    }

    .direct-chat-info .right > .direct-chat-text {
        background: #00c0ef;
        border-color: #00c0ef;
        color: #fff
    }

    .direct-chat-info .right > .direct-chat-text:after,
    .direct-chat-info .right > .direct-chat-text:before {
        border-left-color: #00c0ef
    }

    .direct-chat-success .right > .direct-chat-text {
        background: #00a65a;
        border-color: #00a65a;
        color: #fff
    }

    .direct-chat-success .right > .direct-chat-text:after,
    .direct-chat-success .right > .direct-chat-text:before {
        border-left-color: #00a65a
    }

    .users-list > li {
        width: 25%;
        float: left;
        padding: 10px;
        text-align: center
    }

    .users-list > li img {
        border-radius: 50%;
        max-width: 100%;
        height: auto
    }

    .users-list > li > a:hover,
    .users-list > li > a:hover .users-list-name {
        color: #999
    }

    .users-list-name,
    .users-list-date {
        display: block
    }

    .users-list-name {
        font-weight: 600;
        color: #444;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
    }

    .users-list-date {
        color: #999;
        font-size: 12px
    }

    .carousel-control.left,
    .carousel-control.right {
        background-image: none
    }

    .carousel-control > .fa {
        font-size: 40px;
        position: absolute;
        top: 50%;
        z-index: 5;
        display: inline-block;
        margin-top: -20px
    }

    .modal {
        background: rgba(0, 0, 0, 0.3)
    }

    .modal-content {
        border-radius: 0;
        -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125);
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125);
        border: 0
    }

    @media (min-width: 768px) {
        .modal-content {
            -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125);
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125)
        }
    }

    .modal-header {
        border-bottom-color: #f4f4f4
    }

    .modal-footer {
        border-top-color: #f4f4f4
    }

    .modal-primary .modal-header,
    .modal-primary .modal-footer {
        border-color: #307095
    }

    .modal-warning .modal-header,
    .modal-warning .modal-footer {
        border-color: #c87f0a
    }

    .modal-info .modal-header,
    .modal-info .modal-footer {
        border-color: #0097bc
    }

    .modal-success .modal-header,
    .modal-success .modal-footer {
        border-color: #00733e
    }

    .modal-danger .modal-header,
    .modal-danger .modal-footer {
        border-color: #c23321
    }

    .box-widget {
        border: none;
        position: relative
    }

    .widget-user .widget-user-header {
        padding: 20px;
        height: 120px;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px
    }

    .widget-user .widget-user-username {
        margin-top: 0;
        margin-bottom: 5px;
        font-size: 25px;
        font-weight: 300;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2)
    }

    .widget-user .widget-user-desc {
        margin-top: 0
    }

    .widget-user .widget-user-image {
        position: absolute;
        top: 65px;
        left: 50%;
        margin-left: -45px
    }

    .widget-user .widget-user-image > img {
        width: 90px;
        height: auto;
        border: 3px solid #fff
    }

    .widget-user .box-footer {
        padding-top: 30px
    }

    .widget-user-2 .widget-user-header {
        padding: 20px;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px
    }

    .widget-user-2 .widget-user-username {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 25px;
        font-weight: 300
    }

    .widget-user-2 .widget-user-desc {
        margin-top: 0
    }

    .widget-user-2 .widget-user-username,
    .widget-user-2 .widget-user-desc {
        margin-left: 75px
    }

    .widget-user-2 .widget-user-image > img {
        width: 65px;
        height: auto;
        float: left
    }

    .mailbox-messages > .table {
        margin: 0
    }

    .mailbox-controls {
        padding: 5px
    }

    .mailbox-controls.with-border {
        border-bottom: 1px solid #f4f4f4
    }

    .mailbox-read-info {
        border-bottom: 1px solid #f4f4f4;
        padding: 10px
    }

    .mailbox-read-info h3 {
        font-size: 20px;
        margin: 0
    }

    .mailbox-read-info h5 {
        margin: 0;
        padding: 5px 0 0 0
    }

    .mailbox-read-time {
        color: #999;
        font-size: 13px
    }

    .mailbox-read-message {
        padding: 10px
    }

    .mailbox-attachments li {
        float: left;
        width: 200px;
        border: 1px solid #eee;
        margin-bottom: 10px;
        margin-right: 10px
    }

    .mailbox-attachment-name {
        font-weight: bold;
        color: #666
    }

    .mailbox-attachment-icon,
    .mailbox-attachment-info,
    .mailbox-attachment-size {
        display: block
    }

    .mailbox-attachment-info {
        padding: 10px;
        background: #f4f4f4
    }

    .mailbox-attachment-size {
        color: #999;
        font-size: 12px
    }

    .mailbox-attachment-icon {
        text-align: center;
        font-size: 65px;
        color: #666;
        padding: 20px 10px
    }

    .mailbox-attachment-icon.has-img {
        padding: 0
    }

    .mailbox-attachment-icon.has-img > img {
        max-width: 100%;
        height: auto
    }

    .lockscreen {
        background: #d2d6de
    }

    .lockscreen-logo {
        font-size: 35px;
        text-align: center;
        margin-bottom: 25px;
        font-weight: 300
    }

    .lockscreen-logo a {
        color: #444
    }

    .lockscreen-wrapper {
        max-width: 400px;
        margin: 0 auto;
        margin-top: 10%
    }

    .lockscreen .lockscreen-name {
        text-align: center;
        font-weight: 600
    }

    .lockscreen-item {
        border-radius: 4px;
        padding: 0;
        background: #fff;
        position: relative;
        margin: 10px auto 30px auto;
        width: 290px
    }

    .lockscreen-image {
        border-radius: 50%;
        position: absolute;
        left: -10px;
        top: -25px;
        background: #fff;
        padding: 5px;
        z-index: 10
    }

    .lockscreen-image > img {
        border-radius: 50%;
        width: 70px;
        height: 70px
    }

    .lockscreen-credentials {
        margin-left: 70px
    }

    .lockscreen-credentials .form-control {
        border: 0
    }

    .lockscreen-credentials .btn {
        background-color: #fff;
        border: 0;
        padding: 0 10px
    }

    .lockscreen-footer {
        margin-top: 10px
    }

    .login-logo,
    .register-logo {
        font-size: 35px;
        text-align: center;
        margin-bottom: 25px;
        font-weight: 300
    }

    .login-logo a,
    .register-logo a {
        color: #444
    }

    .login-page,
    .register-page {
        background: #d2d6de
    }

    .login-box,
    .register-box {
        width: 360px;
        margin: 7% auto
    }

    @media (max-width: 768px) {
        .login-box,
        .register-box {
            width: 90%;
            margin-top: 20px
        }
    }

    .login-box-body,
    .register-box-body {
        background: #fff;
        padding: 20px;
        border-top: 0;
        color: #666
    }

    .login-box-body .form-control-feedback,
    .register-box-body .form-control-feedback {
        color: #777
    }

    .login-box-msg,
    .register-box-msg {
        margin: 0;
        text-align: center;
        padding: 0 20px 20px 20px
    }

    .social-auth-links {
        margin: 10px 0
    }

    .error-page {
        width: 600px;
        margin: 20px auto 0 auto
    }

    @media (max-width: 991px) {
        .error-page {
            width: 100%
        }
    }

    .error-page > .headline {
        float: left;
        font-size: 100px;
        font-weight: 300
    }

    @media (max-width: 991px) {
        .error-page > .headline {
            float: none;
            text-align: center
        }
    }

    .error-page > .error-content {
        margin-left: 190px;
        display: block
    }

    @media (max-width: 991px) {
        .error-page > .error-content {
            margin-left: 0
        }
    }

    .error-page > .error-content > h3 {
        font-weight: 300;
        font-size: 25px
    }

    @media (max-width: 991px) {
        .error-page > .error-content > h3 {
            text-align: center
        }
    }

    .invoice {
        position: relative;
        background: #fff;
        border: 1px solid #f4f4f4;
        padding: 20px;
        margin: 10px 25px
    }

    .invoice-title {
        margin-top: 0
    }

    .profile-user-img {
        margin: 0 auto;
        width: 100px;
        padding: 3px;
        border: 3px solid #d2d6de
    }

    .profile-username {
        font-size: 21px;
        margin-top: 5px
    }

    .post {
        border-bottom: 1px solid #d2d6de;
        margin-bottom: 15px;
        padding-bottom: 15px;
        color: #666
    }

    .post:last-of-type {
        border-bottom: 0;
        margin-bottom: 0;
        padding-bottom: 0
    }

    .post .user-block {
        margin-bottom: 15px
    }

    .btn-social {
        position: relative;
        padding-left: 44px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .btn-social > :first-child {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 32px;
        line-height: 34px;
        font-size: 1.6em;
        text-align: center;
        border-right: 1px solid rgba(0, 0, 0, 0.2)
    }

    .btn-social.btn-lg {
        padding-left: 61px
    }

    .btn-social.btn-lg > :first-child {
        line-height: 45px;
        width: 45px;
        font-size: 1.8em
    }

    .btn-social.btn-sm {
        padding-left: 38px
    }

    .btn-social.btn-sm > :first-child {
        line-height: 28px;
        width: 28px;
        font-size: 1.4em
    }

    .btn-social.btn-xs {
        padding-left: 30px
    }

    .btn-social.btn-xs > :first-child {
        line-height: 20px;
        width: 20px;
        font-size: 1.2em
    }

    .btn-social-icon {
        position: relative;
        padding-left: 44px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 34px;
        width: 34px;
        padding: 0
    }

    .btn-social-icon > :first-child {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 32px;
        line-height: 34px;
        font-size: 1.6em;
        text-align: center;
        border-right: 1px solid rgba(0, 0, 0, 0.2)
    }

    .btn-social-icon.btn-lg {
        padding-left: 61px
    }

    .btn-social-icon.btn-lg > :first-child {
        line-height: 45px;
        width: 45px;
        font-size: 1.8em
    }

    .btn-social-icon.btn-sm {
        padding-left: 38px
    }

    .btn-social-icon.btn-sm > :first-child {
        line-height: 28px;
        width: 28px;
        font-size: 1.4em
    }

    .btn-social-icon.btn-xs {
        padding-left: 30px
    }

    .btn-social-icon.btn-xs > :first-child {
        line-height: 20px;
        width: 20px;
        font-size: 1.2em
    }

    .btn-social-icon > :first-child {
        border: none;
        text-align: center;
        width: 100%
    }

    .btn-social-icon.btn-lg {
        height: 45px;
        width: 45px;
        padding-left: 0;
        padding-right: 0
    }

    .btn-social-icon.btn-sm {
        height: 30px;
        width: 30px;
        padding-left: 0;
        padding-right: 0
    }

    .btn-social-icon.btn-xs {
        height: 22px;
        width: 22px;
        padding-left: 0;
        padding-right: 0
    }

    .btn-adn {
        color: #fff;
        background-color: #d87a68;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-adn:focus,
    .btn-adn.focus {
        color: #fff;
        background-color: #ce563f;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-adn:hover {
        color: #fff;
        background-color: #ce563f;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-adn:active,
    .btn-adn.active,
    .open > .dropdown-toggle.btn-adn {
        color: #fff;
        background-color: #ce563f;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-adn:active,
    .btn-adn.active,
    .open > .dropdown-toggle.btn-adn {
        background-image: none
    }

    .btn-adn .badge {
        color: #d87a68;
        background-color: #fff
    }

    .btn-bitbucket {
        color: #fff;
        background-color: #205081;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-bitbucket:focus,
    .btn-bitbucket.focus {
        color: #fff;
        background-color: #163758;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-bitbucket:hover {
        color: #fff;
        background-color: #163758;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-bitbucket:active,
    .btn-bitbucket.active,
    .open > .dropdown-toggle.btn-bitbucket {
        color: #fff;
        background-color: #163758;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-bitbucket:active,
    .btn-bitbucket.active,
    .open > .dropdown-toggle.btn-bitbucket {
        background-image: none
    }

    .btn-bitbucket .badge {
        color: #205081;
        background-color: #fff
    }

    .btn-dropbox {
        color: #fff;
        background-color: #1087dd;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-dropbox:focus,
    .btn-dropbox.focus {
        color: #fff;
        background-color: #0d6aad;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-dropbox:hover {
        color: #fff;
        background-color: #0d6aad;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-dropbox:active,
    .btn-dropbox.active,
    .open > .dropdown-toggle.btn-dropbox {
        color: #fff;
        background-color: #0d6aad;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-dropbox:active,
    .btn-dropbox.active,
    .open > .dropdown-toggle.btn-dropbox {
        background-image: none
    }

    .btn-dropbox .badge {
        color: #1087dd;
        background-color: #fff
    }

    .btn-facebook {
        color: #fff;
        background-color: #3b5998;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-facebook:focus,
    .btn-facebook.focus {
        color: #fff;
        background-color: #2d4373;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-facebook:hover {
        color: #fff;
        background-color: #2d4373;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-facebook:active,
    .btn-facebook.active,
    .open > .dropdown-toggle.btn-facebook {
        color: #fff;
        background-color: #2d4373;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-facebook:active,
    .btn-facebook.active,
    .open > .dropdown-toggle.btn-facebook {
        background-image: none
    }

    .btn-facebook .badge {
        color: #3b5998;
        background-color: #fff
    }

    .btn-flickr {
        color: #fff;
        background-color: #ff0084;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-flickr:focus,
    .btn-flickr.focus {
        color: #fff;
        background-color: #cc006a;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-flickr:hover {
        color: #fff;
        background-color: #cc006a;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-flickr:active,
    .btn-flickr.active,
    .open > .dropdown-toggle.btn-flickr {
        color: #fff;
        background-color: #cc006a;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-flickr:active,
    .btn-flickr.active,
    .open > .dropdown-toggle.btn-flickr {
        background-image: none
    }

    .btn-flickr .badge {
        color: #ff0084;
        background-color: #fff
    }

    .btn-foursquare {
        color: #fff;
        background-color: #f94877;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-foursquare:focus,
    .btn-foursquare.focus {
        color: #fff;
        background-color: #f71752;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-foursquare:hover {
        color: #fff;
        background-color: #f71752;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-foursquare:active,
    .btn-foursquare.active,
    .open > .dropdown-toggle.btn-foursquare {
        color: #fff;
        background-color: #f71752;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-foursquare:active,
    .btn-foursquare.active,
    .open > .dropdown-toggle.btn-foursquare {
        background-image: none
    }

    .btn-foursquare .badge {
        color: #f94877;
        background-color: #fff
    }

    .btn-github {
        color: #fff;
        background-color: #444;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-github:focus,
    .btn-github.focus {
        color: #fff;
        background-color: #2b2b2b;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-github:hover {
        color: #fff;
        background-color: #2b2b2b;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-github:active,
    .btn-github.active,
    .open > .dropdown-toggle.btn-github {
        color: #fff;
        background-color: #2b2b2b;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-github:active,
    .btn-github.active,
    .open > .dropdown-toggle.btn-github {
        background-image: none
    }

    .btn-github .badge {
        color: #444;
        background-color: #fff
    }

    .btn-google {
        color: #fff;
        background-color: #dd4b39;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-google:focus,
    .btn-google.focus {
        color: #fff;
        background-color: #c23321;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-google:hover {
        color: #fff;
        background-color: #c23321;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-google:active,
    .btn-google.active,
    .open > .dropdown-toggle.btn-google {
        color: #fff;
        background-color: #c23321;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-google:active,
    .btn-google.active,
    .open > .dropdown-toggle.btn-google {
        background-image: none
    }

    .btn-google .badge {
        color: #dd4b39;
        background-color: #fff
    }

    .btn-instagram {
        color: #fff;
        background-color: #3f729b;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-instagram:focus,
    .btn-instagram.focus {
        color: #fff;
        background-color: #305777;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-instagram:hover {
        color: #fff;
        background-color: #305777;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-instagram:active,
    .btn-instagram.active,
    .open > .dropdown-toggle.btn-instagram {
        color: #fff;
        background-color: #305777;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-instagram:active,
    .btn-instagram.active,
    .open > .dropdown-toggle.btn-instagram {
        background-image: none
    }

    .btn-instagram .badge {
        color: #3f729b;
        background-color: #fff
    }

    .btn-linkedin {
        color: #fff;
        background-color: #007bb6;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-linkedin:focus,
    .btn-linkedin.focus {
        color: #fff;
        background-color: #005983;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-linkedin:hover {
        color: #fff;
        background-color: #005983;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-linkedin:active,
    .btn-linkedin.active,
    .open > .dropdown-toggle.btn-linkedin {
        color: #fff;
        background-color: #005983;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-linkedin:active,
    .btn-linkedin.active,
    .open > .dropdown-toggle.btn-linkedin {
        background-image: none
    }

    .btn-linkedin .badge {
        color: #007bb6;
        background-color: #fff
    }

    .btn-microsoft {
        color: #fff;
        background-color: #2672ec;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-microsoft:focus,
    .btn-microsoft.focus {
        color: #fff;
        background-color: #125acd;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-microsoft:hover {
        color: #fff;
        background-color: #125acd;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-microsoft:active,
    .btn-microsoft.active,
    .open > .dropdown-toggle.btn-microsoft {
        color: #fff;
        background-color: #125acd;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-microsoft:active,
    .btn-microsoft.active,
    .open > .dropdown-toggle.btn-microsoft {
        background-image: none
    }

    .btn-microsoft .badge {
        color: #2672ec;
        background-color: #fff
    }

    .btn-openid {
        color: #fff;
        background-color: #f7931e;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-openid:focus,
    .btn-openid.focus {
        color: #fff;
        background-color: #da7908;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-openid:hover {
        color: #fff;
        background-color: #da7908;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-openid:active,
    .btn-openid.active,
    .open > .dropdown-toggle.btn-openid {
        color: #fff;
        background-color: #da7908;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-openid:active,
    .btn-openid.active,
    .open > .dropdown-toggle.btn-openid {
        background-image: none
    }

    .btn-openid .badge {
        color: #f7931e;
        background-color: #fff
    }

    .btn-pinterest {
        color: #fff;
        background-color: #cb2027;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-pinterest:focus,
    .btn-pinterest.focus {
        color: #fff;
        background-color: #9f191f;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-pinterest:hover {
        color: #fff;
        background-color: #9f191f;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-pinterest:active,
    .btn-pinterest.active,
    .open > .dropdown-toggle.btn-pinterest {
        color: #fff;
        background-color: #9f191f;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-pinterest:active,
    .btn-pinterest.active,
    .open > .dropdown-toggle.btn-pinterest {
        background-image: none
    }

    .btn-pinterest .badge {
        color: #cb2027;
        background-color: #fff
    }

    .btn-reddit {
        color: #000;
        background-color: #eff7ff;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-reddit:focus,
    .btn-reddit.focus {
        color: #000;
        background-color: #bcddff;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-reddit:hover {
        color: #000;
        background-color: #bcddff;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-reddit:active,
    .btn-reddit.active,
    .open > .dropdown-toggle.btn-reddit {
        color: #000;
        background-color: #bcddff;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-reddit:active,
    .btn-reddit.active,
    .open > .dropdown-toggle.btn-reddit {
        background-image: none
    }

    .btn-reddit .badge {
        color: #eff7ff;
        background-color: #000
    }

    .btn-soundcloud {
        color: #fff;
        background-color: #f50;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-soundcloud:focus,
    .btn-soundcloud.focus {
        color: #fff;
        background-color: #c40;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-soundcloud:hover {
        color: #fff;
        background-color: #c40;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-soundcloud:active,
    .btn-soundcloud.active,
    .open > .dropdown-toggle.btn-soundcloud {
        color: #fff;
        background-color: #c40;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-soundcloud:active,
    .btn-soundcloud.active,
    .open > .dropdown-toggle.btn-soundcloud {
        background-image: none
    }

    .btn-soundcloud .badge {
        color: #f50;
        background-color: #fff
    }

    .btn-tumblr {
        color: #fff;
        background-color: #2c4762;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-tumblr:focus,
    .btn-tumblr.focus {
        color: #fff;
        background-color: #1c2d3f;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-tumblr:hover {
        color: #fff;
        background-color: #1c2d3f;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-tumblr:active,
    .btn-tumblr.active,
    .open > .dropdown-toggle.btn-tumblr {
        color: #fff;
        background-color: #1c2d3f;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-tumblr:active,
    .btn-tumblr.active,
    .open > .dropdown-toggle.btn-tumblr {
        background-image: none
    }

    .btn-tumblr .badge {
        color: #2c4762;
        background-color: #fff
    }

    .btn-twitter {
        color: #fff;
        background-color: #55acee;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-twitter:focus,
    .btn-twitter.focus {
        color: #fff;
        background-color: #2795e9;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-twitter:hover {
        color: #fff;
        background-color: #2795e9;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-twitter:active,
    .btn-twitter.active,
    .open > .dropdown-toggle.btn-twitter {
        color: #fff;
        background-color: #2795e9;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-twitter:active,
    .btn-twitter.active,
    .open > .dropdown-toggle.btn-twitter {
        background-image: none
    }

    .btn-twitter .badge {
        color: #55acee;
        background-color: #fff
    }

    .btn-vimeo {
        color: #fff;
        background-color: #1ab7ea;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-vimeo:focus,
    .btn-vimeo.focus {
        color: #fff;
        background-color: #1295bf;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-vimeo:hover {
        color: #fff;
        background-color: #1295bf;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-vimeo:active,
    .btn-vimeo.active,
    .open > .dropdown-toggle.btn-vimeo {
        color: #fff;
        background-color: #1295bf;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-vimeo:active,
    .btn-vimeo.active,
    .open > .dropdown-toggle.btn-vimeo {
        background-image: none
    }

    .btn-vimeo .badge {
        color: #1ab7ea;
        background-color: #fff
    }

    .btn-vk {
        color: #fff;
        background-color: #587ea3;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-vk:focus,
    .btn-vk.focus {
        color: #fff;
        background-color: #466482;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-vk:hover {
        color: #fff;
        background-color: #466482;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-vk:active,
    .btn-vk.active,
    .open > .dropdown-toggle.btn-vk {
        color: #fff;
        background-color: #466482;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-vk:active,
    .btn-vk.active,
    .open > .dropdown-toggle.btn-vk {
        background-image: none
    }

    .btn-vk .badge {
        color: #587ea3;
        background-color: #fff
    }

    .btn-yahoo {
        color: #fff;
        background-color: #720e9e;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-yahoo:focus,
    .btn-yahoo.focus {
        color: #fff;
        background-color: #500a6f;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-yahoo:hover {
        color: #fff;
        background-color: #500a6f;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-yahoo:active,
    .btn-yahoo.active,
    .open > .dropdown-toggle.btn-yahoo {
        color: #fff;
        background-color: #500a6f;
        border-color: rgba(0, 0, 0, 0.2)
    }

    .btn-yahoo:active,
    .btn-yahoo.active,
    .open > .dropdown-toggle.btn-yahoo {
        background-image: none
    }

    .btn-yahoo .badge {
        color: #720e9e;
        background-color: #fff
    }

    .fc-button {
        background: #f4f4f4;
        background-image: none;
        color: #444;
        border-color: #ddd;
        border-bottom-color: #ddd
    }

    .fc-button:hover,
    .fc-button:active,
    .fc-button.hover {
        background-color: #e9e9e9
    }

    .fc-header-title h2 {
        font-size: 15px;
        line-height: 1.6em;
        color: #666;
        margin-left: 10px
    }

    .fc-header-right {
        padding-right: 10px
    }

    .fc-header-left {
        padding-left: 10px
    }

    .fc-widget-header {
        background: #fafafa
    }

    .fc-grid {
        width: 100%;
        border: 0
    }

    .fc-widget-header:first-of-type,
    .fc-widget-content:first-of-type {
        border-left: 0;
        border-right: 0
    }

    .fc-widget-header:last-of-type,
    .fc-widget-content:last-of-type {
        border-right: 0
    }

    .fc-toolbar {
        padding: 10px;
        margin: 0
    }

    .fc-day-number {
        font-size: 20px;
        font-weight: 300;
        padding-right: 10px
    }

    .fc-color-picker {
        list-style: none;
        margin: 0;
        padding: 0
    }

    .fc-color-picker > li {
        float: left;
        font-size: 30px;
        margin-right: 5px;
        line-height: 30px
    }

    .fc-color-picker > li .fa {
        -webkit-transition: -webkit-transform linear .3s;
        -moz-transition: -moz-transform linear .3s;
        -o-transition: -o-transform linear .3s;
        transition: transform linear .3s
    }

    .fc-color-picker > li .fa:hover {
        -webkit-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
        -o-transform: rotate(30deg);
        transform: rotate(30deg)
    }

    #add-new-event {
        -webkit-transition: all linear .3s;
        -o-transition: all linear .3s;
        transition: all linear .3s
    }

    .external-event {
        padding: 5px 10px;
        font-weight: bold;
        margin-bottom: 4px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        cursor: move
    }

    .external-event:hover {
        box-shadow: inset 0 0 90px rgba(0, 0, 0, 0.2)
    }

    .select2-container--default.select2-container--focus,
    .select2-selection.select2-container--focus,
    .select2-container--default:focus,
    .select2-selection:focus,
    .select2-container--default:active,
    .select2-selection:active {
        outline: none
    }

    .select2-container--default .select2-selection--single,
    .select2-selection .select2-selection--single {
        border: 1px solid #d2d6de;
        border-radius: 0;
        padding: 6px 12px;
        height: 34px
    }

    .select2-container--default.select2-container--open {
        border-color: #3c8dbc
    }

    .select2-dropdown {
        border: 1px solid #d2d6de;
        border-radius: 0
    }

    .select2-container--default .select2-results__option--highlighted[aria-selected] {
        background-color: #3c8dbc;
        color: white
    }

    .select2-results__option {
        padding: 6px 12px;
        user-select: none;
        -webkit-user-select: none
    }

    .select2-container .select2-selection--single .select2-selection__rendered {
        padding-left: 0;
        padding-right: 0;
        height: auto;
        margin-top: -4px
    }

    .select2-container[dir="rtl"] .select2-selection--single .select2-selection__rendered {
        padding-right: 6px;
        padding-left: 20px
    }

    .select2-container--default .select2-selection--single .select2-selection__arrow {
        height: 28px;
        right: 3px
    }

    .select2-container--default .select2-selection--single .select2-selection__arrow b {
        margin-top: 0
    }

    .select2-dropdown .select2-search__field,
    .select2-search--inline .select2-search__field {
        border: 1px solid #d2d6de
    }

    .select2-dropdown .select2-search__field:focus,
    .select2-search--inline .select2-search__field:focus {
        outline: none;
        border: 1px solid #3c8dbc
    }

    .select2-container--default .select2-results__option[aria-disabled=true] {
        color: #999
    }

    .select2-container--default .select2-results__option[aria-selected=true] {
        background-color: #ddd
    }

    .select2-container--default .select2-results__option[aria-selected=true],
    .select2-container--default .select2-results__option[aria-selected=true]:hover {
        color: #444
    }

    .select2-container--default .select2-selection--multiple {
        border: 1px solid #d2d6de;
        border-radius: 0
    }

    .select2-container--default .select2-selection--multiple:focus {
        border-color: #3c8dbc
    }

    .select2-container--default.select2-container--focus .select2-selection--multiple {
        border-color: #d2d6de
    }

    .select2-container--default .select2-selection--multiple .select2-selection__choice {
        background-color: #3c8dbc;
        border-color: #367fa9;
        padding: 1px 10px;
        color: #fff
    }

    .select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
        margin-right: 5px;
        color: rgba(255, 255, 255, 0.7)
    }

    .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover {
        color: #fff
    }

    .select2-container .select2-selection--single .select2-selection__rendered {
        padding-right: 10px
    }

    .pad {
        padding: 10px
    }

    .margin {
        margin: 10px
    }

    .margin-bottom {
        margin-bottom: 20px
    }

    .margin-bottom-none {
        margin-bottom: 0
    }

    .margin-r-5 {
        margin-right: 5px
    }

    .inline {
        display: inline
    }

    .description-block {
        display: block;
        margin: 10px 0;
        text-align: center
    }

    .description-block.margin-bottom {
        margin-bottom: 25px
    }

    .description-block > .description-header {
        margin: 0;
        padding: 0;
        font-weight: 600;
        font-size: 16px
    }

    .description-block > .description-text {
        text-transform: uppercase
    }

    .bg-red,
    .bg-yellow,
    .bg-aqua,
    .bg-blue,
    .bg-light-blue,
    .bg-green,
    .bg-navy,
    .bg-teal,
    .bg-olive,
    .bg-lime,
    .bg-orange,
    .bg-fuchsia,
    .bg-purple,
    .bg-maroon,
    .bg-black,
    .bg-red-active,
    .bg-yellow-active,
    .bg-aqua-active,
    .bg-blue-active,
    .bg-light-blue-active,
    .bg-green-active,
    .bg-navy-active,
    .bg-teal-active,
    .bg-olive-active,
    .bg-lime-active,
    .bg-orange-active,
    .bg-fuchsia-active,
    .bg-purple-active,
    .bg-maroon-active,
    .bg-black-active,
    .callout.callout-danger,
    .callout.callout-warning,
    .callout.callout-info,
    .callout.callout-success,
    .alert-success,
    .alert-danger,
    .alert-error,
    .alert-warning,
    .alert-info,
    .label-danger,
    .label-info,
    .label-warning,
    .label-primary,
    .label-success,
    .modal-primary .modal-body,
    .modal-primary .modal-header,
    .modal-primary .modal-footer,
    .modal-warning .modal-body,
    .modal-warning .modal-header,
    .modal-warning .modal-footer,
    .modal-info .modal-body,
    .modal-info .modal-header,
    .modal-info .modal-footer,
    .modal-success .modal-body,
    .modal-success .modal-header,
    .modal-success .modal-footer,
    .modal-danger .modal-body,
    .modal-danger .modal-header,
    .modal-danger .modal-footer {
        color: #fff !important
    }

    .bg-gray {
        color: #000;
        background-color: #d2d6de !important
    }

    .bg-gray-light {
        background-color: #f7f7f7
    }

    .bg-black {
        background-color: #111 !important
    }

    .bg-red,
    .callout.callout-danger,
    .alert-danger,
    .alert-error,
    .label-danger,
    .modal-danger .modal-body {
        background-color: #dd4b39 !important
    }

    .bg-yellow,
    .callout.callout-warning,
    .alert-warning,
    .label-warning,
    .modal-warning .modal-body {
        background-color: #f39c12 !important
    }

    .bg-aqua,
    .callout.callout-info,
    .alert-info,
    .label-info,
    .modal-info .modal-body {
        background-color: #00c0ef !important
    }

    .bg-blue {
        background-color: #0073b7 !important
    }

    .bg-light-blue,
    .label-primary,
    .modal-primary .modal-body {
        background-color: #3c8dbc !important
    }

    .bg-green,
    .callout.callout-success,
    .alert-success,
    .label-success,
    .modal-success .modal-body {
        background-color: #00a65a !important
    }

    .bg-navy {
        background-color: #001f3f !important
    }

    .bg-teal {
        background-color: #39cccc !important
    }

    .bg-olive {
        background-color: #3d9970 !important
    }

    .bg-lime {
        background-color: #01ff70 !important
    }

    .bg-orange {
        background-color: #ff851b !important
    }

    .bg-fuchsia {
        background-color: #f012be !important
    }

    .bg-purple {
        background-color: #605ca8 !important
    }

    .bg-maroon {
        background-color: #d81b60 !important
    }

    .bg-gray-active {
        color: #000;
        background-color: #b5bbc8 !important
    }

    .bg-black-active {
        background-color: #000 !important
    }

    .bg-red-active,
    .modal-danger .modal-header,
    .modal-danger .modal-footer {
        background-color: #d33724 !important
    }

    .bg-yellow-active,
    .modal-warning .modal-header,
    .modal-warning .modal-footer {
        background-color: #db8b0b !important
    }

    .bg-aqua-active,
    .modal-info .modal-header,
    .modal-info .modal-footer {
        background-color: #00a7d0 !important
    }

    .bg-blue-active {
        background-color: #005384 !important
    }

    .bg-light-blue-active,
    .modal-primary .modal-header,
    .modal-primary .modal-footer {
        background-color: #357ca5 !important
    }

    .bg-green-active,
    .modal-success .modal-header,
    .modal-success .modal-footer {
        background-color: #008d4c !important
    }

    .bg-navy-active {
        background-color: #001a35 !important
    }

    .bg-teal-active {
        background-color: #30bbbb !important
    }

    .bg-olive-active {
        background-color: #368763 !important
    }

    .bg-lime-active {
        background-color: #00e765 !important
    }

    .bg-orange-active {
        background-color: #ff7701 !important
    }

    .bg-fuchsia-active {
        background-color: #db0ead !important
    }

    .bg-purple-active {
        background-color: #555299 !important
    }

    .bg-maroon-active {
        background-color: #ca195a !important
    }

    [class^="bg-"].disabled {
        opacity: .65;
        filter: alpha(opacity=65)
    }

    .text-red {
        color: #dd4b39 !important
    }

    .text-yellow {
        color: #f39c12 !important
    }

    .text-aqua {
        color: #00c0ef !important
    }

    .text-blue {
        color: #0073b7 !important
    }

    .text-black {
        color: #111 !important
    }

    .text-light-blue {
        color: #3c8dbc !important
    }

    .text-green {
        color: #00a65a !important
    }

    .text-gray {
        color: #d2d6de !important
    }

    .text-navy {
        color: #001f3f !important
    }

    .text-teal {
        color: #39cccc !important
    }

    .text-olive {
        color: #3d9970 !important
    }

    .text-lime {
        color: #01ff70 !important
    }

    .text-orange {
        color: #ff851b !important
    }

    .text-fuchsia {
        color: #f012be !important
    }

    .text-purple {
        color: #605ca8 !important
    }

    .text-maroon {
        color: #d81b60 !important
    }

    .link-muted {
        color: #7a869d
    }

    .link-muted:hover,
    .link-muted:focus {
        color: #606c84
    }

    .link-black {
        color: #666
    }

    .link-black:hover,
    .link-black:focus {
        color: #999
    }

    .hide {
        display: none !important
    }

    .no-border {
        border: 0 !important
    }

    .no-padding {
        padding: 0 !important
    }

    .no-margin {
        margin: 0 !important
    }

    .no-shadow {
        box-shadow: none !important
    }

    .list-unstyled,
    .chart-legend,
    .contacts-list,
    .users-list,
    .mailbox-attachments {
        list-style: none;
        margin: 0;
        padding: 0
    }

    .list-group-unbordered > .list-group-item {
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        padding-left: 0;
        padding-right: 0
    }

    .flat {
        border-radius: 0 !important
    }

    .text-bold,
    .text-bold.table td,
    .text-bold.table th {
        font-weight: 700
    }

    .text-sm {
        font-size: 12px
    }

    .jqstooltip {
        padding: 5px !important;
        width: auto !important;
        height: auto !important
    }

    .bg-teal-gradient {
        background: #39cccc !important;
        background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #39cccc), color-stop(1, #7adddd)) !important;
        background: -ms-linear-gradient(bottom, #39cccc, #7adddd) !important;
        background: -moz-linear-gradient(center bottom, #39cccc 0, #7adddd 100%) !important;
        background: -o-linear-gradient(#7adddd, #39cccc) !important;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#7adddd', endColorstr='#39cccc', GradientType=0) !important;
        color: #fff
    }

    .bg-light-blue-gradient {
        background: #3c8dbc !important;
        background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #3c8dbc), color-stop(1, #67a8ce)) !important;
        background: -ms-linear-gradient(bottom, #3c8dbc, #67a8ce) !important;
        background: -moz-linear-gradient(center bottom, #3c8dbc 0, #67a8ce 100%) !important;
        background: -o-linear-gradient(#67a8ce, #3c8dbc) !important;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#67a8ce', endColorstr='#3c8dbc', GradientType=0) !important;
        color: #fff
    }

    .bg-blue-gradient {
        background: #0073b7 !important;
        background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #0073b7), color-stop(1, #0089db)) !important;
        background: -ms-linear-gradient(bottom, #0073b7, #0089db) !important;
        background: -moz-linear-gradient(center bottom, #0073b7 0, #0089db 100%) !important;
        background: -o-linear-gradient(#0089db, #0073b7) !important;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0089db', endColorstr='#0073b7', GradientType=0) !important;
        color: #fff
    }

    .bg-aqua-gradient {
        background: #00c0ef !important;
        background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #00c0ef), color-stop(1, #14d1ff)) !important;
        background: -ms-linear-gradient(bottom, #00c0ef, #14d1ff) !important;
        background: -moz-linear-gradient(center bottom, #00c0ef 0, #14d1ff 100%) !important;
        background: -o-linear-gradient(#14d1ff, #00c0ef) !important;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#14d1ff', endColorstr='#00c0ef', GradientType=0) !important;
        color: #fff
    }

    .bg-yellow-gradient {
        background: #f39c12 !important;
        background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #f39c12), color-stop(1, #f7bc60)) !important;
        background: -ms-linear-gradient(bottom, #f39c12, #f7bc60) !important;
        background: -moz-linear-gradient(center bottom, #f39c12 0, #f7bc60 100%) !important;
        background: -o-linear-gradient(#f7bc60, #f39c12) !important;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7bc60', endColorstr='#f39c12', GradientType=0) !important;
        color: #fff
    }

    .bg-purple-gradient {
        background: #605ca8 !important;
        background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #605ca8), color-stop(1, #9491c4)) !important;
        background: -ms-linear-gradient(bottom, #605ca8, #9491c4) !important;
        background: -moz-linear-gradient(center bottom, #605ca8 0, #9491c4 100%) !important;
        background: -o-linear-gradient(#9491c4, #605ca8) !important;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#9491c4', endColorstr='#605ca8', GradientType=0) !important;
        color: #fff
    }

    .bg-green-gradient {
        background: #00a65a !important;
        background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #00a65a), color-stop(1, #00ca6d)) !important;
        background: -ms-linear-gradient(bottom, #00a65a, #00ca6d) !important;
        background: -moz-linear-gradient(center bottom, #00a65a 0, #00ca6d 100%) !important;
        background: -o-linear-gradient(#00ca6d, #00a65a) !important;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ca6d', endColorstr='#00a65a', GradientType=0) !important;
        color: #fff
    }

    .bg-red-gradient {
        background: #dd4b39 !important;
        background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #dd4b39), color-stop(1, #e47365)) !important;
        background: -ms-linear-gradient(bottom, #dd4b39, #e47365) !important;
        background: -moz-linear-gradient(center bottom, #dd4b39 0, #e47365 100%) !important;
        background: -o-linear-gradient(#e47365, #dd4b39) !important;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e47365', endColorstr='#dd4b39', GradientType=0) !important;
        color: #fff
    }

    .bg-black-gradient {
        background: #111 !important;
        background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #111), color-stop(1, #2b2b2b)) !important;
        background: -ms-linear-gradient(bottom, #111, #2b2b2b) !important;
        background: -moz-linear-gradient(center bottom, #111 0, #2b2b2b 100%) !important;
        background: -o-linear-gradient(#2b2b2b, #111) !important;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2b2b2b', endColorstr='#111111', GradientType=0) !important;
        color: #fff
    }

    .bg-maroon-gradient {
        background: #d81b60 !important;
        background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #d81b60), color-stop(1, #e73f7c)) !important;
        background: -ms-linear-gradient(bottom, #d81b60, #e73f7c) !important;
        background: -moz-linear-gradient(center bottom, #d81b60 0, #e73f7c 100%) !important;
        background: -o-linear-gradient(#e73f7c, #d81b60) !important;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e73f7c', endColorstr='#d81b60', GradientType=0) !important;
        color: #fff
    }

    .description-block .description-icon {
        font-size: 16px
    }

    .no-pad-top {
        padding-top: 0
    }

    .position-static {
        position: static !important
    }

    .list-header {
        font-size: 15px;
        padding: 10px 4px;
        font-weight: bold;
        color: #666
    }

    .list-seperator {
        height: 1px;
        background: #f4f4f4;
        margin: 15px 0 9px 0
    }

    .list-link > a {
        padding: 4px;
        color: #777
    }

    .list-link > a:hover {
        color: #222
    }

    .font-light {
        font-weight: 300
    }

    .user-block:before,
    .user-block:after {
        content: " ";
        display: table
    }

    .user-block:after {
        clear: both
    }

    .user-block img {
        width: 40px;
        height: 40px;
        float: left
    }

    .user-block .username,
    .user-block .description,
    .user-block .comment {
        display: block;
        margin-left: 50px
    }

    .user-block .username {
        font-size: 16px;
        font-weight: 600
    }

    .user-block .description {
        color: #999;
        font-size: 13px
    }

    .user-block.user-block-sm .username,
    .user-block.user-block-sm .description,
    .user-block.user-block-sm .comment {
        margin-left: 40px
    }

    .user-block.user-block-sm .username {
        font-size: 14px
    }

    .img-sm,
    /*.img-md,*/
    .img-lg,
    .box-comments .box-comment img,
    .user-block.user-block-sm img {
        float: left
    }

    .img-sm,
    .box-comments .box-comment img,
    .user-block.user-block-sm img {
        width: 30px !important;
        height: 30px !important
    }

    .img-sm + .img-push {
        margin-left: 40px
    }

    .img-md {
        width: 60px;
        height: 60px
    }

    .img-md + .img-push {
        margin-left: 70px
    }

    .img-lg {
        width: 100px;
        height: 100px
    }

    .img-lg + .img-push {
        margin-left: 110px
    }

    .img-bordered {
        border: 3px solid #d2d6de;
        padding: 3px
    }

    .img-bordered-sm {
        border: 2px solid #d2d6de;
        padding: 2px
    }

    .attachment-block {
        border: 1px solid #f4f4f4;
        padding: 5px;
        margin-bottom: 10px;
        background: #f7f7f7
    }

    .attachment-block .attachment-img {
        max-width: 100px;
        max-height: 100px;
        height: auto;
        float: left
    }

    .attachment-block .attachment-pushed {
        margin-left: 110px
    }

    .attachment-block .attachment-heading {
        margin: 0
    }

    .attachment-block .attachment-text {
        color: #555
    }

    .connectedSortable {
        min-height: 100px
    }

    .ui-helper-hidden-accessible {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px
    }

    .sort-highlight {
        background: #f4f4f4;
        border: 1px dashed #ddd;
        margin-bottom: 10px
    }

    .full-opacity-hover {
        opacity: .65;
        filter: alpha(opacity=65)
    }

    .full-opacity-hover:hover {
        opacity: 1;
        filter: alpha(opacity=100)
    }

    .chart {
        position: relative;
        overflow: hidden;
        width: 100%
    }

    .chart svg,
    .chart canvas {
        width: 100% !important
    }

    @media print {
        .no-print,
        .main-sidebar,
        .left-side,
        .main-header,
        .content-header {
            display: none !important
        }

        .content-wrapper,
        .right-side,
        .main-footer {
            margin-left: 0 !important;
            min-height: 0 !important;
            -webkit-transform: translate(0, 0) !important;
            -ms-transform: translate(0, 0) !important;
            -o-transform: translate(0, 0) !important;
            transform: translate(0, 0) !important
        }

        .fixed .content-wrapper,
        .fixed .right-side {
            padding-top: 0 !important
        }

        .invoice {
            width: 100%;
            border: 0;
            margin: 0;
            padding: 0
        }

        .invoice-col {
            float: left;
            width: 33.3333333%
        }

        .table-responsive {
            overflow: auto
        }

        .table-responsive > .table tr th,
        .table-responsive > .table tr td {
            white-space: normal !important
        }
    }

    /*css bye khalid*/

    /*user info box start*/
    .chat-edit-option{
        position: absolute;
        top: 0;
        cursor: pointer;
        left: -20px;
    }
    .edit-menu-icon{
        padding: 10px;
    }
    .chat .created-date {
        color: #a4a49b;
        font-size: 10px;
    }


    .edit-delete-menu{
        transform: translate3d(15px, 0px, 0px) !important;
    }
    .menu-position{
        position: absolute;
    }
    .showEditMenu{
        position: absolute;
        width: fit-content;
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        display: flex;
        flex-flow: column;
        background-color: white;
        z-index: 999;
        top: 6px;
        left: 20px;
    }
    .edit-menu-item{
        padding: 2px 10px;
    }

    .edit-menu-item:hover{
        background: #F8F9FA;
        border-radius: 4px;

    }



    .user-info-title a {
        text-decoration: none;
        color: #1e0857;
        padding: 21px 27px 10px;
    }

    .user-info-title a:hover {
        background: #7D1D72;
        color: #ffffff;
        border-radius: 20px 20px 0 0;
    }

    /*General info css*/
    .general-info {
        margin-left: -15px;
    }

    .general-info li {
        list-style: none;
        margin-bottom: 1px;
        font-size: 12px;
        color: rgba(30, 8, 87, 0.8);
    }

    .li-margin-top {
        margin-top: 15px;
    }

    .general-info li strong {
        color: rgba(30, 8, 87, 0.8);
        font-weight: bolder;
    }

    .general-tab {
        font-weight: bold;
    }

    .general-nav {
        font-weight: bold;
    }
    /*classification css*/
    .classification-center{
        justify-content: center !important;
    }
    /*content item css */
    .content-item {
        margin-left: -4px;
    }

    .audio-image, .video-image {
        width: 100px;
        height: 60px;
    }
    .content-div{
        justify-content: center;
        border-top: 1px solid #DDDDDD;
    }
    .content-table{
        width: 100%;
    }
    .content-text{
        font-size: 12px;
    }
    .content-title-text{
        font-size: 14px;
        font-weight: bold;
    }
    .video-image{
        background-size: 50px 50px;
        background-position: center;
    }


    /*chat list css*/
    .mesg-heading-text {
        color: #783DAB;
    }

    .plus-button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #4B3979;
        color: #ffffff;
        text-align: center;
        cursor: pointer;
    }

    .plus-button i {
        margin-top: 9px;
    }

    .search-input {
        border-bottom: 1px solid #DDDDDD;
    }

    .search-input > input[type="text"] {
        border: none;
    }

    .user-list-name {
        font-size: 11px;
        font-weight: 700;
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 85px;
        position: absolute;
        top: 8px;
        left: 53px;
    }

    .user-list-border {
        border-bottom: 1px solid #DDDDDD;
        cursor: pointer;
        position: relative;
    }
    .member-list-time {
        margin-top: 10px;
    }



    .message-text-color {
        color: #707C97;
        font-size: 12px;
    }

    .latest-msg-file {
        background: #CAE2FC;
        border-radius: 40px;
        padding: 10px 20px 10px 20px;
        color: #2A8BF2;
        font-size: 13px;
        font-weight: bold;
    }

    .latest-msg-image {
        background: #7E6182;
        border-radius: 40px;
        padding: 10px 20px 10px 20px;
        color: #F7F5F7;
        font-size: 13px;
        font-weight: bold;
    }

    .latest-msg-video {
        background: #BFF0C0;
        border-radius: 40px;
        padding: 10px 20px 10px 20px;
        color: #00C305;
        font-size: 13px;
        font-weight: bold;
    }

    .active-user {
        background: #2F80ED;
    }

    .active-msg-color {
        color: #ffffff;
    }

    .active-user-name-color {
        color: #ffffff;
    }

    .active-time-color {
        color: #CBDFFB !important;
    }
    .btn-chat-search{
        border-radius: 3px;
        -webkit-box-shadow: none;
        box-shadow: none;
        border: 1px solid transparent;
        margin-top: 6px;
    }


    .name-part {
        position: absolute;
        width: 220px;
    }

    .name-part-child {
        position: relative;
        top: -6px;
        left: 10px;
        right: 0;
        color: #0d1c2e;
        font-size: 14px;
        font-weight: bold;
    }

    .chat-header-image {
        margin-top: -15px;
        width: 50px;
        height: 50px;
    }

    .chat-menu {
        width: 48.6px;
        height: 48.6px;
        border-radius: 50%;
        padding: 13.1px 13.1px 13.1px 13.1px;
        box-shadow: 0 5px 25px 0 rgba(42, 139, 242, 0.07), 0 7px 25px 0 rgba(42, 139, 242, 0.03), 0 10px 15px 0 rgba(0, 0, 0, 0.03);
        /*box-shadow: 0 0 10px  rgba(0,0,0,0.6);*/
        float: right;
        margin-right: 7px;
        margin-top: -7px;

    }

    .chat-menu-icon {
        margin-left: 8px;
        color: #707C97;

    }

    .chat-menu {
        position: relative;
        overflow: hidden;
    }

    .chat-menu > input[type='file'] {
        position: absolute;
        top: 0;
        right: 0;
        text-align: right;
        opacity: 0;
        filter: alpha(opacity=0);
        outline: none;
        background: white;
        cursor: pointer;
        display: block;

    }

    .chat-file-icon {
        margin-left: 5px;
        color: #707C97;
    }

    .text-input {
        border: none;

    }

    .text-input::placeholder {
        color: #B7BDCB;
        font-weight: bold;
    }



    .popup-icons-design .popup-ul {
        text-align: center;
        position: absolute;
        top: 535px;
        z-index: 10;
        left: -10px; /* Hide vertical scrollbar */


    }

    .popup-icons-design .popup-ul .popup-li {
        list-style: none;
        margin-bottom: 6px;
        position: relative;
        overflow: hidden;
        width: 40px;
        height: 40px;
        background: #1E0857;
        border-radius: 50%;
        cursor: pointer;
    }


    .popup-icons-design .popup-ul .popup-li > input[type='file'] {
        position: absolute;
        right: 0;
        text-align: right;
        opacity: 0;
        filter: alpha(opacity=0);
        outline: none;
        background: white;
        cursor: inherit;
        display: inline-block;
        overflow: hidden;
    }
    .chat-box-input{
        margin: 0 6px;
        margin-right: 48px;
    }
    .emoji-picker{
        position: absolute;
        top: 201px;
        left: 138px;
    }


    /*#example a:first-child:hover {*/
    /*    margin-right: 0px;*/
    /*}*/
    .popup-icons-design .popup-ul .popup-li:hover {
        box-shadow: 0 5px 25px 0 rgba(42, 139, 242, 0.1), 0 7px 25px 0 rgba(42, 139, 242, 0.1), 0 10px 15px 0 rgba(42, 139, 242, 0.2);

    }
    .popup-icons-design .popup-ul .popup-li img {
        margin-top: 7px;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }
    /*!* Handle *!*/
    ::-webkit-scrollbar-thumb {
        background: #C4C4C4;
        width: 3px;
        height: 100px;
        border-radius: 15px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
    .smile-icon i {
        font-size: 22px;
        color: #B7BDCB;
    }
    .smile-icon {
        margin-top: 10px;
        position: absolute;
        right: 51px;
        z-index: 11;
        cursor: pointer;
    }
    .typing-message  {
        font-size: 9px;
        color: #999;
    }
    .unread-message {
        font-size: 11px;
    }

    .message-update-reset-icon {
        margin-top: 5px;
    }

    .edit-hover:hover {
        color: #1E0857;
    }

    .delete-hover:hover {
        color: #ff4343;
    }

    .jconfirm-modal-title {
        font-size: 16px !important;
        color: #1e0857;
    }

    .jconfirm-buttons {
        float: none !important;
        text-align: center !important;
    }
    .warp-text-title{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 340px;
        display: inline-block;
    }

    /*Khalid responsive css start*/

    @media (min-width: 1280px) and (max-width: 1366px) {
        .tab-menu-responsive {
            font-size: 11px;
        }
        .audio-image, .video-image {
            width: 74px;
            height: 59px;
        }
        .content-item {
            margin-left: 0px;
        }
        .user-list-name {
            font-size: 11px;
        }
        .chat-header-image {
            margin-top: -10px;
            height: 40px;
            width: 40px;
        }
        .direct-chat-messages{
            height: 582px;
        }
        .name-part-child {
            font-size: 11px;
        }
        .warp-text-title{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 170px;
            display: inline-block;
        }
        .chat .created-date {
            font-size: 10px;
        }
        .member-list-time {
            margin-top: 25px;
        }
        .user-list-name {
            max-width: 100px;
        }
        .name-part {
            width: 140px;
        }
        .created-date {
            font-size: 10px;
        }
        .chat-menu {
            width: 40.6px;
            height: 40.6px;
            padding: 9.1px 13.1px 13.1px 13.1px;
        }
        .chat-file-icon {
            margin-left: 0px;
        }
        .chat-menu-icon {
            margin-left: 5px;
        }
        .emoji-picker {
            position: absolute;
            top: 201px;
            left: -2px;
        }
        .content-title-text{
            font-size: 12px;
            font-weight: bolder;
        }

    }

    @media (min-width: 1367px) and (max-width: 1440px) {
        .warp-text-title{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 170px;
            display: inline-block;
        }
        .chat .created-date {
            font-size: 10px;
        }
        .tab-menu-responsive {
            font-size: 11px;
        }
        .audio-image, .video-image {
            width: 74px;
            height: 59px;
        }
        .content-item {
            margin-left: 0px;
        }
        .user-list-name {
            font-size: 11px;
        }
        .member-list-time {
            margin-top: 25px;
        }
        .created-date {
            font-size: 10px;
        }
        .chat-header-image {
            margin-top: -10px;
            height: 40px;
            width: 40px;
        }
        .direct-chat-messages{
            height: 581px;
        }
        .name-part-child {
            font-size: 11px;
        }
        .name-part {
            width: 160px;
        }
        .chat .created-date {
            font-size: 10px;
        }
        .chat-menu {
            width: 40.6px;
            height: 40.6px;
            padding: 9.1px 13.1px 13.1px 13.1px;
        }
        .chat-file-icon {
            margin-left: 0px;
        }
        .chat-menu-icon {
            margin-left: 5px;
        }
        .emoji-picker {
            position: absolute;
            top: 201px;
            left: -2px;
        }
        .content-title-text{
            font-size: 12px;
            font-weight: bolder;
        }
    }

    @media (min-width: 1024px) and (max-width: 1280px) {
        .tab-menu-responsive{
            font-size: 9px;
        }
        .warp-text-title {
            max-width: 125px;
        }
        .name-part-child {

            font-size: 11px;
        }
        .member-list-time{
            margin-top: 25px;
        }


     .direct-chat-text {
        font-size: 11px;
     }
        .chat .created-date {
            font-size: 8px;
        }
        .content-div ul li {
            font-size: 10px;
        }
        .chat-header-image {
            width: 40px;
            height: 40px;
        }
        .audio-image, .video-image {
            width: 75px;
            height: 60px;
        }

        .content-title-text{
            font-size: 12px;
            font-weight: bolder;
        }
        .emoji-picker {
            position: absolute;
            top: 190px;
            left: -19px;
            width: 300px !important;
        }
        .mesg-heading-text{
            font-size: 13px;
        }

    }
    /*===chat css===*/

    /*Khalid responsive css end*/


</style>
<style>
    .chat .online {
        color: #32CD32;
        position: absolute;
        z-index: 10;
        top: -3px;
        font-size: 10px;
        left: 18px;
    }



    .chat-message-search-loader { /* Loader Div Class */
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
</style>
<!--chat multibox style-->

