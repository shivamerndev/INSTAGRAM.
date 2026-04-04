import { createRoot } from 'react-dom/client'
import App from './app/App'
import "./app/global.css"
import { RouterProvider } from 'react-router-dom'
import AllRoutes from './routes/AllRoutes'
import { GoogleOAuthProvider } from '@react-oauth/google'
import store from './stores/store.js'
import { Provider } from 'react-redux'

const clientId = "536825012398-c2gga80iemtn21prat7pdhqomsp6ichp.apps.googleusercontent.com";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId={clientId}>
            <RouterProvider router={AllRoutes} />
        </GoogleOAuthProvider>
    </Provider> 
)