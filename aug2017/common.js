$(function(){
  /*获取验证码*/
  /*传入点击元素的form父元素*/
  /*在函数中用find查找其下的子元素*/
  $('.getVerify').click(function () {
    var parent = $(this).parents('form');
    get_verify(parent);
  });
  function get_verify(parent) {
    /*将parent传入子函数*/
    var parent = parent;
    var mobile = parent.find(".tel").val();
    var type = parent.find('.type').val();
    var partten = /^1[3-9]\d{9}$/;
    if(!partten.test(mobile)){
      parent.find('.hint').text("手机号码不正确").css('color','red');
      parent.find(".tel").focus();
      return false;
    }
    $.get("http://www.cy177.com/api.php?op=sms&callback=?",{ mobile: mobile,type:type,random:Math.random()}, function(data){
      if(data=="0") {
        parent.time = 120;
        parent.find(".getVerify").attr("disabled", true);
        parent.isinerval = setInterval( function () {
          CountDown(parent)
        } , 1000);
      }else if(data=="true") {
        parent.find('.hint').text("你已注册请勿重复").css('color','red');
      }else if(data=="-1") {
        parent.find('.hint').text("你今天获取验证码次数已达到上限").css('color','red');
      }else {
        parent.find('.hint').text("短信发送失败").css('color','red');
      }
    },'jsonp');
  }
  /*验证码禁用*/
  function CountDown(parent) {
    if (parent.time < 1) {
      parent.find(".getVerify").val("获取验证码").attr("disabled", false).css({'backgroundColor':'#a90015','cursor':'pointer'});
      clearInterval(parent.isinerval);
      return;
    }
    parent.find(".getVerify").val(parent.time+"秒后重获").css({'backgroundColor':'#242424','cursor':'default'});
    parent.time--;
  }
  /*验证码是否正确*/
  /*Done  index 改为parent*/
    $(".verify").blur(function(){
      var parent = $(this).parents('form');
      if(parent.find('.verify').val() != '' && parent.find('.verify').val() != '验证码'){
        verify = parent.find(".verify").val();
        mobile= parent.find(".tel").val();
        type = parent.find('.type').val();
        $.get("http://www.cy177.com/api.php?callback=?",{op:"sms_idcheck",action:"id_code",mobile:mobile,mobile_verify:verify,type:type}, function(data){
          if( data == "1" ) {
            parent.find('.hint').text("验证码正确").css('color','green');
          } else {
            parent.find('.hint').text("验证码不正确").css('color','red');
            return false;
          }
        },'jsonp');
      }
    });

  /*表单提交*/
  /*Done  index 改为parent*/
  $(".sub").click(function(){
    var parent = $(this).parents('form');
    verify = parent.find(".verify").val();
    mobile= parent.find(".tel").val();
    username = parent.find(".name").val();
    type = parent.find('.type').val();
    console.log('name: '+username+', mobile: '+mobile+', verify :'+verify+', type :' +type);
    /*点击提交按钮 验证数据*/
    $.get("http://www.cy177.com/index.php?m=ptjd&c=index&a=register&callback=?",{Cname:username,Mobile:mobile,type:type,mobile_verify:verify},function(data){
      if(data == 'success'){
        alert('感谢您的参与！我们将会尽快与您联系！');
        parent.find('.hint').text('感谢您的参与！我们将会尽快与您联系！').css('color','green')
      }else if(data == 'true'){
        parent.find('.hint').text('您已成功参与活动报名，请勿重复提交！').css('color','red');
      }else if(data == 'errorcode'){
        parent.find('.hint').text("验证码不正确").css('color','red');
        parent.find('.verify').focus();
      }else if(data == 'errortel'){
        parent.find('.hint').text("手机号码不正确").css('color','red');
        parent.find('.tel').focus();
      }
    },'jsonp');
    return false;
  });


  $('.tel').on('focus',function () {
		if($(this).attr('value') == '电话'){
			$(this).val('');
		}
	}).on('blur',function () {
		if($(this).val() == ''){
			$(this).attr('value','电话').val('电话');
		}
	}).on('change',function () {
    if($(this).val() != '' && $(this).val != '电话'){
      $(this).attr('value',$(this).val());
    }
  });
	$('.verify').on('focus',function () {
    if($(this).attr('value') == '验证码'){
      $(this).val('');
    }
  }).on('blur',function () {
		if($(this).val() == ''){
		  $(this).val('验证码').val('验证码');
		}
	}).on('change',function () {
    if($(this).val() != '' && $(this).val != '验证码'){
      $(this).attr('value',$(this).val());
    }
  });
  /* END 表单验证 */
  /* video */
  /* oncanplaythrough 可以正常播放且无需停顿和缓冲时触发。 */
  /* $('video').on('canplaythrough',function(){
    
    $('#video').show();
  }); */
  $('#video span').hide();/* 隐藏 */
  var maxmin = false;/* false为最小 */
  $('#video').on('mouseover',function(){
    $('#video span').show();
  }).on('mouseleave',function(){
    $('#video span').hide();
  }).on('click',function(){
    if(!maxmin){
      /* 只有最小化时点击有效 */
      var wh = setWH();
      $('#video').css({'width':wh.w,'height':wh.h,'bottom':wh.top,'left':wh.left});
      /* $('video').css({'width':wh.w,'height':wh.h}); */
      maxmin = true;
      setMaxmin(maxmin);
    }
    
  });
  $('#video .close').on('click',function(ev){
    var ev = ev || window.event;
    ev.stopPropagation();
    $('#video').hide()
    $('#video1').get(0).pause();
  });
  $('#video .maxmin').on('click',function(ev){
    var ev = ev || window.event;
    ev.stopPropagation();
    if(maxmin){
      /* 最大 */
       $('#video').css({'width':400,'height':225,'bottom':0,'left':0});
       maxmin = false;
       setMaxmin(maxmin);
      /* $('video').css({'width':wh.w,'height':wh.h}); */
    }else{
      var wh = setWH();
      $('#video').css({'width':wh.w,'height':wh.h,'bottom':wh.top,'left':wh.left});
      /* $('video').css({'width':wh.w,'height':wh.h}); */
      maxmin = true;
      setMaxmin(maxmin);
    }

  })

  function getWin(){
    /* 获取屏幕宽高 */
    var win = {};
    win.w = $(window).outerWidth();
    win.h = $(window).outerHeight();
    console.log('getWin  :'+ win.w+':'+win.h);
    return win;
  }
  
  function setWH(){
    /* 设置#video宽高 及top/left */
    var wh = {};
    var win = getWin()
    wh.w = win.w;
    wh.h = wh.w * 1080 / 1920 ;
    wh.top = (win.h - wh.h) / 2;
    wh.left = (win.w - wh.w) / 2;
    if(wh.h > win.h){
      /* 当视频高度大于屏幕可视区域高度时 */
      wh.h = win.h;
      wh.w = win.h * 1920 / 1080;
      wh.top = 0;
      wh.left = ( win.w - wh.w) / 2;
    }
    return wh;
  }

  function setMaxmin(bool){
    if(bool){
      /* 最大时 html ==> _ */
      $('#video .maxmin').html('_');
    }else{
      $('#video .maxmin').html('□');
    }
  }

  $(window).on('resize',function(){
    if(maxmin){
      /* 最大 */
      $('#video').css({'width':400,'height':225,'bottom':0,'left':0});
      maxmin = false;
      setMaxmin(maxmin);
      /* $('video').css({'width':wh.w,'height':wh.h}); */
    }else{
      var wh = setWH();
      $('#video').css({'width':wh.w,'height':wh.h,'bottom':wh.top,'left':wh.left});
      /* $('video').css({'width':wh.w,'height':wh.h}); */
      maxmin = true;
      setMaxmin(maxmin);
    }
  });

})