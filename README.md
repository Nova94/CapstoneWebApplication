# CapstoneWebApplication
Website to assist with the CS Capstone Program at Portland State University

## Building and Deploying

Clone the repo in homedir and cd into repo `git clone git@github.com:CapstoneWebsite/CapstoneWebApplication.git && cd ./CapstoneWebApplication`

Add google signin api information to `server/config.js` by replacing the clientId and secret
```javascript
ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com",
    secret: "XXXXXXXXXXXXXXXXXXXXXXXX",
});
```

Run `meteor npm install`

Add your whitelist to `private/whitelist.csv`

Run `export ROOT_URL=http://my-capstone-website.edu:PORT`

Run `meteor`
