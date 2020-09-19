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
    }

    static var allTests = [
        ("testExample", testExample),
        ("testStringInterpolation", testStringInterpolation),
        ("testPython3ExercisesForBeginnersGeekbrains", testPython3ExercisesForBeginnersGeekbrains),
    ]
}
