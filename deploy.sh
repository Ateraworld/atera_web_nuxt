#! /bin/bash
git rebase main release
git push origin -u release
git checkout main