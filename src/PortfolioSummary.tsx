import React, { useEffect, useState } from "react";
import styles from "./PortfolioSummary.module.css";

type Asset = {
  symbol: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
};

type EnrichedAsset = Asset & {
  totalValue: number;
  plPercent: number;
};

const PortfolioSummary: React.FC = () => {
  const [assets, setAssets] = useState<EnrichedAsset[]>([]);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<keyof EnrichedAsset>("symbol");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/aashishsingla567/gt-takehome/refs/heads/main/portfolios.json"
    )
      .then((res) => res.json())
      .then((data: Asset[]) => {
        const enriched = data.map((a) => ({
          ...a,
          totalValue: a.quantity * a.currentPrice,
          plPercent: ((a.currentPrice - a.avgPrice) / a.avgPrice) * 100,
        }));
        setAssets(enriched);
      });
  }, []);

  const filtered = assets.filter((a) =>
    a.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    const valA = a[sortKey];
    const valB = b[sortKey];
    if (typeof valA === "number" && typeof valB === "number") {
      return sortAsc ? valA - valB : valB - valA;
    }
    return sortAsc
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  const handleSort = (key: keyof EnrichedAsset) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search by symbol.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search}
      />
      <table role="table" className={styles.table}>
        <thead>
          <tr>
            <th onClick={() =>handleSort("symbol")}>Symbol</th>
            <th onClick={() => handleSort("quantity")}>Quantity</th>
            <th onClick={() =>handleSort("avgPrice")}>Avg. Price</th>
            <th onClick={() =>handleSort("currentPrice")}>Current Price</th>
            <th onClick={() => handleSort("totalValue")}>Total Value</th>
            <th onClick={() => handleSort("plPercent")}>P/L (%)</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((a) => (
            <tr key={a.symbol}>
              <td data-label="Symbol">{a.symbol}</td>
              <td data-label="Quantity">{a.quantity}</td>
              <td data-label="Avg. Price">{a.avgPrice.toFixed(2)}</td>
              <td data-label="Current Price">{a.currentPrice.toFixed(2)}</td>
              <td data-label="Total Value">{a.totalValue.toFixed(2)}</td>
              <td data-label="P/L (%)" className={a.plPercent >= 0 ? styles.profit : styles.loss}>
                {a.plPercent.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioSummary;
