# Paradise Nursery Shopping Application

A responsive online houseplant shop built with React, Redux Toolkit, React Router, and CSS.

## Features
- Landing page with Paradise Nursery name and Get Started button
- About Us company information
- 18 plants across three categories
- Product images, names, descriptions, and prices
- Add-to-Cart buttons that disable after a product is added
- Shared navigation with Home, Plants, Cart, and a dynamic cart count
- Redux Toolkit reducers: `addItem`, `removeItem`, and `updateQuantity`
- Quantity controls, item subtotals, grand total, and checkout Coming Soon message
- Responsive desktop and mobile layout

## Run locally
1. Install Node.js LTS.
2. Extract this ZIP and open the `paradise-nursery` folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown in the terminal.

## Main files
- `src/App.jsx`
- `src/App.css`
- `src/components/AboutUs.jsx`
- `src/features/CartSlice.jsx`
- `src/pages/ProductList.jsx`
- `src/pages/CartItem.jsx`
