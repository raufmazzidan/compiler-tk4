
const providedOperators = {
  penjumlahan : '+',
  perkalian: '*'
}

const operators = Object.keys(providedOperators)

const lexer = (strInput) => strInput.split(' ').filter(item => !!item?.length)

const parser = (_tokens) => {
  const tokens = _tokens.map(item => isNaN(item) ? item : parseInt(item))
  const operatorIdx = tokens.findIndex((token) => operators.includes(token))
  const numbers = tokens.filter((token) => typeof token  === 'number')

  if (operatorIdx < 0) {
    return 'Undefined Operator'
  }

  if (!numbers.length) {
    return 'Undefined Numbers'
  }

  return {
    operator: tokens[operatorIdx],
    numbers: numbers
  };
}

const transformToMath = (tokens) => {
  if (typeof tokens === 'string') {
    return new Error(tokens)
  } else {
    return `${tokens.numbers.join(` ${providedOperators[tokens.operator]} `)}`
  }
}

const compile = (input) => {
  return {
    result: transformToMath(parser(lexer(input))),
    details: {
      'Lexer Output': lexer(input),
      'Parser Output': parser(lexer(input)),
      'Transform to Math': transformToMath(parser(lexer(input)))
    }
  }
}


console.log(compile('penjumlahan 2 44 5 33 55'))
// console.log(compile('perkalian 2 44 5 33 55'))

// console.log('Error Sample =>')
// console.log(compile('2 44 5 33 55'))
// console.log(compile('perkalian'))