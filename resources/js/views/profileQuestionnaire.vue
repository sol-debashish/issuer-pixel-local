<template>
    <section class="home">
        <Navigation/>
        <div class="container-fluid px-0">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
                <template v-if="isLoggedIn">
                    <sidebar></sidebar>
                </template>
                <div class="col-9 container mt-2" data-aos="fade-up">
                    <img src="/images/issuerpixel_page_logo.png" alt="" class="img-fluid mx-auto d-block">
                    <h2 class="text-center" v-if="step == 7">Upload Your First Video or Audio File</h2>
                    <h2 class="text-center" v-else>Company Questionnaire</h2>
                    <h5 class="font-weight-bold text-purple-light text-center" v-if="step == 6">First Lets Categorize Your Company’s Taxonomy</h5>
                    <!-- progressbar -->
                    <ul id="progressbar" v-if="step < 6">
                        <li class="active" id="progressStep1"><strong>General</strong></li>
                        <li id="progressStep2"><strong>Company Contact</strong></li>
                        <li id="progressStep3"><strong>Company Structure</strong></li>
                        <li id="progressStep4"><strong>Valuation & IP</strong></li>
                        <li id="progressStep5"><strong>Social Presence</strong></li>
                    </ul>
                    <!--                    <span class="float-right pr-5" v-if="step < 6">Step {{step}} of 5</span>-->
                    <div class="row register-container">
                        <!--                        <div class="col-md-5 mx-auto my-5">-->
                        <div class="my-5" v-bind:class="(step == 6)?'col-md-10':'col-md-5 mx-auto'">
                            <form class="form-horizontal">
                                <!--Step-1 Start-->
                                <fieldset v-if="step == 1">
                                    <span>Step 1 of 5</span>
                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Company Name<span
                                                class="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="name"
                                                ref="company_name"
                                                :class="{ 'is-invalid': $v.form.company_name.$error }"
                                                v-model="form.company_name"
                                                placeholder="Ex: Google"
                                                autocomplete="new-company">
                                            <div v-if="!$v.form.company_name.required" class="invalid-feedback">
                                                Company name is
                                                required.
                                            </div>

                                            <span class="invalid-feedback" role="alert" v-if="errors.company_name">
                                        <strong>{{ errors.company_name[0] }}</strong>
                                    </span>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Headquarters Geographic
                                                Location<span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" placeholder="Address"
                                                   autocomplete="new-address"
                                                   ref="hq_address"
                                                   :class="{ 'is-invalid': $v.form.hq_address.$error }"
                                                   v-model="form.hq_address">
                                            <div v-if="!$v.form.hq_address.required" class="invalid-feedback">
                                                Address is
                                                required.
                                            </div>
                                            <br/>
                                            <input type="text" class="form-control" placeholder="Address 2"
                                                   autocomplete="new-address2" v-model="form.hq_address2">
                                            <br/>
                                            <div class="row">
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="City"
                                                           autocomplete="new-city"
                                                           ref="hq_city"
                                                           :class="{ 'is-invalid': $v.form.hq_city.$error }"
                                                           v-model="form.hq_city">
                                                    <div v-if="!$v.form.hq_city.required" class="invalid-feedback">
                                                        City is
                                                        required.
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Zip Code"
                                                           autocomplete="new-zip"
                                                           ref="hq_zip"
                                                           :class="{ 'is-invalid': $v.form.hq_zip.$error }"
                                                           v-model="form.hq_zip">
                                                    <div v-if="!$v.form.hq_zip.required" class="invalid-feedback">
                                                        Zip Code is
                                                        required.
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <v-select label="name" :options="StateLists" v-model="form.hq_state"
                                                      :filterBy="filterMatchFirstCharacter"
                                                      :clearable="false"
                                                      autocomplete="new-state"
                                                      ref="hq_state"
                                                      :class="{ 'is-invalid': $v.form.hq_state.$error }"
                                                      placeholder="Select State"
                                                      :reduce="option => option.id"
                                            ></v-select>
                                            <div v-if="!$v.form.hq_state.required" class="invalid-feedback">
                                                State is
                                                required.
                                            </div>
                                            <!--<v-select label="name" :options="countries" :clearable="false"
                                                      placeholder="Select Country" @input="getStates"
                                                      :class="{ 'is-invalid': $v.form.hq_country.$error }"
                                                      v-model="form.hq_country"
                                                      :reduce="option => option.id"
                                            ></v-select>
                                            <div v-if="!$v.form.hq_country.required" class="invalid-feedback">
                                                Country is
                                                required.
                                            </div>-->
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Number of
                                                Employees<span class="text-danger">*</span></label>
                                            <v-select label="name" :options="employeeNumberList" :clearable="false"
                                                      placeholder="Select Below"
                                                      ref="employee_number"
                                                      :class="{ 'is-invalid': $v.form.employee_number.$error }"
                                                      v-model="form.employee_number"
                                                      :reduce="option => option.id"
                                            ></v-select>
                                            <div v-if="!$v.form.employee_number.required" class="invalid-feedback">
                                                Number of
                                                Employees is required.
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Are you an ESG Business -
                                                (Environmental, Social And Governance Values)<span
                                                    class="text-danger">*</span></label>
                                            <v-select :options="[{label: 'No', id: 0},{label: 'Yes', id: 1}]"
                                                      :clearable="false"
                                                      ref="esg_business"
                                                      placeholder="Select Yes or No"
                                                      :class="{ 'is-invalid': $v.form.esg_business.$error }"
                                                      v-model="form.esg_business"
                                                      :reduce="option => option.id"
                                            ></v-select>
                                            <div v-if="!$v.form.esg_business.required" class="invalid-feedback">ESG
                                                Business is
                                                required.
                                            </div>
                                        </div>
                                        <button @click.prevent="step2()" class="btn btn-back-next float-right">
                                            Next
                                        </button>
                                    </div>
                                </fieldset>
                                <!--Step-2 Start-->
                                <fieldset v-if="step == 2">
                                    <span>Step 2 of 5</span>
                                    <div class="panel-body">
                                        <div class="form-group mb-5">
                                            <label class="control-label font-weight-bold">Please List the Company's
                                                Founders</label>
                                            <template v-for="(input, index) in form.company_founders">
                                                <input type="text" class="form-control" placeholder="Ex: John Smith"
                                                       autocomplete="new-founders" v-model="input.name">
                                                <div class="float-right mt-1 add-multiple cursor-pointer"
                                                     @click="addMoreFounder"
                                                     v-if="0 == index">+ Add Founder
                                                </div>
                                                <div class="float-right mt-1 add-multiple cursor-pointer"
                                                     @click="removeFounder(index)" v-else>
                                                    - Remove Founder
                                                </div>
                                            </template>

                                        </div>

                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Please List the
                                                CEO<span class="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Ex: John Smith"
                                                autocomplete="off"
                                                ref="ceo_list"
                                                :class="{ 'is-invalid': $v.form.ceo_list.$error }"
                                                v-model="form.ceo_list"
                                            >
                                            <div v-if="!$v.form.ceo_list.required" class="invalid-feedback">CEO is
                                                required.
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Please List the CFO<span
                                                class="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Ex: John Smith"
                                                autocomplete="off"
                                                ref="cfo_list"
                                                :class="{ 'is-invalid': $v.form.cfo_list.$error }"
                                                v-model="form.cfo_list"
                                            >
                                            <div v-if="!$v.form.cfo_list.required" class="invalid-feedback">CFO is
                                                required.
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold label-with-under-p">Email
                                                Address of Sales
                                                Department<span class="text-danger">*</span></label>
                                            <p class="p-under-input-label">Please put the email address for the sales or
                                                business development department</p>
                                            <input
                                                type="email"
                                                class="form-control"
                                                autocomplete="new-sales-email"
                                                ref="sales_dept_email"
                                                :class="{ 'is-invalid': $v.form.sales_dept_email.$error }"
                                                v-model="form.sales_dept_email"
                                                placeholder="Ex: John@company.com">
                                            <div v-if="!$v.form.sales_dept_email.required" class="invalid-feedback">
                                                Sales
                                                Department
                                                Email Address is required.
                                            </div>
                                            <div v-if="!$v.form.sales_dept_email.email" class="invalid-feedback">The
                                                email is
                                                not
                                                valid.
                                            </div>
                                            <span class="invalid-feedback" role="alert"
                                                  v-if="errors.sales_dept_email">
                                                <strong>{{ errors.sales_dept_email[0] }}</strong>
                                            </span>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Email Address of Company’s
                                                Investor
                                                Relations Contact<span class="text-danger">*</span></label>
                                            <input type="email"
                                                   class="form-control"
                                                   autocomplete="new-relation-email"
                                                   ref="investor_relation_contact_email"
                                                   :class="{ 'is-invalid': $v.form.investor_relation_contact_email.$error }"
                                                   v-model="form.investor_relation_contact_email"
                                                   placeholder="Ex: John@company.com">
                                            <div v-if="!$v.form.investor_relation_contact_email.required"
                                                 class="invalid-feedback">
                                                Investor relation contact email is required.
                                            </div>
                                            <div v-if="!$v.form.investor_relation_contact_email.email"
                                                 class="invalid-feedback">
                                                The
                                                email is not valid.
                                            </div>
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="control-label font-weight-bold">Please List the Strategic
                                                Partnerships</label>
                                            <template v-for="(input, index) in form.strategic_partnership">
                                                <input type="text" class="form-control" placeholder="Ex: Coca Cola"
                                                       autocomplete="off" v-model="input.name">
                                                <div class="float-right mt-1 add-multiple cursor-pointer"
                                                     @click="addMorePartnerships"
                                                     v-if="0 == index">+ Add Partner
                                                </div>
                                                <div class="float-right mt-1 add-multiple cursor-pointer"
                                                     @click="removePartnerships(index)"
                                                     v-else>- Remove Partner
                                                </div>
                                            </template>
                                        </div>
                                        <div class="form-group mb-5">
                                            <label class="control-label font-weight-bold">Please List Key
                                                Suppliers</label>
                                            <template v-for="(input, index) in form.vendors">
                                                <input type="text" class="form-control" placeholder="Ex: Cisco"
                                                       autocomplete="off" v-model="input.name">
                                                <div class="float-right mt-1 add-multiple cursor-pointer"
                                                     @click="addMoreVendors"
                                                     v-if="0 == index">+ Add Vendor
                                                </div>
                                                <div class="float-right mt-1 add-multiple cursor-pointer"
                                                     @click="removeVendors(index)" v-else>
                                                    - Remove Vendor
                                                </div>
                                            </template>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Who Are Your Top
                                                Competitors?</label>
                                            <v-select
                                                no-drop
                                                taggable multiple
                                                :select-on-key-codes="[188, 13]"
                                                placeholder="Ex: Google, WalMart, Amazon"
                                                v-model="form.top_competitors"
                                            />
                                        </div>

                                        <button @click.prevent="prev()" class="btn btn-back-next">Back</button>
                                        <button @click.prevent="step3()" class="btn btn-back-next float-right">
                                            Next
                                        </button>
                                    </div>
                                </fieldset>
                                <!--Step-3 Start-->
                                <fieldset v-if="step == 3">
                                    <span>Step 3 of 5</span>
                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Entity Type -
                                                Organizational
                                                Structure<span class="text-danger">*</span></label>
                                            <v-select
                                                label="name"
                                                name="entity_type"
                                                :options="entityTypes"
                                                :clearable="false"
                                                ref="entity_type"
                                                :class="{ 'is-invalid': $v.form.entity_type.$error }"
                                                v-model="form.entity_type"
                                                placeholder="Select Below">
                                            </v-select>
                                            <div v-if="!$v.form.entity_type.required" class="invalid-feedback">
                                                Entity type is
                                                required.
                                            </div>
                                            <span class="invalid-feedback" role="alert" v-if="errors.entity_type">
                                        <strong>{{ errors.entity_type[0] }}</strong>
                                    </span>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Public or Private Company
                                                Type<span class="text-danger">*</span></label>
                                            <v-select label="name" :options="privatePublicCompanyTypes"
                                                      v-model="form.trading_and_reporting_status" :clearable="false"
                                                      ref="trading_and_reporting_status"
                                                      :class="{ 'is-invalid': $v.form.trading_and_reporting_status.$error }"
                                                      @input="getTradingAndReportingStatusList"
                                                      placeholder="Select Below"
                                            ></v-select>
                                            <div v-if="!$v.form.trading_and_reporting_status.required"
                                                 class="invalid-feedback">
                                                Company Type is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="(form.trading_and_reporting_status !=null)?form.trading_and_reporting_status.tag == 'public' || form.trading_and_reporting_status.tag == 'private':''">
                                            <label
                                                class="control-label font-weight-bold">{{reporting_status_label}}</label>
                                            <v-select label="name" :options="tradingAndReportingStatusList"
                                                      v-model="form.public_private_reporting_status"
                                                      :clearable="false"
                                                      placeholder="Select Below"
                                            ></v-select>
                                        </div>
                                        <div class="form-group"
                                             v-if="(form.trading_and_reporting_status !=null)?form.trading_and_reporting_status.tag == 'public':'' && (form.public_private_reporting_status.id == 1 || form.public_private_reporting_status.id == 2)">
                                            <label class="control-label font-weight-bold">Type of Publicly Traded
                                                Company (USA
                                                or International)</label>
                                            <v-select label="name" :options="publiclyTradedCompanyTypeList"
                                                      v-model="form.publicly_traded_company" :clearable="false"
                                                      placeholder="Select Below"
                                            ></v-select>

                                        </div>
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Number of
                                                Shareholders<span class="text-danger">*</span></label>
                                            <v-select label="name" :options="shareholderNumberList"
                                                      :clearable="false"
                                                      placeholder="Select Below"
                                                      ref="shareholder_number"
                                                      :class="{ 'is-invalid': $v.form.shareholder_number.$error }"
                                                      v-model="form.shareholder_number"
                                                      :reduce="option => option.id"
                                            ></v-select>
                                            <div v-if="!$v.form.shareholder_number.required"
                                                 class="invalid-feedback">Number of
                                                Shareholders is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="(form.trading_and_reporting_status !=null)?form.trading_and_reporting_status.tag == 'public':'' && (form.public_private_reporting_status.id == 1 || form.public_private_reporting_status.id == 2)">
                                            <label class="control-label font-weight-bold">Ticker Symbol<span
                                                class="text-danger">*</span></label>
                                            <input type="text" class="form-control" placeholder="Ex: GOOG"
                                                   autocomplete="off"
                                                   ref="ticker_symbol"
                                                   :class="{ 'is-invalid': $v.form.ticker_symbol.$error }"
                                                   v-model="form.ticker_symbol">
                                            <div v-if="!$v.form.ticker_symbol.required" class="invalid-feedback">
                                                Ticker Symbol
                                                is
                                                required.
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Base Currency<span
                                                class="text-danger">*</span></label>
                                            <v-select label="name" :options="baseCurrencyList" :clearable="false"
                                                      placeholder="Select Below"
                                                      ref="base_currency"
                                                      :class="{ 'is-invalid': $v.form.base_currency.$error }"
                                                      v-model="form.base_currency"
                                            ></v-select>
                                            <div v-if="!$v.form.base_currency.required" class="invalid-feedback">
                                                Base Currency
                                                is
                                                required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="(form.trading_and_reporting_status !=null)?form.trading_and_reporting_status.tag == 'public':'' && (form.public_private_reporting_status.id == 1 || form.public_private_reporting_status.id == 2) && (form.publicly_traded_company.id == 1 || form.publicly_traded_company.id == 2 || form.publicly_traded_company.id == 3)">
                                            <label class="control-label font-weight-bold label-with-under-p">Domestic or
                                                Internation Exchange Traded On </label>
                                            <p class="p-under-input-label">if Dual-Listed Select all that Apply</p>
                                            <v-select label="name" multiple
                                                      v-model="form.exchange_traded_on" :clearable="false"
                                                      hide-selected
                                                      :options="exchangeTradedList.filter(o => form.exchange_traded_on.indexOf(o) < 0)"
                                                      placeholder="Select Options That Apply"></v-select>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Are you a
                                                Conglomerate?<span class="text-danger">*</span></label>
                                            <v-select :options="[{label: 'No', id: 0},{label: 'Yes', id: 1}]"
                                                      :clearable="false"
                                                      placeholder="Select Yes or No"
                                                      ref="conglomerate"
                                                      :class="{ 'is-invalid': $v.form.conglomerate.$error }"
                                                      v-model="form.conglomerate"
                                                      :reduce="option => option.id"
                                            ></v-select>
                                            <div v-if="!$v.form.conglomerate.required" class="invalid-feedback">
                                                Conglomerate is
                                                required.
                                            </div>
                                        </div>

                                        <div class="form-group" v-if="form.conglomerate">
                                            <label class="control-label font-weight-bold">Name of subsidiary</label>
                                            <div v-for="(input, index) in form.subsidiary_name" class="clearfix">
                                                <input type="text" class="form-control" placeholder="Enter name of subsidiary"
                                                       autocomplete="new-founders" v-model="input.name">
                                                <div class="float-right mt-1 add-multiple cursor-pointer"
                                                     @click="addMoreSubsidiary"
                                                     v-if="0 == index">+ Add Subsidiary
                                                </div>
                                                <div class="float-right mt-1 add-multiple cursor-pointer"
                                                     @click="removeSubsidiary(index)" v-else>
                                                    - Remove Subsidiary
                                                </div>
                                            </div>

                                        </div>

                                        <button @click.prevent="prev()" class="btn btn-back-next">Back</button>
                                        <button @click.prevent="step4()" class="btn btn-back-next float-right">
                                            Next
                                        </button>
                                    </div>
                                </fieldset>
                                <!--Step-4 Start-->
                                <fieldset v-if="step == 4">
                                    <span>Step 4 of 5</span>
                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Have you conducted financing
                                                in the last 6 months?<span class="text-danger">*</span></label>
                                            <v-select :options="[{label: 'No', id: 0},{label: 'Yes', id: 1}]"
                                                      :clearable="false"
                                                      placeholder="Select Yes or No"
                                                      :class="{ 'is-invalid': $v.form.conduct_financing.$error }"
                                                      v-model="form.conduct_financing"
                                                      :reduce="conduct => conduct.id"
                                                      ref="conduct_financing"
                                            ></v-select>
                                            <div v-if="!$v.form.conduct_financing.required"
                                                 class="invalid-feedback">
                                                Conducted Financing is required.
                                            </div>
                                        </div>
                                        <div class="form-group" v-if="form.conduct_financing == 1">
                                            <label class="control-label font-weight-bold label-with-under-p">Type of
                                                Financing</label>
                                            <p class="p-under-input-label">Financing Examples include IPO, Angel
                                                Investors, Reg CF</p>
                                            <v-select label="name" multiple
                                                      :clearable="false"
                                                      placeholder="Select the Options that Apply"
                                                      v-model="form.financing_type"
                                                      hide-selected
                                                      :options="financingTypeList.filter(o => form.financing_type.indexOf(o) < 0)"
                                            ></v-select>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">What is your Company's Most
                                                Recent Valuation?<span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" placeholder="Type in a number"
                                                   autocomplete="off"
                                                   ref="company_valuation"
                                                   :class="{ 'is-invalid': $v.form.company_valuation.$error }"
                                                   v-model="form.company_valuation"
                                                   @keypress="stripTheGarbage($event)" @blur="formatDollars()"
                                                   @focus="formatDollarsToNumber()">
                                            <div v-if="$v.form.company_valuation.$error" class="invalid-feedback">
                                                <span v-if="!$v.form.company_valuation.required">Companies Valuation is required</span>
                                                <span v-else-if="!$v.form.company_valuation.patternValid">Companies Valuation must be a whole number value</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Does Company Have Audited
                                                Financials?<span class="text-danger">*</span></label>
                                            <v-select label="labelAu"
                                                      :options="[{labelAu: 'No', audit_id: 0},{labelAu: 'Yes', audit_id: 1}]"
                                                      :clearable="false"
                                                      ref="audited_finance"
                                                      placeholder="Select Yes or No"
                                                      :class="{ 'is-invalid': $v.form.audited_finance.$error }"
                                                      v-model="form.audited_finance"
                                                      :reduce="audit => audit.audit_id"
                                            ></v-select>
                                            <div v-if="!$v.form.audited_finance.required" class="invalid-feedback">
                                                Audited
                                                Financials
                                                is required.
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Does the Company Have Any
                                                Intellectual Property?<span class="text-danger">*</span></label>
                                            <v-select label="name"
                                                      multiple
                                                      :clearable="false"
                                                      ref="intelletual_property"
                                                      placeholder="Select the Options that Apply"
                                                      :class="{ 'is-invalid': $v.form.intelletual_property.$error }"
                                                      v-model="form.intelletual_property"
                                                      @input="checkPatent"
                                                      hide-selected
                                                      :options="intelletualPropertyList.filter(o => form.intelletual_property.indexOf(o) < 0)"
                                            ></v-select>

                                            <div v-if="!$v.form.intelletual_property.required" class="invalid-feedback">
                                                Have
                                                Intellectual Property
                                                is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="form.intelletual_property != '' && patentTypeCondition == 'Patents'">
                                            <label class="control-label font-weight-bold">Which Type of
                                                Patents?</label>
                                            <v-select label="name" multiple
                                                      :clearable="false"
                                                      placeholder="Select the Options that Apply"
                                                      v-model="form.patent_type"
                                                      hide-selected
                                                      :options="patentsTypeList.filter(o => form.patent_type.indexOf(o) < 0)"></v-select>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Type of Research
                                                Coverage<span class="text-danger">*</span></label>
                                            <v-select label="name" multiple
                                                      :clearable="false"
                                                      ref="research_coverage_type"
                                                      placeholder="Select the options that apply"
                                                      :class="{ 'is-invalid': $v.form.research_coverage_type.$error }"
                                                      v-model="form.research_coverage_type"
                                                      @input="checkCommunityResearch"
                                                      hide-selected
                                                      :options="researchCoverageTypeList.filter(o => form.research_coverage_type.indexOf(o) < 0)"
                                            ></v-select>
                                            <div v-if="!$v.form.research_coverage_type.required"
                                                 class="invalid-feedback">
                                                Research Coverage
                                                Type is required.
                                            </div>
                                        </div>
                                        <div class="form-group" v-if="researchTypeCondition == 'Cummunity'">
                                            <label class="control-label font-weight-bold">Shared Community Research
                                                Platforms</label>
                                            <v-select multiple label="name"
                                                      :clearable="false"
                                                      placeholder="Select the options that apply"
                                                      v-model="form.shared_community_research"
                                                      hide-selected
                                                      :options="sharedCommunityResearchPlatformList.filter(o => form.shared_community_research.indexOf(o) < 0)"
                                            ></v-select>
                                        </div>
                                        <button @click.prevent="prev()" class="btn btn-back-next">Back</button>
                                        <button @click.prevent="step5()" class="btn btn-back-next float-right">
                                            Next
                                        </button>
                                    </div>
                                </fieldset>
                                <!--Step-5 Start-->
                                <fieldset v-if="step == 5">
                                    <span>Step 5 of 5</span>
                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Which of the following
                                                categories does your company have a Social Media presence in?<span
                                                    class="text-danger">*</span></label>
                                            <v-select label="name"
                                                      v-model="form.social_media_presence_category"
                                                      hide-selected
                                                      :options="socialMediaPresenceCategoryList.filter(o => form.social_media_presence_category.indexOf(o) < 0)"
                                                      multiple
                                                      :clearable="false"
                                                      ref="social_media_presence_category"
                                                      placeholder="Select all that apply"
                                                      :class="{ 'is-invalid': $v.form.social_media_presence_category.$error }"
                                                      @input="showRelatedSocialField($event, 'listOfSocialPrensenceId', 'manual')"
                                            ></v-select>
                                            <div v-if="!$v.form.social_media_presence_category.required"
                                                 class="invalid-feedback">
                                                Social Media presence is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(1)">
                                            <label class="control-label font-weight-bold">If you have a Presence on
                                                Social Networking sites, please select which ones from below</label>
                                            <v-select label="name"
                                                      multiple
                                                      :clearable="false"
                                                      placeholder="Select all that apply"
                                                      :class="{ 'is-invalid': $v.form.social_networking_sites.$error }"
                                                      @input="showRelatedSocialField($event, 'listOfSocialNetworkId')"
                                                      v-model="form.social_networking_sites"
                                                      hide-selected
                                                      :options="socialNetworkingSitesList.filter(o => form.social_networking_sites.indexOf(o) < 0)"></v-select>
                                            <div v-if="!$v.form.social_networking_sites.required"
                                                 class="invalid-feedback">
                                                Social Networking Sites is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(2)">
                                            <label class="control-label font-weight-bold">If you have a Presence on
                                                Bookmarking sites, please select which ones from below</label>
                                            <v-select label="name"
                                                      multiple
                                                      :clearable="false"
                                                      placeholder="Select all that apply"
                                                      :class="{ 'is-invalid': $v.form.social_bookmarking_sites.$error }"
                                                      @input="showRelatedSocialField($event, 'listOfBookmarkingSiteId')"
                                                      v-model="form.social_bookmarking_sites"
                                                      hide-selected
                                                      :options="socialBookmarkingSitesList.filter(o => form.social_bookmarking_sites.indexOf(o) < 0)"></v-select>
                                            <div v-if="!$v.form.social_bookmarking_sites.required"
                                                 class="invalid-feedback">
                                                Social Bookmarking Sites is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(3)">
                                            <label class="control-label font-weight-bold">If you have a Presence on
                                                Social News sites, please select which ones from below</label>
                                            <v-select label="name"
                                                      multiple
                                                      :clearable="false"
                                                      placeholder="Select all that apply"
                                                      :class="{ 'is-invalid': $v.form.social_news_sites.$error }"
                                                      @input="showRelatedSocialField($event, 'listOfSocialNewsSiteId')"
                                                      v-model="form.social_news_sites"
                                                      hide-selected
                                                      :options="socialNewsSitesList.filter(o => form.social_news_sites.indexOf(o) < 0)"></v-select>
                                            <div v-if="!$v.form.social_news_sites.required"
                                                 class="invalid-feedback">
                                                Social News Sites is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(4)">
                                            <label class="control-label font-weight-bold">If you have a Presence on
                                                Video sharing sites, please select which ones from below</label>
                                            <v-select label="name"
                                                      multiple
                                                      :clearable="false"
                                                      placeholder="Select all that apply"
                                                      :class="{ 'is-invalid': $v.form.video_sharing_sites.$error }"
                                                      @input="showRelatedSocialField($event, 'listOfVideoSharingSiteId')"
                                                      v-model="form.video_sharing_sites"
                                                      hide-selected
                                                      :options="videoSharingSitesList.filter(o => form.video_sharing_sites.indexOf(o) < 0)"></v-select>
                                            <div v-if="!$v.form.video_sharing_sites.required"
                                                 class="invalid-feedback">
                                                Video sharing Sites is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(5)">
                                            <label class="control-label font-weight-bold">If you have a Presence on
                                                Microblogging sites, please select which ones from below</label>
                                            <v-select label="name"
                                                      multiple
                                                      :clearable="false"
                                                      placeholder="Select all that apply"
                                                      :class="{ 'is-invalid': $v.form.microblogging_sites.$error }"
                                                      @input="showRelatedSocialField($event, 'listOfMicrobloggingSiteId')"
                                                      v-model="form.microblogging_sites"
                                                      hide-selected
                                                      :options="microbloggingSitesList.filter(o => form.microblogging_sites.indexOf(o) < 0)"></v-select>
                                            <div v-if="!$v.form.microblogging_sites.required"
                                                 class="invalid-feedback">
                                                Microblogging Sites is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(6)">
                                            <label class="control-label font-weight-bold">If you have a presence on a
                                                Social Media site not listed, please list below</label>
                                            <div v-for="(input, index) in form.non_listed_social_media" class="clearfix">
                                                <input type="text" class="form-control"
                                                       placeholder="Type in Social Media Platform"
                                                       autocomplete="off" v-model="input.name">
                                                <div class="float-right mt-1 add-multiple cursor-pointer"
                                                     @click="addMoreSocialMedia"
                                                     v-if="0 == index">+ Add More
                                                </div>
                                                <div class="float-right mt-1 add-multiple cursor-pointer"
                                                     @click="removeMoreSocialMedia(index)" v-else>
                                                    - Remove
                                                </div>
                                            </div>
                                        </div>

                                        <!--social network related field-->
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(1) && listOfSocialNetworkId.includes(1)">
                                            <label class="control-label font-weight-bold">Facebook Page</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.facebook_page.$error }"
                                                v-model="form.facebook_page"
                                            >
                                            <div v-if="!$v.form.facebook_page.required" class="invalid-feedback">
                                                Facebook Page is
                                                required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(1) && listOfSocialNetworkId.includes(2)">
                                            <label class="control-label font-weight-bold">Instagram</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.instragram.$error }"
                                                v-model="form.instragram"
                                            >
                                            <div v-if="!$v.form.instragram.required" class="invalid-feedback">
                                                Instagram Page is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(1) && listOfSocialNetworkId.includes(3)">
                                            <label class="control-label font-weight-bold">Snapchat</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.snapchat.$error }"
                                                v-model="form.snapchat"
                                            >
                                            <div v-if="!$v.form.snapchat.required" class="invalid-feedback">
                                                Snapchat Page is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(1) && listOfSocialNetworkId.includes(4)">
                                            <label class="control-label font-weight-bold">TikTok</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.tiktok.$error }"
                                                v-model="form.tiktok"
                                            >
                                            <div v-if="!$v.form.tiktok.required" class="invalid-feedback">
                                                TikTok Page is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(1) && listOfSocialNetworkId.includes(5)">
                                            <label class="control-label font-weight-bold">LinkedIn</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.linkedin_page.$error }"
                                                v-model="form.linkedin_page"
                                            >
                                            <div v-if="!$v.form.linkedin_page.required" class="invalid-feedback">
                                                LinkedIn is
                                                required.
                                            </div>
                                        </div>
                                        <!--end social network related field-->

                                        <!--Bookmarking sites related field-->
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(2) && listOfBookmarkingSiteId.includes(1)">
                                            <label class="control-label font-weight-bold">Pinterest</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.pinterest.$error }"
                                                v-model="form.pinterest"
                                            >
                                            <div v-if="!$v.form.pinterest.required" class="invalid-feedback">
                                                Pinterest is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(2) && listOfBookmarkingSiteId.includes(2)">
                                            <label class="control-label font-weight-bold">Reddit</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.reddit.$error }"
                                                v-model="form.reddit"
                                            >
                                            <div v-if="!$v.form.reddit.required" class="invalid-feedback">
                                                Reddit is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(2) && listOfBookmarkingSiteId.includes(3)">
                                            <label class="control-label font-weight-bold">StumbleUpon</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.stumble_upon.$error }"
                                                v-model="form.stumble_upon"
                                            >
                                            <div v-if="!$v.form.pinterest.required" class="invalid-feedback">
                                                StumbleUpon is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(2) && listOfBookmarkingSiteId.includes(4)">
                                            <label class="control-label font-weight-bold">Dribble</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.dribble.$error }"
                                                v-model="form.dribble"
                                            >
                                            <div v-if="!$v.form.dribble.required" class="invalid-feedback">
                                                Dribble is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(2) && listOfBookmarkingSiteId.includes(5)">
                                            <label class="control-label font-weight-bold">Mix</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.mix.$error }"
                                                v-model="form.mix"
                                            >
                                            <div v-if="!$v.form.mix.required" class="invalid-feedback">
                                                Mix is required.
                                            </div>
                                        </div>
                                        <!--End bookmarking sites related field-->

                                        <!--Social News related field-->
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(3) && listOfSocialNewsSiteId.includes(1)">
                                            <label class="control-label font-weight-bold">Digg</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.digg.$error }"
                                                v-model="form.digg"
                                            >
                                            <div v-if="!$v.form.digg.required" class="invalid-feedback">
                                                Digg is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(3) && listOfSocialNewsSiteId.includes(2)">
                                            <label class="control-label font-weight-bold">Reddit</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.reddit_news.$error }"
                                                v-model="form.reddit_news"
                                            >
                                            <div v-if="!$v.form.reddit_news.required" class="invalid-feedback">
                                                Reddit is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(3) && listOfSocialNewsSiteId.includes(3)">
                                            <label class="control-label font-weight-bold">Product Hunt</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.product_hunt.$error }"
                                                v-model="form.product_hunt"
                                            >
                                            <div v-if="!$v.form.product_hunt.required" class="invalid-feedback">
                                                Product Hunt is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(3) && listOfSocialNewsSiteId.includes(4)">
                                            <label class="control-label font-weight-bold">Mix</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.mix_news.$error }"
                                                v-model="form.mix_news"
                                            >
                                            <div v-if="!$v.form.mix_news.required" class="invalid-feedback">
                                                Mix is required.
                                            </div>
                                        </div>
                                        <!--End Social News  sites related field-->

                                        <!--Video sharing related field-->
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(4) && listOfVideoSharingSiteId.includes(1)">
                                            <label class="control-label font-weight-bold">Youtube</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.youtube.$error }"
                                                v-model="form.youtube"
                                            >
                                            <div v-if="!$v.form.youtube.required" class="invalid-feedback">
                                                Youtube is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(4) && listOfVideoSharingSiteId.includes(2)">
                                            <label class="control-label font-weight-bold">Vimeo</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.vimeo.$error }"
                                                v-model="form.vimeo"
                                            >
                                            <div v-if="!$v.form.vimeo.required" class="invalid-feedback">
                                                Vimeo is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(4) && listOfVideoSharingSiteId.includes(3)">
                                            <label class="control-label font-weight-bold">Twitch</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.twitch.$error }"
                                                v-model="form.twitch"
                                            >
                                            <div v-if="!$v.form.twitch.required" class="invalid-feedback">
                                                Twitch is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(4) && listOfVideoSharingSiteId.includes(4)">
                                            <label class="control-label font-weight-bold">Dailymotion</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.dailymotion.$error }"
                                                v-model="form.dailymotion"
                                            >
                                            <div v-if="!$v.form.dailymotion.required" class="invalid-feedback">
                                                Dailymotion is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(4) && listOfVideoSharingSiteId.includes(5)">
                                            <label class="control-label font-weight-bold">Tencent Video</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.tencent_video.$error }"
                                                v-model="form.tencent_video"
                                            >
                                            <div v-if="!$v.form.tencent_video.required" class="invalid-feedback">
                                                Tencent Video is required.
                                            </div>
                                        </div>
                                        <!--End Video sharing  sites related field-->

                                        <!--Microblogging sites related field-->
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(5) && listOfMicrobloggingSiteId.includes(1)">
                                            <label class="control-label font-weight-bold">Twitter</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.twitter_page.$error }"
                                                v-model="form.twitter_page"
                                            >
                                            <div v-if="!$v.form.twitter_page.required" class="invalid-feedback">
                                                Twitter is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(5) && listOfMicrobloggingSiteId.includes(2)">
                                            <label class="control-label font-weight-bold">Tumblr</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.tumblr.$error }"
                                                v-model="form.tumblr"
                                            >
                                            <div v-if="!$v.form.tumblr.required" class="invalid-feedback">
                                                Tumblr is required.
                                            </div>
                                        </div>
                                        <div class="form-group"
                                             v-if="listOfSocialPrensenceId.includes(5) && listOfMicrobloggingSiteId.includes(3)">
                                            <label class="control-label font-weight-bold">Scoop.it</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Please Enter URL"
                                                autocomplete="off"
                                                :class="{ 'is-invalid': $v.form.scoop_it.$error }"
                                                v-model="form.scoop_it"
                                            >
                                            <div v-if="!$v.form.scoop_it.required" class="invalid-feedback">
                                                Scoop.it is required.
                                            </div>
                                        </div>
                                        <!--End Microblogging sites related field-->

                                        <div class="form-group">
                                            <button @click.prevent="prev()" class="btn btn-back-next">Back</button>
                                            <button @click.prevent="step6()" class="btn btn-back-next float-right">
                                                Next
                                            </button>
                                        </div>

                                    </div>

                                </fieldset>
                                <!--Step-6 Start-->
                                <fieldset v-if="step == 6">
                                    <Hierarchy @nodeData="TaxonomyData" ref="taxonomyChild"></Hierarchy>
                                    <div class="col-md-6 offset-4">
                                        <button @click.prevent="addAnotherNode()" class="btn btn-theme-primary">Add
                                            Another Classification
                                        </button>
                                        <button @click.prevent="step7()" class="btn btn-back-next float-right">
                                            Finish
                                        </button>
                                        <div class="text-center mt-3">
                                            <a @click.prevent="prev()" class="cursor-pointer"><i
                                                class="fa fa-arrow-left"></i> Back</a>
                                        </div>
                                    </div>
                                </fieldset>
                                <!--Step-7 Start-->
                                <fieldset v-if="step == 7">
                                    <div class="panel-body">
                                        <div class="row text-center">
                                            <div class="col mr-4 video-audio-upload-col">
                                                <div class="py-3">
                                                    <img src="/images/video.png" alt=""
                                                         class="img-fluid mx-auto d-block">

                                                    <p>Upload and publish video</p>
                                                    <router-link class="btn btn-primary"
                                                                 :to="{ name: 'UnAuthVideoQuestionnaire' }">UPLOAD VIDEO
                                                    </router-link>
                                                </div>
                                            </div>
                                            <div class="col video-audio-upload-col">
                                                <div class="py-3">
                                                    <img src="/images/audio.png" alt=""
                                                         class="img-fluid mx-auto d-block">
                                                    <p>Upload and publish audio</p>
                                                    <router-link class="btn btn-primary"
                                                                 :to="{ name: 'UnAuthAudioQuestionnaire' }">UPLOAD AUDIO
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-center mt-4">
                                            <button @click.prevent="skipAndGotoDashboard"
                                                    class="btn btn-back-next">
                                                Skip and go to Dashboard
                                            </button>
                                        </div>

                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <loader :is-visible="isLoading"></loader>
            </div>
        </div>
    </section>
</template>

<script>
    import Navigation from "../components/Navigation.vue";
    import User from "../apis/User";
    import loader from '../components/Loader';
    import Hierarchy from '../components/Hierarchy'
    import sidebar from '../components/Sidebar'
    import vSelect from 'vue-select'
    import {required, email, minLength, between} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                form: {
                    company_name: "",
                    entity_type: "",
                    name: "",
                    email: "",
                    company_url: "",
                    sales_dept_email: "",
                    dept_phone_number: "",
                    relations_department_url: "",
                    investor_relation_contact_email: "",
                    ceo_list: "",
                    cfo_list: "",
                    director_sales_list: "",
                    top_competitors: "",
                    esg_business: "",
                    conglomerate: "",
                    subsidiary_name: [],
                    company_founders: [],
                    strategic_partnership: [],
                    vendors: [],
                    trading_and_reporting_status: "",
                    public_private_reporting_status: "",
                    base_currency: "",
                    legal_entity_type: "",
                    publicly_traded_company: "",
                    exchange_traded_on: "",
                    ticker_symbol: "",
                    hq_address: "",
                    hq_address2: "",
                    hq_city: "",
                    hq_state: "",
                    hq_country: "",
                    hq_zip: "",
                    isMNC: "",
                    MNCCountry: "",
                    MNCState: "",
                    MNCCity: "",
                    conduct_financing: "",
                    financing_type: "",
                    audited_finance: "",
                    company_valuation: "",
                    intelletual_property: "",
                    patent_type: "",
                    employee_number: "",
                    shareholder_number: "",
                    research_coverage_type: "",
                    shared_community_research: "",
                    company_related_document: "",
                    /*Social Related*/
                    social_media_presence_category: [],
                    social_networking_sites: "",
                    social_bookmarking_sites: "",
                    social_news_sites: "",
                    video_sharing_sites: "",
                    microblogging_sites: "",
                    non_listed_social_media: [],
                    facebook_page: "",
                    instragram: "",
                    snapchat: "",
                    tiktok: "",
                    linkedin_page: "",

                    pinterest: "",
                    reddit: "",
                    stumble_upon: "",
                    dribble: "",
                    mix: "",

                    digg: "",
                    reddit_news: "",
                    product_hunt: "",
                    mix_news: "",

                    youtube: "",
                    vimeo: "",
                    twitch: "",
                    dailymotion: "",
                    tencent_video: "",

                    twitter_page: "",
                    tumblr: "",
                    scoop_it: "",
                    /*End*/
                    submitted_step: "",

                    /*hiarerchy related*/
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
                    errorField: "",
                },

                isLoggedIn: false,
                isLoading: false,

                errors: [],
                entityTypes: [],
                privatePublicCompanyTypes: [],
                baseCurrencyList: [],
                legalEntityTypeList: [],
                publiclyTradedCompanyTypeList: [],
                exchangeTradedList: [],
                tradingAndReportingStatusList: [],
                countries: [],
                StateLists: [],
                MNCStateList: [],
                MNCCityList: [],
                financingTypeList: [],
                intelletualPropertyList: [],
                patentsTypeList: [],
                employeeNumberList: [],
                shareholderNumberList: [],
                researchCoverageTypeList: [],
                analystRatingList: [],
                sharedCommunityResearchPlatformList: [],
                uploadRelatedDocumentTypeList: [],
                step: 1,
                completedStep: "",
                reporting_status_label: "",
                step2Error: false,
                appendedFieldFuncStepTwo: 0,
                stepsData: [],
                patentTypeCondition: "",
                researchTypeCondition: "",
                /*Social Media related*/
                socialMediaPresenceCategoryList: [],
                socialNetworkingSitesList: [],
                socialBookmarkingSitesList: [],
                socialNewsSitesList: [],
                videoSharingSitesList: [],
                microbloggingSitesList: [],
                listOfSocialPrensenceId: [],
                listOfSocialNetworkId: [],
                listOfBookmarkingSiteId: [],
                listOfSocialNewsSiteId: [],
                listOfVideoSharingSiteId: [],
                listOfMicrobloggingSiteId: [],
                /*hiarerchy related*/


                step6FormData: {
                    userinfo: '',
                    _token: '',

                },

            };
        },
        validations: {
            form: {
                company_name: {required},
                entity_type: {required},
                sales_dept_email: {required, email},
                investor_relation_contact_email: {required, email},
                ceo_list: {required},
                cfo_list: {required},
                director_sales_list: {required},
                esg_business: {required},
                conglomerate: {required},
                trading_and_reporting_status: {required},
                base_currency: {required},
                ticker_symbol: {required},
                hq_address: {required},
                hq_city: {required},
                hq_state: {required},
                hq_zip: {required},
                //hq_country: {required},
                isMNC: {required},
                conduct_financing: {required},
                audited_finance: {required},
                intelletual_property: {required},
                company_valuation: {
                    required,
                    patternValid: function (value) {
                        // const containsNumber = /[0-9]/.test(value);
                        var num = value.toString().replace(/,/g, ""),
                            thenum = num.replace(/^\D+/g, '');
                        thenum = Math.trunc(thenum)
                        const containsNumber = /^\d*$/.test(thenum);
                        return containsNumber;
                    }
                },
                employee_number: {required},
                shareholder_number: {required},
                research_coverage_type: {required},
                company_related_document: {required},
                /*Social Media Related*/
                social_media_presence_category: {required},
                social_networking_sites: {required},
                social_bookmarking_sites: {required},
                social_news_sites: {required},
                video_sharing_sites: {required},
                microblogging_sites: {required},

                facebook_page: {required},
                instragram: {required},
                snapchat: {required},
                tiktok: {required},
                linkedin_page: {required},

                pinterest: {required},
                reddit: {required},
                stumble_upon: {required},
                dribble: {required},
                mix: {required},

                digg: {required},
                reddit_news: {required},
                product_hunt: {required},
                mix_news: {required},

                youtube: {required},
                vimeo: {required},
                twitch: {required},
                dailymotion: {required},
                tencent_video: {required},

                twitter_page: {required},
                tumblr: {required},
                scoop_it: {required},

            }

        },
        methods: {
            prev() {
                this.isLoading = true;
                this.step--;
                this.getStepwiseData(this.step, 'back');
            },
            step2() {
                this.$v.form.company_name.$touch();
                this.$v.form.hq_address.$touch();
                this.$v.form.hq_city.$touch();
                this.$v.form.hq_state.$touch();
                this.$v.form.hq_zip.$touch();
                //this.$v.form.hq_country.$touch();
                this.$v.form.employee_number.$touch();
                this.$v.form.esg_business.$touch();

                if (this.$v.form.company_name.$invalid ||
                    this.$v.form.hq_address.$invalid || this.$v.form.hq_city.$invalid || this.$v.form.hq_state.$invalid
                    // || this.$v.form.hq_country.$invalid
                    || this.$v.form.hq_zip.$invalid
                    || this.$v.form.employee_number.$invalid
                    || this.$v.form.esg_business.$invalid
                ) {
                    if (this.$v.form.company_name.$invalid) {
                        this.$refs.company_name.focus();
                    } else if (this.$v.form.hq_address.$invalid) {
                        this.$refs.hq_address.focus();
                    } else if (this.$v.form.hq_city.$invalid) {
                        this.$refs.hq_city.focus();
                    } else if (this.$v.form.hq_state.$invalid) {
                        this.$refs.hq_state.$el.querySelector('input').focus();
                    } else if (this.$v.form.hq_zip.$invalid) {
                        this.$refs.hq_zip.focus();
                    } else if (this.$v.form.employee_number.$invalid) {
                        this.$refs.employee_number.$el.querySelector('input').focus();
                    } else if (this.$v.form.esg_business.$invalid) {
                        this.$refs.esg_business.$el.querySelector('input').focus();
                    }
                    return false;
                }
                this.errors = [];
                let step1formData = new FormData();
                step1formData.append('company_name', this.form.company_name);
                step1formData.append('hq_address', this.form.hq_address);
                step1formData.append('hq_address2', this.form.hq_address2 ?? '');
                step1formData.append('hq_city', this.form.hq_city);
                step1formData.append('hq_state', this.form.hq_state);
                step1formData.append('hq_country', 1); /*Set default Us for now which table ID is 1*/
                step1formData.append('employee_number', this.form.employee_number);
                step1formData.append('hq_zip', this.form.hq_zip);
                step1formData.append('esg_business', this.form.esg_business);
                step1formData.append('submitted_step', this.step);

                this.addQuestionnaire(step1formData);
            },
            step3() {
                this.$v.form.ceo_list.$touch();
                this.$v.form.cfo_list.$touch();
                this.$v.form.sales_dept_email.$touch();
                this.$v.form.investor_relation_contact_email.$touch();
                if (this.$v.form.ceo_list.$invalid
                    || this.$v.form.cfo_list.$invalid
                    || this.$v.form.sales_dept_email.$invalid || this.$v.form.investor_relation_contact_email.$invalid
                ) {
                    if (this.$v.form.ceo_list.$invalid) {
                        this.$refs.ceo_list.focus();
                    } else if (this.$v.form.cfo_list.$invalid) {
                        this.$refs.cfo_list.focus();
                    } else if (this.$v.form.sales_dept_email.$invalid) {
                        this.$refs.sales_dept_email.focus();
                    } else if (this.$v.form.investor_relation_contact_email.$invalid) {
                        this.$refs.investor_relation_contact_email.focus();
                    }
                    return false;
                }
                this.isLoading = true
                let step2formData = new FormData();
                step2formData.append('ceo_list', this.form.ceo_list);
                step2formData.append('cfo_list', this.form.cfo_list);
                step2formData.append('sales_dept_email', this.form.sales_dept_email);
                step2formData.append('investor_relation_contact_email', this.form.investor_relation_contact_email);
                step2formData.append('top_competitors', this.form.top_competitors ? this.form.top_competitors.join(', ') : '');
                step2formData.append('company_founders', JSON.stringify(this.form.company_founders));
                step2formData.append('strategic_partnership', JSON.stringify(this.form.strategic_partnership));
                step2formData.append('vendors', JSON.stringify(this.form.vendors));
                step2formData.append('submitted_step', this.step);

                this.addQuestionnaire(step2formData);
            },
            step4() {
                this.$v.form.entity_type.$touch();
                this.$v.form.trading_and_reporting_status.$touch();
                this.$v.form.base_currency.$touch();
                this.$v.form.shareholder_number.$touch();
                if (this.form.trading_and_reporting_status.tag == 'public') {
                    this.$v.form.ticker_symbol.$touch();
                }
                this.$v.form.conglomerate.$touch();
                if (this.$v.form.entity_type.$invalid || this.$v.form.trading_and_reporting_status.$invalid || this.$v.form.base_currency.$invalid ||
                    this.$v.form.shareholder_number.$invalid
                    || (this.$v.form.ticker_symbol.$invalid && (this.form.trading_and_reporting_status != null) ? this.form.trading_and_reporting_status.tag == 'public' : '' && (this.form.public_private_reporting_status.id == 1 || this.form.public_private_reporting_status.id == 2))
                    || this.$v.form.conglomerate.$invalid) {

                    if (this.$v.form.entity_type.$invalid) {
                        this.$refs.entity_type.$el.querySelector('input').focus();
                    } else if (this.$v.form.trading_and_reporting_status.$invalid) {
                        this.$refs.trading_and_reporting_status.$el.querySelector('input').focus();
                    } else if (this.$v.form.shareholder_number.$invalid) {
                        this.$refs.shareholder_number.$el.querySelector('input').focus();
                    } else if (this.$v.form.ticker_symbol.$invalid && (this.form.trading_and_reporting_status != null) ? this.form.trading_and_reporting_status.tag == 'public':'') {
                        this.$refs.ticker_symbol.focus();
                    } else if (this.$v.form.base_currency.$invalid) {
                        this.$refs.base_currency.$el.querySelector('input').focus();
                    } else if (this.$v.form.conglomerate.$invalid) {
                        this.$refs.conglomerate.$el.querySelector('input').focus();
                    }
                    return false;
                }
                this.isLoading = true
                let exchangeTradedOptions = [], subsidiaryNameOptions = [], step3formData = new FormData();

                for (let extron = 0; extron < this.form.exchange_traded_on.length; extron++) {
                    exchangeTradedOptions.push(this.form.exchange_traded_on[extron].id);
                }
                if (this.form.conglomerate) {
                    for (let sno = 0; sno < this.form.subsidiary_name.length; sno++) {
                        subsidiaryNameOptions.push(this.form.subsidiary_name[sno].name);
                    }
                }
                step3formData.append('entity_type', this.form.entity_type.id);
                step3formData.append('trading_and_reporting_status', this.form.trading_and_reporting_status.id);
                step3formData.append('base_currency', this.form.base_currency.id);
                step3formData.append('shareholder_number', this.form.shareholder_number);
                step3formData.append('ticker_symbol', this.form.ticker_symbol ?? '');
                step3formData.append('publicly_traded_company', this.form.publicly_traded_company.id ?? '');
                step3formData.append('exchange_traded_on', exchangeTradedOptions);
                step3formData.append('public_private_reporting_status', this.form.public_private_reporting_status.id ?? '');
                step3formData.append('conglomerate', this.form.conglomerate);
                step3formData.append('subsidiary_name', subsidiaryNameOptions);
                step3formData.append('submitted_step', this.step);

                this.addQuestionnaire(step3formData);
            },
            step5() {
                this.$v.form.conduct_financing.$touch();
                this.$v.form.audited_finance.$touch();
                this.$v.form.intelletual_property.$touch();
                this.$v.form.company_valuation.$touch();
                this.$v.form.research_coverage_type.$touch();
                if (this.$v.form.conduct_financing.$invalid || this.$v.form.intelletual_property.$invalid || this.$v.form.company_valuation.$invalid ||
                    this.$v.form.audited_finance.$invalid || this.$v.form.research_coverage_type.$invalid) {

                    if (this.$v.form.conduct_financing.$invalid) {
                        this.$refs.conduct_financing.$el.querySelector('input').focus();
                    } else if (this.$v.form.company_valuation.$invalid) {
                        this.$refs.company_valuation.focus();
                    } else if (this.$v.form.audited_finance.$invalid) {
                        this.$refs.audited_finance.$el.querySelector('input').focus();
                    } else if (this.$v.form.intelletual_property.$invalid) {
                        this.$refs.intelletual_property.$el.querySelector('input').focus();
                    } else if (this.$v.form.research_coverage_type.$invalid) {
                        this.$refs.research_coverage_type.$el.querySelector('input').focus();
                    }
                    return false;
                }
                this.isLoading = true;
                let finanOptions = [],
                    intelOptions = [],
                    patOptions = [],
                    rscOptions = [],
                    scrOptions = []
                ;
                for (let fnct = 0; fnct < this.form.financing_type.length; fnct++) {
                    finanOptions.push(this.form.financing_type[fnct].id);
                }

                for (let intp = 0; intp < this.form.intelletual_property.length; intp++) {
                    intelOptions.push(this.form.intelletual_property[intp].id);
                }

                for (let pat = 0; pat < this.form.patent_type.length; pat++) {
                    patOptions.push(this.form.patent_type[pat].id);
                }

                for (let rsc = 0; rsc < this.form.research_coverage_type.length; rsc++) {
                    rscOptions.push(this.form.research_coverage_type[rsc].id);
                }
                for (let scr = 0; scr < this.form.shared_community_research.length; scr++) {
                    scrOptions.push(this.form.shared_community_research[scr].id);
                }

                let step4formData = new FormData();
                step4formData.append('conduct_financing', this.form.conduct_financing);
                step4formData.append('financing_type', finanOptions);
                step4formData.append('company_valuation', this.form.company_valuation);
                step4formData.append('audited_finance', this.form.audited_finance);
                step4formData.append('intelletual_property', intelOptions);
                step4formData.append('patent_type', patOptions);
                step4formData.append('research_coverage_type', rscOptions);
                step4formData.append('shared_community_research', scrOptions);
                step4formData.append('submitted_step', this.step);
                this.addQuestionnaire(step4formData);
            },
            step6() {
                this.$v.form.social_media_presence_category.$touch();
                if (this.listOfSocialPrensenceId.includes(1)) {
                    this.$v.form.social_networking_sites.$touch();
                    if (this.listOfSocialNetworkId.includes(1)) {
                        this.$v.form.facebook_page.$touch();
                    }
                    if (this.listOfSocialNetworkId.includes(2)) {
                        this.$v.form.instragram.$touch();
                    }
                    if (this.listOfSocialNetworkId.includes(3)) {
                        this.$v.form.snapchat.$touch();
                    }
                    if (this.listOfSocialNetworkId.includes(4)) {
                        this.$v.form.tiktok.$touch();
                    }
                    if (this.listOfSocialNetworkId.includes(5)) {
                        this.$v.form.linkedin_page.$touch();
                    }
                }

                if (this.listOfSocialPrensenceId.includes(2)) {
                    this.$v.form.social_bookmarking_sites.$touch();
                    if (this.listOfBookmarkingSiteId.includes(1)) {
                        this.$v.form.pinterest.$touch();
                    }
                    if (this.listOfBookmarkingSiteId.includes(2)) {
                        this.$v.form.reddit.$touch();
                    }
                    if (this.listOfBookmarkingSiteId.includes(3)) {
                        this.$v.form.stumble_upon.$touch();
                    }
                    if (this.listOfBookmarkingSiteId.includes(4)) {
                        this.$v.form.dribble.$touch();
                    }
                    if (this.listOfBookmarkingSiteId.includes(5)) {
                        this.$v.form.mix.$touch();
                    }
                }

                if (this.listOfSocialPrensenceId.includes(3)) {
                    this.$v.form.social_news_sites.$touch();
                    if (this.listOfSocialNewsSiteId.includes(1)) {
                        this.$v.form.digg.$touch();
                    }
                    if (this.listOfSocialNewsSiteId.includes(2)) {
                        this.$v.form.reddit_news.$touch();
                    }
                    if (this.listOfSocialNewsSiteId.includes(3)) {
                        this.$v.form.product_hunt.$touch();
                    }
                    if (this.listOfSocialNewsSiteId.includes(4)) {
                        this.$v.form.mix_news.$touch();
                    }
                }

                if (this.listOfSocialPrensenceId.includes(4)) {
                    this.$v.form.video_sharing_sites.$touch();
                    if (this.listOfVideoSharingSiteId.includes(1)) {
                        this.$v.form.youtube.$touch();
                    }
                    if (this.listOfVideoSharingSiteId.includes(2)) {
                        this.$v.form.vimeo.$touch();
                    }
                    if (this.listOfVideoSharingSiteId.includes(3)) {
                        this.$v.form.twitch.$touch();
                    }
                    if (this.listOfVideoSharingSiteId.includes(4)) {
                        this.$v.form.dailymotion.$touch();
                    }
                    if (this.listOfVideoSharingSiteId.includes(5)) {
                        this.$v.form.tencent_video.$touch();
                    }
                }

                if (this.listOfSocialPrensenceId.includes(5)) {
                    this.$v.form.microblogging_sites.$touch();
                    if (this.listOfMicrobloggingSiteId.includes(1)) {
                        this.$v.form.twitter_page.$touch();
                    }
                    if (this.listOfMicrobloggingSiteId.includes(2)) {
                        this.$v.form.tumblr.$touch();
                    }
                    if (this.listOfMicrobloggingSiteId.includes(3)) {
                        this.$v.form.scoop_it.$touch();
                    }
                }

                if (this.$v.form.social_media_presence_category.$invalid
                    || (this.listOfSocialPrensenceId.includes(1) && this.$v.form.social_networking_sites.$invalid)
                    || (this.listOfSocialPrensenceId.includes(1) && this.listOfSocialNetworkId.includes(1) && this.$v.form.facebook_page.$invalid)
                    || (this.listOfSocialPrensenceId.includes(1) && this.listOfSocialNetworkId.includes(2) && this.$v.form.instragram.$invalid)
                    || (this.listOfSocialPrensenceId.includes(1) && this.listOfSocialNetworkId.includes(3) && this.$v.form.snapchat.$invalid)
                    || (this.listOfSocialPrensenceId.includes(1) && this.listOfSocialNetworkId.includes(4) && this.$v.form.tiktok.$invalid)
                    || (this.listOfSocialPrensenceId.includes(1) && this.listOfSocialNetworkId.includes(5) && this.$v.form.linkedin_page.$invalid)

                    || (this.listOfSocialPrensenceId.includes(2) && this.$v.form.social_bookmarking_sites.$invalid)
                    || (this.listOfSocialPrensenceId.includes(2) && this.listOfBookmarkingSiteId.includes(1) && this.$v.form.pinterest.$invalid)
                    || (this.listOfSocialPrensenceId.includes(2) && this.listOfBookmarkingSiteId.includes(2) && this.$v.form.reddit.$invalid)
                    || (this.listOfSocialPrensenceId.includes(2) && this.listOfBookmarkingSiteId.includes(3) && this.$v.form.stumble_upon.$invalid)
                    || (this.listOfSocialPrensenceId.includes(2) && this.listOfBookmarkingSiteId.includes(4) && this.$v.form.dribble.$invalid)
                    || (this.listOfSocialPrensenceId.includes(2) && this.listOfBookmarkingSiteId.includes(5) && this.$v.form.mix.$invalid)

                    || (this.listOfSocialPrensenceId.includes(3) && this.$v.form.social_news_sites.$invalid)
                    || (this.listOfSocialPrensenceId.includes(3) && this.listOfSocialNewsSiteId.includes(1) && this.$v.form.digg.$invalid)
                    || (this.listOfSocialPrensenceId.includes(3) && this.listOfSocialNewsSiteId.includes(2) && this.$v.form.reddit_news.$invalid)
                    || (this.listOfSocialPrensenceId.includes(3) && this.listOfSocialNewsSiteId.includes(3) && this.$v.form.product_hunt.$invalid)
                    || (this.listOfSocialPrensenceId.includes(3) && this.listOfSocialNewsSiteId.includes(4) && this.$v.form.mix_news.$invalid)

                    || (this.listOfSocialPrensenceId.includes(4) && this.$v.form.video_sharing_sites.$invalid)
                    || (this.listOfSocialPrensenceId.includes(4) && this.listOfVideoSharingSiteId.includes(1) && this.$v.form.youtube.$invalid)
                    || (this.listOfSocialPrensenceId.includes(4) && this.listOfVideoSharingSiteId.includes(2) && this.$v.form.vimeo.$invalid)
                    || (this.listOfSocialPrensenceId.includes(4) && this.listOfVideoSharingSiteId.includes(3) && this.$v.form.twitch.$invalid)
                    || (this.listOfSocialPrensenceId.includes(4) && this.listOfVideoSharingSiteId.includes(4) && this.$v.form.dailymotion.$invalid)
                    || (this.listOfSocialPrensenceId.includes(4) && this.listOfVideoSharingSiteId.includes(5) && this.$v.form.tencent_video.$invalid)

                    || (this.listOfSocialPrensenceId.includes(5) && this.$v.form.microblogging_sites.$invalid)
                    || (this.listOfSocialPrensenceId.includes(5) && this.listOfMicrobloggingSiteId.includes(1) && this.$v.form.twitter_page.$invalid)
                    || (this.listOfSocialPrensenceId.includes(5) && this.listOfMicrobloggingSiteId.includes(2) && this.$v.form.tumblr.$invalid)
                    || (this.listOfSocialPrensenceId.includes(5) && this.listOfMicrobloggingSiteId.includes(3) && this.$v.form.scoop_it.$invalid)

                ) {
                    if (this.$v.form.social_media_presence_category.$invalid) {
                        this.$refs.social_media_presence_category.$el.querySelector('input').focus();
                    }
                    return false;
                }

                let smpcOptions = [],
                    snsOptions = [],
                    sbsOptions = [],
                    snesOptions = [],
                    vssOptions = [],
                    mbsOptions = [],
                    tsmpOptions = []
                ;
                for (let smpc = 0; smpc < this.form.social_media_presence_category.length; smpc++) {
                    smpcOptions.push(this.form.social_media_presence_category[smpc].id);
                }

                if (this.listOfSocialPrensenceId.includes(1)) {
                    for (let sns = 0; sns < this.form.social_networking_sites.length; sns++) {
                        snsOptions.push(this.form.social_networking_sites[sns].id);
                    }
                }
                if (this.listOfSocialPrensenceId.includes(2)) {
                    for (let sbs = 0; sbs < this.form.social_bookmarking_sites.length; sbs++) {
                        sbsOptions.push(this.form.social_bookmarking_sites[sbs].id);
                    }
                }
                if (this.listOfSocialPrensenceId.includes(3)) {
                    for (let snes = 0; snes < this.form.social_news_sites.length; snes++) {
                        snesOptions.push(this.form.social_news_sites[snes].id);
                    }
                }
                if (this.listOfSocialPrensenceId.includes(4)) {
                    for (let vss = 0; vss < this.form.video_sharing_sites.length; vss++) {
                        vssOptions.push(this.form.video_sharing_sites[vss].id);
                    }
                }
                if (this.listOfSocialPrensenceId.includes(5)) {
                    for (let mbs = 0; mbs < this.form.microblogging_sites.length; mbs++) {
                        mbsOptions.push(this.form.microblogging_sites[mbs].id);
                    }
                }
                if (this.listOfSocialPrensenceId.includes(6)) {
                    for (let tsmp = 0; tsmp < this.form.non_listed_social_media.length; tsmp++) {
                        tsmpOptions.push(this.form.non_listed_social_media[tsmp].name);
                    }
                }

                let step5formData = new FormData();
                step5formData.append('social_media_presence_category', smpcOptions);
                step5formData.append('social_networking_sites', snsOptions);
                step5formData.append('social_bookmarking_sites', sbsOptions);
                step5formData.append('social_news_sites', snesOptions);
                step5formData.append('video_sharing_sites', vssOptions);
                step5formData.append('microblogging_sites', mbsOptions);
                step5formData.append('non_listed_social_media', tsmpOptions);

                step5formData.append('facebook_page', this.form.facebook_page);
                step5formData.append('instragram', this.form.instragram);
                step5formData.append('snapchat', this.form.snapchat);
                step5formData.append('tiktok', this.form.tiktok);
                step5formData.append('linkedin_page', this.form.linkedin_page);

                step5formData.append('pinterest', this.form.pinterest);
                step5formData.append('reddit', this.form.reddit);
                step5formData.append('stumble_upon', this.form.stumble_upon);
                step5formData.append('dribble', this.form.dribble);
                step5formData.append('mix', this.form.mix);

                step5formData.append('digg', this.form.digg);
                step5formData.append('reddit_news', this.form.reddit_news);
                step5formData.append('product_hunt', this.form.product_hunt);
                step5formData.append('mix_news', this.form.mix_news);

                step5formData.append('youtube', this.form.youtube);
                step5formData.append('vimeo', this.form.vimeo);
                step5formData.append('twitch', this.form.twitch);
                step5formData.append('dailymotion', this.form.dailymotion);
                step5formData.append('tencent_video', this.form.tencent_video);

                step5formData.append('twitter_page', this.form.twitter_page);
                step5formData.append('scoop_it', this.form.scoop_it);
                step5formData.append('tumblr', this.form.tumblr);

                step5formData.append('submitted_step', this.step);
                this.addQuestionnaire(step5formData);
            },
            addAnotherNode() {
                this.$refs.taxonomyChild.saveHierarchyInfo('addAnother');
            },
            step7() {
                let checked = this.$refs.taxonomyChild.checkSaveHierarchyInfo();
                if (checked) {
                    if (this.form.industry.length == 0) {
                        this.step++;
                    } else {
                        this.$refs.taxonomyChild.saveHierarchyInfo('finish');
                    }
                } else {
                    if (this.form.industry.length == 0) {
                        $.confirm({
                            title: 'Warning!',
                            content: "Company must be associated to at least one node, Please Add.",
                            columnClass: 'medium',
                            type: 'orange',
                            typeAnimated: true,
                            buttons: {
                                ok: function () {
                                }
                            }
                        });
                    } else {
                        this.$refs.taxonomyChild.saveHierarchyInfo('finish');
                    }
                }

            },
            goNextStep() {
                this.step++;
            },
            addMoreFounder() {
                this.form.company_founders.push({
                    name: ''
                })
            },
            removeFounder(index) {
                this.form.company_founders.splice(index, 1)
            },
            addMoreSocialMedia() {
                this.form.non_listed_social_media.push({
                    name: ''
                })
            },
            removeMoreSocialMedia(index) {
                this.form.non_listed_social_media.splice(index, 1)
            },
            addMorePartnerships() {
                this.form.strategic_partnership.push({
                    name: ''
                })
            },
            removePartnerships(index) {
                this.form.strategic_partnership.splice(index, 1)
            },
            addMoreVendors() {
                this.form.vendors.push({
                    name: ''
                })
            },
            removeVendors(index) {
                this.form.vendors.splice(index, 1)
            },

            addMoreSubsidiary() {
                this.form.subsidiary_name.push({
                    name: ''
                })
            },
            removeSubsidiary(index) {
                this.form.subsidiary_name.splice(index, 1)
            },
            addQuestionnaire(formData) {
                this.isLoading = true;
                User.profileQuestionnaire(formData, localStorage.getItem("userInfo"))
                    .then(() => {
                        // console.log('submitted')
                        this.getStepwiseData(this.step, 'afterSavedNext');
                        this.isLoading = false;
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.isLoading = false;
                            this.errors = error.response.data.error.message;
                        }
                    });
            },
            getCountryList: function () {
                axios.get('/api/country-list')
                    .then(response => {
                        this.countries = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getEntityTypeList: function () {
                axios.get('/api/get-entity-type')
                    .then(response => {
                        this.entityTypes = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getPrivatePublicCompanyType: function () {
                axios.get('/api/get-private-public-company-type')
                    .then(response => {
                        this.privatePublicCompanyTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getBaseCurrencyList: function () {
                axios.get('/api/get-base-currency-list')
                    .then(response => {
                        this.baseCurrencyList = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getLegalEntityTypeList: function () {
                axios.get('/api/get-legal-entity-type-list')
                    .then(response => {
                        this.legalEntityTypeList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getTradingAndReportingStatusList: function (value) {
                if (value != null) {
                    if ('public' == value.tag) {
                        this.reporting_status_label = "Public Trading OR  Reporting Status"
                    } else if ('private' == value.tag) {
                        this.reporting_status_label = "Private Trading and Reporting Status"
                    }
                    axios.get('/api/get-trading-and-reporting-status-list/' + value.id)
                        .then(response => {
                            this.tradingAndReportingStatusList = response.data.data
                            this.isLoading = false
                        })
                        .catch(error => console.log(error))
                }
            },
            getPubliclyTradedCompanyTypeList: function () {
                axios.get('/api/get-publicly-traded-company-type-list')
                    .then(response => {
                        this.publiclyTradedCompanyTypeList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getExchangeTradedList: function () {
                axios.get('/api/get-exchange-traded-list')
                    .then(response => {
                        this.exchangeTradedList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getMNCState: function (value) {
                axios.get('/api/get-state-list/' + value.id)
                    .then(response => {
                        this.MNCStateList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getStates: function (value) {
                /*Aet country as default US which table ID is 1*/
                axios.get('/api/get-state-list/1')
                    .then(response => {
                        this.StateLists = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getMNCCities: function (value) {
                axios.get('/api/get-city-list/' + value.id)
                    .then(response => {
                        this.MNCCityList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getFinancingTypeList: async function () {
                await axios.get('/api/get-financing-type-list')
                    .then(response => {
                        this.financingTypeList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getIntelletualPropertyList: async function () {
                await axios.get('/api/get-intelletual-property-list')
                    .then(response => {
                        this.intelletualPropertyList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getPatentsTypeList: async function () {
                await axios.get('/api/get-patent-type-list')
                    .then(response => {
                        this.patentsTypeList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getEmployeeNumberList: async function () {
                await axios.get('/api/get-employee-number-list')
                    .then(response => {
                        this.employeeNumberList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getShareholderNumberList: async function () {
                await axios.get('/api/get-shareholder-number-list')
                    .then(response => {
                        this.shareholderNumberList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getResearchCoverageTypeList: async function () {
                await axios.get('/api/get-research-coverage-type-list')
                    .then(response => {
                        this.researchCoverageTypeList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getAnalystRatingList: function () {
                axios.get('/api/get-analyst-rating-list')
                    .then(response => {
                        this.analystRatingList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getSharedCommunityResearchPlatformList: async function () {
                await axios.get('/api/get-shared-community-research-platform-list')
                    .then(response => {
                        this.sharedCommunityResearchPlatformList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getCompanyRelatedDocumentListId: function () {
                axios.get('/api/get-upload-related-document-type-list')
                    .then(response => {
                        this.uploadRelatedDocumentTypeList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getSocialMediaPresenceCategoryList: function () {
                axios.get('/api/get-social-media-category')
                    .then(response => {
                        this.socialMediaPresenceCategoryList = response.data.data
                        if (this.form.social_media_presence_category.length < 1) {
                            this.form.social_media_presence_category = [{name: "None", id: 7}]
                        }
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getSocialNetworkingSitesList: function () {
                axios.get('/api/get-social-networking-site')
                    .then(response => {
                        this.socialNetworkingSitesList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getSocialBookmarkingSitesList: function () {
                axios.get('/api/get-social-bookmarking-site')
                    .then(response => {
                        this.socialBookmarkingSitesList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getSocialNewsSitesList: function () {
                axios.get('/api/get-social-news-site')
                    .then(response => {
                        this.socialNewsSitesList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getVideoSharingSitesList: function () {
                axios.get('/api/get-video-sharing-site')
                    .then(response => {
                        this.videoSharingSitesList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getMicrobloggingSitesList: function () {
                axios.get('/api/get-micro-biogging-site')
                    .then(response => {
                        this.microbloggingSitesList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            skipAndGotoDashboard(type) {
                this.step6FormData.userinfo = localStorage.getItem("userInfo")
                this.step6FormData._token = document.querySelector('meta[name="csrf-token"]').content
                //this.isLoading = true;
                User.skipAndGotoDashboard(this.step6FormData)
                    .then((response) => {
                        this.isLoading = false;
                        if (response.data.success.message === 'success') {
                            localStorage.setItem("userInfo", JSON.stringify(response.data.data));
                            localStorage.setItem("info", JSON.stringify(response.data.info));
                            this.$root.$emit("login", true);
                            localStorage.setItem("token", "true");
                            this.$router.push({name: "Dashboard"});
                        } else {
                            toastr.error('unknown error')
                        }
                    })
                    .catch(error => {
                        this.isLoading = false;
                        toastr.error(error)
                    });
                // this.$router.push('/dashboard');
            },
            getCompletedStep: async function () {
                await axios.get('/api/get-completed-step/' + localStorage.getItem("userInfo"))
                    .then(response => {
                        if (response.data.data.steps_completed == null) {
                            this.form.company_name = response.data.data.name;
                        } else {
                            this.completedStep = response.data.data.steps_completed;
                            this.getStepwiseData(response.data.data.steps_completed, 'initialLoad');
                        }
                    })
                    .catch(error => {
                        this.$router.push({name: "Login"});
                    })
            },
            stepWiseDataLoad: function (step) {
                //console.log("Function Called");
                switch (step) {
                    case 2:
                        if (this.appendedFieldFuncStepTwo == 0) {
                            this.addMoreFounder()
                            this.addMorePartnerships()
                            this.addMoreVendors()
                        }
                        this.appendedFieldFuncStepTwo++;
                        break;
                    case 3:
                        this.getPrivatePublicCompanyType();
                        this.getEntityTypeList();
                        this.getShareholderNumberList();
                        this.getBaseCurrencyList();
                        this.getLegalEntityTypeList();
                        this.getPubliclyTradedCompanyTypeList();
                        this.getExchangeTradedList();
                        if (this.form.subsidiary_name.length < 1) {
                            this.addMoreSubsidiary();
                        }
                        break;
                    case 4:
                        this.getFinancingTypeList();
                        this.getIntelletualPropertyList();
                        this.getPatentsTypeList();
                        this.getResearchCoverageTypeList();
                        this.getSharedCommunityResearchPlatformList();
                        break;
                    case 5:
                        this.getSocialMediaPresenceCategoryList();
                        this.getSocialNetworkingSitesList();
                        this.getSocialBookmarkingSitesList();
                        this.getSocialNewsSitesList();
                        this.getVideoSharingSitesList();
                        this.getMicrobloggingSitesList();
                        if (this.form.non_listed_social_media.length < 1) {
                            this.addMoreSocialMedia();
                        }
                        break;
                    case 6:
                        //this.getIndustries();
                        break;
                }
            },
            progressBarActiveInactive: function (step) {
                for (let i = 1; i <= 5; i++) {
                    if (i == step) {
                        $('#progressStep' + i).addClass("active");
                    } else {
                        $('#progressStep' + i).removeClass("active");
                    }
                }

            },
            getStepwiseData: async function (step, callFrom) {
                //alert(step);
                await axios.get('/api/get-stepwise-data/' + step + '/' + localStorage.getItem("userInfo"))
                    .then(response => {
                        this.goBackToPageTop();
                        this.stepsData = response.data.data;
                        if (response.data.resultCode === 200) {
                            // console.log(this.stepsData);
                            switch (step) {

                                case 1:
                                    this.form.company_name = this.stepsData.name;
                                    this.form.hq_address = this.stepsData.headquarters.address.street_address_one;
                                    this.form.hq_address2 = this.stepsData.headquarters.address.street_address_two;
                                    this.form.hq_city = this.stepsData.headquarters.address.city;
                                    this.getStates(this.stepsData.headquarters.address.country_code);
                                    this.form.hq_state = this.stepsData.headquarters.address.state_id;
                                    this.form.hq_country = this.stepsData.headquarters.address.country_code;
                                    this.form.hq_zip = this.stepsData.headquarters.address.zip;
                                    this.form.employee_number = this.stepsData.number_employees_range;
                                    this.form.esg_business = this.stepsData.esg_business;
                                    if (callFrom == 'back') {
                                        this.stepWiseDataLoad(step);
                                        this.progressBarActiveInactive(step);
                                    } else if (callFrom == 'afterSavedNext') {
                                        this.step = step + 1;
                                        if (this.completedStep >= this.step) {
                                            this.stepWiseDataLoad(this.step);
                                            this.progressBarActiveInactive(this.step);
                                            this.getStepwiseData(this.step, "HaveForwardStepData");
                                        } else {
                                            this.stepWiseDataLoad(this.step);
                                            this.progressBarActiveInactive(this.step);
                                        }
                                    } else if (callFrom == 'initialLoad') {
                                        this.step = step + 1;
                                        this.stepWiseDataLoad(this.step);
                                        this.progressBarActiveInactive(this.step);
                                    }
                                    break;
                                case 2:
                                    this.form.ceo_list = this.stepsData.ceo;
                                    this.form.cfo_list = this.stepsData.cfo;
                                    this.form.company_founders = this.stepsData.founders;
                                    this.form.strategic_partnership = this.stepsData.partnerships;
                                    this.form.vendors = this.stepsData.vendors;
                                    this.form.top_competitors = (null != this.stepsData.top_competitors) ? this.stepsData.top_competitors.split(',').map(s => s.trim()) : '';
                                    this.form.sales_dept_email = this.stepsData.sales_department_email;
                                    this.form.investor_relation_contact_email = this.stepsData.investor_relations_department_email;
                                    if (callFrom == 'back') {
                                        /*Check Founders, Partners and Vendors Data Exist or Empty*/
                                        if (this.stepsData.founders.length == 0) {
                                            this.addMoreFounder();
                                        }
                                        if (this.stepsData.partnerships.length == 0) {
                                            this.addMorePartnerships();
                                        }
                                        if (this.stepsData.vendors.length == 0) {
                                            this.addMoreVendors();
                                        }
                                        /*End*/
                                        this.appendedFieldFuncStepTwo++;
                                        this.stepWiseDataLoad(step);
                                        this.progressBarActiveInactive(step);
                                    } else if (callFrom == 'afterSavedNext') {
                                        this.step = step + 1;
                                        if (this.completedStep >= this.step) {
                                            this.stepWiseDataLoad(this.step);
                                            this.progressBarActiveInactive(this.step);
                                            this.getStepwiseData(this.step, "HaveForwardStepData");
                                        } else {
                                            this.stepWiseDataLoad(this.step);
                                            this.progressBarActiveInactive(this.step);
                                        }
                                    } else if (callFrom == 'initialLoad') {
                                        this.step = step + 1;
                                        this.stepWiseDataLoad(this.step);
                                        this.progressBarActiveInactive(this.step);
                                    }
                                    break;
                                case 3:
                                    if (callFrom == 'back') {
                                        this.stepWiseDataLoad(step);
                                        this.progressBarActiveInactive(step);
                                    } else if (callFrom == 'afterSavedNext') {
                                        this.step = step + 1;
                                        if (this.completedStep >= this.step) {
                                            this.stepWiseDataLoad(this.step);
                                            this.progressBarActiveInactive(this.step);
                                            this.getStepwiseData(this.step, "HaveForwardStepData");
                                        } else {
                                            this.stepWiseDataLoad(this.step);
                                            this.progressBarActiveInactive(this.step);
                                        }
                                    } else if (callFrom == 'initialLoad') {
                                        this.step = step + 1;
                                        this.stepWiseDataLoad(this.step);
                                        this.progressBarActiveInactive(this.step);
                                    }
                                    console.log(this.stepsData.conglomerate_subsidiary.length);
                                    this.form.entity_type = this.stepsData.entity_type;
                                    this.form.trading_and_reporting_status = this.stepsData.public_private_type;
                                    this.form.base_currency = this.stepsData.base_currency;
                                    this.form.publicly_traded_company = this.stepsData.publicly_traded_type;
                                    this.form.public_private_reporting_status = this.stepsData.trading_status;
                                    this.form.exchange_traded_on = this.stepsData.exchange_traded_on;
                                    this.form.shareholder_number = this.stepsData.number_shareholders_range;
                                    this.form.ticker_symbol = this.stepsData.ticker_symbol;
                                    this.form.conglomerate = this.stepsData.conglomerate;
                                    this.form.subsidiary_name = this.stepsData.conglomerate_subsidiary;
                                    if (this.stepsData.conglomerate_subsidiary.length < 1) {
                                        this.addMoreSubsidiary();
                                    }

                                    this.getTradingAndReportingStatusList(this.stepsData.public_private_type);
                                    break;
                                case 4:
                                    if (callFrom == 'back') {
                                        this.stepWiseDataLoad(step);
                                        this.progressBarActiveInactive(step);
                                    } else if (callFrom == 'afterSavedNext') {
                                        this.step = step + 1;
                                        if (this.completedStep >= this.step) {
                                            this.stepWiseDataLoad(this.step);
                                            this.progressBarActiveInactive(this.step);
                                            this.getStepwiseData(this.step, "HaveForwardStepData");
                                        } else {
                                            this.stepWiseDataLoad(this.step);
                                            this.progressBarActiveInactive(this.step);
                                        }
                                    } else if (callFrom == 'initialLoad') {
                                        this.step = step + 1;
                                        this.stepWiseDataLoad(this.step);
                                        this.progressBarActiveInactive(this.step);
                                    }
                                    this.form.conduct_financing = this.stepsData.conducted_financing_six_month;
                                    this.form.financing_type = this.stepsData.financing_type;
                                    this.form.company_valuation = this.stepsData.recent_valuation;
                                    this.form.audited_finance = this.stepsData.audited_financials;
                                    this.form.intelletual_property = this.stepsData.intellectual_property;
                                    this.form.patent_type = this.stepsData.patent_type;
                                    this.form.research_coverage_type = this.stepsData.research_coverage;
                                    this.form.shared_community_research = this.stepsData.shared_community_research;
                                    this.checkPatent();
                                    this.checkCommunityResearch();
                                    break;
                                case 5:

                                    if (null != this.stepsData.social_site_list_urls) {
                                        this.form.facebook_page = this.stepsData.social_site_list_urls.facebook_page;
                                        this.form.instragram = this.stepsData.social_site_list_urls.instragram;
                                        this.form.snapchat = this.stepsData.social_site_list_urls.snapchat;
                                        this.form.tiktok = this.stepsData.social_site_list_urls.tiktok;
                                        this.form.linkedin_page = this.stepsData.social_site_list_urls.linkedin_page;

                                        this.form.pinterest = this.stepsData.social_site_list_urls.pinterest;
                                        this.form.reddit = this.stepsData.social_site_list_urls.reddit;
                                        this.form.stumble_upon = this.stepsData.social_site_list_urls.stumble_upon;
                                        this.form.dribble = this.stepsData.social_site_list_urls.dribble;
                                        this.form.mix = this.stepsData.social_site_list_urls.mix;

                                        this.form.digg = this.stepsData.social_site_list_urls.digg;
                                        this.form.reddit_news = this.stepsData.social_site_list_urls.reddit_news;
                                        this.form.product_hunt = this.stepsData.social_site_list_urls.product_hunt;
                                        this.form.mix_news = this.stepsData.social_site_list_urls.mix_news;

                                        this.form.youtube = this.stepsData.social_site_list_urls.youtube;
                                        this.form.vimeo = this.stepsData.social_site_list_urls.vimeo;
                                        this.form.twitch = this.stepsData.social_site_list_urls.twitch;
                                        this.form.dailymotion = this.stepsData.social_site_list_urls.dailymotion;
                                        this.form.tencent_video = this.stepsData.social_site_list_urls.tencent_video;

                                        this.form.twitter_page = this.stepsData.social_site_list_urls.twitter_page;
                                        this.form.tumblr = this.stepsData.social_site_list_urls.tumblr;
                                        this.form.scoop_it = this.stepsData.social_site_list_urls.scoop_it;
                                    }

                                    this.form.social_media_presence_category = this.stepsData.social_media_category;

                                    if (this.stepsData.social_media_category.length < 1) {
                                        console.log('smaller then 1');
                                        this.form.social_media_presence_category = [{name: "None", id: 7}]
                                    }
                                    this.showRelatedSocialField(this.stepsData.social_media_category, 'listOfSocialPrensenceId')

                                    this.form.social_networking_sites = this.stepsData.social_networking_sites;
                                    this.showRelatedSocialField(this.stepsData.social_networking_sites, 'listOfSocialNetworkId')

                                    this.form.social_bookmarking_sites = this.stepsData.social_bookmarking_sites;
                                    this.showRelatedSocialField(this.stepsData.social_bookmarking_sites, 'listOfBookmarkingSiteId')

                                    this.form.social_news_sites = this.stepsData.social_news_sites;
                                    this.showRelatedSocialField(this.stepsData.social_news_sites, 'listOfSocialNewsSiteId')

                                    this.form.video_sharing_sites = this.stepsData.video_sharing_sites;
                                    this.showRelatedSocialField(this.stepsData.video_sharing_sites, 'listOfVideoSharingSiteId')

                                    this.form.microblogging_sites = this.stepsData.microblogging_sites;
                                    this.showRelatedSocialField(this.stepsData.microblogging_sites, 'listOfMicrobloggingSiteId')

                                    this.form.non_listed_social_media = this.stepsData.non_listed_social_media;
                                    if (this.stepsData.non_listed_social_media.length < 1) {
                                        this.addMoreSocialMedia();
                                    }

                                    if (callFrom == 'back') {
                                        this.stepWiseDataLoad(step);
                                        this.progressBarActiveInactive(step);
                                    } else if (callFrom == 'afterSavedNext') {
                                        this.step = step + 1;
                                        if (this.completedStep >= this.step) {
                                            this.stepWiseDataLoad(this.step);
                                            this.progressBarActiveInactive(this.step);
                                            this.getStepwiseData(this.step, "HaveForwardStepData");
                                        } else {
                                            this.stepWiseDataLoad(this.step);
                                            this.progressBarActiveInactive(this.step);
                                        }
                                    } else if (callFrom == 'initialLoad') {
                                        this.step = step + 1;
                                        this.stepWiseDataLoad(this.step);
                                        this.progressBarActiveInactive(this.step);
                                    }
                                    break;
                                case 6:
                                    if (callFrom == 'afterSavedNext') {
                                        this.step = step + 1;
                                        this.stepWiseDataLoad(this.step);
                                        //this.stepWiseDataLoad(step);
                                    } else {
                                        this.step = step;
                                        this.stepWiseDataLoad(step);
                                        /*this.step = step + 1;
                                    this.stepWiseDataLoad(this.step);*/
                                    }
                                    break;
                            }
                        }
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            checkPatent: function () {
                const isObjectPatent = this.form.intelletual_property.find((o) => o.name === "Patents");
                if (isObjectPatent) {
                    this.patentTypeCondition = "Patents";
                } else {
                    this.patentTypeCondition = "";
                }
            },
            checkCommunityResearch: function () {
                const isObjectcommunity = this.form.research_coverage_type.find((o) => o.id === 4);
                if (isObjectcommunity) {
                    this.researchTypeCondition = "Cummunity";
                } else {
                    this.researchTypeCondition = "";
                }
            },
            stripTheGarbage(e) {
                if (e.keyCode < 48 && e.keyCode !== 46 || e.keyCode > 59) {
                    e.preventDefault()
                }
            },
            formatDollars() {
                if (this.form.company_valuation != '') {
                    var num = this.form.company_valuation;
                    num = Number(num);

                    var countDecimals = function (value) {
                        if (Math.floor(value) === value) return 0;
                        return value.toString().split(".")[1].length || 0;
                    }

                    var decimal = countDecimals(num);

                    if (decimal < 2) {
                        num = num.toFixed(2)
                    }

                    if (decimal > 2) {
                        num = num.toFixed(decimal)
                    }

                    if (parseInt(num) < 1) {
                        num = "." + String(num).split(".")[1];
                    }

                    this.form.company_valuation = '$' + num.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
                }
            },
            formatDollarsToNumber() {
                var num = this.form.company_valuation.replace(/,/g, "");
                var thenum = num.replace(/^\D+/g, '');
                thenum = Math.trunc(thenum)
                this.form.company_valuation = (thenum != 0) ? thenum : '';
            },
            TaxonomyData: function (value) {
                if (value != undefined || value.length != 0) {
                    this.form.industry = value[0];
                    this.form.sector = value[1];
                    this.form.subSector = value[2];
                    this.form.group = value[3];
                    this.form.subGroup = value[4];
                    this.form.echelon = value[5];
                    this.form.subEchelon = value[6];
                    this.form.tier = value[7];
                    this.form.subTier = value[8];
                    this.form.layer = value[9];
                    this.form.subLayer = value[10];
                    this.form.deck = value[11];
                    this.form.subDeck = value[12];
                    this.form.floor = value[13];
                    this.form.subFloor = value[14];
                    this.form.basement = value[15];
                    this.form.subBasement = value[16];
                    this.form.mine = value[17];
                    this.form.subMine = value[18];
                }
                //console.log(value);

            },
            filterMatchFirstCharacter: function (option, label, search) {
                return (label || '').toLowerCase().startsWith(search.toLowerCase())
            },
            goBackToPageTop: function () {
                $(document).ready(function () {
                    $(this).scrollTop(0);
                });
            },
            showRelatedSocialField: function (field, list, event) {

                this[list] = Object.keys(field).map((key) => {
                    return field[key].id
                })
                // if('listOfSocialPrensenceId' == list && 'manual' == event && this[list].includes(7) && this[list].length == 2){
                //     this.form.social_media_presence_category= this.form.social_media_presence_category.splice(1, 1);
                // }
            },
        },
        created: function () {
            this.isLoading = true
            this.getCountryList();
            this.getStates();
            this.getEmployeeNumberList();
            this.getCompletedStep();
            this.goBackToPageTop();
        },
        components: {
            loader,
            Hierarchy,
            vSelect,
            sidebar,
            Navigation
        },
        mounted() {
            this.isLoggedIn = !!localStorage.getItem("token");
        }
    }
    ;
</script>
<style>
    input[type="search"].vs__search::-webkit-input-placeholder {
        color: #000000;
        opacity: 0.5;
    }
</style>
