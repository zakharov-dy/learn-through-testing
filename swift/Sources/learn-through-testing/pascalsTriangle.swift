import Foundation

func pascalsTriangle(_ n: Int) -> [[Int]] {
    var result = [[1]]

    for i in 1..<n {
        var intermediate = [Int]()
        for j in 0...i {
            if j == 0 || j == (i) {
                intermediate.append(1)
            } else {
                let preventIntermediate = result[i-1]
                intermediate.append(preventIntermediate[j-1] + preventIntermediate[j])
            }
        }
        result.append(intermediate)
    }

    return result
}

