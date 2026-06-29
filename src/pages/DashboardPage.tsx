import { useAuth } from '../context/AuthContext'

export default function DashboardPage() {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Navbar */}
      <header className="bg-green-700 text-white px-6 py-4 flex items-center justify-between">
        <h1 className="font-bold text-lg">KisaanView</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-green-200">{user?.name}</span>
          <button
            onClick={logout}
            className="text-sm bg-green-800 hover:bg-green-900 px-3 py-1 rounded-lg transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Body */}
      <main className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-6">
        <h2 className="text-xl font-bold text-gray-800">Welcome, {user?.name}!</h2>
        <p className="text-gray-500 text-sm">Your fields will appear here.</p>
      </main>

    </div>
  )
}