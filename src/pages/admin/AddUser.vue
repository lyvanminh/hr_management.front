<template>
    <!-- begin:: Content -->
    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        <div class="kt-portlet" style="padding: 15px;">
            <div class="kt-portlet__body kt-portlet__body--fit">
                <div class="kt-wizard-v3" id="kt_wizard_v3" data-ktwizard-state="step-first">

                    <!--begin:Form-->
                    <form class="kt-form" id="kt_form">

                        <!--begin:Step 1-->
                        <div class="kt-wizard-v3__content" data-ktwizard-type="step-content" data-ktwizard-state="current">
                            <div class="kt-heading kt-heading--md">Thêm Account</div>
                            <div v-if="success" class="alert alert-success alert-dismissible fade show  kt-alert kt-alert--square kt-alert--air" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                </button>
                                <strong style="margin-right: 7px;">Chúc mừng ! </strong> {{ success }}
                            </div>

                            <div v-if="error_description" class="alert alert-danger alert-dismissible fade show  kt-alert kt-alert--square kt-alert--air" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                </button>
                                <strong style="margin-right: 7px;">Oh No ! </strong> {{ error_description }}
                            </div>

                            <div class="kt-separator kt-separator--height-xs"></div>
                            <div class="kt-form__section kt-form__section--first">
                                <div class="form-group">
                                    <label>Username:</label>
                                    <input type="text" class="form-control" name="username" v-model="form.username" value="" required>
                                    <span class="form-text text-muted">Please enter your username</span>
                                </div>
                                <div class="form-group">
                                    <label>Họ và Tên:</label>
                                    <input type="email" class="form-control" name="name" v-model="form.name" value="" required>
                                    <span class="form-text text-muted">We'll never share your name with anyone else</span>
                                </div>
                                <div class="form-group">
                                    <label>Password:</label>
                                    <input type="password" class="form-control" name="password" v-model="form.password" value="" required>
                                    <span class="form-text text-muted">Enter your password. Min 6 characters long.</span>
                                </div>

                                <div class="form-group">
                                    <label>Xác nhận Password:</label>
                                    <input type="password" class="form-control" name="password" v-model="form.confirm_password" value="" required>
                                    <span class="form-text text-muted">Enter your password. Min 6 characters long.</span>
                                </div>

                                <div class="form-group">
                                    <label>Vai trò:</label>
                                    <select class="form-control" name="role" v-model="form.role">
                                        <option v-for="role in USER_ROLE_CONST" :value="role">{{ USER_ROLE[role] }}</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>Trạng thái:</label>
                                    <select class="form-control" name="status" v-model="form.status">
                                        <option v-for="status in USER_STATUS_CONST" :value="status">{{ USER_STATUS[status] }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!--end:Step 1-->

                        <!--begin:Form Actions -->
                        <div class="kt-form__actions">
                            <div @click="addUser" class="btn btn-brand btn-md btn-tall btn-wide btn-bold btn-upper" data-ktwizard-type="action-submit" style="cursor: pointer">
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
import {USER_STATUS, USER_STATUS_CONST, USER_ROLE_CONST, USER_ROLE} from "../../config";
import {mapGetters} from 'vuex';

export default {
    name: "AddUser",
    data() {
        return {
            USER_STATUS_CONST: USER_STATUS_CONST,
            USER_STATUS: USER_STATUS,
            USER_ROLE_CONST: USER_ROLE_CONST,
            USER_ROLE: USER_ROLE,
            form: {
                username: '',
                name: '',
                password: '',
                confirm_password: '',
                status: '',
                role: ''
            }
        }
    },
    computed: {
        ...mapGetters({
            success: 'message/getSuccess',
            error_description: 'message/getErrorDescription'
        })
    },
    methods: {
        validateForm() {
            if (!this.form.username || this.form.username === '') {
                alert('Vui lòng nhập username');
                return false;
            }

            if (!this.form.name || this.form.name === '') {
                alert('Vui lòng nhập Họ và tên');
                return false;
            }

            if (!this.form.password || this.form.password === '') {
                alert('Vui lòng nhập password');
                return false;
            }

            if (!this.form.confirm_password || this.form.confirm_password !== this.form.password) {
                alert('Xác nhận mật khẩu không đúng');
                return false;
            }

            if (!this.form.role || this.form.role === '') {
                alert('Vui lòng chọn vai trò');
                return false;
            }

            if (!this.form.status || this.form.status === '') {
                alert('Vui lòng chọn trạng thái');
                return false;
            }

            return true;
        },

        resetForm() {
            this.form.username = '';
            this.form.name = '';
            this.form.password = '';
            this.form.confirm_password = '';
            this.form.confirm_password = '';
            this.form.status = '';
            this.form.role = '';
        },

        addUser() {
            if (!this.validateForm()) return;
            let vm = this;
            let callback = () => {
                vm.resetForm();
            };
            this.$store.commit('message/setSuccess', '');
            this.$store.commit('message/setErrorDescription', '');
            this.$store.dispatch('user/actAddUser', {
                body: vm.form,
                callback: callback
            });
        }
    }
}
</script>

<style scoped>

</style>