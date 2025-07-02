
import { ResumeData } from "../pages/ResumeBuilder";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";

interface ResumePreviewProps {
  data: ResumeData;
  template: string;
}

const ResumePreview = ({ data, template }: ResumePreviewProps) => {
  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} />;
      case "classic":
        return <ClassicTemplate data={data} />;
      case "creative":
        return <CreativeTemplate data={data} />;
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white shadow-lg border rounded-lg p-8 min-h-[600px]">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;
