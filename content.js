// content.js

chrome.storage.local.clear(() => {
    console.log('Storage cleared for debugging.');
});
console.log('Content script injected and running.');


// Optional: Listen for messages from the popup or background script to trigger actions
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getStoredAnswers") {
        chrome.storage.local.get('correctAnswers', (data) => {
            sendResponse({ answers: data.correctAnswers });
        });
        return true; // Indicates that the response will be sent asynchronously
    }
});


