# js-reverse-plugin
A chrome plugin for reversing website javascript

# How to use?
modify `url_setting.js` and move your reverse js to the path `js-reverse-plugin/js`
```javascript
var ReResMap = [
	// reverse 1
	{
		"req": "https://xxxxxxxx/xxxxx1.js",// The js that you want to reverse 
		"res": "chrome-extension://"+chrome.runtime.id+"/js/xxxxx1.js"// Your js file which will save in plugin
	},
	// reverse 2
	{
		"req": "https://xxxxxxxx/xxxxx2.js",// The js that you want to reverse 
		"res": "chrome-extension://"+chrome.runtime.id+"/js/xxxxx2.js"// Your js file which will save in plugin
	}
];
```
