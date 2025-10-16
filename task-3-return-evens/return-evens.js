function returnEvens(alllist)
{
    let evenlist = []
    alllist.forEach(element => {
        if(element%2==0)
        {
            evenlist.push(element)
        }
    });
    return evenlist
}

console.log(returnEvens([1, 2, 3, 4, 5, 6]))
console.log(returnEvens([7, 8, 9, 10, 11, 12]))
console.log(returnEvens([2, 4, 6, 8, 10]))