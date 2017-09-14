$(function(){
  var wxh = $('#wx').outerHeight(true);
  var winh = $(window).height();
  $('#wx').css('top',(winh-wxh)/2);
  /* 初始隐藏 */
  $('.figer').hide();
  $('.dl_show').hide();
  $('.slideShow').hide();
  $('.dl_btn .dl').on('mouseover',function(){
    $('.figer').stop(true,true).slideDown();
  }).on('mouseleave',function(){
    $('.figer').stop(true,true).slideUp();
  }).on('click',function(){
    $('.dl_btn .dl').off('mouseleave');
    $('.dl_show').fadeIn();
  });
  $(window).on('resize',function(){
    wxh = $('#wx').outerHeight(true);
    winh = $(window).height();
    $('#wx').css('top',(winh-wxh)/2);
  });
  $('.slide').on('mouseover',function(){
    $('.slideShow').stop(true,true).fadeIn();
  }).on('mouseleave',function(){
    $('.slideShow').stop(true,true).fadeOut();
  });
  $('.service a').on('mouseover',function(){
    $('.slideShow').stop(true,true).fadeIn();
  }).on('mouseleave',function(){
    $('.slideShow').stop(true,true).fadeOut();
  });
  $('.slideShow').on('mouseover',function(){
    $('.slideShow').stop(true,true).fadeIn();
  }).on('mouseleave',function(){
    $('.slideShow').stop(true,true).fadeOut();
  });
  
});