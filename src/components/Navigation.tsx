import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export function Navigation() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 max-w-screen-xl mx-auto">
        <div className="flex items-center flex-1">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Button variant="link" onClick={() => navigate("/")}>
              홈
            </Button>
            <Button variant="link" onClick={() => navigate("/category/youtube")}>
              YouTube
            </Button>
            <Button variant="link" onClick={() => navigate("/category/class101")}>
              Class101
            </Button>
          </nav>
        </div>
        <div className="flex items-center">
          <Button variant="outline" onClick={handleLogout}>
            로그아웃
          </Button>
        </div>
      </div>
    </header>
  );
}