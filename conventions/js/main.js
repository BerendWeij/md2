$( ".button" ).click(function() {
    console.log('stop geen logica direct in een listener functie');
    console.log('maar roep de desgewenste business logic aan');
    showInformation();
});

function showInformation()
{
    console.log("de logica in deze functie is vanuit verschillende plekken aan te roepen");
}