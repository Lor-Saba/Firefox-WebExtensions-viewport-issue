

    // drag

    var elBox = document.querySelector('#container .box');

    window.addEventListener('mousemove', function(_e){

        elBox.style.transform = 'translateY('+ (_e.pageY-75) +'px)';
    });


    // filler

    var elFiller = document.querySelector('.filler');
        elFiller.innerHTML = new Array(5000).join('<span> filler </span>');


    // size type selector

    var elContainer = document.querySelector('#container');
    var elButtons   = document.querySelector('#buttons');

    elButtons.addEventListener('click', function(_e){

        if (_e.target.dataset.type === 'vp') {
            elContainer.style.width  = '100vw';
            elContainer.style.height = '100vh';
        }

        if (_e.target.dataset.type === '%') {
            elContainer.style.width  = '100%';
            elContainer.style.height = '100%';
        }
    });
