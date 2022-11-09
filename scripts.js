console.log("bingo")

const charDump = document.getElementById("meat");

const rollex = (char) => {

}

const dumpChars = () => {
    const frag = document.createDocumentFragment("div");
    
    // frag.classList.add("frame");

    for (i = 0; i < 3000; i++) {
        const frame = document.createElement("span");
        const thisChar = String.fromCharCode(i);
        frame.innerText = thisChar;
        frag.appendChild(frame)

    }
    charDump.appendChild(frag)
}

dumpChars();