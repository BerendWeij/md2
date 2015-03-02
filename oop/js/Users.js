// een nieuwe constructor om Users instanties aan te maken
// dit kan door de volgende code uit te voeren:
// var users = new Users();
var Users = function()
{
    this.records = [];
}

// we zorgen voor een 'prototype' chain door een nieuw object
// aan te maken met een 'proto' verwijzend naar de Model prototype
// Als je nu een Users aanmaakt:
// var users = new Users();
// dan is de prototype chain voor de variabele users:
// users (object) -> prototype (object met properties zoals deleteAll) -> Model.prototype (object met properties zoals get set) -> Default Object (met properties)
Users.prototype = Object.create(Model.prototype);

// we maken speciaal een functie aan op Users
Users.prototype.deleteAll = function()
{
    this.records.splice(0, this.records.length);
}