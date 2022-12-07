import React from "react";
import { useFormContext } from "react-hook-form";

/**
 * EmailField Component 
 * re-usable compoenent to show email field
 */
const EmailField = ({label,fieldId}) => {
    const { register,formState: { errors } } = useFormContext();
    return(
        <div className="col-md-12 form-input">
        <input type="text" className={`form-control`} id={fieldId} placeholder={label}
            {...register(fieldId, {
                required: 'Please enter email',
                pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format',
                }
            },
            )}
            />
        {errors.email && <div className="invalid-feedback">{errors.email.message}
        </div>}
    </div>
    )
}
export default EmailField