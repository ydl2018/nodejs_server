# nodejs_server
This is a simplified static resource server built on nodejs v11.8.0
# Get started quickly
---
## 1.how to install it?
    npm i -g nodejs_server
##### Especially, if you are using mac or linux system, you should write one line code in your command line tool like this to make sure you have the permission to start the server in your machine:
    chmod +x bin/nodejs_server
## 2.how to use it?
##### It will start the static server and set the port as 3000 if you don't pass arguments to the command line tool
    bin/nodejs_server 

## 3.how to set the arguments?
##### just set the arguments in the command line,it contains three args:
##### 1. port  
##### 2. root 
##### 3. hostname
    // here is the examples
    bin/nodejs_server --hostname 127.0.0.1 --port 1234 --root /usr 
## 4.if you want to try another way to start the server,you can do this:
    node src/index.js  //Omitted the pareameters
---
