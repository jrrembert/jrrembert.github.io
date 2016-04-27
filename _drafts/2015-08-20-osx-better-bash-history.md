---
title: Better shell history search for much fun and great profit
layout: posts
tags: [tag, tag, tag]

header_image: /img/post_2.jpg
---

The bash shell has a number of very useful features to save time and energy - by far the two biggest obstacles in not getting your shit done. One of it's most useful features is the ability to quickly repeat a previously-typed command by scrolling through your history with the up and down arrows. 

[iPython](http://ipython.org/) takes this concept a bit further by scrolling through your history based on what you've typed. For example, assume bash's default behavior above. If you have a history that looks like this:

{% highlight bash linenos %}

$ mkdir ~/Projects
$ cd ~/Projects
$ echo "I like pancakes" > pancakes.txt
$ mkdir ~/Projects/waffles
$ echo "I don't like waffles" > ~/Projects/waffles/waffles.txt

{% endhighlight %}

Pressing up twice will result in lines 5 and 4 being shown.

In iPython however, if you type ```mkdir``` first and then press up twice, lines 4 and 1 will be returned.

Pretty damn useful.

You can configure your bash shell to do this as well with a simple tweak. The exact process will differ based on your OS.

### On OS X (Yosemite)

1. Open your ```.bash-profile``` or ```.inputrc``` file. Create one if needed.
2. Insert the following lines:

```
bind '"\e[A"':" history-search-backward"
bind '"\e[B"':" history-search-forward"
```

3. Save and source the file changed.

### On another *nix distro (can't confirm this works for all)

1. Open your ```.bash-profile``` or ```.inputrc``` file. Create one if needed.
2. Insert the following lines:

```
"\e[A": history-search-backward
"\e[B": history-search-forward
```

3. Save and source the file changed