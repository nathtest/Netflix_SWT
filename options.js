function updateCheckbox() {
    let skip_intro_checkbox = document.getElementById('introButton');
    let nextButton_checkbox = document.getElementById('nextButton');

    chrome.storage.sync.get(['skip_intro'], function (result) {
        skip_intro_checkbox.checked = !!result.skip_intro;
    });

    chrome.storage.sync.get(['watch_next_episode'], function (result) {
        nextButton_checkbox.checked = !!result.watch_next_episode;
    });

}

function constructOptions() {

    let skip_intro_checkbox = document.getElementById('introButton');
    let nextButton_checkbox = document.getElementById('nextButton');


    skip_intro_checkbox.addEventListener('change', function () {

        if (this.checked) {
            // Checkbox is checked..
            chrome.storage.sync.set({skip_intro: 1}, function () {
                console.log('skip_intro checkbox is ' + 0);
            })
        } else {
            // Checkbox is not checked..
            chrome.storage.sync.set({skip_intro: 0}, function () {
                console.log('skip_intro checkbox is ' + 0);
            })
        }

    });

    nextButton_checkbox.addEventListener('change', function () {

        if (this.checked) {
            // Checkbox is checked..
            chrome.storage.sync.set({watch_next_episode: 1}, function () {
                console.log('watch_next_episode checkbox is ' + 1);
            });

            chrome.storage.sync.set({seamless_next_episode: 1}, function () {
                console.log('seamless_next_episode checkbox is ' + 1);
            });
        } else {
            // Checkbox is not checked..
            chrome.storage.sync.set({watch_next_episode: 0}, function () {
                console.log('watch_next_episode checkbox is ' + 0);
            });
            chrome.storage.sync.set({seamless_next_episode: 0}, function () {
                console.log('seamless_next_episode checkbox is ' + 0);
            });
        }

    });
}

updateCheckbox();
constructOptions();
