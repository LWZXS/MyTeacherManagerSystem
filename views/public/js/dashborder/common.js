// NProgress.start();

// NProgress.done();

// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();
// });

// if(!$.cookie("PHPSESSID") && location.pathname.indexOf('/login') == -1){
// 	location.href = '/login';
// }

// if(location.pathname.indexOf('/login') == -1){
// 	var tc_info = JSON.parse($.cookie("tc_info"));
// 	var html = template("tc_profile",tc_info);
// 	$(".aside>.profile").html(html);
// 	// console.log(html);
// }

define(['jquery', 'cookie', 'template'], function ($, cookie, template) {
	if (!$.cookie("PHPSESSID") && location.pathname.indexOf('/login') == -1) {
		location.href = '/login';
	}

	if (location.pathname.indexOf('/login') == -1) {
		var tc_info = JSON.parse($.cookie("tc_info"));
		var html = template("tc_profile", tc_info);
		$(".aside>.profile").html(html);
		// console.log(html);
	}
	$("#logout").on("click",function(){
		$.ajax({
			url : "/api/logout",
			type : "POST",
			success : function(){
				alert("退出成功");
				location.href = "/login";
			}
		});
	});

});