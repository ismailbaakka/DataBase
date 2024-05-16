function blockElementsByClass(startOfClassName) {
    var elements = document.querySelectorAll('[class^="' + startOfClassName + '"]');

    // Remove elements from the DOM
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// List of class name starts
var classNamesStarts = [
    'container-6f4f5c3f5bfa5f5651799c658cb3556b',
    'anotherClassStart',
    'yetAnotherClassStart',
    // add more class starts here
];

// Call the function for each class start
classNamesStarts.forEach(blockElementsByClass);

// Remove elements by ID
var elementsToRemoveById = [
    'div-gpt-ad-1714577946689-0',
    'div-gpt-ad-1715073293748-0',
    'ps_ad_rotation_id_5446',
    'ad_unit',
    'fixedban2',
    'fixedban',
    'gpt_unit_/21727820151,22953604694/Gametech_HM/video-ad2_0',
    'container-6f4f5c3f5bfa5f5651799c658cb3556b44923',
    'div-gpt-ad-1714577932847-0',
    'google_ads_iframe_/21727820151,22953604694/Gametech_HM/Interstitial-gameland_0__container__',
    'gpt_unit_/21727820151,22953604694/Gametech_HM/Interstitial-gameland_0'
];

elementsToRemoveById.forEach(function(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.remove();
    }
});

// Remove additional aplvideo elements by class name
var aplvideoDivs = document.getElementsByClassName('aplvideo');
while (aplvideoDivs.length > 0) {
    aplvideoDivs[0].remove();
}
