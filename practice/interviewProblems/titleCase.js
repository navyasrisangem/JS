function  TitleCase(str) {
    var result = " ";
    var words = str.split(' ');
    for(var i=0; i<words.length; i++) {
      result = result + words[i][0].toUpperCase() + words[i].slice(1).toLowerCase() + " ";    
    }    
    console.log(result);   
}
TitleCase("welcome to javascript");