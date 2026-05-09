def execute_trade(risk):

    if risk == "High":
        action = "SELL"

    elif risk == "Low":
        action = "BUY"

    else:
        action = "HOLD"

    return {
        "action": action
    }