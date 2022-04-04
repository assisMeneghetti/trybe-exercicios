enum daysOfTheWeek {
  SUNDAY= 'SUNDAY',
  MONDAY= 'MONDAY',
  TUESDAY= 'TUESDAY',
  WEDBESDAY= 'WEDBESDAY',
  THURSDAY= 'THURSDAY',
  FRIDAY= 'FRIDAY',
  SATURDAY= 'SATURDAY',
}

enum colorsOfRainbow {
  RED= 'VERMELHO',
  ORANGE= 'LARANJA',
  YELLOW= 'AMARELO',
  GREEN= 'VERDE',
  BLUE= 'AZUL',
  INDIGO= 'ANIL',
  VIOLET='VIOLETA',
}

enum actions {
  Save= 1,
  Print,
  Open,
  View,
  Close,
}

enum cardinalDirections {
  North= 'N', 
  South= 'S', 
  East= 'E',
  West= 'W',
}

console.log(actions.Save, actions['Print']);
