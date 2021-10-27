<template>

    <!-- begin:: Content -->
    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        <!--        <div class="alert alert-light alert-elevate" role="alert">-->
        <!--            <div class="alert-icon"><i class="flaticon-warning kt-font-brand"></i></div>-->
        <!--            <div class="alert-text">-->
        <!--                The Keen Datatable component supports local or remote data source. For remote data you can specify a remote data source that returns data in JSON/JSONP format. In this example the grid fetches its data from a remote JSON file.-->
        <!--                It also defines the schema model of the data source received from the remote data source. In addition to the visualization, the Datatable provides built-in support for operations over data such as sorting, filtering and paging-->
        <!--                performed in user browser(frontend).-->
        <!--            </div>-->
        <!--        </div>-->
        <div class="kt-portlet kt-portlet--mobile">
            <div class="kt-portlet__head kt-portlet__head--lg">
                <div class="kt-portlet__head-label">
                    <h3 class="kt-portlet__head-title">
                        User Manager ({{ users.totalElements }} Data)
                        <small></small>
                    </h3>
                </div>
                <div class="kt-portlet__head-toolbar">
                    <div class="kt-portlet__head-wrapper">
                        <a href="#" class="btn btn-clean kt-hidden">
                            Back to dashboard
                        </a>
                        <a href="#" class="btn btn-clean btn-bold btn-upper btn-font-sm kt-hidden">
                            <i class="la la-long-arrow-left"></i>
                            Back
                        </a>
                        <router-link v-if="user.role === 'ADMIN'" class="btn btn-default btn-bold btn-upper btn-font-sm" :to="setLinkTo('addUser')">
                            <i class="flaticon2-add-1"></i>
                            Add User
                        </router-link>
                        &nbsp;
                        <div class="dropdown dropdown-inline">
                            <button type="button" class="btn btn-default btn-bold btn-upper btn-font-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="flaticon2-soft-icons"></i> Actions
                            </button>
                            <div class="dropdown-menu dropdown-menu-right">
                                <ul class="kt-nav">
                                    <li class="kt-nav__section kt-nav__section--first">
                                        <span class="kt-nav__section-text">Quick Actions</span>
                                    </li>
                                    <li class="kt-nav__item">
                                        <a href="#" class="kt-nav__link">
                                            <i class="kt-nav__link-icon flaticon2-graph-1"></i>
                                            <span class="kt-nav__link-text">Statistics</span>
                                        </a>
                                    </li>
                                    <li class="kt-nav__item">
                                        <a href="#" class="kt-nav__link">
                                            <i class="kt-nav__link-icon flaticon2-calendar-4"></i>
                                            <span class="kt-nav__link-text">Events</span>
                                        </a>
                                    </li>
                                    <li class="kt-nav__item">
                                        <a href="#" class="kt-nav__link">
                                            <i class="kt-nav__link-icon flaticon2-layers-1"></i>
                                            <span class="kt-nav__link-text">Reports</span>
                                        </a>
                                    </li>
                                    <li class="kt-nav__item">
                                        <a href="#" class="kt-nav__link">
                                            <i class="kt-nav__link-icon flaticon2-graph"></i>
                                            <span class="kt-nav__link-text">Notifications</span>
                                        </a>
                                    </li>
                                    <li class="kt-nav__item">
                                        <a href="#" class="kt-nav__link">
                                            <i class="kt-nav__link-icon flaticon2-file-1"></i>
                                            <span class="kt-nav__link-text">Files</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kt-portlet__body">

                <!--begin: Search Form -->
                <div class="kt-form kt-fork--label-right kt-margin-t-20 kt-margin-b-10">
                    <div class="row align-items-center">
                        <div class="col-xl-12 order-2 order-xl-1">
                            <div class="row align-items-center">
                                <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
                                    <div class="kt-form__label">
                                        <label>Tìm kiếm:</label>
                                    </div>

                                    <div class="kt-input-icon kt-input-icon--left">
                                        <input v-model="form.query" type="text" class="form-control" placeholder="Search...">
                                        <span class="kt-input-icon__icon kt-input-icon__icon--left">
                                            <span><i class="la la-search"></i></span>
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
                                    <div class="kt-form__label">
                                        <label>Trạng thái:</label>
                                    </div>

                                    <div class="kt-input-icon kt-input-icon--left">
                                        <select v-model="form.status" type="text" class="form-control">
                                            <option value="">
                                                Tất cả
                                            </option>

                                            <option v-for="status in USER_STATUS_CONST" :value="status">
                                                {{ USER_STATUS[status] }}
                                            </option>

                                        </select>
                                        <span class="kt-input-icon__icon kt-input-icon__icon--left">
                                            <span><i class="la la-user"></i></span>
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-2 kt-margin-b-20-tablet-and-mobile center">
                                    <div class="kt-form__label">
                                        <label>.</label>
                                    </div>
                                    <button @click="doSearch" class="btn btn-primary">Tìm kiếm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--end: Search Form -->
            </div>
            <div class="kt-portlet__body kt-portlet__body--fit">

                <!--begin: Datatable -->
                <div class="kt_datatable">
                    <table class="kt-datatable__table table">
                        <thead class="kt-datatable__head">
                        <tr class="kt-datatable__row" style="left: 0px;">
                            <th data-field="id" class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check">
                                    <span style="width: 20px;"><label class="kt-checkbox kt-checkbox--single kt-checkbox--all kt-checkbox--solid">
                                        <input type="checkbox">&nbsp;<span></span></label></span>
                            </th>
                            <th data-field="created_at" class="kt-datatable__cell kt-datatable__cell--sort">
                                <span style="width: 182px;">Thời gian</span>
                            </th>
                            <th data-field="owner_name" class="kt-datatable__cell kt-datatable__cell--sort">
                                <span style="width: 182px;">Username</span>
                            </th>
                            <th data-field="data_id" class="kt-datatable__cell kt-datatable__cell--sort">
                                <span style="width: 182px;">Name</span>
                            </th>
                            <th data-field="business_id" class="kt-datatable__cell kt-datatable__cell--sort">
                                <span style="width: 182px;">Vai trò</span>
                            </th>
                            <th data-field="account_status" data-autohide-disabled="false" class="kt-datatable__cell kt-datatable__cell--sort">
                                <span style="width: 182px;">Trạng thái</span>
                            </th>
                            <th v-if="user.role === 'ADMIN'" data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell kt-datatable__cell--sort">
                                <span style="width: 110px;">Actions</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody :class="'kt-datatable__body ' + (loadingData ? 'loading-table' : '')" style="position: relative">
                        <TableLoadingView v-if="loadingData"/>
                        <tr v-for="(item, index) in users.content" :data-row="index" class="kt-datatable__row" style="left: 0px;">
                            <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check" data-field="id">
                                    <span style="width: 20px;">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--solid">
                                        <input type="checkbox" value="11">&nbsp;<span></span></label></span>
                            </td>
                            <td data-field="created_at" class="kt-datatable__cell">
                                <span style="width: 182px;">{{ item.created_at != null ? toDateString(item.created_at) : '' }}</span>
                            </td>
                            <td data-field="owner_name" class="kt-datatable__cell">
                                <span style="width: 182px;">{{ item.username }}</span>
                            </td>
                            <td data-field="data_id" class="kt-datatable__cell">
                                <span style="width: 182px;">{{ item.name }}</span>
                            </td>
                            <td data-field="id" class="kt-datatable__cell">
                                <span style="width: 182px;">{{ USER_ROLE[item.role] ? USER_ROLE[item.role] : item.role }}</span>
                            </td>
                            <td data-field="pay_info_str"  class="kt-datatable__cell">
                                <span style="width: 182px;">
                                    <span :class="'btn btn-bold btn-sm btn-font-sm btn-label-' + (USER_STATUS_COLOR[item.status] ? USER_STATUS_COLOR[item.status] : 'warning') + ' kt-badge--inline kt-badge--pill'">
                                            {{ USER_STATUS[item.status] }}
                                    </span>
                                </span>
                            </td>
                            <td v-if="user.role === 'ADMIN'" data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell">
                                <div style="min-width: 70px">
                                    <span style="overflow: visible; position: relative;">
                                    <router-link class="btn btn-sm btn-clean btn-icon btn-icon-md"
                                                 style="cursor: pointer" title="Edit" :to="getLink('edit-user/' + item.username)">
                                          <i class="la la-edit"></i>
                                    </router-link>
                                </span>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="col-md-12">
                        <Pagination v-if="users.totalPages > 1" :pagination="users" :goto-page="goToPage"/>
                    </div>
                </div>
                <!--end: Datatable -->
            </div>
        </div>
    </div>

    <!-- end:: Content -->
</template>

<script>
import TableLoadingView from "../../components/TableLoadingView";
import Pagination from "../../components/layouts/Pagination";
import {mapGetters} from "vuex";
import {USER_STATUS, USER_STATUS_CONST, USER_STATUS_COLOR, USER_ROLE} from "../../config";

export default {
    name: "UserManager",
    components: {TableLoadingView, Pagination},
    data() {
        return {
            USER_STATUS: USER_STATUS,
            USER_ROLE: USER_ROLE,
            USER_STATUS_CONST: USER_STATUS_CONST,
            USER_STATUS_COLOR: USER_STATUS_COLOR,
            page: 0,
            size: 10,
            form: {
                status: '',
                query: '',
                role: ''
            },
            form_final: {
                status: '',
                query: '',
                role: ''
            }
        }
    },
    computed: {
        ...mapGetters({
            user: 'user/getUser',
            users: 'user/getPageUsers',
            loadingData: 'loading/getLoadingData'
        })
    },
    mounted() {
        let vm = this;
        console.log('mounted');
        vm.goToPage(0);
    },
    methods: {
        goToPage(page) {
            console.log('goToPage: ' + page);
            let vm = this;
            let callback = () => {
                this.$store.commit('loading/setLoadingData', false);
            }

            this.$store.commit('loading/setLoadingData', true);
            this.$store.dispatch('user/actGetPageUsers', {
                page: page,
                size: vm.size,
                form: vm.form_final,
                callback: callback
            });
        },
        toDateString(date) {
            return this.$moment(date).format('HH:mm DD/MM/YYYY');
        },
        doSearch() {
            console.log('doSearch');
            this.form_final = this.form;
            this.goToPage(0)
        },
        getLink(link) {
            return "/" + (this.user.role === "ADMIN" ? "admin" : "employee")+ "/" + link;
        }
    }
}
</script>

<style scoped>

</style>