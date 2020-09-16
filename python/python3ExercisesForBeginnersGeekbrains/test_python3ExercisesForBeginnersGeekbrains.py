#!/usr/bin/python3
import unittest
from python3ExercisesForBeginnersGeekbrains import python3ExercisesForBeginnersGeekbrains1


class TestPython3ExercisesForBeginnersGeekbrains(unittest.TestCase):
    def test_python3ExercisesForBeginnersGeekbrains(self):
        a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
        self.assertEqual(python3ExercisesForBeginnersGeekbrains1(a), [1, 1, 2, 3])

    def test_python3ExercisesForBeginnersGeekbrains(self):
        a = [2, 3, 2, 3, 5, 8, 13, 21, 34, 55, 89]
        self.assertEqual(python3ExercisesForBeginnersGeekbrains1(a), [2, 3, 2, 3])

if __name__ == '__main__':
    unittest.main()
