import React from "react";
import { useFormContext } from "react-hook-form";

/**
 * TextField Component 
 * re-usable compoenent to show text field
 */
const TextField = ({label,fieldId}) => {
    const { register,formState: { errors } } = useFormContext();
    return(
        <div className="col-md-12 form-input">
            <input type="text" className={`form-control`} id={fieldId} placeholder={label}
            {...register("fullName", {
                valueAsNumber: false,
                required: 'Please enter name',
                pattern: {
                    value: /^[A-Za-z]+$/,
                    message: 'Entered value should be alphabets only',
                }
            })}
            />
        {errors.fullName && <div className="invalid-feedback">{errors.fullName.message}
        </div>}
    </div>
    )
}
export default TextField