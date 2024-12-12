import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 import LayOut from './components/LayOut';
import Contact from './components/Contact';

export default function App() {
  // create routes pathes
  const routing = createBrowserRouter([
      {
          path: "/",
          element: <LayOut />,
          children: [
              { path: "/", element: <h1>Welcome To Home Page</h1> },
              { path: "About", element: <h1>Welcome To About Page</h1> },
              { path: "Service", element: <h1>Welcome To Services Page</h1> },
              {
                  path: "contact us",
                  element: <Contact />,
                  children: [
                      { path: "", element: <h1>Contact Us Form</h1> },
                      { path: "Emails", element: <h1>Emails</h1> },
                      { path: "Locations", element: <h1>Locations</h1> },
                      { path: "Phone Number", element: <h1>Phone Number</h1> },
                  ],
              },
              { path: "*", element: <h1>Not Found Page</h1> },
          ],
      },
  ]);
  return (
    <div>

      <RouterProvider router={routing}/>
    </div>
    
  )
} 
