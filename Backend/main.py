from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from agents.market_agent import analyze_market
from agents.sentiment_agent import analyze_sentiment
from agents.risk_agent import calculate_risk
from agents.trading_agent import execute_trade
from agents.scam_agent import detect_scam
from services.orchestrator import orchestrate_agents
from datetime import datetime

from services.ai_service import generate_ai_analysis

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():

    return {
        "message": "SentinelX AI Backend Running"
    }

@app.get("/run-ai")
def run_ai():

    # Agent 1 → Market Analysis
    market = analyze_market()

    # Agent 2 → Sentiment Analysis
    sentiment = analyze_sentiment()

    # Agent 3 → Risk Analysis
    risk = calculate_risk(
        market["trend"],
        sentiment["market_sentiment"]
    )

    # Agent 4 → Trading Decision
    trade = execute_trade(
        risk["risk_level"]
    )

    # Agent 5 → Scam Detection
    scam = detect_scam()

    # Activity Logs
    logs = [
        "Market Agent analyzed BTC, ETH, SOL prices",
        "Sentiment Agent detected market momentum",
        "Risk Agent calculated exposure",
        "Trading Agent generated recommendation",
        "Scam Agent analyzed project security"
    ]
    # Zynd Orchestration Workflow

    workflow = orchestrate_agents()

    current_time = datetime.now().strftime("%H:%M:%S")

    # AI Report
    ai_analysis = generate_ai_analysis(
        market,
        sentiment,
        risk,
        trade,
        scam
    )

    return {
        "market": market,
        "sentiment": sentiment,
        "risk": risk,
        "trade": trade,
        "scam_detection": scam,
        "logs": logs,
        "zynd_workflow": workflow,
        "last_updated": current_time,
        "ai_analysis": ai_analysis
    }