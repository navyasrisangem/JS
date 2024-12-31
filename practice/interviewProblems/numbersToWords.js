function numberToWords(num) {
    const onesAndTeens = [
      "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
      "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", 
      "Seventeen", "Eighteen", "Nineteen"
    ];
    const tens = [
      "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    if (num >=0 && num < 20) {
      return onesAndTeens[num];
    } else if (num >=20 && num < 100) {
      return tens[Math.floor(num / 10)] + 
             (num % 10 !== 0 ? " " + onesAndTeens[num % 10] : "");
    } else {
      return onesAndTeens[Math.floor(num / 100)] + " Hundred" + 
             (num % 100 !== 0 ? " " + numberToWords(num % 100) : "");
    }
  }
  console.log(numberToWords(100));