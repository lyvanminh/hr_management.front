<template>	<div class="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop" id="kt_aside">

    <!-- begin::Aside Brand -->
    <div class="kt-aside__brand kt-grid__item " id="kt_aside_brand">
        <div class="kt-aside__brand-logo">
            <a href="">
                <img alt="Logo" src="assets/media/logos/hr_management.jpeg" style="width: 20%" />
            </a>
        </div>
        <div class="kt-aside__brand-tools">
            <button class="kt-aside__brand-aside-toggler kt-aside__brand-aside-toggler--left" id="kt_aside_toggler"><span></span></button>
        </div>
    </div>

    <!-- end:: Aside Brand -->

    <!-- begin:: Aside Menu -->
    <div class="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
        <div id="kt_aside_menu" class="kt-aside-menu " data-ktmenu-vertical="1" data-ktmenu-scroll="1" data-ktmenu-dropdown-timeout="500">
            <ul class="kt-menu__nav ">

                <!-- <li :class="'kt-menu__item ' + checkActive('Dashboard')" aria-haspopup="true">
                    <router-link class="kt-menu__link" :to="setLinkTo('Dashboard')">
                        <i class="kt-menu__link-icon flaticon-diagram"></i>
                        <span class="kt-menu__link-text">Dashboard</span>
                    </router-link>
                </li> -->

                <li class="kt-menu__section ">
                    <h4 class="kt-menu__section-text">Resources</h4>
                    <i class="kt-menu__section-icon flaticon-more-v2"></i>
                </li>
                <!-- <li :class="'kt-menu__item ' + checkActive('uploadCandidate')" aria-haspopup="true">
                    <router-link class="kt-menu__link" :to="setLinkTo('uploadCandidate')">
                        <i class="kt-menu__link-icon flaticon-price-tag"></i>
                        <span class="kt-menu__link-text">Upload CV</span>
                    </router-link>
                </li> -->

                <li :class="'kt-menu__item ' + checkActive('ListRequest')" aria-haspopup="true">
                    <router-link class="kt-menu__link" :to="setLinkTo('ListRequest')">
                        <i class="kt-menu__link-icon flaticon2-list-3"></i>
                        <span class="kt-menu__link-text">List Request</span>
                    </router-link>
                </li>

                <li :class="'kt-menu__item ' + checkActive('ListCandidate' || 'uploadCandidate')" aria-haspopup="true">
                    <router-link class="kt-menu__link" :to="setLinkTo('ListCandidate')">
                        <i class="kt-menu__link-icon flaticon2-list-3"></i>
                        <span class="kt-menu__link-text">List Candidate</span>
                    </router-link>
                </li>


                <li :class="'kt-menu__item ' + checkActive('BmManager')" aria-haspopup="true">
                    <router-link class="kt-menu__link" :to="setLinkTo('BmManager')">
                        <i class="kt-menu__link-icon flaticon-time-2"></i>
                        <span class="kt-menu__link-text">BM Data</span>
                    </router-link>
                </li>

                <li :class="'kt-menu__item ' + checkActive('DataViaManager')" aria-haspopup="true">
                    <router-link class="kt-menu__link" :to="setLinkTo('DataViaManager')">
                        <i class="kt-menu__link-icon flaticon-profile"></i>
                        <span class="kt-menu__link-text">Via Data</span>
                    </router-link>
                </li>

                <li class="kt-menu__section ">
                    <h4 class="kt-menu__section-text">Management</h4>
                    <i class="kt-menu__section-icon flaticon-more-v2"></i>
                </li>

                <li :class="'kt-menu__item ' + checkActive('UserLog')" aria-haspopup="true">
                    <router-link class="kt-menu__link" :to="setLinkTo('UserLog')">
                        <i class="kt-menu__link-icon flaticon-doc"></i>
                        <span class="kt-menu__link-text">Logs</span>
                    </router-link>
                </li>

                <li :class="'kt-menu__item ' + checkActive(['UserManager', 'AddUser', 'EditUser'])" aria-haspopup="true">
                    <router-link class="kt-menu__link" :to="setLinkTo('UserManager')">
                        <i class="kt-menu__link-icon flaticon-customer"></i>
                        <span class="kt-menu__link-text">User</span>
                    </router-link>
                </li>

                <li :class="'kt-menu__item ' + checkActive('UserRank')" aria-haspopup="true">
                    <router-link class="kt-menu__link" :to="setLinkTo('UserRank')">
                        <i class="kt-menu__link-icon flaticon-security"></i>
                        <span class="kt-menu__link-text">Ranking</span>
                    </router-link>
                </li>

                <li :class="'kt-menu__item ' + checkActive('ApiKey')" aria-haspopup="true">
                    <router-link class="kt-menu__link" :to="setLinkTo('ApiKey')">
                        <i class="kt-menu__link-icon flaticon2-gear"></i>
                        <span class="kt-menu__link-text">API Key</span>
                    </router-link>
                </li>

<!--                <li :class="'kt-menu__item ' + checkActive('Settings')" aria-haspopup="true">-->
<!--                    <router-link class="kt-menu__link" :to="setLinkTo('Settings')">-->
<!--                        <i class="kt-menu__link-icon flaticon2-gear"></i>-->
<!--                        <span class="kt-menu__link-text">Settings</span>-->
<!--                    </router-link>-->
<!--                </li>-->

            </ul>
        </div>
    </div>

    <!-- end:: Aside Menu -->

    <!-- begin:: Aside Footer -->
    <div class="kt-aside__footer kt-grid__item" id="kt_aside_footer">
        <div class="kt-aside__footer-nav">
            <div class="kt-aside__footer-item">
                <a href="#" class="btn btn-icon"><i class="flaticon2-gear"></i></a>
            </div>
            <div class="kt-aside__footer-item">
                <a href="#" class="btn btn-icon"><i class="flaticon2-cube"></i></a>
            </div>
            <div class="kt-aside__footer-item">
                <a href="#" class="btn btn-icon"><i class="flaticon2-bell-alarm-symbol"></i></a>
            </div>
            <div class="kt-aside__footer-item">
                <button type="button" class="btn btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="flaticon2-add"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-left">
                    <ul class="kt-nav">
                        <li class="kt-nav__section kt-nav__section--first">
                            <span class="kt-nav__section-text">Export Tools</span>
                        </li>
                        <li class="kt-nav__item">
                            <a href="#" class="kt-nav__link">
                                <i class="kt-nav__link-icon la la-print"></i>
                                <span class="kt-nav__link-text">Print</span>
                            </a>
                        </li>
                        <li class="kt-nav__item">
                            <a href="#" class="kt-nav__link">
                                <i class="kt-nav__link-icon la la-copy"></i>
                                <span class="kt-nav__link-text">Copy</span>
                            </a>
                        </li>
                        <li class="kt-nav__item">
                            <a href="#" class="kt-nav__link">
                                <i class="kt-nav__link-icon la la-file-excel-o"></i>
                                <span class="kt-nav__link-text">Excel</span>
                            </a>
                        </li>
                        <li class="kt-nav__item">
                            <a href="#" class="kt-nav__link">
                                <i class="kt-nav__link-icon la la-file-text-o"></i>
                                <span class="kt-nav__link-text">CSV</span>
                            </a>
                        </li>
                        <li class="kt-nav__item">
                            <a href="#" class="kt-nav__link">
                                <i class="kt-nav__link-icon la la-file-pdf-o"></i>
                                <span class="kt-nav__link-text">PDF</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="kt-aside__footer-item">
                <a href="#" class="btn btn-icon"><i class="flaticon2-calendar-2"></i></a>
            </div>
        </div>
    </div>

    <!-- end:: Aside Footer-->
</div>

    <!-- end:: Aside -->
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: "Sidebar",
    computed: {
        ...mapGetters({
            user: 'user/getUser'
        })
    },
    methods: {
        checkActive(routesName) {
            if (typeof routesName === 'string') {
                return this.$route.name === routesName ? 'kt-menu__item--active' : '';
            }

            return routesName.indexOf(this.$route.name) >= 0 ? 'kt-menu__item--active' : '';
        }
    }
}
</script>

<style scoped>

</style>