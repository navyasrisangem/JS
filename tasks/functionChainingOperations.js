function Calculation(a,b){
 
    return{
        Add:function(){
            console.log(`Addition = ${a+b}`)
            return this;
        },
        Sub:function(){
            console.log(`Substraction = ${a-b}`)
            return this;
        },
        Mul:function(){
            console.log(`Multiplication = ${a*b}`)
            return this;
        },
        Div:function(){
            console.log(`Division = ${a/b}`)
            return this;
        },
       
    }
}
const num1 = 20;
const num2 = 40;

Calculation(num1, num2).Add().Sub().Mul().Div();