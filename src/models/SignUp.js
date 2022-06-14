import { create, test, enforce } from 'vest';
import countries from '../data/countries.json';

const defaultValues = {
    name: 'jabe',
    email: 'jabe@email.com',
    password: 'Password123',
    date: null,
    country: null,
    accept: true
};

const types = {
    name: "text",
    email: "email",
    password: "password",
    date: "calendar",
    country: "dropdown",
    accept: "checkbox"
};
const { data } = countries;
const options = {
    "countries": data
};

const suite = create((data = {}) => {
    test('name', 'Name is required', () => {
        enforce(data.name).isNotBlank();
    });

    test('email', 'Email is required.', () => {
        enforce(data.email).matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    });

    test('password', 'Password is required', () => {
        enforce(data.password).isNotBlank();
    });

    test('date', 'Date is required', () => {
        enforce(data.date).isNotNull();
    });

    test('country', 'Country is required', () => {
        enforce(data.country).isNotNull();
    });

    test('accept', 'Must Accept To Continue', () => {
        enforce(data.accept).isTruthy();
    });
});

export { suite, defaultValues, options, types };