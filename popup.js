document.getElementById('start').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'startAutoFill' }, response => {
        document.getElementById('status').textContent = 'Status: Keys Copied';
    });
});

document.getElementById('click').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'applyAnswers' }, response => {
        document.getElementById('status').textContent = 'Status: Answers Applied';
    });
});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'statusUpdate') {
        document.getElementById('status').textContent = `Status: ${request.status}`;
    }
});
