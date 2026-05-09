def detect_scam():

    suspicious_liquidity = False
    anonymous_team = True

    if suspicious_liquidity or anonymous_team:
        risk = "High Scam Risk"
    else:
        risk = "Safe"

    return {
        "scam_status": risk
    }