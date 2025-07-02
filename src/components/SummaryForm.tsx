
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface SummaryFormProps {
  data: string;
  onChange: (data: string) => void;
}

const SummaryForm = ({ data, onChange }: SummaryFormProps) => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAISummary = async () => {
    setIsGenerating(true);
    // Simulate AI generation with varied responses
    setTimeout(() => {
      const summaryOptions = [
        "Results-driven professional with extensive experience in delivering high-impact solutions and driving organizational growth. Proven ability to lead cross-functional teams, optimize processes, and exceed performance targets through strategic thinking and innovative problem-solving.",
        "Dynamic and versatile professional with a strong background in project management and stakeholder collaboration. Demonstrated expertise in analyzing complex challenges, implementing efficient solutions, and fostering team productivity in fast-paced environments.",
        "Accomplished professional with a track record of excellence in strategic planning and execution. Skilled in building relationships, managing resources effectively, and delivering measurable results that align with business objectives and drive sustainable growth.",
        "Innovative professional with expertise in process improvement and organizational development. Strong analytical skills combined with excellent communication abilities, enabling successful collaboration with diverse teams and achievement of ambitious goals.",
        "Experienced professional with a passion for continuous learning and professional development. Proven ability to adapt to changing environments, leverage emerging technologies, and contribute to organizational success through dedication and expertise."
      ];
      
      const randomSummary = summaryOptions[Math.floor(Math.random() * summaryOptions.length)];
      onChange(randomSummary);
      setIsGenerating(false);
      toast({
        title: "Summary Generated",
        description: "AI has generated a professional summary for you!",
      });
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="summary">Professional Summary</Label>
        <p className="text-sm text-gray-600 mb-2">
          Write a compelling summary that highlights your key achievements and career goals.
        </p>
        <Textarea
          id="summary"
          value={data}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write a brief summary of your professional background, key skills, and career objectives..."
          className="min-h-[120px]"
        />
      </div>
      <Button
        onClick={generateAISummary}
        disabled={isGenerating}
        variant="outline"
        className="w-full"
      >
        {isGenerating ? "Generating..." : "✨ Generate AI Summary"}
      </Button>
    </div>
  );
};

export default SummaryForm;
