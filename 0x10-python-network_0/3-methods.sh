#!/bin/bash
# displaying  all HTTP methods the server will accept with curl.

curl -sI "$1" | grep "Allow" | cut -d " " -f 2-
