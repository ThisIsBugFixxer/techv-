chrome.identity.getAuthToken({
    interactive: true
}, function(token) {
    if (chrome.runtime.lastError) {
        alert(chrome.runtime.lastError.message);
        return;
    }
    var x = new XMLHttpRequest();
    x.open('GET', 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token);
    x.onload = function() {
        alert(x.response);// alert to give every time there is a login made or new chrome is opne
    };
    x.send();
});


chrome.identity.getProfileUserInfo(function(info) { email = info.email; });