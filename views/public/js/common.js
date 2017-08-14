// NProgress.start();

// NProgress.done();

// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();
// });

if(!$.cookie("PHPSESSID") && location.pathname.indexOf('/login') == -1){
	location.href = '/login';
}