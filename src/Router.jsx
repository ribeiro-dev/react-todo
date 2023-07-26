import { Routes, Route } from "react-router-dom";

import Index from './pages/Home';
import NotFound from "./pages/NotFound";

export default function Router() {

  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}