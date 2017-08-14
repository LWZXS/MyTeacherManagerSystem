define(['jquery'], function ($) {
    $("#loginForm").submit(function () {
        var data = $(this).serializeArray();
        $.ajax({
            url: '/api/login',
            type: "POST",
            data: data,
            success: function (res) {
                if (res.code == 200) {
                    var info = JSON.stringify(res.result);
                    $.cookie("tc_info", info);
                    alert("登陆成功");
                    location.href = '/';
                }
            },
            error: function () {
                alert("用户名或者密码错误");
            }
        });
        return false;
    });

});