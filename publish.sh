git add .
git commit -m "GMT: $(date -u)"
git push --force origin master
git push --force origin master:gh-pages
