#!/bin/bash

git status --porcelain=2 --branch 2> /dev/null | node prompt.js
