# NPM Notes

[Node Package Manager](https://www.npmjs.com/) (NPM) is the package manager for the Node Javascript library. It allows developers to easily share reusable code, and keep track of dependencies - the bits of code that a project requires in order to function properly. In addition to allowing developers to share their code in a package repository, it can be configured to manage many aspects of a given project, including maintaining information about dependencies needed for an application to work, development environment set up variables, scripts to run to install, execute, or test an application, and much more. It is highly configurable and supports a variety of use cases, mostly around discovering, developing, publishing, and installing Node.js Javascript-based applications.

Applications designed to be managed by npm are known as either "packages" or "modules", interchangeably.

## Modes of operation

NPM commands can operate in one of two modes:

- local mode - npm installs packages only within the current working directory, so they are only available to the project within which you are working. Packages are installed locally within the project's node_modules directory.
- global mode - npm installs packages globally, so they are available to all projects on the local machine. The exact location of the installed packages depends on the operating system being used.

By default, npm runs in local mode. To install something in global mode, add the -g or --global options to any command.

## Create a new project

To create a new npm-managed project, the following command will ask some basic questions about the project in order to create the first draft of a [[#package.json_configuration_file|package.json configuration file]]:

```bash
npm init
```

If you'd like to just accept all the defaults of a new package.json file, use this shortcut - you can always edit the file later.

```bash
npm init --y
```

## Search packages

NPM maintains an online registry of packages that have been published to it. Any developer can add a package to this registry.

Packages can be included into

See what packages related to the keyword "blerg" that are available to install :

```bash
npm search blerg

```

See what you have already installed in the current project

```bash
npm ls
```

See all global packages that have been installed

```bash
npm ls -g

```

## Install a package as a dependency

To install the latest version of a package named "blerg" locally as a dependency of the current project. The project's package.json file will be automatically updated to show this dependency.

```bash
npm install blerg
```

To install the same package package globally. This places the package code elsewhere on the computer outside of the current project folder, but still updates the current project's package.json appropriately.

```bash
npm install blerg -g

```

On some machines, you may not have permissions to save files into the directory where NPM stores global packages. In that case, use the UNIX 'sudo' command to gain permissions:

```bash
sudo npm install blerg -g
```

To install a package and have it automatically saved as a dependency in the current project's packages.json configuration file:

```bash
npm install blerg --save

```

To install a package and have it automatically saved as a development-only dependency in the current project's packages.json configuration file:

```bash
npm install blerg --save-dev
```

## Uninstall a package as a dependency

To uninstall a package, including its files and mention in the package.json settings file:

```bash
npm uninstall blerg

```

## Check for outdated dependencies

To check whether any of the locally installed dependencies of the current project are out of date, meaning that newer versions are available, run the 'outdated' command.

```bash
npm outdated
```

To check whether any of the globally installed dependencies of the current project are out of date:

```bash
npm outdated -g

```

## Update a package

To install the latest version of a package named 'blerg'

```bash
npm update blerg
```

On some machines, that may not work, so simply reinstall to update to the latest:

```bash
npm install blerg

```

## package.json configuration file

All packages published to the npm registry must contain a package.json file describing the package. The "npm init" command creates a basic version of this file that can be updated as a project progresses. This file contains a [[Introduction to JSON|JSON]] description of the project.

For example, a bare-bones package.json file might just contain a bit of metadata about the project. A few note:

- the 'name' field should not contain the words 'node' or 'js'
- the version number should use semantic versioning

```javascript
{
    "name": "blerg",
    "description": "Twas brillig and the slithy toves...",
    "version": "10.2.1"
}
```

A relatively full-featured package.json might look like the following. A few notes:

- like the name and description, keywords are matched when a user searches packages in the registry for a particular keyword
- the 'author' field represents the single main author
- the 'contributors' array contains other authors
- the 'main' field contains a reference to the main module of your package
- the 'repository' field can refer to your main centralized git repository, such as on GitHub
- the 'dependencies' field contains other packages that this package depends upon to run
- the 'dev-dependencies' field contains other packages that this package uses only for development, and not in production
- the 'scripts' field allows developers to execute bash scripts at various lifecycle points, such as when the package is being started, stopped, tested, etc. Run the command, "npm help npm-scripts" to see a full description of using scripts for specific npm lifecycle events

```javascript
{
	"name": "blerg",
	"description": "Twas brillig and the slithy toves...",
	"version": "10.2.1",
	"keywords": [
		"blergish",
		"brilligent",
		"slithing",
		"tover"
	],
	"homepage": "https://blerg.twas.brillig.com",
	"license" : "BSD-3-Clause",
	"author": "Foo Barstein <foo@barstein.com> (http://foo.barstein.com/)",
	"contributors": [
		"Bar Foostein <bar@foostein.com> (http://bar.foostein.com/)",
		"Carrol Lewis <carol@lewis.com> (http://carol.lewis.com/)"
	],
	"main" : "app.js",
	"repository" : "github:user/repo",
	"dependencies": {
		"foo" : ">=1.0.2 <2.1.2",
		"bar" : "latest",
		"boo" : "2.0.1",
		"baz" : "2.x"
	},
	"devDependencies": {
		"coffee-script": "~1.6.3"
	},
	"scripts": {
		"prepare": "coffee -o lib/ -c src/waza.coffee"
	}

}

```

## Scripts

NPM supports writing [[Bash shell and scripting|bash scripts]] that can be run from the command line to launch various actions on a project.

For example, in the package.json file example above, a script named "prepare" can be run from the command line like this. The "prepare" name of the script is one of the pre-defined names that NPM allows.

```bash
npm prepare

```

It is possible to use names that are not in NPM's predefined list of script names. In that case, you can run them using the 'run' command. For example, if a script named "foo" exists in the package.json, run it like this:

```bash
npm run foo

```
