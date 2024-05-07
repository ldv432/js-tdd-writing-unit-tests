import { pointsForWord } from "../utils"
import { isPalindrome } from "../utils"

describe("pointsForWord", () => {
    it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
        const word = "tEsT"

        const points = pointsForWord(word)

        expect(points).toBe(7)
    })
})

describe("isPalindrome", () =>{
    it("determines if a word is palindrome", () => {
        const word = "racecar"

        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(true)
    })
})