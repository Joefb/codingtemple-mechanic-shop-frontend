import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="flex h-16 items-center justify-between px-6 border-b bg-white dark:bg-gray-900">
      {/* Left side - logo or app name */}
      <div className="text-xl font-bold">Mechanics-R-Us</div>

      {/* Right side - user actions */}
      {isAuthenticated && (
        <div className="flex items-center gap-4">
          <button className="p-2 rounded bg-blue-700 hover:bg-blue-600 text-white w-32">
            Logout
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <span>{user}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
