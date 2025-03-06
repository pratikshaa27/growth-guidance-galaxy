
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-mindflow-lavender/10 p-6">
      <div className="text-center max-w-md glass-card p-12 shadow-lg animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 animate-pulse-soft">
          <span className="text-4xl font-bold">404</span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn't find the page you're looking for. Let's get you back on track.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
        >
          <HomeIcon size={18} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
