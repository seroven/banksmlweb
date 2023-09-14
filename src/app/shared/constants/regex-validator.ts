export const RegexValidator = {
  email: '^[a-zA-Z0-9\\._-]+@[a-zA-Z0-9\\._-]+(\\.[a-zA-Z]{2,10})+$',
  onlyLetters: '^[a-zA-Z ÁÉÍÓÚáéíóú]+$',
  onlyNumbers: `^[0-9]+$`,
  dni: '^[0-9]{8}$'
}