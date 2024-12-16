import { Navigation } from "@/components/Navigation";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Class = () => {
  const { id } = useParams();

  // Temporary mock data
  const mockClass = {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "John Doe",
    thumbnail: "https://source.unsplash.com/random/1920x1080?coding",
    platform: "Youtube",
    description: "Learn web development from scratch with this comprehensive course.",
    curriculum: [
      {
        title: "Introduction to Web Development",
        duration: "45:00",
      },
      {
        title: "HTML Fundamentals",
        duration: "1:30:00",
      },
      // Add more sections...
    ],
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img
              src={mockClass.thumbnail}
              alt={mockClass.title}
              className="w-full aspect-video rounded-lg object-cover"
            />
            <h1 className="text-3xl font-bold mt-6">{mockClass.title}</h1>
            <p className="text-muted-foreground mt-2">{mockClass.instructor}</p>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">About this course</h2>
              <p className="text-muted-foreground">{mockClass.description}</p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Curriculum</h2>
              <div className="space-y-4">
                {mockClass.curriculum.map((section, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-muted rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{section.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {section.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6">Start Learning</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Class;