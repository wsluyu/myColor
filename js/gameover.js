//get score from url
var url = location.href;
var paraString = url.substring(url.indexOf("=") + 1, url.length);

document.getElementById('resultNum').innerHTML=paraString;
