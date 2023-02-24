# Front end observation test exercise v1

- This is a game that makes the user click a series buttons in order between 1-25
- If the next button that is click is not the next button in order, the buttons on that side will shuffle
- The user will win once they have clicked all 25 buttons in order
- The game will display the time the user took to finish and there score based of the number of clicks

Author: Charles Knight, Justin Williams

# Description

The nature tour company, Animal Spotters, is hiring tour guides again. They want
applicants to take an observational test that will eventually be used to pre-rank
applicants prior to any interviews. The previous proof of concept (POC) you built for
them was a great success and they want to iterate on it by making it slightly more
challenging and using a modern web framework. Applicants will see a screen divided
into two sections filled with numbers. Their job is to click the numbers in order from 1 to
the max.

# Prerequistes

Node.js version 18.14.0^

# Usage

Run `npm install` in root folder to install dependencies.
Run `npm start` and navigate to localhost:3000 to view application.

# Requirements

1. The page should display two separate sections with a grid of boxes containing
   the numbers 1-25: the left one showing odd numbers and the right one showing
   even numbers.
2. Numbers should be displayed in a randomized order in each section.
3. When an applicant clicks a number, if it is the next number in order, then its
   container background turns a different color for the remainder of the test. If it is
   the wrong number, the section should have its numbers shuffled (ex. A wrong
   guess in the odd section should cause the numbers in the odd section to be
   shuffled).
4. Each grid should display the total amount of number clicks for its section.
5. Once all the numbers have been clicked in order, a win message should be
   displayed with the applicant's test score: the percentage of correct number clicks
   and the applicant’s total time taken.
6. Include a button to start a new game at any time.
7. Application should be broken down into multiple, logical components, stored in
   separate files.
8. Component state should be updated immutably.

# Stretch Requirements

1. Create a modal component that shows the success message when a user
   finishes.
2. Numbers will now be in the Fibonacci sequence, starting with 1,2, and must be
   clicked in that order. (1,2,3,5,8,13…).
