import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  title: string;
  userName: string;
  userRole: string;
}

export const Header = ({
  title,
  userName,
  userRole,
}: HeaderProps) => {
  return (
    <header className="bg-card rounded-xl px-5 py-3 flex items-center justify-between">
      <h2 className="text-xl font-bold text-foreground">{title}</h2>

      <div className="flex items-center gap-3">
        <button className="relative p-1.5 hover:bg-accent rounded-full transition-colors">
          <Bell className="w-4 h-4 text-primary" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </button>

        <div className="flex items-center gap-2.5 pl-3 border-l border-border">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Adarsh" />
            <AvatarFallback className="text-xs">AD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">{userName}</span>
            <span className="text-[11px] text-muted-foreground">{userRole}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
