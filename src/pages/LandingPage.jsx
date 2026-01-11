import React from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import DemoImage from "../assets//aiLauncherDemo.png";
import Logo from "../assets/logo.png";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { toast } from "../components/ui/sonner";
import {
  Command,
  Cpu,
  Zap,
  Layers,
  Shield,
  Layout,
  ArrowRight,
  Terminal,
  Maximize2,
  MessageSquare,
  Grid,
  Sparkles,
  BookOpen,
  Wrench,
  Chrome,
} from "lucide-react";
import { EncryptedText } from "../components/ui/encrypted-text";
import { Input } from "../components/ui/input";
import OnboardingModal from "../components/onboarding/OnboardingModal";
import { useState } from "react";

const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  const handleGetStarted = () => {
    if (username.trim()) {
      setIsOnboardingOpen(true);
    }
  };

  const handleInstallClick = () => {
    window.open(
      "https://chromewebstore.google.com/detail/vibekoder/dnpkibpknbaemeipdjbofjghkfhambcm",
      "_blank"
    );
  };

  const handleDemoClick = () => {
    toast("Interactive Demo", {
      description:
        "This is a static preview. The live web demo is coming soon!",
    });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <img className="h-10" src={Logo} alt="Vibekoder" />
              <span className="text-3xl bitcount-prop-single  font-bold tracking-tight text-zinc-900">
                <EncryptedText text="VibeKoder" />
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
              <a
                href="#features"
                className="hover:text-zinc-900 transition-colors"
              >
                Features
              </a>
              <a
                href="#models"
                className="hover:text-zinc-900 transition-colors"
              >
                Models
              </a>
              <a
                href="/blogs"
                className="hover:text-zinc-900 transition-colors"
              >
                Blogs
              </a>
              <a
                href="/tools"
                className="hover:text-zinc-900 transition-colors"
              >
                Tools
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/create"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-700 transition-colors"
              >
                Creator Studio
              </a>
              <Button
                onClick={handleInstallClick}
                className="bg-zinc-900 hidden md:flex text-white hover:bg-zinc-800 rounded-full px-4"
              >
                <Chrome className="h-5 w-5 mr-2" />
                Add to Chrome
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gray-50 pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge
              variant="outline"
              className="mb-6 px-4 bg-white py-1.5 rounded-full border-zinc-200 text-zinc-600 bg-zinc-50/50 backdrop-blur-sm"
            >
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              v1.0 Public Beta
            </Badge>

            <h1 className="text-4xl  bitcount-prop-single  md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
              <EncryptedText text="VibeCode. " />
              <EncryptedText text="Build. " />
              <EncryptedText text="Publish. " />
            </h1>

            <p className=" text-md lg:text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              The ultimate <strong>ecosystem for VibeCoding</strong>.
              Orchestrate AI models, build powerful tools, and share your
              builder's journey with the world.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 mb-16 max-w-2xl mx-auto w-full">
              {/* Username Input Row */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                <div className="flex w-full md:max-w-md items-center bg-white p-1 rounded-full border border-zinc-200 shadow-lg shadow-zinc-200/50 pl-4 focus-within:ring-2 focus-within:ring-zinc-900 focus-within:border-transparent transition-all">
                  <div className="text-zinc-400 font-medium mr-3">@</div>
                  <input
                    type="text"
                    placeholder="username"
                    className="flex-1 bg-transparent border-none outline-none text-zinc-900 placeholder:text-zinc-400 h-10 min-w-0"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleGetStarted()}
                  />
                </div>
                <Button
                  onClick={handleGetStarted}
                  className="rounded-full w-full md:w-auto bg-zinc-900 hover:bg-zinc-800 text-white px-8 h-12 shadow-md md:shadow-none whitespace-nowrap"
                  disabled={!username.trim()}
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Secondary CTA Row */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={handleInstallClick}
                  variant="outline"
                  size="sm"
                  className="rounded-full px-6 h-9 text-zinc-600 border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900"
                >
                  <Chrome className="mr-2 h-4 w-4" />
                  Install Extension
                </Button>
              </div>
            </div>

            <OnboardingModal
              isOpen={isOnboardingOpen}
              onOpenChange={setIsOnboardingOpen}
              initialUsername={username}
            />

            {/* <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[10px] font-bold text-zinc-500"
                  >
                    U{i}
                  </div>
                ))}
              </div>
              <p>Trusted by 10,000+ developers</p>
            </div> */}
          </div>

          {/* Tilted Glassmorphism Mockup */}
          <div className="mt-20 relative max-w-5xl mx-auto [perspective:2000px]">
            <div className="relative [transform:rotateX(12deg)] transition-all duration-1000 ease-out hover:[transform:rotateX(0deg)] shadow-2xl shadow-zinc-200/50 rounded-2xl border border-zinc-200/50 bg-white/40 backdrop-blur-xl p-2 md:p-4">
              {/* Browser Chrome */}
              <div className="h-full w-full bg-zinc-50/80 rounded-xl overflow-hidden border border-zinc-200 shadow-inner">
                <div className="h-12 border-b border-zinc-200 flex items-center px-4 gap-2 bg-white">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
                  </div>
                  <div className="flex-1 mx-4 h-8 bg-zinc-100 rounded-md flex items-center px-3 text-xs text-zinc-400">
                    vibekoder://dashboard
                  </div>
                </div>

                {/* Dashboard UI Mock */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px] md:h-[500px] overflow-hidden">
                  {/* Left Panel - Prompt */}
                  <div className="md:col-span-1 bg-white rounded-xl border border-zinc-200 p-4 flex flex-col shadow-sm">
                    <div className="mb-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Input
                    </div>
                    <div className="flex-1 bg-zinc-50 rounded-lg border border-zinc-100 p-3 mb-4">
                      <div className="h-2 w-3/4 bg-zinc-200 rounded mb-2"></div>
                      <div className="h-2 w-1/2 bg-zinc-200 rounded mb-2"></div>
                      <div className="h-2 w-full bg-zinc-200 rounded mb-2"></div>
                    </div>
                    <Button
                      onClick={handleDemoClick}
                      className="w-full justify-between bg-zinc-900 text-white"
                    >
                      Run Multi-Agent <Zap className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Right Panel - Results Split */}
                  <div className="md:col-span-2 grid grid-rows-2 gap-4">
                    {/* Right Panel - Results Split */}
                    <img src={DemoImage} alt="Demo" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative gradients behind */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-zinc-200/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-zinc-200/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Supported Platforms Ticker */}
      <section
        id="models"
        className="py-12 border-y border-zinc-100 bg-zinc-50/50"
      >
        <div className="container mx-auto px-4 overflow-hidden">
          <p className="text-center text-sm font-medium text-zinc-400 mb-8">
            WORKS SEAMLESSLY WITH
          </p>
          <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-70">
            {[
              {
                id: "chatgpt",
                name: "ChatGPT",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/2048px-ChatGPT-Logo.svg.png",
              },
              {
                id: "claude",
                name: "Claude",
                icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/claude-ai-icon.png",
              },
              {
                id: "gemini",
                name: "Gemini",
                icon: "https://static.vecteezy.com/system/resources/previews/055/687/065/non_2x/gemini-google-icon-symbol-logo-free-png.png",
              },
              {
                id: "perplexity",
                name: "Perplexity",
                icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perplexity-ai-icon.png",
              },
              {
                id: "grok",
                name: "Grok",
                icon: "https://images.seeklogo.com/logo-png/61/1/grok-logo-png_seeklogo-613403.png",
              },
              {
                id: "lovable",
                name: "Lovable",
                icon: "https://lovable.dev/img/logo/lovable-logo-icon.png",
              },
              {
                id: "rocket",
                name: "Rocket",
                icon: "https://media.licdn.com/dms/image/v2/D4D0BAQGatjrW_riJWg/company-logo_200_200/B4DZbotLiWHQAI-/0/1747660880596/rocketdotnew_logo?e=1766620800&v=beta&t=6fpYjSew5czQZini94UeLFFPSt6ql7O5QJgioK1F5xc",
              },
              {
                id: "emergent",
                name: "Emergent",
                icon: "https://cdn.futurepedia.io/2025-11-03T20-30-35.584Z-zx4HqPUXaDxHQ9tn1t4LOLK0j5_uvt0QV.jpg",
              },
              {
                id: "bolt",
                name: "Bolt",
                icon: "https://media.licdn.com/dms/image/v2/D4E0BAQFIco7PgXhYBg/company-logo_200_200/B4EZYbOkYjGYAI-/0/1744213526380/stackblitz_logo?e=2147483647&v=beta&t=cGpIiLBB_woyy5s4tKZAsIi6X3RighVTtllZRBKCf1Y",
              },
            ].map((tool) => (
              <div
                key={tool.id}
                className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="h-8 w-8 object-contain"
                />
                <span className="text-xl md:text-2xl font-bold text-zinc-800">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid (Bento) - Refactored for 3 Pillars */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 bitcount-prop-single text-center max-w-3xl mx-auto">
            <EncryptedText
              className="text-3xl md:text-5xl text-zinc-900 mb-6"
              text="Code. Build. Publish."
            />
            <p className="text-lg text-zinc-500">
              VibeKoder isn't just an extension. It's a platform for the next
              generation of builders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pillar 1: Extension */}
            <Card className="bg-zinc-50 border-zinc-200 hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Layout className="h-6 w-6 text-zinc-900" />
                </div>
                <CardTitle className="text-xl">Vibecode Efficiently</CardTitle>
                <CardDescription className="text-base text-zinc-500">
                  Use our Chrome Extension to orchestrate multiple AI models
                  side-by-side. The command center for high-speed creation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleInstallClick}
                  variant="outline"
                  className="w-full mt-4 group"
                >
                  Get Extension <Chrome className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Pillar 2: Blogs/Journey */}
            <Card className="bg-white border-zinc-200 shadow-xl shadow-zinc-200/40 hover:shadow-2xl hover:shadow-zinc-200/60 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <BookOpen className="w-32 h-32" />
              </div>
              <CardHeader className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Publish Your Journey</CardTitle>
                <CardDescription className="text-base text-zinc-500">
                  Don't just build in silence. Document your process, share
                  tutorials, and build your profile as a top-tier VibeCoder.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button
                  onClick={() => (window.location.href = "/create")}
                  className="w-full mt-4 bg-zinc-900 text-white hover:bg-zinc-800"
                >
                  Start Writing <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Pillar 3: Tools */}
            <Card className="bg-zinc-50 border-zinc-200 hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 shadow-sm text-orange-600 group-hover:scale-110 transition-transform">
                  <Wrench className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Launch Micro-Tools</CardTitle>
                <CardDescription className="text-base text-zinc-500">
                  Turn your scripts and utilities into public tools. One-click
                  publishing to the VibeKoder ecosystem.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => (window.location.href = "/tools")}
                  variant="outline"
                  className="w-full mt-4"
                >
                  Explore Tools <Wrench className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className=" text-3xl lg:text-5xl bitcount-prop-single  font-bold text-zinc-900">
              Workflow Simplified
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-zinc-200 z-0 w-2/3 mx-auto"></div>

            {[
              {
                title: "Type Prompt",
                desc: "Write your prompt once in the omnibar.",
                icon: MessageSquare,
              },
              {
                title: "Select Tools",
                desc: "Pick your AI squad or let Auto-Pilot choose.",
                icon: Layers,
              },
              {
                title: "Launch & Sync",
                desc: "Watch them work in perfect synchronization.",
                icon: Maximize2,
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="h-16 w-16 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl bitcount-prop-single font-bold text-zinc-900 mb-4">
            Your Keys. Your Data.
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-8">
            We never store your data. VibeKoder runs 100% locally in your
            browser. You bring your own API keys, and they stay encrypted on
            your device.
          </p>
          <Button variant="outline" className="rounded-full">
            Read Privacy Policy
          </Button>
        </div>
      </section>
      {/* Ecosystem Section */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl bitcount-prop-single md:text-5xl font-bold text-zinc-900 mb-6">
              Discover the Ecosystem
            </h2>
            <p className="text-lg text-zinc-500">
              Explore tools and resources built by the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Blogs Card */}
            <a
              href="/blogs"
              className="group relative overflow-hidden rounded-3xl bg-white p-8 border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-xl text-left"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <BookOpen className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                  Tech Blogs
                </h3>
                <p className="text-zinc-500 mb-6">
                  Deep dives into frontend architecture, AI integration, and
                  modern web development.
                </p>
                <span className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Read Articles <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </a>

            {/* Tools Card */}
            <a
              href="/tools"
              className="group relative overflow-hidden rounded-3xl bg-white p-8 border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-xl text-left"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Wrench className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6 text-orange-600">
                  <Wrench size={24} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                  Developer Tools
                </h3>
                <p className="text-zinc-500 mb-6">
                  A collection of utilities like UUID generators, JSON
                  formatters, and more.
                </p>
                <span className="inline-flex items-center text-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Explore Tools <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl bitcount-prop-single  text-zinc-900">
                  VibeKoder
                </span>
              </div>
              <p className="text-sm text-zinc-500">
                The command center for the future of work.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>
                  <a href="#features" className="hover:text-zinc-900">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/create" className="hover:text-zinc-900">
                    Creator Studio
                  </a>
                </li>
                <li>
                  <a href="/blogs" className="hover:text-zinc-900">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="/tools" className="hover:text-zinc-900">
                    Tools
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>
                  <a href="#privacy" className="hover:text-zinc-900">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-zinc-900">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>
                  <a href="#" className="hover:text-zinc-900">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-zinc-900">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
            <p>© 2025 VibeKoder Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
