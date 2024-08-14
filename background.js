chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        chrome.tabs.create({ url: 'https://t.me/lpuautomation' });
    }
});

console.log("Developed By Harsh Singh, Follow me on Telegram https://t.me/lpuautomation, Follow me on GitHub https://github.com/harshsingh360/, Follow me on LinkedIn https://www.linkedin.com/in/harshcodes/");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'startAutoFill') {
        // Query the current active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTabId = tabs[0].id;
            chrome.scripting.executeScript({
                target: { tabId: activeTabId },
                function: extractAndStoreQuestionsAndAnswers
            });
        });
    } else if (request.action === 'applyAnswers') {
        // Query the current active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTabId = tabs[0].id;
            chrome.scripting.executeScript({
                target: { tabId: activeTabId },
                function: applyAnswersAndNavigate
            });
        });
    }
});



