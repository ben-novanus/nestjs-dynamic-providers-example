## Description

This year I dove into [NestJS](https://github.com/nestjs/nest) for the first time and started work on a new project. For this project I found myself needing to create providers dynamically for multiple other modules.

I needed a way to dynamically define which providers to create from a list. However, I was having a really hard time finding good information on how to do this. So I made this example project to demonstrate how I satisfied the following requirements/issues

- Pet providers must be able to load an external .env configuration file
- The ConfigModule loads files async so there has to be a static list of tokens (petTokens) within the code to define which providers get created before anything else loads
- Pet providers must be accessible from any module that needs them based on the token defined in constants
- There may be more then one pet provider of the same type
- Providers are optional and there does not have to be one of each type

I made these pet modules async because that's what I was working with for my project. This type of setup would work well with any type of async call such as a http request or a database connection.

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```
