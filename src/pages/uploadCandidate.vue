<template>
    <!-- begin:: Content -->
    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid" id="uploadCandidate">
        <div class="kt-portlet" style="padding: 15px;">
            <div class="kt-portlet__body kt-portlet__body--fit">
                <div class="kt-wizard-v3" id="kt_wizard_v3" data-ktwizard-state="step-first">

                    <!--begin:Form-->
                    <form class="kt-form" id="kt_form">

                        <!--begin:Step 1-->
                        <div class="kt-wizard-v3__content" data-ktwizard-type="step-content" data-ktwizard-state="current">
                            <div class="kt-heading kt-heading--md">Add Candidate</div>
                            <div v-if="success" class="alert alert-success alert-dismissible fade show  kt-alert kt-alert--square kt-alert--air" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                </button>
                                <strong style="margin-right: 7px;">Add Candidate Success</strong> {{ success }}
                            </div>

                            <div v-if="error_description" class="alert alert-danger alert-dismissible fade show  kt-alert kt-alert--square kt-alert--air" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                </button>
                                <strong style="margin-right: 7px;">Errors</strong> {{ error_description }}
                            </div>

                            <div class="kt-separator kt-separator--height-xs"></div>
                            <div class="kt-form__section kt-form__section--first">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" name="user_name" v-model="form.user_name" value="" required>
                                    <span class="form-text text-muted">Please enter username</span>
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" name="email" v-model="form.email" value="" required>
                                    <span class="form-text text-muted">Please enter email</span>
                                </div>
                                <div class="form-group">
                                    <label>Adress</label>
                                    <input type="text" class="form-control" name="address" v-model="form.address" value="" required>
                                    <span class="form-text text-muted">Please enter address</span>
                                </div>
                                <div class="form-group">
                                    <label>Date of birth</label>
                                    <input type="tel" name="birth_day" class="form-control" v-model="form.birth_day" value="" required placeholder="dd-mm-yyyy" />
                                    <span class="form-text text-muted">Please enter birth day</span>
                                </div>
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <input type="number" class="form-control" name="phone" v-model="form.phone" value="" required min="0" maxlength="11">
                                    <span class="form-text text-muted">Please enter phone number</span>
                                </div>

                                <div class="form-group">
                                    <label>Chanel</label>
                                    <select class="form-control" name="chanel_id" v-model="form.chanel_id">
                                        <option v-for="chanel in chanels" :value="chanel.id">{{ chanel.chanel_name }}</option>
                                    </select>
                                </div>

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
                                    <label>User refferal</label>
                                    <select class="form-control" name="user_refferal_id" v-model="form.user_refferal_id">
                                        <option v-for="user_refferal in user_refferals" :value="user_refferal.id">{{ user_refferal.name }}</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>Content CV</label>
                                    <input v-on:change="formatCv()" type="file" class="form-control" name="content_cv" required ref="fileInput">
                                    <span class="form-text text-muted">Please choose cv file</span>
                                </div>

                                <div class="form-group">
                                    <label>CV Url</label>
                                    <input type="text" class="form-control" name="url_cv" v-model="form.url_cv" value="" required>
                                    <span class="form-text text-muted">Please enter url cv</span>
                                </div>
                            </div>
                        </div>

                        <!--end:Step 1-->

                        <!--begin:Form Actions -->
                        <div class="kt-form__actions">
                            <div @click="addCandidate" class="btn btn-brand btn-md btn-tall btn-wide btn-bold btn-upper" data-ktwizard-type="action-submit" style="cursor: pointer">
                                Done
                            </div>
                        </div>

                        <!--end:Form Actions -->
                    </form>
                    <!--end:Form-->
                </div>
            </div>
        </div>
        <template v-if="isModalVisible">
            <ModalUser
                v-show="isModalVisible"
                @close="closeModal"
                @submit="submitData"
                v-bind:users="user_refferals"
                v-bind:users_approve="users_approve"
            />
        </template>
    </div>
    <!-- end:: Content -->
</template>

<script>
import {mapGetters} from 'vuex';
import {API_URL} from "../config";
import axios from "axios";
import ModalUser from "../components/ModalUser";

export default {
    name: "uploadCandidate",
    components: {ModalUser},

    data() {
        return {
            form: {
                user_name: '',
                email: '',
                address: '',
                birth_day: '',
                phone: '',
                chanel_id: '',
                level_id: '',
                language_id: '',
                position_id: '',
                content_cv: '',
                url_cv: '',
                user_refferal_id: ''
            },
            file_cv: '',
            isModalVisible: false,
            users_approve: [],
            cadidate_id: ''
        }

        
    },
    computed: {
        ...mapGetters({
            success: 'message/getSuccess',
            error_description: 'message/getErrorDescription'
        }),
        chanels() {
            return this.$store.state.chanels;
        },
        languages() {
            return this.$store.state.languages;
        },
        levels() {
            return this.$store.state.levels;
        },
        positions() {
            return this.$store.state.positions;
        },
        user_refferals() {
            return this.$store.state.users;
        }
    },

    mounted() {
        this.$store.dispatch('getChanels');
        this.$store.dispatch('getLanguages');
        this.$store.dispatch('getLevels');
        this.$store.dispatch('getPositions');
        this.$store.dispatch('getUserRefferals');
    },
    methods: {
        validateForm() {
            if (!this.form.user_name || this.form.user_name === '') {
                alert('Please enter user_name');
                return false;
            }

            if (!this.form.email || this.form.email === '') {
                alert('Please enter email');
                return false;
            }

            if (!this.form.address || this.form.address === '') {
                alert('Please enter address');
                return false;
            }

            if (!this.form.birth_day || this.form.birth_day == '') {
                alert('Please enter birth day');
                return false;
            }

            if (!this.form.phone || this.form.phone === '') {
                alert('Please enter phone');
                return false;
            }

            if (!this.form.chanel_id || this.form.chanel_id === '') {
                alert('Please choose chanel');
                return false;
            }

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

            if (!this.form.content_cv || this.form.content_cv === null) {
                alert('Please choose a cv');
                return false;
            }

            if (!this.form.user_refferal_id || this.form.user_refferal_id === '') {
                alert('Please choose a user refferal');
                return false;
            }

            if (!this.form.url_cv || this.form.url_cv === '') {
                alert('Please enter a url cv');
                return false;
            }

            return true;
        },

        resetForm() {
            this.form.user_name = '';
            this.form.email = '';
            this.form.address = '';
            this.form.birth_day = '';
            this.form.phone = '';
            this.form.chanel_id = '';
            this.form.level_id = '';
            this.form.language_id = '';
            this.form.position_id = '';
            this.form.content_cv = null;
            this.form.user_refferal_id = '';
            this.form.url_cv = '';
            this.file_cv = '';
        },

        addCandidate() {
            if (!this.validateForm()) return;
            let vm = this;
            let callback = () => {
                vm.resetForm();
            };

            let file = vm.form.file_cv
            file = vm.$refs.fileInput.files[0];

            let formData = new FormData();
            formData.append('user_name', vm.form.user_name);
            formData.append('email', vm.form.email);
            formData.append('address', vm.form.address);
            formData.append('birth_day', vm.form.birth_day);
            formData.append('chanel_id', vm.form.chanel_id);
            formData.append('level_id', vm.form.level_id);
            formData.append('language_id', vm.form.language_id);
            formData.append('position_id', vm.form.position_id);
            formData.append('phone', vm.form.phone);
            formData.append('user_refferal_id', vm.form.user_refferal_id);
            formData.append('url_cv', vm.form.url_cv);
            formData.append('content_cv', file);

            axios.post(API_URL + '/candidates', 
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            .then(function (response) {
                vm.resetForm();
                vm.isModalVisible = true;
                vm.cadidate_id = response.data.result.id;
            })
            .catch(function (response) {
            });
        },

        formatCv() {
            let vm = this;
            let file = vm.form.file_cv
            file = vm.$refs.fileInput.files[0];
            let formData = new FormData();

            vm.form.content_cv = file
            formData.append('file_cv', file);
            axios.post(API_URL + '/candidates/format_cv', 
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            .then(function (response) {
                let data = response.data.result;
                vm.form.user_name = data.user_name;
                vm.form.email = data.email;
                vm.form.address = data.address;
                vm.form.birth_day = data.birth_day;
                vm.form.level_id = data.level_id;
                vm.form.language_id = data.language_id;
                vm.form.position_id = data.position_id;
            })
            .catch(function (error) {});
        },

        closeModal() {
            this.isModalVisible = false;
        },

        submitData(users_approve) {
            let vm = this;
            this.isModalVisible = false;
            this.users_approve = users_approve;
            const data = {
                content: "",
                candidate_id: vm.cadidate_id,
                user_names: vm.users_approve,
                number: 1,
                type_request: "evaluate_cv",
                status: "wait_approve_cv",
                requestable_type: "Evaluate"
            }
            axios.post(API_URL + '/requests', data,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            .then(function (response) {
                vm.users_approve = [];
            })
            .catch(function (error) {});
        }
    }
}
</script>

<style scoped>

</style>