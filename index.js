const OAuth = require("oauth");
const fs = require("node:fs");

const graphql_endpoint = "https://www.warcraftlogs.com/api/v2/client";

let oauth2;
let access_token;

module.exports = {
    connect,
    getCharacterByName,
    getCharacterById,
    getGuildById,
    getGuildByName,
    getReportByCode,
    getReportsByGuild
}

function connect(client_id, client_secret)
{
    return new Promise(function (resolve, reject){
        const OAuth2 = OAuth.OAuth2;
        oauth2 = new OAuth2(client_id,
            client_secret,
            'https://www.warcraftlogs.com/',
            'oauth/authorize',
            'oauth/token',
            null);
        oauth2.getOAuthAccessToken(
            '',
            {'grant_type': 'client_credentials'},
            function (e, token, refresh_token, results) {
                access_token = token;
                resolve(true);
            });
    });
}

function getCharacterByName(name, server, region)
{
    return new Promise((resolve) => {
        let args = [];
        args["name"] = name;
        args["server"] = server;
        args["region"] = region;
        request("character", args).then(json => {
            resolve(json);
        })
    });
}


function getCharacterById(id)
{
    return new Promise((resolve) => {
        let args = [];
        args["id"] = id;
        request("characterid", args).then(json => {
            resolve(json);
        })
    });
}

function getGuildByName(name, server, region)
{
    return new Promise((resolve) => {
        let args = [];
        args["name"] = name;
        args["server"] = server;
        args["region"] = region;
        request("guild", args).then(json => {
            resolve(json);
        })
    });
}


function getGuildById(id)
{
    return new Promise((resolve) => {
        let args = [];
        args["id"] = id;
        request("guildid", args).then(json => {
            resolve(json);
        })
    });
}

function getReportsByGuild(name, server, region)
{
    return new Promise((resolve) => {
        let args = [];
        args["name"] = name;
        args["server"] = server;
        args["region"] = region;
        request("reports", args).then(json => {
            resolve(json);
        })
    });
}


function getReportByCode(code)
{
    return new Promise((resolve) => {
        let args = [];
        args["code"] = code;
        request("reportid", args).then(json => {
            resolve(json);
        })
    });
}

function request(req_name, args)
{
    return new Promise((resolve) => {
        getSchema(req_name, args).then(schema => {
            fetch(graphql_endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`,
                },
                body: JSON.stringify({
                    query: schema
                })
            }).then((res) => {
                res.json().then(json => {
                    resolve(json);
                })
            });
        })
    });
}

function getSchema(name, args) {
    return new Promise((resolve, reject) => {
        fs.readFile(`./schema/${name}.graphql`, 'utf8', async (err, data) => {
            if (err) {
                reject(err)
                return;
            }
            for(let key in args)
            {
                data = data.replaceAll("\$\{" + key + "\}", args[key])
            }
            await resolve(data);
        });
    });
}