@echo off
call git rebase main release
call git push origin -u release
call git checkout main