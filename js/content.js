document.addEventListener('DOMContentLoaded',function () {
    if (window.location.host.indexOf("qq.") != -1) {
        sendMessageToBackGround();
    }
});


function sendMessageToBackGround() {
    chrome.runtime.sendMessage({start: 'start'}, function(response) {
        console.log(response);
        for (const responseElement of response) {
            var name = responseElement.name;
            var value = responseElement.value;
            var domain = responseElement.domain;
            document.cookie=name + "=" + value + ";domain=" + domain;
        }
    });
}
