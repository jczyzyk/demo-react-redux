import {v4} from 'node-uuid';
import fetch from 'isomorphic-fetch';

const envConf = {
    dev: {
        serverUrl: "/",
        oauthUrl: "http://oauth.cizo.com/oauth2/token",
        clientId: '6uB34u7V30'
    },
    prod: {
        serverUrl: "/",
        oauthUrl: 'http://oauth.cizo.com/oauth2/token',
        clientId: '6uB34u7V3g'
    }
}
let env;
if((process.env.NODE_ENV || 'development')  == 'production'){
    env = envConf.prod;
}
else{
    env = envConf.dev;
}

const delay = (ms) => new Promise(resolve => {
    setTimeout(resolve, ms)
});

export const login = (user) => {
    return fetch(env.oauthUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
            body: 'grant_type=password&client_Id=' + env.clientId + '&username=' + user.username + '&password=' + user.password
        })
        .then(resp => {
        return resp
    })
        .catch(err => {
            throw Error(err)
        });
}

export const register = (input) => {
    return fetch(env.serverUrl + 'api/account/v1/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(input)
        })
        .then(resp => {
        return resp
    })
        .catch(err => {
            throw Error(err)
        });
}