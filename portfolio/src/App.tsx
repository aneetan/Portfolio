import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

function App() {
  const Home = lazy(() => import('./pages/Home'))
  const NotFound = lazy(() => import('./pages/NotFoundPage'))
  const LoadingFallback = () => (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );

  return (
    <>
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback/>}>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
    </BrowserRouter> 
    </>
  )

}

export default App
