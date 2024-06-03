const WarcraftLog = require("./index");

const WL_CLIENT_ID = process.env.WL_CLIENT_ID
const WL_CLIENT_SECRET = process.env.WL_CLIENT_SECRET

WarcraftLog.connect(
    WL_CLIENT_ID,
    WL_CLIENT_SECRET
).then((connected) => {
    if(connected)
    {
        WarcraftLog.getCharacterByName("kobus", "uldaman", "eu").then(json => {
            console.log(json)
        });
        WarcraftLog.getCharacterById(23648878).then(json => {
            console.log(json)
        });

        WarcraftLog.getGuildByName("nocturnys", "uldaman", "eu").then(json => {
            console.log(json)
        });
        WarcraftLog.getGuildById(60437).then(json => {
            console.log(json)
        });
        WarcraftLog.getReportByCode("wfmb4XGT1PFajn2g").then(json => {
            console.log(json)
        });
    }
})