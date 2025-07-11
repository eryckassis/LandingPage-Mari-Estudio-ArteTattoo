import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";

const queryClient = new QueryClient();

function AppContent({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (v: boolean) => void;
}) {
  const location = useLocation();
  const isNotFound =
    location.pathname === "/src/pages/NotFound.tsx" ||
    location.pathname === "/notfound" ||
    location.pathname === "*" ||
    location.pathname === "/src/pages/NotFound.tsx"; // ajuste se necessário

  // Checa se está na rota NotFound
  const hideNavigation =
    location.pathname === "*" ||
    location.pathname === "/404" ||
    location.pathname === "/notfound";

  return (
    <>
      {!hideNavigation && <Navigation dark={dark} setDark={setDark} />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

const App = () => {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-black text-black dark:text-white">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent dark={dark} setDark={setDark} />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
