import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard from './Dashboard'
import store from './redux/store'
import { Provider } from 'react-redux'
function App() {
 
  const router=createBrowserRouter([
   
    {
      path:'/',
      element:    <><Dashboard/></>
    }  
    
  ])
  return (
    <>     
    <Provider store={store}>
   <RouterProvider router={router} />  
   </Provider>
    </>
  )
}

export default App
