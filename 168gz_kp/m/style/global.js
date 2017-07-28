$(function () {
  /*DONE 表单验证*/

  /*表单提交*/
  /*Done  index 改为parent*/
  $(".sub").click(function () {
    var parent = $(this).parents('form');
    // verify = parent.find(".verify").val();
    mobile = parent.find(".tel").val();
    username = parent.find(".name").val();
    type = parent.find('.type').val();

    if (username == '') {
      parent.find('.hint').text('请输入姓名！').css('color', 'red');
    } else {
      console.log('name: ' + username + ', mobile: ' + mobile + ', type :' + type);
      /*点击提交按钮 验证数据*/
      $.get("http://www.cy177.com/index.php?m=ptjd&c=index&callback=?", {
        Cname: username,
        Mobile: mobile,
        type: type
      }, function (data) {
        if (data == 'success') {
          parent.find('.hint').text('提交成功!我们将会尽快与您联系！').css('color', 'green');
          $('#success').show();
        } else if (data == 'true') {
          parent.find('.hint').text('请勿重复提交！').css('color', 'red');
        } else if (data == 'errortel') {
          parent.find('.hint').text("手机号码不正确").css('color', 'red');
        }
      }, 'jsonp');
      return false;
    }

  })


  $('#success .close').on('touchend', function () {
    $('#success').hide();
  })


  var wh = $(window).height();
  $('#success').css({top:(wh-380)/2});

  $(window).on('resize',function(){
    wh = $(window).height();
    $('#success').css({top:(wh-380)/2});
  })

  $('#close').on('click',function(){
    $('#kfoutbox').hide();
  })
})