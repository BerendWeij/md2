var Controller = {};

Controller.create = function(includes){

    var result = function(){
        this.initializer.apply(this, arguments);
        this.init.apply(this, arguments);
    }

    result.fn = result.prototype;
    result.fn.init = function(){};
    result.fn.elements = {};

    result.fn.$ = function(selector){
        return $(selector, this.el);
    };

    result.fn.initializer = function(options){
        this.options = options;

        for (var key in this.options)
        {
            this[key] = this.options[key];
        }

        if (this.events) this.refreshEvents();
        if (this.elements) this.refreshElements();
    }

    result.fn.refreshElements = function(){
        for(var key in this.elements)
        {
            console.log('element: ' + key + " value: " + this.elements[key]);
            this[this.elements[key]] = this.$(key);
        }
    };

    result.fn.refreshEvents = function(){
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

    if(includes)
    {
        for(var key in includes){
            console.log("key:" + key);
            result.fn[key] = includes[key];
        }
    }

    return result;
}