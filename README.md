# Clicky-Game
A memory game constructed with JavaScript and React

## Table of Contents
- [Overview](#overview)
- [Technology Used](#technology-used)
- [The Memory Game](#the-memory-game)
- [How It Works](#how-it-works)

## Overview
This code boot camp assignment required us to create a memory game using the JavaScript library [React.js](https://reactjs.org/).

Our task was to break up a memory game into various UI components and modules, then construct them using React.js, as well as the other coding languages we've been using before (e.g, HTML, CSS, base JavaScript).

## Technology Used
The assignment made use of a number of languages and software packages that were provided through [Node.js](https://nodejs.org/en/) and the included package manager, [NPM](https://www.npmjs.com/).

Along with Node.js and NPM, the package we were tasked with using was the [Create-React-App](https://github.com/facebookincubator/create-react-app). Designed by the developers at FaceBook, Create-React-App allows for us to set up a basic starter boilerplate that we can use to make our application.

Though not required by the assignment, the NPM package [GH-Pages](https://www.npmjs.com/package/gh-pages) was used to help us streamline the process of setting up and deploying our completed application.

## The Memory Game
The final application needed to be a memory game that kept track of the cards that the user clicked on. The player can't click a card more than once, or it will reset and start over. Each time the player clicked a card that wasn't previously clicked, their score would go up.

In order to do this, we needed to create a React application that (a) kept track of the cards clicked on and (b) would reset when a card was clicked on more than once.

## How It Works
React applications are made up of three main folders:
- Public -- contains all of the asset files needed to create the front-end portion of the application (e.g., HTML, CSS, images)
- Src -- contains the core JavaScript files needed in order to launch and run the application
- Components -- contained inside the `Src` folkder, and contains the individual JavaScript files that make up the 'parts' of the final application's interface

The actual JavaScript that is making the application (or game, in this case) run is stored in the `Src` folder, but references the various components that are broken up and stored inside the `components` folder. In turn, these components will often refer to the necessary HTML, CSS, and other asset files that are stored in the `public` folder, which gives our application its final appearance.

In addition to React helping is to piece together an interface through separate modules and components, the React system creates a virtual document object model (or virtual DOM) that is broken up by 'state' rather than by individual frames and pages. This makes it easier to load, manipulate, and change data around without the user actually clicking away from a page.

These states are how we're able to keep track of information such as (a) the current score, (b) the highest score achieved, and (c) all the previous clicks the user made in that round.

The final build of this project can be found [here](https://bking1989.github.io/Clicky-Game/).