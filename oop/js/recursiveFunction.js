$(function(){

    var data = {id:"1", question:"vraag 1", answers:[
        {id:"1.1", question:"vraag 1.1", answers:[
            {id:"1.1.1", question:"vraag 1.1.1", answers:[]},
            {id:"1.1.2", question:"vraag 1.1.2", answers:[]}
        ]},
        {id:"1.2", question:"vraag 1.2", answers:[
            {id:"1.2.1", question:"vraag 1.2.1", answers:[]},
            {id:"1.2.2", question:"vraag 1.2.2", answers:[
                {id:"1.2.2.1", question:"vraag 1.2.2.1", answers:[]},
                {id:"1.2.2.2", question:"vraag 1.2.2.2", answers:[
                    {id:"1.2.2.2.1", question:"vraag 1.2.2.2.1", answers:[]}
                ]}
            ]}
        ]},
        {id:"1.3", question:"vraag 1.3", answers:[]}
    ]};

    function showBranches(target, indention)
    {
        var l = target.answers.length;
        indention = indention + "  ";
        for(var i = 0 ; i < l ; i++)
        {
            console.log(indention + target.answers[i].question);
            showBranches(target.answers[i], indention);
        }
    }

    showBranches(data, "");




});