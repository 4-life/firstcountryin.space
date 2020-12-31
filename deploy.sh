#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"

  ssh-add ~/.ssh/id_rsa

  cd dist

  git init
  git remote add origin git@website.com:/var/www/firstcountryin.space
  git config --global user.email "build@travis-ci.org"
  git add .
  git commit -m 'deploy'
  git push --force origin master
else
  echo "Not deploying, since this branch isn't master."
fi
