## Compiler TK4

### How to run

1. Install node to your pc or use online compiler (v14.16.1 or latest node version) 

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