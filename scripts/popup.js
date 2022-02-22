var commandButton = document.getElementById("randomizeCommandButton")

// Inject Chrome API script as the extension's button click
commandButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: randomCommandExecute,
    });
});

function randomCommandExecute() {

    const episodeListItemClass = "titleCardList--container episode-item"
    const getRandIntInRange = max => Math.floor(Math.random() * Math.floor(max));

    const episodes = document.getElementsByClassName(episodeListItemClass)

    if(episodes.length > 0) {
        episodes.item(getRandIntInRange(episodes.length)).click()
    }
}