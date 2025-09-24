

## 🚀 Features

- Fetches live mock portfolio data from API:
https://raw.githubusercontent.com/aashishsingla567/gt-takehome/refs/heads/main/portfolios.json


- Displays a responsive asset table with:
- Symbol
- Quantity
- Average Price
- Current Price
- Total Value (quantity × currentPrice)
- P/L % ((currentPrice − avgPrice)/avgPrice × 100)
- Sorting by clicking on any column header.
- Search box to filter assets by symbol (case-insensitive).
- Responsive design:
- Multi-column layout on desktop
- Single-column stacked layout on mobile
- Styled with **CSS Modules**:
- Uses CSS custom properties for primary/secondary colors
- Hover effect on rows
- Accessibility:
- Semantic HTML
- `role="table"` and ARIA attributes
- Keyboard focus styles

---

## 📦 Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (bundler + dev server)
- [CSS Modules](https://github.com/css-modules/css-modules)

---

## 🛠️ Setup & Run Instructions

Clone the repo and install dependencies:

```
git clone <your-repo-url>
cd goalteller-portfolio
npm install
npm run dev
Then open the local dev server (usually http://localhost:5173).

To build for production:


npm run build
npm run preview


📂 Project Structure

src/
├── components/
│   ├── PortfolioSummary.tsx        # Main component
│   ├── PortfolioSummary.module.css # Styles (CSS Modules)
├── App.tsx                         # Renders the component
├── main.tsx                        # Entry point
✅ Evaluation Checklist


 API integration

 Table with calculations (Total Value, P/L%)

 Sorting by columns

 Search filter

 Responsive layout

 CSS variables + hover styles

 Accessibility (semantic roles, keyboard support)


