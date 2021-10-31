## Compiler TK4

### How to run

1. Install [NodeJS](https://nodejs.org/en/) to your pc or use [online compiler](https://onecompiler.com/javascript) (v14.16.1 or latest node version) 

2. Clone this repository
3. Run this command

```sh 
cd compiler-tk4
node main
```
4. The output should be like this

```js
{
  result: '2 + 44 + 5 + 33 + 55',
  details: {
    'Lexer Output': [ 'penjumlahan', '2', '44', '5', '33', '55' ],
    'Parser Output': { operator: 'penjumlahan', numbers: [2, 44, 5, 33, 55] },
    'Transform to Math': '2 + 44 + 5 + 33 + 55'
  }
}
```
5. If you using online compiler, just copy [main.js](main.js) to online compiler then run it