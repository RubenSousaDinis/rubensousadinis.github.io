#!/bin/bash

git checkout master

git reset --hard HEAD~1

git merge source

cp build ../build

rm -rf *

cp ../build/* .

git add .

git commit -am "Deploy"

git push

git checkout source