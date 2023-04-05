// Milestones Section

// const levelsData = fetchLevelData()

const levelsData = allMileStones
// console.log('milestone data::', levelsData)

console.log('levels data::', levelsData)

// Level DetailsallUsersInMileStone
const levelsTable = document.querySelector('[datasource="levels-table"]');
levelsData.slice(0, 10).forEach((entry, index) => {
    let levelElement = ''
    // let filled = ((entry.totalUSDCRaised.toNumber() + entry.usdcOfPlsRaised.toNumber()) / entry.targetAmount.toNumber()) * 100
    let filled = ((ethers.utils.formatUnits(entry.totalUSDCRaised, 6) + ethers.utils.formatUnits(entry.usdcOfPlsRaised, 6)) / ethers.utils.formatUnits(entry.targetAmount, 6)) * 100
    filled = parseFloat(filled.toFixed(2))

    const entryElement = document.createElement('div');
    entryElement.setAttribute('class', 'table_item')
    entryElement.setAttribute('role', 'row')

    if (filled == 100) {
        levelElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64200f60acf50ee5d2360703_SOLD%20OUT.png" loading="lazy" alt="" class="table_image"></div>`
        entryElement.classList.add('soldout')
    } else if (filled != 0 && filled != 100) {
        levelElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/6420113ecc09c93f9ec2d90f_open.png" loading="lazy" alt="" class="table_image"></div>`
        entryElement.classList.add('open')
    } else {
        levelElement = `<div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-normal ld">#${index + 1}</div>`
    }

    console.log('converted::', ethers.utils.formatUnits(entry.targetAmount, 6), ethers.utils.formatUnits(entry.targetAmount, 6).toLocaleString())
    entryElement.innerHTML = `
            <div role="cell" class="table9_column is-width-small-x2">
               ${levelElement}
            </div>
            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER">$${ethers.utils.formatUnits(entry.targetAmount, 6).toLocaleString()}</div>
            </div>
            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-small">$${(0.25 * ethers.utils.formatUnits(entry.targetAmount, 6)).toLocaleString()} $PLS</div>
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-small">$${(0.75 * ethers.utils.formatUnits(entry.targetAmount, 6)).toLocaleString()} $USDC</div>
            </div>
            <div role="cell" class="table9_column is-width-large">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER">400,000</div>
            </div>
            
            <div role="cell" class="table9_column is-width-large">
                <div class="contribute-table-div">
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-normal">${ethers.utils.formatUnits(entry.plsRaised, 18).toFixed(2)} </div>
                <img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/642aa5061c682780a92fd247_Group%20427320201.png" loading="lazy" alt="" class="icon">
                </div>
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-small _1">$${ethers.utils.formatUnits(entry.usdcOfPlsRaised, 6).toFixed(2)}</div>
            </div>


          


            <div role="cell" class="table9_column is-width-large">
                <div class="contribute-table-div">
                    <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-normal">${ethers.utils.formatUnits(entry.totalUSDCRaised, 6).toFixed(2)} </div>
                    <img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/642aaa0edcf1074770fd060b_%24PLS.png" loading="lazy" alt="" class="icon">
                </div>
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-small _1">$${ethers.utils.formatUnits(entry.totalUSDCRaised, 6).toFixed(2)}</div>
            </div>


            
            <div role="cell" class="table9_column is-width-small">
                <div fs-cmssort-field="IDENTIFIER" class="text-block-5">${isNaN(filled) ? 0 : filled}%</div>
            </div>
    `;
    levelsTable.appendChild(entryElement)
});
// End of Milestones Section