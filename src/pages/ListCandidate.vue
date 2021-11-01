<template>
    <div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">

    <!-- begin:: Subheader -->
    <div class="kt-subheader   kt-grid__item" id="kt_subheader">
        <div class="kt-container  kt-container--fluid ">
            <div class="kt-subheader__main">
                <h3 class="kt-subheader__title">Pagination Options Examples</h3>
                <span class="kt-subheader__separator kt-hidden"></span>
                <div class="kt-subheader__breadcrumbs">
                    <a href="#" class="kt-subheader__breadcrumbs-home"><i class="flaticon2-shelter"></i></a>
                    <span class="kt-subheader__breadcrumbs-separator"></span>
                    <a href="" class="kt-subheader__breadcrumbs-link">
                        Datatables </a>
                    <span class="kt-subheader__breadcrumbs-separator"></span>
                    <a href="" class="kt-subheader__breadcrumbs-link">
                        Datatables.net </a>
                    <span class="kt-subheader__breadcrumbs-separator"></span>
                    <a href="" class="kt-subheader__breadcrumbs-link">
                        Base </a>
                    <span class="kt-subheader__breadcrumbs-separator"></span>
                    <a href="" class="kt-subheader__breadcrumbs-link">
                        Pagination Options </a>

                    <!-- <span class="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">Active link</span> -->
                </div>
            </div>
            <div class="kt-subheader__toolbar">
                <div class="kt-subheader__wrapper">
                    <a href="#" class="btn btn-icon btn btn-label btn-label-brand btn-bold" data-toggle="kt-tooltip" title="Reports" data-placement="top"><i class="flaticon2-writing"></i></a>
                    <a href="#" class="btn btn-icon btn btn-label btn-label-brand btn-bold" data-toggle="kt-tooltip" title="Calendar" data-placement="top"><i class="flaticon2-hourglass-1"></i></a>
                    <div class="dropdown dropdown-inline" data-toggle="kt-tooltip" title="Quick actions" data-placement="top">
                        <a href="#" class="btn btn-icon btn btn-label btn-label-brand btn-bold" data-toggle="dropdown" data-offset="0px,0px" aria-haspopup="true" aria-expanded="false">
                            <i class="flaticon2-add-1"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                            <ul class="kt-nav kt-nav--active-bg" role="tablist">
                                <li class="kt-nav__item">
                                    <a href="" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-psd"></i>
                                        <span class="kt-nav__link-text">Document</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a class="kt-nav__link" role="tab">
                                        <i class="kt-nav__link-icon flaticon2-supermarket"></i>
                                        <span class="kt-nav__link-text">Message</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-shopping-cart"></i>
                                        <span class="kt-nav__link-text">Product</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a class="kt-nav__link" role="tab">
                                        <i class="kt-nav__link-icon flaticon2-chart2"></i>
                                        <span class="kt-nav__link-text">Report</span>
                                        <span class="kt-nav__link-badge">
                                            <span class="kt-badge kt-badge--danger kt-badge--inline kt-badge--rounded">pdf</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-sms"></i>
                                        <span class="kt-nav__link-text">Post</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-avatar"></i>
                                        <span class="kt-nav__link-text">Customer</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="dropdown dropdown-inline" data-toggle="kt-tooltip" title="Quick actions" data-placement="top">
                        <a href="#" class="btn btn btn-label btn-label-brand btn-bold" data-toggle="dropdown" data-offset="0 0" aria-haspopup="true" aria-expanded="false">
                            Reports
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <ul class="kt-nav kt-nav--active-bg" id="kt_nav_1" role="tablist">
                                <li class="kt-nav__item">
                                    <a href="" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-psd"></i>
                                        <span class="kt-nav__link-text">Products</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a class="kt-nav__link" role="tab" id="kt_nav_link_1">
                                        <i class="kt-nav__link-icon flaticon2-supermarket"></i>
                                        <span class="kt-nav__link-text">Customers</span>
                                        <span class="kt-nav__link-badge">
                                            <span class="kt-badge kt-badge--success kt-badge--inline kt-badge--rounded">6</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-shopping-cart"></i>
                                        <span class="kt-nav__link-text">Orders</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-shopping-cart"></i>
                                        <span class="kt-nav__link-text">Reports</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a class="kt-nav__link" role="tab" id="kt_nav_link_2">
                                        <i class="kt-nav__link-icon flaticon2-chart2"></i>
                                        <span class="kt-nav__link-text">Console</span>
                                        <span class="kt-nav__link-badge">
                                            <span class="kt-badge kt-badge--danger kt-badge--inline kt-badge--rounded">new</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="" class="kt-nav__link">
                                        <i class="kt-nav__link-icon flaticon2-sms"></i>
                                        <span class="kt-nav__link-text">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- end:: Subheader -->

    <!-- begin:: Content -->
    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        <div class="alert alert-light alert-elevate" role="alert">
            <div class="alert-icon"><i class="flaticon-warning kt-font-brand"></i></div>
            <div class="alert-text">
                The default page control presented by DataTables (forward and backward buttons with up to 7 page numbers in-between) is fine for most situations.
            </div>
        </div>
        <div class="kt-portlet kt-portlet--mobile">
            <div class="kt-portlet__head">
                <div class="kt-portlet__head-label">
                    <h3 class="kt-portlet__head-title">
                        Extended Pagination
                    </h3>
                </div>
            </div>
            <div class="kt-portlet__body">

                <!--begin: Datatable -->
                <table class="table table-striped- table-bordered table-hover table-checkable" id="kt_table_1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Birth day</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Chanel</th>
                            <th>Level</th>
                            <th>Language</th>
                            <th>Position</th>
                            <th>Content CV</th>
                            <th>Url CV</th>
                            <th>User refferal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="candidate in candidates">
                            <td>{{ candidate.id }}</td>
                            <td>{{ candidate.user_name }}</td>
                            <td>{{ candidate.birth_day }}</td>
                            <td>{{ candidate.email }}</td>
                            <td>{{ candidate.phone }}</td>
                            <td>{{ candidate.address }}</td>
                            <td>{{ candidate.chanel.chanel_name }}</td>
                            <td>{{ candidate.level.level }}</td>
                            <td>{{ candidate.language.language }}</td>
                            <td>{{ candidate.position.position }}</td>
                            <td>
                                <a :href="candidate.content_cv.url" target="_blank">
                                    <iframe :src="candidate.content_cv.url" style="width: 100%; height: 20%;"></iframe>
                                </a>
                            </td>
                            <td>{{ candidate.url_cv }}</td>
                            <td>{{ candidate.user.name }}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <!--end: Datatable -->
            </div>
        </div>
    </div>
    <!-- end:: Content -->
    </div>
</template>

<script>
    import {mapMutations, mapGetters, mapActions} from 'vuex';
    export default {
        name: "ListRequest",
        data() {
            return {
               
            }
        },
        computed: {
            ...mapGetters({
                success: 'message/getSuccess',
                error: 'message/getError',
                errors: 'message/getErrors',
                error_description: 'message/getErrorDescription',
            }),
            candidates() {
                return this.$store.state.candidates;
            }
        },
        mounted() {
            this.$store.dispatch('getListCandidate');
        },
        methods: {
            
        }
    }
</script>
