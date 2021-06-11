# 前言
之前因为某些原因需要逆向js，而且逆向之后需要打包成一个浏览器插件方便使用

# 原理
js逆向本质上是将网站的js重定向为插件内含有的js，从而做到破解的效果
在网上找到了[Reres](https://chrome.google.com/webstore/detail/reres/gieocpkbblidnocefjakldecahgeeica?hl=zh-CN)这个插件，将插件代码提取出来，新建一个重定向列表的文件`url_setting.js`
```javascript
var ReResMap = [
  {
    // 网站的js路径
    "req": "https://jameshoi.github.io/files/js-reverse/login.js", 
    // 修改后的js路径，存储在插件里面
    "res": "chrome-extension://"+chrome.runtime.id+"/js/example.js",
  }
];
```
更多关于浏览器插件的功能可以参考这个文章：[【干货】Chrome插件(扩展)开发全攻略](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html)

# 例子
[测试网站](http://jameshoi.github.io/files/js-reverse)  
[![s17a9S.png](https://s3.ax1x.com/2021/01/11/s17a9S.png)](https://imgchr.com/i/s17a9S)  
提取login.js，格式化并修改保存到js
```javascript
var Qfu1 = window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64']('\x62\x74\x6e');
Qfu1['\x6f\x6e\x63\x6c\x69\x63\x6b'] = function() {
    var LkZPLz_2 = window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x4e\x61\x6d\x65']("\x75\x73\x65\x72\x6e\x61\x6d\x65")[0]['\x76\x61\x6c\x75\x65'] == "\x61\x64\x6d\x69\x6e" && window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x4e\x61\x6d\x65']("\x70\x61\x73\x73\x77\x6f\x72\x64")[0]['\x76\x61\x6c\x75\x65'] == "\x61\x64\x6d\x69\x6e";
    //账号密码均为admin
    //若变量LkZPLz_2为真，则登录成功
    LkZPLz_2 = true; //破解，令其永远登录成功
    if (LkZPLz_2) window['\x6c\x6f\x63\x61\x74\x69\x6f\x6e'] = "\x2e\x2f\x6c\x6f\x67\x69\x6e\x2e\x68\x74\x6d\x6c";
    else window["\x61\x6c\x65\x72\x74"]("\x49\x6e\x63\x6f\x72\x72\x65\x63\x74 \x75\x73\x65\x72\x6e\x61\x6d\x65 \x6f\x72 \x70\x61\x73\x73\x77\x6f\x72\x64\x2e")
};
```
安装插件  
[![s17E01.png](https://s3.ax1x.com/2021/01/11/s17E01.png)](https://imgchr.com/i/s17E01)  

登录成功  
[![s17i6J.png](https://s3.ax1x.com/2021/01/11/s17i6J.png)](https://imgchr.com/i/s17i6J)
