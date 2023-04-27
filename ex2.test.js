let countVowelsAndConsonants = require("./ex2.js");


test('Count Vowels and Consonants', () => {
    let result = countVowelsAndConsonants("abcdef");
    expect(result.vowels).toBe(2)
    expect(result.consonants).toBe(4);

});

test('Ignore non alphabetical characters', () => {
    let result = countVowelsAndConsonants(" hello world ");
    expect(result.vowels).toBe(3)
    expect(result.consonants).toBe(7);

    result = countVowelsAndConsonants("");
    expect(result.vowels).toBe(0)
    expect(result.consonants).toBe(0);

})