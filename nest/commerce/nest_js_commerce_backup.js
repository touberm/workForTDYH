$(function(){
	/*添加css链接及html内容*/

	var nestL;
	var nestR;
	var nestM;

	nestL = $('#nest_sidebar_left');
	setVertical(nestL);

	nestR = $('#nest_sidebar_right');
	setVertical(nestR);

	nestM = $('#nest_middle');
	setVertical(nestM);
	serHorizontal(nestM);

	$(window).on('scroll',function(){
		/*设置垂直居中*/
		setVertical(nestL);
		setVertical(nestR);
		setVertical(nestM);
		/*设置水平居中*/
		serHorizontal(nestM);
	});


	$(window).on('resize',function(){
		/*设置垂直居中*/
		setVertical(nestL);
		setVertical(nestR);
		setVertical(nestM);
		/*设置水平居中*/
		serHorizontal(nestM);
	});

	/*点击关闭*/
	$('#nest_middle .n_close').on('click',function(){
		nestM.hide();
	});

	/*设置咨询链接*/
	$('a.n_consult').attr({'href':'http://wpa.qq.com/msgrd?v=3&uin=617559635&site=qq&menu=yes','target':'_blank'});
});
$('a.n_consult').on('load',function(){
	$('a.n_consult').attr({'href':'http://wpa.qq.com/msgrd?v=3&uin=617559635&site=qq&menu=yes','target':'_blank'}).css({'cursor':'pointer'});
});

function setVertical(label){

	var outerH = label.outerHeight();
	var wh = $(window).height();
	label.css('top',(wh-outerH)/2);
}
function serHorizontal(label){
	var outerW = label.outerWidth();
	var ww = $(window).width();
	label.css('left',(ww-outerW)/2);
}
