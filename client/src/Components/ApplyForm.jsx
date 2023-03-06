import React, { useState } from "react";
import { Field, useFormik } from "formik"
import { ApplySchema } from "../Schemas";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  gender: "",
  date_of_birth: "",
  expected_date_of_journey: "",
  nationality: "",
  passport_type: "",
  port_of_arrival: "",

}

const options = [
  { value: '', label: "--SELECT--" },
  { value: 2, text: "Mumbai" },
  { value: 3, text: "Banglore" },
];


const ApplyForm = () => {
  const [selected, setSelected] = useState('');

  const handleChangeSelect = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({

    initialValues: initialValues,
    validationSchema: ApplySchema,
    onSubmit: (values) => {
      console.log(
        " ~ file: ApplyForm.jsx ~ line 11 ~ applyy ~ values",
        values
      );
    },
  });
  console.log(
    " ~ file: ApplyForm.jsx ~ line 11 ~ applyy ~ values",
    errors
  );



  const postData = async (e) => {
    e.preventDefault()

    const {
      first_name, last_name, email, phone, gender,
      date_of_birth, expected_date_of_journey,
      nationality, passport_type, port_of_arrival } = values

    const res = await fetch("/ApplyForm", {
      method: "POST",
      headers: {

        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name, last_name, email, phone, gender,
        date_of_birth, expected_date_of_journey,
        nationality, passport_type, port_of_arrival
      })
    });

    const data = await res.json()

    if (data.status === false || !data) {
      window.alert(`Invalid Registration ${data.msg}`)
      console.log("invalid registration")
    } else {
      window.alert("Registration successfull")
      console.log("successfull registration")
    }
  }
  return (

    <div className="background-image-animation">
      <div className="Apply-container">
        <h1 id="Apply-For-Visa"> E-VISA APPLICATION </h1>
        <form method="POST">
          <div>
            <label>
              Application Type :
              <select id="select-div-application-type">
                <option> Select... </option>
                <option> NORMAL PROCESSING (PROCESSING TIME 1 TO 4 BUSINESS DAYS) </option>
              </select>
            </label>
          </div>
          <br />
          <div>
            <label>
              Enter First Name :

              <input
                type="first_name"
                name="first_name"
                onChange={handleChange}
                value={values.first_name}
                onBlur={handleBlur}
                placeholder="First Name"
              />
              {errors.first_name && touched.first_name ? (
                <p id="form-error">{errors.first_name} </p>
              ) : null}
            </label>
          </div>

          <br />
          <div>
            <label>
              Enter Last Name :
              <input
                type="last_name"
                name="last_name"
                onChange={handleChange}
                value={values.last_name}
                onBlur={handleBlur}
                placeholder="Last Name" />
              {errors.last_name && touched.last_name ? (
                <p id="form-error">{errors.last_name} </p>
              ) : null}
            </label>
          </div>
          <br />
          <div>
            <label>
              Enter Email &nbsp; &nbsp; &nbsp; &nbsp; :
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                placeholder="email" />
              {errors.email && touched.email ? (
                <p id="form-error">{errors.email} </p>
              ) : null}
            </label>
          </div>
          <br />
          <div>
            <label>
              Enter Phone No  :
              <input
                type="phone"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                onBlur={handleBlur}
                placeholder="Phone No" />
              {errors.phone && touched.phone ? (
                <p id="form-error">{errors.phone} </p>
              ) : null}
            </label>
          </div>
          <br />
          <div
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.gender}
          >
            <label>
              Gender &nbsp; &nbsp; &nbsp; :
              <input type="radio" name="gender" value="male" /> Male
              <input type="radio" name="gender" value="female" /> Female
              <input type="radio" name="gender" value="other" /> Other
              {errors.gender && touched.gender ? (
                <p id="form-error">{errors.gender} </p>
              ) : null}
            </label>
          </div>
          <br />


           <div>
            <label>
              Date Of Birth &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:
              <input type="date"  
              onChange={handleChange} 
              onBlur={handleBlur}
              value ={values.date_of_birth}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              &nbsp; Expected Date of Journey :
              <input type="date" 
              onChange={handleChange} 
              onBlur={handleBlur}
              value ={values.expected_date_of_journey}
              />
            </label>
          </div>
          <br />

          <div>
            <label>
              Passport Type &nbsp;&nbsp; &nbsp;:
              <select 
              onChange={handleChange}
               onBlur={handleBlur}
               value={values.passport_type}>
                <option> ORDINARY PASSPORT </option>
              </select>
            </label>
          </div>
          <br />

          <div>
          Nationality &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp;
                      &nbsp; :
            <select id="select-div-nationality"
              type="nationality"
              name="nationality"
              onChange={handleChange}
              value={values.nationality}
              onBlur={handleBlur}
              placeholder="nationality" >
              
              <option value=""> -Select Option- </option>
              <option value="Albania"> Albania </option>
              <option value="Andorra"> Andorra </option>
              <option value="Angola"> Angola </option>
              <option value="Anguilla"> Anguilla </option>
              <option value="Antigua & Barbuda"> Antigua & Barbuda </option>
              <option value="Argentina"> Argentina </option>
              <option value="Armenia"> Armenia </option>
              <option value="Aruba"> Aruba </option>
              <option value="Australia"> Australia </option>
              <option value="Austria"> Austria </option>
              <option value="Azerbaijan"> Azerbaijan </option>
              <option value="Bahamas"> Bahamas  </option>
              <option value="Barbados"> Barbados </option>
              <option value="Belarus"> Belarus </option>
              <option value="Belgium"> Belgium </option>
              <option value="Belize"> Belize </option>
              <option value="Benin"> Benin </option>
              <option value="Bolivia"> Bolivia </option>
              <option value="Bosnia & Herzegovina"> Bosnia & Herzegovina </option>
              <option value="Botswana"> Botswana </option>
              <option value="Brazil"> Brazil </option>
              <option value="Brunei"> Brunei </option>
              <option value="Bulgaria"> Bulgaria </option>
              <option value="Burundi"> Burundi </option>
              <option value="Cambodia"> Cambodia </option>
              <option value="Cameroon"> Cameroon </option>
              <option value="Cape Verde"> Cape Verde </option>
              <option value="Cayman Island"> Cayman Island </option>
              <option value="Chile"> Chile </option>
              <option value="Colombia"> Colombia </option>
              <option value="Comoros"> Comoros </option>
              <option value="Cook Islands"> Cook Islands </option>
              <option value="Costa Rica"> Costa Rica </option>
              <option value="Cote D'Ivoire"> Cote D'Ivoire </option>
              <option value="Croatia"> Croatia </option>
              <option value="Cyprus"> Cyprus </option>
              <option value="Czech Republic"> Czech Republic </option>
              <option value="Denmark"> Denmark </option>
              <option value="Djibouti"> Djibouti </option>
              <option value="Dominica"> Dominica </option>
              <option value="Dominican Republic"> Dominican Republic </option>
              <option value="East Timor"> East Timor </option>
              <option value="Ecuador"> Ecuador </option>
              <option value="El Salvador"> El Salvador </option>
              <option value="Eritrea"> Eritrea </option>
              <option value="Estonia"> Estonia </option>
              <option value="Fiji"> Fiji </option>
              <option value="Finland"> Finland </option>
              <option value="France"> France </option>
              <option value="Gabon"> Gabon </option>
              <option value="Gambia"> Gambia </option>
              <option value="Georgia"> Georgia </option>
              <option value="Germany"> Germany </option>
              <option value="Ghana"> Ghana </option>
              <option value="Greece"> Greece </option>
              <option value="Grenada"> Grenada </option>
              <option value="Guatemala"> Guatemala </option>
              <option value="Guinea"> Guinea </option>
              <option value="Guyana"> Guyana </option>
              <option value="Honduras"> Honduras </option>
              <option value="Hungary"> Hungary </option>
              <option value="Iceland"> Iceland </option>
              <option value="Ireland"> Ireland </option>
              <option value="Israel"> Israel </option>
              <option value="Italy"> Italy </option>
              <option value="Jamaica"> Jamaica </option>
              <option value="Japan"> Japan </option>
              <option value="Jordan"> Jordan </option>
              <option value="Kenya"> Kenya </option>
              <option value="Kiribati"> Kiribati </option>
              <option value="Laos"> Laos </option>
              <option value="Latvia"> Latvia </option>
              <option value="Lesotho"> Lesotho </option>
              <option value="Liberia"> Liberia </option>
              <option value="Liechtenstein"> Liechtenstein </option>
              <option value="Lithuania"> Lithuania </option>
              <option value="Luxembourg"> Luxembourg </option>
              <option value="Macedonia"> Macedonia </option>
              <option value="Madagascar"> Madagascar </option>
              <option value="Malawi"> Malawi </option>
              <option value="Malta"> Malta </option>
              <option value="Marshall Islands"> Marshall Islands </option>
              <option value="Marshall Islands"> Marshall Islands </option>
              <option value="Mauritius"> Mauritius  </option>
              <option value="Mexico"> Mexico </option>
              <option value="Micronesia"> Micronesia  </option>
              <option value="Moldova"> Moldova </option>
              <option value="Monaco">  Monaco </option>
              <option value="Mongolia"> Mongolia </option>
              <option value="Montenegro"> Montenegro </option>
              <option value="Montserrat"> Montserrat </option>
              <option value="Mozambique"> Mozambique </option>
              <option value="Myanmar"> Myanmar </option>
              <option value="Namibia"> Namibia </option>
              <option value="Nauru"> Nauru </option>
              <option value="Netherlands"> Netherlands </option>
              <option value="New Zealand"> New Zealand </option>
              <option value="Nicaragua"> Nicaragua </option>
              <option value="Niger Republic"> Niger Republic </option>
              <option value="Niue Island"> Niue Island </option>
              <option value="Norway"> Norway </option>  
              <option value="Oman"> Oman </option>
              <option value="Palau"> Palau </option>
              <option value="Panama"> Panama </option>
              <option value="Papua New Guinea"> Papua New Guinea </option>
              <option value="Paraguay"> Paraguay </option>
              <option value="Peru"> Peru </option>
              <option value="Philippines"> Philippines </option>
              <option value="Poland"> Poland </option>
              <option value="Portugal"> Portugal </option>
              <option value="Romania"> Romania </option>
              <option value="Russia"> Russia </option>
              <option value="Rwanda"> Rwanda </option>
              <option value="Saint Christopher And Nevis"> Saint Christopher And Nevis </option>
              <option value="Saint Lucia"> Saint Lucia </option>
              <option value="Saint Vincent And The Grenadines"> Saint Vincent And The Grenadines </option>
              <option value="Samoa"> Samoa </option>
              <option value="San Marino"> San Marino </option>
              <option value="Senegal"> Senegal </option>
              <option value="Serbia"> Serbia </option>
              <option value="Seychelles"> Seychelles </option>
              <option value="Sierra Leone"> Sierra Leone </option>
              <option value="Singapore"> Singapore </option>
              <option value="Slovakia"> Slovakia </option>
              <option value="Slovenia"> Slovenia </option>
              <option value="Solomon Islands"> Solomon Islands </option>
              <option value="South Africa"> South Africa </option>
              <option value="Spain"> Spain </option>
              <option value="Suriname"> Suriname </option>
              <option value="Swaziland"> Swaziland </option>
              <option value="Sweden"> Sweden </option>
              <option value="witzerland"> witzerland </option>
              <option value="Taiwan"> Taiwan </option>
              <option value="Tanzania"> Tanzania </option>
              <option value="Thailand"> Thailand </option>
              <option value="Tonga"> Tonga </option>
              <option value="Trinidad And Tobago"> Trinidad And Tobago </option>
              <option value="Turks And Caicos Islands"> Turks And Caicos Islands </option>
              <option value="Tuvalu"> Tuvalu </option>
              <option value="Uganda"> Uganda </option>
              <option value="United Arab Emirates"> United Arab Emirates </option>
              <option value="Uruguay"> Uruguay </option>
              <option value="USA"> USA </option>
              <option value="Vanuatu"> Vanuatu </option>
              <option value="Vatican City - Holy See"> Vatican City - Holy See </option>
              <option value="Vietnam"> Vietnam </option>
              <option value="Zambia"> Zambia </option>
              <option value="Zimbabwe"> Zimbabwe </option>


            </select>
          </div>
          <br />
           
          <div>
           Select Port Of Arrival  &nbsp;  &nbsp; &nbsp; :
            <select
              type="port_of_arrival"
              name="port_of_arrival"
              onChange={handleChange}
              value={values.port_of_arrival}
              onBlur={handleBlur}
              placeholder="port_of_arrival" >
              <option value=""> -Select Option- </option>
              <option value="Agra"> Agra  </option>
              <option value="Ahmedabad"> Ahmedabad </option>
              <option value="Ajmer"> Ajmer </option>
              <option value="Allahabad"> Allahabad </option>
            </select>
          </div>

          <br />
          <div>
            <label>
              Checkbox &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;:
              <input type="checkbox" />abc
              <input type="checkbox" />abc
              <input type="checkbox" />abc
            </label>
          </div>
          <br />

          <input type="submit" name="submit-form" id="submit-button" className="form-submit"

            value="Submit" onClick={postData} />

        </form>
      </div>
    </div>
  )
}


export default ApplyForm