export function randomCommandExecute() {

    const episodeListItemClass = "titleCardList--container episode-item"
    const getRandIntInRange = max => Math.floor(Math.random() * Math.floor(max));

    const episodes = document.getElementsByClassName(episodeListItemClass)

    if(episodes.length > 0) {
        episodes.item(getRandIntInRange(episodes.length)).click()
    }
}

// Remark: Not in use as of now, adds button to "Episodes & info" view of the tv show
function addButtonToTvShowPreview() {

    const buttonsContainerClass = "buttonControls--container";
    const buttonContainer = document.getElementsByClassName(buttonsContainerClass).item(0);
    let btn = document.createElement("randomizeCommandButtonOnWebPage");
    btn.innerHTML = "Shuffle";
    btn.onclick = randomCommandExecute;
    buttonContainer.appendChild(btn);
}