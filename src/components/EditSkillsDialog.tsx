import { useState } from "react";
import { X, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TechTag } from "./TechTag";

interface EditSkillsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  skills: string[];
  onSave: (skills: string[]) => void;
}

export const EditSkillsDialog = ({
  open,
  onOpenChange,
  skills,
  onSave,
}: EditSkillsDialogProps) => {
  const [currentSkills, setCurrentSkills] = useState<string[]>(skills);
  const [newSkill, setNewSkill] = useState("");

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
    onSave(currentSkills);
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
          <div className="space-y-3">
            <label className="text-sm text-primary font-normal">
              Current Skills
            </label>
            <div className="flex flex-wrap gap-2 min-h-[60px] p-3 border border-border rounded-md bg-background">
              {currentSkills.length === 0 ? (
                <span className="text-sm text-muted-foreground">No skills added yet</span>
              ) : (
                currentSkills.map((skill, index) => (
                  <div key={index} className="relative group">
                    <TechTag label={skill} />
                    <button
                      onClick={() => handleRemoveSkill(index)}
                      className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-2.5 h-2.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm text-primary font-normal">
              Add New Skill
            </label>
            <div className="flex gap-2">
              <Input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-background border-border"
              />
              <Button
                type="button"
                onClick={handleAddSkill}
                className="bg-foreground text-background hover:bg-foreground/90 px-4"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
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
