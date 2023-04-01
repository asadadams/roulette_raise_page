const data = {
  leaderboardData:[
    { rank: 1, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 5000 },
    { rank: 2, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 4000 },
    { rank: 3, address: "0x1234567890abcdef1234567890abcdef1234567dd", amount: 3000 },
    { rank: 4, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 2000 },
    { rank: 5, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 1000 },
    { rank: 6, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 900 },
    { rank: 7, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 800 },
    { rank: 8, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 700 },
    { rank: 9, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 600 },
    { rank: 10, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 500 },
    { rank: 97, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 100 },
    { rank: 98, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 99 },
    { rank: 99, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 98 },
    { rank: 100, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 97 },
    { rank: 125, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 96 },
    { rank: 126, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 95 },
],
  levelsData:[
    {
        "level": 1,
        "max_raise": "1,000,000",
        "ratio": "25",
        "peg_per_level": "10,000",
        "pls_contribute": "250,000",
        "price_per_pls": "0.025",
        "usdc_contribute": "750,000",
        "price_per_eth": "0.0348",
        "filled": 100
    },
    {
        "level": 2,
        "max_raise": "2,000,000",
        "ratio": "25",
        "peg_per_level": "20,000",
        "pls_contribute": "500,000",
        "price_per_pls": "0.025",
        "usdc_contribute": "1,500,000",
        "price_per_eth": "0.0348",
        "filled": 100
    },
    {
        "level": 3,
        "max_raise": "3,000,000",
        "ratio": "25",
        "peg_per_level": "30,000",
        "pls_contribute": "750,000",
        "price_per_pls": "0.025",
        "usdc_contribute": "2,250,000",
        "price_per_eth": "0.0348",
        "filled": 25
    },
    {
        "level": 4,
        "max_raise": "4,000,000",
        "ratio": "25",
        "peg_per_level": "40,000",
        "pls_contribute": "1,000,000",
        "price_per_pls": "0.025",
        "usdc_contribute": "3,000,000",
        "price_per_eth": "0.0348",
        "filled": 0
    }
],
  yourTotalContributions: {
    pls: 210000,
    usdc: 0,
    total: 210000,
    peg: 1800,
    pegPrice: 0.65,
  },
  currentLevel: {
    level: 4,
    pegPrice: 0.8,
    nextLevelPegPrice: 0.9,
    total: 360000,
    ratio: [25, 75]
  },
  publicSaleDetails: {
    totalRaised: 21000000,
    pegPrice: 0.8,
    marketCap: 1200000,
    fdv: 2210000
  },

  user:{
    address:"0x1234567890abcdef1234567890abcdef1234567dd",
    contributed_pls: 210000,
    contributed_usdc: 700,
    contributed_amount: 28000,
    total: 112800,
    contributed_peg:0.65,
    pegPrice:1800
  },
  
  

};

module.exports = data;
