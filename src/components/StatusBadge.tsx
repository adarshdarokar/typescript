import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "open" | "closed";
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium flex-shrink-0",
        status === "open"
          ? "bg-success/15 text-success border border-success/30"
          : "bg-destructive/15 text-destructive border border-destructive/30",
        className
      )}
    >
      {status}
    </span>
  );
};
