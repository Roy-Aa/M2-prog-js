class App
{
    runApplication()
    {
        console.log("Hello world!");
        scriptFunction();
        this.classFunction();
    }

    classFunction()
    {
        console.log("MARIO!!")
        let Resultaat = "BWAHAHA"
        return Resultaat
        
        
    }
}


let app = new App();
app.runApplication();               