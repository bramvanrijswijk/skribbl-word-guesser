chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let skribblInput = document.querySelector("#inputChat");
    let form = document.querySelector("#formChat");
    const wordLength = document.querySelector("#currentWord").innerText.length;

    const url = 'https://skribbl-word-guesser-api.test/api/words-with-specific-length';
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            character_length: wordLength
        })
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            skribblInput.value = data[0].word;
        });

    return true;
});