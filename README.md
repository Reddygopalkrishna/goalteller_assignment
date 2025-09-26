
---

## 🛠️ How to Run the Project

1. Clone the repository  
   git clone https://github.com/Reddygopalkrishna/goalteller_assignment.git  
   cd goalteller-portfolio  

2. Install dependencies  
   npm install  

3. Run in development mode  
   npm run dev  
   This will start the Vite development server (usually at http://localhost:5173).  

4. Build for production  
   npm run build  

5. Preview the production build  
   npm run preview  

---

## 📂 Project Structure

src/  
├── components/  
│   ├── PortfolioSummary.tsx        # Main portfolio component  
│   ├── PortfolioSummary.module.css # Styles (CSS Modules)  
├── App.tsx                         # Renders PortfolioSummary  
├── main.tsx                        # Entry point  

---

## ✅ Features Implemented

- Fetches portfolio data from mock API  
- Displays assets with calculations (Total Value, P/L %)  
- Sorting by clicking column headers  
- Search filter by symbol (case-insensitive)  
- Responsive design:  
  - Multi-column layout on desktop  
  - Single-column stacked layout on mobile  
- Styled using CSS Modules + CSS custom properties  
- Hover effect on rows  
- Accessibility:  
  - Semantic HTML  
  - ARIA roles for table  
  - Keyboard focus styles  
- **Optional Bonus**: Asset allocation chart (Recharts)  

---


