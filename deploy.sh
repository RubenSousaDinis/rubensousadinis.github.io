#!/bin/bash

git checkout master

git merge source

cp -r build ../build/

rm -rf *

cp ../build/* .

git add .

git commit -am "Deploy"

git push

git checkout source