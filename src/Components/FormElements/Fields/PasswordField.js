import React from "react";
import { useFormContext } from "react-hook-form";

/**
 * PasswordField Component 
 * re-usable compoenent to show password field
 */
const PasswordField = ({reConfirm,fieldId,label}) => {
    const { register,watch,formState: { errors } } = useFormContext();
    return(
        <>
        <div className="col-md-12 form-input">
            <input type="password" className={`form-control`} id={fieldId} placeholder={label}
                {...register("password", {
                    required: 'Please enter password'
                },
                )}
                />
            {errors.password && <div className="invalid-feedback">{errors.password.message}
            </div>}
        </div>
        {reConfirm && <div className="col-md-12 form-input">
            <input type="password" className={`form-control`} id={`confirm.${fieldId}`} placeholder={`Confirm .${label}`}
            {...register("confPassword", {
            required: 'Please re-enter password',
            validate: (val) => {
                if (watch(fieldId) !== val) {
                return "Your passwords do no match";
                }
            },
            })}
            />                
            {errors.confPassword && <div className="invalid-feedback">{errors.confPassword.message}
            </div>}
        </div>}
        </>
    )
}
export default PasswordField