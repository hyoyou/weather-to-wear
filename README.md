# Weather To Wear &#9730;
This is a React Application with a Rails API that I created for my React/Redux Final Project at Learn//Flatiron School. <hr />
It is a simple weather application using Ruby on Rails for back-end data management and React/Redux for front-end. Users are able to save personal preferences, such as how sensitive they are to cold weather, or if they don't like to carry too much in their hands. With these preferences set in the settings, the weather application will display forecast along with a recommendation on whether the user should wear a jacket or carry an umbrella for that day.

## Usage

After cloning the repo, please cd into the client directory and api directory.

In the client directory, please run `npm install && npm start` to start the server. In a browser, navigate to http://localhost:3000/ to begin (Note: you may be using a different port. Please update accordingly).

In the api directory, run `bundle install` to install dependencies. To migrate your local database, run `rake db:migrate`. Also, you may run `rake db:seed` to seed the database if you would like. To start the application on your machine, run `rails s -p [3001]` (sample port number).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/hyoyou/weather-to-wear. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The project is available as open source under the terms of the [MIT License](https://github.com/hyoyou/recipe-rails-app/blob/master/LICENSE).
