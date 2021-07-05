require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remain huge hockey clog olympic ghost'; 
let testAccounts = [
"0xba7564fc34e36a3700433b700a52bb976c0afb37ecbf7ef131e3bf612d0fa1c9",
"0x19fbf90e371b3d464ea0f408f4f3e20f52a36002938338c31f2631fd7fe7910d",
"0xde020011d18e4e7d8a1230808bd689e9788e1eac292522b651153ac17193c360",
"0x244f04755041fee950b3848d4afe0459e194c1aecc0dfe9c2d6bea3f3483dd76",
"0x9d5faa0b4a3ed3d85c22b84aaa65bc64b5ba318cd690160d7e4467c8e5892ecd",
"0x02447b331d2131d742db2b2bccfad43ab9a331bb032a756dad9a6eade96478e9",
"0x418e23a78c9405f906e2614bd7259dad5e3376ea6c63a1b7b1fed3b2c9e69a2b",
"0x7598474de3f113ab63ed34317daae4ca333c5f53454d836da6438f3919bd0960",
"0xbb21cc7173697c64bbd1bd8650f572813d548299b86eed066df184db7df6143e",
"0x2d11b7b399f6343f17700f736e0dcc316517fcc87e38163b5a78b50563e919a4"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

