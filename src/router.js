import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import App from "./App"
import Login from "./pages/login"
import Index from "./pages/index"
import Chat from "./pages/chat"
import DM from "./pages/dm"

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />
          <Route path="channels">
            <Route path=":roomId" element={<Chat />} />
          </Route>
          <Route path="direct">
            <Route path=":partnerId" element={<DM />} />
          </Route>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router