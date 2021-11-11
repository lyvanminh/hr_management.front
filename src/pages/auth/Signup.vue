<template>
    <div class="full-height-screen" style="background-image: url(assets/media/misc/bg_1.jpg)">
        <!-- begin:: Page -->
        <div class="kt-grid kt-grid--ver kt-grid--root full-height-screen">
            <div class="kt-grid__item  kt-grid__item--fluid kt-grid kt-grid--hor kt-login-v1 full-height" id="kt_login_v1">

               <div class="kt-grid__item">
                    <!--begin::Heade-->
                    <div class="kt-login-v1__head">
                        <div class="kt-login-v1__logo">
                            <a href="#">
                                <img src="assets/media/logos/hr_management.jpeg" alt="" style="width: 10%;"/>
                            </a>
                        </div>
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
                                        Sign Up Account
                                    </h3>
                                    <!--begin::Form-->
                                    <div v-if="error_description" class="alert alert-danger alert-dismissible fade show  kt-alert kt-alert--square kt-alert--air" role="alert">
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        </button>
                                        <strong style="margin-right: 7px;">Oh No ! </strong> {{ error_description }}
                                    </div>
                                    <div v-if="success" class="alert alert-danger alert-dismissible fade show  kt-alert kt-alert--square kt-alert--air" role="alert">
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        </button>
                                        <strong style="margin-right: 7px;">{{ success }}</strong> 
                                    </div>
                                    <div class="kt-login-v1__form kt-form" autocomplete="off">
                                        <div class="form-group">
                                            <input @keyup.enter="trigger" class="form-control" type="text" v-model="form.email"  placeholder="Email" name="email" autocomplete="off">
                                        </div>
                                        <div class="form-group">
                                            <input @keyup.enter="trigger" class="form-control" type="password" v-model="form.password" placeholder="Password" name="password" autocomplete="off">
                                        </div>
                                        <div class="form-group">
                                            <input @keyup.enter="trigger" class="form-control" type="text" v-model="form.name" placeholder="Full name" name="name" autocomplete="off">
                                        </div>
                                        <div class="form-group">
                                            <input @keyup.enter="trigger" class="form-control" type="text" v-model="form.phone_number" placeholder="Phone number" name="phone_number" autocomplete="off">
                                        </div>
                                        <div class="form-group">
                                            <input @keyup.enter="trigger" class="form-control" type="text" v-model="form.birthday" placeholder="Date of birth" name="birthday" autocomplete="off">
                                        </div>
                                        <div class="kt-login-v1__actions">
                                            <button @click="submit" ref="submit" class="btn btn-pill btn-elevate">Sign In</button>
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
                    <div class="kt-grid__item" style="margin-top: 170px">
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
                    password: '',
                    fullname: '',
                    phonenumber: '',
                    phonenumber: '',
                    birthday: '',
                }
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
                this.$store.dispatch('auth/actSignup', {
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