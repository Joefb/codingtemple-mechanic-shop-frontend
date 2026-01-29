import { Typography, Card } from "@material-tailwind/react";
import Layout from "./components/Layout";
import ServiceTickets from "./components/ServiceTickets";

export default function App() {
  const mockTickets = [
    {
      customerId: 10045,
      workDescription: "Customer reports intermittent stalling.\n- Check fuel pump pressure\n- Inspect spark plugs & coils\n- Run diagnostic scan",
      vin: "1HGCM82633A004352",
      serviceDate: "2026-02-03",
      price: 485.75,
    },
    {
      customerId: 10046,
      workDescription: "Oil change + tire rotation\nReplace cabin air filter\nTop off all fluids",
      vin: "5XYZHDAG1BG123456",
      serviceDate: "2026-01-30",
      price: 128.50,
    },
    // ... more tickets
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div>
        Hello this is a test
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTickets.map((ticket) => (
          <ServiceTickets key={ticket.customerId} ticket={ticket} />
        ))}
      </div>
    </Layout>
  )
}
