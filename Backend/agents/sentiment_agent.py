def analyze_sentiment():

    crypto_news = [
        "Bitcoin ETF demand rising",
        "Institutional investors buying BTC",
        "Market showing bullish momentum"
    ]

    positive_words = [
        "bullish",
        "rising",
        "buying",
        "growth"
    ]

    score = 0

    for news in crypto_news:

        for word in positive_words:

            if word.lower() in news.lower():
                score += 25

    if score >= 50:
        mood = "Bullish"
    else:
        mood = "Bearish"

    return {
        "score": score,
        "market_sentiment": mood,
        "news": crypto_news
    }