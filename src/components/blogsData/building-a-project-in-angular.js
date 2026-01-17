import React, { useEffect } from "react";
import { Github, Linkedin } from "lucide-react";
import Prism from "prismjs";
import { motion } from "framer-motion";

import { Flame } from "lucide-react";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-css";

export default function BuildingaprojectinAngular() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        max-w-4xl mx-auto
        prose dark:prose-invert 
        prose-headings:font-bold
        prose-a:text-blue-600 dark:prose-a:text-blue-400
        prose-img:rounded-xl
      "
    >
      {/* HEADER SECTION */}
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="shrink-0">
            <img
              src="https://www.esenceweb.com/backend/uploads/angular-framework-tutorial-for-absolute-beginners.png"
              alt="Cover"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
            />
          </div>

          <div className="flex-1 space-y-4 pt-2">
            <h1 className="text-3xl bricolage md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
              Building a project in Angular
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              A comprehensive guide about how we can build start a angular
              project. This is like a starter kit to start any project in
              angular.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mt-4 mb-4">
          <span>2026-01-16</span>
          <span>•</span>
          <span>5 min read</span>
          <span>•</span>
          <span>Bharat Pahwa</span>
          <span>•</span>
          <a
            href="https://linkedin.com/in/bharat-pahwa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/bharat0709"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
          </a>
        </div>

        <div className="flex mt-4 flex-wrap gap-2">
          {[
            "Angular",
            "Tailwind",
            "CSS",
            "HTML",
            "React",
            "Project",
            "AngularCLI",
          ].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="text-gray-600 dark:text-gray-300">
        <h2
          id="what-is-angular"
          className="font-semibold text-2xl mb-4 mt-4 text-gray-900 dark:text-white transition-colors duration-300"
        >
          What is Angular?
        </h2>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Angular is a development platform and framework for building
          single-page client applications using HTML and TypeScript. Unlike a
          library (like React), Angular is a "batteries-included" framework,
          meaning it provides everything you need out of the box: routing, form
          validation, HTTP client, and state management tools.
        </p>
        <div className="bg-transparent border-l-4 border-gray-900 dark:border-gray-100 p-6 my-8 transition-colors duration-300">
          <p className="italic text-md text-gray-700 dark:text-gray-300">
            "💡 Fun Fact: The Name Why is it called "Angular"? It was named by
            one of its original creators, Adam Abrons. He chose the name because
            HTML relies heavily on angle brackets ({`< >`}), and Angular is all
            about extending HTML!"
          </p>
        </div>
        <h3
          id="key-features"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          Key Features:
        </h3>
        <h3
          id="1-install-nodejs"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          1. Install Node.js
        </h3>
        <ul className="list-disc list-outside pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300 marker:text-gray-400 transition-colors duration-300">
          <li className="pl-2">
            Component-Based: You build apps by creating reusable UI chunks
            called Components.
          </li>
          <li className="pl-2">
            TypeScript: Angular is built on TypeScript, offering strong typing,
            better tooling, and fewer bugs.
          </li>
          <li className="pl-2">
            Signals: A modern reactive primitive that handles data updates
            efficiently (similar to React hooks or Vue refs, but granular).
          </li>
          <li className="pl-2">
            Cross-Platform: Build for Web, Mobile Web, Native Mobile, and
            Desktop.
          </li>
        </ul>
        <h2
          id="environment-setup"
          className="font-semibold text-2xl mb-4 mt-4 text-gray-900 dark:text-white transition-colors duration-300"
        >
          Environment Setup
        </h2>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Angular requires Node.js (Active LTS or Maintenance LTS version).
          <br />
          <br />
          Download and install from nodejs.org.
          <br />
          <br />
          Verify installation in your terminal:
        </p>
        <div className="my-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-50"></div>
          <pre className="relative language-javascript rounded-xl !bg-[#1a1a1a] !border !border-gray-800 p-5 overflow-x-auto">
            <code className="text-sm font-mono text-gray-200">
              {`node -v
npm -v`}
            </code>
          </pre>
        </div>
        <h3
          id="2-install-the-angular-cli"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          2. Install the Angular CLI
        </h3>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          The Angular Command Line Interface (CLI) is your primary tool. It
          creates projects, generates code, and performs builds.
          <br />
          <br />
          Open your terminal/command prompt and run:
        </p>
        <div className="my-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-50"></div>
          <pre className="relative language-javascript rounded-xl !bg-[#1a1a1a] !border !border-gray-800 p-5 overflow-x-auto">
            <code className="text-sm font-mono text-gray-200">
              npm install -g @angular/cli
            </code>
          </pre>
        </div>
        <h3
          id="3-creating-your-first-project"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          3: Creating Your First Project
        </h3>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          We will create a new project using the CLI. Modern Angular defaults to
          "Standalone Components," which removes the need for complex module
          files (AppModule).
        </p>
        <ul className="list-disc list-outside pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300 marker:text-gray-400 transition-colors duration-300">
          <li className="pl-2">
            Generate the Project: Navigate to your desired folder and run:
          </li>
        </ul>
        <div className="my-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-50"></div>
          <pre className="relative language-javascript rounded-xl !bg-[#1a1a1a] !border !border-gray-800 p-5 overflow-x-auto">
            <code className="text-sm font-mono text-gray-200">
              ng new my-angular-app
            </code>
          </pre>
        </div>
        <ul className="list-disc list-outside pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300 marker:text-gray-400 transition-colors duration-300">
          <li className="pl-2">Configure Options:</li>
        </ul>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          The CLI will ask a few questions. Select the following for a modern
          setup:
          <br />
          <br />
          Which stylesheet format would you like to use? → CSS or SCSS (SCSS is
          recommended for scaling).
          <br />
          <br />
          Do you want to enable Server-Side Rendering (SSR)? → No (Keep it
          simple for your first project).
        </p>
        <ul className="list-disc list-outside pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300 marker:text-gray-400 transition-colors duration-300">
          <li className="pl-2">Start the Server:</li>
        </ul>
        <div className="my-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-50"></div>
          <pre className="relative language-javascript rounded-xl !bg-[#1a1a1a] !border !border-gray-800 p-5 overflow-x-auto">
            <code className="text-sm font-mono text-gray-200">
              {`cd my-angular-app
ng serve`}
            </code>
          </pre>
        </div>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Open your browser to http://localhost:4200. You should see the default
          Angular welcome page.
        </p>
        [Image of Angular architecture diagram]
        <h3
          id="anatomy-of-the-project"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          Anatomy of the Project
        </h3>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Understanding the folder structure is crucial.
        </p>
        <ul className="list-disc list-outside pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300 marker:text-gray-400 transition-colors duration-300">
          <li className="pl-2">
            src/main.ts: The entry point. It bootstraps the application using
            bootstrapApplication.
          </li>
          <li className="pl-2">
            src/index.html: The main HTML file. It contains the
            &lt;app-root&gt;&lt;/app-root&gt; tag where your app loads.
          </li>
          <li className="pl-2">src/app/: This is where you work.</li>
          <li className="pl-2">
            app.component.ts: The root logic of your app.
          </li>
          <li className="pl-2">
            app.component.html: The root template (UI) of your app.
          </li>
          <li className="pl-2">
            app.component.css: Styles specific to this component only.
          </li>
        </ul>
        <h3
          id="tailwind-installation"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          Tailwind Installation
        </h3>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Before we install it, you should know what you are getting into.
        </p>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Standard CSS: You write a class .btn in a separate file and name it.
          <br />
          Tailwind CSS: You write class="p-2 text-white" directly in your HTML.
          <br />
          <br />
          It is a Utility-First framework. Instead of pre-built components (like
          Bootstrap's "navbar"), it gives you low-level building blocks
          (utilities) to build anything you want.
        </p>
        <div className="bg-transparent border-l-4 border-gray-900 dark:border-gray-100 p-6 my-8 transition-colors duration-300">
          <p className="italic text-md text-gray-700 dark:text-gray-300">
            "💡 Fun Fact: The Creator's Regret Adam Wathan, the creator of
            Tailwind, originally built it just for himself to stop fighting with
            CSS on his own projects. He didn't think anyone else would want it
            because it looked "ugly" in the HTML. He released it almost by
            accident, and it became one of the most popular CSS frameworks in
            history!"
          </p>
        </div>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Install Tailwind via NPM
        </p>
        <div className="my-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-50"></div>
          <pre className="relative language-javascript rounded-xl !bg-[#1a1a1a] !border !border-gray-800 p-5 overflow-x-auto">
            <code className="text-sm font-mono text-gray-200">
              npm install -D tailwindcss postcss autoprefixer
            </code>
          </pre>
        </div>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Initialize the configuration:
        </p>
        <div className="my-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-50"></div>
          <pre className="relative language-javascript rounded-xl !bg-[#1a1a1a] !border !border-gray-800 p-5 overflow-x-auto">
            <code className="text-sm font-mono text-gray-200">
              npx tailwindcss init
            </code>
          </pre>
        </div>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          This creates a tailwind.config.js file in your root folder.
        </p>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Configure the Paths
          <br />
          <br />
          Open tailwind.config.js and update the content array:
        </p>
        <div className="my-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-50"></div>
          <pre className="relative language-javascript rounded-xl !bg-[#1a1a1a] !border !border-gray-800 p-5 overflow-x-auto">
            <code className="text-sm font-mono text-gray-200">
              {`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // <--- Add this line!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
            </code>
          </pre>
        </div>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Add the Tailwind Directives
        </p>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Open src/styles.css and replace everything with this:
        </p>
        <div className="my-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-50"></div>
          <pre className="relative language-javascript rounded-xl !bg-[#1a1a1a] !border !border-gray-800 p-5 overflow-x-auto">
            <code className="text-sm font-mono text-gray-200">
              {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
            </code>
          </pre>
        </div>
        <h3
          id="verify-it-works"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          Verify It Works
        </h3>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Let's test it by deleting the default Angular boilerplate and making
          something custom.
          <br />
          <br />
          Open src/app/app.component.html and paste this:
        </p>
        <div className="my-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-50"></div>
          <pre className="relative language-javascript rounded-xl !bg-[#1a1a1a] !border !border-gray-800 p-5 overflow-x-auto">
            <code className="text-sm font-mono text-gray-200">
              {`<div class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="bg-white p-8 rounded-lg shadow-xl text-center">
    <h1 class="text-4xl font-bold text-blue-600 mb-4">
      Hello Tailwind!
    </h1>
    <p class="text-gray-600 text-lg">
      This card was built without writing a single line of CSS.
    </p>
    <button class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
      Click Me
    </button>
  </div>
</div>`}
            </code>
          </pre>
        </div>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Now run your app
        </p>
        <div className="my-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-50"></div>
          <pre className="relative language-javascript rounded-xl !bg-[#1a1a1a] !border !border-gray-800 p-5 overflow-x-auto">
            <code className="text-sm font-mono text-gray-200">
              ng serve --o
            </code>
          </pre>
        </div>
        <div className="bg-transparent border-l-4 border-gray-900 dark:border-gray-100 p-6 my-8 transition-colors duration-300">
          <p className="italic text-md text-gray-700 dark:text-gray-300">
            "💡 Fun Fact: Dark Mode Easy Mode Tailwind makes Dark Mode
            incredibly easy. You just add dark: to any class. Example:{" "}
            <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">
              {`<div class="bg-white dark:bg-black">`}
            </code>
            . If the user's computer is in Dark Mode, the background
            automatically turns black. No complex media queries required!"
          </p>
        </div>
        <div className="p-4 my-6 rounded-xl border flex gap-3 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-200 transition-colors duration-300">
          <div className="shrink-0 mt-0.5">
            <Flame size={20} />
          </div>
          <div className="text-md">
            If you see a nice centered card with a blue button, congratulations!
            You have successfully set up the modern Angular + Tailwind stack.
          </div>
        </div>
      </div>
    </motion.article>
  );
}
