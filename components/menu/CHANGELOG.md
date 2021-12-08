# Navigation components >> Site navigation >> Changelog || 30

`ds-dropdown-menu`

# 1.0.15
* Linted and formatted code per root eslint/prettier settings.
* Removed local eslint/prettier configuration, in favor of repo-wide tooling.
* Moved husky configuration to work across the entire repo, instead of just this component.

# 1.0.14
* Moved @web/test-runner-puppeteer from optionalDependencies to devDependencies.

# 1.0.13
* Removed jump effect when opening dropdown menu in mobile by adding top and bottom padding to the :first and :last child. Polished focus outline aesthetics for all menu links. Added left and right 16px padding to the entire menu container to make it consistent with all other components. 

# 1.0.12
* Modified menu items to fit with or without a drop-down menu. It's now possible to add simple static links in the menu without a dropdown arrow.
* Aligned all menu items to the left, per latest design direction.

# 1.0.11
* Add white background to the navigation container block, so the content under it would not be seen through when scrolled (in case when the sticky header is used)

# 1.0.10
* Added right and left padding to the search container in mobile

# 1.0.9
* Fixed menu trigger button aria-expanded toggle on JS file. Moved hamburger menu styles to branding component because menu button is part of branding component semantically. Also, added border bottom in mobile requested by our designer, as well as removed margin left from .expanded-menu selector 
