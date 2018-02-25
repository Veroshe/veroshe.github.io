/**
 * Created by HP on 12.02.2018.
 */

window.onload = function() {
    
    init();

    function init() {
        var canvas = document.getElementById('sparkle');
        var ctx = canvas.getContext("2d");
        ctx.scale(100,10);
        ctx.canvas.width = document.getElementById('main-container').offsetWidth;
        ctx.canvas.height = document.getElementById('main-container').offsetHeight;
        var arrayX = [];
        var arrayY = [];
        ctx.font = '20px Helvetica';

        setTimeout(draw, 1000);
        canvas.addEventListener('click', clickListener);
    }

    function draw() {

        if (arrayX.length !== 0) {
            color = 'rgb(255,255,255)';
            for (i = 0; i < arrayX.length; i++) {
                console.log(arrayX[i], arrayY[i]);
                ctx.clearRect((arrayX[i]-40),(arrayY[i]-40),200,200);
                console.log("weheheh");
            }
            arrayX.length = 0;
            arrayY.length = 0;
        }
        setTimeout(draw, 1000);

    }

    function shadeRGBColor(color, percent) {
        var f = color.split(","), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent,
            R = parseInt(f[0].slice(4)), G = parseInt(f[1]), B = parseInt(f[2]);
        return "rgb(" + (Math.round((t - R) * p) + R) + "," + (Math.round((t - G) * p) + G) + "," + (Math.round((t - B) * p) + B) + ")";
    }

    function add(x, y) {
        arrayX.push(x);
        arrayY.push(y);
    }

    function fill(x, y, color, percent) {
        var z = 0.5;
        for (i = 0; i < 40; i++) {

            if(color == 'rgb(255,255,255)')
                ctx.fillStyle= 'rgb(255,255,255)';
            else
            ctx.fillStyle = shadeRGBColor(color, percent);
           

            //cross
            ctx.fillRect(x + i, y, 1, 1);
            ctx.fillRect(x - i, y, 1, 1);
            ctx.fillRect(x, y + i, 1, 1);
            ctx.fillRect(x, y - i, 1, 1);
            //skew
       
            ctx.fillRect(x - i, y + i, 1, 1);
            ctx.fillRect(x + i, y + i, 1, 1);
            ctx.fillRect(x + i, y - i, 1, 1);
            ctx.fillRect(x - i, y - i, 1, 1);
      
          
            //skewy-skew
          
            if(color == 'rgb(255,255,255)')
            {
             console.log("white");
            }
            else{
                    ctx.fillRect(x + z, y + i, 1, 1);
                    ctx.fillRect(x + i, y + z, 1, 1);
                    ctx.fillRect(x + i, y - z, 1, 1);
                    ctx.fillRect(x + z, y -i, 1, 1);

                    ctx.fillRect(x - z, y - i, 1, 1);
                    ctx.fillRect(x - i, y - z, 1, 1);
                    ctx.fillRect(x - i, y + z, 1, 1);
                    ctx.fillRect(x - z, y + i, 1, 1);
            }
        
            percent += 0.025;
            z+=0.5;
            console.log( ctx.fillStyle, z);
        }
    }
    function clickListener(event){
        var x = event.layerX;
        var y = event.layerY;
        console.log(x, y);
        add(x, y);
        var color = 'rgb(113, 39, 39)';
        var percent = 0;
        fill(x, y, color, percent);
    }

}
