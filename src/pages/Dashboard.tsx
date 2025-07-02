
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Plus, Download, Zap, Eye, Palette, CheckCircle, Star, Users } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resume Builder
            </h1>
            <div className="flex gap-2">
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Professional Resume Builder!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create stunning, ATS-friendly resumes in minutes with our AI-powered builder. 
            Stand out from the crowd and land your dream job with professionally designed templates.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">ATS Optimized</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <Star className="h-5 w-5" />
              <span className="font-medium">Professional Templates</span>
            </div>
            <div className="flex items-center gap-2 text-purple-600">
              <Zap className="h-5 w-5" />
              <span className="font-medium">AI-Powered</span>
            </div>
          </div>
        </div>

        {/* Main Action Card */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Link to="/resume-builder">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Plus className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Start Building Your Resume</CardTitle>
                    <CardDescription className="text-blue-100 text-lg">
                      Create a professional resume in just a few minutes
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-4">
                  Our step-by-step builder guides you through each section with helpful tips and AI-generated content suggestions.
                </p>
                <div className="flex items-center gap-2 text-blue-100">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Join thousands of successful job seekers</span>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What Makes Our Resume Builder Special?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Professional Templates</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Choose from 3 expertly designed templates - Modern, Classic, and Creative. 
                  Each optimized for different industries and career levels.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">AI-Powered Content</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Get personalized professional summaries and content suggestions 
                  powered by AI to make your resume stand out.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Real-Time Preview</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  See your resume come to life as you build it. Switch between 
                  templates instantly and preview exactly how it will look.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Palette className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Easy Customization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Customize colors, fonts, and layouts to match your personal 
                  brand and industry requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Download className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">Export & Share</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Download your resume as a high-quality PDF or share it online 
                  with a professional link.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-indigo-500">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">ATS Optimized</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  All templates are optimized for Applicant Tracking Systems (ATS) 
                  to ensure your resume gets past automated screening.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How It Works - Simple as 1, 2, 3!
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Fill Your Information</h4>
              <p className="text-gray-600">
                Enter your personal details, work experience, education, and skills in our user-friendly forms.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Choose Your Template</h4>
              <p className="text-gray-600">
                Select from our professional templates and watch your resume transform in real-time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Download & Apply</h4>
              <p className="text-gray-600">
                Export your polished resume as PDF and start applying to your dream jobs immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
