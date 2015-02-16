// als de document is geladen dan wordt dit uitgevoerd
// $() is een shortcut voor $( document ).ready()
$(function() {

    var templateHTML    =   $('#profileTemplate').html(), // we halen de template op uit de HTML
        template        =   _.template(templateHTML); // vervolgens laten we underscore deze HTML parsen als template

    function updateView(data)
    {
        var content = "";

        // vervolgens loopen we over alle studenten heen om ze te laten zien
        // dit soort loops kunnen ook direct in je HTML door de Array direct te injecteren
        // in een template. underscore heeft hier standaard opmaak voor
        // voor nu loopen we gewoon in JavaScript
        for (student in data.students) {
            content += template(data.students[student]); // underscore injecteert je data in de template
        }

        $("#profileBlock").html(content); // we laten de gegenereerde HTML in de div #profileBlock zien
    }

    // met ajax halen we de json op voor wat data
    // inplaats van JSON kan het ook gewoon met en object in JavaScript
    $.ajax({url: "data/studentsdata.json", async: true, dataType: "json", success: updateView});

});