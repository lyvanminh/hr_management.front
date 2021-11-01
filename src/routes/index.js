import Login from './../pages/auth/Login';
import Signup from './../pages/auth/Signup';
// import AdsManager from "../pages/admin/AdsManager";
import UserType from './../pages/usertype';
import AddUser from "../pages/admin/AddUser";

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
        path: '/sign-up',
        meta: {
            auth: false,
            not_sidebar: true
        },
        name: 'Signup',
        component: Signup
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