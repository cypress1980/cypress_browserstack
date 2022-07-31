Feature:  I want open the Site and verify  links in Home Page

    Background:
        Given I navigate to the Website

    Scenario: Verify content in Home Page After Login
        Then Verify links in Home Page of the Site
            | HomePageLinks |
            | Offers        |
            | Orders        |
            | Favourites    |
            | iPhone 12     |
            | Pixel 2       |
            | One Plus 8    |
            | One Plus 6T   |