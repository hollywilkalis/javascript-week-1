# Super Galactic Age Calculator

#### This application will determine a user’s age based on a planet’s solar years. Project date: January 5, 2018

#### By Holly Wilkalis

## Description

A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. This application will determine a user’s age based on a planet’s solar years.


## Setup/Installation Requirements

* Open your terminal (or whatever tool you use to access the command line)
* Navigate to the location where you wish to save the project files.
* Run this command to clone the files: $ git clone https://github.com/hollywilkalis/javascript-week-1
* Run this command to navigate into the project directory: $ cd javascript-week-1
* To view a live version of the site, visit http://hollywilkalis.github.io/javascript-week-1


## Planning

1. Specs
  For testing will use a beforeEach function
  * Calculate age on earth based on input birthdate.
    Input: 01/26/1974
    Output: 44 years
  * Convert age from years to seconds.
    Input: 44
    Output: 1387584000
  * Return the age of a human in Mercury years based on age entered.
    Input: 44 years
    Output: 10.559999999999999 years
  * Return the age of a human in Venus years based on age entered.
    Input: 44 years
    Output: 27.28 years
  * Return the age of a human in Mars years based on age entered.
    Input: 44 years
    Output: 82.72 years
  * Return the age of a human in Jupiter years based on age entered.
    Input: 44 years
    Output: 521.8399999999999 years

2. Project organization
  * Divide script into user interface (controls user input form) and back end (performs the various age calculations)
  * Use Person object constructor and prototypes to calculate age on each planet.

3. UX/UI
  * Use bootstrap & CSS for minimal styling of single user interface page (not planning to use SASS). Ages will be hidden until form submission.

4. Future features under development
  * Determine how many years a user has left to live on each planet based on valid life expectancy data.
  * Provide more accurate age calculations that account for variations like leap years, etc.

## Known Bugs

The planetary age calculations do not take into account leap years.

## Support and contact details

Are you also having problems with Node? I feel your pain. Let's talk at holly.wilkalis@gmail.com.

## Technologies Used

This project uses:
* HTML, Bootstrap and CSS
* Node and bower
* Jasmine and Karma are used for testing
* A gulp-based asset pipeline with a development server

### License

*MIT license*

Copyright (c) 2018 **Holly Wilkalis**
