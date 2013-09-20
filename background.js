
chrome.browserAction.onClicked.addListener(function (tab) {

    chrome.tabs.executeScript(tab.id, {
        "file": "content_script.js"
    }, function () { // Execute your code
       //  console.log("Script Executed .. "); // Notification on Completion
    });


});