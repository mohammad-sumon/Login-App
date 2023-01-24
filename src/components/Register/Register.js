import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {createUser} = useContext(AuthContext);

  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.log(error))
  };

  return (
    <div>
      <div className="mx-8 lg:mx-0">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-purple-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-solid">
              Sign Up
            </h1>
            <form onSubmit={handleSubmit(handleSignUp)} className="mt-6">
              <div className="mb-2">
                <label
                  for="name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Name
                </label>
                <input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  placeholder="Name"
                  type="text"
                  className="required block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.name && (
                  <p className="text-red-600">{errors.name?.message}</p>
                )}
              </div>
              <div className="mb-2">
                <label
                  for="username"
                  className="block text-sm font-semibold text-gray-800"
                >
                  User Name
                </label>
                <input
                  {...register("username", {
                    required: "User name is required",
                  })}
                  placeholder="User name"
                  type="text"
                  className="required block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.username && (
                  <p className="text-red-600">{errors.username?.message}</p>
                )}
              </div>
              <div className="mb-2">
                <label
                  for="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  placeholder="Email"
                  type="email"
                  className="required block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="mb-2">
                <label
                  for="dateofbirth"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Date of Birth
                </label>
                <input
                  {...register("dob", {
                    required: "Date of Birth is required",
                  })}
                  placeholder="Date of Birth"
                  type="date"
                  className="required block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.dob && (
                  <p className="text-red-600">{errors.dob?.message}</p>
                )}
              </div>
              <div className="mb-2">
                <label
                  for="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                  placeholder="Password"
                  type="password"
                  className="required block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
              <div className="mt-6">
                <input
                  value="Sign Up"
                  type="submit"
                  className="btn w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                />
              </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
              {" "}
              Already have an account?{" "}
              <Link
                to="/login"
                href="#"
                className="font-medium text-purple-600 hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
