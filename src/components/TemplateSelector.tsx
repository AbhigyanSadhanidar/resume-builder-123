
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TemplateSelectorProps {
  selectedTemplate: string;
  onTemplateChange: (template: string) => void;
}

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean design with accent colors",
    preview: "bg-gradient-to-br from-blue-50 to-indigo-100",
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional professional layout",
    preview: "bg-gradient-to-br from-gray-50 to-gray-100",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Bold design for creative roles",
    preview: "bg-gradient-to-br from-purple-50 to-pink-100",
  },
];

const TemplateSelector = ({ selectedTemplate, onTemplateChange }: TemplateSelectorProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {templates.map((template) => (
        <Card 
          key={template.id}
          className={`cursor-pointer transition-all hover:shadow-md ${
            selectedTemplate === template.id 
              ? "ring-2 ring-blue-500 shadow-md" 
              : "border-gray-200"
          }`}
          onClick={() => onTemplateChange(template.id)}
        >
          <CardContent className="p-4">
            <div className={`w-full h-24 rounded-md ${template.preview} mb-3 border`}>
              <div className="p-2 space-y-1">
                <div className="w-2/3 h-2 bg-gray-400 rounded"></div>
                <div className="w-1/2 h-1 bg-gray-300 rounded"></div>
                <div className="w-full h-1 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
              </div>
            </div>
            <h4 className="font-semibold text-sm">{template.name}</h4>
            <p className="text-xs text-gray-600">{template.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TemplateSelector;
