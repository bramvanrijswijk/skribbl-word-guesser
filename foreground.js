let netherlands = document.querySelector("body > div.L3eUgb > div.o3j99.c93Gbe > div.uU7dJb").firstChild.nodeValue;
let googleInput = document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input");

const words = [
    'Bouwcomplex',
    'Grizzlybeer'
];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const wordLength = netherlands.length;

    // pick word with same length
    googleInput.value = words[0];

    return true;
});