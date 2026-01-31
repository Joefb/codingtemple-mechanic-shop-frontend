import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';


const AddTechForm = ({ setShowTechForm }) => {
  const { registerUser } = useAuth();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    position: '',
    phone_number: '',
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

    await registerUser(
      formData.first_name,
      formData.last_name,
      formData.password,
      formData.phone_number,
      formData.position,
    )

    // reset form
    setFormData({
      first_name: '',
      last_name: '',
      password: '',
      phone_number: '',
      position: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">
          Add New Technician
        </h2>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* first name */}
          <div>
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="
                w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              "
              placeholder="John"
            />
          </div>

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
              placeholder="Doe"
            />
          </div>

          {/* position */}
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
              Position *
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="
                w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              "
              placeholder="Lead Technician / Mechanic"
            />
          </div>

          {/* phone Number */}
          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="
                w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              "
              placeholder="916-555-1234"
            />
          </div>
        </div>

        {/* password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Initial Password *
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
            placeholder="Temporary password (min 6 characters)"
          />
          <p className="mt-1 text-xs text-gray-500">
            Technician should change this on first login.
          </p>
        </div>

        {/* buttons */}
        <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={() => setShowTechForm(false)}
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
            Create Tech
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTechForm
