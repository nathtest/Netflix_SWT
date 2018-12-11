
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
            chrome.storage.sync.set({next_episode: 1}, function () {
                console.log('next_episode checkbox is ' + 1);
            })
        } else {
            // Checkbox is not checked..
            chrome.storage.sync.set({next_episode: 0}, function () {
                console.log('next_episode checkbox is ' + 0);
            })
        }

    });
}

constructOptions();
