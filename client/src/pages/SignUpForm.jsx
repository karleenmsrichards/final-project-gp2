import React, { useEffect, useState } from "react";
import useAuth from "../customHooks/useAuth";

const SignUpForm = () => {
  const { user } = useAuth();
  ///////////remove before committing
  console.log(user);

  const [signUpData, setSignUpData] = useState({
    firstName: null,
    surname: null,
    businessName: null,
    email: null,
    phoneNumber: null,
    address: null,
    city: null,
    country: null,
    profession: null,
    yearsOfExperience: null,
    language: null,
    maxSessionLength: null,
    maxGuestsPerSession: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Form:", signUpData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (user) {
      setSignUpData((prevData) => ({
        ...prevData,
        firstName: user.given_name,
        surname: user.family_name,
        email: user.email,
      }));
    }
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Sign Up as a Provider</legend>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            defaultValue={signUpData.firstName}
            disabled
            ////////////// add required
          />
        </label>
        <label>
  Surname:
          <input
            type="text"
            name="surname"
            defaultValue={signUpData.surname}
            disabled
          />
        </label>

        <label>
  Business Name:
          <input
            type="text"
            name="businessName"
            value={signUpData.businessName}
            onChange={handleChange}
          />
        </label>

        <label>
  Email:
          <input
            type="email"
            name="email"
            defaultValue={signUpData.email}
            disabled
          />
        </label>

        <label>
  Phone Number:
          <input
          ////////////// Reviewer please determine if this type is suitable ///////
            type="text"
            name="phoneNumber"
            value={signUpData.phoneNumber}
            onChange={handleChange}
          />
        </label>

        <label>
  Address:
          <input
            type="text"
            name="address"
            value={signUpData.address}
            onChange={handleChange}
          />
        </label>

        <label>
  City:
          <input
            type="text"
            name="city"
            value={signUpData.city}
            onChange={handleChange}
          />
        </label>
        <label>
  Country:
          <input
            type="text"
            name="country"
            value={signUpData.country}
            onChange={handleChange}
          />
        </label>

        <label>
  Profession:
          <input
            type="text"
            name="profession"
            value={signUpData.profession}
            onChange={handleChange}
          />
        </label>

        <label>
  Years of Experience:
          <input
            type="number"
            name="yearsOfExperience"
            value={signUpData.yearsOfExperience}
            onChange={handleChange}
          />
        </label>

        <label>
  Language:
          <input
            type="text"
            name="language"
            value={signUpData.language}
            onChange={handleChange}
          />
        </label>

        <label>
  Maximum Length of Session:
          <input
            type="text"
            name="maxSessionLength"
            value={signUpData.maxSessionLength}
            onChange={handleChange}
          />
        </label>

        <label>
  Maximum Guests per Session:
          <input
            type="number"
            name="maxGuestsPerSession"
            value={signUpData.maxGuestsPerSession}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default SignUpForm;
