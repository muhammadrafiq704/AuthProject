import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import appRoutes from './routes/routes'
import theme from './theme'


const router = createBrowserRouter(createRoutesFromElements(appRoutes))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
       <CssBaseline enableColorScheme />
       <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)
