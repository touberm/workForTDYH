### 特殊说明

- 传参:
  + gAuthor:作者名;page_gatDetail.html
  + year:年;page_month.html
  + month:月;page_month.html
  + day:日;page_month.html,page_day.html

- 开发带有{template "content","header"}的页面都需要添加日历部分代码

- page_gather.html向page_gatDetail.html传递参数,保持其参数名一致
  + 示例: http://baidu.com?id=1&catid=0&m=1&**gAuthor**=作者名;  
- page_month.html 单独页面  没有引用{template "content","header/footer"}
  + header/footer.html 修改时要单独更新page_month.html
  + 在日历切换过程中,php获取url获得的年/月 并通过phpcms的get查询数据库,  cache='3600'会导致缓存不能刷新,数据一直是最开始页面,因此应该删除该{pc:get}参数
  + 关键点:
  + 1.php获取url传参  $year = !empty($_GET["year"]) ? $_GET["year"] : date('Y');当参数不存在时,获取当前的年月
  + 2.数据库查询 匹配年月的数据 SELECT * FROM `v9_news` WHERE DATE_FORMAT(FROM_UNIXTIME(inputtime),'%Y-%m')='$year-$month' ORDER BY inputtime DESC  其中DATE_FORMAT(FROM_UNIXTIME(inputtime),'%Y-%m')是将时间转换格式,方便进行匹配
  + 3.php新建一个数组$arr 循环查询到的数据 并添加到数组中array_push($arr,date('d',$rr[inputtime]));
  + 4.js获取php设置的变量年月,加了引号获取到的是字符串,需要转为数字 var urlYear = parseInt('<?php echo $year ?>')
  + 5.js获取数组,由于没加引号,所以保留了数组的格式,而不是字符串 var arr = <?php echo json_encode($arr);?>
  + 6.添加js日历代码,重点在于,每个月的第一天是星期几[0-6],前面就要空几个位子,详情见page_month.html
  + 7.数据库查询需要用到两位数的月份,所以传参应该直接传2位数的月份值(传参注意********)
  + 8.待加



