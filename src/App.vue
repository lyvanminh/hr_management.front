<template>
    <div id="app">
        <template v-if="$route.meta.not_sidebar">
            <router-view :key="$route.fullPath"></router-view>
        </template>
        <template v-else>
            <!-- begin:: Root -->
            <HeaderMobile/>
            <div class="kt-grid kt-grid--hor kt-grid--root">
                <!-- begin:: Page -->
                <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
                    <button class="kt-aside-close " id="kt_aside_close_btn"><i class="la la-close"></i></button>
                    <Sidebar/>

                    <!-- begin:: Wrapper -->
                    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                        <HeaderMain/>
                        <div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"  id="kt_content">
                            <SubHeader/>
                            <!-- begin:: Content -->
                            <router-view :key="$route.fullPath"></router-view>
                            <!-- end:: Content -->
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Sidebar from "./components/layouts/Sidebar";
import HeaderMobile from "./components/layouts/HeaderMobile";
import SubHeader from "./components/layouts/SubHeader";
import HeaderMain from "./components/layouts/HeaderMain";
import AdsManager from "./pages/admin/AdsManager";

export default {
    name: 'App',
    components: {
        HeaderMain,
        SubHeader,
        Sidebar, HeaderMobile
    },

    computed: {
        ...mapGetters({
            loading: 'loading/getLoading',
            user: 'user/getUser'
        }),
        token() {
            return localStorage && localStorage.getItem('token')
        }
    }
}
</script>

