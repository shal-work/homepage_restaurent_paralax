
window.addEventListener('DOMContentLoaded', function () {
    const landing = document.querySelector('.landing');

    let initialСoordX;
    let initialСoordY;

    let is = 0;
    
    landing.addEventListener('mousemove', e => {

        let rect = e.target.getBoundingClientRect();
        if (!initialСoordX) {
            initialСoordX = e.clientX - rect.left;
            initialСoordY = e.clientY - rect.top;
        }
        
        let X = e.clientX - rect.left - initialСoordX; //x position относительная
        let Y = e.clientY - rect.top -initialСoordY;  //y position относительная
   
        let dStep;
        if (is < 5) {
            is++;
        } else {
            is = 5; 
        }
        const layer = document.querySelectorAll('.layer');
        layer.forEach((item, i) => {
            switch (i+1)
            {
                case 1:
                case 7:	
                case 14:	
                    dStep = 1 * is;
                    item.style.transform = 'translate(' + X / dStep + 'px ,' + Y / dStep + 'px)';
                    break;
                case 2:
                case 6:
                case 15:
                case 18:	
                    dStep = 1.5 * is;
                    item.style.transform = 'translate(' + X / dStep + 'px ,' + Y / dStep + 'px)';
                    break;
                case 3:
                case 9:
                case 13:
                case 16:
                    dStep = 2.0 * is;
                    item.style.transform = 'translate(' + X / dStep + 'px ,' + Y / dStep + 'px)';
                    break;
                case 4:
                case 10:
                case 11:
                case 17:
                    dStep = 2.2 * is;
                    item.style.transform = 'translate(' + X / dStep + 'px ,' + Y / dStep + 'px)';
                    break;
                case 5:
                case 8:
                case 12:
                case 19:
                    dStep = 2.8 * is;
                    item.style.transform = 'translate(' + X / dStep + 'px ,' + Y / dStep + 'px)';
                    break;
            
                default:
                    break;
            }
        });

        if(is == 0) {
            
        }
        // is = 1;
        
    });
});
