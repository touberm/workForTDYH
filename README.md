## 2017-06-19 手机端页面打开微信客户端
项目案例：Imitation/AddWeChat0.1/   
```
 <a href="weixin://"></a>
```

## 2017-06-23 phpcms开发网站 InvestorSchool  
知识点一:  
`{pc:get sql=""}`直接从数据库表调取数据  
可以将夫级栏目下多个子栏目的内容集中调出来  
文章数据库表名 v9_news  文章内容数据库 v9_news_data  

栏目结构:  
- map地图  
  + 栏目1  
    + 栏目1 子栏目1 
      + 栏目1 子栏目1 文章1
      + 栏目1 子栏目1 文章2
      + ...
    + 栏目1 子栏目2  
    + ...
  + 栏目2  
  + 栏目3
  + ...

2017-06-29 进度  
- 调用栏目1下 所有子栏目的所有文章
  + {pc:content action="list/category"}不能将所有文章按时间排序,不能所有文章统一分页
  + 解决办法:
   + 实例:
   + {pc:get sql="SELECT a.parentid,b.catid,b.author,b.title,b.description,b.inputtime,b.url FROM `v9_category` a, `v9_news` b WHERE a.catid = b.catid AND (a.parentid = $catid OR b.catid = $catid) ORDER BY b.inputtime DESC " cache="3600" num="10" page="$_GET[page]" return="data" }
   + 语法:
   + SELECT a.name,b.age FROM `v9_xx` a,`v9_yy` b WHERE a.sex = b.sex AND (其他条件) ORDER BY b.inputtime DESC  
   + 来源:
   + sql的INNER JOIN 连接使用 (runoob教程)

2017-07-03 进度  
- 基本功能完成
- 未完成事项列表  
  + 页面右侧按日期调出文章
  + 按作者调出文章
  