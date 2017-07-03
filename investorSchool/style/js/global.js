$(function(){
  // 顶部菜单
  $('#header .menu li.top').on('mouseover',function(){
    $(this).addClass('on');
    var sub = $(this).find('ul.sub');
    sub.css({'zIndex':'99999'});
    if(sub){
      sub.stop(true,true);
      sub.slideDown();
    }
  }).on('mouseleave',function(){
    $(this).removeClass('on');
    var sub = $(this).find('ul.sub');
    sub.css({'zIndex':'9999'});
    sub.stop(true,true);
    sub.slideUp();
  })
})