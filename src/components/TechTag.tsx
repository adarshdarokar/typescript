import { cn } from "@/lib/utils";

interface TechTagProps {
  label: string;
  className?: string;
}

export const TechTag = ({ label, className }: TechTagProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium",
        "bg-tag text-tag-foreground",
        className
      )}
    >
      {label}
    </span>
  );
};
