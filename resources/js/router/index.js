import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/dashboard',
        redirect: '/dashboard',
        component: () => import('../views/mainView'),
        // meta: {authOnly: true},
        children: [
            {
                path: '/',
                name: 'Dashboard',
                component: () => import('../views/Dashboard'),
                meta: {authOnly: true, conditionalRoute: true}
            },
            {
                path: "/content/:hash?",
                name: "Content",
                component: () => import('../views/ManageContent'),
                meta: {authOnly: true}
            },
            {
                path: "/settings/general/:hash?",
                name: "Settings",
                component: () => import('../views/Settings'),
                meta: {authOnly: true, conditionalRoute: true}
            },
            {
                path: "/video-upload-questionnaire",
                name: "videoQuestionnaire",
                component: () => import('../views/VideoUpload'),
                meta: {authOnly: true}
            },
            {
                path: "/video-add-meta/:uuid",
                name: "videoAddMeta",
                component: () => import('../views/VideoAddMeta'),
                meta: {authOnly: true}
            },
            {
                path: "/audio-add-meta/:uuid",
                name: "audioAddMeta",
                component: ()=> import('../views/AudioAddMeta'),
                meta: {authOnly: true}
            },
            {
                path: "/audio-upload-questionnaire",
                name: "audioQuestionnaire",
                component: () => import('../views/AudioUpload'),
                meta: {authOnly: true, conditionalRoute: true}
            },
            {
                path: "/media-file-upload",
                name: "fileDetectionUpload",
                component: () => import('../views/FileDetectionUpload'),
                meta: {authOnly: true, conditionalRoute: true}
            },
            {
                path: "/company-questionnaires-details/:hash?",
                name: "CompanyQuestionnairesDetails",
                component: () => import('../views/CompanyQuestionnairesDetails'),
                meta: {authOnly: true, conditionalRoute: true}
            },
            {
                path: "/company/:slug/video-details/:id",
                name: "ViewVideoDetails",
                component: () => import('../views/ViewVideoDetails'),
            },
            {
                path: "/company/:slug/audio-details/:id",
                name: "ViewAudioDetails",
                component: () => import('../views/ViewAudioDetails'),
            },
            {
                path: "/company/:slug/:callFrom?",
                name: "CompanyDetails",
                component: () => import('../views/CompanyDetails'),
            },
            {
                path: "/company-pdf/:slug",
                name: "CompanyDetailsPdf",
                component: () => import('../views/CompanyDetailsPdf'),
                meta: {authOnly: true}
            },
            {
                path: "/new-screener",
                name: "NewScreener",
                component: () => import('../views/NewScreener'),
            },
            {
                path: "/screener",
                name: "Screener",
                component: () => import('../views/Screener'),
            },
            {
                path: "/video/edit-step1/:id/:fileId?",
                name: "VideoStepOneEdit",
                component: () => import('../views/VideoStepOneEdit'),
                meta: {authOnly: true}
            },
            {
                path: "/video/edit-step2/:id",
                name: "VideoStepTwoEdit",
                component: () => import('../views/VideoStepTwoEdit'),
                meta: {authOnly: true}
            },
            {
                path: "/audio/edit-step1/:id/:fileId?",
                name: "AudioStepOneEdit",
                component: () => import('../views/AudioStepOneEdit'),
                meta: {authOnly: true, conditionalRoute: true}
            },
            {
                path: "/audio/edit-step2/:id",
                name: "AudioStepTwoEdit",
                component: () => import('../views/AudioStepTwoEdit'),
                meta: {authOnly: true, conditionalRoute: true}
            },
            // {
            //     path: "/integration",
            //     name: "SocialIntegration",
            //     component: () => import('../views/SocialIntegration'),
            //     meta: {authOnly: true, conditionalRoute: true}
            // },
            {
                path: "/personalized-news-industry",
                name: "PersonalizedNewsIndustry",
                component: () => import('../views/PersonalizedNewsIndustry'),
                meta: {authOnly: true, conditionalRoute: true}
            },
            {
                path: "/personalized-news-node",
                name: "PersonalizedNewsNode",
                component: () => import('../views/PersonalizedNewsNode'),
                meta: {authOnly: true, conditionalRoute: true}
            },
            {
                path: "/dashboard-contact-us",
                name: "ContactUsIssuer",
                component: () => import('../views/ContactUsIssuer'),
                meta: {authOnly: true}
            },
            {
                path: "/bulletins/:index",
                name: "Bulletins",
                component: () => import('../views/Bulletins'),
                meta: {authOnly: true}
            },
            {
                path: "/chat",
                name: "Chat",
                component: () => import('../views/Chat'),
                meta: {authOnly: true}
            },
            {
                path: "/analytics",
                name: "Analytics",
                component: () => import('../views/Analytics'),
                meta: {authOnly: true, conditionalRoute: true}
            },
            {
                path: "/messages/:index",
                name: "Messages",
                component: () => import('../views/Messages'),
                meta: {authOnly: true}
            },
        ]
    },
    {
        path: "/",
        name: "Home",
        component: () => import('../views/Home.vue'),
        meta: {guestOnly: true}
    },
    {
        path: "/platform",
        name: "Platform",
        component: () => import('../views/Platform'),
        meta: {guestOnly: true}
    },
    {
        path: "/thank-you",
        name: "ThankYou",
        component: () => import('../views/ThankYou'),
        meta: {guestOnly: true}
    },
    {
        path: "/contact-us",
        name: "ContactUs",
        component: () => import('../views/ContactUs'),
        meta: {guestOnly: true}
    },
    {
        path: "/beta-program",
        name: "BetaProgram",
        component: () => import('../views/BetaProgram'),
        meta: {guestOnly: true}
    },
    {
        path: "/press",
        name: "Press",
        component: () => import('../views/Press'),
        meta: {guestOnly: true}
    },
    {
        path: "/privacypolicy",
        name: "PrivacyPolicy",
        component: () => import('../views/PrivacyPolicy'),
    },
    {
        path: "/termsofservice",
        name: "TermsofService",
        component: () => import('../views/TermsofService'),
    },
    {
        path: "/services",
        name: "Services",
        component: () => import('../views/Services'),
        meta: {guestOnly: true}
    },
    {
        path: "/aboutus",
        name: "AboutUs",
        component: () => import('../views/AboutUs'),
        meta: {guestOnly: true}
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('../views/Login'),
        meta: {guestOnly: true}
    },
    {
        path: "/signup",
        name: "SignUp",
        component: () => import('../views/Signup'),
        meta: {guestOnly: true}
    },
        {
            path: "/company-updates",
            name: "CompanyUpdates",
            component: () => import('../views/CompanyUpdates'),
            meta: {guestOnly: true}
        },
    /*{
        path: "/profile-questionnaire",
        name: "profileQuestionnaire",
        component: () => import('../views/profileQuestionnaire'),
        meta: {authOnly: true, conditionalRoute: true}
    },*/
    /*{
        path: "/dashboard",
        name: "Dashboard",
        component: () => import('../views/Dashboard'),
        meta: {authOnly: true, conditionalRoute: true}

    },*/
    /*{
        path: "/content/:hash?",
        name: "Content",
        component: () => import('../views/Content'),
        meta: {authOnly: true}
    },*/
   /* {
        path: "/video-details/:id",
        name: "ViewVideoDetails",
        component: () => import('../views/ViewVideoDetails'),
    },*/
    {
        path: '/v/:id',
        name: "VideoDetailsShare",
        redirect: {name: 'ViewVideoDetails'}
    },
    /*{
        path: "/audio-details/:id",
        name: "ViewAudioDetails",
        component: () => import('../views/ViewAudioDetails'),
        meta: {authOnly: true, conditionalRoute: true}
    },*/
    {
        path: '/a/:id',
        name: "AudioDetailsShare",
        redirect: {name: 'ViewAudioDetails'},
        meta: {authOnly: true, conditionalRoute: true}
    },
    /*{
        path: "/analytics",
        name: "Analytics",
        component: () => import('../views/Analytics'),
        meta: {authOnly: true, conditionalRoute: true}
    },*/
    /*{
        path: "/settings/general",
        name: "Settings",
        component: () => import('../views/Settings'),
        meta: {authOnly: true, conditionalRoute: true}
    },*/
    /*{
        path: "/personalized-news-industry",
        name: "PersonalizedNewsIndustry",
        component: () => import('../views/PersonalizedNewsIndustry'),
        meta: {authOnly: true, conditionalRoute: true}
    },
    {
        path: "/personalized-news-node",
        name: "PersonalizedNewsNode",
        component: () => import('../views/PersonalizedNewsNode'),
        meta: {authOnly: true, conditionalRoute: true}
    },*/
    /*Dashboard Company Profile Show and Edit*/
    /*{
        path: "/company-questionnaires-details/:hash?",
        name: "CompanyQuestionnairesDetails",
        component: () => import('../views/CompanyQuestionnairesDetails'),
        meta: {authOnly: true, conditionalRoute: true}
    },*/
    {
        path: "/edit-company-profile",
        name: "EditCompanyProfile",
        component: () => import('../components/company/EditCompanyProfile'),
        meta: {authOnly: true, conditionalRoute: true}
    },
    {
        path: "/edit-company-executives",
        name: "EditCompanyExecutives",
        component: () => import('../components/company/EditCompanyExecutives'),
        meta: {authOnly: true, conditionalRoute: true}
    },
    {
        path: "/edit-company-types",
        name: "EditCompanyTypes",
        component: () => import('../components/company/EditCompanyTypes'),
        meta: {authOnly: true, conditionalRoute: true}
    },
    {
        path: "/edit-company-finances",
        name: "EditCompanyFinances",
        component: () => import('../components/company/EditCompanyFinances'),
        meta: {authOnly: true, conditionalRoute: true}
    },
    {
        path: "/edit-company-social",
        name: "EditCompanySocial",
        component: () => import('../components/company/EditCompanySocial'),
        meta: {authOnly: true, conditionalRoute: true}
    },
    {
        path: "/edit-company-taxonomy/:id",
        name: "EditCompanyTaxonomy",
        component: () => import('../components/company/EditCompanyTaxonomy'),
        meta: {authOnly: true, conditionalRoute: true}
    },
    {
        path: "/edit-company-taxonomy",
        name: "AddCompanyTaxonomy",
        component: () => import('../components/company/EditCompanyTaxonomy'),
        meta: {authOnly: true, conditionalRoute: true}
    },
    /*{
        path: "/company/:uuid",
        name: "CompanyDetails",
        component: () => import('../views/CompanyDetails'),
    },*/
    /*End*/
    /* {
         path: "/video-upload-questionnaire",
         name: "videoQuestionnaire",
         component: () => import('../views/videoQuestionnaire'),
         meta: {authOnly: true}
     },*/
    /* {
         path: "/audio-upload-questionnaire",
         name: "audioQuestionnaire",
         component: () => import('../views/audioQuestionnaire'),
         meta: {authOnly: true, conditionalRoute: true}
     },*/
    {
        path: "/document-upload",
        name: "DocumentUpload",
        component: () => import('../views/DocumentUpload'),
        meta: {authOnly: true}
    },
    {
        path: "/unauth-video-upload-questionnaire",
        name: "UnAuthVideoQuestionnaire",
        component: () => import('../views/UnAuthVideoQuestionnaire'),
    },
    {
        path: "/unauth-audio-upload-questionnaire",
        name: "UnAuthAudioQuestionnaire",
        component: () => import('../views/UnAuthAudioQuestionnaire'),
    },
    {
        path: "/password/email",
        name: "PasswordRequest",
        component: () => import('../views/PasswordRequest'),
        meta: {guestOnly: true}
    },
    {
        path: "/password/reset/:token",
        name: "PasswordReset",
        component: () => import('../views/PasswordReset'),
        meta: {guestOnly: true}
    },
    /*{
        path: "/video/edit-step1/:id/:fileId?",
        name: "VideoStepOneEdit",
        component: () => import('../views/VideoStepOneEdit'),
        meta: {authOnly: true}
    },
    {
        path: "/video/edit-step2/:id",
        name: "VideoStepTwoEdit",
        component: () => import('../views/VideoStepTwoEdit'),
        meta: {authOnly: true}
    },
    {
        path: "/audio/edit-step1/:id/:fileId?",
        name: "AudioStepOneEdit",
        component: () => import('../views/AudioStepOneEdit'),
        meta: {authOnly: true, conditionalRoute: true}
    },
    {
        path: "/audio/edit-step2/:id",
        name: "AudioStepTwoEdit",
        component: () => import('../views/AudioStepTwoEdit'),
        meta: {authOnly: true, conditionalRoute: true}
    },*/
    {
        path: '/not-found',
        name: 'notFound',
        component: () => import('../views/NotFound'),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    },
});

function isLoggedIn() {
    return localStorage.getItem("token");
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly) && to.matched.some(record => record.meta.conditionalRoute)) {
        // this route requires condition to be accessed
        // if not, redirect to home page.
        if (localStorage.getItem("videoUploadRemainingDays") == 0 && localStorage.getItem('isVideoUploaded') == 'no') {
            //check codition is false
            next({path: '/video-upload-questionnaire'})
        } else {
            //check codition is true
            if (!isLoggedIn()) {
                next({
                    path: "/login",
                    query: {redirect: to.fullPath}
                });
            } else {
                next();
            }
        }
    } else if (to.matched.some(record => record.meta.authOnly)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!isLoggedIn()) {
            next({
                path: "/login",
                query: {redirect: to.fullPath}
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guestOnly)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (isLoggedIn()) {
            next({
                path: "/dashboard",
                query: {redirect: to.fullPath}
            });
        } else {
            next();
        }
    } else if (!to.matched.length) {
        next('/not-found');
    } else {
        next(); // make sure to always call next()!
    }
});

export default router;
