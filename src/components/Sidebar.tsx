import { LayoutDashboard, Briefcase, Bookmark, Calendar, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeItem?: string;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "jobs", label: "Jobs", icon: Briefcase },
  { id: "shortlist", label: "Shortlist", icon: Bookmark },
  { id: "interviews", label: "Interviews", icon: Calendar },
  { id: "clients", label: "Clients", icon: Users },
];

export const Sidebar = ({ activeItem = "jobs" }: SidebarProps) => {
  return (
    <aside className="bg-card rounded-xl p-5 flex flex-col h-full shadow-sm">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-foreground">Require.</h1>
      </div>

      <nav className="flex-1 space-y-0.5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeItem;

          return (
            <button
              key={item.id}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left",
                isActive
                  ? "bg-accent text-foreground font-medium"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
