var MenuView = Controller.create({
    // we vullen het object elements met een aantal referenties waar we graag
    // toegang tot zouden willen hebben. Dit maakt je code een stuk leesbaarder dan steeds zelf
    // var $startButton = $("#startButton);
    elements: {
        "#startButton": "$startButton",
        ".buttons": "$buttons",
        ".message": "$message"
    },
    // in welke events zijn we geinteresseerd?
    // Controller.create split dit netjes op en maakt de gevraagde listeners aan
    events: {
        "#startButton click": "start"
    },
    // elke controller kan een init functie hebben
    // deze functie krijgt het object door dat je doorgeeft met
    // newMenuView(options)
    init: function(options){
        console.log("init:");
        console.log(options);
    },
    // deze method wordt als handler gekoppeld aan #startButton (click)
    start: function(){
        this.$message.html('data wordt geïnjecteerd');
    }
});