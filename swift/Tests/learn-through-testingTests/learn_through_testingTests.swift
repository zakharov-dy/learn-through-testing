import XCTest
@testable import learn_through_testing

final class learn_through_testingTests: XCTestCase {
    func testExample() {
        XCTAssertEqual(learn_through_testing().text, "Hello, World!")
    }

    func testStringInterpolation() {
        XCTAssertEqual(learn_through_testing().stringInterpolation("World"), "Hello, World!")
    }

    func testPython3ExercisesForBeginnersGeekbrains() {
        XCTAssertEqual(learn_through_testing().python3GBTask1([1, 2, 3], 2), [1])
        XCTAssertEqual(learn_through_testing().python3GBTask1([1, 2, 3], 5), [1, 2, 3])

        //Этот вариант решения медленный
        XCTAssertEqual(learn_through_testing().python3GBTask2variant1(
            [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        ), [1, 1, 2, 3, 5, 8, 13])

        //Этот вариант решения быстрее
        XCTAssertEqual(learn_through_testing().python3GBTask2variant1(
            [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        ), [1, 1, 2, 3, 5, 8, 13])

        XCTAssertEqual(learn_through_testing().python3GBTask4(
            [[1:10, 2:20], [3:30, 4:40], [5:50, 6:60]]
        ), [1:10, 2:20, 3:30, 4:40, 5:50, 6:60])

        XCTAssertEqual(learn_through_testing().python3GBTask5(
            ["a":500, "b":5874, "c": 560,"d":400, "e":5874, "f": 20]
        ), ["d": 400, "f": 20, "a": 500])

        XCTAssertEqual(learn_through_testing().python3GBTask9(3820), "01:03:40")
        XCTAssertEqual(learn_through_testing().python3GBTask9(6666), "01:51:06")
        XCTAssertEqual(learn_through_testing().python3GBTask9(8888), "02:28:08")
        XCTAssertEqual(learn_through_testing().python3GBTask9(101), "01:41")
        XCTAssertEqual(learn_through_testing().python3GBTask9(10333331), "119:14:22:11")

        XCTAssertEqual(learn_through_testing().python3GBTask13(0), 0)
        XCTAssertEqual(learn_through_testing().python3GBTask13(2), 2 * 22 * 222)
        XCTAssertEqual(learn_through_testing().python3GBTask13(4), 4 * 44 * 444)
        XCTAssertEqual(learn_through_testing().python3GBTask13(7), 7 * 77 * 777)
        XCTAssertEqual(learn_through_testing().python3GBTask13(9), 9 * 99 * 999)

        XCTAssertEqual(learn_through_testing().python3GBTask15(
            [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        ), [21, 34, 55, 89])

        XCTAssertEqual(learn_through_testing().python3GBTask18("strings", "s"), 2)
        XCTAssertTrue(learn_through_testing().python3GBTask21([21, 33, 32]))
        XCTAssertFalse(learn_through_testing().python3GBTask21([21, 33, 33]))
        XCTAssertTrue(learn_through_testing().python3GBTask22("The function signature is a theorem and the function body is the proof") == ("the", "signature"))
    }

    func testPalindrome() {
        XCTAssertEqual(learn_through_testing().palindromeSlow("казак"), true)
        XCTAssertEqual(learn_through_testing().palindromeSlow("каак"), true)
        XCTAssertEqual(learn_through_testing().palindromeSlow("как"), true)
        XCTAssertEqual(learn_through_testing().palindromeSlow("ка"), false)

        XCTAssertEqual(learn_through_testing().palindrome("казак"), true)
        XCTAssertEqual(learn_through_testing().palindrome("каак"), true)
        XCTAssertEqual(learn_through_testing().palindrome("как"), true)
        XCTAssertEqual(learn_through_testing().palindrome("ка"), false)
    }

    func testPascal() {
        XCTAssertEqual(
            learn_through_testing().pascal(10),
            [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1], [1, 8, 28, 56, 70, 56, 28, 8, 1], [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]]
        )
    }

    static var allTests = [
        ("testExample", testExample),
        ("testStringInterpolation", testStringInterpolation),
        ("testPython3ExercisesForBeginnersGeekbrains", testPython3ExercisesForBeginnersGeekbrains),
        ("testPalindrome", testPalindrome),
        ("testPascal", testPascal),
    ]
}
