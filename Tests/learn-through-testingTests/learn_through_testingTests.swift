import XCTest
@testable import learn_through_testing

final class learn_through_testingTests: XCTestCase {
    func testExample() {
        XCTAssertEqual(learn_through_testing().text, "Hello, World!")
    }

    func testGreeter() {
        XCTAssertEqual(learn_through_testing().stringInterpolation("World"), "Hello, World!")
    }


    static var allTests = [
        ("testExample", testExample),
        ("testGreeter", testGreeter),
    ]
}
