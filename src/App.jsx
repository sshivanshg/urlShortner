import { Children, useState } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from "./layouts/app-layout";


// Route configuration
const router  = createBrowserRouter(
  {
    element:<AppLayout/>,
    Children:[]
  }
)

function App() {

  return <div className='yo'>Yo shivansh</div>

}

export default App;

