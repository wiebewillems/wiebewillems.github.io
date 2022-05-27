---
title: "Practical NetMan DLL Hijacking"
last_modified_at: 2022-10-10T16:20:02-05:00
---

```
Introduction:
* Why this topic? (encounter it often)
* What is included 
  * Setup of misconfigured server
  * Sample DLL to load
  * Binary to abuse
  * Defensive measures

I'm taking this as an example to write about the topic and see how `this` text is formatted in the single page layout of `jekyll`. An example url can also be [test](https://www.nviso.eu)
```

## Creating a target server

As explained in [itm4n's **excellent** blog post](https://itm4n.github.io/windows-server-netman-dll-hijacking/) about NetMan DLL hijacking, all Windows Server operating systems from 2008R2-2019 are potential targets for this DLL hijack. During this blog post, we'll target a virtual machine running the Windows Server 2019 operating system. In case you want to do this yourself, you can get an evaluation version of this OS via [Microsoft's Evaluation Center](https://www.microsoft.com/en-us/evalcenter/download-windows-server-2019).