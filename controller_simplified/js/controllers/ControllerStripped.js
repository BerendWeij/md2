// we maken een simpel object met enkele properties die we gaan kopieren naar de Controller.prototype
var includes = {
                    init: function(){
                        console.log(5);
                    },
                    test: function(){
                        console.log(155);
                    },
                    blabla: 5,
                    blablabla: 6
                };


// onze Controller constructor
var Controller = function(){
    //this.initializer.apply(this, arguments);
    //this.init.apply(this, arguments);
}

// lege functie om later te overschrijven
Controller.prototype.init = function(){};
// object om html elements in aan te kunnen geven
Controller.prototype.elements = {};

// simpele functie om alleen html elementen binnen this.el op te kunnen halen
Controller.prototype.$ = function(selector){
    return $(selector, this.el);
};

// standaard initializer als je een nieuwe controller aanmaakt
Controller.prototype.initializer = function(options){
    this.options = options;

    for (var key in this.options)
    {
        this[key] = this.options[key];
    }

    if (this.events) this.refreshEvents();
    if (this.elements) this.refreshElements();
}

// standaard functie om html elementen op te halen met jquery en in een variabele op te slaan
Controller.prototype.refreshElements = function(){
    for(var key in this.elements)
    {
        console.log('element: ' + key + " value: " + this.elements[key]);
        this[this.elements[key]] = this.$(key);
    }
};

// standaard functie om makkelijk naar events in HTML te kunnen luisteren
Controller.prototype.refreshEvents = function(){
    for(var key in this.events)
    {
        var split = key.split(" ");
        var selector = split[0];
        var event = split[1];
        var handler = this.events[key];
        var element = this.$(selector);

        element.on(event, this[handler].bind(this));
    }
};

// als er een includes object is dan kopieren we alle properties naar
// Controller.prototype
if(includes)
{
    for(var key in includes){
        Controller.prototype[key] = includes[key];
    }
}

var menuView = new Controller();
menuView.test();