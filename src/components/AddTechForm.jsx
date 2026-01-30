import React, { useState } from 'react';

const AddTechForm = ({ onSubmit, onCancel, setShowTechForm }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    position: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // I think the backend api call would go here. 
    // Or maybe the backend call is in the grobal context?
    onSubmit({
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      position: formData.position.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      // Hmmm I gotta hash this as well.
      password: formData.password,
    });

    // reset form
    setFormData({
      firstName: '',
      lastName: '',
      position: '',
      phoneNumber: '',
      password: '',
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
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
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
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
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
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
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
            Create Technician
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTechForm
