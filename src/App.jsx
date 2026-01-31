import { Typography, Card } from "@material-tailwind/react";
import Layout from "./components/Layout";
import ServiceTickets from "./components/ServiceTickets";
import { useState } from "react";
import AddTechForm from "./components/AddTechForm";
import AddTicketForm from "./components/AddTicketForm";
import TechLoginForm from "./components/TechLoginForm";
import TechProfile from "./components/TechProfile";
import { useAuth } from "./contexts/AuthContext";

export default function App() {

  const [showTechForm, setShowTechForm] = useState(false)
  const [showTicketForm, setShowTicketForm] = useState(false)
  const [showTechProfile, setShowTechProfile] = useState(false)
  const { isAuthenticated, invoiceData, getInvoices } = useAuth()

  return (
    <Layout setShowTechForm={setShowTechForm} setShowTicketForm={setShowTicketForm} setShowTechProfile={setShowTechProfile}>
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

      {showTechProfile && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg relative w-screen m-10">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowTechProfile(false)}
            >
              &times;
            </button>
            <TechProfile setShowTechProfile={setShowTechProfile} />
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
            {invoiceData.map((ticket, index) => (
              <ServiceTickets key={index} ticket={ticket} />
            ))}
          </div>
        </>
      )}
    </Layout >
  )
}
