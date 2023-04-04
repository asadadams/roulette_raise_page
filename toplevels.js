var currentMileStone = 5
const levelsWheel = document.querySelector('[datasource="top-levels-section"]');


const wheelElement = document.createElement('div');


if (currentMileStone <= 5) {
    wheelElement.innerHTML = `
        <div class="side-wheel">
        <div class="level-wheel ${currentMileStone == 1 ? 'live' : 'not-live'}">
            <div class="wheel-text">Level 1</div>
            <div class="wheel-value">&gt; $0.50</div>
        </div>
        <div class="level-wheel ${currentMileStone == 2 ? 'live' : 'not-live'}">
            <div class="wheel-text immediate-past">Level 2</div>
            <div class="wheel-value immediate-past">&gt; $0.60</div>
        </div>
        <div class="level-wheel ${currentMileStone == 3 ? 'live' : 'not-live'}">
            <div class="wheel-text live">Level 3</div>
            <div class="wheel-value live">&gt; $0.70</div>
        </div>
        <div class="level-wheel ${currentMileStone == 4 ? 'live' : 'not-live'}">
            <div class="wheel-text upcoming">Level 4</div>
            <div class="wheel-value upcoming">&gt; $0.80</div>
        </div>
        <div class="level-wheel ${currentMileStone == 5 ? 'live' : 'not-live'}">
            <div class="wheel-text">Level 5</div>
            <div class="wheel-value">&gt; $0.90</div>
        </div>
        </div>
`
} else {
    wheelElement.innerHTML = `
        <div class="side-wheel">
        <div class="level-wheel ${currentMileStone == 1 ? 'live' : 'not-live'}">
            <div class="wheel-text">Level 6</div>
            <div class="wheel-value">&gt; $1.00</div>
        </div>
        <div class="level-wheel ${currentMileStone == 1 ? 'live' : 'not-live'}">
            <div class="wheel-text immediate-past">Level 7</div>
            <div class="wheel-value immediate-past">&gt; $1.20</div>
        </div>
        <div class="level-wheel ${currentMileStone == 1 ? 'live' : 'not-live'}">
            <div class="wheel-text live">Level 8</div>
            <div class="wheel-value live">&gt; $1.30</div>
        </div>
        <div class="level-wheel ${currentMileStone == 1 ? 'live' : 'not-live'}">
            <div class="wheel-text upcoming">Level 9</div>
            <div class="wheel-value upcoming">&gt; $1.40</div>
        </div>
        <div class="level-wheel ${currentMileStone == 1 ? 'live' : 'not-live'}">
            <div class="wheel-text">Level 10</div>
            <div class="wheel-value">&gt; $1.50</div>
        </div>
        </div>
`
}


levelsWheel.appendChild(wheelElement)

const wheels = Array.from(document.querySelectorAll('.level-wheel'));
const liveDivIndex = wheels.findIndex((div) => div.classList.contains("live"));

for (let i = 0; i < wheels.length; i++) {
    const div = wheels[i];

    if (i < liveDivIndex - 1) {
        div.classList.add("past");
    } else if (i === liveDivIndex - 1) {
        div.classList.add("immediate-past");
    } else if (i === liveDivIndex) {
        div.classList.add("live");
    } else if (i === liveDivIndex + 1) {
        div.classList.add("upcoming");
    } else if (i > liveDivIndex + 1) {
        div.classList.add("later");
    }
}