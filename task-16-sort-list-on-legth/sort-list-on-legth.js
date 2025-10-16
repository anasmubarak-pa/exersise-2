function sortList(wordlist)
{
    let indexlist = {},returnarray = []
    for(let i=0;i<wordlist.length;i++)
    {
        if((indexlist[wordlist[i].length]))
        {
            indexlist[wordlist[i].length].push(i)
        }
        else
        {
            indexlist[wordlist[i].length] = [i]
        }
    }
    let valuelist = Object.values(indexlist)
    for(let index in valuelist)
    {
        valuelist[index].forEach(element => {
            returnarray.push(wordlist[element])
        });
    }
    return returnarray
}

console.log(sortList(["open", "source", "programming", "is", "fun"]))
console.log(sortList(["hello", "world"]))
console.log(sortList(["cat", "dog", "elephant", "tiger"]))