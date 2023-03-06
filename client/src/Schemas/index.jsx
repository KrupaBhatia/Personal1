import * as Yup from "yup"


export const ApplySchema = Yup.object({

    first_name: Yup.string().min(2).max(30).required('Pleae Enter First Your Name'),
    last_name: Yup.string().min(2).max(30).required('Pleae Enter First Your Name'),
    email: Yup.string().email().required("Please Enter Your Email"),
    phone: Yup.number().min(2).required("Please Enter Your Phone"),
    gender: Yup.string().required('Pleae Select Your Gender'),
    // date_of_birth: Yup.string.required("Please Select Your DOB"),
    // expected_date_of_journey: Yup.string.required("Please Select Date of journey"),
    nationality: Yup.string().required('Pleae Select Your Nationality'),
    passport_type: Yup.string().required('Pleae Select Your Passport Type'),
    port_of_arrival: Yup.string().required('Pleae Select Your port of arrival'),
})