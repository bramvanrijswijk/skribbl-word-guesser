chrome.tabs.onUpdated.addListener(((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: {tabId: tabId},
            files: ['./foreground.js']
        }).then(() => {
            console.log('injected foreground');
        }).catch(err => console.log(err));
    }
}));

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'guess_word') {
        chrome.tabs.sendMessage(request.payload.tab.id, {
            'task': 'guess_word'
        });
    }

    return true;
});