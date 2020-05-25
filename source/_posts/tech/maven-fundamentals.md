---
title: Maven Fundamentals
date: 2020-04-18 17:00:00
tags:
- Fundation
categories:
- tech
---

# What is Maven
Build Tool
 - one artifact
 - manage dependencies
Project Management Tool
 - handles versioning / releases
 - desribes project
 - produces Javadocs / site information
Owned by Apache Software Foundation
 - open source
 - built with Maven

# Why Maven
* full featured
* implicit
* consistency
* inheritance
* transitive dependencies
* versioned

# Folder Structure
- src/main/java
- target
- pom.xml

# Phases / Lifecycle
- clean
- validate
- compile
- test
- package
- integration-test
- verify
- install
- deploy

# Scopes
- compile
- provided: not including in the final package
- runtime: dyncamic loaded, not required for compiling or testing
- test
- system
- import

# Default Goals
- clean
- compile
- test
- package
- install
- deploy