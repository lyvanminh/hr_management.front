<template>
  <!-- begin:: Subheader -->
  	<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">

		<!-- begin:: Header -->
		<div id="kt_header" class="kt-header kt-grid__item  kt-header--fixed ">
			<div></div>

			<!-- begin:: Header Topbar -->
			<div class="kt-header__topbar">

				<!--begin: Search -->
				<div class="kt-header__topbar-item kt-header__topbar-item--search dropdown">
					<div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
						<span class="kt-header__topbar-icon"><i class="flaticon2-search-1"></i></span>
					</div>
					<div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-top-unround dropdown-menu-anim dropdown-menu-lg">
						<div class="kt-quick-search kt-quick-search--dropdown kt-quick-search--result-compact" id="kt_quick_search_dropdown">
							<form method="get" class="kt-quick-search__form">
								<div class="input-group">
									<div class="input-group-prepend"><span class="input-group-text"><i class="flaticon2-search-1"></i></span></div>
									<input type="text" class="form-control kt-quick-search__input" placeholder="Search...">
									<div class="input-group-append"><span class="input-group-text"><i class="la la-close kt-quick-search__close"></i></span></div>
								</div>
							</form>
							<div class="kt-quick-search__wrapper kt-scroll" data-scroll="true" data-height="325" data-mobile-height="200">
							</div>
						</div>
					</div>
				</div>

				<!--end: Search -->

				<!--begin: Notifications -->
				<div class="kt-header__topbar-item dropdown">
					<div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="30px,0px">
						<span class="kt-header__topbar-icon">
							<i class="flaticon2-bell-alarm-symbol"></i>
							<span class="kt-badge kt-badge--dot kt-badge--notify kt-badge--sm kt-badge--brand"></span>
						</span>
					</div>
					<div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg">
						<form>
							<div class="kt-head" style="background-image: url(assets/media/misc/head_bg_sm.jpg)">
								<h3 class="kt-head__title">User Notifications</h3>
								<div class="kt-head__sub"><span class="kt-head__desc">23 new notifications</span></div>
							</div>
							<div class="kt-notification kt-margin-t-30 kt-margin-b-20 kt-scroll" data-scroll="true" data-height="270" data-mobile-height="220">
								<a href="#" class="kt-notification__item">
									<div class="kt-notification__item-icon">
										<i class="flaticon2-line-chart kt-font-success"></i>
									</div>
									<div class="kt-notification__item-details">
										<div class="kt-notification__item-title">
											New order has been received
										</div>
										<div class="kt-notification__item-time">
											2 hrs ago
										</div>
									</div>
								</a>
								<a href="#" class="kt-notification__item">
									<div class="kt-notification__item-icon">
										<i class="flaticon2-box-1 kt-font-brand"></i>
									</div>
									<div class="kt-notification__item-details">
										<div class="kt-notification__item-title">
											New customer is registered
										</div>
										<div class="kt-notification__item-time">
											3 hrs ago
										</div>
									</div>
								</a>
								<a href="#" class="kt-notification__item">
									<div class="kt-notification__item-icon">
										<i class="flaticon2-chart2 kt-font-danger"></i>
									</div>
									<div class="kt-notification__item-details">
										<div class="kt-notification__item-title">
											Application has been approved
										</div>
										<div class="kt-notification__item-time">
											3 hrs ago
										</div>
									</div>
								</a>
								<a href="#" class="kt-notification__item">
									<div class="kt-notification__item-icon">
										<i class="flaticon2-image-file kt-font-warning"></i>
									</div>
									<div class="kt-notification__item-details">
										<div class="kt-notification__item-title">
											New file has been uploaded
										</div>
										<div class="kt-notification__item-time">
											5 hrs ago
										</div>
									</div>
								</a>
								<a href="#" class="kt-notification__item">
									<div class="kt-notification__item-icon">
										<i class="flaticon2-user kt-font-info"></i>
									</div>
									<div class="kt-notification__item-details">
										<div class="kt-notification__item-title">
											New user feedback received
										</div>
										<div class="kt-notification__item-time">
											8 hrs ago
										</div>
									</div>
								</a>
								<a href="#" class="kt-notification__item">
									<div class="kt-notification__item-icon">
										<i class="flaticon2-pie-chart-2 kt-font-success"></i>
									</div>
									<div class="kt-notification__item-details">
										<div class="kt-notification__item-title">
											System reboot has been successfully completed
										</div>
										<div class="kt-notification__item-time">
											12 hrs ago
										</div>
									</div>
								</a>
								<a href="#" class="kt-notification__item">
									<div class="kt-notification__item-icon">
										<i class="flaticon2-favourite kt-font-focus"></i>
									</div>
									<div class="kt-notification__item-details">
										<div class="kt-notification__item-title">
											New order has been placed
										</div>
										<div class="kt-notification__item-time">
											15 hrs ago
										</div>
									</div>
								</a>
								<a href="#" class="kt-notification__item kt-notification__item--read">
									<div class="kt-notification__item-icon">
										<i class="flaticon2-safe kt-font-primary"></i>
									</div>
									<div class="kt-notification__item-details">
										<div class="kt-notification__item-title">
											Company meeting canceled
										</div>
										<div class="kt-notification__item-time">
											19 hrs ago
										</div>
									</div>
								</a>
								<a href="#" class="kt-notification__item">
									<div class="kt-notification__item-icon">
										<i class="flaticon2-psd kt-font-success"></i>
									</div>
									<div class="kt-notification__item-details">
										<div class="kt-notification__item-title">
											New report has been received
										</div>
										<div class="kt-notification__item-time">
											23 hrs ago
										</div>
									</div>
								</a>
								<a href="#" class="kt-notification__item">
									<div class="kt-notification__item-icon">
										<i class="flaticon-download-1 kt-font-danger"></i>
									</div>
									<div class="kt-notification__item-details">
										<div class="kt-notification__item-title">
											Finance report has been generated
										</div>
										<div class="kt-notification__item-time">
											25 hrs ago
										</div>
									</div>
								</a>
								<a href="#" class="kt-notification__item">
									<div class="kt-notification__item-icon">
										<i class="flaticon-security kt-font-warning"></i>
									</div>
									<div class="kt-notification__item-details">
										<div class="kt-notification__item-title">
											New customer comment recieved
										</div>
										<div class="kt-notification__item-time">
											2 days ago
										</div>
									</div>
								</a>
								<a href="#" class="kt-notification__item">
									<div class="kt-notification__item-icon">
										<i class="flaticon2-pie-chart kt-font-focus"></i>
									</div>
									<div class="kt-notification__item-details">
										<div class="kt-notification__item-title">
											New customer is registered
										</div>
										<div class="kt-notification__item-time">
											3 days ago
										</div>
									</div>
								</a>
							</div>
						</form>
					</div>
				</div>

				<!--end: Notifications -->

				<!--begin: Quick Actions -->
				<div class="kt-header__topbar-item">
					<div class="kt-header__topbar-wrapper" id="kt_offcanvas_toolbar_quick_actions_toggler_btn">
						<span class="kt-header__topbar-icon"><i class="flaticon2-gear"></i></span>
					</div>
				</div>

				<!--end: Quick Actions -->

				<!--begin:: Languages -->
				<div class="kt-header__topbar-item kt-header__topbar-item--langs">
					<div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround">
						<ul class="kt-nav kt-margin-t-10 kt-margin-b-10">
							<li class="kt-nav__item kt-nav__item--active">
								<a href="#" class="kt-nav__link">
									<span class="kt-nav__link-icon"><img src="assets/media/flags/020-flag.svg" alt="" /></span>
									<span class="kt-nav__link-text">English</span>
								</a>
							</li>
							<li class="kt-nav__item">
								<a href="#" class="kt-nav__link">
									<span class="kt-nav__link-icon"><img src="assets/media/flags/016-spain.svg" alt="" /></span>
									<span class="kt-nav__link-text">Spanish</span>
								</a>
							</li>
							<li class="kt-nav__item">
								<a href="#" class="kt-nav__link">
									<span class="kt-nav__link-icon"><img src="assets/media/flags/017-germany.svg" alt="" /></span>
									<span class="kt-nav__link-text">German</span>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<!--end:: Languages -->

				<!--begin: User Bar -->
				<div class="kt-header__topbar-item kt-header__topbar-item--user">
					<div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,0px">

						<!--use "kt-rounded" class for rounded avatar style-->
						<div class="kt-header__topbar-user kt-rounded-">
							<span class="kt-header__topbar-welcome kt-hidden-mobile">Hi,</span>
							<span class="kt-header__topbar-username kt-hidden-mobile">Sean</span>
							<img alt="Pic" src="assets/media/users/300_25.jpg" class="kt-rounded-" />

							<!--use below badge element instead the user avatar to display username's first letter(remove kt-hidden class to display it) -->
							<span class="kt-badge kt-badge--username kt-badge--lg kt-badge--brand kt-hidden kt-badge--bold">S</span>
						</div>
					</div>
					<div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-sm">
						<div class="kt-user-card kt-margin-b-40 kt-margin-b-30-tablet-and-mobile" style="background-image: url(assets/media/misc/head_bg_sm.jpg)">
							<div class="kt-user-card__wrapper">
								<div class="kt-user-card__pic">

									<!--use "kt-rounded" class for rounded avatar style-->
									<img alt="Pic" src="assets/media/users/300_21.jpg" class="kt-rounded-" />
								</div>
								<div class="kt-user-card__details">
									<div class="kt-user-card__name">Alex Stone</div>
									<div class="kt-user-card__position">CTO, Loop Inc.</div>
								</div>
							</div>
						</div>
						<ul class="kt-nav kt-margin-b-10">
							<li class="kt-nav__item">
								<a href="custom/profile/personal-information.html" class="kt-nav__link">
									<span class="kt-nav__link-icon"><i class="flaticon2-calendar-3"></i></span>
									<span class="kt-nav__link-text">My Profile</span>
								</a>
							</li>
							<li class="kt-nav__item">
								<a href="custom/profile/overview-1.html" class="kt-nav__link">
									<span class="kt-nav__link-icon"><i class="flaticon2-browser-2"></i></span>
									<span class="kt-nav__link-text">My Tasks</span>
								</a>
							</li>
							<li class="kt-nav__item">
								<a href="custom/profile/overview-2.html" class="kt-nav__link">
									<span class="kt-nav__link-icon"><i class="flaticon2-mail"></i></span>
									<span class="kt-nav__link-text">Messages</span>
								</a>
							</li>
							<li class="kt-nav__item">
								<a href="custom/profile/account-settings.html" class="kt-nav__link">
									<span class="kt-nav__link-icon"><i class="flaticon2-gear"></i></span>
									<span class="kt-nav__link-text">Settings</span>
								</a>
							</li>
							<li class="kt-nav__separator kt-nav__separator--fit"></li>
							<li class="kt-nav__custom kt-space-between">
								<a @click="logout()" class="btn btn-label-brand btn-upper btn-sm btn-bold">Sign Out</a>
								<i class="flaticon2-information kt-label-font-color-2" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Click to learn more..."></i>
							</li>
						</ul>
					</div>
				</div>

				<!--end: User Bar -->

				<!--end:: Quick Panel Toggler -->
			</div>

			<!-- end:: Header Topbar -->
		</div>

		<!-- end:: Header -->
	</div>

</template>

<script>
export default {
	name: "SubHeader",
	data() 
	{
		return {
		}
	},
	methods: {
		logout() {
			this.$store.dispatch('auth/actLogout', {})
		}
	}
}
</script>

<style scoped>

</style>