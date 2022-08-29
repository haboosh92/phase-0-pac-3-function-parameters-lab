// x = introduction("Aki");
// console.log(x);
// y = introductionWithLanguage("Aki", "Ember.js")
// console.log(y);
introduction('hiba');
introductionWithLanguage('hiba', 'Ember.js');

function introduction(name){
    return (`Hi, my name is ${name}.`)
}

function introductionWithLanguage(name , language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.` )
}

function introductionWithLanguageOptional(name = "Douaa", language = "JavaScript"){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.` )
}