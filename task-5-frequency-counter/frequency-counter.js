function frequncyCounter(word1)
{
    let wordmap = new Object()
    for(let letter of word1)
    {
        wordmap[letter] = (wordmap[letter]||0)+1
    }
    return wordmap
}

console.log(frequncyCounter("hello"))
console.log(frequncyCounter("programming"))