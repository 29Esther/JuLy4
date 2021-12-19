---
title: Use Hexo Build Bolg in Github and Connect to your website
date: 2017-07-12 22:33:56
tags:
- Github
- Hexo
categories:
- tech
- writing
---
**Recommend read the whole article throught before taking actions**
# What do you need?
### Required
* An account in [Github](https://github.com)
* Git in your computer
* Node.js
### Optional
* Your own personalized domain, like: LycheeX.com 
* An account in [Cloudflare](https://www.cloudflare.com/) for certification (**https** looks really cool!)
* [Travis-ci](https://travis-ci.org/) for continuious integration

# Step by Step Guidance
## Follow the step in [Hexo Doc](https://hexo.io/docs/) to install Git, Node.js and Hexo
The doc gives a short and clear introduction in Hexo as well as detailed guidance of installation of Node.js and Git Tool.

### Special for Mac User:
Installing Node.js® and NPM is pretty straightforward using Homebrew. Homebrew handles downloading, unpacking and installing Node and NPM on your system. The whole process (after you have Homebrew installed) should only take you a few minutes.

**Installation Steps:**
Open the Terminal app and type 

```
$ brew update 
// This updates Homebrew with a list of the latest version of Node

$ brew install node 
// Tell Homebrew to install Node
```

**Test:**
```
$ node -v 
// This should print the version number of node, ike v0.10.31

$ npm -v 
// This should print the version number of npm like this 1.4.27
```

## Genernate Hexo Blog
```
$ hexo init [folder] 
// Initializes a website. If no folder is provided, Hexo will set up the website in the current directory
$ hexo generate 
// Generates static files
$ hexo server 
// Starts a local server. By default, this is at http://localhost:4000/
Open http://localhost:4000 and enjoy
```

More command information, you can refet to [Hexo Command Doc](https://hexo.io/docs/commands.html)

## Choose a theme
Lots of developers donated their theme to Hexo, which can save us plenty of time for designing and developing. It's nice and easy to use. Of course, you can develop your own theme if you want to. I am not sure about the detailed information, but it can be found in the website.

As for me, I chose the theme [Cactus Light](https://github.com/gabithume/cactus-light). Normally, the theme repository on github provides you the steps of add them to your hexo project. 

Genernally, following things:
1. In the root directory of your project:

`$ git clone <theme-git-location> themes/<theme-name> `

2. Change the theme property in the _config.yml file under your project
```
# theme: landscape
theme: cactus-light
```

3. Enter 'theme/<theme-name>' folder and change _config.yml file to configure your information to the template

4. Run: `$ hexo generate` and `$ hexo server`

## Create a new article

`hexo new [layout] <title>`
This command is used to create a new article. If no layout is provided, Hexo will use the default_layout from _config.yml. If the title contains spaces, surround it with quotation marks.
Then a new .md file will be created in '<your-project>/source/_posts' folder.
Use any tool you like to edit it. After that, use the following steps:
```
hexo clean
hexo generate
hexo deploy
hexo server
```
Now, you are able to see your new blog in [http://localhost:4000](http://localhost:4000).

## Put it online using Github
You need to have a github account. Registering one is as easy as creating an account in Weibo.

Then, you need to create a repository using the name '<your-user-name>.github.io'.

Now, let's get back to your local environment from the web world. 

Edit '_config.yml' file in the root directory of your project.
Change the deploy node like this:
```
deploy:
     type: git
     repo: https://github.com/<your-user-name>/<your-user-name>.github.io.git
     branch: master
```

Now, it's time to deploy to the website.

Hold on, type following code when you are ready.
```
npm install hexo-deployer-git --save
// This is install a package for deploying, you only need to type this once.
hexo deploy
```

Then, open the http://<your-user-name>.github.io to enjoy your website. It should look the same with [http://localhost:4000](http://localhost:4000).

## Connect to your own domain.
Go to the setting page in the respository. 
![Github Setting](../../../../../pics/tech/bbigactyw/github-setting.png)
Enter your domain in the input and click save.
![Add a Domain](../../../../../pics/tech/bbigactyw/add-a-domain.png)
After that, you can visit your website and see the blog.

## Connect to github 
Now all the work is done. You can visit your website from anywhere, add a new article or editing an existing one.
However, now you can only edit it in your computer. If you want to put the sources online and edit it anywhere, github is a good help.

Create another repository in Github, give it any name you like. Here, I will use 'you-like' as an Example.

In the root directory of your project， type：
```
$ git init
// this will change your project to a git one.
$ git remote add origin <your-repositoy-location>
// <your-repositoy-location> should be git@github.com:<your-username>/<your-repository-name>.git
$ git add *
$ git commit -m "First Commit"
$ git push
```

If you meet some authentication problems during the process, you can check that if you have connected your coputer to Github. Follow the steps in [Connecting to GitHub with SSH](https://help.github.com/articles/connecting-to-github-with-ssh/) to solve the problems.

Now you have pushed your original resource to the website. Which means you no longer need to worry about the loss of your project. Every time you change something, just commit them to the Github.

Check the project in github, the folder of the theme that you added may be empty. It is skipped by git because it contains another git log. So the easiest solution is to delete the .git folder and then commit again.

## Using Travis-ci to deploy the project on commit
CI is short for Continuous Integration. [Travis-ci](https://travis-ci.org/) is one of the most popular website for CI. You could login with your github account and then it will get all your reporsitory.
![travis-ci](../../../../../pics/tech/bbigactyw/travis-ci.png)
Switch on the repository of your project and enter the setting of the repository in travis-ci.
![travid-ci-setting](../../../../../pics/tech/bbigactyw/travis-ci-setting.png)
Switch on the 'Build only if .travis.yml is present'.

Now, let's get back to the repositroy in your computer.
Add a new file '.travis.yml' in the root direction. This is for configuration of travis-ci.
```
language: node_js
node_js: stable
install:
- npm install
before_install:
- git submodule update --init --remote --recursive
script:
- hexo generate
after_script:
- git config --global user.email "<your-user-email-in-github>"
- git config --global user.name "<your-user-name-in-github>"
- sed -i'' "/^ *repo/s~github\.com~${GH_TOKEN}@github.com~" _config.yml
- hexo deploy
// The following is required only when you need to use your own domain
- cd /home/travis/build/<your-user-name-in-github>/<your-hexo-repository-name-in-github>/.deploy_git/
- echo "<your-domain>.com" > CNAME
- git add CNAME
- git commit -m "Add CNAME"
- git push https://${GH_TOKEN}@github.com/<your-user-name-in-github>/<your-user-name-in-github>.github.io.git
```


# Reference:
1. [Add Free Certification In Blog Step By Step](http://troyyang.com/2017/05/21/Add_Free_Certification_In_Blog_Step_By_Step/)
2. [Hexo Command Doc](https://hexo.io/docs/commands.html)