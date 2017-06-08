$(function(){
  /*applay*/
    /*tab*/
  $('.menu a').on('click',function(){
    var index = $('.menu a').index(this);
    $('.menu a').removeClass('choice').eq(index).addClass('choice');
    $('#body .main').hide().eq(index).show();
    $('.fwb').html(0);
    $('.somme a').removeClass('current');
    $('.bankList a').removeClass('current');
  });
    /*choice somme*/
  $('.somme a').on('click',function(){
    var index = $('.somme a').index(this);
    $('.somme a').removeClass('current').eq(index).addClass('current');
    var somme = $('.somme a').eq(index).attr('data-val');
    $('.fwb').html(somme);
  });
    /*choice  apply platform*/
  $('.applyPlatform a').on('click',function(){
    var index = $('.applyPlatform a').index(this);
    $('.applyPlatform a').removeClass('current').eq(index).addClass('current');
  })
    /*Other amount*/

  $('.somme .otherAmount').on('blur',function(){
    var somme = $(this).val();
    if(somme == '' || somme == 0){
      $('.fwb').html(0);
    }else{
      $('.fwb').html(somme);
    }
  }).on('focus',function(){
    $('.somme a').removeClass('current');
  });
    /*choice Bank*/
  $('.bankList a').on('click',function(){
    var index = $('.bankList a').index(this);
    $('.bankList a').removeClass('current').eq(index).addClass('current');
  });
    /*click button*/
  $('.btn').on('click',function(){
    alert('支付功能暂未开通!')
  })

})
