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
    pietje.extra = 5;
    console.log(pietje);
    pietje.miauw();
    pietje.run();
    pietje.toString();
    dog.run();
    console.log(dog);


});



Object.prototype.berend = function()
{
    console.log(5);
}

