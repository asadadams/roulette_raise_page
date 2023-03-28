// LeaderBoardData
const leaderboardData = [
    { rank: 1, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 5000 },
    { rank: 2, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 4000 },
    { rank: 3, address: "0x1234567890abcdef1234567890abcdef1234567dd", amount: 3000 },
    { rank: 4, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 2000 },
    { rank: 5, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 1000 },
    { rank: 6, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 900 },
    { rank: 7, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 800 },
    { rank: 8, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 700 },
    { rank: 9, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 600 },
    { rank: 10, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 500 },
    { rank: 97, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 100 },
    { rank: 98, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 99 },
    { rank: 99, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 98 },
    { rank: 100, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 97 },
    { rank: 125, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 96 },
    { rank: 126, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 95 },
];

const leaderBoardTable = document.querySelector('[datasource="leaderboard-table"]');
leaderboardData.slice(0, 3).forEach((entry, index) => {
    let rankElement = ''
    let address = ''

    if (index == 0) rankElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64201c51cc09c983c5c38739_Pepe%20First.png" loading="lazy" alt="" class="leaderboard_image">
            </div>`
    if (index == 1) rankElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64201c50885ad9a63405ac90_Pepe%20Second.png" loading="lazy" alt="" class="leaderboard_image">
            </div>`
    if (index == 2) rankElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64201c50a2bd1e700e469ca2_Pepe%20Third.png" loading="lazy" alt="" class="leaderboard_image">
            </div>`


    const entryElement = document.createElement('div');
    entryElement.setAttribute('class', 'table_item leader-entry')
    entryElement.setAttribute('role', 'row')

    //Applying background colour class to all even entries
    if (index % 2 !== 1) {
        entryElement.classList.add("colour");
    }

    if (user.address === entry.address) {
        address = "This is You!"
    } else {
        address = `${entry.address.substring(0, 4)}.....${entry.address.slice(-4)}`
    }

    entryElement.innerHTML = `
        <div table-column="rank" role="cell" class="table9_column is-width-small rank">
           ${rankElement}
        </div>
        <div table-column="address" role="cell" class="table9_column is-width-large wide">
            <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard">${address}</div>
        </div>
        <div table-column="" role="cell" class="table9_column is-width-large leaderboard">
            <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard">${entry.amount}</div>
        </div>
        <div table-column="airdrop" role="cell" class="table9_column is-width-large airdrop"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64201b987894bf1462226062_Fill%2018.png" loading="lazy" alt="" class="airdrop-check"></div>
    `;
    leaderBoardTable.appendChild(entryElement)
});

//Appening extra elements to page , element with dots . 
const entryExtraElement = document.createElement('div');
entryExtraElement.classList.add('table_item', 'extra');
entryExtraElement.innerHTML = `<div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard-regular extra">.</div>`
leaderBoardTable.appendChild(entryExtraElement);
leaderBoardTable.appendChild(entryExtraElement.cloneNode(true));


// Middle elment 
let startIndex = 6
let endIndex = 10
if (leaderboardData.length > 100) {
    startIndex = 96
    endIndex = 99
}
leaderboardData.slice(startIndex, endIndex).forEach((entry, index) => {
    let address = ''

    const entryElement = document.createElement('div');
    entryElement.setAttribute('class', 'table_item leader-entry')
    entryElement.setAttribute('role', 'row')

    //Applying background colour class to all even entries
    if (index % 2 === 0) {
        entryElement.classList.add("anti");
    }

    if (user.address === entry.address) {
        address = "This is You!"
    } else {
        address = `${entry.address.substring(0, 4)}.....${entry.address.slice(-4)}`
    }

    entryElement.innerHTML = `
        <div role="cell" class="table9_column is-width-small rank">
            <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard-regular rank">#${startIndex++}</div>
        </div>
        <div role="cell" class="table9_column is-width-large wide">
            <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard-regular">${address}</div>
        </div>
        <div role="cell" class="table9_column is-width-large leaderboard">
            <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard-regular">${entry.amount}</div>
        </div>
        <div role="cell" class="table9_column is-width-large airdrop"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/642041dd3e934451560f38be_22%20Check.png" loading="lazy" alt="" class="airdrop-check"></div>
    `;

    leaderBoardTable.appendChild(entryElement)
})



//Last elments
leaderboardData.slice(96, 99).forEach((entry, index) => {
    let rank = index + 1
    let address = ''
    const entryElement = document.createElement('div');
    entryElement.setAttribute('class', 'table_item leader-entry')
    entryElement.setAttribute('role', 'row')

    //Applying background colour class to all even entries
    if (index % 2 === 0) {
        entryElement.classList.add("anti");
    }

    if (user.address === entry.address) {
        address = "This is You!"
    } else {
        address = `${entry.address.substring(0, 4)}.....${entry.address.slice(-4)}`
    }

    entryElement.innerHTML = `
    <div role="cell" class="table9_column is-width-small rank">
        <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard-regular rank red">#${rank}</div>
    </div>
    <div role="cell" class="table9_column is-width-large wide">
        <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard-regular red">${address}</div>
    </div>
    <div role="cell" class="table9_column is-width-large leaderboard">
        <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard-regular red">${entry.amount}</div>
    </div>
    <div role="cell" class="table9_column is-width-large airdrop"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/6420439b7894bf2b49255cb8_Wrong.png" loading="lazy" alt="" class="airdrop-wrong"></div>
    `;

    leaderBoardTable.appendChild(entryElement)
})
// End of LeaderBoardData