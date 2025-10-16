function findLongest(worldlist)
{
    let largest = ''
    for(let word of worldlist)
    {
        if(word.length>largest.length)
        {
            largest = word
        }
    }
    return largest
}

console.log(findLongest(["cat", "dog", "elephant", "tiger"]))
console.log(findLongest(["apple", "banana", "orange"]))
console.log(findLongest(["programming", "is", "fun"]))