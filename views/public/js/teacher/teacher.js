define(['jquery','template'], function($,template) {
    //加载页面后向后台发送ajax请求，获取数据显示
    $.ajax({
        url:'/api/teacher',
        type:'get',
        success:function(res){
            // console.log(res);
            if(res.code == 200){
                var htmlStr = template('tpl_teacher_list',res);
                // console.log(htmlStr);
                $('.main tbody').html(htmlStr);
            }
        }
    });
});