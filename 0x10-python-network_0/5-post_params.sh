#!/bin/bash
# send a POST requesting to the passed URL using curl,display the body of the responses

curl -s -X POST -d "email=test@gmail.com&subject=I will always be here for PLD" "$1"
