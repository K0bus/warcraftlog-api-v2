# Warcraft Log API V2
This package allow you to simply fetch data from the GraphQL API of WarcraftLog.

### Build
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/k0bus/warcraftlog-api-v2/test-push.yml?style=for-the-badge)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/k0bus/warcraftlog-api-v2/master?style=for-the-badge&label=Version)

### Issues / Pull Requests
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/k0bus/warcraftlog-api-v2?style=for-the-badge)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-closed/k0bus/warcraftlog-api-v2?style=for-the-badge)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr/k0bus/warcraftlog-api-v2?style=for-the-badge)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr-closed/k0bus/warcraftlog-api-v2?style=for-the-badge)

## Installation
`npm install warcraftlog-api-v2`

## Dependency
- [oauth](https://www.npmjs.com/package/oauth)

## Usage

### Initializing API
```javascript
const WarcraftLog = require("./index");

WarcraftLog.connect(
    WL_CLIENT_ID,
    WL_CLIENT_SECRET
)
```

### Fetch data

These line come from my test.js
All data fetched are formatted in JSON.

```javascript
WarcraftLog.getCharacterByName("charactername", "serverslug", "region").then(json => {
    if(json !== null) console.log("- ✅   getCharacterByName tested")
    else console.log("- ❌   getCharacterByName tested")
});
WarcraftLog.getCharacterById(999).then(json => {
    if(json !== null) console.log("- ✅   getCharacterById tested")
    else console.log("- ❌   getCharacterById tested")
});

WarcraftLog.getGuildByName("guildname", "serverslug", "region").then(json => {
    if(json !== null) console.log("- ✅   getGuildByName tested")
    else console.log("- ❌   getGuildByName tested")
});
WarcraftLog.getGuildById(999).then(json => {
    if(json !== null) console.log("- ✅   getGuildById tested")
    else console.log("- ❌   getGuildById tested")
});
WarcraftLog.getReportByCode("report_code").then(json => {
    if(json !== null) console.log("- ✅   getReportByCode tested")
    else console.log("- ❌   getReportByCode tested")
});
WarcraftLog.getReportsByGuild("guildname", "serverslug", "region").then(json => {
    if(json !== null) console.log("- ✅   getReportsByGuild tested")
    else console.log("- ❌   getReportsByGuild tested")
});
```

## Contributing
Anyone can contribute via [Github Pull Request](https://github.com/K0bus/warcraftlog-api-v2/pulls)

## Issues
Any issue had to be reported in [Github Issues](https://github.com/K0bus/warcraftlog-api-v2/issues)