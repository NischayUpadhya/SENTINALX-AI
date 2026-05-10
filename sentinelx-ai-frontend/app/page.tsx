"use client"

import { useEffect, useState } from "react"
import Sidebar from "@/components/ui/sidebar"
import { motion } from "framer-motion"
import {
  ShieldAlert,
  TrendingUp,
  TrendingDown,
  Activity,
  BrainCircuit,
  Workflow,
  AlertTriangle,
} from "lucide-react"

export default function HomePage() {

  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString())
    }

    updateTime()

    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex bg-[#050816] text-white min-h-screen overflow-hidden">

      <Sidebar />

      <main className="ml-64 flex-1 p-8">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-10">

          <div>
            <h1 className="text-6xl font-bold text-cyan-400 tracking-tight">
              SentinelX AI
            </h1>

            <p className="text-slate-400 mt-3 text-lg">
              Autonomous Crypto Intelligence & Risk Platform
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
            <p className="text-slate-400 text-sm">
              Last Updated
            </p>
            <p className="text-cyan-400 font-semibold">
              {time}
            </p>

            
            
          </div>

        </div>

        {/* MARKET CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* BTC */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 border border-cyan-400/20 rounded-3xl p-6 shadow-[0_0_40px_rgba(0,255,255,0.1)]"
          >

            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-400">
                  Bitcoin
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  $67,420
                </h2>
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
            className="bg-white/5 border border-purple-400/20 rounded-3xl p-6 shadow-[0_0_40px_rgba(168,85,247,0.1)]"
          >

            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-400">
                  Ethereum
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  $3,420
                </h2>
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
            className="bg-white/5 border border-pink-400/20 rounded-3xl p-6 shadow-[0_0_40px_rgba(255,0,128,0.1)]"
          >

            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-400">
                  Solana
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  $182
                </h2>
              </div>

              <TrendingDown className="text-red-400" size={40} />

            </div>

            <p className="text-red-400 mt-4 font-semibold">
              Bearish Trend
            </p>

          </motion.div>

        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">

          {/* LEFT COLUMN */}

          <div className="xl:col-span-2 space-y-6">

            {/* ZYND WORKFLOW */}

            <div className="bg-white/5 border border-cyan-400/10 rounded-3xl p-8">

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
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="bg-[#111827] border border-cyan-400/10 rounded-2xl p-4 text-center"
                  >

                    <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-3 animate-pulse"></div>

                    <p className="text-sm text-slate-300">
                      {agent}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

            {/* AI ANALYSIS */}

            <div className="bg-white/5 border border-purple-400/10 rounded-3xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <BrainCircuit className="text-purple-400" />

                <h2 className="text-3xl font-bold text-purple-400">
                  AI Analysis Report
                </h2>

              </div>

              <div className="space-y-4 text-slate-300 leading-8">

                <p>
                  • Bitcoin volatility increased by 12% in the last 4 hours.
                </p>

                <p>
                  • Social sentiment for Ethereum remains stable across Reddit and X.
                </p>

                <p>
                  • Scam probability for newly trending SOL token exceeds safe threshold.
                </p>

                <p>
                  • Risk engine recommends reducing exposure by 18%.
                </p>

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

                <p className="text-green-400">
                  [Market Agent] BTC volatility spike detected...
                </p>

                <p className="text-cyan-400">
                  [Sentiment AI] Reddit sentiment turned bearish...
                </p>

                <p className="text-yellow-400">
                  [Risk Agent] Portfolio risk exceeds threshold...
                </p>

                <p className="text-red-400">
                  [Scam Detector] Suspicious liquidity movement found...
                </p>

                <p className="text-purple-400">
                  [Trading Agent] HOLD recommendation issued...
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <div className="space-y-6">

            {/* TRADE RECOMMENDATION */}

            <div className="bg-white/5 border border-green-400/20 rounded-3xl p-8">

              <h2 className="text-2xl font-bold text-green-400 mb-6">
                Trading Recommendation
              </h2>

              <div className="flex items-center justify-center h-40">

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="w-40 h-40 rounded-full border-4 border-green-400 flex items-center justify-center text-5xl font-bold text-green-400 shadow-[0_0_40px_rgba(0,255,0,0.25)]"
                >

                  HOLD

                </motion.div>

              </div>

            </div>

            {/* RISK ANALYSIS */}

            <div className="bg-white/5 border border-yellow-400/20 rounded-3xl p-8">

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

                <p>
                  Suspicious smart contract activity detected.
                </p>

                <p>
                  Liquidity withdrawal patterns resemble rug-pull behavior.
                </p>

                <p className="text-red-400 font-semibold">
                  HIGH RISK TOKEN DETECTED
                </p>

              </div>

            </div>

            {/* ALERT CENTER */}

            <div className="bg-white/5 border border-orange-400/20 rounded-3xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <AlertTriangle className="text-orange-400" />

                <h2 className="text-2xl font-bold text-orange-400">
                  Alert Center
                </h2>

              </div>

              <div className="space-y-4 text-slate-300">

                <p>
                  • Extreme BTC volatility detected
                </p>

                <p>
                  • Scam token monitoring enabled
                </p>

                <p>
                  • Portfolio risk increased
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  )
}