import React, { useState } from "react";
import { signUp } from "../../utilities/users-service";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { error, confirm, ...data } = formData;
      const user = await signUp(data);
      this.props.setUser(user);
    } catch {
      setFormData({ ...formData, error: "Sign Up Failed - Try Again" });
    }
  };

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div className="flex justify-center items-center">
      <div className="form-container">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2 className="flex justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-600 text-xl pb-5">
            Create Account
          </h2>
          <label className="block text-gray-700 font-bold mb-2 pt-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className="block text-gray-700 font-bold mb-2 pt-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="block text-gray-700 font-bold mb-2 pt-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label className="block text-gray-700 font-bold mb-2 pt-2">
            Confirm
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />
          <div className="flex items-center justify-center pt-4">
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-300 to-blue-600 group-hover:from-purple-300 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              type="submit"
              disabled={disable}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                SIGN UP
              </span>
            </button>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  );
}
