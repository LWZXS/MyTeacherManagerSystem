require.config({
    baseUrl: "/views/public",
    paths: {
        "jquery": "assets/jquery/jquery.min",
        "cookie": "assets/jquery-cookie/jquery.cookie",
        "bootstrap": "assets/bootstrap/js/bootstrap.min",
        "nprogress": "assets/nprogress/nprogress",
        "template": "assets/artTemplate/template",
        "common": "js/dashborder/common",
        "login": "js/dashborder/login"
    },
    shim: {
        "bootstrap": {
            "deps": ['jquery']
        }
    }
});
require(['common']);