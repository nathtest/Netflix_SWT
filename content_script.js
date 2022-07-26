'use strict';

function log(message, debug=false) {
    if (debug)console.log(message);
}

// <button className="button-primary watch-video--skip-content-button medium hasLabel ltr-ublg01"
//         data-uia="player-skip-intro" type="button"><span className="ltr-18i00qw">Passer l'introduction</span>
// </button>

async function newSkipIntroButton() {

    chrome.storage.sync.get(['skip_intro'], async function (result) {
        log('skip_intro value currently is ' + result.skip_intro);
        if (result.skip_intro)
        {
            while (document.getElementsByClassName("button-primary watch-video--skip-content-button medium hasLabel ltr-ublg01").length < 1) {
                await new Promise(r => setTimeout(r, 500));
            }
            // now the element is loaded
            log("page url " + document.location.href)
            if (!document.location.href.startsWith("https://www.netflix.com/watch/"))return; // prevent executing function if user changed paged during the timeout

            log('newSkipIntroButton detected');


            var next_button = document.getElementsByClassName("button-primary watch-video--skip-content-button medium hasLabel ltr-ublg01");
            next_button[0].click();

            log('newSkipIntroButton clicked');
        }
    });
}


// <button className="color-primary hasLabel hasIcon ltr-v8pdkb" data-uia="next-episode-seamless-button" type="button">
//     <div className="ltr-1ksxkn9">
//         <div className="medium ltr-18dhnor" role="presentation">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
//                  className="Hawkins-Icon Hawkins-Icon-Standard">
//                 <path
//                     d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
//                     fill="currentColor"></path>
//             </svg>
//         </div>
//     </div>
//     <div className="ltr-1i33xgl" style="width: 1rem;"></div>
//     <span className="ltr-zd4xih">Ép. suivant</span></button>


async function newSkipWatchNextButton() {

    chrome.storage.sync.get(['watch_next_episode'], async function (result) {
        log('watch_next_episode value currently is ' + result.watch_next_episode);

        if (result.watch_next_episode)
        {
            while (document.getElementsByClassName("color-primary hasLabel hasIcon ltr-v8pdkb").length < 1) {
                await new Promise(r => setTimeout(r, 500));
            }
            // now the element is loaded
            log("page url " + document.location.href)
            if (!document.location.href.startsWith("https://www.netflix.com/watch/"))return; // prevent executing function if user changed paged during the timeout


            log('newSkipWatchNextButton detected');


            var next_button = document.getElementsByClassName("color-primary hasLabel hasIcon ltr-v8pdkb");
            next_button[0].click();

            log('newSkipWatchNextButton clicked');
        }
    });
}

newSkipIntroButton();
newSkipWatchNextButton();
