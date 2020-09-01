yarn run docs:build

cd docs

git init
git add --all
git commit -m "🚀deploy"
git remote add origin git@github.com:Hb-zzZ/gen-vue-form-docs.git
git branch gh-pages
git checkout gh-pages

git push -f origin gh-pages

cd ../

umount docs

rm -rf docs