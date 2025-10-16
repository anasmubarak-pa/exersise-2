function stringPalindrome(sentence)
{
    // sentence = String.
    sentence = sentence.replaceAll(/[' ',\,,!]/gi,'').toLowerCase()
    return sentence.split('').reverse().reduce((a,b)=>a+b) == sentence
}

console.log(stringPalindrome("A man, a plan, a canal, Panama!"))
console.log(stringPalindrome("Racecar"))
console.log(stringPalindrome("Hello, world!"))