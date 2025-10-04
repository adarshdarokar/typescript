import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "open" | "closed";
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-md text-xs font-medium",
        status === "open"
          ? "bg-success/10 text-success"
          : "bg-destructive/10 text-destructive",
        className
      )}
    >
      {status}
    </span>
  );
};
