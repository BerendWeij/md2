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


    var uID = 0;
    function showPrototypeChain(target, indention)
    {
        if(!target.hasOwnProperty("uID"))
        {
            target.uID = uID++;
        }

        console.log(indention + "object met id: " + target.uID);
        for(var property in target)
        {
            if(property != "uID" && target.hasOwnProperty(property))
            {
                console.log(indention + "-- " + property + " (" + (typeof target[property]) + ")");
            }
        }
        indention += "   ";
        if(Object.getPrototypeOf(target))showPrototypeChain(Object.getPrototypeOf(target), indention);
    }

    showPrototypeChain(pietje, "");
    showPrototypeChain(dog, "");

    var bello = new Animal();
    showPrototypeChain(bello, "");
    
});



Object.prototype.berend = function()
{
    console.log(5);
}

