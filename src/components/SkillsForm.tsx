
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";

interface Skills {
  technical: string[];
  soft: string[];
  languages: string[];
}

interface SkillsFormProps {
  data: Skills;
  onChange: (data: Skills) => void;
}

const SkillsForm = ({ data, onChange }: SkillsFormProps) => {
  const [newSkill, setNewSkill] = useState({ technical: "", soft: "", languages: "" });

  const addSkill = (category: keyof Skills) => {
    const skill = newSkill[category].trim();
    if (skill && !data[category].includes(skill)) {
      onChange({
        ...data,
        [category]: [...data[category], skill],
      });
      setNewSkill({ ...newSkill, [category]: "" });
    }
  };

  const removeSkill = (category: keyof Skills, skillToRemove: string) => {
    onChange({
      ...data,
      [category]: data[category].filter(skill => skill !== skillToRemove),
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent, category: keyof Skills) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill(category);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Skills</h3>

      {/* Technical Skills */}
      <div className="space-y-3">
        <Label>Technical Skills</Label>
        <div className="flex gap-2">
          <Input
            value={newSkill.technical}
            onChange={(e) => setNewSkill({ ...newSkill, technical: e.target.value })}
            onKeyPress={(e) => handleKeyPress(e, "technical")}
            placeholder="React, Node.js, Python..."
          />
          <Button
            onClick={() => addSkill("technical")}
            size="sm"
            type="button"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.technical.map((skill) => (
            <Badge key={skill} variant="secondary" className="pr-1">
              {skill}
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-1 ml-1"
                onClick={() => removeSkill("technical", skill)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="space-y-3">
        <Label>Soft Skills</Label>
        <div className="flex gap-2">
          <Input
            value={newSkill.soft}
            onChange={(e) => setNewSkill({ ...newSkill, soft: e.target.value })}
            onKeyPress={(e) => handleKeyPress(e, "soft")}
            placeholder="Leadership, Communication, Problem Solving..."
          />
          <Button
            onClick={() => addSkill("soft")}
            size="sm"
            type="button"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.soft.map((skill) => (
            <Badge key={skill} variant="outline" className="pr-1">
              {skill}
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-1 ml-1"
                onClick={() => removeSkill("soft", skill)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="space-y-3">
        <Label>Languages</Label>
        <div className="flex gap-2">
          <Input
            value={newSkill.languages}
            onChange={(e) => setNewSkill({ ...newSkill, languages: e.target.value })}
            onKeyPress={(e) => handleKeyPress(e, "languages")}
            placeholder="English (Native), Spanish (Fluent)..."
          />
          <Button
            onClick={() => addSkill("languages")}
            size="sm"
            type="button"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.languages.map((skill) => (
            <Badge key={skill} variant="default" className="pr-1">
              {skill}
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-1 ml-1"
                onClick={() => removeSkill("languages", skill)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
