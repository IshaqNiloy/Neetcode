from typing import List

class Solution:

    def encode(self, strs: List[str]) -> str:
        encoded_string = ''

        for item in strs:
            encoded_string += item + '€'

        return encoded_string

    def decode(self, s: str) -> List[str]:
        return s.split('€')[:-1]

if __name__ == '__main__':
    #test
    input = ["neet","code","love","you"]
    obj = Solution()
    encoded_string = obj.encode(input)
    print(obj.decode(encoded_string))