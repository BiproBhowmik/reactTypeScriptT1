import React, { createContext } from 'react';

import FormSection from './components/formSection';
import CardSection from './components/cardSection';

import CompA from './components/compA';

const FName = createContext<string | null>(null);

function App() {
  return (
    <>
      <FormSection />
      <CardSection />
    
    {/* <FName.Provider value="Joy">
      <CompA />
    </FName.Provider> */}
    </>
  );
}

export default App;
export {FName};
