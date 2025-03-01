document.addEventListener("DOMContentLoaded", () => {
    const triggerBtn = document.getElementById("trigger-btn");
    const resultText = document.getElementById("result");
    const messages = [
        "Phew! You're safe... for now. 😅",
        "BOOM! 💥 Oh... uh... You okay? No? RIP. 😵",
        "Click... Nothing happened. You lucky duck. 🦆",
        "Oops! You just shot your WiFi instead. 📡💀",
        "The gun jammed! The universe wants you alive! 🌎",
        "BANG! ...Just kidding. 😂 Gotcha!",
        "You survived! Maybe go buy a lottery ticket? 🎫🍀",
        "Oops! You shot the ceiling fan. Now it's raining dust. ☁️",
        "Click... Maybe it's a water gun? 💦🔫"
    ];

    triggerBtn.addEventListener("click", () => {
        const outcome = Math.random() < 0.17; // 1 in 6 chance (like real Russian roulette)
        if (outcome) {
            resultText.innerHTML = messages[1]; // The "BOOM" message
        } else {
            const randomIndex = Math.floor(Math.random() * (messages.length - 1)) + 1;
            resultText.innerHTML = messages[randomIndex];
        }
    });
});
