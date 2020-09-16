import XCTest

#if !canImport(ObjectiveC)
public func allTests() -> [XCTestCaseEntry] {
    return [
        testCase(learn_through_testingTests.allTests),
    ]
}
#endif
