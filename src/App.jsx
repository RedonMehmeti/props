import { useState } from 'react'
import './App.css'
import Welcome from './Welcome';
import BasicPlan from './BasicPlan';
import ProPlan from './ProPlan';
function App() {
  

  return (
    <>
      <BasicPlan qmimi="30$" download="30" VideoSupport="Yes" Sistemi="Android" />
      <ProPlan qmimi="90$" download="30" VideoSupport="No" Sistemi="Samsung" />
   
      
    </>
  )
}

export default App
