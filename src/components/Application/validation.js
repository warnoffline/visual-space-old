import * as yup from 'yup'
const phoneRegExp = /^\+?\d{11}$/
export const postApplicationSchema = yup.object().shape({
    name: yup.string().required('*Поле обязательно для заполнения'),
    phoneNumber: yup.string().required('*Поле обязательно для заполнения').matches(phoneRegExp, '*Неправильный номер телефона')
})