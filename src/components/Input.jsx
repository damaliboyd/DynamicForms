import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { useController } from 'react-hook-form';
import { classNames } from 'primereact/utils';

function Input(props) {
    const {
        field,
        fieldState,
    } = useController({
        name: props.name,
        control: props.control
    });

    if (props.type === "text") {
        return (
            <InputText
                id={field.name}
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value} autoFocus
                className={classNames({ 'p-invalid': fieldState.error })}
            />
        );
    }
    else if (props.type === "password") {
        return (
            <Password
                id={field.name}
                onChange={field.onChange}
                value={field.value}
                onBlur={field.onBlur}
                toggleMask
                className={classNames({ 'p-invalid': fieldState.error })} />
        );
    }
    else if (props.type === "calendar") {
        return (
            <Calendar
                id={field.name}
                value={field.value}
                onChange={field.onChange}
                dateFormat="dd/mm/yy"
                mask="99/99/9999"
                showIcon />
        );
    }
    else if (props.type === 'checkbox') {
        return (
            <Checkbox
                inputId={field.name}
                onChange={(e) => field.onChange(e.checked)}
                checked={field.value}
                className={classNames({ 'p-invalid': fieldState.error })} />
        );
    }
    else if (props.type === "dropdown") {
        return (
            <Dropdown
                id={field.name}
                value={field.value}
                onChange={field.onChange}
                options={props.options}
                optionLabel="name" />
        );
    }


}

export {
    Password,
    Checkbox,
    InputText,
    Dropdown,
    Calendar,
    Input
};