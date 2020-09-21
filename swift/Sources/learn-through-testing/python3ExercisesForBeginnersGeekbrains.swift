//Задача 1
//Есть список. Выведите все элементы, которые меньше 5.

func task1(array: [Int], max: Int) -> [Int] {
    array.filter({ (item: Int) -> Bool in
        item < max
    })
}

// Задача 2
// Нужно вернуть список, который состоит из элементов, общих для двух списков.
// Этот вариант - проходиться по списку в списке
func task2variant1(array1: [Int], array2: [Int]) -> [Int] {
    array1.filter({ (item: Int) -> Bool in
        array2.contains(item)
    })
}

func arrayToDictionary(array: [Int]) -> [Int: Bool] {
    var dictionary = [Int : Bool]()
    for elem in array {
        dictionary[elem] = true
    }
    return dictionary
}
// Задача 2
// Нужно вернуть список, который состоит из элементов, общих для двух списков.
// Этот вариант - оптимальнее - через Dictionary
func task2variant2(array1: [Int], array2: [Int]) -> [Int] {
    let dictionary2 = arrayToDictionary(array: array2)

    var arr = [Int]()

    for value in array1 {
        if dictionary2[value] != nil {
            arr.append(value)
        }
    }

    return arr
}

//Задача 4
//Напишите программу для слияния нескольких словарей в один.
func task4(array: [[Int: Int]]) -> [Int: Int] {
    array.reduce([Int: Int](), {(res:[Int: Int], item: [Int: Int]) -> [Int: Int] in
        var result = res;
        for (key, value) in item {
            result[key] = value;
        }
        return result
    })
}

//Задача 5
//Найдите три ключа с самыми высокими значениями в словаре
func task5(dictionary: [String: Int]) -> [String: Int] {
    let dictionarySortedArr = dictionary.sorted { $0.1 < $1.1 }
    var returnedDictionary = [String: Int]()
    
    for item in 0..<3 {
        if(dictionarySortedArr[item] != nil){
            returnedDictionary[dictionarySortedArr[item].key] = dictionarySortedArr[item].value
        }
    }
    
    return returnedDictionary
}

// Задача 9
// Сделайте так, чтобы число секунд отображалось в виде дни:часы:минуты:секунды.

func task9(_ secs: Int) -> String {
    var result = ""
    var remainder = secs
    let minutesInSec = 60
    let hoursInSec = minutesInSec * 60
    let daysInSec = hoursInSec * 24
    var isStringDefined = false

    func formatIfNeeded(_ number: Int) -> String {
        number > 9 ? String(number) : "0" + String(number)
    }
    
    func incrementReminder(_ deleter: Int) {
        if(remainder >= deleter){
            let incrementResult = remainder / deleter
            let incrementResultString = formatIfNeeded(incrementResult)
            result += "\(incrementResultString):"
            remainder = secs % deleter
            isStringDefined = true
        } else if(isStringDefined) {
            result += "00:"
        }
    }

    incrementReminder(daysInSec)
    incrementReminder(hoursInSec)
    incrementReminder(minutesInSec)
    
    result += String(formatIfNeeded(remainder))

    return result
}

// Задача 13  
// При заданном целом числе n посчитайте n + nn + nnn.
func task13(_ number: Int) -> Int {
    func generateGreaterNumber(_ number: Int, _ multiplier: Int) -> Int {
        let stringNumber = String(number)
        var result = stringNumber
        var multi = multiplier
        while multi > 1 {
            result+=stringNumber
            multi-=1
        }
        
        return Int(result)!
    }
    let duo = generateGreaterNumber(number, 2)
    let trio = generateGreaterNumber(number, 3)
    return number * duo * trio
}

// Задача 15
// Напишите программу, которая принимает два списка и выводит все элементы первого, которых нет во втором.
func task15(array1: [Int], array2: [Int]) -> [Int] {
    let dictionary2 = arrayToDictionary(array: array2)

    var arr = [Int]()

    for value in array1 {
        if dictionary2[value] == nil {
            arr.append(value)
        }
    }

    return arr
}

// Задача 17
// Сложите цифры целого числа.
func task17(_ num: Int) -> Int {
    let str = "\(num)"
    let arrOfCharacters = Array(str)
    let arrOfStrings = arrOfCharacters.map { String($0) }
    let arrOfNumbers = arrOfStrings.map { Int($0) }
    
    return arrOfNumbers.reduce(0, {$0 + $1!})
}

// Задача 18
// Посчитайте, сколько раз символ встречается в строке.
func task18(_ str: String, _ symbol: Character) -> Int {
    let arrOfCharacters = Array(str)
    
    return arrOfCharacters.reduce(0, {$1 == symbol ? $0+1 : $0})
}

// Задача 21
// Нужно проверить, все ли числа в последовательности уникальны.
func task21(_ arr: [Int]) -> Bool {
    var dictionary = [Int: Bool]()
    
    for item in 0..<arr.count {
        let value = arr[item]
        if(dictionary[value] != nil){
            return false
        } else {
            dictionary[value] = true
        }
    }
    
    return true
}

// Задача 22
// Напишите программу, которая принимает текст и выводит два слова: наиболее часто встречающееся и самое длинное.
// TODO: вернуться, чтобы убрать знаки.
func task22(_ text: String) -> (String, String) {
    var mostFrequent = ""
    var longest = ""

    if(text.count == 0){
        return (mostFrequent, longest)
    }

    let lowercaseText = text.lowercased()
    let arrayOfWords = lowercaseText.components(separatedBy: [",", " ", "!",".","?"]).filter({!$0.isEmpty})
    var dictionary = [String: Int]()
    var mostFrequentCount = 1;
    mostFrequent = arrayOfWords[0]
    longest = arrayOfWords[0]
    dictionary[arrayOfWords[0]] = 1

    for i in 1..<arrayOfWords.count {
        let item = arrayOfWords[i]

        if(item.count > longest.count){
            longest = item;
        }

        if(dictionary[item] != nil){
            dictionary[item]! += 1
            if(dictionary[item]! > mostFrequentCount){
                mostFrequentCount = dictionary[item]!
                mostFrequent = item
            }
        } else {
            dictionary[item] = 1
        }
    }

    return (mostFrequent, longest)
}