# Resume 
![GitHub package.json version](https://img.shields.io/github/package-json/v/vinayak19th/vinayak19th.github.io?color=FFD43B&style=for-the-badge)
[![Website](https://img.shields.io/website?down_color=ff3300&down_message=Offline&style=for-the-badge&up_color=339933&up_message=Online&url=https%3A%2F%2Fvinayaksharma.tech%2F)](https://vinayaksharma.tech/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge&color=339933)](http://makeapullrequest.com)
[![Made withJupyter](https://img.shields.io/badge/Made%20with-Jekyll-ff3300?style=for-the-badge&logo=Jekyll)](https://jekyllrb.com/)
[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/vinayak1998th/resume-container?label=Docker%20Image&logo=Docker&style=for-the-badge)](https://hub.docker.com/repository/docker/vinayak1998th/resume-container)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg?&style=for-the-badge&color=FFD43B)](https://lbesson.mit-license.org/)


Website hosting my resume and profile
Website link : <a href="https://vinayak19th.github.io/">link</a>

A modern simple static resume template and theme. Powered by Jekyll and GitHub pages. Host your own resume on GitHub for free!

Based on : [modern-resume-theme](https://github.com/sproogen/modern-resume-theme)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/vinayak19th/vinayak19th.github.io. You can view our full guide to contributing [here](https://github.com/vinayak19th/vinayak19th.github.io/blob/master/CONTRIBUTING.md)
This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request)

### Docker

If you have docker installed you can simply run `docker-compose up` to launch the site in a container, it will then be hosted at `http://localhost:4000`

## Installation & setup guide
This template is designed to be hosted using GitHub pages and so that's what these instructions will cover. If you plan on hosting it seperately then there might be some extra steps that we wont cover.

Before starting it might be useful to familiarise yourself with [Jekyll](https://jekyllrb.com/docs/home/), [Markdown](https://www.markdownguide.org/getting-started) and [GitHub pages](https://pages.github.com/).

### Step 1 - GitHub
Start by creating an account on [GitHub](https://github.com/join)

### Step 2 - Fork and clone
Fork this repository (helps with awareness and contributions) and clone it on your local machine:
```bash
$ git clone https://github.com/vinayak19th/vinayak19th.github.io.git
```
### Step 3 - Create your repository

Create a repository on GitHub to host your website. You can find out how to do that [here](https://pages.github.com/)

*tl;dr (Highly encourage reading the official docs though)*
``` bash
$ git clone https://github.com/username/username.github.io
```
where username should be your GitHub ID

### Step 4 - Push it
Commit and push the resume template to github
```
$ git add --all
$ git commit -m "Initial resume setup"
$ git push -u origin master
```
### Step 5 - See it
You should now be able to see the demo resume template using this theme at `[your-username].github.io`

----

## Usage

So now you will be able to see the demo template at your github URL. You can can edit the yml files and replace the demo content with your own. Hopefully it will be fairly simple to work out where all the content goes, but here is a quick overview.

### `_config.yml`
This will contain all the of the main configuration for your resume such as your name, email, social media links and about me content. It also contains all the content for your resume.  
A full example of the _config.yml can be found [here](https://github.com/vinayak19th/vinayak19th.github.io/blob/master/_config.yml)

**Main config options:**

1. Personal info:
    * Replace all the personal info in this section
    * This will automatically update the following:
        * Navbar home button
        * Home page terminal animation
        * Header on ever page
    * Ignore the darkmode toggle
2. Social Links:
    * Replace all the personal info in this section
    * This will automatically update the following:
        * All buttons in the header and homepage
    * If **githubstats** is set to any value and not commented out, **github_username** will generate all the GitHub statics on the about page
3. About Section:
    * Replace all the personal info in this section
    * This will automatically update the following:
        * The **profile image** and **favicon** needs to be stored in the images folder of your repo and will update your favicon and Profile picture on the about page
        * **about_content** only populates your about page

> DON'T MODIFY ANYHTING ELSE HERE UNLESS YOU KNOW WHAT YOU ARE DOING




### Content
The main content for you resume will all come under the content property in the `_config.yml` file. This can be quite complex and a good understanding on [YAML](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html) will be helpful here.

### `_data` Folder

The [_data](https://github.com/vinayak19th/vinayak19th.github.io/tree/master/_data) folder contains  files for all the main pages ie : [education,experience,pages,etc].

You can simply replace the data in the yml files to really quickly build up your website.

Below is a the full list of content options.
```

```

***Note:** The description or content areas (fields starting with `| #`) use markdown, this means that you have the ability to format the section in many different ways and add things such as images, code & syntax highlighting and tables. You can find a good [Markdown cheatsheet here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)*

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
