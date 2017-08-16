define(['jquery','template','bootstrap'], function($,template) {
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

    //点击弹出模态框显示教师详细信息模块
    $("#teacher_list_body").on('click','.checkInfo',function(){
        // alert("123");
        // console.log($(this).parent().data("id"));
        $.ajax({
            url:'/api/teacher/view',
            type:'get',
            data:{tc_id:$(this).parent().data("id")},
            success:function(res){
                // console.log(res);
                if(res.code==200){
                    var htmlStr = template('tpl_teacher_checkInfo',res.result);
                    // console.log(htmlStr);
                    $("#teacherModal tbody").html(htmlStr);
                    $("#teacherModal").modal();

                }
            }
        });
    });

    //点击注销启用教师功能
    $("#teacher_list_body").on('click','.btn_use_or_not',function(){
        // console.log($(this).attr("data-status"));
        var _this = $(this);
        $.ajax({
            url:"/api/teacher/handle",
            type:"post",
            data:{
                "tc_id":$(this).parent().data("id"),
                "tc_status":$(this).attr("data-status")
            },
            success:function(res){
                // console.log(res);
                if(res.code==200){
                    if(res.result.tc_status == 0){
                        _this.html("注 销");
                    }else{
                        _this.html("启 用");
                    }
                     _this.attr("data-status",res.result.tc_status)
                }
            }
        });
        
    });
});