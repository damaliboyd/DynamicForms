
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { vestResolver } from '@hookform/resolvers/vest';
import {
    Input
} from './Input';
function Form({ defaultValues, options, suite, types }) {
    const [formData, setFormData] = useState({});

    const { control, formState: { errors }, handleSubmit, reset } = useForm({
        defaultValues: defaultValues,
        resolver: vestResolver(suite),
    });

    const onSubmit = (data) => {
        setFormData(data);
        console.log(data);
        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const RenderInputs = () => {
        return Object.keys(types).map(key => {
            if (types[key] === "checkbox") {
                return (
                    <div className="field-checkbox" key={key}>
                        <span className="p-float-label">
                            <Input name={key} control={control} type={types[key]} />
                            <label htmlFor={key} className={classNames({ 'p-error': errors[key] })}>{key}</label>
                        </span>
                        {getFormErrorMessage(key)}
                    </div>
                );
            }
            else if (types[key] === "email") {
                return (
                    <div className="field" key={key}>
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-envelope" />
                            <Input name={key} control={control} type={types[key]} />
                            <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>Email*</label>
                        </span>
                        {getFormErrorMessage('email')}
                    </div >
                );
            }
            else {
                return (
                    <div className="field" key={key}>
                        <span className="p-float-label">
                            <Input name={key} control={control} type={types[key]} options={options[key]} />
                            <label htmlFor={key} className={classNames({ 'p-error': errors[key] })}>{key}</label>
                        </span>
                        {getFormErrorMessage(key)}
                    </div>
                );
            }
        });
    };

    return (
        <div>
            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">Register</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <RenderInputs />
                        <Button type="submit" label="Submit" className="mt-2" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;