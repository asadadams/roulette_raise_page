// Level Details
const levelsPepesTable = document.querySelector('[datasource="levels-pepes-table"]');
levelsData.slice(0, 10).forEach((entry, index) => {
    let levelElement = ''

    const entryElement = document.createElement('div');
    entryElement.setAttribute('class', 'level-wrapper')
    // entryElement.setAttribute('role', 'row')


    if (entry.filled == 100) {
        levelElement = `<div class="l-status">
        <img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64200f60acf50ee5d2360703_SOLD%20OUT.png" loading="lazy" alt="" class="level-img">
        <div class="level-text">Level ${entry.level}</div>
     </div>`
        entryElement.classList.add('soldout')
    } else if (entry.filled != 0 && entry.filled != 100) {
        levelElement = ` <div class="l-status">
        <img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/6420113ecc09c93f9ec2d90f_open.png" loading="lazy" alt="" class="table_image">
        <div class="level-text">Level ${entry.level}</div>
     </div>`
        entryElement.classList.add('open')
    } else {
        levelElement = `<div class="l-status">
        <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-table-normal ld">#${entry.level}</div>
        <div class="level-text">Level ${entry.level}</div>
     </div>`
    }

    entryElement.innerHTML = `
    <div class="top">
       <div class="left">
          ${levelElement}
       </div>
       <div class="right">
          <div class="label">
             <div class="percent-text">23%</div>
             <img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/641c86a3849aad0055ed175e_pls.png" loading="lazy" id="w-node-_0f41bdfe-ee9e-b32d-1cfe-34d410bb98b3-5c7ba5ac" alt="" class="image-19">
          </div>
          <div class="bar">
             <div class="pls-bar"></div>
             <div class="usdc-bar"></div>
             <div class="label-div">
                <div class="label-text">25%</div>
                <div class="label-text">75%</div>
             </div>
          </div>
          <div class="label">
             <img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/641c30595b995f2307b00772_usd-coin-usdc-logo%203.png" loading="lazy" id="w-node-_86e10863-1a82-a679-4e38-ecd53cc1b75f-5c7ba5ac" alt="" class="image-19">
             <div class="percent-text">23%</div>
          </div>
       </div>
    </div>
    <div class="values-div">
       <div class="l-block">
          <div class="l-text">Max Raise</div>
          <div class="l-value">$${entry.max_raise}</div>
       </div>
       <div class="l-block">
          <div class="l-text">$PEG Distribution</div>
          <div class="l-value">${entry.peg_per_level}</div>
       </div>
       <div class="l-block">
          <div class="l-text">$PEG Start Price</div>
          <div class="l-value">~${entry.price_per_pls}</div>
       </div>
    </div>
    <div id="w-node-_205469fc-209c-0b40-010d-2c691769c95a-5c7ba5ac" class="level-contributions">
       <div class="contributions-wrapper">
          <img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/641c86a3849aad0055ed175e_pls.png" loading="lazy" alt="" class="label-icon">
          <div class="c-div">
             <div class="contribution-values">
                <div class="div-wrapper">
                   <div class="text-block---smaill">$PLS contributed</div>
                   <div class="text-distribution">$USD value</div>
                </div>
                <div class="div-wrapper">
                   <div class="text-block---smaill value">PLS Level 5</div>
                   <div class="text-distribution">$75,000</div>
                </div>
             </div>
             <div class="contribution-values">
                <div class="div-wrapper">
                   <div class="text-block---smaill">$PEG Price</div>
                </div>
                <div class="div-wrapper">
                   <div class="text-block---smaill value">$${Number(entry.max_raise) / Number(entry.peg_per_level)}<</div>
                </div>
             </div>
          </div>
       </div>
       <div class="contributions-wrapper">
          <img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/641c30595b995f2307b00772_usd-coin-usdc-logo%203.png" loading="lazy" alt="" class="label-icon">
          <div class="c-div">
             <div class="contribution-values">
                <div class="div-wrapper">
                   <div class="text-block---smaill">$USDC contributed</div>
                   <div class="text-distribution">$USD value</div>
                </div>
                <div class="div-wrapper">
                   <div class="text-block---smaill value">PLS Level 5</div>
                   <div class="text-distribution">$75,000</div>
                </div>
             </div>
             <div class="contribution-values">
                <div class="div-wrapper">
                   <div class="text-block---smaill">$PEG Price</div>
                </div>
                <div class="div-wrapper">
                   <div class="text-block---smaill value">$${Number(entry.max_raise) / Number(entry.peg_per_level)}</div>
                </div>
             </div>
          </div>
       </div>
    </div>
    `;
    levelsPepesTable.appendChild(entryElement)
});
// End of Level Details