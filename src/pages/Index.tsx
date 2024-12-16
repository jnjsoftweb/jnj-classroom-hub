import { Navigation } from "@/components/Navigation";
import { PlatformSection } from "@/components/PlatformSection";

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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-screen-xl mx-auto px-4 py-8">
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