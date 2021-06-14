function palin(word) {
    let splitWord = word.split("")
    splitWord = splitWord.reverse()
    splitWord = splitWord.join("")

    if (word.toLowerCase() === splitWord.toLowerCase()) {
        return true
    }
    return false
}