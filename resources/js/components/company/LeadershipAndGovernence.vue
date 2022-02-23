<template>
    <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-lg-8 company-profile-tab mx-auto">
                <div class="panel-body companyManageForm">
                    <h3 class="text-center pt-2">Board Members</h3>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="totalBoardMembers" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Number Of Board Members</label>
                            <v-select :options="boardMemberOptions"
                                :clearable="false"
                                class="w100 lag-dropdown"
                                placeholder="Select a number"
                                v-model="boardMemberSelected"
                                @input="boardMemberOptionSelected"
                                :reduce="boardMemberOption => boardMemberOption.id"
                            ></v-select>
                        </div>
                    </div>

                    <template>
                        <div class="clearfix" v-for="(input, index) in form.boardMembers">
                            <div class="form-group row">
                                <div class="col-lg-4">
                                    <label>
                                        <i v-if="input.firstName" class="fas fa-check-circle"></i>
                                        <i v-else class="fas fa-times-circle"></i>
                                        Name
                                    </label>
                                    <input type="text" class="form-control" placeholder="Type in first name"
                                           autocomplete="off"
                                           v-model="input.firstName"
                                    />
                                </div>
                                <div class="col-lg-4">
                                    <label>&nbsp</label>
                                    <input type="text" class="form-control" placeholder="Type in last name"
                                           autocomplete="off"
                                           v-model="input.lastName"
                                    />
                                </div>
                                <div class="col-lg-4">
                                    <label>
                                        <i v-if="input.committee" class="fas fa-check-circle"></i>
                                        <i v-else class="fas fa-times-circle"></i>
                                        Committee
                                    </label>
                                    <v-select
                                        label="name"
                                        :options="committeeOptions"
                                        :clearable="false"
                                        class="w100 role-dropdown"
                                        placeholder="Select a type of committee"
                                        v-model="input.committee"
                                        @input="committeeSelected($event, index)"
                                        :reduce="option => option.id"
                                    ></v-select>
                                </div>
                            </div>

                            <template>
                                <div class="clearfix d-none" :id="'otherCommittee-' + index">
                                    <div class="form-group row">
                                        <div class="col-lg-8"></div>
                                        <div class="col-lg-4">
                                            <label>
                                                <i v-if="input.otherCommittee" class="fas fa-check-circle"></i>
                                                <i v-else class="fas fa-times-circle"></i>
                                                Other Committee
                                            </label>
                                            <input type="text" class="form-control" placeholder="Other committee name"
                                                autocomplete="off"
                                                v-model="input.otherCommittee"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </template>

                            <div class="float-right add-multiple cursor-pointer p-0"
                                 @click="removeBoardMember(index)">
                                - Remove Board Member
                            </div>
                        </div>
                    </template>

                    <h3 class="text-center pt-2">Executives</h3>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="totalExecutives" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Number Of Executives</label>
                            <v-select :options="executiveOptions"
                                :clearable="false"
                                class="w100 lag-dropdown"
                                placeholder="Select a number"
                                v-model="executiveSelected"
                                @input="executiveOptionSelected"
                                :reduce="executiveOption => executiveOption.id"
                            ></v-select>
                        </div>
                    </div>

                    <template>
                        <div class="clearfix" v-for="(input, index) in form.executives">
                            <div class="form-group row">
                                <div class="col-lg-4">
                                    <label>
                                        <i v-if="input.firstName" class="fas fa-check-circle"></i>
                                        <i v-else class="fas fa-times-circle"></i>
                                        Name
                                    </label>
                                    <input type="text" class="form-control" placeholder="Type in first name"
                                           autocomplete="off"
                                           v-model="input.firstName"
                                    />
                                </div>
                                <div class="col-lg-4">
                                    <label>&nbsp</label>
                                    <input type="text" class="form-control" placeholder="Type in last name"
                                           autocomplete="off"
                                           v-model="input.lastName"
                                    />
                                </div>
                                <div class="col-lg-4">
                                    <label>
                                        <i v-if="input.executiveRole" class="fas fa-check-circle"></i>
                                        <i v-else class="fas fa-times-circle"></i>
                                        Role
                                    </label>
                                    <v-select
                                        label="name"
                                        :options="executiveRoleOptions"
                                        :clearable="false"
                                        class="w100 role-dropdown"
                                        placeholder="Select a type of role"
                                        v-model="input.executiveRole"
                                        :reduce="option => option.id"
                                    ></v-select>
                                </div>
                            </div>

                            <div class="float-right add-multiple cursor-pointer p-0"
                                 @click="removeExecutive(index)">
                                - Remove Executive
                            </div>
                        </div>
                    </template>
                    
                    <div class="text-center mb-4">
                        <button @click.prevent="storeLeadershipAndGovernanceData()"
                                class="btn btn-primary save-changes">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>

        </div>
        <loader :is-visible="isLoading"></loader>
    </div>
</template>
<script>
    import Questionnnaire from "../../apis/Questionnnaire";
    import vSelect from 'vue-select';
    import loader from '../Loader';
    import Common from "../../apis/Common";

    export default {
        data() {
            return {
                isLoading: false,
                committeeOptions: [],
                executiveRoleOptions: [],
                totalBoardMembers: 0,
                boardMemberOptions : [],
                boardMemberSelected: '',
                totalExecutives: 0,
                executiveOptions : [],
                executiveSelected: '',
                form:
                {
                    boardMembers: [],
                    executives: []
                },
                errors: [],
            };
        },
        validations: {},
        methods: {
            getStepwiseData() {
                Questionnnaire.getCompanyQuestionnaireData(9)
                    .then((response) => {
                        this.isLoading = false
                        let leadershipAndGovernanceData = response.data.data;
                        this.form.boardMembers = (!! leadershipAndGovernanceData) ? leadershipAndGovernanceData.boardMembers : [];
                        this.totalBoardMembers = leadershipAndGovernanceData.totalBoardMembers;
                        this.form.executives = (!! leadershipAndGovernanceData) ? leadershipAndGovernanceData.executives : [];
                        this.totalExecutives = leadershipAndGovernanceData.totalExecutives;

                        this.prepareForm();
                    })
                    .catch(error => {
                        this.isLoading = false
                        if (error.response.status === 401) {
                            this.$emit('logout')
                        }
                        else {
                            console.log(error)
                        }
                    });
            },
            storeLeadershipAndGovernanceData() {
                let data = {};
                this.errors = [];
                data._token = document.querySelector('meta[name="csrf-token"]').content;
                data.boardMembers = JSON.stringify(this.form.boardMembers);
                data.executives = JSON.stringify(this.form.executives);
                this.isLoading = true
                this.submitButtonDisabled = true;

                Questionnnaire.updateCompanyQuestionnaireData(data, 9)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        toastr.success(response.data.success.message)
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
            goBackToPageTopAndNextFieldToEnter: function () {
                $(document).ready(function () {
                    $(this).scrollTop(0);
                    $('input, select, textarea, v-select').on('keydown', function (e) {
                        if (e.keyCode == 13) {
                            var focusable = $('input,select, textarea, v-select').filter(':visible');
                            focusable.eq(focusable.index(this) + 1).focus();
                            return false;
                        }
                    });
                });
            },
            loadComponentData: function () {
                this.isLoading = true
                this.goBackToPageTopAndNextFieldToEnter();
                this.getStepwiseData();
            },
            prepareForm() {
                this.form.boardMembers.forEach((boardMember, index) => {
                    this.committeeSelected(boardMember.committee, index);
                });
                this.createBoardMemberOptions();
                this.createExecutiveOptions();
                if(this.totalBoardMembers > 0) {
                    this.boardMemberSelected = this.totalBoardMembers;
                }
                if(this.totalExecutives > 0) {
                    this.executiveSelected = this.totalExecutives;
                }
                this.getLeadershipAndGovernanceRoles('board_committee');
                this.getLeadershipAndGovernanceRoles('executive_role');
            },
            getLeadershipAndGovernanceRoles(roleType) {
                Questionnnaire.getLeadershipAndGovernanceRoles(roleType)
                    .then((response) => {
                        this.isLoading = false;
                        if(roleType == 'board_committee') {
                            this.committeeOptions = response.data.data;
                        } else {
                            this.executiveRoleOptions = response.data.data;
                        }
                    })
                    .catch(error => {
                        this.isLoading = false
                        if (error.response.status === 401) {
                            this.$emit('logout')
                        }
                        else {
                            console.log(error)
                        }
                    });
            },
            createBoardMemberOptions(totalOptions = this.totalBoardMembers) {
                this.boardMemberOptions = [];
                if(totalOptions == 0) {
                    totalOptions++;
                }
                for(let i = totalOptions; i <= 20; i++) {
                    this.boardMemberOptions.push({
                        label: i,
                        id: i
                    });
                }
                return this.boardMemberOptions;
            },
            boardMemberOptionSelected(index) {
                this.createBoardMemberOptions(index);
                let newInputs = index - this.totalBoardMembers;
                for(let i = 1; i <= newInputs; i++) {
                    this.addBoardMember();
                    this.totalBoardMembers++;
                }
            },
            addBoardMember() {
                this.form.boardMembers.push({
                    firstName: '',
                    lastName: '',
                    committee: '',
                    otherCommittee: ''
                })
            },
            removeBoardMember(index) {
                this.form.boardMembers.splice(index, 1);
                this.form.boardMembers.forEach((boardMember, index) => {
                    this.committeeSelected(boardMember.committee, index);
                });
                this.totalBoardMembers--;
                this.createBoardMemberOptions();
                this.boardMemberSelected = this.totalBoardMembers;
            },
            committeeSelected(value, index) {
                if(value == 10) {
                    $('#otherCommittee-' + index).removeClass('d-none');
                } else {
                    $('#otherCommittee-' + index).addClass('d-none');
                }
            },
            createExecutiveOptions(totalOptions = this.totalExecutives) {
                this.executiveOptions = [];
                if(totalOptions == 0) {
                    totalOptions++;
                }
                for(let i = totalOptions; i <= 20; i++) {
                    this.executiveOptions.push({
                        label: i,
                        id: i
                    });
                }
                return this.executiveOptions;
            },
            executiveOptionSelected(index) {
                this.createExecutiveOptions(index);
                let newInputs = index - this.totalExecutives;
                for(let i = 1; i <= newInputs; i++) {
                    this.addExecutive();
                    this.totalExecutives++;
                }
            },
            addExecutive() {
                this.form.executives.push({
                    firstName: '',
                    lastName: '',
                    executiveRole: ''
                })
            },
            removeExecutive(index) {
                this.form.executives.splice(index, 1);
                this.totalExecutives--;
                this.createExecutiveOptions();
                this.executiveSelected = this.totalExecutives;
            },
        },
        created: function () {
            this.getStepwiseData();
        },
        components: {
            loader,
            vSelect
        }
    };
</script>

<style>
    
    .role-dropdown ul {
        max-height: 100px;
    }

    .lag-dropdown ul {
        max-height: 200px;
    }

</style>
