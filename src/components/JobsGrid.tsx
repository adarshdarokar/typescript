import { JobCard } from "./JobCard";
import { Button } from "@/components/ui/button";

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
          onClick={() => console.log("Create Job clicked")}
        >
          Create Job +
        </Button>
      </div>

      {/* Jobs Grid - Scrollable */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-2.5">
          {mockJobs.map((job) => (
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
              onEdit={() => console.log(`Edit job ${job.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
