import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { Css, HomeLayout, Html, JavaScript, React } from "./pages"



function App() {

  const router = createBrowserRouter([

   { path: '/',
   element: <HomeLayout/>,
   children: [
    
    { index: true,
      element: <Html/>
    },
    {
      path: 'css',
      element: <Css/>
    },

    {
      path: 'javascript',
      element: <JavaScript/>
    },
    {
      path: 'React',
      element: <React/>
    }]
}
  ])

  return (
    <>
  
     <RouterProvider router={router}/>
    </>
  )
}

export default App
