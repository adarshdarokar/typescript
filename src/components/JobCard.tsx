import { MapPin, DollarSign, Clock, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechTag } from "./TechTag";
import { StatusBadge } from "./StatusBadge";

interface JobCardProps {
  company: string;
  companyLogo: string;
  title: string;
  technologies: string[];
  location: string;
  salary: string;
  postedTime: string;
  status: "open" | "closed";
  logoColor: string;
  onEdit?: () => void;
}

export const JobCard = ({
  company,
  companyLogo,
  title,
  technologies,
  location,
  salary,
  postedTime,
  status,
  logoColor,
  onEdit,
}: JobCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
            style={{ backgroundColor: logoColor }}
          >
            {companyLogo}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="gap-1 hover:bg-accent"
          onClick={onEdit}
        >
          <Edit className="w-3 h-3" />
          Edit
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <TechTag key={index} label={tech} />
        ))}
      </div>

      <div className="border-t border-dashed border-border pt-4 space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <DollarSign className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Job Offer</span>
              <span className="text-muted-foreground">{salary}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Posted</span>
              <span>{postedTime}</span>
            </div>
          </div>

          <StatusBadge status={status} />
        </div>
      </div>
    </div>
  );
};
