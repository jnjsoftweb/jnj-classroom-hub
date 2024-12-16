import { Link, useLocation } from "react-router-dom";

const platforms = [
  "Youtube",
  "Class101",
  "Udemy",
  "Inflearn",
  "FastCampus",
  "NomadCoder",
  "기타",
];

export const Navigation = () => {
  const location = useLocation();
  const currentPlatform = location.pathname.split("/")[2];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center h-16 px-4">
          <Link to="/" className="text-xl font-bold mr-8">
            JNJ-CLASS
          </Link>
          <div className="flex space-x-4 overflow-x-auto">
            {platforms.map((platform) => (
              <Link
                key={platform}
                to={`/category/${platform.toLowerCase()}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPlatform === platform.toLowerCase()
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {platform}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};