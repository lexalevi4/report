import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

function MyTextInput({ name, value, onChange = () => { }, message = "", required = false, control, register }) {


    const {
        field,
        fieldState: { invalid, isTouched, isDirty },
        formState: { touchedFields, dirtyFields },
    } = useController({
        name,
        control,
        rules: { required: required },
        message: message
    })

    return (
        <>
            <TextField
                // id="name"
                // label="Инфо по расклейке"
                // placeholder='Инфо по расклейке'
                rows={14}
                value={name}
                // {multiline && multiline}

                onChange={onChange}
                multiline
                // maxRows={8}
                fullWidth
            />
        </>
    );
}

export default MyTextInput;