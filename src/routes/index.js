import Login from './../pages/auth/Login';
// import AdsManager from "../pages/admin/AdsManager";
import UserType from './../pages/usertype';
import AddUser from "../pages/admin/AddUser";
import uploadCandidate from "../pages/uploadCandidate";
import ListRequest from "../pages/ListRequest";
import ListCandidate from "../pages/ListCandidate";
import ForgotPassword from "./../pages/auth/ForgotPassword";
import ConfirmSignup from "./../pages/auth/ConfirmSignup";

export const routes = [
    //start authenticate
    {
        path: '',
        meta: {
            auth: false,
            not_sidebar: true
        },
        name: 'log-in',
        component: Login
    },
    {
        path: '/forgot-password',
        meta: {
            auth: false,
            not_sidebar: true
        },
        name: 'forgot-password',
        component: ForgotPassword
    },
    {
        path: '/confirm-email',
        meta: {
            auth: false,
            not_sidebar: true
        },
        name: 'confirm-email',
        component: ConfirmSignup
    },
    {
        path: '/add-user',
        name: 'AddUser',
        component: AddUser,
        meta: {
            auth: true,
            not_sidebar: false
        },
    },
    {
        path: '/upload-candidate',
        name: 'uploadCandidate',
        component: uploadCandidate,
        meta: {
            auth: true,
            not_sidebar: false
        },
    },
    {
        path: '/list-request',
        name: 'ListRequest',
        component: ListRequest,
        meta: {
            auth: true,
            not_sidebar: false
        },
    },
    {
        path: '/list-candidate',
        name: 'ListCandidate',
        component: ListCandidate,
        meta: {
            auth: true,
            not_sidebar: false
        },
    },
    {
        path: '/:user_type',
        component: UserType,
        meta: {
            auth: true,
            not_sidebar: false
        },
        children: [

            // {
            //     path: 'ads-data',
            //     name: 'AdsManager',
            //     component: AdsManager,
            //     meta: {
            //         auth: true,
            //     },
            // },
            // {
            //     path: 'user-management',
            //     name: 'UserManager',
            //     component: UserManager,
            //     meta: {
            //         auth: true,
            //     },
            // },
            // {
            //     path: 'add-user',
            //     name: 'AddUser',
            //     component: AddUser,
            //     meta: {
            //         auth: true,
            //     },
            // },
            // {
            //     path: 'edit-user/:username',
            //     name: 'EditUser',
            //     component: EditUser,
            //     meta: {
            //         auth: true,
            //     },
            // },
        ]
    }
];