class App
{
    runApplication()
    {
        console.log("Hello world!")

        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10);
        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(300,100)
        g.lineTo(200,300)
        g.lineTo(600,400)
        g.lineTo(700,200)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "orange";
        g.moveTo(200,300)
        g.lineTo(200,500)
        g.lineTo(600,600)
        g.lineTo(600,400)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(600,400)
        g.lineTo(700,200)
        g.lineTo(800,300)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "orange";
        g.moveTo(600,400)
        g.lineTo(600,600)
        g.lineTo(800,500)
        g.lineTo(800,300)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(400,400)
        g.lineTo(250,365)
        g.lineTo(250,470)
        g.lineTo(400,506)
        g.lineTo(400,400)
        g.stroke();
        g.fill();

        g.stroke();
        console.log(canvas)
    }
}


let app = new App();
app.runApplication();