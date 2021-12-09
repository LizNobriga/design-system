# design-system
State of California Design System
A work in progress!

## Component readme files

The markdown files for each component in the directory with their source code are used to generate the documentation site. These are copied into the docs folder and the site is built with 11ty based framework rocket. The copied files cannot be gitignored via the .gitignore file or rocket will not include them in the site so they are ignored via a local .git/info/exclude file. The saved version of this is checked into src/build/exclude and copied into the local .git folder with a postinstall script