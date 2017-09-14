$(function(){
  $('#wxshow').hide();
  var wx={};
  wx.h=$('#wx').height();
  var win = {};
  win.h=$(window).height();
  var wxs = {};
  wxs.h=$('#wxshow>img').height();
  var wxc = {};
  console.log(wxs.h)
  $('#wx').css('top',(win.h-wx.h)/2);
  $('#wx>img').on('touchstart',function(){
    $('#wxshow').show();
    wxs.h=$('#wxshow>img').height();
    wxc.h=$('#wxshow .content').height();
    console.log(wxs.h)
    $('#wxshow>img').css('margin-top',(win.h-wxs.h)/2);
    $('#wxshow .content').css('top',(win.h-wxc.h)/2);
  });
   $('#wx>p').on('touchstart',function(){
    $('#wxshow').show();
    wxs.h=$('#wxshow>img').height();
    wxc.h=$('#wxshow .content').height();
    console.log(wxs.h)
    $('#wxshow>img').css('margin-top',(win.h-wxs.h)/2);
    $('#wxshow .content').css('top',(win.h-wxc.h)/2);
  });
  $('#wxshow .close').on('touchstart',function(){
    $('#wxshow').hide();
  })
})