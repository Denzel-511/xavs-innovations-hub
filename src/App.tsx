import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import XSprint from "./pages/XSprint";
import WorkshopCorporate from "./pages/WorkshopCorporate";
import WorkshopSchool from "./pages/WorkshopSchool";
import ServicesAI from "./pages/ServicesAI";
import ServicesProduct from "./pages/ServicesProduct";
import NotFound from "./pages/NotFound";
import { Navigate } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/xsprint" element={<XSprint />} />
          <Route path="/training" element={<Navigate to="/workshops/corporate" replace />} />
          <Route path="/workshops/corporate" element={<WorkshopCorporate />} />
          <Route path="/workshops/school" element={<WorkshopSchool />} />
          <Route path="/services/ai" element={<ServicesAI />} />
          <Route path="/services/product" element={<ServicesProduct />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
