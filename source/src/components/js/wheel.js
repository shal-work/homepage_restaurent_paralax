'use strict';
document.addEventListener('DOMContentLoaded', function () {
    // const site = document.querySelector('#site');

    const landing = document.querySelector('#landing');
    const widjet = document.querySelector('.widget-container-landing');
    
    let count = 0;
    let isFlug = 1;

        
        document.addEventListener('mousewheel', event => {
            if(isFlug === 1) {
                let direction = Math.sign(event.deltaY);//возвращает знак числа, указывающий на то, является ли число отрицательным, положительным или нулём.
                // console.log("isFlug: " + isFlug); 
                if (direction > 0 && count >= 0) {
                    count++;
                } else if( direction < 0 && count > 0 ) {
                    count--;
                }
        
                if (count >= 5) {
                    count = 4;
                } 
                if (count <= -5) {
                    count = 0;
                }
        
                switch(count){
                    case 0:
                        layerTransform(0);
                        widjet.style.transform = "matrix(1, 0, 0, 1, -160, -160)";//(scaleX, 0, 0, scaleX, dx, dy)
                        fadeOutStat(landing, 1);
                        break;
                    case 1:
                        layerTransform(1);
                        widjet.style.transform = "translate(0%, -40%) translate3d(-160px, -180px, 0px) scale(.9, .9)";
                        fadeOutStat(landing, 0.9);
                        break;
                    case 2:
                        layerTransform(2);
                        widjet.style.transform = "translate(0%, -50%) translate3d(-160px, -250px, 0px) scale(0.849622, 0.849622)";
                        fadeOutStat(landing, 0.9);
                        break;
                    case 3:
                        layerTransform(3);
                        widjet.style.transform = "translate(0%, -76%) translate3d(-160px, -300px, 0px) scale(0.6, 0.6)";
                        fadeOutStat(landing, 0.5);
                         break;
                    case 4:
                        layerTransform(4);
                        widjet.style.transform = "translate(0%, -86%) translate3d(-160px, -327.345px, 0px) scale(0.4, 0.4)";
                        fadeOutStat(landing, 0.2);
                        isFlug = 0;
                        break;
                    default:
                        break;
                }
            }
        });

        landing.addEventListener('click', event => { 
        
            widjet.style.transition = ".8s ease-out";
            // widjet.style.transition = ".8s cubic-bezier(0.4, 0, 1, 1)";
            widjet.style.transform = "translate(0%, -200%) translate3d(-200px, -27.345px, 0px) scale(0.566, 0.566)"; 
            fadeOut(landing, 600, 1);
            const parallax = landing.querySelector('.landing__parallax');
            parallax.style.transition = ".6s ease-out";
            parallax.style.transform = "translate(0vw, -41vh)";
            // layerTransform(0);
            let body = document.querySelector('body');
            body.style.overflowY = 'auto'
            isFlug = 0;
        });

});


const layerTransform = (count = 0) => {
    const layer = document.querySelectorAll('.load-in--confetti i');
    const img = document.querySelectorAll('.load-in--confetti img');
          
    let tx = 9, ty = -9,  vh = 'vh', vw = 'vw';
    switch(count){
        case 1:
            tx = 5; ty = -5;
            break;
        case 2:
            tx = 8; ty = -8;
            break;
        default:
            break;
    }
    


    layer.forEach((item, i) => {
        switch (i+1)
        {
            case 1: case 2:	 case 3: case 4: case 5:	
            case 6: case 7:	
                item.style.transform = `translate( ${tx}${vh}, ${ty}${vw}) translate3d(0px, 0px, 0px)`;
                break;
            case 8: case 9:	 case 10: case 11: case 12:	
            case 13: case 14:	
                item.style.transform = `translate( ${-tx}${vh},  ${ty}${vw}) translate3d(0px, 0px, 0px)`;
                break;
            default:
                break;
        }
    });
    img.forEach((item, i) => {
        switch (i+1)
        {
            case 1: case 2:	 case 3: case 4: case 5:	
            case 6: case 7:	
                item.style.transform = `translate( ${tx}${vh}, ${ty}${vw}) translate3d(0px, 0px, 0px)`;
                break;
            case 8: case 9:	 case 10: case 11: case 12:	
            case 13: case 14:	
                item.style.transform = `translate( ${-tx}${vh},  ${ty}${vw}) translate3d(0px, 0px, 0px)`;
                break;
       
            default:
                break;
        }
    });
}


const fadeOutStat = function(name , opacity) {
    const _fadeOut = (opacity) => {
        name.style.opacity = opacity;
        if (opacity <= 0.2) {
            fadeOut(name, 200, 0.2);
        }
    };
    _fadeOut(opacity);
};


const fadeOut = function(name , dur, opacity) {
    const _fadeOut = (complection) => {
        name.style.opacity = (1 - complection) * opacity;
        if (complection === 1) {
            name.style.display = 'none';
            let body = document.querySelector('body');
            body.style.overflowY = 'auto';
        }
    };
    const ani = animateOverTime(dur, _fadeOut);
    requestAnimationFrame(ani);
};

const animateOverTime = function(dur, cb) {
    let timeStart;
    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }
        
        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / dur, 1);
        cb(complection);

        if (timeElapsed < dur) {
            
            requestAnimationFrame(_animateOverTime);
        }
    }

    return _animateOverTime;
};
