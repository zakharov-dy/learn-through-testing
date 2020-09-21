import Foundation

// TODO: вернуться, чтобы убрать знаки и пробелы
func palindromeSlowSourse(string: String) -> Bool {
    let str = string.lowercased()
    let arrOfCharacters = Array(str)
    let arrOfStrings = arrOfCharacters.map { String($0) }
    return arrOfStrings.reversed().joined(separator:"") == str
}

// TODO: вернуться, чтобы убрать знаки и пробелы
func palindromeSourse(string: String) -> Bool {
    let str = string.lowercased()
    let arrOfCharacters = Array(str)
    let size = arrOfCharacters.count
    for item in 0...size / 2 {
        if(arrOfCharacters[item] != arrOfCharacters[size - item - 1]){
            return false
        }
    }
    
    return true
}

