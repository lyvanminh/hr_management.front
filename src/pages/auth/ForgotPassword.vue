<template>
    <div class="full-height-screen" style="background-image: url(assets/media/misc/bg_1.jpg)">
        <!-- begin:: Page -->
        <div class="kt-grid kt-grid--ver kt-grid--root full-height-screen">
            <div class="kt-grid__item  kt-grid__item--fluid kt-grid kt-grid--hor kt-login-v1 full-height" id="kt_login_v1">

                <!--begin::Item-->
                <div class="kt-grid__item">

                    <!--begin::Heade-->
                    <div class="kt-login-v1__head">
                        <div class="kt-login-v1__logo">
                            <a href="#">
                                <img src="assets/media/logos/hr_management.jpeg" alt="" style="width: 35%;"/>
                            </a>
                        </div>
                        <div class="kt-login-v1__signup">
                            <h4 class="kt-login-v1__heading">Don't have an account?</h4>
                            <a href="#">Sign Up</a>
                        </div>
                    </div>

                    <!--begin::Head-->
                </div>

                <!--end::Item-->

                <!--begin::Item-->
                <div class="kt-grid__item  kt-grid kt-grid--ver  kt-grid__item--fluid">

                    <!--begin::Body-->
                    <div class="kt-login-v1__body">

                        <!--begin::Section-->
                        <div class="kt-login-v1__section">
                            <div class="kt-login-v1__info">
                                <h3 class="kt-login-v1__intro">Human Recruiment Management</h3>
                                <p>Everything will be okay</p>
                            </div>
                        </div>

                        <!--begin::Section-->

                        <!--begin::Separator-->
                        <div class="kt-login-v1__seaprator"></div>

                        <!--end::Separator-->

                        <!--begin::Wrapper-->
                        <div class="kt-login-v1__wrapper" v-if="$route.query.token">
                            <div class="kt-login-v1__container">
                                <h3 class="kt-login-v1__title">
                                    Forgot Password Your Account
                                </h3>

                                <!--begin::Form-->
                                <div v-if="error_description" class="alert alert-danger alert-dismissible fade show  kt-alert kt-alert--square kt-alert--air" role="alert">
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    </button>
                                    <strong style="margin-right: 7px;">Oh No ! </strong> {{ error_description }}
                                 </div>
                                <div class="kt-login-v1__form kt-form" autocomplete="off">
                                    <div class="form-group">
                                        <input @keyup.enter="trigger_forgot" class="form-control" type="password" v-model="form_forgot.password" placeholder="New Password" name="password" autocomplete="off">
                                    </div>
                                    <div class="kt-login-v1__actions">
                                        <a href="#" class="kt-login-v1__forgot">
                                            Login with account
                                        </a>
                                        <button @click="submit_reset" ref="submit" class="btn btn-pill btn-elevate">Forgot Password</button>
                                    </div>
                                </div>

                                <!--end::Form-->

                            </div>
                        </div>

                        <div class="kt-login-v1__wrapper" v-else>
                            <div class="kt-login-v1__container">
                                <h3 class="kt-login-v1__title">
                                    Forgot Password Your Account
                                </h3>

                                <!--begin::Form-->
                                <div v-if="error_description" class="alert alert-danger alert-dismissible fade show  kt-alert kt-alert--square kt-alert--air" role="alert">
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    </button>
                                    <strong style="margin-right: 7px;">Oh No ! </strong> {{ error_description }}
                                 </div>
                                <div class="kt-login-v1__form kt-form" autocomplete="off">
                                    <div class="form-group">
                                        <input @keyup.enter="trigger" class="form-control" type="text" v-model="form.email" placeholder="Email" name="email" autocomplete="off">
                                    </div>
                                    <div class="kt-login-v1__actions">
                                        <a href="#" class="kt-login-v1__forgot">
                                            Login with account
                                        </a>
                                        <button @click="submit" ref="submit" class="btn btn-pill btn-elevate">Forgot Password</button>
                                    </div>
                                </div>

                                <!--end::Form-->

                            </div>
                        </div>

                        <!--end::Wrapper-->
                    </div>

                    <!--begin::Body-->
                </div>

                <!--end::Item-->

                <!--begin::Item-->
                <div class="kt-grid__item">
                    <div class="kt-login-v1__footer">
                        <div class="kt-login-v1__menu">
                            <a href="#">Privacy</a>
                            <a href="#">Legal</a>
                            <a href="#">Contact</a>
                        </div>
                        <div class="kt-login-v1__copyright">
                            <a href="#">&copy; 2021 ToolHub</a>
                        </div>
                    </div>
                </div>

                <!--end::Item-->
            </div>
        </div>
        <!-- end:: Page -->
    </div>
</template>

<script>
    import {mapMutations, mapGetters, mapActions} from 'vuex';
    export default {
        data() {
            return {
                form: {
                    email: '',
                },
                form_forgot: {
                    password: '',
                    token: ''
                },
            }
        },
        computed: {
            ...mapGetters({
                success: 'message/getSuccess',
                error: 'message/getError',
                errors: 'message/getErrors',
                error_description: 'message/getErrorDescription',
            })
        },
        methods: {
            submit() {
                this.$store.dispatch('auth/actForgot', {
                    form: this.form
                })
            },
            trigger() {
                this.$refs.submit.click();
            },
            submit_reset() {
                this.form_forgot.token = this.$route.query.token
                console.log(this.form_forgot);
                this.$store.dispatch('auth/actResetPassword', {
                    form: this.form_forgot
                })
            },
            trigger_forgot() {
                this.$refs.submit.click();
            },
        }
    }
</script>