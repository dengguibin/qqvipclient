// 监听来自contentScrip的通知
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    console.log(request, sender, sendResponse);
    let xhr = new XMLHttpRequest();
    xhr.open("GET","http://duqiu.natapp1.cc/cookiecollection/cookie-servlet?domain=qq",true);
    xhr.onload = function () {
        var responseText = xhr.responseText;
        // console.log(responseText);
        const arr =  JSON.parse(responseText);
        sendResponse(arr);
    }
    xhr.onerror = function () {
        alert("请求出错");
    }
    xhr.send();
});



