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
            if(json !== null) console.log("- ✅   getCharacterByName tested")
            else console.log("- ❌   getCharacterByName tested")
        });
        WarcraftLog.getCharacterById(23648878).then(json => {
            if(json !== null) console.log("- ✅   getCharacterById tested")
            else console.log("- ❌   getCharacterById tested")
        });

        WarcraftLog.getGuildByName("nocturnys", "uldaman", "eu").then(json => {
            if(json !== null) console.log("- ✅   getGuildByName tested")
            else console.log("- ❌   getGuildByName tested")
        });
        WarcraftLog.getGuildById(60437).then(json => {
            if(json !== null) console.log("- ✅   getGuildById tested")
            else console.log("- ❌   getGuildById tested")
        });
        WarcraftLog.getReportByCode("wfmb4XGT1PFajn2g").then(json => {
            if(json !== null) console.log("- ✅   getReportByCode tested")
            else console.log("- ❌   getReportByCode tested")
        });
        WarcraftLog.getReportsByGuild("nocturnys", "uldaman", "eu").then(json => {
            if(json !== null) console.log("- ✅   getReportsByGuild tested")
            else console.log("- ❌   getReportsByGuild tested")
        });
    }
})