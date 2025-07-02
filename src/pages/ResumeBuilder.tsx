import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Save, Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PersonalInfoForm from "../components/PersonalInfoForm";
import EducationForm from "../components/EducationForm";
import WorkExperienceForm from "../components/WorkExperienceForm";
import SkillsForm from "../components/SkillsForm";
import SummaryForm from "../components/SummaryForm";
import ResumePreview from "../components/ResumePreview";
import TemplateSelector from "../components/TemplateSelector";
import { fetchAuthSession } from "aws-amplify/auth";

import axios from "axios";

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website: string;
  };
  summary: string;
  education: Array<{
    id: string;
    degree: string;
    school: string;
    location: string;
    graduationDate: string;
    gpa?: string;
  }>;
  workExperience: Array<{
    id: string;
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  skills: {
    technical: string[];
    soft: string[];
    languages: string[];
  };
}

const ResumeBuilder = () => {
  const { toast } = useToast();
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      website: "",
    },
    summary: "",
    education: [],
    workExperience: [],
    skills: {
      technical: [],
      soft: [],
      languages: [],
    },
  });

  const updateResumeData = (section: keyof ResumeData, data: any) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data,
    }));
  };

  const handleSave = () => {
    toast({
      title: "Resume Saved",
      description: "Your resume has been saved successfully!",
    });
    console.log("Saving resume data:", resumeData);
  };

  const handleGeneratePDF = async () => {
    toast({
      title: "Generating PDF",
      description: "Your resume PDF is being generated...",
    });
  
    try {
      // Fetch the Cognito Auth token
      const session = await fetchAuthSession();
      const idToken = session.tokens?.idToken?.toString();
  
      const response = await axios.post(
        "https://y88lrovemf.execute-api.ap-south-1.amazonaws.com/dev/generate-pdf",
        {
          name: resumeData.personalInfo.fullName,
          skills: resumeData.skills.technical,
        },
        {
          headers: {
            Authorization: idToken, // attach token for API Gateway auth
          },
        }
      );
  
      const url = response.data.url;
      window.open(url, "_blank");
    } catch (error) {
      toast({
        title: "Error generating PDF",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      console.error("PDF Generation Error:", error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-xl font-semibold">Resume Builder</h1>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSave} variant="outline">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button onClick={handleGeneratePDF} className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Download className="h-4 w-4 mr-2" />
                Generate PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Choose Template
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TemplateSelector
                  selectedTemplate={selectedTemplate}
                  onTemplateChange={setSelectedTemplate}
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <Tabs defaultValue="personal" className="w-full">
                  <div className="border-b px-6 pt-6">
                    <TabsList className="grid w-full grid-cols-5">
                      <TabsTrigger value="personal">Personal</TabsTrigger>
                      <TabsTrigger value="summary">Summary</TabsTrigger>
                      <TabsTrigger value="experience">Experience</TabsTrigger>
                      <TabsTrigger value="education">Education</TabsTrigger>
                      <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>
                  </div>

                  <div className="p-6">
                    <TabsContent value="personal" className="mt-0">
                      <PersonalInfoForm
                        data={resumeData.personalInfo}
                        onChange={(data) => updateResumeData("personalInfo", data)}
                      />
                    </TabsContent>

                    <TabsContent value="summary" className="mt-0">
                      <SummaryForm
                        data={resumeData.summary}
                        onChange={(data) => updateResumeData("summary", data)}
                      />
                    </TabsContent>

                    <TabsContent value="experience" className="mt-0">
                      <WorkExperienceForm
                        data={resumeData.workExperience}
                        onChange={(data) => updateResumeData("workExperience", data)}
                      />
                    </TabsContent>

                    <TabsContent value="education" className="mt-0">
                      <EducationForm
                        data={resumeData.education}
                        onChange={(data) => updateResumeData("education", data)}
                      />
                    </TabsContent>

                    <TabsContent value="skills" className="mt-0">
                      <SkillsForm
                        data={resumeData.skills}
                        onChange={(data) => updateResumeData("skills", data)}
                      />
                    </TabsContent>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="lg:sticky lg:top-24 lg:h-fit">
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <ResumePreview
                  data={resumeData}
                  template={selectedTemplate}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
