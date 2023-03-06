Building blocks
===============

The Shoelace grid system provides 3 basic 'building block' mixins:

  .container() - Defines the outer content wrapper for your page.
  .row() - Defines a wrapper around a set of 'columns'.
  .col() - Defines an individual 'column'.

You can create a fully formed grid for your project using just these 3 mixins and nothing else, as they each accept a number of parameters to specify how they behave.

However, Shoelace also provides a set of more advanced 'scaffolding' mixins. These are additional, grid-system helper mixins intended to make the process of designing and imlementing a project-specific grid much simpler, with the need to write far fewer lines of LESS.


Scaffolding
============

The scaffolding file sits between the basic grid mixins defined in mixins.less (the building blocks outlined above) and your project-specific LESS files (layout.less plus any others you may add).

The default scaffolding file contains a set of customized .col() mixins combined with media queries for each of your project's main responsive breakpoints. It gives you a set of components which you can use in various combinations to build complex page structures which automatically resize and rearrange themselves in relation to one another at different viewport sizes.

The advantage of this over a completely generic grid system is it gives you much more granular control over how your page elements will interact with one another at different screen sizes, but with only minimal LESS.

The scaffolding mixins shipped with Shoelace can be used as-is or customised in whatever way you want for your own project. The mixins provided allow for a nested grid structure up to 2 levels deep. You can of course create more levels of nesting if you need it, by writing your own additional nested mixins, although the logic could start to get quite complex and confusing!!

It will repay you well to spend some time at the start of a new project working out how you want your scaffolding mixins to work, and then sticking to them. The scaffolding acts as the blueprint for your page layouts.

Demo
=====

The demo.html and layout.less files included in this repository gives a simple example of how the buiding blocks and scaffolding can be used to create a fully responsive grid system using only a handful of lines of LESS.

Usage
======

The basic rules to remember are:

1. Always make sure your content is wrapped in an outer container element that uses the .container() mixin. You can have multiple containers on a page, but containers should not be nested.
2. To 'float' blocks of content side by side, first wrap them in a wrapper element using the .row() mixin.
3. Then add a .col() mixin to each of the 'floated' blocks inside the wrapper element.
4. You can use the basic .col() mixin defined in mixins.less, but preferably use the scaffolding mixins for more advanced functionality and fewer lines of LESS.
5. If using nested scaffolding mixins, make sure they're referenced in the same nested LESS code block in the same file, otherwise they won't compile correctly and the mixins won't work properly.

Requirements
=============

- LESS (you'll need a LESS compiler of some sort to use it)

Full browser support:

- IE9+
- Chrome 19+
- Firefox 4+
- Safari 6+
- Opera 15+

Partial browser support:

- IE7 & 8

In IE7 and 8 the grid system will still work pretty much as intended - it won't 'break', but it won't be 'pixel perfect' - column and gutter widths won't add up to exactly 100% or line up perfectly all of the time. Unless the success of your design relies on a very strict visual grid, this shouldn't be a huge issue.

Javascript
===========

script.js
----------
In order to run presentational scripts in sync with your CSS media queries, scripts.js includes a set of variables mirroring the grid helpers in variables.less and a function you can use with your own scripts to determine the current viewport width. 

modernizr.js
-------------
The only bits of Modernizr you actually need for Shoelace to work in IE7 and 8 are:
- mq() media query testing (to test whether or not CSS media queries are supported) 
(The demo included with Shoelace uses HTML5 so also requires the html5shiv to enable support for HTML5 elements.)

respond.js
-----------
If the browser doesn't support CSS media queries, respond.js enables support.


Development
============
local.less is included for development purposes only. Remove this in production environment.