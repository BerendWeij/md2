$(function() {

    var Animal = function() {

    }

    Animal.prototype.run = function()
    {
        console.log('run');
    }



    var Cat = function()
    {

    }

    Cat.prototype = Object.create(Animal.prototype);
    Cat.prototype.miauw = function()
    {

    }

    var pietje = new Cat();
    var dog = new Animal();
    dog.bla= 3;
    pietje.extra = 5;

    // we maken een standaard variable voor de unique id
    // elk object geven we een unique id zodat we kunnen zien of ze uniek zijn :)
    var uID = 0;
    function showPrototypeChain(target, indention)
    {
        // heeft deze target al een unique id? Zo niet, aanmaken!
        if(!target.hasOwnProperty("uID"))
        {
            target.uID = uID++;
        }
        // we console.loggen het ID van dit object
        console.log(indention + "object met id: " + target.uID);
        // we loop-en over alle properties van ons 'target'
        for(var property in target)
        {
            if(property != "uID" && target.hasOwnProperty(property))
            {
                // we loggen deze property als hij echt van 'target' is (en niet van zijn prototype)
                console.log(indention + "-- " + property + " (" + (typeof target[property]) + ")");
            }
        }
        indention += "   ";
        // recursieve functie. We willen ook alles zien van de prototype van target
        if(Object.getPrototypeOf(target))showPrototypeChain(Object.getPrototypeOf(target), indention);
    }

    // we willen de prototype chain zien van pietje
    showPrototypeChain(pietje, "");
    // we willen de prototype chain zien van dog
    showPrototypeChain(dog, "");

    var bello = new Animal();
    showPrototypeChain(bello, "");

});



Object.prototype.berend = function()
{
    console.log(5);
}

