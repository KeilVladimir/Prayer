import email from '../constains/validate';

const required = (value?: string) => (value?.trim() ? '' : true);

export const requiredAuth = (value: string) =>
  value ? undefined : '* Данное поле обязательно';

export const validateEmail = (value: string) => {
  if (!email.test(value)) {
    return '* Введите корректный адрес почты';
  }
};

export const deleteString = (str: string) => {
  if (str.length > 16) {
    return (str = str.substring(0, 14) + '...');
  }
  return str;
};

export default required;
