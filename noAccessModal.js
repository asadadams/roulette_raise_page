// Reference to the element no access modal
const noAccessModal = document.createElement('div');


noAccessModal.innerHTML = `
    <div class="absolute h-[2844px] fixed overflow-hidden inset-0 z-[1001] bg-black bg-opacity-95 text-white namm-show lg:flex lg:items-center">
    <div class="nam-content-box mt-28 lg:mt-0 w-full ml-0 -mr-8 sm:mx-auto sm:w-3/5 sm:max-w-[500px] lg:max-w-[500px] xl:max-w-[500px] bg-deep-blue px-4 sm:px-8 pb-12">
    <div class='text-[47px] sm:text-[47px] lg:text-[55px] xl:text-[67px] font-["Tourney"] font-bold text-center gradient-text tracking-[0.03em] mb-0 sm:mb-8 mt-0 sm:mt-8 py-4 sm:py-0'>
        ALERT
    </div>
    <div class='text-center barlow text-[#e0ddff]'>
        Pepe Raise Page is a desktop experience. Please change your device to a desktop to continue.
    </div>
    </div>
    </div>
`

// Define a function to handle the resize event
function handleResize() {


    const isMobile = window.matchMedia('(max-width: 640px)').matches;
    console.log('IsMobile::', isMobile)
    if (isMobile) {
        // Append the element to the page
        console.log('The page is being viewed on a mobile device.');
        document.body.appendChild(noAccessModal)
    } else {
        console.log('The page is not being viewed on a mobile device.');
        noAccessModal.remove();
    }

    // if (window.innerWidth < 640) {
    //     // Append the element to the page
    //     console.log('The page is being viewed on a mobile device.');
    //     document.body.appendChild(noAccessModal)
    // } else {
    //     console.log('The page is not being viewed on a mobile device.');
    //     noAccessModal.remove();
    // }
}

// Call the function once to set the initial state of the element
handleResize();

// Adding an event listener to the window object to handle the resize event
window.addEventListener('resize', handleResize);