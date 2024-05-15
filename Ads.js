 function blockElementsByClass(className) {
            var elements = document.getElementsByClassName(className);

            // Remove elements from the DOM
            while (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
        }

        blockElementsByClass('logo');
        blockElementsByClass('PageHeader');
        blockElementsByClass('topBarSingle');
        blockElementsByClass('main-p-menu');
        blockElementsByClass('AboElSeed');
        blockElementsByClass('header-wrapper');
        blockElementsByClass('footer');
        blockElementsByClass('pl-6f4f5c3f5bfa5f5651799c658cb3556b__wrap');
        blockElementsByClass('ps_ad_rotation_id_5446');
        blockElementsByClass('div-over');

        
        blockElementsByClass('div-gpt-ad-1698946296176-0');
        blockElementsByClass('div-gpt-ad-1698946361303-0');
        blockElementsByClass('div-gpt-ad-8176806-1');
        blockElementsByClass('blog-post');
        blockElementsByClass('comments-container');
        blockElementsByClass('abs-head');
        blockElementsByClass('modal fade');
        blockElementsByClass('wrapper justify-content-between align-items-center');
        blockElementsByClass('abs');
        blockElementsByClass('end');
        blockElementsByClass('aside-wrapper mt-5');
        blockElementsByClass('mb-3 text-center');
        blockElementsByClass('fade modal');
        blockElementsByClass('d-flex justify-content-center my-3');

        // Remove elements by ID
        var elementsToRemoveById = [
            'id-custom_banner',
            'google_ads_iframe_/22654869840/apl_1__container__',
            'google_ads_iframe_/22893379435/apl_0__container__',
            'dontfoid', // <-- Remove this element
            'gpt_unit_/7047,22643491855/apl/anchor/anchortop_0'
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