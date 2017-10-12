# hacktivpress-kit-fox

Just a simple blog app

## Build Setup

``` bash
# install dependencies in server
cd server
npm install

# install dependencies in client
cd client
npm install

# serve REST API with hot reload at localhost:3000
cd server
npm run dev

# serve with hot reload at localhost:8080
cd client
npm run dev

```
## REST API
List of basic routes:

Route | HTTP | Description
----- | ---- | -----------
api/signup | POST | Sign up with new user info
api/signin | POST | Sign in while get an access token based on credentials
api/articles | GET | Get All the articles
api/article/:id | GET | Get a single article info
api/article | POST | Create an article (auth user only)
api/article/:id | DELETE | Delete an article (auth user only)
api/article/:id | PUT | Update an article (auth user only)
