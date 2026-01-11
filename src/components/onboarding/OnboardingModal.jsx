import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";
import {
  User,
  MapPin,
  Briefcase,
  Github,
  Linkedin,
  Globe,
  Mail,
  Calendar,
  X,
  Plus,
  CheckCircle2,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const OnboardingModal = ({ isOpen, onOpenChange, initialUsername = "" }) => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: initialUsername,
    name: "",
    bio: "",
    location: "",
    profilePic: "", // In a real app, this would be a file upload. Here we might just take a URL or use a placeholder
    techStack: [],
    currentFocus: [],
    socials: {
      github: "",
      linkedin: "",
      website: "",
      twitter: "",
      calendly: "",
    },
  });

  const [tagInput, setTagInput] = useState("");
  const [focusInput, setFocusInput] = useState("");

  useEffect(() => {
    if (initialUsername) {
      setFormData((prev) => ({ ...prev, username: initialUsername }));
    }
  }, [initialUsername]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("social.")) {
      const socialKey = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        socials: { ...prev.socials, [socialKey]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddTag = (type) => {
    if (type === "techStack" && tagInput.trim()) {
      if (!formData.techStack.includes(tagInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          techStack: [...prev.techStack, tagInput.trim()],
        }));
      }
      setTagInput("");
    } else if (type === "currentFocus" && focusInput.trim()) {
      if (!formData.currentFocus.includes(focusInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          currentFocus: [...prev.currentFocus, focusInput.trim()],
        }));
      }
      setFocusInput("");
    }
  };

  const handleRemoveTag = (type, tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      [type]: prev[type].filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFinish = async () => {
    setLoading(true);
    // Simulate API call / Verification email sending
    setTimeout(() => {
      setLoading(false);
      // Save to local storage
      localStorage.setItem("vibekoder_user", JSON.stringify(formData));
      // Redirect to the dynamic profile page
      navigate(`/${formData.username}`);
      onOpenChange(false);
    }, 2000);
  };

  // Render Step Content
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4 py-2">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Avatar className="h-24 w-24 border-2 border-zinc-100">
                  <AvatarImage src={formData.profilePic} />
                  <AvatarFallback className="text-2xl bg-zinc-100 text-zinc-400">
                    {formData.name
                      ? formData.name.substring(0, 2).toUpperCase()
                      : "U"}
                  </AvatarFallback>
                </Avatar>
                {/* Placeholder for upload logic */}
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-white shadow-sm"
                  onClick={() => {
                    // Simple prompt for URL for MVP
                    const url = prompt("Enter Profile Image URL");
                    if (url)
                      setFormData((prev) => ({ ...prev, profilePic: url }));
                  }}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="vibekoder_fan"
                disabled // Username locked from Hero input
                className="bg-zinc-50"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us a little about yourself..."
                className="resize-none"
                rows={3}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="pl-9"
                  placeholder="San Francisco, CA"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 py-2">
            <div className="space-y-4">
              <div>
                <Label className="mb-2 block">Tech Stack</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleAddTag("techStack")
                    }
                    placeholder="React, Node.js, Python..."
                  />
                  <Button
                    onClick={() => handleAddTag("techStack")}
                    variant="secondary"
                    size="icon"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.techStack.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="pl-2 pr-1 py-1 flex items-center gap-1"
                    >
                      {tag}
                      <X
                        className="h-3 w-3 cursor-pointer hover:text-red-500"
                        onClick={() => handleRemoveTag("techStack", tag)}
                      />
                    </Badge>
                  ))}
                  {formData.techStack.length === 0 && (
                    <span className="text-sm text-zinc-400 italic">
                      No tags added yet.
                    </span>
                  )}
                </div>
              </div>

              <div>
                <Label className="mb-2 block">Current Focus</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={focusInput}
                    onChange={(e) => setFocusInput(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleAddTag("currentFocus")
                    }
                    placeholder="Learning AI agents, Building SaaS..."
                  />
                  <Button
                    onClick={() => handleAddTag("currentFocus")}
                    variant="secondary"
                    size="icon"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.currentFocus.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="pl-2 pr-1 py-1 flex items-center gap-1 border-dashed"
                    >
                      {tag}
                      <X
                        className="h-3 w-3 cursor-pointer hover:text-red-500"
                        onClick={() => handleRemoveTag("currentFocus", tag)}
                      />
                    </Badge>
                  ))}
                  {formData.currentFocus.length === 0 && (
                    <span className="text-sm text-zinc-400 italic">
                      No focus areas added yet.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 py-2">
            <div className="grid gap-2">
              <Label>Profile Links</Label>

              <div className="relative">
                <Github className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
                <Input
                  name="social.github"
                  value={formData.socials.github}
                  onChange={handleChange}
                  className="pl-9"
                  placeholder="github.com/username"
                />
              </div>

              <div className="relative">
                <Linkedin className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
                <Input
                  name="social.linkedin"
                  value={formData.socials.linkedin}
                  onChange={handleChange}
                  className="pl-9"
                  placeholder="linkedin.com/in/username"
                />
              </div>

              <div className="relative">
                <Globe className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
                <Input
                  name="social.website"
                  value={formData.socials.website}
                  onChange={handleChange}
                  className="pl-9"
                  placeholder="yourwebsite.com"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
                <Input
                  name="social.calendly"
                  value={formData.socials.calendly}
                  onChange={handleChange}
                  className="pl-9"
                  placeholder="calendly.com/username"
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
            <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold">Verification Email Sent</h3>
            <p className="text-zinc-500 max-w-xs">
              We've sent a verification link to your email. Please check your
              inbox to activate your profile.
            </p>
            <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-100 text-sm text-zinc-400 w-full max-w-xs break-all">
              {/* Simulation Link */}
              <p>Simulating email click...</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {step === 1 && "Start your journey"}
            {step === 2 && "Tell us about your work"}
            {step === 3 && "Where can we find you?"}
            {step === 4 && "Check your inbox"}
          </DialogTitle>
          <DialogDescription>
            {step === 1 && "Let's set up your VibeKoder profile."}
            {step === 2 && "Share your stack and what you're building."}
            {step === 3 && "Connect your social profiles."}
            {step === 4 && "Almost there! Just one more step."}
          </DialogDescription>
        </DialogHeader>

        {renderStep()}

        <DialogFooter className="flex justify-between sm:justify-between mt-4">
          {step < 4 ? (
            <>
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
              >
                Back
              </Button>
              <div className="flex gap-2">
                <div className="flex items-center gap-1 mr-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-1.5 rounded-full ${
                        i === step ? "bg-zinc-900" : "bg-zinc-200"
                      }`}
                    />
                  ))}
                </div>
                {step === 3 ? (
                  <Button onClick={() => setStep(4)}>Complete Setup</Button>
                ) : (
                  <Button onClick={handleNext}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </>
          ) : (
            <Button
              className="w-full"
              onClick={handleFinish}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying...
                </>
              ) : (
                "Verify & Continue"
              )}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;
