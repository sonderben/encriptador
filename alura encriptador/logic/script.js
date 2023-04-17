

document.addEventListener("DOMContentLoaded", function () {

    let copyButton = document.createElement("button");
    let encodeText = document.createElement("p");
    let div = document.createElement("div");
    let clearButton = document.createElement("button");

    clearButton.textContent = "Clear";
    copyButton.textContent = "Copy";

    let textArea = document.querySelector("textarea");
    const encodeButton = document.querySelector("#btn1");
    const decodeButton = document.querySelector("#btn2");

    const hintSection = document.querySelector("#sec2");

    const hints = document.querySelectorAll(".hint")


    encodeButton.addEventListener("click", encode);
    decodeButton.addEventListener("click", decode);

    copyButton.addEventListener("click", function () {
        navigator.clipboard.writeText(encodeText.textContent);
    })

    clearButton.addEventListener("click", function () {
        hintSection.style.justifyContent = "center";


        hintSection.removeChild(div);
        hintSection.removeChild(encodeText);

        hints.forEach((value, index) => {
            value.style.display = "block";
        })


    })








    function encode() {
        let valueTextArea = textArea.value;
        valueTextArea = valueTextArea.replace(/e/g, "enter");
        valueTextArea = valueTextArea.replace(/i/g, "imes");
        valueTextArea = valueTextArea.replace(/a/g, "ai");
        valueTextArea = valueTextArea.replace(/o/g, "ober");
        valueTextArea = valueTextArea.replace(/u/g, "ufat");

        printEncodeText(valueTextArea);

    }

    function decode() {
        let valueTextArea = textArea.value;
        valueTextArea = valueTextArea.replace(/enter/g, "e");
        valueTextArea = valueTextArea.replace(/imes/g, "i");
        valueTextArea = valueTextArea.replace(/ai/g, "a");
        valueTextArea = valueTextArea.replace(/ober/g, "o");
        valueTextArea = valueTextArea.replace(/ufat/g, "u");

        printEncodeText(valueTextArea)

    }

    function printEncodeText( text) {
        hints.forEach((value, index) => {
            value.style.display = "none";
        })

        hintSection.style.justifyContent = "space-between";

        encodeText.textContent = text;

        div.append(clearButton, copyButton);
        div.className = "cool";


        hintSection.append(encodeText, div);
    }

})

