import { Navigation } from "@/components/Navigation";
import { CourseCard } from "@/components/CourseCard";
import { useParams } from "react-router-dom";

const mockSubCategories = ["전체", "프로그래밍", "디자인", "마케팅", "비즈니스", "금융", "음악", "요리"];

const mockCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp 2024",
    instructor: "John Doe",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    platform: "Youtube",
  },
  {
    id: "2",
    title: "Advanced JavaScript & React Patterns",
    instructor: "Jane Smith",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    platform: "Youtube",
  },
  {
    id: "3",
    title: "UI/UX Design Masterclass",
    instructor: "Sarah Wilson",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    platform: "Class101",
  },
  {
    id: "4",
    title: "Digital Marketing Strategy",
    instructor: "Mike Johnson",
    thumbnail: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    platform: "Udemy",
  },
  {
    id: "5",
    title: "Financial Analysis & Modeling",
    instructor: "Alex Brown",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    platform: "Inflearn",
  },
  {
    id: "6",
    title: "Mobile App Development with Flutter",
    instructor: "Chris Lee",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    platform: "FastCampus",
  },
  {
    id: "7",
    title: "Data Science Fundamentals",
    instructor: "Emily Chen",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    platform: "NomadCoder",
  },
  {
    id: "8",
    title: "Blockchain Development",
    instructor: "David Kim",
    thumbnail: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80",
    platform: "Youtube",
  },
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
                className="px-4 py-2 rounded-full text-sm font-medium bg-muted hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
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