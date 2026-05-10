import {
  LayoutDashboard,
  BrainCircuit,
  ShieldAlert,
  Wallet,
  Bell,
  LineChart,
} from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#111827]/80 backdrop-blur-xl border-r border-white/10 p-6 fixed left-0 top-0">

      <h1 className="text-3xl font-bold text-cyan-400 mb-12">
        SentinelX
      </h1>

      <div className="space-y-6 text-slate-300">

        <div className="flex items-center gap-3 hover:text-cyan-400 transition cursor-pointer">
          <LayoutDashboard size={20} />
          Dashboard
        </div>

        <div className="flex items-center gap-3 hover:text-cyan-400 transition cursor-pointer">
          <BrainCircuit size={20} />
          AI Agents
        </div>

        <div className="flex items-center gap-3 hover:text-cyan-400 transition cursor-pointer">
          <LineChart size={20} />
          Market Intelligence
        </div>

        <div className="flex items-center gap-3 hover:text-cyan-400 transition cursor-pointer">
          <ShieldAlert size={20} />
          Risk Monitor
        </div>

        <div className="flex items-center gap-3 hover:text-cyan-400 transition cursor-pointer">
          <Wallet size={20} />
          Portfolio
        </div>

        <div className="flex items-center gap-3 hover:text-cyan-400 transition cursor-pointer">
          <Bell size={20} />
          Alerts
        </div>

      </div>
    </div>
  )
}