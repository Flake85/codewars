// https://www.codewars.com/kata/577ff15ad648a14b780000e7

function greet(language) {
  const greeting = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  
  return language !== 'IP_ADDRESS_INVALID' && language !== 'IP_ADDRESS_NOT_FOUND' && language !== 'IP_ADDRESS_REQUIRED' 
    ? greeting[language] 
    : greeting.english
}