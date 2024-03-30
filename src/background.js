import { randomize } from './scripts/randomizer.js'
import { addRandomizeButton } from './scripts/randomizer.js'

chrome.action.onClicked.addListener(function(tab) {
     chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: randomize,
     })
});
      
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
   if (changeInfo.url) {
      if (changeInfo.url.includes("netflix.com/browse?jbv=") || changeInfo.url.includes("netflix.com/title/")) {
         console.log("Adding randomize button to UI "+changeInfo.url);
         chrome.scripting.executeScript({            
            target: { tabId: tabId },
            func: addRandomizeButton
         })
      }
   }
});


