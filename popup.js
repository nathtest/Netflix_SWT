'use strict';

function log(message, debug=true) {
    if (debug)console.log(message);
}

var skip_intro = document.querySelector("input[name=skip_intro]");
var skip_watch_later = document.querySelector("input[name=skip_watch_later]");

chrome.storage.sync.get(['skip_intro'], function (result) {
    skip_intro.checked = !!result.skip_intro;
})

chrome.storage.sync.get(['watch_next_episode'], function (result) {
    skip_watch_later.checked = !!result.watch_next_episode;
})

skip_intro.addEventListener('change', function() {
    if (this.checked) {
        chrome.storage.sync.set({skip_intro: 1});
    } else {
        chrome.storage.sync.set({skip_intro: 0});
    }
});

skip_watch_later.addEventListener('change', function() {
    if (this.checked) {
        chrome.storage.sync.set({watch_next_episode: 1});
    } else {
        chrome.storage.sync.set({watch_next_episode: 0});
    }
});
