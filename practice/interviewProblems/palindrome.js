function palindrome(n) {
    let temp = n;
    let rem = 0;
    let result = 0;
    while (n > 0) {
        rem = n % 10;
        n = n / 10;
        result = result * 10 + rem;
        n = parseInt(n);
    }
    if (temp === result) {
        console.log("palindrome");
    } else {
        console.log("Not a palindrome");
    }
}
palindrome(10901);