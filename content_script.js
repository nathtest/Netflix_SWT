async function skipIntroButton() {


    while (document.getElementsByClassName("skip-credits").length < 1) {
        await new Promise(r => setTimeout(r, 500));
    }
    // now the element is loaded

    clickIntroButton();

}

async function skipWatchNextButton() {


    while (document.getElementsByClassName("WatchNext-still-hover-container").length < 1) {
        await new Promise(r => setTimeout(r, 500));
    }
    // now the element is loaded

    clickWatchNextEpisodeButton();

}

async function skipNextSeamlessButton() {

// <a tabindex="0" class="nf-icon-button nf-flat-button nf-flat-button-primary nf-flat-button-uppercase" aria-label="Prochain épisode dans 1" role="link" data-uia="next-episode-seamless-button"><span class="nf-flat-button-icon nf-flat-button-icon-play"></span><span class="nf-flat-button-text">Prochain épisode dans 1</span></a>


    while (document.getElementsByClassName("nf-icon-button nf-flat-button nf-flat-button-primary nf-flat-button-uppercase").length < 1) {
        await new Promise(r => setTimeout(r, 500));
    }
    // now the element is loaded

    clickNextEpisodeSeamlessButton();

}

function clickIntroButton() {


    var skip_class = document.getElementsByClassName("skip-credits");

    var skip_button = skip_class[0].getElementsByClassName("nf-flat-button-text");

    skip_button[0].click();

    setTimeout(function () {
        clickPlayButton()
    }, 1000);
}

function clickPlayButton() {

    var play_button = document.getElementsByClassName("touchable PlayerControls--control-element nfp-button-control default-control-button button-nfplayerPlay");

    try {
        play_button[0].click();
    }
    catch (e) {
        console.log(e.toString())
    }
    finally {
        console.log('Click PlayButton');
    }

}

function clickWatchNextEpisodeButton() {
    var next_button = document.getElementsByClassName("WatchNext-still-hover-container");
    next_button[0].click();

    console.log('clickWatchNextEpisodeButton');

}

function clickNextEpisodeSeamlessButton() {
    var next_button = document.getElementsByClassName("nf-icon-button nf-flat-button nf-flat-button-primary nf-flat-button-uppercase");
    next_button[0].click();

    console.log('clickNextEpisodeSeamlessButton');

}

chrome.storage.sync.get(['skip_intro'], function (result) {
    if (result.skip_intro) skipIntroButton();
    console.log('skip_intro value currently is ' + result.skip_intro);
});

chrome.storage.sync.get(['watch_next_episode'], function (result) {
    if (result.watch_next_episode) skipWatchNextButton();
    console.log('watch_next_episode value currently is ' + result.watch_next_episode);
});
chrome.storage.sync.get(['seamless_next_episode'], function (result) {
    if (result.seamless_next_episode) skipNextSeamlessButton();
    console.log('seamless_next_episode value currently is ' + result.seamless_next_episode);
});
