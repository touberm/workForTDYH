### Status 1  
**2017/6/15**  
- 任务描述
  + 制作js嵌套代码  
  + 图片应该用网络地址
  + 查找qq点击咨询代码
- 当日进度:#nest_sidebar_right > QR_code_bg > img :css设置  

### Status 
**2017/6/16**  
- 完成情况
  + 使用JQ动态设置几个单位的top和left居中时,初始加载时会有定位偏离的问题,目前观测到的情况是,nest_left的outerHeight()本应有364;但是初始加载显示只有150左右,究其原因可能是因为先生成了html标签的加载,但是在未渲染加载的css时已经执行outerHeight();导致定位偏离;但是scroll事件又使其恢复正常位置,此事件函数没有重新设置outerHeight?
- 文件说明
  + index.html ==> 测试页
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


