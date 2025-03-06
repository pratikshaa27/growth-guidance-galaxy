
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon, UserIcon, LockIcon, MailIcon, ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      console.log("Sign up with:", name, email, password);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-mindflow-lavender/30 to-mindflow-mint/30 px-4 py-12">
      {/* Decorative elements */}
      <div className="absolute top-40 right-1/4 w-64 h-64 rounded-full bg-mindflow-sky/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-mindflow-cream/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8 slide-up-animation">
          <Link to="/" className="inline-flex items-center gap-2 text-xl font-medium mb-2">
            <span className="bg-primary h-8 w-8 rounded-lg flex items-center justify-center text-white font-semibold">M</span>
            <span className="text-primary">Mindflow</span>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Create an account</h1>
          <p className="text-muted-foreground mt-2">Join us on your journey to growth</p>
        </div>

        <Card className="w-full glass-card border-white/20 shadow-xl backdrop-blur-lg slide-up-animation" style={{ animationDelay: '0.2s' }}>
          <form onSubmit={handleSignUp} className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground/90 flex items-center gap-2">
                  <UserIcon size={16} className="text-primary" />
                  Full Name
                </Label>
                <div className="relative group">
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="John Doe" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/50 border-white/30 focus-visible:ring-primary/40 pl-3 transition-all"
                    required
                  />
                  <div className="absolute inset-0 rounded-md border border-primary/0 group-hover:border-primary/20 pointer-events-none transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground/90 flex items-center gap-2">
                  <MailIcon size={16} className="text-primary" />
                  Email
                </Label>
                <div className="relative group">
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/50 border-white/30 focus-visible:ring-primary/40 pl-3 transition-all"
                    required
                  />
                  <div className="absolute inset-0 rounded-md border border-primary/0 group-hover:border-primary/20 pointer-events-none transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground/90 flex items-center gap-2">
                  <LockIcon size={16} className="text-primary" />
                  Password
                </Label>
                <div className="relative group">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/50 border-white/30 focus-visible:ring-primary/40 pr-10 transition-all"
                    required
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                  </button>
                  <div className="absolute inset-0 rounded-md border border-primary/0 group-hover:border-primary/20 pointer-events-none transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-foreground/90 flex items-center gap-2">
                  <LockIcon size={16} className="text-primary" />
                  Confirm Password
                </Label>
                <div className="relative group">
                  <Input 
                    id="confirmPassword" 
                    type={showConfirmPassword ? "text" : "password"} 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-white/50 border-white/30 focus-visible:ring-primary/40 pr-10 transition-all"
                    required
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                  </button>
                  <div className="absolute inset-0 rounded-md border border-primary/0 group-hover:border-primary/20 pointer-events-none transition-all" />
                </div>
              </div>
              
              <div className="flex items-center justify-end text-sm pt-2">
                <Link to="/sign-in" className="text-muted-foreground hover:text-foreground transition-colors">
                  Already have an account?
                </Link>
              </div>
            </div>
            
            <div className="pt-2 space-y-4">
              <Button 
                type="submit" 
                className={cn(
                  "w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 relative overflow-hidden group",
                  isLoading && "pointer-events-none"
                )}
                disabled={isLoading}
              >
                <span className={cn(
                  "flex items-center justify-center gap-2 transition-all duration-300",
                  isLoading && "opacity-0"
                )}>
                  <span>Create Account</span>
                  <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              
              <div className="relative flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-muted-foreground text-sm">or continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="bg-white/50 hover:bg-white/70 border-white/30 hover:border-white/50 transition-all py-5"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path 
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" 
                      fill="#4285F4" 
                    />
                    <path 
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" 
                      fill="#34A853" 
                    />
                    <path 
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" 
                      fill="#FBBC05" 
                    />
                    <path 
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" 
                      fill="#EA4335" 
                    />
                  </svg>
                  Google
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="bg-white/50 hover:bg-white/70 border-white/30 hover:border-white/50 transition-all py-5"
                >
                  <svg className="w-5 h-5 mr-2 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
