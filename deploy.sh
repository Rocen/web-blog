#!/usr/bin/env sh

set -e

pnpm run docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'auto deploy'

git push -f git@github.com:Rocen/web-blog.git main:gh-pages

cd -