define(['jquery', 'template'], function ($, template) {
    //点击编辑教师功能
    // console.log(location.search);
    // 根据跳转过来时候的链接后面的获取tc_id
    var searchStr = location.search;
    searchStr = searchStr.slice(1);
    var searchArr = searchStr.split('&');
    var objTemp = {};
    for (var i = 0; i < searchArr.length; i++) {
        var tempArr = searchArr[i].split('=');
        objTemp[tempArr[0]] = tempArr[1];
    }
    $.ajax({
        'url': '/api/teacher/edit',
        type: 'get',
        data: {
            tc_id: objTemp.tc_id
        },
        success: function (res) {
            // console.log(res);
            if (res.code == 200) {
                res.result.title = '讲师编辑';
                res.result.saveBtnText = '保 存';
                var htmlStr = template('tpl_teacherInfo_edit', res.result);
                $('.main .teacher').html(htmlStr);
                // console.log(htmlStr);
            }
        }
    });
});