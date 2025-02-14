import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import appRoutes from './routes/routes'
import theme from './theme'



const root = document.getElementById('root');

if (!root){
  throw new Error('Root element not found');
}

const router = createBrowserRouter(createRoutesFromElements(appRoutes))
// const router = createBrowserRouter(appRoutes))

 
createRoot(root).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
       <CssBaseline enableColorScheme />
       <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)
