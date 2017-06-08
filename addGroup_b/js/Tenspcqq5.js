var QQLine = "http://shang.qq.com/wpa/qunwpa?idkey=24580781367250f0ff30ad75534db02596643386de6eab45984306e741bf8ee7";
function showIframe(url){
    setTimeout(function(){
    $("#iframeQQ").attr("src", url);
    },5000);
}
$(function(){
  showIframe(QQLine);
});
function iframeQQ() {
    var url = QQLine;
    //var ua = navigator.userAgent;
    //getTypeOfClient(ua);
    var isSuccess = true;
    var f = document.createElement("iframe");
    f.style.display = "none";
    document.body.appendChild(f);
    f.onload = function () {
        isSuccess = false;
    };
    f.src = QQLine;
}