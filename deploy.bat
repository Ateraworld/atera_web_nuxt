@echo off
call bun run generate
call git checkout main
call git add --all
call git commit -m "Release"
call git push
call git rebase main release
call git push origin -u release
call git checkout main