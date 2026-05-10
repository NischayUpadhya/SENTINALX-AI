from services.coingecko_service import get_market_prices

def analyze_market():

    data = get_market_prices()

    btc_price = data["bitcoin"]["usd"]
    eth_price = data["ethereum"]["usd"]
    sol_price = data["solana"]["usd"]

    if btc_price > 90000:
        trend = "Bullish"
    elif btc_price > 70000:
        trend = "Neutral"
    else:
        trend = "Bearish"

    return {
        "bitcoin": btc_price,
        "ethereum": eth_price,
        "solana": sol_price,
        "trend": trend
    }