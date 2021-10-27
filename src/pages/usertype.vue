<template>
  <div v-if="user">
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
    export default {
        computed: {
            user() {
                let user = this.$store.getters['user/getUser'];
                let userType = this.$route.params.user_type;
                if (user) {
                    if (user.id != localStorage.getItem('user_id')) {
                        window.location.href = '/login';
                    }
                }

                return user;
            }
        },
        mounted() {
            let vm = this;
            // if (this.$route.params.user_type === 'admin') {
            //     this.$store.dispatch('user/actPermissions');
            // }
            let userTypes = ['employee', 'admin']
            let userType = this.$route.params.user_type;
            if (userTypes.indexOf(userType) === -1) {
                this.$router.push('not-found')
            } else {
                localStorage.setItem('user_type', userType)
            }

            $(window).on('popstate', function() {
                vm.handleBackBtn();
            });
        },
        destroyed() {
            // this.$store.commit('common/reset');
        },
        methods: {
            handleBackBtn() {
                // this.$router.go(-1);
            }
        }
    }
</script>
