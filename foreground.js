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
            const amountWords = data.length;
            let currentIndex = 0;

            setInterval(function() {
                skribblInput.value = data[currentIndex].word;

                form.dispatchEvent(
                    new Event('submit', {
                        bubbles: true,
                        cancelable: true,
                    })
                );

                currentIndex++;
                console.log(currentIndex);
            }, 3000);
        });

    return true;
});