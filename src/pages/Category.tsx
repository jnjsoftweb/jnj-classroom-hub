import { Navigation } from "@/components/Navigation";
import { CourseCard } from "@/components/CourseCard";
import { useParams } from "react-router-dom";

const mockSubCategories = ["전체", "프로그래밍", "디자인", "마케팅", "비즈니스"];

// Temporary mock data
const mockCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "John Doe",
    thumbnail: "https://source.unsplash.com/random/800x600?coding",
    platform: "Youtube",
  },
  // Add more courses...
];

const Category = () => {
  const { platform } = useParams();

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="border-b">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex space-x-4 py-4 overflow-x-auto">
            {mockSubCategories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <main className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Category;