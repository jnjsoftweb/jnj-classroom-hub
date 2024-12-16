import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  platform: string;
}

export const CourseCard = ({ id, title, instructor, thumbnail, platform }: CourseCardProps) => {
  return (
    <Link to={`/class/${id}`} className="course-card block w-[300px] bg-card">
      <div className="relative">
        <img src={thumbnail} alt={title} className="course-card-image" />
        <div className="absolute top-2 right-2 bg-black/50 px-2 py-1 text-xs rounded">
          {platform}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{instructor}</p>
      </div>
    </Link>
  );
};