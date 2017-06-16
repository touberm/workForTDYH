$(function(){
	/*添加css链接及html内容*/
  var nestStr = '<div id="nest_sidebar_left" class="nest_fixed"> <ul> <li class="first" ><a class="n_consult" href="javascript:;">点击送牛股</a></li> <li class="second"><a class="n_consult" href="javascript:;">开户领赠金</a></li> <li class="third" ><a class="n_consult" href="javascript:;">实盘开户</a></li> <li class="fourth"><a class="n_consult" href="javascript:;">软件下载</a></li> <li class="fifth" ><a href="#">返回顶部</a></li> </ul> </div> <div id="nest_sidebar_right" class="nest_fixed"> <h3>在线咨询</h3> <ul> <li>期货咨询<a class="n_consult"></a></li> <li>股票咨询<a class="n_consult"></a></li> <li>开户咨询<a class="n_consult"></a></li> </ul> <div class="n_wechat"> <p>微信扫一扫</p> <hr> <h3>送超跌牛股</h3> <div class="QR_code_bg"> <div class="QR_code"></div> </div> <a href="javascript:;" style="cursor:default;">打开微信扫一扫</a> </div> <p>咨询热线</p> <p>13241378323</p> </div> <div id="nest_middle" class="nest_fixed n_clear"> <div class="n_fl"></div> <div class="n_fr"> <a class="n_close">×</a> <h3>在线咨询</h3> <p>你好.你想咨询哪方面的问题呢?</p> <a class="n_btn n_consult">匿名咨询</a> </div> </div> <div id="nest_footer" class="nest_fixed"> <p> 大盘跌跌不休!究竟怎么规避风险? <a class="n_consult">免费排队咨询预约</a> 让你在A股市场游刃有余! 大展身手! </p> </div>';
  $('body').append(nestStr);

	var nestL;
	var nestR;
	var nestM;
	var timer;/*页面初始定时器*/
	var interval;/*页面循环定时器*/

	nestL = $('#nest_sidebar_left');
	setVertical(nestL);

	nestR = $('#nest_sidebar_right');
	setVertical(nestR);

	nestM = $('#nest_middle');
	setVertical(nestM);
	serHorizontal(nestM);
	nestM.hide();

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

/*打开页面后2s显示*/
	timer = setTimeout(function(){
		nestM.show();
	},2000);

	/*点击关闭*/
	$('#nest_middle .n_close').on('click',function(){
		nestM.hide();
		/*20s后重新开启*/
		interval = setInterval(function(){
			clearInterval(interval);
			nestM.show();
		},20000);
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
