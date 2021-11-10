// 监听来自contentScrip的通知
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    console.log(request, sender, sendResponse);
    let xhr = new XMLHttpRequest();
    xhr.open("GET","http://duqiu.natapp1.cc/cookiecollection/cookie-servlet?domain=qq",false);
    xhr.onload = function () {
        var responseText = xhr.responseText;
        // console.log(responseText);
        const arr =  JSON.parse(responseText);
        // for (let i = 0; i < arr.length; i++) {
        //     const cookie = arr[i];
        //     delete cookie.session;
        //     delete cookie.hostOnly;
        //     cookie.url = "https://v.qq.com/";
        //     chrome.cookies.set(cookie);
        // }
        sendResponse(arr);
    }
    xhr.onerror = function () {
        alert("请求出错");
    }
    xhr.send();
});



