#!/usr/bin/python3
import unittest
from stringInterpolation import sayHello

class TestStringInterpolationTest(unittest.TestCase):
    def test_stringInterpolation(self):
        self.assertEqual(sayHello("World"), "Hello, World")

if __name__ == '__main__':
    unittest.main()
