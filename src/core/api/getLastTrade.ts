"use server";

const getLastTrade = async (symbol: string) => {
  const res = await fetch(
    `https://financialmodelingprep.com/api/v4/batch-pre-post-market-trade/${symbol}?apikey=${process.env.FMP_TOKEN}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();

  return data?.[0];
};

export default getLastTrade;
