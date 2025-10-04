import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { JobsGrid } from "@/components/JobsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4 md:gap-6 h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)]">
        {/* Sidebar - Hidden on mobile, shown on large screens */}
        <div className="hidden lg:block h-full">
          <Sidebar activeItem="jobs" />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col gap-4 md:gap-6 h-full overflow-hidden">
          {/* Header */}
          <div className="flex-shrink-0">
            <Header
              title="Jobs"
              userName="Adarsh Darokar"
              userRole="Admin"
              onSetCatalog={() => console.log("Set Catalog clicked")}
              onCreateJob={() => console.log("Create Job clicked")}
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
