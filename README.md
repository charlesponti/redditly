[ ![Codeship Status for theponti/redditly](https://codeship.com/projects/a2518c30-7116-0132-3104-62f5102d8589/status?branch=master)](https://codeship.com/projects/54568)

# Redditly

An AngularJS Reddit reader

## Dependencies
* NodeJS
* NPM
* Bower

## Features

### Build
* Gulp
* Browserify

### Styles
* **SASS**
* **Prefix-Free**
* **Bootstrap**

### Scripts
* JSHint
* jQuery

### Testing
* Karma
* Jasmine

### Other
* Modernizer
* HTML Minification

## Usage
1. Clone repo
2. Run `npm install && bower install`
3. Run `npm run start`

## Tasks

### `npm run start`
This task builds the scripts, styles, and html, and it will also begin the development server at port 4000.

### `npm run build`
This task builds the scripts, styles, and html.

### `npm run build-prod`
This task will build the production, minified versions of the scripts and styles.

### `npm test`
This task will begin `Karma`.
