<template>
    <!-- begin:: Content -->
    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid" id="CreateRequestRecruitment">
        <div class="kt-portlet" style="padding: 15px;">
            <div class="kt-portlet__body kt-portlet__body--fit">
                <div class="kt-wizard-v3" id="kt_wizard_v3" data-ktwizard-state="step-first">

                    <!--begin:Form-->
                    <form class="kt-form" id="kt_form">

                        <!--begin:Step 1-->
                        <div class="kt-wizard-v3__content" data-ktwizard-type="step-content" data-ktwizard-state="current">
                            <div class="kt-heading kt-heading--md">Create Request Recruitment</div>
                            <div v-if="success" class="alert alert-success alert-dismissible fade show  kt-alert kt-alert--square kt-alert--air" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                </button>
                                <strong style="margin-right: 7px;">Create Request Recruitment</strong> {{ success }}
                            </div>

                            <div v-if="error_description" class="alert alert-danger alert-dismissible fade show  kt-alert kt-alert--square kt-alert--air" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                </button>
                                <strong style="margin-right: 7px;">Errors</strong> {{ error_description }}
                            </div>

                            <div class="kt-separator kt-separator--height-xs"></div>
                            <div class="kt-form__section kt-form__section--first">
                                <div class="form-group">
                                    <label>Level</label>
                                    <select class="form-control" name="level_id" v-model="form.level_id">
                                        <option v-for="level in levels" :value="level.id">{{ level.level }}</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>Language</label>
                                    <select class="form-control" name="language_id" v-model="form.language_id">
                                        <option v-for="language in languages" :value="language.id">{{ language.language }}</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>Position</label>
                                    <select class="form-control" name="position_id" v-model="form.position_id">
                                        <option v-for="position in positions" :value="position.id">{{ position.position }}</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Number</label>
                                    <input type="number" class="form-control" name="number" v-model="form.number" required min="0" maxlength="11">
                                    <span class="form-text text-muted">Please enter number person</span>
                                </div>
                            </div>
                        </div>

                        <!--end:Step 1-->

                        <!--begin:Form Actions -->
                        <div class="kt-form__actions">
                            <div @click="createRequestRecruitment()" class="btn btn-brand btn-md btn-tall btn-wide btn-bold btn-upper" data-ktwizard-type="action-submit" style="cursor: pointer">
                                Done
                            </div>
                        </div>

                        <!--end:Form Actions -->
                    </form>
                    <!--end:Form-->
                </div>
            </div>
        </div>
    </div>
    <!-- end:: Content -->
</template>

<script>
import {mapGetters} from 'vuex';
import {API_URL} from "../config";
import axios from "axios";

export default {
    name: "CreateRequestRecruitment",

    data() {
        return {
            form: {
                number: '',
                level_id: '',
                language_id: '',
                position_id: '',
            }
        }

        
    },
    computed: {
        ...mapGetters({
            success: 'message/getSuccess',
            error_description: 'message/getErrorDescription'
        }),
        languages() {
            return this.$store.state.languages;
        },
        levels() {
            return this.$store.state.levels;
        },
        positions() {
            return this.$store.state.positions;
        }
    },

    mounted() {
        this.$store.dispatch('getLanguages');
        this.$store.dispatch('getLevels');
        this.$store.dispatch('getPositions');
    },
    methods: {
        validateForm() {
            if (!this.form.level_id || this.form.level_id === '') {
                alert('Please choose level');
                return false;
            }

            if (!this.form.language_id || this.form.language_id === '') {
                alert('Please choose language');
                return false;
            }

            if (!this.form.position_id || this.form.position_id === '') {
                alert('Please choose position');
                return false;
            }

            return true;
        },

        resetForm() {
            this.form.level_id = '';
            this.form.language_id = '';
            this.form.position_id = '';
        },

        createRequestRecruitment() {
            if (!this.validateForm()) return;
            let vm = this;
            let callback = () => {
                vm.resetForm();
            };

            const data = {
                level_id: vm.form.level_id,
                language_id: vm.form.language_id,
                position_id: vm.form.position_id,
                requestable_type: "Recruitment",
                number: vm.form.number,
                type_request: "recruitment_request"
            }

            axios.post(API_URL + '/requests', 
                data,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            .then(function (response) {
                vm.resetForm();
            })
            .catch(function (response) {
            });
        }
    }
}
</script>

<style scoped>

</style>