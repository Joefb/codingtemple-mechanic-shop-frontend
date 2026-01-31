import { Typography, Card } from "@material-tailwind/react";
import Layout from "./components/Layout";
import ServiceTickets from "./components/ServiceTickets";
import { useState } from "react";
import AddTechForm from "./components/AddTechForm";
import AddTicketForm from "./components/AddTicketForm";
import TechLoginForm from "./components/TechLoginForm";
import { useAuth } from "./contexts/AuthContext";

export default function App() {
  const mockTickets = [
    {
      customerId: 10045,
      ticketId: 102,
      workDescription: "Customer reports fords are total pieces of shit.\n- Check fuel pump pressure\n- Inspect spark plugs & coils\n- Run diagnostic scan",
      vehicle: "1999 Ford Crapus",
      serviceDate: "2026-02-03",
      price: 485.75,
    },
    {
      customerId: 10046,
      ticketId: 103,
      workDescription: "Oil change + tire rotation\nReplace cabin air filter\nTop off all fluids",
      vehicle: "2025 Toyota Camry",
      serviceDate: "2026-01-30",
      price: 128.50,
    },
  ];

  const mockTech = {
    firstName: "BadAss",
    lastName: "Bob",
    position: "tech",
    phoneNumber: "555-123-4567",
    password: "password"
  }

  const [showTechForm, setShowTechForm] = useState(false)
  const [showTicketForm, setShowTicketForm] = useState(false)
  const [showTechLoginForm, setShowTechLoginForm] = useState(true)
  const { isAuthenticated, invoiceData, getInvoices } = useAuth()


  const handleCreateTech = (mockTech) => {
    console.log('its working!')

    setShowTechForm(false)
  }

  return (
    <Layout setShowTechForm={setShowTechForm} setShowTicketForm={setShowTicketForm}>
      {!isAuthenticated && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg relative w-screen m-10">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowTechForm(false)}
            >
              &times;
            </button>
            <TechLoginForm />
          </div>
        </div>
      )}

      {showTechForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg relative w-screen m-10">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowTechForm(false)}
            >
              &times;
            </button>
            <AddTechForm setShowTechForm={setShowTechForm} />
          </div>
        </div>
      )}

      {
        showTicketForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded shadow-lg relative w-screen m-10">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowTicketForm(false)}
              >
                &times;
              </button>
              <AddTicketForm setShowTicketForm={setShowTicketForm} />
            </div>
          </div>
        )
      }

      {isAuthenticated && (
        <>
          <h1 className="text-3xl font-bold">Tech Dashboard</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
            onClick={() => getInvoices()}
          >
            Refresh Tickets
          </button>
          <div className="mb-6 font-bold mt-6">
            <p>Tickets</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {invoiceData.map((ticket) => (
              <ServiceTickets key={ticket.ticketId} ticket={ticket} />
            ))}
          </div>
        </>
      )}
    </Layout >
  )
}


// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//   {mockTickets.map((ticket) => (
//     <ServiceTickets key={ticket.ticketId} ticket={ticket} />
//   ))}

