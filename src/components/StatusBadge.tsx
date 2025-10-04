import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "open" | "closed";
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium flex-shrink-0",
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
