let homeScore= document.getElementById("homescore")
let guestScore= document.getElementById("guestscore")

function plus1Home() {
    homeScore.textContent = parseInt(homeScore.textContent) +  1
}

function plus2Home() {
    homeScore.textContent = parseInt(homeScore.textContent) +  2
}

function plus3Home() {
    homeScore.textContent = parseInt(homeScore.textContent) +  3
}

function plus1Guest() {
    guestScore.textContent = parseInt(guestScore.textContent) +  1
}

function plus2Guest() {
    guestScore.textContent = parseInt(guestScore.textContent) +  2
}

function plus3Guest() {
    guestScore.textContent = parseInt(guestScore.textContent) +  3
}

function resetButton() {
    homeScore.textContent = 0
    guestScore.textContent = 0
}