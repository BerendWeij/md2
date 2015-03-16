// een constructor voor mijn Model Class
// we kunnen nu door deze functie nieuwe objecten aan maken van type
// Model door dit uit te voeren:
// var model = new Model();
var Model = function()
{
    this.records = [];
}

/*
Model.proxy = function(func){
    var self = this;
    return(function(){
        return func.apply(self, arguments);
    });
}
*/

Model.prototype.proxy = function(func)
{
    var self = this;
    return (
        function(){
            return func.apply(self, arguments);
        }
    );
}

// ik maak een standaard functie aan voor alle Models om waardes te zetten
Model.prototype.set = function(id, value)
{
    this.records[id] = value;
}

// met deze functie kunnen we ook een waarde ophalen
Model.prototype.get = function(id)
{
    return this.records[id];
}