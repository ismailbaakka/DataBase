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
        blockElementsByClass('');
        blockElementsByClass('');
        blockElementsByClass('');
        blockElementsByClass('');









        // Remove elements by ID
        var elementsToRemoveById = [
            '',
            '',
            '',
            '',
            '',
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