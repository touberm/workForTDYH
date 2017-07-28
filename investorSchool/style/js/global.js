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


/* calendar 日历部分函数 */

function getCurrent(){
/* 获取当前年月 月份格式设置为[1-12] */
  var time = new Date();
  var y = time.getFullYear();
  var m = time.getMonth();
  /* 获取日期中的月份(需要注意的是：月份是从0开始计算，获取的值比正常月份的值少1) 
    将其转为[1-12]格式
  */
  var dateObj = {'y':y,'m':m+1};
  return dateObj;
}

function soleArr(arr){
  /* 数组去重  获得月份里都有哪些有文章 */
  var sole = {};
  for(var i in arr){
    if(!sole[parseInt(arr[i])]){
      /* 如果不存在 将其存入对象,保存的信息作为键名 arr[i]为两位的字符串 如"02,13" 需用parseInt转为数字 */
      sole[parseInt(arr[i])] = true;
    }
  }
  return sole;
}


function getDate(y,m){
  /* 通过year和month 设置日期信息 */
  var firstday = new Date(y,m-1,1);
  /* 获取当月的第一天 */
  var dayOfWeek = firstday.getDay();
  /* 判断第一天是星期几(返回[0-6]中的一个，0代表星期天) */
  var daysPerMonth = new Array(31, 28 + isLeap(y), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  /* 创建月份数组 */
  var lineNum = Math.ceil((dayOfWeek + daysPerMonth[m-1]) / 7);
  /* 确定日期表格所需的行数 */

  var dateObj = {'y':y,'m':m,'dayOfWeek':dayOfWeek,'daysPerMonth':daysPerMonth[m-1],'lineNum':lineNum};
  /* 将信息储存在对象中 */
  return dateObj;
}

function isLeap(year){
  /* 如果当前年份能被4整除但是不能被100整除或者能被400整除，即可确定为闰年，返回1，否则返回0 */
  return year % 4 == 0 ? (year % 100 != 0 ? 1 : (year % 400 == 0 ? 1 : 0)) : 0;
}


function setBtn(y,m) {
  /* 设置月份跳转按钮 */
  var obj = {}
  if(m>12){
    obj.m =1;
    obj.y = y+1;
    return obj;
  }
  if(m<1){
    obj.m = 12;
    obj.y = y-1;
    return obj;
  }
  obj.m = m;
  obj.y = y;
  return obj;
  
}

function formateM(m){
  /* 格式化月份为2位数 */
  return ( parseInt(m)<10 ) ? ( '0'+ m) : m;
}

/* END  calendar 日历部分函数 */