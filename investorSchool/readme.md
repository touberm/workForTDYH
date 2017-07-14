### 特殊说明

- page_gather.html向page_gatDetail.html传递参数,保持其参数名一致
  + 示例: http://baidu.com?id=1&catid=0&m=1&**gAuthor**=作者名;  
- page_month.html 单独页面  没有引用{template "content","header/footer"}
  + header/footer.html 修改时要单独更新page_month.html
  + 在日历切换过程中,php获取url获得的年/月 并通过phpcms的get查询数据库,  cache='3600'会导致缓存不能刷新,数据一直是最开始页面,因此应该删除该{pc:get}参数