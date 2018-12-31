'use strict';

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({skip_intro: 1}, function () {
        console.log("skip_intro var created");
    });
    chrome.storage.sync.set({watch_next_episode: 1}, function () {
        console.log("watch_next_episode var created");
    });
    chrome.storage.sync.set({seamless_next_episode: 1}, function () {
        console.log("seamless_next_episode var created");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'www.netflix.com', schemes: ['https']},
            })
            ],
            actions: [new chrome.declarativeContent.RequestContentScript({js: ["content_script.js"]}), new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
