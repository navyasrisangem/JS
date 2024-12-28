function Reverse(str) {
    var result = " ";
    var words = str.split('');
    // console.log(words);
    for(var i=(words.length-1);i>=0;i--) {
       result = result + words[i];
    }
    console.log(result);
}
Reverse("welcome to javascript");