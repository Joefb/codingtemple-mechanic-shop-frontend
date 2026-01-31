import { useState } from 'react';

const ServiceTicketCard = ({ ticket }) => {
  const {
    customer_id,
    date,
    status,
    total_cost,
    vehicle,
  } = ticket;

  const [startWorkButton, setStartWorkButton] = useState("idle");

  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    : 'Not scheduled';

  const formattedPrice = total_cost != null
    ? `$${Number(total_cost).toFixed(2)}`
    : '—';

  return (
    <div className="
      bg-white 
      border border-gray-200 
      rounded-lg 
      shadow-sm 
      hover:shadow-md 
      transition-shadow 
      duration-200 
      overflow-hidden
    ">
      {/* Header / Top bar */}
      <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex justify-between items-center">
        <div className="font-medium text-gray-800">
          Customer ID #{customer_id}
        </div>
        <div className="text-sm font-semibold text-blue-600">
          {formattedPrice}
        </div>
      </div>

      {/* Main content */}
      <div className="p-5 space-y-4">

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">
              Service Date
            </div>
            <div className="text-gray-800">
              {formattedDate}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">
              Make & Model
            </div>
            <div className="font-mono text-gray-800">
              {vehicle || '—'}
            </div>
          </div>
        </div>

        {/* Work Description */}
        <div>
          <div className="text-gray-500 text-xs uppercase tracking-wide mb-1.5">
            Work Description
          </div>
          <div className="
            text-gray-800 
            text-sm 
            leading-relaxed 
            whitespace-pre-line 
            max-h-32 
            overflow-y-auto
            pr-2
          ">
            {status || 'No description provided.'}
          </div>
        </div>
      </div>

      {/* Optional footer with actions */}
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-200 flex justify-end gap-3 text-sm">
        <button className="
          px-4 py-1.5 
          text-gray-700
          hover:bg-gray-200 
          rounded-md 
          transition-colors
        ">
          Complete Ticket
        </button>

        <button
          onClick={() => setStartWorkButton("inprogress")}
          className={`
        px-4 py-1.5
        ${startWorkButton === "inprogress" ? "bg-green-500 hover:bg-green-600" : "bg-blue-600 hover:bg-blue-700"}
        text-white
        rounded-md
        transition-colors
      `}
        >
          {startWorkButton === "inprogress" ? "In Progress" : "Start Work"}
        </button>
      </div>
    </div>
  );
};

export default ServiceTicketCard;
