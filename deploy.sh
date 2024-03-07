#! /bin/bash
npm run generate
git checkout main
git add --all
git commit -m "Release"
git push
git rebase main release
git push origin -u release
git checkout main