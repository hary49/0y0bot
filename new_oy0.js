const fetch = require("node-fetch");
const delay = require("delay");
const readline = require("readline-sync");
const colors = require("./lib/colors");
const moment = require("moment");
const fs = require("fs");
const UsernameGenerator = require("username-generator");
const ua = require("useragent-generator");

console.log("#####################");
console.log("Panggil w Amin Tamvan");
console.log("#####################");

console.log("");
console.log("");

const nope = readline.question("id/us : ");
const phoneP = readline.question("Masukan no hp : ");

console.log("");
console.log("");

const functionRegister = ID =>
  new Promise((resolve, reject) => {
    // const email = `${emol}@${domain}`;
    fetch(
      `https://api.oyorooms.com/v2/users/generate_otp?phone=${phoneP}&nod=4&intent=login&sms_auto_retrieval=false&country_code=%2B${
        nope === "id" ? "62" : "1"
      }&version=20215&partner_app_version=20215&android_id=${ID}&idfa=&sid=1555663216720`,
      {
        method: "get",

        headers: {
          "Content-Type": "application/json",
          OYO_AB_CONFIG:
            "1555660584993|dea:1|mwhp:1|t3c:0|epba:0|pnna:0|srma:1|rst2:1|phbb:0|pnni:2|srmi:1|wcta:1|wtea:1|cdr2:1|popl:0|nhi2:1|bann:1|sbma:1|rae:1|gmfh:1|prep:1|fbtn:1|htab:1|hbna:1|absb:0|se1:0|sbmi:1|se3:0|se2:0|se5:11|se4:1|rtsa:0|se6:17|cour:1|gsra:1|rtsi:1|hdab:1|slpr:0|rba:0|cdr:0|ipw:0|rd:1|ipw2:0|pppp:0|lzpi:1|npfi:1|uprc:1|rbl:1|hmva:0|rsa:0|dww2:0|deal:0|pnpd:1|rcua:1|rsi:0|gsti:1|dwep:2|otp4:1|urha:1|ppa:2|ona:0|svh:1|stc2:1|urhi:1|ppi:2|gsta:0|gstc:0|nlab:1|asa:1|cr:1|rts:0|nlp:1|mjo:1|onab:1|asi:1|wtei:1|asei:1|bsba:2|aca:1|bea:1|wtib:3|hbri:0|lyr:0|aci:0|scta:0|tspk:1|hste:1|tspi:0|tspj:0|DWWS:1|a2hs:1|pfri:0|brch:4|test:1|raab:1|sink:0|aswp:1|shli:0|hrr:0|hrt:1|riab:0|hbad:0|hbi:0|rcui:1|idl:0|sbpa:0|stcl:1|sbpi:0|sinc:1|shla:0|brea:1|idum:0|lpta:1|lpti:1|ffab:1|his2:0|hbci:1|pst:1|stfi:2|pce:1|stft:2|omue:0|brei:1|hsei:1|hbsi:0|sold:1|hbca:1|stfa:1|stfb:1|home:0|scti:0|otab:1|cvis:0|gsa:1|dwhp:0|hbsa:1|gsi:1|rasl:0|locr:0|nhpi:0|obai:1|dbad:1|nrca:1|epa:2|nrci:1|hlis:0|epi:0|epn:2|fbb:0|trab:1|rmo2:1|niab:0|lbht:0|weng:0|shpa:1|hppl:0|hsfa:1|sls:1|shpi:1|apei:1|loc:0|phli:0|gpwa:0|nsl:1|prpa:0|saet:1|nhba:1|gpwi:0|nrfa:0|nbwa:0|prpi:0|hbi2:0|mtlp:1|saea:1|mrc:1|blh:1|cpab:1|hpsa:0|vct:1|octt:1|phb:1|hpsi:0|cadd:1|nsfa:1|oban:1|spc2:1|smla:0|sfni:2|auto:1|uiab:1|pvis:0|wtab:3|shel:1|ndlp:0|hmpi:1|his:0|rmo:1|bdpi:1|pbra:1|sos:2|logn:1|rms:1|uaab:1|papg:1|bdpa:1|pbri:1|nob2:1|swar:1|aowt:1|spc:1|pioi:0|rms2:0|trCl:1|nhbi:1|lbh:1|nrfi:0|nbwi:0|paom:0|lsc:1|pdhi:0|tsb:0|lsc2:0|diei:1|dmme:1|diea:1|dte:1|acsi:1|nuom:0|adum:1|pdha:1|uhps:0|mwen:0|nobs:1|efa:1|hpwa:0|fbb2:0|sra:2|reca:1|BnTc:0|paab:0|mwep:2|ngst:1|hpwi:1|ltsc:1|reci:1|jbei:1|piab:0|aimg:1|avgp:0|ffib:1|mww2:1|ioab:0|hpfd:1|srz:1|socp:0|plwc:1",
          SEGMENT_CONFIG: "default",

          access_token:
            "QmpDZlRxZWo2UkZ5M3pSeHZ5NW46bi13NHN0ZTV5V1I1aGpCUVVHOUM=",
          Authorization:
            "Basic QmpDZlRxZWo2UkZ5M3pSeHZ5NW46bi13NHN0ZTV5V1I1aGpCUVVHOUM=",

          "Accept-Encoding": "gzip",

          "User-Agent": ua.chrome.androidPhone({
            version: "61.0.0",
            androidVersion: "7.1.2",
            device: "Nexus 6"
          }),
          Host: "api.oyorooms.com",
          Connection: "Keep-Alive"
        }
      }
    )
      .then(res => res.json())
      .then(json => {
        resolve(json);
      })
      .catch(err => reject(err));
  });

const functionConfirm = (codeT, reff, ID) =>
  new Promise((resolve, reject) => {
    // const email = `${emol}@${domain}`;
    const data = {
      truecaller: false,
      code: codeT,
      country_code: "+62",
      device_id: ID,
      device_type: "android",
      email: UsernameGenerator.generateUsername() + "@gmail.com",
      id: 0,
      idfa: "",
      name: UsernameGenerator.generateUsername(),
      phone: phoneP,
      push_type: "gcm",
      referral_code: reff,
      token: "",
      updated_at: 0
    };

    fetch(
      `https://api.oyorooms.com/v2/users/new_sign_up?additional_fields=ab_service_data&handset=Genymotion%2C%20Custom%20Phone%20-%206.0.0%20-%20API%2023%20-%20768x1280&version=20215&partner_app_version=20215&android_id=${ID}&idfa=&sid=1555663216720 `,
      {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          OYO_AB_CONFIG:
            "1555660584993|dea:1|mwhp:1|t3c:0|epba:0|pnna:0|srma:1|rst2:1|phbb:0|pnni:2|srmi:1|wcta:1|wtea:1|cdr2:1|popl:0|nhi2:1|bann:1|sbma:1|rae:1|gmfh:1|prep:1|fbtn:1|htab:1|hbna:1|absb:0|se1:0|sbmi:1|se3:0|se2:0|se5:11|se4:1|rtsa:0|se6:17|cour:1|gsra:1|rtsi:1|hdab:1|slpr:0|rba:0|cdr:0|ipw:0|rd:1|ipw2:0|pppp:0|lzpi:1|npfi:1|uprc:1|rbl:1|hmva:0|rsa:0|dww2:0|deal:0|pnpd:1|rcua:1|rsi:0|gsti:1|dwep:2|otp4:1|urha:1|ppa:2|ona:0|svh:1|stc2:1|urhi:1|ppi:2|gsta:0|gstc:0|nlab:1|asa:1|cr:1|rts:0|nlp:1|mjo:1|onab:1|asi:1|wtei:1|asei:1|bsba:2|aca:1|bea:1|wtib:3|hbri:0|lyr:0|aci:0|scta:0|tspk:1|hste:1|tspi:0|tspj:0|DWWS:1|a2hs:1|pfri:0|brch:4|test:1|raab:1|sink:0|aswp:1|shli:0|hrr:0|hrt:1|riab:0|hbad:0|hbi:0|rcui:1|idl:0|sbpa:0|stcl:1|sbpi:0|sinc:1|shla:0|brea:1|idum:0|lpta:1|lpti:1|ffab:1|his2:0|hbci:1|pst:1|stfi:2|pce:1|stft:2|omue:0|brei:1|hsei:1|hbsi:0|sold:1|hbca:1|stfa:1|stfb:1|home:0|scti:0|otab:1|cvis:0|gsa:1|dwhp:0|hbsa:1|gsi:1|rasl:0|locr:0|nhpi:0|obai:1|dbad:1|nrca:1|epa:2|nrci:1|hlis:0|epi:0|epn:2|fbb:0|trab:1|rmo2:1|niab:0|lbht:0|weng:0|shpa:1|hppl:0|hsfa:1|sls:1|shpi:1|apei:1|loc:0|phli:0|gpwa:0|nsl:1|prpa:0|saet:1|nhba:1|gpwi:0|nrfa:0|nbwa:0|prpi:0|hbi2:0|mtlp:1|saea:1|mrc:1|blh:1|cpab:1|hpsa:0|vct:1|octt:1|phb:1|hpsi:0|cadd:1|nsfa:1|oban:1|spc2:1|smla:0|sfni:2|auto:1|uiab:1|pvis:0|wtab:3|shel:1|ndlp:0|hmpi:1|his:0|rmo:1|bdpi:1|pbra:1|sos:2|logn:1|rms:1|uaab:1|papg:1|bdpa:1|pbri:1|nob2:1|swar:1|aowt:1|spc:1|pioi:0|rms2:0|trCl:1|nhbi:1|lbh:1|nrfi:0|nbwi:0|paom:0|lsc:1|pdhi:0|tsb:0|lsc2:0|diei:1|dmme:1|diea:1|dte:1|acsi:1|nuom:0|adum:1|pdha:1|uhps:0|mwen:0|nobs:1|efa:1|hpwa:0|fbb2:0|sra:2|reca:1|BnTc:0|paab:0|mwep:2|ngst:1|hpwi:1|ltsc:1|reci:1|jbei:1|piab:0|aimg:1|avgp:0|ffib:1|mww2:1|ioab:0|hpfd:1|srz:1|socp:0|plwc:1",
          SEGMENT_CONFIG: "default",

          access_token:
            "QmpDZlRxZWo2UkZ5M3pSeHZ5NW46bi13NHN0ZTV5V1I1aGpCUVVHOUM=",
          Authorization:
            "Basic QmpDZlRxZWo2UkZ5M3pSeHZ5NW46bi13NHN0ZTV5V1I1aGpCUVVHOUM=",

          "Accept-Encoding": "gzip",

          "User-Agent": ua.chrome.androidPhone({
            version: "61.0.0",
            androidVersion: "7.1.2",
            device: "Nexus 6"
          }),
          Host: "api.oyorooms.com",
          Connection: "Keep-Alive"
        }
      }
    )
      .then(res => res.json())
      .then(json => {
        resolve(json);
      })
      .catch(err => reject(err));
  });

const genDevId = length =>
  new Promise((resolve, reject) => {
    var text = "";
    var possible =
      "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    resolve(text);
  });

(async () => {
  const genId = await genDevId(16);
  const regist = await functionRegister(genId);
  const code = await readline.question("Masukan kode otp : ");
  const reff = await readline.question("Masukan refferal : ");
  const confirm = await functionConfirm(code, reff, genId);

  console.log(
    "[" +
      " " +
      moment().format("HH:mm:ss") +
      " " +
      "]" +
      " " +
      "Sukses register with name :" +
      " " +
      confirm.first_name
  );
})();
