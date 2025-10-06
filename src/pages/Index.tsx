import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { JobsGrid } from "@/components/JobsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-3 md:p-4">
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-2 md:gap-3 h-[calc(100vh-1.5rem)] md:h-[calc(100vh-2rem)]">
        {/* Sidebar - Hidden on mobile, shown on large screens */}
        <div className="hidden lg:block h-full">
          <Sidebar activeItem="jobs" />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col gap-2 md:gap-3 h-full overflow-hidden">
          {/* Header */}
          <div className="flex-shrink-0">
            <Header
              title="Jobs"
              userName="Adarsh Darokar"
              userRole="Admin"
            />
          </div>

          {/* Jobs Grid - Scrollable */}
          <div className="flex-1 overflow-hidden">
            <JobsGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
