function PrintNumbers(n) {
    // let num = 0;
    // let fstNum = 1;  
  if(n === 0) {
    return;
  }  else {
    PrintNumbers(n-1);
    console.log(n);
  }

}
PrintNumbers(5);