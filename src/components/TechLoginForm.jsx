import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

// const TechLoginForm = ({ setShowTicketForm }) => {
const TechLoginForm = () => {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    last_name: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await login(formData.last_name, formData.password);

    setFormData({
      last_name: '',
      password: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">
          Tech Login
        </h2>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* last name */}
          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="
                w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              "
              placeholder="Smith"
            />
          </div>

          {/* password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="
                w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              "
              placeholder="********"
            />
          </div>
        </div>

        {/* buttons */}
        <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
          <button
            type="button"
            // onClick={() => setShowTechLoginForm(false)}
            className="
              px-5 py-2.5 
              text-gray-700 
              bg-white 
              border border-gray-300 
              rounded-md 
              hover:bg-gray-50 
              transition-colors
            "
          >
            Cancel
          </button>

          <button
            type="submit"
            className="
              px-5 py-2.5 
              bg-blue-600 
              text-white 
              rounded-md 
              hover:bg-blue-700 
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            "
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default TechLoginForm

