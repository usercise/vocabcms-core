# Introduction

Let us introduce VocabCMS, VocabCMS is a framework for building headless CMS sites.
VocabCMS consists of the following parts:

* A JSON API for communicating between a backend server and a Single Page App [SPA]
* A core set of libraries for mapping the JSON API into a React App with the following parts:
  * Paths
  * Screens/Pages (we'll use Screens as the terminology from here on)
  * Templates
  * Template slots
  * Components
* A plugin manager, to allow extension of the site without modifying the core libraries
* A simple node.js and express page renderer using the same path resolution code as the React App
* A backend publishing workflow and data store talking the JSON API
* A Sample site created using the framework

This package is only the core library described above.
