import React, { useEffect } from "react";
import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Prism from "prismjs";
import { motion } from "framer-motion";
import mermaid from "mermaid";
import { Flame } from "lucide-react";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-css";

export default function NgrokTutorialCompleteforHackersDevelopers() {
  useEffect(() => {
    Prism.highlightAll();
    mermaid.initialize({ startOnLoad: false, theme: "default" });
    mermaid.run({ querySelector: ".mermaid" });
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
              src="https://avatars.githubusercontent.com/u/10625446?s=280&v=4"
              alt="Cover"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
            />
          </div>

          <div className="flex-1 space-y-4 pt-2">
            <h1 className="text-3xl bricolage md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
              Ngrok Tutorial: Complete for Hackers & Developers 2025
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Ngrok provides tunneling, as mentioned above, which enables users
              to access local-hosted servers from outside the machine.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mt-4 mb-4">
          <span>2025-11-30</span>
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
            href="https://x.com/bharatpahwa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={16} />
          </a>
          <a
            href="https://github.com/bharat0709"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
          </a>
          <a
            href="https://instagram.com/pahwa_bharat_15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://youtube.com/sasaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={16} />
          </a>
        </div>
        <div className="flex mt-4 flex-wrap gap-2">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-md">
            ngrok
          </span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-md">
            tunneling
          </span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-md">
            localhost
          </span>
        </div>
      </div>

      <div className="text-gray-600 dark:text-gray-300">
        <div className="my-8">
          <img
            loading="lazy"
            src="https://adamtheautomator.com/wp-content/uploads/2022/03/How-to-Setup-Ngrok-for-Local-Application-Development.jpg"
            alt="Blog content"
            className="w-full h-auto rounded-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300 shadow-sm"
          />
        </div>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          ngrok is a cross-platform application that enables developers to
          expose a local development server to the Internet with minimal effort.
          The software makes your locally-hosted web server appear to be hosted
          on a subdomain of ngrok.com, meaning that no public IP or domain name
          on the local machine is needed. Similar functionality can be achieved
          with Reverse SSH Tunneling, but this requires more setup as well as
          hosting of your own remote ser
        </p>
        <h3
          id="ngrok-pricin"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          Ngrok pricin
        </h3>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Ngrok has a free pricing tier for developers who are bringing new
          projects to life. The downside to the free tier is the lack of custom
          domain supp
        </p>
        <h3
          id="how-does-ngrok-work"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          How does ngrok work
        </h3>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          ngrok is able to bypass NAT Mapping and firewall restrictions by
          creating a long-lived TCP tunnel from a randomly generated subdomain
          on ngrok.com (e.g. 3gf892ks.ngrok.com) to the local machine.
          <br />
          <br />
          After specifying the port that your web server listens on, the ngrok
          client program initiates a secure connection to the ngrok server and
          then anyone can make requests to your local server with the unique
          ngrok tunnel address. The ngrok developer’s guide contains more
          detailed information on how it work
        </p>
        <h3
          id="what-is-ngrok-tunneling"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          What is ngrok tunneling
        </h3>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Various tunnel servers are available around the world and locations
          include: US (Ohio), Europe (Frankfurt), Asia (Singapore), and
          Australia (Sydney). Alternatively, the ngrok server software can be
          self-hosted on a VPS or dedicated serve
        </p>
        <h3
          id="how-to-use-ngrok"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          How to use ngrok
        </h3>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          By default, ngrok creates both HTTP and HTTPS endpoints, making it
          useful for testing integrations with third-party services or APIs that
          require valid SSL/TLS domains. Other use cases include: quickly
          showcasing local demos to clients, testing mobile application
          backends, and running personal cloud services from your home PC.
          <br />
          <br />
          One praised feature of ngrok is the ability to track and replay HTTP
          requests via ngrok’s web console . The replay functionality is highly
          useful when testing API calls or webhooks as one can easily inspect
          all header content and request/response data in one place via the
          console UI
        </p>
        <h3
          id="resource"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          Resource
        </h3>

        <div className="my-8">
          <a
            href="https://www.pubnub.com/guides/what-is-http-streaming/"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors bg-white dark:bg-[#121212] text-decoration-none"
          >
            <div className="h-48 w-full overflow-hidden border-b border-gray-100 dark:border-gray-800">
              <img
                alt="What is HTTP Streaming?"
                src="https://www.pubnub.com/og/?text=What%20is%20HTTP%20Streaming%20and%20How%20Does%20it%20Work?&style=blue&img=2"
                className="w-full h-full object-cover m-0"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                <img
                  alt="What is HTTP Streaming?"
                  src="https://www.pubnub.com/favicon.ico"
                  className="w-4 h-4 rounded-sm m-0"
                />
                <span>PubNub</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-md m-0 leading-tight">
                What is HTTP Streaming?
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 m-0 mt-1">
                A brief overview of HTTP Streaming and how it works.
              </p>
            </div>
          </a>
        </div>

        <div className="my-8 relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
          <iframe
            src="https://www.youtube.com/embed/ts7JJzj4bCw"
            title="YouTube video player"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="bg-transparent border-l-4 border-gray-900 dark:border-gray-100 p-6 my-8 transition-colors duration-300">
          <p className="italic text-md text-gray-700 dark:text-gray-300">
            "ngrok is able to bypass NAT Mapping and firewall restrictions by
            creating a long-lived TCP tunnel from a randomly generated subdomain
            on ngrok.com (e.g. 3gf892ks.ngrok.com) to the local machine."
          </p>
        </div>

        <div className="my-8 flex justify-center bg-gray-50 dark:bg-[#1a1a1a] p-4 rounded-xl border border-gray-200 dark:border-gray-800 overflow-x-auto">
          <div className="mermaid">
            {`graph TD
    A[User runs ngrok command] --> B{ngrok connects to cloud}
    B --> C[Public URL generated]
    C --> D[Local service exposed]
    D --> E[Application accessible via public URL]
    E --> F[ngrok working successfully!]`}
          </div>
        </div>
        <hr className="border-t border-gray-300 dark:border-gray-700 my-8" />

        <div className="p-4 my-6 rounded-xl border flex gap-3 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-200 transition-colors duration-300">
          <div className="shrink-0 mt-0.5">
            <Flame size={20} />
          </div>
          <div className="text-md">
            Ngrok has a free pricing tier for developers who are bringing new
            projects to life. The downside to the free tier is the lack of
            custom domain supp
          </div>
        </div>
      </div>
    </motion.article>
  );
}
