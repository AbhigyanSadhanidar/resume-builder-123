import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser, signOut, signInWithRedirect } from "aws-amplify/auth";
import { Button } from "@/components/ui/button";
import { LogOut, LogIn } from "lucide-react";

const Index = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getCurrentUser()
      .then((userData) => setUser(userData))
      .catch(() => setUser(null));
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithRedirect();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resume Builder
            </h1>
            {user ? (
              <Button onClick={handleSignOut} variant="outline">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            ) : (
              <Button onClick={handleSignIn}>
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="text-center mt-20">
        <h2 className="text-4xl font-semibold mb-4">Build Stunning Resumes Effortlessly</h2>
        <p className="text-gray-600 text-lg">
          Start by logging in and selecting a template to create your professional resume in minutes.
        </p>
        {user && (
          <Link to="/resume-builder">
            <Button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600">
              Start Building
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export { Index };
