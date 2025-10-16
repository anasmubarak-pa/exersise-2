function sumDiv3(list)
{
    let sum = 0
    for(let number of list)
    {
        if(number%3==0)
        {
            sum+=number
        }
    }
    return sum
}

console.log(sumDiv3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(sumDiv3([10, 20, 30, 40, 50]))
console.log(sumDiv3([15, 25, 35, 45, 55]))