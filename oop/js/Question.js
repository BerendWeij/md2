var Question = function()
{
    // dit s onze constructor functie
    // als we een nieuwe question aanmaken dan gaat automatisch deze functie af
    // hier kunnen we mooi de 'begin' settings instellen

    // property aangemaakt binnen de constructor
    // hierdoor is het een 'eigen' property en niet 1 die wordt inherited
    this.spacing = 5;

    // functie aangemaakt binnen de constructor
    // hierdoor is het een 'eigen' functie/object/property
    this.getSpacing = function()
    {
        console.log(this.spacing);
    }

}
// ooit gehoord van 'pass by reference & pass by value'?
//Question.fn = Question.prototype;

// dit is een Class property
// deze kunnen we overal vandaan aanspreken
// dit noem je in andere talen 'statics'
// het nadeel is dat deze properties 'global' zijn.
// dit doorbreekt OOP. Probeer dit te vermijden
Question.maxQuestions = 10;

// Dit is een instance property
// elke instantie heeft zijn eigen 'label'
// deze zijn helaas public (we hebben liever geen public properties wegens encapsulation)
Question.prototype.label = "default value";

// dit is een 'instance' method
// deze functie roep je aan op een question instantie
Question.prototype.setLabel = function(label)
{
    this.label = label;
}

