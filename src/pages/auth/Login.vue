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
                                <img src="assets/media/logos/hr_management.jpeg" alt="" style="width: 10%;"/>
                            </a>
                        </div>
                        <div class="kt-login-v1__signup">
                            <h4 class="kt-login-v1__heading">Don't have an account?</h4>
                            <router-link :to="setLinkTo('Signup')">
                                Sign Up
                            </router-link>
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
                                <h3 class="kt-login-v1__intro">Human Recruitment Management</h3>
                            </div>
                        </div>

                        <!--begin::Section-->

                        <!--begin::Separator-->
                        <div class="kt-login-v1__seaprator"></div>

                        <!--end::Separator-->

                        <!--begin::Wrapper-->
                        <div class="kt-login-v1__wrapper">
                            <div class="kt-login-v1__container">
                                <h3 class="kt-login-v1__title">
                                    Sign To Account
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
                                    <div class="form-group">
                                        <input @keyup.enter="trigger" class="form-control" type="password" v-model="form.password" placeholder="Password" name="password" autocomplete="off">
                                    </div>
                                    <div class="form-group">
                                        <input @keyup.enter="trigger" class="form-control" type="hidden" v-model="form.grant_type" name="grant_type">
                                    </div>
                                    <div class="kt-login-v1__actions">
                                        <router-link  class="kt-login-v1__forgot" :to="setLinkTo('forgot-password')">
                                            Forgot Password ?
                                        </router-link>
                                        <button @click="submit" ref="submit" class="btn btn-pill btn-elevate">Sign In</button>
                                    </div>
                                </div>

                                <!--end::Options-->
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
                // grant_type: "password",
                form: {
                    email: '',
                    password: '',
                    grant_type: 'password',
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
                this.$store.dispatch('auth/actLogin', {
                    form: this.form,
                    router: this.$router
                })
            },
            trigger() {
                this.$refs.submit.click();
            }
        }
    }
</script>