import { Typography, Card } from "@material-tailwind/react";
import Layout from "./components/Layout";
import ServiceTickets from "./components/ServiceTickets";

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

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Mechanic Dashboard</h1>
      <div className="mb-6 font-bold mt-6">
        <p>Tickets</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTickets.map((ticket) => (
          <ServiceTickets key={ticket.ticketId} ticket={ticket} />
        ))}
      </div>
    </Layout>
  )
}
