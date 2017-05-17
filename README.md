# Ripple

This rapid response tool allows an organization to ask their supporters to send an SMS message to a specific number in order to capture their info and engage them moving forward.

## Getting Started

```
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
```

### Prerequisites

Will explain what things you need to install the software and how to install them

```
Give examples
```

#### Install Homebrew
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

#### Install PostgreSQL
`brew install postgresql`

### Installing

Will be a step by step series of examples that tell you have to get a development env running

```
Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo
```
Create your .env file
```
touch configuration/.env.development
```

Populate your .env file with the connection to your PostgreSQL database.
```
echo DATABASE_URL=postgres://`whoami`@localhost:5432/ripple-development >> configuration/.env.development
```

Install dependencies

`npm i`

Run migrations

`npm run migrate:latest`

You should now see your database populated with the correct tables

Start the app with nodemon

`npm run start:dev`

Visit the page in your browser

`localhost:3000`

## Running the tests

Will explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Will explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

```
* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds
```

## Contributing

```
Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.
```

## Versioning

```
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).
```

## Authors

```
* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
