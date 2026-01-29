const Sidebar = () => {
  return (
    <div className="flex flex-col h-full p-4">
      {/* Logo or brand at top */}
      <div className="mb-8 text-xl font-bold">Dashboard</div>

      {/* Navigation links */}
      <nav className="flex flex-col gap-2">
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
          🏠 Home
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          👥 Add Mechanic
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          ⚙️ Create Ticket
        </a>
      </nav>

      <div className="mt-auto">
        <a href="#" className="flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950 rounded-lg">
          🚪 Logout
        </a>
      </div>
    </div>
  )
}

export default Sidebar
