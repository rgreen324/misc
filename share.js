/*
1. Go to your My Closet page
2. Choose "Avaliable" from the Availibility filter at the bottom of the left sidebar
3. Keep scrolling to the bottom of the page until all listings are loaded
4. Open browser console
5. Copy/paste code into console and hit Enter
6. Type the following into the console and hit Enter to run script: share()
*/

const shareButtons = document.querySelectorAll('.social-action-bar__share');

function pause() {
  const delay = 1500 + Math.random() * 1500;
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function share() {
  for (const shareButton of shareButtons) {
    await pause();
    shareButton.click();
    await pause();
    const confirmButton = document.querySelector('.internal-shares li a');
    confirmButton.click();
  }
}
