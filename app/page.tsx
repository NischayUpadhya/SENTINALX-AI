

"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import {
  ShieldAlert,
  TrendingUp,
  TrendingDown,
  Activity,
  BrainCircuit,
  Workflow,
  AlertTriangle,
  Send,
} from "lucide-react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function HomePage() {
  const [time, setTime] = useState("")

  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "Welcome to SentinelX AI. Market systems online.",
    },
  ])

  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)

  const [notification, setNotification] = useState(
    "⚠ High volatility detected in BTC market"
  )

  const [activities, setActivities] = useState([
    "[Market Agent] Monitoring BTC volatility...",
    "[Risk Engine] Portfolio analysis active...",
    "[Scam Detector] Scanning smart contracts...",
  ])

  const data = [
    { time: "1PM", price: 64000 },
    { time: "2PM", price: 64500 },
    { time: "3PM", price: 65000 },
    { time: "4PM", price: 64800 },
    { time: "5PM", price: 66000 },
    { time: "6PM", price: 67420 },
  ]

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString())
    }

    updateTime()

    const interval = setInterval(updateTime, 1000)

    const activityInterval = setInterval(() => {
      const logs = [
        "[Market Agent] BTC momentum increasing...",
        "[Sentiment AI] Reddit sentiment turning bullish...",
        "[Scam Detector] Suspicious token flagged...",
        "[Risk Engine] Risk score recalculated...",
        "[Trading Agent] HOLD strategy recommended...",
        "[AI Core] Neural market scan complete...",
      ]

      const randomLog =
        logs[Math.floor(Math.random() * logs.length)]

      setActivities((prev) => [randomLog, ...prev.slice(0, 4)])
    }, 3000)

    const notificationInterval = setInterval(() => {
      const alerts = [
        "⚠ High volatility detected in BTC market",
        "🚨 Suspicious token liquidity movement",
        "📈 Bullish breakout forming on ETH",
        "🛡 Risk engine recalculated exposure",
        "⚡ Trading agent switched to HOLD mode",
      ]

      const randomAlert =
        alerts[Math.floor(Math.random() * alerts.length)]

      setNotification(randomAlert)
    }, 5000)

    return () => {
      clearInterval(interval)
      clearInterval(activityInterval)
      clearInterval(notificationInterval)
    }
  }, [])

  const sendMessage = async () => {
  if (!input.trim()) return

  const userMessage = {
    sender: "USER",
    text: input,
  }

  setMessages((prev) => [...prev, userMessage])

  const currentInput = input

  setInput("")

  setTyping(true)

  try {

    const response = await fetch(
      "http://127.0.0.1:8000/run-ai"
    )

    const data = await response.json()

    const aiMessage = {
      sender: "AI",
      text: `
📊 Market Trend: ${data.market.trend}

💰 BTC: $${data.market.bitcoin}
💰 ETH: $${data.market.ethereum}
💰 SOL: $${data.market.solana}

🧠 Sentiment: ${data.sentiment.market_sentiment}

⚠ Risk Level: ${data.risk.risk_level}

🤖 Trading Decision: ${data.trade.action}

🚨 Scam Detection: ${data.scam_detection.scam_status}
`,
    }

    setMessages((prev) => [...prev, aiMessage])

  } catch (error) {

    const aiMessage = {
      sender: "AI",
      text: "Backend connection failed.",
    }

    setMessages((prev) => [...prev, aiMessage])
  }

  setTyping(false)
}

  return (
    <div className="flex bg-[#050816] text-white min-h-screen overflow-hidden">
      {/* SIDEBAR */}
      <div className="w-64 bg-[#0B1120] border-r border-cyan-400/10 fixed h-screen p-6 hidden lg:block">
        <h1 className="text-3xl font-bold text-cyan-400 mb-10">
          SentinelX AI
        </h1>

        <div className="space-y-4 text-slate-300">
          <p className="hover:text-cyan-400 cursor-pointer">Dashboard</p>
          <p className="hover:text-cyan-400 cursor-pointer">Market Analysis</p>
          <p className="hover:text-cyan-400 cursor-pointer">Risk Engine</p>
          <p className="hover:text-cyan-400 cursor-pointer">Scam Detection</p>
          <p className="hover:text-cyan-400 cursor-pointer">AI Logs</p>
        </div>
      </div>

      <main className="lg:ml-64 flex-1 p-6 lg:p-8">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 tracking-tight leading-tight">
              SentinelX AI
            </h1>

            <p className="text-slate-400 mt-3 text-lg">
              Autonomous Crypto Intelligence & Risk Platform
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 w-fit">
            <p className="text-slate-400 text-sm">Last Updated</p>

            <p className="text-cyan-400 font-semibold">{time}</p>
          </div>
        </div>

        {/* NOTIFICATION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 bg-orange-500/10 border border-orange-400/20 rounded-2xl px-6 py-4 flex items-center gap-3"
        >
          <AlertTriangle className="text-orange-400" />

          <p className="text-orange-300 font-medium">
            {notification}
          </p>
        </motion.div>

        {/* MARKET CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* BTC */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-6 shadow-[0_0_40px_rgba(0,255,255,0.1)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">Bitcoin</p>

                <h2 className="text-4xl font-bold mt-2">$67,420</h2>
              </div>

              <TrendingUp className="text-green-400" size={40} />
            </div>

            <p className="text-green-400 mt-4 font-semibold">
              Bullish Trend
            </p>
          </motion.div>

          {/* ETH */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-xl border border-purple-400/20 rounded-3xl p-6 shadow-[0_0_40px_rgba(168,85,247,0.1)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">Ethereum</p>

                <h2 className="text-4xl font-bold mt-2">$3,420</h2>
              </div>

              <Activity className="text-purple-400" size={40} />
            </div>

            <p className="text-yellow-400 mt-4 font-semibold">
              Neutral Trend
            </p>
          </motion.div>

          {/* SOL */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-xl border border-pink-400/20 rounded-3xl p-6 shadow-[0_0_40px_rgba(255,0,128,0.1)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">Solana</p>

                <h2 className="text-4xl font-bold mt-2">$182</h2>
              </div>

              <TrendingDown className="text-red-400" size={40} />
            </div>

            <p className="text-red-400 mt-4 font-semibold">
              Bearish Trend
            </p>
          </motion.div>
        </div>

        {/* CHART */}
        <div className="bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            BTC Live Market Trend
          </h2>

          <div className="w-full h-[320px]">
            <ResponsiveContainer width="99%" height={320}>
              <LineChart data={data}>
                <XAxis dataKey="time" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#00FFFF"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">
          {/* LEFT COLUMN */}
          <div className="xl:col-span-2 space-y-6">
            {/* WORKFLOW */}
            <div className="bg-white/5 backdrop-blur-xl border border-cyan-400/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <Workflow className="text-cyan-400" />

                <h2 className="text-3xl font-bold text-cyan-400">
                  Zynd Workflow Engine
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  "Market Agent",
                  "Sentiment AI",
                  "Scam Detector",
                  "Risk Agent",
                  "Trading Agent",
                ].map((agent, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-[#111827] border border-cyan-400/10 rounded-2xl p-4 text-center"
                  >
                    <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-3 animate-pulse"></div>

                    <p className="text-sm text-slate-300">{agent}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI ANALYSIS */}
            <div className="bg-white/5 backdrop-blur-xl border border-purple-400/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <BrainCircuit className="text-purple-400" />

                <h2 className="text-3xl font-bold text-purple-400">
                  AI Analysis Report
                </h2>
              </div>

              <div className="space-y-4 text-slate-300 leading-8">
                <p>• Bitcoin volatility increased by 12% in the last 4 hours.</p>

                <p>
                  • Social sentiment for Ethereum remains stable across Reddit and X.
                </p>

                <p>
                  • Scam probability for newly trending SOL token exceeds safe threshold.
                </p>

                <p>• Risk engine recommends reducing exposure by 18%.</p>

                <p>
                  • Trading agent suggests HOLD strategy until volatility stabilizes.
                </p>
              </div>
            </div>

            {/* TERMINAL LOGS */}
            <div className="bg-black border border-green-400/20 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-green-400 mb-6">
                AI Activity Logs
              </h2>

              <div className="space-y-4 font-mono text-sm">
                {activities.map((activity, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400"
                  >
                    {activity}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* CHATBOT */}
            <div className="bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-6">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                SentinelX AI Chat
              </h2>

              <div className="h-80 overflow-y-auto space-y-4 mb-4 pr-2">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-2xl max-w-[60%] ${
                      msg.sender === "USER"
                        ? "bg-cyan-400 text-black ml-auto"
                        : "bg-[#111827] text-white"
                    }`}
                  >
                    <p className="text-sm font-semibold mb-1">
                      {msg.sender}
                    </p>

                    <p className="whitespace-pre-line">
                      {msg.text}
                     </p>
                  </div>
                ))}

                {typing && (
                  <div className="bg-[#111827] text-white p-3 rounded-2xl w-fit">
                    <p className="animate-pulse">
                      AI is analyzing...
                    </p>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <input
                 onKeyDown={(e) => {
                 if (e.key === "Enter") sendMessage()
                  }}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask AI about market trends..."
                  className="flex-1 bg-[#111827] border border-cyan-400/20 rounded-xl px-4 py-3 outline-none text-white"
                />

                <button
                  onClick={sendMessage}
                  className="bg-cyan-400 hover:bg-cyan-300 transition px-5 rounded-xl text-black"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>

            {/* TRADE RECOMMENDATION */}
            <div className="bg-white/5 backdrop-blur-xl border border-green-400/20 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-green-400 mb-6">
                Trading Recommendation
              </h2>

              <div className="flex items-center justify-center h-40">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-40 h-40 rounded-full border-4 border-green-400 flex items-center justify-center text-5xl font-bold text-green-400 shadow-[0_0_40px_rgba(0,255,0,0.25)]"
                >
                  HOLD
                </motion.div>
              </div>
            </div>

            {/* RISK ANALYSIS */}
            <div className="bg-white/5 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">
                Risk Analysis
              </h2>

              <div className="w-full bg-[#111827] rounded-full h-6 overflow-hidden">
                <div className="bg-yellow-400 h-full w-[68%] rounded-full"></div>
              </div>

              <p className="text-slate-300 mt-4">
                Portfolio Risk Score: 68%
              </p>
            </div>

            {/* SCAM DETECTION */}
            <div className="bg-red-500/10 border border-red-400/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="text-red-400" />

                <h2 className="text-2xl font-bold text-red-400">
                  Scam Detection Alert
                </h2>
              </div>

              <div className="space-y-4 text-slate-300">
                <p>Suspicious smart contract activity detected.</p>

                <p>
                  Liquidity withdrawal patterns resemble rug-pull behavior.
                </p>

                <p className="text-red-400 font-semibold">
                  HIGH RISK TOKEN DETECTED
                </p>
              </div>
            </div>

            {/* ALERT CENTER */}
            <div className="bg-white/5 backdrop-blur-xl border border-orange-400/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="text-orange-400" />

                <h2 className="text-2xl font-bold text-orange-400">
                  Alert Center
                </h2>
              </div>

              <div className="space-y-4 text-slate-300">
                <p>• Extreme BTC volatility detected</p>

                <p>• Scam token monitoring enabled</p>

                <p>• Portfolio risk increased</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
