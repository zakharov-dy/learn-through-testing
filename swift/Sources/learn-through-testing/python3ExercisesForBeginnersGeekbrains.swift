//Задача 1
//Есть список. Выведите все элементы, которые меньше 5.

func task1(array: [Int], max: Int) -> [Int] {
    array.filter({ (item: Int) -> Bool in
        item < max
    })
}

//Задача 2
//Нужно вернуть список, который состоит из элементов, общих для двух списков.

// Этот вариант - проходиться по списку в списке
func task2variant1(array1: [Int], array2: [Int]) -> [Int] {
    array1.filter({ (item: Int) -> Bool in
        array2.contains(item)
    })
}

// Этот вариант - оптимальнее - через Dictionary
func task2variant2(array1: [Int], array2: [Int]) -> [Int] {
    func arrayToDictionary(array: [Int]) -> [Int: Bool] {
        var dictionary = [Int : Bool]()
        for elem in array {
            dictionary[elem] = true
        }
        return dictionary
    }

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
