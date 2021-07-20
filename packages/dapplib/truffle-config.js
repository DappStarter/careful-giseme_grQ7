require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth oval common grace hen equal genuine'; 
let testAccounts = [
"0x174645957011ec5b49692584688b7dfd55de680d8ec6da21525fb52da0ff5891",
"0xe046fdc4b78f3597b4d9d89110c46afbefdefb38cfde11cd77b565249f218e02",
"0x6fd3852bb3352974ccd60de0dca827b6028b348ea60fec10d95eb689252b869f",
"0xb2028645a4861991ba6dc21032bf8337a0ef63c61f54886e25fc8c98383b8b94",
"0x4d27a8884237394b54f221a51aa35449eaf3d123a3e29730a612d0d1218d3c60",
"0xa235e610129f91a3797f6c9ae244f9d8c58d085c8080c6574017f6ef579c811d",
"0xc993fb8e9d9264318488a5e25364ed1fcdde4b4ce7e9e0d6ce45e42a8b3d8fb5",
"0x0b4cf97da6de44b01a0f5d56952603551c02dd40b1424383150edd45e6d19655",
"0xbad6be865262b8feec2e668e93c3e072997a43ca73d845d94a764aee3b62b03f",
"0x333a5859fd2f57e11079c9413d8cc8339f94bc4dc29515c5048de1c1da19041a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


