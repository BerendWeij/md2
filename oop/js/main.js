// als de document is geladen dan wordt dit uitgevoerd
// $() is een shortcut voor $( document ).ready()
$(function() {
    page.showButtonText();

    // voor nu maken we 2 vragen aan
    // normaal zou je dat natuurlijk nooit zo doen
    var question1 = new Question(),
        question2 = new Question();

    question1.setLabel("dit is vraag 1");

    console.log(question1.label);
    //-- dit is vraag 1
    console.log(question2.label);
    //-- undefined

    console.log(Question.maxQuestions);

    /*

    // laten we kijken of de functies verwijzen naar dezelfde functie
    console.log(question1.setLabel === question2.setLabel);

    // laten we kijken of hun 'getSpacing' gelijk is
    console.log(question1.getSpacing === question2.getSpacing);

    */

    /*
    var test = {
                name: "Berend",
                age: 31,
                getAgeInMonths: function()
                {
                    return this.age * 12;
                }
    };

    Array.prototype.indexOf = function()
    {
        console.log(5000);
    }

    var users = [1,2,3,4,5];
    users.test();

    var students = [];
    students.test();


    console.log(test);

    */

    /*
    var user = {
        age: 0,
        getAgeInMonths: function()
        {
        return this.age * 12;
    }};

    var berend = Object.create(user);
    berend.age = 31;
    console.log(berend.getAgeInMonths());
    */

    var testModel = new Model();
    testModel.set(0, "media development");
    testModel.set(1, "Mediacollege");

    var users = new Users();
    users.set(0, "eerste waarde");
    users.set(1, "tweede waarde");

});