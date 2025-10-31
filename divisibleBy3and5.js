function Divisiblethreeandfive(num)
{
    if (num%3==0 && num % 5 == 0)
    {
        console.log("this number is divisible by 3 and 5 =>",num)
    }
    else{
        console.log("not divide 3 and 5 =>",num);
    }
}
Divisiblethreeandfive(5)