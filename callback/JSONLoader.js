/**
 * de constructor van JSONLoader. Hierbinnen doen we niets
 * maar nu kunnen we wel nieuwe instanties aanmaken
 */
function JSONLoader()
{
}

JSONLoader.prototype.load = function(url, callback)
{
    // om data op te kunnen halen hebben we een XMLHttpRequest nodig
    var xmlhttp = new XMLHttpRequest();
    // je geeft eerst de method GET/POST en de url door
    xmlhttp.open("GET", url);
    xmlhttp.send();

    // we luisteren of er iets verandert (foutmelding of succes)
    xmlhttp.addEventListener('readystatechange', function () {
        // readyState 4 is 'request finished and response is ready'
        // status 200 betekent 'bestand gevonden'
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // als er een functie is doorgegeven dan roepen we hem aan met de data
            if(callback)
            {
                callback( JSON.parse(xmlhttp.responseText) );
            }
        }
    });
};
