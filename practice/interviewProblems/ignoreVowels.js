function NoVowels(str) {
   let result = '';
   for(var i=0;i<str.length;i++) {
      if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
         continue;
      } 
      result = result + str[i];     
      }
      console.log(result);
}
NoVowels("welcome to javascript");
