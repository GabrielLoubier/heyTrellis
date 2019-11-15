import { useState } from 'react'

export const useForm = (initialValues) => { // uses the name of the input to assign a value. 
    const [values, setValues] = useState(initialValues)
    return [values, e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }]
}