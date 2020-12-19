# Balls :basketball:f War 
[![GitHub License](https://img.shields.io/github/license/liam-mack/Balls-of-War)](https://opensource.org/licenses/MIT)

## Description
A MERN stack two player online card game with a NBA twist. Using Create-React-App, our app features four teams (Lakers, Rockets, Heat and Raptors) with 18 players each from the 2020 season. Users have the option of choosing one of the eight stats(height, weight, field goal percentage, assist, rebounds, turnovers and personal fouls) to pit against the competition. The website is equipped with user functionality to create accounts, remember individual games and record match histories. Future deployment in the works are as follows:
* Incorporating websockets
* Create your own player and increase your stats out of game with fitbit
* Add all teams and other stats
* Various game modes such as draft, regular and playoff seasons
* Add game balances and penalties
* Introduce coach, home/away, shotclock and fatigue variables
* Port to React-Native and add offline functionality
* Many more!

### Business Context
Due to the ongoing pandemic, the NBA season have been interrupted and social gatherings restricted which meant no basketball for months. Seeing as current basketball games on the market are expensive and also take time to develop, we wanted to create a simple, but fun interactive basketball related game that could be played with a friend. The inspiration for the game came from the childhood favourite card game WAR.

### User Stories
>AS an avid basketball fan


>I WANT a simple sports themed online card game


>SO THAT I can enjoy basketball and maintain social distancing during quarantine.

### Acceptance Criteria
>GIVEN a choice of decks WHEN I select a deck from the database THEN I am matched with an opponent


>GIVEN it is my turn
WHEN I select the top card
THEN I can choose a stat and play it

>GIVEN cards are in play
WHEN the turn is won
THEN the winner collects those cards

>GIVEN a player loses their turn
WHEN they have no more cards to play
THEN the winner is declared

More details can be found in our [proposal](https://docs.google.com/document/d/1BwLD8_vT9-0C1iab5XI0ZbSI9mZ77FO8_oEqO5aeio4/edit)


## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
  * [Deployed](#Deployed)
  * [Signup](#Signup)
  * [Teams](#Teams)
  * [Play](#Play)
* [Technologies](#Technologies)
* [Authors](#Authors)
* [License](#License)
* [Contributing](#Contributing)
* [Questions](#Questions)

## Installation
Download or clone the repo to a working directory and extract its contents. Use a **C**ommand **L**ine **I**nterface to install necessary dependencies by running the following command:
```
npm i
```
## Usage 
Type the following in any CLI to run the app. 
```
npm start
```
### Deployed
![Deployed](images/Deployed.png)


### Signup
![Signup](images/Signup.gif)


### Teams
![Teams](images/Teams.gif)


### Play
![Play](images/Play.gif)


## Technologies
* [Express](https://expressjs.com/)
* [Express-Session](https://github.com/expressjs/session)
* [MySQL](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [React](https://reactjs.org/)
* [React Router](https://reactrouter.com/)
* [Node](https://nodejs.org/en/)
* [Sass](https://github.com/sass/node-sass)
* [Passport](http://www.passportjs.org/)
* [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme)
* [Travis CI](https://travis-ci.com/)
* [ESlint](https://eslint.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Fontawesome](https://fontawesome.com/)
* [Basketball Reference](https://www.basketball-reference.com/)

## Authors
[Liam Mackinnon](https://github.com/liam-mack), [Shamik Haldar](https://github.com/shamik05), [Mohammed-Yasir Suara](https://github.com/mohammedyasirsuara)

## License 
This project is licensed under the MIT License - see the [LICENSE.md](/LICENSE.md) file for details
## Contributing
Message any of the authors or open a pull request. See [CONTRIBUTING.md](/Contributing.md)
## Questions
Contact any of the [authors](#Authors)
