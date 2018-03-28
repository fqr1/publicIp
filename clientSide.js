/*
Must have a package.json

Must have installed
npm install babel-cli --save
npm install --save-dev babel-plugin-transform-async-to-generator
npm install --save node-fetch

Must run clientSide.js as:
node_modules/babel-cli/bin/babel-node.js clientSide.js

*/

const fetch = require('node-fetch');

const remoteServer = 'http://localhost:3000';
const yourId = '1';
const yourIdentifier = '1234';
const yourName = 'pruebas desde cliente';


function sleep(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function forever() {
    let i = 0;

    while(true){
        try{}catch(err){
            console.log('err', err);
        }
        console.log('i', i)

        console.log(`[${new Date()}] Will call to server to save ip`);

        const seconds = 60 * 1000;
/*
        fetch('https://api.ipify.org?format=json').then(r => {
            console.log('r', r)
            return r.json();
        })
            .then(result => {
                console.log('result', result)
            })
*/
        const ipData = await fetch('https://api.ipify.org?format=json').then(r => r.json());
        console.log('ipData', ipData)
        const ip = ipData.ip;
        console.log('ip', ip)

        const body = JSON.stringify({id: yourId, identifier: yourIdentifier, name: yourName, ip});

        const params = {method: 'POST', body, headers: { 'Content-Type': 'application/json' }};

        const result = await fetch(`${remoteServer}/public-ip/api/v1/server`, params).then(r => r.json());

        console.log('result', result);

        await sleep(seconds);

        i++;
    }
}

forever();
