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
                        Ads Manager ({{ adsData.totalElements }} Data)
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
                        <a href="#" class="btn btn-default btn-bold btn-upper btn-font-sm">
                            <i class="flaticon2-add-1"></i>
                            New Record
                        </a>
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

                                <div v-if="user.role === 'ADMIN'" class="col-md-2 kt-margin-b-20-tablet-and-mobile">
                                    <div class="kt-form__label">
                                        <label>Nhân viên:</label>
                                    </div>

                                    <div class="kt-input-icon kt-input-icon--left">
                                        <select v-model="form.user_id" type="text" class="form-control" placeholder="Nhân viên">
                                            <option value="0">
                                                Tất cả nhân viên
                                            </option>

                                            <option v-for="u in users" :value="u.id">
                                                {{ u.username }}
                                            </option>

                                        </select>
                                        <span class="kt-input-icon__icon kt-input-icon__icon--left">
                                            <span><i class="la la-user"></i></span>
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
                                    <div class="kt-form__label">
                                        <label>Trạng thái:</label>
                                    </div>

                                    <div class="kt-input-icon kt-input-icon--left">
                                        <select v-model="form.account_status" type="text" class="form-control" placeholder="Nhân viên">
                                            <option value="0">
                                                Tất cả trạng thái
                                            </option>
                                            <option v-for="accountStatus in accountStatusId" :value="accountStatus">
                                                {{ accountStatusText[accountStatus] }}
                                            </option>
                                        </select>
                                        <span class="kt-input-icon__icon kt-input-icon__icon--left">
                                            <span><i class="la la-info-circle"></i></span>
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
                                    <div class="kt-form__label">
                                        <label>Thời gian bắt đầu:</label>
                                    </div>

                                    <div class="kt-input-icon kt-input-icon--left">
                                        <div class="kt-form__control">
                                            <input v-model="form.created_at_from" class="form-control" type="datetime-local" value="">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
                                    <div class="kt-form__label">
                                        <label>Thời gian kết thúc:</label>
                                    </div>

                                    <div class="kt-input-icon kt-input-icon--left">
                                        <div class="kt-form__control">
                                            <input v-model="form.created_at_to" class="form-control" type="datetime-local" value="">
                                        </div>
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
                        <div class="col-xl-4 order-1 order-xl-2 kt-align-right">
                            <a href="#" class="btn btn-default kt-hidden">
                                <i class="la la-cart-plus"></i> New Order
                            </a>
                            <div class="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"></div>
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
                                    <span style="width: 182px;">NV</span>
                                </th>
                                <th data-field="data_id" class="kt-datatable__cell kt-datatable__cell--sort">
                                    <span style="width: 182px;">UID</span>
                                </th>
                                <th data-field="id" class="kt-datatable__cell kt-datatable__cell--sort">
                                    <span style="width: 182px;">AdAccount ID</span>
                                </th>
                                <th data-field="business_id" class="kt-datatable__cell kt-datatable__cell--sort">
                                    <span style="width: 182px;">BM ID</span>
                                </th>
                                <th data-field="name" class="kt-datatable__cell kt-datatable__cell--sort">
                                    <span style="width: 182px;">Name</span>
                                </th>
                                <th data-field="ad_created_at" data-autohide-disabled="false" class="kt-datatable__cell kt-datatable__cell--sort">
                                    <span style="width: 182px;">Năm tạo</span>
                                </th>
                                <th data-field="currency" data-autohide-disabled="false" class="kt-datatable__cell kt-datatable__cell--sort">
                                    <span style="width: 182px;">Tiền tệ</span>
                                </th>
                                <th data-field="threshold_str" data-autohide-disabled="false" class="kt-datatable__cell kt-datatable__cell--sort">
                                    <span style="width: 182px;">Ngưỡng</span>
                                </th>
                                <th data-field="limit_value" data-autohide-disabled="false" class="kt-datatable__cell kt-datatable__cell--sort">
                                    <span style="width: 182px;">Limit</span>
                                </th>
                                <th data-field="pay_info_str" data-autohide-disabled="false" class="kt-datatable__cell kt-datatable__cell--sort">
                                    <span style="width: 182px;">Card</span>
                                </th>
                                <th data-field="account_status" data-autohide-disabled="false" class="kt-datatable__cell kt-datatable__cell--sort">
                                    <span style="width: 182px;">Trạng thái</span>
                                </th>
<!--                                <th data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell kt-datatable__cell&#45;&#45;sort">-->
<!--                                    <span style="width: 110px;">Actions</span>-->
<!--                                </th>-->
                            </tr>
                        </thead>
                        <tbody :class="'kt-datatable__body ' + (loadingData ? 'loading-table' : '')" style="position: relative">
                            <TableLoadingView v-if="loadingData"/>
                            <tr v-for="(item, index) in adsData.content" :data-row="index" class="kt-datatable__row" style="left: 0px;">
                                <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check" data-field="id">
                                    <span style="width: 20px;">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--solid">
                                        <input type="checkbox" value="11">&nbsp;<span></span></label></span>
                                </td>
                                <td data-field="created_at" class="kt-datatable__cell">
                                    <span style="width: 182px;">{{ item.created_at != null ? toDateString(item.created_at) : '' }}</span>
                                </td>
                                <td data-field="owner_name" class="kt-datatable__cell">
                                    <span style="width: 182px;">{{ item.owner ? item.owner.username : ''}}</span>
                                </td>
                                <td data-field="data_id" class="kt-datatable__cell">
                                    <span style="width: 182px;">{{ item.data_id }}</span>
                                </td>
                                <td data-field="id" class="kt-datatable__cell">
                                    <span style="width: 182px;">{{ item.id }}</span>
                                </td>
                                <td data-field="personal" class="kt-datatable__cell">
                                    <span style="width: 182px;">{{ item.business_id != null ? (item.business_id  + '(' + item.business_name + ')') : '' }}</span>
                                </td>
                                <td data-field="name" class="kt-datatable__cell">
                                    <span style="width: 182px;">{{ item.name }}</span>
                                </td>
                                <td data-field="ad_created_at" class="kt-datatable__cell">
                                    <span style="width: 182px;">{{ item.ad_created_at }}</span>
                                </td>
                                <td data-field="currency" class="kt-datatable__cell">
                                    <span style="width: 182px;">{{ item.currency }}</span>
                                </td>
                                <td data-field="threshold" class="kt-datatable__cell">
                                    <span style="width: 182px;">{{ item.threshold_str !== "" ? (item.threshold_str + ' ' + item.currency) : '' }}</span>
                                </td>
                                <td data-field="limit_value"  class="kt-datatable__cell">
                                    <span style="width: 182px;">{{ item.limit_value }}</span>
                                </td>
                                <td data-field="pay_info_str"  class="kt-datatable__cell">
                                    <span style="width: 182px;">{{ item.pay_info_str }}</span>
                                </td>
                                <td data-field="account_status" class="kt-datatable__cell">
                                    <span style="width: 182px;"><span :class="'btn btn-bold btn-sm btn-font-sm btn-label-' + (item.account_status < accountStatusColor.length ? accountStatusColor[item.account_status] : 'warning') + ' kt-badge--inline kt-badge--pill'">
                                        {{ item.account_status < accountStatusText.length ? accountStatusText[item.account_status] : item.account_status }}
                                    </span></span>
                                </td>
<!--                                <td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell">-->
<!--                                    <span style="overflow: visible; position: relative; width: 110px;">-->
<!--                                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">-->
<!--                                            <i class="la la-edit"></i>-->
<!--                                        </a>-->
<!--                                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">-->
<!--                                            <i class="la la-trash"></i>-->
<!--                                        </a>-->
<!--                                    </span>-->
<!--                                </td>-->
                            </tr>
                        </tbody>
                    </table>
                    <div class="col-md-12">
                        <Pagination v-if="adsData.totalPages > 1" :pagination="adsData" :goto-page="goToPage"/>
                    </div>
                </div>
                <!--end: Datatable -->
            </div>
        </div>
    </div>

    <!-- end:: Content -->
</template>

<script>
import Pagination from "../../components/layouts/Pagination";

import {mapGetters} from 'vuex';
import TableLoadingView from "../../components/TableLoadingView";

export default {
    name: "AdsManager",
    components: {TableLoadingView, Pagination},
    data() {
        return {
            page: 0,
            size: 10,
            accountStatusText: ['', 'Active', 'Disabled', 'Unsettled', 'Pending Review', 'In Grace Period', 'Temp Unavailable', 'Pending Closure'],
            accountStatusColor: ['', 'success', 'danger', 'warning', 'primary', 'primary', 'danger', 'warning'],
            accountStatusId: [1, 2, 3, 4, 5, 6, 7],
            headerData: ['STT', 'NV', 'UID', 'AcctId', 'Name', 'Năm tạo', 'Loại', 'Tiền tệ', 'Số dư TT', 'Balance', 'Ngưỡng', 'Chi tiêu', 'Limit/Day', 'Ngưỡng tối đa', 'PTTT'],
            form: {
                user_id: 0,
                query: '',
                created_at_from: '',
                created_at_to: '',
                account_status: 0
            },
            form_final: {
                user_id: 0,
                query: '',
                created_at_from: '',
                created_at_to: '',
                account_status: 0
            }
        }
    },
    computed: {
        ...mapGetters({
            adsData: 'ads/getAdsData',
            users: 'user/getUsers',
            user: 'user/getUser',
            loadingData: 'loading/getLoadingData'
        })
    },
    mounted() {
        let vm = this;
        console.log('mounted');
        vm.goToPage(0);
        this.$store.dispatch('user/actUsers');
    },
    methods: {
        goToPage(page) {
            console.log('goToPage: ' + page);
            let vm = this;
            let callback = () => {
                this.$store.commit('loading/setLoadingData', false);
            }

            this.$store.commit('loading/setLoadingData', true);
            // this.$store.dispatch('ads/actGetAdsData', {
            //     page: page,
            //     size: vm.size,
            //     form: vm.form_final,
            //     callback: callback
            // });
        },
        toDateString(date) {
            return this.$moment(date).format('HH:mm DD/MM/YYYY');
        },
        doSearch() {
            console.log('doSearch');
            this.form_final = this.form;
            this.goToPage(0)
        }
    }
}
</script>

<style scoped>

</style>