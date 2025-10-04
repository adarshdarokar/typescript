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
    <div className="bg-card rounded-lg p-4 border border-border hover:shadow-sm transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-base flex-shrink-0"
            style={{ backgroundColor: logoColor }}
          >
            {companyLogo}
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-foreground mb-0.5">{title}</h3>
            <p className="text-xs text-muted-foreground">{company}</p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="gap-1 hover:bg-accent h-7 px-2 text-xs flex-shrink-0"
          onClick={onEdit}
        >
          <Edit className="w-3 h-3" />
          Edit
        </Button>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {technologies.map((tech, index) => (
          <TechTag key={index} label={tech} />
        ))}
      </div>

      <div className="border-t border-dashed border-border pt-3 space-y-2.5">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="line-clamp-1">{location}</span>
        </div>

        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-3 flex-wrap text-xs">
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
              <span className="text-foreground font-medium">Job Offer</span>
              <span className="text-muted-foreground">{salary}</span>
            </div>

            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" />
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
