import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();


function checkHourEqualsMinute() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    if (currentHour === currentMinute) {
      jsConfetti.addConfetti();
    }
}

console.log("setting up confetti");
setInterval(checkHourEqualsMinute, 1000*10);
