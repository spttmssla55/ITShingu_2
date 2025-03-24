import React from 'react';
import Header from './Header';  // Header 컴포넌트 import
import Meddle from './Meddle';  // Meddle 컴포넌트 import

const App = () => {
  return (
    <div>
      <Header />
      <Meddle /> {/* Header 밑에 Meddle 컴포넌트 추가 */}
      
    </div>
  );
};

export default App;