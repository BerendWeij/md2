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