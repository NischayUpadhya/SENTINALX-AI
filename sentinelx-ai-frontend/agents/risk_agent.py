def calculate_risk(trend, sentiment):

    if trend == "Bearish" and sentiment == "Bearish":
        risk = "High"

    elif trend == "Bullish" and sentiment == "Bullish":
        risk = "Low"

    else:
        risk = "Medium"

    return {
        "risk_level": risk
    }