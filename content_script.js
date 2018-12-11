async function skipIntroButtonClick() {


    while (document.getElementsByClassName("skip-credits").length < 1) {
        await new Promise(r => setTimeout(r, 500));
    }
    // now the element is loaded

    var skip_class = document.getElementsByClassName("skip-credits");

    var skip_button = skip_class[0].getElementsByClassName("nf-flat-button-text");

    skip_button[0].click();

    setTimeout(function () {
        clickPlayButton()
    }, 1000);

}

async function skipNextButtonClick() {


    while (document.getElementsByClassName("WatchNext-still-hover-container").length < 1) {
        await new Promise(r => setTimeout(r, 500));
    }
    // now the element is loaded

    clickNextEpisodeButton();
}

function clickPlayButton() {


    var play_button = document.getElementsByClassName("touchable PlayerControls--control-element nfp-button-control default-control-button button-nfplayerPlay");
    play_button[0].click();

    console.log('clickPlayButton');

}

function clickNextEpisodeButton() {
    var next_button = document.getElementsByClassName("WatchNext-still-hover-container");
    next_button[0].click();

    console.log('clickNextEpisodeButton');


}

chrome.storage.sync.get(['skip_intro'], function(result) {
    if (result.skip_intro) skipIntroButtonClick();
    console.log('skip_intro value currently is ' + result.skip_intro);
        });

chrome.storage.sync.get(['next_episode'], function(result) {
    if (result.next_episode) skipNextButtonClick();
    console.log('next_episode value currently is ' + result.next_episode);
        });
