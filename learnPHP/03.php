<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
  body{margin:0;padding:0;background:lightcoral;}
  a{text-decoration:none;}
  #wrap{width:100%;height:400px;background:lightgoldenrodyellow;}
  table{width:340px;background:#fff;padding:5px 10px;margin:60px auto 0;}
  table caption{font-size: 16px;line-height: 40px;color: #555;}
  table {width:340px;}
  table tr{width:340px;}
  table th,table td{width:42px;background-color: #fbfbfb;border: 1px solid #eee;height:26px;}
  table td.on{background-color: #00a67c;cursor: pointer;color:#fff;}
  table th a,table td a{display: block;height:26px;color: #555;text-align: center;font-size: 14px;line-height: 26px;}
  table td.on a{color:#fff;}
  table td a.leftBtn{text-align:left;color:#00a67c;padding-left:10px;}
  table td a.rightBtn{text-align:right;color:#00a67c;padding-right:10px;}
  </style>
</head>
<body>
  <?php echo '<p>Hello World</p>' ?>
  <div id="wrap"></div>
<?php
  /* 获取年份月份,如果不存在设为false  月份为0时empty会判断为false 所以月份区间应为[1-12]  */
  $year = !empty($_GET["year"]) ? $_GET["year"] : false;
  $month = !empty($_GET['month']) ? $_GET['month'] : false;
?>
<script>
  /* 获取年份月份 并转为数据类型 */
  var urlYear = parseInt('<?php echo $year ?>');
  var urlMonth = parseInt('<?php echo $month ?>');
</script>

<script>
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

function setDate() {
/* 设置日期  并返回日期getDate()参数*/
  if(urlYear && urlMonth){
    /* 如果通过url传递日期参数 */
    return getDate(urlYear,urlMonth);
  }else{
    return getDate(getCurrent().y,getCurrent().m);
  }
}




function createCalendar(obj){
  
  var obj = setDate();
  var str = '';
  var dateUrl = 'http://localhost/learnPHP/03.php'
  str +='<table><caption>'+obj.y+'年'+obj.m+'月</caption><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody>'
  /* 生成表头及theader 注意月份需要+1 */

  for(var i=0;i<obj.lineNum;i++){
    str += '<tr>';
    for(var j=0;j<7;j++){
      var index = 7*i + j;
      var start = index - obj.dayOfWeek + 1;
      /* 将index与第一天的星期比较,等于0时,为正确的第一天,但是应该加1  小于0或大于最大天数时为空*/
      start = (start <= 0 || start > obj.daysPerMonth)   ? '' :  (index - obj.dayOfWeek + 1);
      str += '<td><a href="">'+start+'</a></td>'
    }
    str += '</tr>'
  }

  var cur = getCurrent();
  /* 当前年月 */
  var prevM,nextM,prevY,nextY;
  /* 上一月,下一月,上一月年,下一月年*/
  if((cur.y == urlYear && cur.m == urlMonth) || (!urlYear || !urlMonth)){
    /* 传参为当前年份  或者  传参不全/未传参 时*/
    prevM = setBtn(cur.y,cur.m-1).m;
    prevY = setBtn(cur.y,cur.m-1).y;
    /* 不需要设置下一月 */
    

    str += '<tr><td colspan="3"><a href="'+dateUrl+'?year='+prevY+'&month='+prevM+'" class="leftBtn" ><small>&lt;&lt;</small>'+(prevM+1)+'月</a></td><td></td><td colspan="3"></td></tr>'
  }else{
    prevM = setBtn(obj.y,obj.m-1).m;
    prevY = setBtn(obj.y,obj.m-1).y;
    nextM = setBtn(obj.y,obj.m+1).m;
    nextY = setBtn(obj.y,obj.m+1).y;
    str += '<tr><td colspan="3"><a href="'+dateUrl+'?year='+prevY+'&month='+prevM+'" class="leftBtn" ><small>&lt;&lt;</small>'+(prevM)+'月</a></td><td></td><td colspan="3"><a href="'+dateUrl+'?year='+nextY+'&month='+nextM+'"  class="rightBtn"><small>&gt;&gt;</small>'+(nextM)+'月</a></td></tr>'
  }


  
  str += '</tbody></table>'
  
  return str;
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


var wrap = document.getElementById('wrap');
wrap.innerHTML = createCalendar();


</script>
</body>
</html>