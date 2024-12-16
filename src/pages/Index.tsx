import { Navigation } from "@/components/Navigation";
import { PlatformSection } from "@/components/PlatformSection";

// Temporary mock data
const mockCourses = {
  youtube: [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      instructor: "John Doe",
      thumbnail: "https://source.unsplash.com/random/800x600?coding",
      platform: "Youtube",
    },
    // Add more courses...
  ],
  class101: [
    {
      id: "2",
      title: "Digital Art Masterclass",
      instructor: "Jane Smith",
      thumbnail: "https://source.unsplash.com/random/800x600?art",
      platform: "Class101",
    },
    // Add more courses...
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