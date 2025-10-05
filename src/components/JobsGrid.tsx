import { useState } from "react";
import { JobCard } from "./JobCard";
import { Button } from "@/components/ui/button";
import { CreateJobDialog } from "./CreateJobDialog";
import { EditSkillsDialog } from "./EditSkillsDialog";
import { toast } from "@/hooks/use-toast";

interface Job {
  id: string;
  company: string;
  companyLogo: string;
  title: string;
  technologies: string[];
  location: string;
  salary: string;
  postedTime: string;
  status: "open" | "closed";
  logoColor: string;
}

const mockJobs: Job[] = [
  {
    id: "1",
    company: "Slice",
    companyLogo: "S",
    title: "Frontend Developer",
    technologies: ["React Js", "Typescript", "Langchain", "Next Js", "Tailstack", "Next Js"],
    location: "Bhopal, India | Indore, India",
    salary: "6.6LPA - 7.8LPA",
    postedTime: "3days ago",
    status: "open",
    logoColor: "#8B5CF6",
  },
  {
    id: "2",
    company: "Storylane Coding School",
    companyLogo: "S",
    title: "Full-Stack Developer",
    technologies: ["React Js", "Typescript", "Langchain", "Next Js", "Tailstack", "Next Js"],
    location: "Bhopal, India | Indore, India",
    salary: "6.6LPA - 7.8LPA",
    postedTime: "3days ago",
    status: "open",
    logoColor: "#000000",
  },
  {
    id: "3",
    company: "Spotify",
    companyLogo: "S",
    title: "Backend Developer",
    technologies: ["React Js", "Typescript", "Langchain", "Next Js", "Tailstack", "Next Js"],
    location: "Bhopal, India | Indore, India",
    salary: "6.6LPA - 7.8LPA",
    postedTime: "3days ago",
    status: "open",
    logoColor: "#1DB954",
  },
  {
    id: "4",
    company: "Flipkart",
    companyLogo: "F",
    title: "Full-Stack Developer",
    technologies: ["React Js", "Typescript", "Langchain", "Next Js", "Tailstack", "Next Js"],
    location: "Bhopal, India | Indore, India",
    salary: "6.6LPA - 7.8LPA",
    postedTime: "3days ago",
    status: "closed",
    logoColor: "#2874F0",
  },
  {
    id: "5",
    company: "Zomato",
    companyLogo: "Z",
    title: "Backend Developer",
    technologies: ["React Js", "Typescript", "Langchain", "Next Js", "Tailstack", "Next Js"],
    location: "Bhopal, India | Indore, India",
    salary: "6.6LPA - 7.8LPA",
    postedTime: "3days ago",
    status: "open",
    logoColor: "#E23744",
  },
  {
    id: "6",
    company: "PhonePe",
    companyLogo: "P",
    title: "Frontend Developer",
    technologies: ["React Js", "Typescript", "Langchain", "Next Js", "Tailstack", "Next Js"],
    location: "Bhopal, India | Indore, India",
    salary: "6.6LPA - 7.8LPA",
    postedTime: "3days ago",
    status: "closed",
    logoColor: "#5F259F",
  },
];

export const JobsGrid = () => {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditSkillsOpen, setIsEditSkillsOpen] = useState(false);
  const [editingJobId, setEditingJobId] = useState<string | null>(null);

  const handleCreateJob = (data: any) => {
    const newJob: Job = {
      id: String(jobs.length + 1),
      company: data.company,
      companyLogo: data.company.charAt(0).toUpperCase(),
      title: data.role,
      technologies: ["React Js", "Typescript", "Next Js"],
      location: data.location2 
        ? `${data.location1} | ${data.location2}` 
        : data.location1,
      salary: data.salary,
      postedTime: "Just now",
      status: "open",
      logoColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
    };
    
    setJobs([newJob, ...jobs]);
    toast({
      title: "Job Created",
      description: `${data.role} position at ${data.company} has been created successfully.`,
    });
  };

  const handleEditSkills = (jobId: string) => {
    setEditingJobId(jobId);
    setIsEditSkillsOpen(true);
  };

  const handleSaveSkills = (updatedSkills: string[]) => {
    if (editingJobId) {
      setJobs(jobs.map(job => 
        job.id === editingJobId 
          ? { ...job, technologies: updatedSkills }
          : job
      ));
      toast({
        title: "Skills Updated",
        description: "Job skills have been updated successfully.",
      });
    }
    setEditingJobId(null);
  };

  const currentEditingJob = jobs.find(job => job.id === editingJobId);

  return (
    <div className="bg-card rounded-2xl shadow-sm h-full overflow-hidden flex flex-col">
      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3 p-6 pb-4">
        <Button
          variant="default"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
          onClick={() => console.log("Set Catalog clicked")}
        >
          Set Catalog
        </Button>

        <Button
          variant="default"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium px-6"
          onClick={() => setIsDialogOpen(true)}
        >
          Create Job +
        </Button>
      </div>

      <CreateJobDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleCreateJob}
      />

      <EditSkillsDialog
        open={isEditSkillsOpen}
        onOpenChange={setIsEditSkillsOpen}
        skills={currentEditingJob?.technologies || []}
        onSave={handleSaveSkills}
      />

      {/* Jobs Grid - Scrollable */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-3">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              company={job.company}
              companyLogo={job.companyLogo}
              title={job.title}
              technologies={job.technologies}
              location={job.location}
              salary={job.salary}
              postedTime={job.postedTime}
              status={job.status}
              logoColor={job.logoColor}
              onEdit={() => handleEditSkills(job.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
