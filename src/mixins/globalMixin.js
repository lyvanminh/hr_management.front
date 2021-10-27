export default {
    mounted() {
        console.log('mixin mounted on ' + this.$options.name);
        this.$nextTick(() => {
            this.$store.commit('message/setErrorDescription', '');
            this.$store.commit('message/setSuccess', '');
        });
    },
    methods: {
        handleFileUpload(e, callback) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                return '';
            }

            if (files && files[0] && callback) {
                let reader = new FileReader();

                reader.onload = function(e) {
                    callback(e.target.result);
                };

                reader.readAsDataURL(files[0]);
            }

            return files[0];
        },
        uploadImage(e, object, callbackUpload = null) {
            let callback = (imageSrc) => {
                object.image_src = imageSrc

                if (callbackUpload) {
                    callbackUpload();
                }
            };

            object.image = this.handleFileUpload(e, callback);
        },
        // setLinkTo(routerName) {
        //     return {name: routerName, params: {user_type: localStorage.getItem('user_type')}}
        // },
        setLinkTo(routerName) {
            return {name: routerName, params: {user_type: localStorage.getItem('user_type')}};
        },
        showPopup(status) {
            return !status ? 'hide-popup' : '';
        },
        activeIcon(departureId, detinationId) {
            return departureId === detinationId ? 'icon-active' : '';
        },
        activeText(departureId, detinationId) {
            return departureId === detinationId ? 'text-blue' : '';
        },
        triggerSubmit() {
            this.$refs.submit.click();
        }
    }
};
