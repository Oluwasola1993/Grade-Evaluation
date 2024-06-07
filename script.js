// script.js
const songs = [
    "Audio/failure.mp3",
    "Audio/pity.mp3",
    "Audio/keep playing.mp3",
    "Audio/stand here.mp3",
    "Audio/heeey.mp3",
    "Audio/clapping.aac"
].map(song => new Audio(song));

function checkValue() {
    const num = document.getElementById('num');
    const show = document.getElementById('show');
    if (num.value === "") {
        alert("Please Fill In The Required Space");
    } else {
        const score = parseInt(num.value);
        let result = "";
        let songIndex = 0;

        if (score >= 0 && score <= 40) {
            result = "F- FAIL 😒";
        } else if (score > 40 && score <= 44) {
            result = "E- Pass 😂";
            songIndex = 1;
        } else if (score > 44 && score <= 49) {
            result = "D- Pass 🤣";
            songIndex = 2;
        } else if (score >= 50 && score <= 59) {
            result = "C- Credit 👍";
            songIndex = 3;
        } else if (score >= 60 && score <= 69) {
            result = "B- Good 😍";
            songIndex = 4;
        } else if (score >= 70 && score <= 100) {
            result = "A- Excellent 🙌 😘";
            songIndex = 5;
        } else {
            alert("Input A Valid Number");
            return;
        }

        show.innerHTML = result;
        songs.forEach((song, index) => {
            index === songIndex ? song.play() : song.pause();
        });
    }
}
