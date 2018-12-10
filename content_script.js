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

    chrome.extension.getBackgroundPage().console.log('clickPlayButton');

}

function clickNextEpisodeButton() {
    var next_button = document.getElementsByClassName("WatchNext-still-hover-container");
    next_button[0].click();

    chrome.extension.getBackgroundPage().console.log('clickNextEpisodeButton');


}

skipIntroButtonClick();
skipNextButtonClick();