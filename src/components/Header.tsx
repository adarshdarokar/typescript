import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  title: string;
  userName: string;
  userRole: string;
  onSetCatalog?: () => void;
  onCreateJob?: () => void;
}

export const Header = ({
  title,
  userName,
  userRole,
  onSetCatalog,
  onCreateJob,
}: HeaderProps) => {
  return (
    <header className="bg-card rounded-2xl p-6 flex items-center justify-between shadow-sm">
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>

      <div className="flex items-center gap-4">
        <Button
          variant="default"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
          onClick={onSetCatalog}
        >
          Set Catalog
        </Button>

        <Button
          variant="default"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium px-6"
          onClick={onCreateJob}
        >
          Create Job +
        </Button>

        <button className="relative p-2 hover:bg-accent rounded-full transition-colors">
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Adarsh" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">{userName}</span>
            <span className="text-xs text-muted-foreground">{userRole}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
