const Sidebar = ({ setShowTechForm, setShowTicketForm, setShowTechProfile }) => {
  return (
    <div className="flex flex-col h-full p-4">
      {/* Logo or brand at top */}
      <div className="mb-8 text-xl font-bold">Dashboard</div>

      {/* Navigation links */}
      <nav className="flex flex-col gap-2">
        <a href="#" className="flex
          items-center
          gap-3 
          px-3 
          py-2 
          rounded-lg 
          bg-gray-100 
          dark:bg-gray-800"
          onClick={() => setShowTechProfile(true)
          }>
          🏠 Profile
        </a>
        <a href="#" className="
          flex 
          items-center 
          gap-3 
          px-3 
          py-2
          rounded-l
          hover:bg-gray-100
          dark:hover:bg-gray-800"
          onClick={() => setShowTechForm(true)
          }>
          👥 Add Tech
        </a>
        <a href="#" className="
          flex
          items-center
          gap-3 
          px-3 
          py-2 
          rounded-lg 
          hover:bg-gray-100 
          dark:hover:bg-gray-800"
          onClick={() => setShowTicketForm(true)
          }>
          ⚙️ Create Ticket
        </a>
      </nav>
    </div>
  )
}

export default Sidebar
