import React from 'react';
import Header from './components/Header';
import ItemsComponent from './components/ItemsComponent';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        {/* Otros componentes pueden ir aquí */}
        <ItemsComponent />
      </div>
    </div>
  );
}

export default App;
