City.create(zip_code: "94027")

User.create(name: "Sky",
            email: "sky@weather.com",
            password: "abc123")

UserCity.create(user_id: 1, city_id: 1)
