function commonPrefix(wordlist)
{
    let prefix = ''
    for(let i=0;i<wordlist[0].length;i++)
    {
        prefix+=wordlist[0][i]
        for(let j=1;j<wordlist.length;j++)
        {
            if(!(prefix[i]==wordlist[j][i]))
            {
                return prefix.slice(0,-1)
            }
        }
    }
}

console.log(commonPrefix(["flower", "flow", "flight"]))
console.log(commonPrefix(["dog", "racecar", "car"]))
console.log(commonPrefix(["apple", "app", "application"]))