def orchestrate_agents():

    workflow = [

        {
            "step": 1,
            "agent": "Market Agent",
            "task": "Collected BTC, ETH, SOL market prices"
        },

        {
            "step": 2,
            "agent": "Sentiment Agent",
            "task": "Analyzed crypto market sentiment"
        },

        {
            "step": 3,
            "agent": "Risk Agent",
            "task": "Calculated portfolio risk exposure"
        },

        {
            "step": 4,
            "agent": "Scam Agent",
            "task": "Checked suspicious token indicators"
        },

        {
            "step": 5,
            "agent": "Trading Agent",
            "task": "Generated trading recommendation"
        }

    ]

    return workflow