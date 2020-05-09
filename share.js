/*
1. Go to your My Closet page
2. Choose "Avaliable" from the Availibility filter at the bottom of the left sidebar
3. Keep scrolling to the bottom of the page until all listings are loaded
4. Open browser console
5. Copy/paste code into console and hit Enter
6. Type the following into the console and hit Enter to run script: share()
*/

let x = document.querySelectorAll('a.share');

function pause() {
    let delay = 1500 + (Math.random() * 3500);
    return new Promise(resolve => setTimeout(resolve, delay));
}

async function share() {
    for (const listing of x) {
        await pause();
        listing.click()
        await pause();
        let y = document.querySelector('div.share-wrapper-con')
        y.click()
    }
}