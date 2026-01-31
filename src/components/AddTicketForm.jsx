import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const AddTicketForm = ({ setShowTicketForm }) => {
  const { createInvoice } = useAuth();
  const [formData, setFormData] = useState({
    customer_id: '',
    date: '',
    status: '',
    total_cost: '',
    vehicle: '',
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

    await createInvoice(
      formData.customer_id.trim(),
      formData.date.trim(),
      formData.status.trim(),
      formData.total_cost.trim(),
      formData.vehicle.trim(),
    )

    // reset form
    setFormData({
      customer_id: '',
      date: '',
      status: '',
      total_cost: '',
      vehicle: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">
          Add New Ticket
        </h2>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* custumer id */}
          <div>
            <label htmlFor="customer_id" className="block text-sm font-medium text-gray-700 mb-1">
              Customer Id *
            </label>
            <input
              type="text"
              id="customer_id"
              name="customer_id"
              value={formData.customer_id}
              onChange={handleChange}
              className="
                w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              "
              placeholder="1234"
            />
          </div>

          {/* date */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date *
            </label>
            <input
              type="text"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="
                w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              "
              placeholder="12-26-2024"
            />
          </div>

          {/* vehicle */}
          <div>
            <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Year/Make/Model *
            </label>
            <input
              type="vehicle"
              id="vehicle"
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              className="
              w-full px-4 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            "
              placeholder="1999 Ford Taurus"
            />
          </div>


          {/* total cost */}
          <div>
            <label htmlFor="total_cost" className="block text-sm font-medium text-gray-700 mb-1">
              Total Cost *
            </label>
            <input
              type="tel"
              id="total_cost"
              name="total_cost"
              value={formData.total_cost}
              onChange={handleChange}
              className="
                w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              "
              placeholder="210.44"
            />
          </div>
        </div>

        {/* status */}
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Work Details *
          </label>
          <textarea
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="
                w-full h-56 px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              "
            placeholder={`Customer reports strange noise when accelerating. \n- Check brakes\n- Check tire balance`}
          />
        </div>

        {/* buttons */}
        <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={() => setShowTicketForm(false)}
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
            Create Ticket
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTicketForm
