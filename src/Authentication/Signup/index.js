import { useFormik } from "formik";
import React, { useState } from "react";

const FormikForm = () => {
  const [page, setPage] = useState();
  const { handleSubmit, handleChange, values, errors, isValid } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
  });
  console.log(errors, "errors", isValid, "isValid");

  // form 2
  const {
    handleSubmit: handleSubmit2,
    handleChange: handleChange2,
    values: values2,
    errors: errors2,
    isValid: isValid2,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex flex-col items-center text-center pt-16 ">
      {page === "SignUp" ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:w-[500px] md:w-[500px] w-[350px] text-xl gap-5 p-5"
        >
          <span className="font-medium">Register</span>
          <span className="font-medium">
            Please fill in the information below:
          </span>
          <input
            id="name"
            placeholder="Enter your first name"
            type="text"
            value={values.name}
            onChange={(event) => handleChange(event)}
            FormHelperTextProps={{ className: "!text-red-500" }}
            helperText={errors.name}
            className="placeholder-gray-400 font-[7px] border-2 hover:border-black px-2 h-12"
          />
          <input
            id="name"
            placeholder="Enter your last name"
            type="text"
            value={values.name}
            onChange={(event) => handleChange(event)}
            FormHelperTextProps={{ className: "!text-red-500" }}
            helperText={errors.name}
            className="placeholder-gray-400 font-[7px] border-2 hover:border-black px-2 h-12"
          />
          <input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={values.email}
            onChange={handleChange}
            FormHelperTextProps={{ className: "!text-red-500" }}
            helperText={errors.email}
            className="placeholder-gray-400 font-[7px] border-2 hover:border-black px-2 h-12"
          />
          <input
            id="password"
            placeholder="Enter your password"
            type="password"
            value={values.password}
            onChange={handleChange}
            FormHelperTextProps={{ className: "!text-red-500" }}
            helperText={errors.password}
            className="placeholder-gray-400 font-[7px] border-2 hover:border-black px-2 h-12"
          />
          <button
            disabled={!isValid}
            type="submit"
            className="bg-[#e3753d] py-2 font-medium"
          >
            Create My Account
          </button>
        </form>
      ) : (
        <>
          <form
            onSubmit={handleSubmit2}
            className="flex flex-col text-center lg:w-[500px] md:w-[500px] w-[350px] text-xl font-medium gap-5 p-5"
          >
            <span>Login</span>
            <span>Please enter your e-mail and password:</span>
            <input
              id="email"
              placeholder="Email"
              type="email"
              value={values2.email}
              onChange={handleChange2}
              FormHelperTextProps={{ className: "!text-red-500" }}
              helperText={errors2.email}
              className="placeholder-gray-400 font-[7px] border-2 hover:border-black px-2 h-12"
            />
            <div className="flex flex-col !relative ">
              <input
                id="password"
                placeholder="Password"
                type="password"
                value={values2.password}
                onChange={handleChange2}
                FormHelperTextProps={{ className: "!text-red-500" }}
                helperText={errors2.password}
                className="placeholder-gray-400 font-[7px] border-2 hover:border-black px-2 h-12"
              />
              <span className="text-[17px] cursor-pointer !absolute text-gray-400 !right-3 top-2 ">
                Forget password?
              </span>
            </div>
            <button
              disabled={!isValid2}
              type="submit"
              className="bg-[#e3753d] py-2 font-medium"
            >
              Log In
            </button>

            <span className="text-center text-gray-500">
              Don't have an account?
              <span
                onClick={() => setPage("SignUp")}
                variant="contained"
                className=" cursor-pointer text-black"
              >
                Create one
              </span>
            </span>
          </form>
        </>
      )}
    </div>
  );
};

export default FormikForm;
