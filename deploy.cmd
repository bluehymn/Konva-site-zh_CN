rd /s /q .\public
mkdir public

del db.json
call npm run build

git add .

set DATE=%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2%%time:~6,2%
git commit -am "update %DATE%" --allow-empty
git push

cd .\public
git init
git add .
git config user.email "bluehymn@qq.com"
git config user.name "wujing"
git commit -am "Update docs"
git push https://github.com/bluehymn/cn.konvajs.git master --force
