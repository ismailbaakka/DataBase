 function blockElementsByClass(className) {
            var elements = document.getElementsByClassName(className);

            // Remove elements from the DOM
            while (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
        }


        blockElementsByClass('PageHeader');
        blockElementsByClass('SlideMenu');
        blockElementsByClass('relatedPosts');
        blockElementsByClass('row');
        blockElementsByClass('AboElSeed');
        blockElementsByClass('ads-aa');
        //End Page 1
        blockElementsByClass('MainMenuOverlay');
        blockElementsByClass('mys-wrapper');
        blockElementsByClass('GoogleActiveViewInnerContainer');
        blockElementsByClass('div-over');
        blockElementsByClass('');









        // Remove elements by ID
        var elementsToRemoveById = [
            'div-gpt-ad-1714577946689-0',
            'div-gpt-ad-1715073293748-0',
            'ps_ad_rotation_id_5446',
            'ad_unit',
            'fixedban2',
            ''

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