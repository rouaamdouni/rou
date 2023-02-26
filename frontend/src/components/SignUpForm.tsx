import { useState } from "react";
import { useFormik } from "formik";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const initialValues: Values = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, handleChange, values, setErrors, errors } = useFormik({
    initialValues,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      // Set the submitting state to true
      setSubmitting(true);

      try {
        // Send the form data to the server
        const response = await fetch('http://localhost:5050/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        // Set the submitting state back to false
        setSubmitting(false);

        // Show a success message
        setStatus({ message: 'Form submitted successfully' });
      } catch (error) {
        // Set the submitting state back to false
        setSubmitting(false);

        // Show an error message
        // setStatus({ error: error.message });
      }
    },

  });

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col h-[100vh]"
      >
        <input
          className="w-[300px] border-[#D3D3D3] text-[13px] pl-[5px]	h-[38px] border-[1px] rounded-[3px] m-[5px]"
          type="text"
          placeholder="FirstName"
          value={values.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <input
          className="w-[300px] border-[#D3D3D3] text-[13px] pl-[5px]	h-[38px] border-[1px] rounded-[3px] m-[5px]"
          type="text"
          placeholder="LastName"

          value={values.lastName}
          name="lastName"
          onChange={handleChange}
        />
        
        <p>{errors.email}</p>
        <input
          className="w-[300px] border-[#D3D3D3] text-[13px] pl-[5px]	h-[38px] border-[1px] rounded-[3px] m-[5px]"
          type="email"
          placeholder="Email"
          value={values.email}
          name="email"
          onChange={handleChange}
        />
        <input
          className="w-[300px] border-[#D3D3D3] text-[13px] pl-[5px]	h-[38px] border-[1px] rounded-[3px] m-[5px]"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={values.password}
          name="password"
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="text-blue right-[270px] mt-[83px] text-[23px] fixed"
        >
          {!showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>

        <button
          type="submit"
          className="bg-[#fecda5] w-[130px] h-[40px] text-[#33a7b5] rounded-[3px] mt-[20px] shadow-[-5px_11px_11px_4px_rgba(213,213,213,0.75)]"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};
export default SignUpForm;