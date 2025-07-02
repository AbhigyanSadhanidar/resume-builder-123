import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Index } from "./pages/Index"; // ✅ Must be a named export in Index.tsx: `export const Index = () => { ... }`
import Login from "./pages/Login";
import ResumeBuilder from "./pages/ResumeBuilder";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "@/components/ProtectedRoute";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const queryClient = new QueryClient();

const App = () => (
  <Authenticator>
    {({ signOut, user }) =>
      user ? (
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
                <span>Hello, {user.username}</span>
                <button
                  onClick={signOut}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Sign Out
                </button>
              </div>

              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/resume-builder"
                  element={
                    <ProtectedRoute>
                      <ResumeBuilder />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      ) : (
        <div>Loading...</div>
      )
    }
  </Authenticator>
);

export default App;
