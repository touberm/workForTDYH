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

})