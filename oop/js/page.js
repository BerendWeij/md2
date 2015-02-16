// voorbeeld van functies en variabelen ondergebracht onder een namespace
// dit voorkomt 'globals' in je project
// hieronder staat de simpelste vorm
// we gaan later nog naar closures kijken
var page = {

    startButton:$(".button"),

    showButtonText: function()
    {
        console.log(this.startButton.html());
    },

    update: function()
    {
        //.....
    }
}