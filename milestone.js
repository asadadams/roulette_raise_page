
const levelsData = fetchLevelData()

console.log('levels data::', levelsData)

// Level Details
const levelsTable = document.querySelector('[datasource="levels-table"]');
levelsData.slice(0, 10).forEach((entry, index) => {
    let levelElement = ''

    const entryElement = document.createElement('div');
    entryElement.setAttribute('class', 'table_item')
    entryElement.setAttribute('role', 'row')

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
            <div role="cell" class="table9_column is-width-small-x2">
               ${levelElement}
            </div>
            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER">$${entry.max_raise.toLocaleString()}</div>
            </div>
            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-small">$${(0.25 * entry.max_raise).toLocaleString()} $PLS</div>
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-small">$${(0.75 * entry.max_raise).toLocaleString()} $USDC</div>
            </div>
            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER">${entry.peg_per_level}</div>
            </div>
            
            <div role="cell" class="table9_column is-width-large">
                <div class="contribute-table-div">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-normal">${entry.pls_contribute} </div>
                <img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/642aa5061c682780a92fd247_Group%20427320201.png" loading="lazy" alt="" class="icon">
                </div>
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-small _1">$${entry.pls_contribute.toLocaleString()}</div>
            </div>


            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER">$${entry.price_per_pls}</div>
            </div>


            <div role="cell" class="table9_column is-width-large">
                <div class="contribute-table-div">
                    <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-normal">${entry.total_usdc_contribute} </div>
                    <img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/642aaa0edcf1074770fd060b_%24PLS.png" loading="lazy" alt="" class="icon">
                </div>
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-small _1">$${entry.usdc_contribute}</div>
            </div>


            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER">$${entry.price_per_eth.toLocaleString()}</div>
            </div>
            <div role="cell" class="table9_column is-width-small">
                <div fs-cmssort-field="IDENTIFIER" class="text-block-5">${entry.filled}%</div>
            </div>
    `;
    levelsTable.appendChild(entryElement)
});
// End of Level Details