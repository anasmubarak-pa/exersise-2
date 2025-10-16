function findLongest(sentence)
{
    let largest = ['']
    for(let word of sentence.split(' '))
    {
        if(word.length>largest[0].length)
        {
            largest = [word]
        }
        else if(word.length==largest[0].length)
        {
            largest.push(word)
        }
    }
    return largest
}

console.log(findLongest("Hello world of programming"))
console.log(findLongest("The quick brown fox jumps over the lazy dog"))
console.log(findLongest("I love coding"))