<template>
    <section class="dashboard pt-0">
        <div class='row'>
            <div class='col-md-12 grid-margin'>
                    <h4 class="pb-2 text-theme-dark-blue">Video Classification</h4>
                <div class='card'>
                    <div class='card-body'>
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <b-alert
                                :show="dismissCountDown"
                                dismissible
                                :variant="message_body_class"
                                @dismissed="dismissCountDown=0"
                                @dismiss-count-down="countDownChanged"
                            >
                                {{classificationMessage}}
                            </b-alert>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mx-auto">
                            <AudioVideoHierarchy @nodeData="TaxonomyData"
                                                 @updateViewKey="updateViewKey"
                                                 v-bind:savedCategories="savedCategories"
                                                 :taxonomyActionType="taxonomyActionType"
                                                 :taxonomyType="taxonomyType"
                                                 :mediaUuid='mediaUuid'
                                                 ref="taxonomyChild"></AudioVideoHierarchy>

                        </div>
                    </div>

                    <!--<div class="row mt-3">
                        <div class="col-md-5 offset-4">
                            <button @click="editCancel" class="btn btn-back-next">Cancel</button>
                            <button @click.prevent="updateVideoTaxonomy" class="btn btn-back-next float-right">
                                Update
                            </button>
                        </div>
                    </div>-->
                </div>
            </div>
        </div>
        <loader :is-visible="isLoading"></loader>
    </div>
    </section>
</template>

<script>
    import AudioVideoHierarchy from '../components/AudioVideoHierarchy'
    import loader from '../components/Loader'
    import Questionnnaire from "../apis/Questionnnaire";

    export default {
        data() {
            return {
                savedCategories: "",
                isLoading: false,

                classificationMessage: "",
                message_body_class:"success",
                dismissSecs: 5,
                dismissCountDown: 0,

                errors: [],
                form: {
                    industry: "",
                    sector: "",
                    subSector: "",
                    group: "",
                    subGroup: "",
                    echelon: "",
                    subEchelon: "",
                    tier: "",
                    subTier: "",
                    layer: "",
                    subLayer: "",
                    deck: "",
                    subDeck: "",
                    floor: "",
                    subFloor: "",
                    basement: "",
                    subBasement: "",
                    mine: "",
                    subMine: "",
                },
                taxonomyActionType: "edit",
                taxonomyType: "video",
                videoTaxoFormData: {
                    node_type: "",
                    node_id: "",
                    media_file_id: "",
                    industry_id: "",
                },
                mediaUuid: this.$route.params.id,
            };
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },

            showAddAnotherClassificationMessage(response_message, is_alert_show,msg_class_name) {
                if (is_alert_show) {
                    //this.showDismissibleAlert = true;
                    this.dismissCountDown = this.dismissSecs
                    this.message_body_class = msg_class_name;
                    this.classificationMessage = response_message;
                }
            },
            updateVideoTaxonomy() {
                this.$refs.taxonomyChild.$v.form.industry.$touch();
                if (this.$refs.taxonomyChild.$v.form.industry.$invalid) {
                    $('#audioVideoIndustry .vs__search').focus()
                    return false;
                }

                /*Taxonomy Data submit*/
                this.videoTaxoFormData.node_type = this.$refs.taxonomyChild.categorizationLevel;
                this.videoTaxoFormData.node_id = this.$refs.taxonomyChild.categorizationNodeId;
                this.videoTaxoFormData.industry_id = this.$refs.taxonomyChild.form.industry.id;
                this.videoTaxoFormData.media_file_id = this.$route.params.id;
                /*End*/
                Questionnnaire.saveStep1VideoData(this.videoTaxoFormData, this.$route.params.fileId)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        toastr.success(response.data.success.message)
                        this.$router.push({name: "Content", 'hash': '#video'});
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        if (error.response.status === 422) {
                            toastr.error(error.response.data.error.message)
                        } else if (error.response.status == 401) {
                            this.$emit('logout')
                        } else {
                            toastr.error(error)
                        }
                    });
            },
            TaxonomyData: function (value) {
                if (value != undefined || value.length != 0) {
                    this.form.industry = value[0];
                    this.form.sector = value[1];
                    this.form.subSector = value[2];
                    this.form.group = value[3];
                    this.form.subGroup = value[4] ?? '';
                    this.form.echelon = value[5] ?? '';
                    this.form.subEchelon = value[6] ?? '';
                    this.form.tier = value[7] ?? '';
                    this.form.subTier = value[8] ?? '';
                    this.form.layer = value[9] ?? '';
                    this.form.subLayer = value[10] ?? '';
                    this.form.deck = value[11] ?? '';
                    this.form.subDeck = value[12] ?? '';
                    this.form.floor = value[13] ?? '';
                    this.form.subFloor = value[14] ?? '';
                    this.form.basement = value[15] ?? '';
                    this.form.subBasement = value[16] ?? '';
                    this.form.mine = value[17] ?? '';
                    this.form.subMine = value[18] ?? '';
                }
                //console.log(value);

            },
            editCancel() {
                this.$router.push({name: 'Content', 'hash': '#video'});
            },
            goBackToPageTopAndNextFieldToEnter: function () {
                $(document).ready(function () {
                    $('input, select, textarea').on('keydown', function(e) {
                        if (e.keyCode==13) {
                            var focusable = $('input, select, textarea').filter(':visible');
                            focusable.eq(focusable.index(this)+1).focus();
                            return false;
                        }
                    });
                });
                this.isLoading = false;
            },
            updateViewKey() {
                this.$emit("updateViewKey");
            },
        },
        created: function () {
            this.isLoading = true
            this.goBackToPageTopAndNextFieldToEnter()
        },
        components: {
            loader,
            AudioVideoHierarchy
        }
    };
</script>
