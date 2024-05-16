 function blockElementsByClass(className) {
            var elements = document.getElementsByClassName(className);

            // Remove elements from the DOM
            while (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
        }

        blockElementsByClass('PageHeader');
        blockElementsByClass('row');
        blockElementsByClass('AboElSeed');
        blockElementsByClass('relatedPosts');
        blockElementsByClass('container-6f4f5c3f5bfa5f5651799c658cb3556b12073');
        blockElementsByClass('container-6f4f5c3f5bfa5f5651799c658cb3556b59147');
        blockElementsByClass('pl-6f4f5c3f5bfa5f5651799c658cb3556b__wrap');
        blockElementsByClass('fqlverki');
        blockElementsByClass('WorkTeam');
        blockElementsByClass('ps_ad_rotation_id_5446');
        blockElementsByClass('div-over');
        blockElementsByClass('x3z10fv');
        blockElementsByClass('ad_position_box');
        blockElementsByClass('ps_ad_rotation_id_5446');
        blockElementsByClass('container-6f4f5c3f5bfa5f5651799c658cb3556b63467');
        blockElementsByClass('ps_ad_rotation_id_5199');
        blockElementsByClass('div-gpt-ad-1714577946689-0');
        blockElementsByClass('MainMenuOverlay');
        blockElementsByClass('gpt_unit_/21727820151,22953604694/Gametech_HM/Interstitial-gamestation_0');
        blockElementsByClass('');
        blockElementsByClass('');
        blockElementsByClass('');
        blockElementsByClass('');
        blockElementsByClass('');
        blockElementsByClass('');
        blockElementsByClass('');
        blockElementsByClass('');
        blockElementsByClass('');
        blockElementsByClass('');
        blockElementsByClass('');









        // Remove elements by ID
        var elementsToRemoveById = [
            't1.gameland.click',
            'google_ads_iframe_/22654869840/apl_1__container__',
            'google_ads_iframe_/22893379435/apl_0__container__',
            'dontfoid', // <-- Remove this element
            'gpt_unit_/21727820151,22953604694/Gametech_HM/Interstitial-gamestation_0',
            'l7qz7g1'
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