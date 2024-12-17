import { Navigation } from "@/components/Navigation";
import { PlatformSection } from "@/components/PlatformSection";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Temporary mock data
const mockCourses = {
  youtube: [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      instructor: "John Doe",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      platform: "Youtube",
    },
    {
      id: "2",
      title: "Advanced JavaScript Course",
      instructor: "Jane Smith",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      platform: "Youtube",
    },
    {
      id: "3",
      title: "React Native Mobile Development",
      instructor: "Mike Johnson",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      platform: "Youtube",
    },
  ],
  class101: [
    {
      id: "4",
      title: "Digital Art Masterclass",
      instructor: "Sarah Wilson",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      platform: "Class101",
    },
    {
      id: "5",
      title: "UI/UX Design Fundamentals",
      instructor: "Alex Brown",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      platform: "Class101",
    },
    {
      id: "6",
      title: "Product Photography Basics",
      instructor: "Chris Lee",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      platform: "Class101",
    },
  ],
};

// Flatten courses for search
const allCourses = Object.values(mockCourses).flat();

const Index = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <Button
            variant="outline"
            className="relative w-full max-w-lg justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
            onClick={() => setOpen(true)}
          >
            <span className="hidden lg:inline-flex">Search courses...</span>
            <span className="inline-flex lg:hidden">Search...</span>
            <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </div>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type to search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Courses">
              {allCourses.map((course) => (
                <CommandItem
                  key={course.id}
                  onSelect={() => {
                    navigate(`/class/${course.id}`);
                    setOpen(false);
                  }}
                >
                  <div className="flex items-center">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-8 h-8 rounded mr-2 object-cover"
                    />
                    <div className="flex flex-col items-start">
                      <span>{course.title}</span>
                      <span className="text-xs text-muted-foreground">
                        {course.instructor} · {course.platform}
                      </span>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>

        {Object.entries(mockCourses).map(([platform, courses]) => (
          <PlatformSection
            key={platform}
            platform={platform}
            courses={courses}
          />
        ))}
      </main>
    </div>
  );
};

export default Index;