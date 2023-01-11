#!/usr/bin/python3
class Student:
    """
    class student
    """
    def __init__(self, first_name, last_name, age):
        """
        init method
        """
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self, attrs=None):
        """
        to json
        """
        if attrs is None:
            return dict(
                (key, value)
                for (key, value) in self.__dict__.items())
        else:
            return dict(
                (key, value)
                for (key, value) in self.__dict__.items()
                if key in attrs)
