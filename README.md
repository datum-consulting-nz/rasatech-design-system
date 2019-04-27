# rasatech-design-system
RasaTech design system implemeted in React.js

## workflow setup
`master` branch is protected for non-admin people:

* All commits to master branch will be done via `git merge` from a branch
* All commits from other branches which have not been rebased (switch to `master` and `git pull`) will be reject
* Only admins can push directly to master
* All other members will create new branch, work on the branch, rebase before making pull request to master

## recommended workflow
Follow these steps:

* `git clone` or `git pull` from `master`
* `git branch new-feature-XXX` to create your own branch called `new-feature-XXX` or what you want
* `git commit` make commit to your branch as you work on it, you are still allowed to push to your own branch
* before pull request or during your work `git checkout master` then `git pull` to get the latest update to your work
* go back to your the branch you are working on `git checkout new-feature-XXX` then `git push` to push the lastest commits you have to Github
* make a new pull request in Github
