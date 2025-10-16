function perfectSquare(number)
{
    if(Math.sqrt(number)%1==0)
    {
        return true
    }
    return false
}

console.log(perfectSquare(16))
console.log(perfectSquare(10))
console.log(perfectSquare(25))