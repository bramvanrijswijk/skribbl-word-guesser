let button = document.getElementById('guessWord');
button.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.runtime.sendMessage({
        'message': 'guess_word',
        'payload': {
            tab: tab
        }
    }, response => {
        console.log(response)
    })
});