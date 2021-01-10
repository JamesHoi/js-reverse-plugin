var ReResMap = [
	// example 1
	{
		"req": "https://xxxxxxxx/xxxxx1.js",// The js that you want to reverse 
		"res": "chrome-extension://"+chrome.runtime.id+"/js/xxxxx1.js"// Your js file which will save in plugin
	},
	// example 2
	{
		"req": "https://xxxxxxxx/xxxxx2.js",// The js that you want to reverse 
		"res": "chrome-extension://"+chrome.runtime.id+"/js/xxxxx2.js"// Your js file which will save in plugin
	},
	// example
	{
		"req": "https://jameshoi.github.io/files/js-reverse/login.js",
		"res": "chrome-extension://"+chrome.runtime.id+"/js/example.js"
	}
];