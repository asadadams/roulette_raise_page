// Level Details
const levelsData = [
    {
        "level": 1,
        "max_raise": "1,000,000",
        "ratio": "25",
        "peg_per_level": "10,000",
        "pls_contribute": "250,000",
        "price_per_pls": "0.025",
        "usdc_contribute": "750,000",
        "price_per_eth": "0.0348",
        "filled": 100
    },
    {
        "level": 2,
        "max_raise": "2,000,000",
        "ratio": "25",
        "peg_per_level": "20,000",
        "pls_contribute": "500,000",
        "price_per_pls": "0.025",
        "usdc_contribute": "1,500,000",
        "price_per_eth": "0.0348",
        "filled": 100
    },
    {
        "level": 3,
        "max_raise": "3,000,000",
        "ratio": "25",
        "peg_per_level": "30,000",
        "pls_contribute": "750,000",
        "price_per_pls": "0.025",
        "usdc_contribute": "2,250,000",
        "price_per_eth": "0.0348",
        "filled": 25
    },
    {
        "level": 4,
        "max_raise": "4,000,000",
        "ratio": "25",
        "peg_per_level": "40,000",
        "pls_contribute": "1,000,000",
        "price_per_pls": "0.025",
        "usdc_contribute": "3,000,000",
        "price_per_eth": "0.0348",
        "filled": 0
    }
];

const levelsTable = document.querySelector('[datasource="levels-table"]');
levelsData.slice(0, 10).forEach((entry, index) => {
    let levelElement = ''

    const entryElement = document.createElement('div');
    entryElement.setAttribute('class', 'table_item')
    entryElement.setAttribute('role', 'row')

    if (entry.filled == 0) {
        levelElement = `<div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-normal ld">#${entry.level}</div>`
    } else if (entry.filled != 0 && entry.filled != 100) {
        levelElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/6420113ecc09c93f9ec2d90f_open.png" loading="lazy" alt="" class="table_image"></div>`
        entryElement.classList.add('open')
    } else if (entry.filled == 100) {
        levelElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64200f60acf50ee5d2360703_SOLD%20OUT.png" loading="lazy" alt="" class="table_image"></div>`
        entryElement.classList.add('soldout')
    }

    if (entry.filled == 100) {
        levelElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64200f60acf50ee5d2360703_SOLD%20OUT.png" loading="lazy" alt="" class="table_image"></div>`
        entryElement.classList.add('soldout')
    } else if (entry.filled != 0 && entry.filled != 100) {
        levelElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/6420113ecc09c93f9ec2d90f_open.png" loading="lazy" alt="" class="table_image"></div>`
        entryElement.classList.add('open')
    } else {
        levelElement = `<div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-normal ld">#${entry.level}</div>`
    }

    entryElement.innerHTML = `
            <div role="cell" class="table9_column is-width-small">
               ${levelElement}
            </div>
            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER">${entry.max_raise}</div>
            </div>
            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-small">${entry.ratio} $PLS</div>
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-small">${entry.ratio} $USDC</div>
            </div>
            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER">${entry.peg_per_level}</div>
            </div>
            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-normal">${entry.pls_contribute} $PLS</div>
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-small _1">$${entry.pls_contribute}</div>
            </div>
            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER">$${entry.price_per_pls}</div>
            </div>
            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-normal">${entry.usdc_contribute} $USDC</div>
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-small _1">$${entry.usdc_contribute}</div>
            </div>
            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER">$${entry.price_per_eth}</div>
            </div>
            <div role="cell" class="table9_column is-width-small">
                <div fs-cmssort-field="IDENTIFIER" class="text-block-5">${entry.filled}%</div>
            </div>
    `;
    levelsTable.appendChild(entryElement)
});
// End of Level Details