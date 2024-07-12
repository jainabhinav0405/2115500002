import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage.jsx';
// import ProductDetailsPage from './pages/ProductListPage.jsx';

function App() {
  console.log('App.jsx');
localStorage.setItem('token', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzgyMTE0LCJpYXQiOjE3MjA3ODE4MTQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE2OTJmMTdhLTA0YzAtNGRkMy1hOGFiLTliZjFkNTQ3OGNjOSIsInN1YiI6ImF5dXNoLnNoYWt5YV9jcy5haW1sMjFAZ2xhLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiR0xBIFVOSVZFUlNJVFkiLCJjbGllbnRJRCI6IjE2OTJmMTdhLTA0YzAtNGRkMy1hOGFiLTliZjFkNTQ3OGNjOSIsImNsaWVudFNlY3JldCI6IlVMRlVURldzaVNubVFaRVEiLCJvd25lck5hbWUiOiJBeXVzaCBTaGFreWEiLCJvd25lckVtYWlsIjoiYXl1c2guc2hha3lhX2NzLmFpbWwyMUBnbGEuYWMuaW4iLCJyb2xsTm8iOiIyMTE1NTAwMDM1In0.EuARkVpevtGIFvunhsYzluJwdDqDG-svXeMRfewCJFQ');
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<ProductListPage/>} />
        {/* <Route path="/product/:id" component={ProductDetailsPage} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;