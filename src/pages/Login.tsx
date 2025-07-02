import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "react-oidc-context";

const COGNITO_CLIENT_ID = "52udp4mn3u32l53e1p9pmhs9kt";
const COGNITO_LOGOUT_URI = "https://d3ciw6o5yt2dho.cloudfront.net";
const COGNITO_DOMAIN = "https://ap-south-1ryhgkalsv.auth.ap-south-1.amazoncognito.com";

const Login: React.FC = () => {
  const auth = useAuth();

  const signOutRedirect = () => {
    window.location.href = `${COGNITO_DOMAIN}/logout?client_id=${COGNITO_CLIENT_ID}&logout_uri=${encodeURIComponent(
      COGNITO_LOGOUT_URI
    )}`;
  };

  if (auth.isLoading) {
    return <div>Loading authentication...</div>;
  }

  if (auth.error) {
    return <div>Error: {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl border-0 text-center p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold mb-2">
              Welcome, {auth.user?.profile.email}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full mb-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
              onClick={signOutRedirect}
            >
              Sign Out
            </Button>
            <Link to="/dashboard">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Go to Dashboard →
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl border-0">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Resume Builder
          </CardTitle>
          <CardDescription className="text-gray-600">
            Create professional resumes with our easy-to-use builder
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={() => auth.signinRedirect()}
          >
            Sign In
          </Button>
          <div className="mt-6">
            <Link to="/" className="text-sm text-gray-600 hover:text-gray-800">
              ← Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
