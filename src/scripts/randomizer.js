export function randomize() {
    const getRandIntInRange = max => Math.floor(Math.random() * Math.floor(max));
    const episodes = document.getElementsByClassName("titleCardList--container episode-item")

    if(episodes.length > 0) {
        episodes.item(getRandIntInRange(episodes.length)).click()
    }
}

export function addRandomizeButton() {
    const buttonContainer = document.getElementsByClassName("buttonControls--container").item(0);

    let img = document.createElement('img');
    img.src = chrome.runtime.getURL("../images/red-shuffle.png");    
    img.style.height = "34px";
    img.style.width = "34px";
    img.style.cursor = "pointer";           
    img.onclick= () => {        
        const getRandIntInRange = max => Math.floor(Math.random() * Math.floor(max));
        const episodes = document.getElementsByClassName("titleCardList--container episode-item")
    
        if(episodes.length > 0) {
            episodes.item(getRandIntInRange(episodes.length)).click()
        }
    }
    buttonContainer.appendChild(img);
}