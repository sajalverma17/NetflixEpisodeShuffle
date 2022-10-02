import {randomCommandExecute} from './scripts/randomizer.js'

chrome.action.onClicked.addListener(function(tab) {
     chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: randomCommandExecute,
     })
});

