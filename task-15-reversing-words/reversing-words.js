function reversingWords(sentence)
{
    let placeholder = ''
    for(let word of sentence.split(' '))
    {
        placeholder+=word.split('').reverse().reduce((a,b)=>a+b)+' '
    }
    return placeholder
}

console.log(reversingWords("Hello world"))
console.log(reversingWords("Programmers are awesome"))
console.log(reversingWords("Programming is fun"))