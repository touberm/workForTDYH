### Status 1  
**2017/6/15**  
- 任务描述
  + 制作js嵌套代码  
  + 图片应该用网络地址
  + 查找qq点击咨询代码
- 当日进度:#nest_sidebar_right > QR_code_bg > img :css设置  

### Status 2
**2017/6/16**  
- 完成情况
  + 使用JQ动态设置几个单位的top和left居中时,初始加载时会有定位偏离的问题,目前观测到的情况是,nest_left的outerHeight()本应有364;但是初始加载显示只有150左右,究其原因可能是因为先生成了html标签的加载,但是在未渲染加载的css时已经执行outerHeight();导致定位偏离;但是scroll事件又使其恢复正常位置,此事件函数没有重新设置outerHeight?
- 文件说明
  + index.html ==> 测试网络链接页
  + index_test.html ==> 测试本地链接页
  + index_backup.html ==> 备份调试动态添加的html代码
  + nest_js_commerce.css ==> css文件
  + nest_js_commerce.js ==> js文件
  + images/ ==> 图片
- 要点说明  
  + index_backup.html 调试完毕后,将相关代码压缩后,添加至js中,注意应全部用双引号,跟js中的单引号区分开,双斜线改为'\\/\\/'
  + 引用的jq代码和js代码添加到</body>之前
  + 网站中上传.images,.css和.js文件,其他无用
- 嵌套代码文件路径说明
  + ./nest/项目名/  

### Status 3  
**2017/6/16**  
- 解决status 2 中的jq动态加载居中问题
  + 原因: 
  + 在js中动态添加的$('head').append('CSS代码'),会在当前js加载完毕后再加载,而当前js就会获取其中$('body').append('HTML代码')的css属性,因此获取的是没有加载css的原始样式
  + 解决方案1:
  + css代码不在js中添加,而是直接添加在.html文件中,并且要在js代码前添加
  + 其他方案:?
  + 用createElement的方式添加link等标签,不知是否可行  

### Status 4  

**2017/6/6**  
- 更改部分  
  + img标签全部替换为背景图
  + 左右靠边不留空隙,底部也不留空隙
  + 弹窗的弹出时间。刚进入网页2.5秒打开一下，然后每过20秒弹出一次
  + 底部a添加`animation:flicker 1s linear infinite;`
- 更新注意事项
  + 1. css修改一般js里的htmlStr也要修改 所以.css和.js一般同步更新
  + 2. 大多网站上传的.css和.js需要更新版本号才能显示最新效果?v0.1
  + 3. 待续。。。


