class App
{
    runApplication()
    {
        console.log("Hello world!")
        let appNaam = "Marco" 
        let versienummer = 0.9
        let versiedatum = Date
        let autheur = "Roy" 
        let copyright = "NCS"
        let distributeur = "Marco"
        let darkmode = true

        console.log(appNaam)
        console.log(versienummer)
        console.log(autheur)
        console.log(copyright)
        console.log(distributeur)
        console.log(darkmode)
        console.log(versiedatum)
    }
}


let app = new App();
app.runApplication();