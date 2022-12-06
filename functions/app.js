class App
{
    runApplication()
    {
        console.log("Hello world!")
        scriptFunction();
        this.classFunction();
    }

    classFunction()
    {
        console.log("je voert een class function uit!")
    }
}


let app = new App();
app.runApplication();