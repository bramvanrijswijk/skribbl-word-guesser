let netherlands = document.querySelector("body > div.L3eUgb > div.o3j99.c93Gbe > div.uU7dJb").firstChild.nodeValue;
let googleInput = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input");
let form = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const wordLength = netherlands.length;

    // pick word with same length
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
            googleInput.value = data[0].word;
            form.submit()
        });

    return true;
});