import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface EditSkillsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  skills: string[];
  jobTitle: string;
  jobDescription?: string;
  onSave: (data: { skills: string[]; jobTitle: string; jobDescription: string }) => void;
}

export const EditSkillsDialog = ({
  open,
  onOpenChange,
  skills,
  jobTitle,
  jobDescription = "",
  onSave,
}: EditSkillsDialogProps) => {
  const [currentSkills, setCurrentSkills] = useState<string[]>(skills);
  const [newSkill, setNewSkill] = useState("");
  const [category, setCategory] = useState(jobTitle);
  const [description, setDescription] = useState(jobDescription);

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setCurrentSkills([...currentSkills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (index: number) => {
    setCurrentSkills(currentSkills.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    onSave({
      skills: currentSkills,
      jobTitle: category,
      jobDescription: description,
    });
    onOpenChange(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[440px] bg-card border-border p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border">
          <DialogTitle className="text-lg font-semibold text-foreground text-center">
            Edit Skills
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 py-6 space-y-5">
          <div className="space-y-2">
            <Label className="text-sm text-primary font-normal">
              What are the skills required ?
            </Label>
            <div className="relative">
              <div className="flex flex-wrap gap-2 min-h-[44px] p-2.5 border border-border rounded-md bg-background">
                {currentSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/10 text-primary text-sm rounded"
                  >
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(index)}
                      className="hover:text-primary/70 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 min-w-[120px] bg-transparent outline-none text-sm"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-primary font-normal">
              What is the job categories ?
            </Label>
            <Input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-primary font-normal">
              Job Descriptions
            </Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-background border-border min-h-[120px] resize-none"
            />
          </div>

          <div className="flex justify-end pt-2">
            <Button
              type="button"
              onClick={handleSave}
              className="bg-foreground text-background hover:bg-foreground/90 px-6"
            >
              Save →
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
