#!/bin/bash

git checkout master

git reset --hard HEAD~1

git merge source

cp -r build ../build/

rm -rf *

cp -r ../build/* .

rm -rf ../build

git add .

git commit -am "Deploy"

git push

git checkout source

echo "Deployed"