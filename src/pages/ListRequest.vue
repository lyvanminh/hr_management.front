<template>
    <div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
        <!-- begin:: Subheader -->
        <div class="kt-subheader   kt-grid__item" id="kt_subheader">
            <div class="kt-container  kt-container--fluid ">
                <div class="kt-subheader__main">
                    <h3 class="kt-subheader__title">Inbox</h3>
                    <span class="kt-subheader__separator kt-hidden"></span>
                    <div class="kt-subheader__breadcrumbs">
                        <a href="#" class="kt-subheader__breadcrumbs-home"><i class="flaticon2-shelter"></i></a>
                        <span class="kt-subheader__breadcrumbs-separator"></span>
                        <a href="" class="kt-subheader__breadcrumbs-link">
                            Custom </a>
                        <span class="kt-subheader__breadcrumbs-separator"></span>
                        <a href="" class="kt-subheader__breadcrumbs-link">
                            Apps </a>
                        <span class="kt-subheader__breadcrumbs-separator"></span>
                        <a href="" class="kt-subheader__breadcrumbs-link">
                            Inbox </a>

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

            <!--Begin::Inbox-->
            <div class="kt-grid kt-grid--desktop kt-grid--ver-desktop  kt-inbox" id="kt_inbox">

                <!--Begin::Aside Mobile Toggle-->
                <button class="kt-inbox__aside-close" id="kt_inbox_aside_close">
                    <i class="la la-close"></i>
                </button>

                <!--End:: Aside Mobile Toggle-->

                <!--Begin:: Inbox Aside-->
                <div class="kt-grid__item   kt-portlet  kt-inbox__aside" id="kt_inbox_aside">
                    <button type="button" class="btn btn-brand  btn-upper btn-bold  kt-inbox__compose" data-toggle="modal" data-target="#kt_inbox_compose">
                        <i class="flaticon2-send-1"></i> new message
                    </button>
                    <div class="kt-inbox__nav">
                        <ul class="kt-nav">
                            <li class="kt-nav__item kt-nav__item--active">
                                <a href="#" class="kt-nav__link" data-action="list" data-type="inbox">
                                    <i class="kt-nav__link-icon flaticon2-mail"></i>
                                    <span class="kt-nav__link-text">Inbox</span>
                                    <span class="kt-nav__link-badge">
                                        <span class="kt-badge kt-badge--unified-success kt-badge--md kt-badge--rounded kt-badge--boldest">3</span>
                                    </span>
                                </a>
                            </li>
                            <li class="kt-nav__item">
                                <a href="#" class="kt-nav__link" data-action="list" data-type="marked">
                                    <i class="kt-nav__link-icon flaticon-star"></i>
                                    <span class="kt-nav__link-text">Marked</span>
                                </a>
                            </li>
                            <li class="kt-nav__item">
                                <a href="#" class="kt-nav__link" data-action="list" data-type="draft">
                                    <i class="kt-nav__link-icon flaticon2-writing"></i>
                                    <span class="kt-nav__link-text">Draft</span>
                                    <span class="kt-nav__link-badge">
                                        <span class="kt-badge kt-badge--unified-warning kt-badge--md kt-badge--rounded kt-badge--boldest">1</span>
                                    </span>
                                </a>
                            </li>
                            <li class="kt-nav__item">
                                <a href="#" class="kt-nav__link" data-action="list" data-type="sent">
                                    <i class="kt-nav__link-icon flaticon2-mail-1"></i>
                                    <span class="kt-nav__link-text">Sent</span>
                                </a>
                            </li>
                            <li class="kt-nav__item">
                                <a href="#" class="kt-nav__link" data-action="list" data-type="trash">
                                    <i class="kt-nav__link-icon flaticon2-rubbish-bin"></i>
                                    <span class="kt-nav__link-text">Trash</span>
                                </a>
                            </li>
                            <li class="kt-nav__item kt-margin-t-30">
                                <a href="#" class="kt-nav__link">
                                    <i class="kt-nav__link-icon fa fa-genderless kt-font-warning"></i>
                                    <span class="kt-nav__link-text">Custom Work</span>
                                </a>
                            </li>
                            <li class="kt-nav__item">
                                <a href="#" class="kt-nav__link">
                                    <i class="kt-nav__link-icon fa fa-genderless kt-font-success"></i>
                                    <span class="kt-nav__link-text">Partnership</span>
                                </a>
                            </li>
                            <li class="kt-nav__item">
                                <a href="#" class="kt-nav__link">
                                    <i class="kt-nav__link-icon fa fa-genderless kt-font-info"></i>
                                    <span class="kt-nav__link-text">In Progres</span>
                                </a>
                            </li>
                            <li class="kt-nav__item">
                                <a href="#" class="kt-nav__link">
                                    <i class="kt-nav__link-icon fa flaticon2-plus"></i>
                                    <span class="kt-nav__link-text">Add Label</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!--End::Aside-->

                <!--Begin:: Inbox List-->
                <div class="kt-grid__item kt-grid__item--fluid    kt-portlet    kt-inbox__list kt-inbox__list--shown" id="kt_inbox_list">
                    <div class="kt-portlet__head">
                        <div class="kt-inbox__toolbar kt-inbox__toolbar--extended">
                            <div class="kt-inbox__actions kt-inbox__actions--expanded">
                                <div class="kt-inbox__check">
                                    <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                        <input type="checkbox">
                                        <span></span>
                                    </label>
                                    <div class="btn-group">
                                        <button type="button" class="kt-inbox__icon kt-inbox__icon--light kt-inbox__icon--sm" data-toggle="dropdown">
                                            <i class="flaticon2-down"></i>
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-left dropdown-menu-fit dropdown-menu-xs">
                                            <ul class="kt-nav">
                                                <li class="kt-nav__item kt-nav__item--active">
                                                    <a href="#" class="kt-nav__link">
                                                        <span class="kt-nav__link-text">All</span>
                                                    </a>
                                                </li>
                                                <li class="kt-nav__item">
                                                    <a href="#" class="kt-nav__link">
                                                        <span class="kt-nav__link-text">Read</span>
                                                    </a>
                                                </li>
                                                <li class="kt-nav__item">
                                                    <a href="#" class="kt-nav__link">
                                                        <span class="kt-nav__link-text">Unread</span>
                                                    </a>
                                                </li>
                                                <li class="kt-nav__item">
                                                    <a href="#" class="kt-nav__link">
                                                        <span class="kt-nav__link-text">Starred</span>
                                                    </a>
                                                </li>
                                                <li class="kt-nav__item">
                                                    <a href="#" class="kt-nav__link">
                                                        <span class="kt-nav__link-text">Unstarred</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="button" class="kt-inbox__icon" data-toggle="kt-tooltip" title="Reload list">
                                        <i class="flaticon2-refresh-button"></i>
                                    </button>
                                </div>
                                <div class="kt-inbox__panel">
                                    <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="Archive">
                                        <i class="flaticon2-layers-1"></i>
                                    </button>
                                    <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="Spam">
                                        <i class="flaticon2-information"></i>
                                    </button>
                                    <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="Delete">
                                        <i class="flaticon2-rubbish-bin"></i>
                                    </button>
                                    <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="Mark as read">
                                        <i class="flaticon2-writing"></i>
                                    </button>
                                    <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="Move">
                                        <i class="flaticon2-expand"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="kt-inbox__search">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search">
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <i class="flaticon2-magnifier-tool"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="kt-inbox__controls">
                                <div class="kt-inbox__pages" data-toggle="kt-tooltip" title="Records per page">
                                    <span class="kt-inbox__perpage" data-toggle="dropdown">1 - 50 of 235</span>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-fit dropdown-menu-xs">
                                        <ul class="kt-nav">
                                            <li class="kt-nav__item">
                                                <a href="#" class="kt-nav__link">
                                                    <span class="kt-nav__link-text">20 per page</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item kt-nav__item--active">
                                                <a href="#" class="kt-nav__link">
                                                    <span class="kt-nav__link-text">50 par page</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item">
                                                <a href="#" class="kt-nav__link">
                                                    <span class="kt-nav__link-text">100 per page</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" title="Previose page">
                                    <i class="flaticon2-left-arrow"></i>
                                </button>
                                <button class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" title="Next page">
                                    <i class="flaticon2-right-arrow"></i>
                                </button>
                                <div class="kt-inbox__sort" data-toggle="kt-tooltip" title="Sort">
                                    <button type="button" class="kt-inbox__icon" data-toggle="dropdown">
                                        <i class="flaticon2-console"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-fit dropdown-menu-xs">
                                        <ul class="kt-nav">
                                            <li class="kt-nav__item kt-nav__item--active">
                                                <a href="#" class="kt-nav__link">
                                                    <span class="kt-nav__link-text">Newest</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item">
                                                <a href="#" class="kt-nav__link">
                                                    <span class="kt-nav__link-text">Olders</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item">
                                                <a href="#" class="kt-nav__link">
                                                    <span class="kt-nav__link-text">Unread</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="btn-group" data-toggle="kt-tooltip" title="Settings">
                                    <button type="button" class="kt-inbox__icon" data-toggle="dropdown">
                                        <i class="flaticon-more-1"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-fit dropdown-menu-md">

                                        <!--begin::Nav-->
                                        <ul class="kt-nav">
                                            <li class="kt-nav__head">
                                                Export Options
                                                <i class="flaticon2-information" data-toggle="kt-tooltip" data-placement="right" title="Click to learn more..."></i>
                                            </li>
                                            <li class="kt-nav__separator"></li>
                                            <li class="kt-nav__item">
                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-drop"></i>
                                                    <span class="kt-nav__link-text">Users</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item">
                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-calendar-8"></i>
                                                    <span class="kt-nav__link-text">Reports</span>
                                                    <span class="kt-nav__link-badge">
                                                        <span class="kt-badge kt-badge--bold kt-badge--danger">9</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item">
                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-drop"></i>
                                                    <span class="kt-nav__link-text">Statements</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__item">
                                                <a href="#" class="kt-nav__link">
                                                    <i class="kt-nav__link-icon flaticon2-new-email"></i>
                                                    <span class="kt-nav__link-text">Customer Support</span>
                                                </a>
                                            </li>
                                            <li class="kt-nav__separator"></li>
                                            <li class="kt-nav__foot">
                                                <a class="btn btn-label-brand btn-bold btn-sm" href="#">Proceed</a>
                                                <a class="btn btn-clean btn-bold btn-sm" href="#" data-toggle="kt-tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                                            </li>
                                        </ul>

                                        <!--end::Nav-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="kt-portlet__body kt-portlet__body--fit-x">
                        <div class="kt-inbox__items" data-type="inbox">
                            <div class="kt-inbox__item kt-inbox__item--unread" data-id="1" data-type="inbox">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--danger" style="background-image: url('./assets/media/users/100_1.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Matt Pears</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Your iBuy.com grocery shopping confirmation - </span>
                                        <span class="kt-inbox__summary">Thank you for ordering alternate camera angles...</span>
                                    </div>
                                    <div class="kt-inbox__labels">
                                        <span class="kt-inbox__label kt-badge kt-badge--unified-brand kt-badge--bold kt-badge--inline">inbox</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    8:30 PM
                                </div>
                            </div>
                            <div class="kt-inbox__item kt-inbox__item--unread" data-id="2" data-type="inbox">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--danger">
                                            <span>JM</span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Jason Muller</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Digital PPV Customer Confirmation - </span>
                                        <span class="kt-inbox__summary">Please make sure that you have one of the following cards with you when we deliver your order...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    day ago
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="3" data-type="inbox">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--warning">
                                            <span>EF</span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Enrico Fermi</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Payment Notification DLOP2329KD - </span>
                                        <span class="kt-inbox__summary">Your Order #224820998666029 has been placed on Saturday, 29 June, 2019 10:02:41 via Online Banking...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    11:20PM
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="4" data-type="inbox">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/100_7.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Charlie Stone</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Your Order #224820998666029 has been Confirmed - </span>
                                        <span class="kt-inbox__summary">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    2 days ago
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="5" data-type="inbox">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--success">
                                            <span>MP</span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Max O'Brien Planck</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Pay bills & win up to 600$ Cashback! - </span>
                                        <span class="kt-inbox__summary">Congratulations on your iRun Coach subscription. You made no space for excuses and you decided on a healthier and happier life...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    Jul 25
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="6" data-type="inbox">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/100_4.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Teresa Fox</a></div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Congratulations on your iRun Coach subscription - </span>
                                        <span class="kt-inbox__summary">Please make sure that you have one of the following cards with you when we deliver your order...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    July 24
                                </div>
                            </div>
                            <div class="kt-inbox__item kt-inbox__item--unread" data-id="7" data-type="inbox">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/300_21.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Luka Doncic</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">About your request for PalmLake - </span>
                                        <span class="kt-inbox__summary">Thank you for creating a LIPO Account. Please click the link below to activate your account. This link will expire in 24 hours...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    Jun 13
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="8" data-type="inbox">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--primary">
                                            <span>WE</span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Wolfgang Ernst Pauli</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Activate your LIPO Account today - </span>
                                        <span class="kt-inbox__summary">What you requested can't be arranged ahead of time but PalmLake said they'll do their best to accommodate you upon arrival....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    25 May
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="9" data-type="inbox">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm" style="background-image: url('./assets/media/users/300_13.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Carles Puyol</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Payment Notification (DE223232034) - </span>
                                        <span class="kt-inbox__summary">This is to confirm that you have used your credit/debit card for the booking. If you did not make this booking, please contact us immediately....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    May 23
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="10" data-type="inbox">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/100_12.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Jimmy Grey</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Verification of your card transaction - </span>
                                        <span class="kt-inbox__summary">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    Apr 12
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="11" data-type="inbox">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/100_5.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Patty Jo Watson</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Optimize with Recommendations, now used by most advertisers - </span>
                                        <span class="kt-inbox__summary">Discover interesting ideas and unique perspectives. Read, explore and follow your interests. Get personalized recommendations delivered to you....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    Mar 1
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="12" data-type="inbox">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--warning">
                                            <span>RW</span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Roberts O'Neill Wilson</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Welcome, Patty - </span>
                                        <span class="kt-inbox__summary">Your weekly report is a good way to track your performance. See what’s working so far and explore new opportunities for improvement....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    Feb 11
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="13" data-type="inbox">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/100_3.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Nick Mana</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Pro Article Marketing Guide - </span>
                                        <span class="kt-inbox__summary">Video has rolled into every marketing platform or channel, leaving...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime">
                                    Jan 24
                                </div>
                            </div>
                            <div class="kt-inbox__item kt-inbox__item--unread" data-id="14" data-type="marked">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/100_5.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Lebron King James </a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Free Video Marketing Guide - </span>
                                        <span class="kt-inbox__summary">Video has rolled into every marketing platform or channel, leaving...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime">
                                    Jan 24
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="15" data-type="marked">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/100_2.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Anna Strong</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Pay bills & win up to 600$ Cashback! - </span>
                                        <span class="kt-inbox__summary">Video has rolled into every marketing platform or channel, leaving...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime">
                                    Jan 24
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="61" data-type="marked">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/100_5.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Jimmy Yesuku</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Free Video Marketing Guide - </span>
                                        <span class="kt-inbox__summary">Please make sure that you have one of the following cards with you when we deliver your order...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    July 24
                                </div>
                            </div>
                            <div class="kt-inbox__item kt-inbox__item--unread" data-id="71" data-type="marked">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/100_3.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Chris Bent</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">About your request for PalmLake - </span>
                                        <span class="kt-inbox__summary">Thank you for creating a LIPO Account. Please click the link below to activate your account. This link will expire in 24 hours...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    Jun 13
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="8" data-type="marked">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--dark">
                                            <span>WE</span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Wolfgang Ernst Pauli</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Activate your LIPO Account today - </span>
                                        <span class="kt-inbox__summary">What you requested can't be arranged ahead of time but PalmLake said they'll do their best to accommodate you upon arrival....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    25 May
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="9" data-type="marked">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/100_5.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Patty Jo Watson</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Payment Notification (DE223232034) - </span>
                                        <span class="kt-inbox__summary">Discover interesting ideas and unique perspectives. Read, explore and follow your interests. Get personalized recommendations delivered to you....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    Mar 1
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="10" data-type="marked">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/300_22.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Max Born</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Welcome, Patty - </span>
                                        <span class="kt-inbox__summary">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    Apr 12
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="11" data-type="marked">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm" style="background-image: url('./assets/media/users/100_12.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Sarah Boysen</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">About your request for PalmLake - </span>
                                        <span class="kt-inbox__summary">This is to confirm that you have used your credit/debit card for the booking. If you did not make this booking, please contact us immediately....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    May 23
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="16" data-type="draft">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--dark">
                                            <span>WE</span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Wolfgang Ernst Pauli</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Verification of your card transaction - </span>
                                        <span class="kt-inbox__summary">What you requested can't be arranged ahead of time but PalmLake said they'll do their best to accommodate you upon arrival....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    25 May
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="17" data-type="draft">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm" style="background-image: url('./assets/media/users/300_15.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Megan Higgins</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Payment Notification (DE223232034) - </span>
                                        <span class="kt-inbox__summary">This is to confirm that you have used your credit/debit card for the booking. If you did not make this booking, please contact us immediately....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    May 23
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="18" data-type="draft">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/300_24.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Chelsea Hughes</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Verification of your card transaction - </span>
                                        <span class="kt-inbox__summary">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    Apr 12
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="19" data-type="sent">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/100_6.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Luke Davids</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Welcome, Patty - </span>
                                        <span class="kt-inbox__summary">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    Apr 12
                                </div>
                            </div>
                            <div class="kt-inbox__item kt-inbox__item--unread" data-id="20" data-type="sent">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/300_15.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Karl Hugo</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Payment Notification (DE223232034) - </span>
                                        <span class="kt-inbox__summary">Discover interesting ideas and unique perspectives. Read, explore and follow your interests. Get personalized recommendations delivered to you....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    Mar 1
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="21" data-type="sent">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--warning">
                                            <span>RW</span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Roberts O'Neill Wilson</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Your Order #224820998666029 has been Confirmed - </span>
                                        <span class="kt-inbox__summary">Your weekly report is a good way to track your performance. See what’s working so far and explore new opportunities for improvement....</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    Feb 11
                                </div>
                            </div>
                            <div class="kt-inbox__item kt-inbox__item--unread" data-id="22" data-type="trash">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand">
                                            <span>CH</span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Chelsea Hughes</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Optimize with Recommendations, now used by most advertisers - </span>
                                        <span class="kt-inbox__summary">Your Order #224820998666029 has been placed on Saturday, 29 June, 2019 10:02:41 via Online Banking...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    11:20PM
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="23" data-type="trash">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/300_10.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Lisa Moss</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Congratulations on your iRun Coach subscription - </span>
                                        <span class="kt-inbox__summary">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    2 days ago
                                </div>
                            </div>
                            <div class="kt-inbox__item kt-inbox__item--unread" data-id="24" data-type="trash">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--success">
                                            <span>MP</span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Max O'Brien Planck</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Payment Notification DLOP2329KD - </span>
                                        <span class="kt-inbox__summary">Congratulations on your iRun Coach subscription. You made no space for excuses and you decided on a healthier and happier life...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    Jul 25
                                </div>
                            </div>
                            <div class="kt-inbox__item" data-id="25" data-type="trash">
                                <div class="kt-inbox__info">
                                    <div class="kt-inbox__actions">
                                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Star">
                                            <i class="flaticon-star"></i>
                                        </span>
                                        <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="Mark as important">
                                            <i class="flaticon-add-label-button"></i>
                                        </span>
                                    </div>
                                    <div class="kt-inbox__sender" data-toggle="view">
                                        <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('./assets/media/users/300_16.jpg')">
                                            <span></span>
                                        </span>
                                        <a href="#" class="kt-inbox__author">Lisa Moss</a>
                                    </div>
                                </div>
                                <div class="kt-inbox__details" data-toggle="view">
                                    <div class="kt-inbox__message">
                                        <span class="kt-inbox__subject">Pay bills & win up to 600$ Cashback! - </span>
                                        <span class="kt-inbox__summary">Please make sure that you have one of the following cards with you when we deliver your order...</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__datetime" data-toggle="view">
                                    July 24
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--End:: Inbox List-->

                <!--Begin:: Inbox View-->
                <div class="kt-grid__item kt-grid__item--fluid    kt-portlet    kt-inbox__view kt-inbox__view--shown-" id="kt_inbox_view">
                    <div class="kt-portlet__head">
                        <div class="kt-inbox__toolbar">
                            <div class="kt-inbox__actions">
                                <a href="#" class="kt-inbox__icon kt-inbox__icon--back">
                                    <i class="flaticon2-left-arrow-1"></i>
                                </a>
                                <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="Archive">
                                    <i class="flaticon2-layers-1"></i>
                                </button>
                                <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="Spam">
                                    <i class="flaticon2-information"></i>
                                </button>
                                <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="Delete">
                                    <i class="flaticon2-rubbish-bin"></i>
                                </button>
                                <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="Mark as read">
                                    <i class="flaticon2-writing"></i>
                                </button>
                                <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="Move">
                                    <i class="flaticon2-expand"></i>
                                </button>
                            </div>
                            <div class="kt-inbox__controls">
                                <span class="kt-inbox__pages" data-toggle="kt-tooltip" title="Records per page">
                                    <span class="kt-inbox__perpage" data-toggle="dropdown">3 of 230 pages</span>
                                </span>
                                <button class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" title="Previose message">
                                    <i class="flaticon2-left-arrow"></i>
                                </button>
                                <button class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" title="Next message">
                                    <i class="flaticon2-right-arrow"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="kt-portlet__body kt-portlet__body--fit-x">
                        <div class="kt-inbox__subject">
                            <div class="kt-inbox__title">
                                <h3 class="kt-inbox__text">Trip Reminder. Thank you for flying with us!</h3>
                                <span class="kt-inbox__label kt-badge kt-badge--unified-brand kt-badge--bold kt-badge--inline">
                                    inbox
                                </span>
                                <span class="kt-inbox__label kt-badge kt-badge--unified-danger kt-badge--bold kt-badge--inline">
                                    important
                                </span>
                            </div>
                            <div class="kt-inbox__actions">
                                <a href="#" class="kt-inbox__icon">
                                    <i class="flaticon2-sort"></i>
                                </a>
                                <a href="#" class="kt-inbox__icon">
                                    <i class="flaticon2-fax"></i>
                                </a>
                            </div>
                        </div>
                        <div class="kt-inbox__messages">
                            <div class="kt-inbox__message kt-inbox__message--expanded">
                                <div class="kt-inbox__head">
                                    <span class="kt-media" data-toggle="expand" style="background-image: url('./assets/media/users/100_5.jpg')">
                                        <span></span>
                                    </span>
                                    <div class="kt-inbox__info">
                                        <div class="kt-inbox__author" data-toggle="expand">
                                            <a href="#" class="kt-inbox__name">Caleb Dixon</a>
                                            <div class="kt-inbox__status">
                                                <span class="kt-badge kt-badge--success kt-badge--dot"></span> 1 Day ago
                                            </div>
                                        </div>
                                        <div class="kt-inbox__details">
                                            <div class="kt-inbox__tome">
                                                <span class="kt-inbox__label" data-toggle="dropdown">
                                                    to me <i class="flaticon2-down"></i>
                                                </span>
                                                <div class="dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-left">
                                                    <table class="kt-inbox__details">
                                                        <tr>
                                                            <td>from</td>
                                                            <td>Mark Andre</td>
                                                        </tr>
                                                        <tr>
                                                            <td>date:</td>
                                                            <td>Jul 30, 2019, 11:27 PM</td>
                                                        </tr>
                                                        <tr>
                                                            <td>from:</td>
                                                            <td>Mark Andre</td>
                                                        </tr>
                                                        <tr>
                                                            <td>subject:</td>
                                                            <td>Trip Reminder. Thank you for flying with us!</td>
                                                        </tr>
                                                        <tr>
                                                            <td>reply to:</td>
                                                            <td>mark.andre@gmail.com</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="kt-inbox__desc" data-toggle="expand">
                                                Headine try at attention-grabbing to the body of your blog post....
                                            </div>
                                        </div>
                                    </div>
                                    <div class="kt-inbox__actions">
                                        <div class="kt-inbox__datetime" data-toggle="expand">
                                            Jul 15, 2019, 11:19AM
                                        </div>
                                        <div class="kt-inbox__group">
                                            <span class="kt-inbox__icon kt-inbox__icon--sm kt-inbox__icon--label" data-toggle="kt-tooltip" data-placement="top" title="Star">
                                                <i class="flaticon-star"></i>
                                            </span>
                                            <span class="kt-inbox__icon kt-inbox__icon--sm kt-inbox__icon--label" data-toggle="kt-tooltip" data-placement="top" title="Mark as important">
                                                <i class="flaticon-add-label-button"></i>
                                            </span>
                                            <span class="kt-inbox__icon kt-inbox__icon--sm kt-inbox__icon--reply" data-toggle="kt-tooltip" data-placement="top" title="Reply">
                                                <i class="flaticon2-reply-1"></i>
                                            </span>
                                            <span class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" data-placement="top" title="Settings">
                                                <i class="flaticon-more"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-inbox__body">
                                    <div class="kt-inbox__text">
                                        <p>Hi Bob,</p>
                                        <p class="kt-margin-t-25">
                                            With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part of any article is the title.Without a compelleing title, your reader won't even get to the first sentence.After the title, however, the first few sentences of your article are certainly the most important part.
                                        </p>
                                        <p class="kt-margin-t-25">
                                            Jornalists call this critical, introductory section the "Lede," and when bridge properly executed, it's the that carries your reader from an headine try at attention-grabbing to the body of your blog post, if you want to get it right on of these 10 clever ways to omen your next blog posr with a bang
                                        </p>
                                        <p class="kt-margin-t-25">
                                            Best regards,
                                        </p>
                                        <p>
                                            Jason Muller
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="kt-inbox__message">
                                <div class="kt-inbox__head">
                                    <span class="kt-media" data-toggle="expand" style="background-image: url('./assets/media/users/300_19.jpg')">
                                        <span></span>
                                    </span>
                                    <div class="kt-inbox__info">
                                        <div class="kt-inbox__author" data-toggle="expand">
                                            <a href="#" class="kt-inbox__name">Alivia Sutton</a>
                                            <div class="kt-inbox__status">
                                                <span class="kt-badge kt-badge--success kt-badge--dot"></span> 2 Day ago
                                            </div>
                                        </div>
                                        <div class="kt-inbox__details">
                                            <div class="kt-inbox__tome">
                                                <span class="kt-inbox__label" data-toggle="dropdown">
                                                    to me <i class="flaticon2-down"></i>
                                                </span>
                                                <div class="dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-left">
                                                    <table class="kt-inbox__details">
                                                        <tr>
                                                            <td>from</td>
                                                            <td>Mark Andre</td>
                                                        </tr>
                                                        <tr>
                                                            <td>date:</td>
                                                            <td>Jul 30, 2019, 11:27 PM</td>
                                                        </tr>
                                                        <tr>
                                                            <td>from:</td>
                                                            <td>Mark Andre</td>
                                                        </tr>
                                                        <tr>
                                                            <td>subject:</td>
                                                            <td>Trip Reminder. Thank you for flying with us!</td>
                                                        </tr>
                                                        <tr>
                                                            <td>reply to:</td>
                                                            <td>mark.andre@gmail.com</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="kt-inbox__desc" data-toggle="expand">
                                                Jornalists call this critical, introductory section the "Lede," and when bridge properly executed....
                                            </div>
                                        </div>
                                    </div>
                                    <div class="kt-inbox__actions">
                                        <div class="kt-inbox__datetime" data-toggle="expand">
                                            Jul 20, 2019, 03:20PM
                                        </div>
                                        <div class="kt-inbox__group">
                                            <span class="kt-inbox__icon  kt-inbox__icon--sm kt-inbox__icon--label kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="top" title="Star">
                                                <i class="flaticon-star"></i>
                                            </span>
                                            <span class="kt-inbox__icon kt-inbox__icon--sm kt-inbox__icon--label" data-toggle="kt-tooltip" data-placement="top" title="Mark as important">
                                                <i class="flaticon-add-label-button"></i>
                                            </span>
                                            <span class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" data-placement="top" title="Reply">
                                                <i class="flaticon2-reply-1"></i>
                                            </span>
                                            <span class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" data-placement="top" title="Settings">
                                                <i class="flaticon-more"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-inbox__body">
                                    <p>Hi,</p>
                                    <p class="kt-margin-t-25">
                                        The guide price is based on today's prices instore. However as we shop for your order on the day you want it delivered, some of the prices may have changed. Weighed products: the guide price on the website uses an estimate weight for weighed products such as grapes or cheese. But what you pay will be based on the exact weight of your product, so the price may vary slightly.
                                    </p>
                                    <p class="kt-margin-t-25">
                                        Best regards,
                                        <br> Jason Muller
                                    </p>
                                </div>
                            </div>
                            <div class="kt-inbox__message">
                                <div class="kt-inbox__head">
                                    <span class="kt-media" data-toggle="expand" style="background-image: url('./assets/media/users/300_22.jpg')">
                                        <span></span>
                                    </span>
                                    <div class="kt-inbox__info">
                                        <div class="kt-inbox__author" data-toggle="expand">
                                            <a href="#" class="kt-inbox__name">Peyton Gilliam</a>
                                            <div class="kt-inbox__status">
                                                <span class="kt-badge kt-badge--success kt-badge--dot"></span> 1 Day ago
                                            </div>
                                        </div>
                                        <div class="kt-inbox__details">
                                            <div class="kt-inbox__tome">
                                                <span class="kt-inbox__label" data-toggle="dropdown">
                                                    to me <i class="flaticon2-down"></i>
                                                </span>
                                                <div class="dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-left">
                                                    <table class="kt-inbox__details">
                                                        <tr>
                                                            <td>from</td>
                                                            <td>Mark Andre</td>
                                                        </tr>
                                                        <tr>
                                                            <td>date:</td>
                                                            <td>Jul 30, 2019, 11:27 PM</td>
                                                        </tr>
                                                        <tr>
                                                            <td>from:</td>
                                                            <td>Mark Andre</td>
                                                        </tr>
                                                        <tr>
                                                            <td>subject:</td>
                                                            <td>Trip Reminder. Thank you for flying with us!</td>
                                                        </tr>
                                                        <tr>
                                                            <td>reply to:</td>
                                                            <td>mark.andre@gmail.com</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="kt-inbox__desc" data-toggle="expand">
                                                With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part....
                                            </div>
                                        </div>
                                    </div>
                                    <div class="kt-inbox__actions">
                                        <div class="kt-inbox__datetime">
                                            Jul 15, 2019, 11:19AM
                                        </div>
                                        <div class="kt-inbox__group">
                                            <span class="kt-inbox__icon kt-inbox__icon--sm kt-inbox__icon--label kt-inbox__icon--label--on" data-toggle="kt-tooltip" data-placement="top" title="Star">
                                                <i class="flaticon-star"></i>
                                            </span>
                                            <span class="kt-inbox__icon kt-inbox__icon--sm kt-inbox__icon--label" data-toggle="kt-tooltip" data-placement="top" title="Mark as important">
                                                <i class="flaticon-add-label-button"></i>
                                            </span>
                                            <span class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" data-placement="top" title="Reply">
                                                <i class="flaticon2-reply-1"></i>
                                            </span>
                                            <span class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" data-placement="top" title="Settings">
                                                <i class="flaticon-more"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-inbox__body">
                                    <p>Hi Bob,</p>
                                    <p class="kt-margin-t-25">
                                        With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part of any article is the title.Without a compelleing title, your reader won't even get to the first sentence.After the title, however, the first few sentences of your article are certainly the most important part.
                                    </p>
                                    <p class="kt-margin-t-25">
                                        Jornalists call this critical, introductory section the "Lede," and when bridge properly executed, it's the that carries your reader from an headine try at attention-grabbing to the body of your blog post, if you want to get it right on of these 10 clever ways to omen your next blog posr with a bang
                                    </p>
                                    <p class="kt-margin-t-25">
                                        Best regards,
                                    </p>
                                    <p>
                                        Jason Muller
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="kt-inbox__reply kt-inbox__reply--on">
                            <div class="kt-inbox__actions">
                                <button class="btn btn-secondary btn-bold">
                                    <i class="flaticon2-reply-1 kt-font-brand"></i> Reply
                                </button>
                                <button class="btn btn-secondary btn-bold">
                                    <i class="flaticon2-left-arrow-1 kt-font-brand"></i> Forward
                                </button>
                            </div>
                            <div class="kt-inbox__form" id="kt_inbox_reply_form">
                                <div class="kt-inbox__body">
                                    <div class="kt-inbox__to">
                                        <div class="kt-inbox__wrapper">
                                            <div class="kt-inbox__field kt-inbox__field--to">
                                                <div class="kt-inbox__label">
                                                    To:
                                                </div>
                                                <div class="kt-inbox__input">
                                                    <input type="text" name="compose_to" value="Chris Muller, Lina Nilson">
                                                </div>
                                                <div class="kt-inbox__tools">
                                                    <span class="kt-inbox__tool kt-inbox__tool--cc">Cc</span>
                                                    <span class="kt-inbox__tool kt-inbox__tool--bcc">Bcc</span>
                                                </div>
                                            </div>
                                            <div class="kt-inbox__field kt-inbox__field--cc">
                                                <div class="kt-inbox__label">
                                                    Cc:
                                                </div>
                                                <div class="kt-inbox__input">
                                                    <input type="text" name="compose_cc">
                                                </div>
                                                <div class="kt-inbox__tools">
                                                    <button type="button" class="kt-inbox__icon kt-inbox__icon--delete kt-inbox__icon--sm">
                                                        <i class="flaticon2-cross"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="kt-inbox__field kt-inbox__field--bcc">
                                                <div class="kt-inbox__label">
                                                    Bcc:
                                                </div>
                                                <div class="kt-inbox__input">
                                                    <input type="text" name="compose_bcc">
                                                </div>
                                                <div class="kt-inbox__tools">
                                                    <button type="button" class="kt-inbox__icon kt-inbox__icon--delete kt-inbox__icon--sm">
                                                        <i class="flaticon2-cross"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="kt-inbox__editor" id="kt_inbox_reply_editor" style="height: 200px;">
                                    </div>
                                    <div class="kt-inbox__attachments">
                                        <div class="dropzone dropzone-multi" id="kt_inbox_reply_attachments">
                                            <div class="dropzone-items">
                                                <div class="dropzone-item">
                                                    <div class="dropzone-file">
                                                        <div class="dropzone-filename" title="some_image_file_name.jpg">
                                                            <span data-dz-name>some_image_file_name.jpg</span> <strong>(<span  data-dz-size>340kb</span>)</strong>
                                                        </div>
                                                        <div class="dropzone-error" data-dz-errormessage></div>
                                                    </div>
                                                    <div class="dropzone-progress">
                                                        <div class="progress">
                                                            <div class="progress-bar kt-bg-brand" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" data-dz-uploadprogress></div>
                                                        </div>
                                                    </div>
                                                    <div class="dropzone-toolbar">
                                                        <span class="dropzone-delete" data-dz-remove><i class="flaticon2-cross"></i></span>
                                                    </div>
                                                </div>
                                                <div class="dropzone-item">
                                                    <div class="dropzone-file">
                                                        <div class="dropzone-filename" title="some_image_file_name.jpg">
                                                            <span data-dz-name>design_files.zip</span> <strong>(<span  data-dz-size>450kb</span>)</strong>
                                                        </div>
                                                        <div class="dropzone-error" data-dz-errormessage></div>
                                                    </div>
                                                    <div class="dropzone-progress">
                                                        <div class="progress">
                                                            <div class="progress-bar kt-bg-brand" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" data-dz-uploadprogress></div>
                                                        </div>
                                                    </div>
                                                    <div class="dropzone-toolbar">
                                                        <span class="dropzone-delete" data-dz-remove><i class="flaticon2-cross"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-inbox__foot">
                                    <div class="kt-inbox__primary">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-brand btn-bold">
                                                Send
                                            </button>
                                            <button type="button" class="btn btn-brand btn-bold dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                            </button>
                                            <div class="dropdown-menu dropup dropdown-menu-fit dropdown-menu-right">
                                                <ul class="kt-nav">
                                                    <li class="kt-nav__item">
                                                        <a href="#" class="kt-nav__link">
                                                            <i class="kt-nav__link-icon flaticon2-writing"></i>
                                                            <span class="kt-nav__link-text">Schedule Send</span>
                                                        </a>
                                                    </li>
                                                    <li class="kt-nav__item">
                                                        <a href="#" class="kt-nav__link">
                                                            <i class="kt-nav__link-icon flaticon2-medical-records"></i>
                                                            <span class="kt-nav__link-text">Save & archive</span>
                                                        </a>
                                                    </li>
                                                    <li class="kt-nav__item">
                                                        <a href="#" class="kt-nav__link">
                                                            <i class="kt-nav__link-icon flaticon2-hourglass-1"></i>
                                                            <span class="kt-nav__link-text">Cancel</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="kt-inbox__panel">
                                            <button class="kt-inbox__icon" id="kt_inbox_reply_attachments_select">
                                                <i class="flaticon2-clip-symbol"></i>
                                            </button>
                                            <button class="kt-inbox__icon">
                                                <i class="flaticon2-pin"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="kt-inbox__secondary">
                                        <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="More actions">
                                            <i class="flaticon2-settings"></i>
                                        </button>
                                        <button class="kt-inbox__icon kt-inbox__icon--remove" data-toggle="kt-tooltip" title="Dismiss reply">
                                            <i class="flaticon2-rubbish-bin-delete-button"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--End:: Inbox View-->
            </div>

            <!--End::Inbox-->

            <!--Begin:: Inbox Compose-->
            <!-- <div class="modal modal-sticky-bottom-right modal-sticky-lg" id="kt_inbox_compose" role="dialog" data-backdrop="false">
                <div class="modal-dialog" role="document">
                    <div class="modal-content kt-inbox">
                        <div class="kt-inbox__form" id="kt_inbox_compose_form">
                            <div class="kt-inbox__head">
                                <div class="kt-inbox__title">Compose</div>
                                <div class="kt-inbox__actions">
                                    <button type="button" class="kt-inbox__icon kt-inbox__icon--sm">
                                        <i class="flaticon2-arrow-1"></i>
                                    </button>
                                    <button type="button" class="kt-inbox__icon kt-inbox__icon--sm" data-dismiss="modal">
                                        <i class="flaticon2-cross"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="kt-inbox__body">
                                <div class="kt-inbox__to">
                                    <div class="kt-inbox__wrapper">
                                        <div class="kt-inbox__field kt-inbox__field--to">
                                            <div class="kt-inbox__label">
                                                To:
                                            </div>
                                            <div class="kt-inbox__input">
                                                <input type="text" name="compose_to" value="Chris Muller, Lina Nilson">
                                            </div>
                                            <div class="kt-inbox__tools">
                                                <span class="kt-inbox__tool kt-inbox__tool--cc">Cc</span>
                                                <span class="kt-inbox__tool kt-inbox__tool--bcc">Bcc</span>
                                            </div>
                                        </div>
                                        <div class="kt-inbox__field kt-inbox__field--cc">
                                            <div class="kt-inbox__label">
                                                Cc:
                                            </div>
                                            <div class="kt-inbox__input">
                                                <input type="text" name="compose_cc">
                                            </div>
                                            <div class="kt-inbox__tools">
                                                <button type="button" class="kt-inbox__icon kt-inbox__icon--delete kt-inbox__icon--sm">
                                                    <i class="flaticon2-cross"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="kt-inbox__field kt-inbox__field--bcc">
                                            <div class="kt-inbox__label">
                                                Bcc:
                                            </div>
                                            <div class="kt-inbox__input">
                                                <input type="text" name="compose_bcc">
                                            </div>
                                            <div class="kt-inbox__tools">
                                                <button type="button" class="kt-inbox__icon kt-inbox__icon--delete kt-inbox__icon--sm">
                                                    <i class="flaticon2-cross"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="kt-inbox__subject">
                                    <input class="form-control" name="compose_subject" placeholder="Subject">
                                </div>
                                <div class="kt-inbox__editor" id="kt_inbox_compose_editor" style="height: 300px">
                                </div>
                                <div class="kt-inbox__attachments">
                                    <div class="dropzone dropzone-multi" id="kt_inbox_compose_attachments">
                                        <div class="dropzone-items">
                                            <div class="dropzone-item">
                                                <div class="dropzone-file">
                                                    <div class="dropzone-filename" title="some_image_file_name.jpg">
                                                        <span data-dz-name>some_image_file_name.jpg</span> <strong>(<span  data-dz-size>340kb</span>)</strong>
                                                    </div>
                                                    <div class="dropzone-error" data-dz-errormessage></div>
                                                </div>
                                                <div class="dropzone-progress">
                                                    <div class="progress">
                                                        <div class="progress-bar kt-bg-brand" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" data-dz-uploadprogress></div>
                                                    </div>
                                                </div>
                                                <div class="dropzone-toolbar">
                                                    <span class="dropzone-delete" data-dz-remove><i class="flaticon2-cross"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="kt-inbox__foot">
                                <div class="kt-inbox__primary">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-brand btn-bold">
                                            Send
                                        </button>
                                        <button type="button" class="btn btn-brand btn-bold dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        </button>
                                        <div class="dropdown-menu dropup dropdown-menu-fit dropdown-menu-right">
                                            <ul class="kt-nav">
                                                <li class="kt-nav__item">
                                                    <a href="#" class="kt-nav__link">
                                                        <i class="kt-nav__link-icon flaticon2-writing"></i>
                                                        <span class="kt-nav__link-text">Schedule Send</span>
                                                    </a>
                                                </li>
                                                <li class="kt-nav__item">
                                                    <a href="#" class="kt-nav__link">
                                                        <i class="kt-nav__link-icon flaticon2-medical-records"></i>
                                                        <span class="kt-nav__link-text">Save & archive</span>
                                                    </a>
                                                </li>
                                                <li class="kt-nav__item">
                                                    <a href="#" class="kt-nav__link">
                                                        <i class="kt-nav__link-icon flaticon2-hourglass-1"></i>
                                                        <span class="kt-nav__link-text">Cancel</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="kt-inbox__panel">
                                        <label class="kt-inbox__icon" id="kt_inbox_compose_attachments_select">
                                            <i class="flaticon2-clip-symbol"></i>
                                        </label>
                                        <label class="kt-inbox__icon">
                                            <i class="flaticon2-pin"></i>
                                        </label>
                                    </div>
                                </div>
                                <div class="kt-inbox__secondary">
                                    <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="More actions">
                                        <i class="flaticon2-settings"></i>
                                    </button>
                                    <button class="kt-inbox__icon kt-inbox__icon--remove" data-toggle="kt-tooltip" title="Dismiss reply">
                                        <i class="flaticon2-rubbish-bin-delete-button"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

            <!--End:: Inbox Compose-->
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
            })
        },
        methods: {
            
        }
    }
</script>