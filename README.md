# SassyLists [![Gem Version](https://badge.fury.io/rb/SassyLists.png)](http://badge.fury.io/rb/SassyLists)

Here is a [Compass Extension](http://compass-style.org/) providing you all functions you need to manipulate your [Sass](http://sass-lang.com/) lists. See complete documentation [here](http://sassylists.com/).

## How to use it

### Install with Gem 

1. `gem install SassyLists`
2. Add `require 'SassyLists'` to your `config.rb`
3. Import it in your stylesheets with `@import 'SassyLists'`

### Install with [Bower](http://bower.io/ "BOWER: A package manager for the web")
1. `bower install SassyLists --save-dev`
2. Import the partial in your Sass files

## What's in there? 

* `sl-chunk()`: returns whether list contains $value
* `sl-contain()`: returns whether the list contains the value
* `sl-count-values()`: counts the number of occurrences of each value of list
* `sl-debug()`: returns list as a string
* `sl-every()`: returns whether all items from list pass test from given function
* `sl-explode()`: explodes a string into a list using a string as a delimiter
* `sl-first()`: returns first item in list
* `sl-flatten()`: turns multidimensional list into a one-level list
* `sl-insert-nth()`: inserts value at index
* `sl-intersection()`: returns a list of shared values across all given lists
* `sl-is-symmetrical()`: checks if list is symmetrical
* `sl-last()`: returns last item in list
* `sl-last-index()`: returns last index of value in list
* `sl-loop()`: shifts indexes in list
* `sl-prepend()`: prepends value to list
* `sl-purge()`: removes all `false` and `null` values from list
* `sl-random-value()`: returns random value from list
* `sl-remove()`: removes value in list
* `sl-remove-duplicates()`: removes duplicate values from list
* `sl-remove-nth()`: removes value at index
* `sl-replace()`: replaces value in list
* `sl-replace-nth()`: replaces value at index
* `sl-reverse()`: reverses list
* `sl-shuffle()`: shuffles list
* `sl-slice()`: slices list
* `sl-sort()`: sorts list
* `sl-some()`: returns whether some items from list pass test from given function
* `sl-sum()`: sums all unitless values in list
* `sl-tail()`: returns anything but the first element in list
* `sl-to-map()`: casts list as map using indexes as keys
* `sl-to-string()`: casts list as string (JS `.join()`)
* `sl-union()`: returns a list of values from given lists minus duplicates
* `sl-walk()`: applies a function to every item of list

If you feel like an explorer, you can have a look at the code [here](https://github.com/Team-Sass/SassyLists/tree/master/stylesheets).

## Requirements

* Sass ~> 3.3.0
* Compass ~> 1.0.0

If you are looking for the last version of SassyLists running on Sass 3.2, install `0.4.9`.

Some functions depend on other functions. If you include functions individually, make sure to check for these dependencies in their respective docs.

## Also read

* [Official site](http://sassylists.com)
* [Advanced Sass list functions](http://hugogiraudel.com/2013/08/08/advanced-sass-list-functions/)
* [Advanced Sass list functions again](http://hugogiraudel.com/2013/10/09/advanced-sass-list-functions-again/)
* [How I made a Sass debug function](http://hugogiraudel.com/2013/10/21/sass-debug/)

## Credits

A million thanks to [Vinay Raghu](http://viii.in/) for making this Compass extension out of my original work and to [Team-Sass](https://github.com/Team-Sass) for their [Compass Extension template](https://github.com/Team-Sass/Compass-Extension-Template).
