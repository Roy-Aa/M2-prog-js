class App{
    runApplication(){
        console.log("Hello World")
        let stat1 = this.rollstat();
        console.log(stat1)
        let header1 = document.getElementById("s1");
        header1.innerHTML = stat1

        let stat2 = this.rollstat();
        console.log(stat2)
        let header2 = document.getElementById("s1");
        header1.innerHTML = stat2

        let stat3 = this.rollstat();
        console.log(stat3)
        let header3 = document.getElementById("s1");
        header1.innerHTML = stat3

        let stat4 = this.rollstat();
        console.log(stat4)
        let header4 = document.getElementById("s1");
        header1.innerHTML = stat4

        let stat5 = this.rollstat();
        console.log(stat5)
        let header5 = document.getElementById("s1");
        header1.innerHTML = stat5

        let stat6 = this.rollstat();
        console.log(stat6)
        let header6 = document.getElementById("s1");
        header1.innerHTML = stat6
    }


    rollDice(){
        let random = Math.floor(Math.random() * 6 +1);
        return random;
    }
    rollstat(){
        let d1 = this.rollDice();
        let d2 = this.rollDice();
        let d3 = this.rollDice();
        let d4 = this.rollDice();

        let diceArray = [d1, d2, d3, d4]
        console.log(diceArray);
        diceArray.sort();
        console.log(diceArray);
        let som = diceArray[1] + diceArray[2] + diceArray [3];
        console.log(som);
    }
}

let app = new App();
app.runApplication(); 