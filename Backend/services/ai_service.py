def generate_ai_analysis(
    market,
    sentiment,
    risk,
    trade,
    scam
):

    analysis = f"""
AI Market Analysis Report

Bitcoin Price: ${market['bitcoin']}
Ethereum Price: ${market['ethereum']}
Solana Price: ${market['solana']}

Market Trend:
{market['trend']}

Sentiment:
{sentiment['market_sentiment']}

Risk Level:
{risk['risk_level']}

Trading Decision:
{trade['action']}

Scam Detection:
{scam['scam_status']}

Final Recommendation:
The autonomous agents analyzed crypto market conditions,
investor sentiment, and security indicators before generating
a trading recommendation.
"""

    return analysis