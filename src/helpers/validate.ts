import email from '../constains/validate';

const required = (value?: string) => (value ? '' : true);

export const requiredAuth = (value: string) =>
  value ? undefined : '* Данное поле обязательно';

export const validateEmail = (value: string) => {
  if (!email.test(value)) {
    return '* Введите корректный адрес почты';
  }
};

export default required;
