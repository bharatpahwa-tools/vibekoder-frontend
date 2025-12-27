import { useEffect } from "react";
import Prism from "prismjs";
import n8nSetup from "../../assets/images/n8n-setup.png";
import ngrokDiagram from "../../assets/images/ngrok-working.png";
import n8nPreview from "../../assets/images/n8n-preview.webp";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-yaml";

export default function N8nSetupArticle() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <article
      className="
      text-gray-600 dark:text-gray-200
        prose dark:prose-invert max-w-none
        prose-headings:font-bold
        prose-h1:text-4xl prose-h1:mb-3
        prose-h2:mt-10 prose-h2:mb-4
        prose-p:text-[17px] prose-p:leading-relaxed
        prose-img:rounded-xl prose-img:shadow-md
        prose-code:text-sm prose-code:bg-gray-100 dark:prose-code:bg-gray-800
        prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-[#0f0f0f] prose-pre:text-gray-100
        prose-pre:border prose-pre:border-gray-800
        dark:prose-pre:border-gray-700
        prose-a:text-blue-600 dark:prose-a:text-blue-400
        prose-blockquote:border-l-4 prose-blockquote:border-blue-500
        prose-blockquote:italic
      "
    >
      <div className="flex  gap-4 items-center">
        <img
        loading="lazy"
          src={n8nSetup}
          alt="n8n Setup Diagram"
          className="w-52  h-52 mb-6 rounded-3xl"
        />
        <div className="mb-8">
          <h1
            id="title"
            className="text-3xl text-gray-600 dark:text-gray-200 mb-4 font-bold"
          >
            Setting Up n8n with Docker, Ngrok & Persistent Data
          </h1>
          <p className="text-gray-600 dark:text-gray-200 text-sm">
            A complete guide to installing n8n locally using Docker, exposing it
            securely over the internet via ngrok, and keeping your workflows
            safe — even if containers stop or restart. From local to production
            without the cost.
          </p>
        </div>
      </div>
      {/* TITLE */}
      {/* INTRO */}
      <h2 id="what-is-n8n"  className="font-semibold text-xl mb-2">What is n8n?</h2>
      <p>
        <strong>n8n</strong> is a powerful workflow automation platform that
        uniquely combines AI capabilities with business process automation. The
        platform enables connection to any app or API while maintaining the
        flexibility of code with the speed of no-code.
      </p>
      <p>
        You can create workflows by dragging and dropping blocks (called nodes).
        Each node does something — like sending a WhatsApp message, saving data
        to Google Sheets, calling an API, or even integrating with AI models.
      </p>
      <img
      loading="lazy"
        src={n8nPreview}
        alt="n8n Preview"
        className="w-full mt-4 mb-4 h-auto mb-6 rounded-3xl"
      />

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6">
        <p className="font-semibold text-lg mb-3">Why people use n8n:</p>
        <ul className="space-y-2">
          <li>✔️ It saves time by automating repetitive work</li>
          <li>✔️ It connects almost any app or service</li>
          <li>✔️ It works with both simple and complex logic</li>
          <li>✔️ You own your data because it's open-source</li>
          <li>✔️ It's free to self-host with unlimited workflows</li>
        </ul>
      </div>

      <h2 id="what-is-docker"  className="font-semibold text-xl mb-2">What is Docker?</h2>
      <p>
        <strong>Docker</strong> is a platform that lets you package applications
        and their dependencies into lightweight containers. These containers
        ensure your app runs exactly the same on any machine — your laptop,
        servers, or the cloud.
      </p>
      <p>
        Docker removes the classic "it works on my machine" problem by giving
        every app its own isolated environment, making development and
        deployment predictable and reliable.
      </p>

      <div className="bg-green-100 dark:bg-green-900/20 p-6 rounded-xl my-6">
        <p className="font-semibold text-xl mb-3">Why people use Docker:</p>
        <ul className="space-y-2">
          <li>
            ✔️ It ensures consistent environments across development and
            production
          </li>
          <li>✔️ It simplifies deployment — package once, run anywhere</li>
          <li>✔️ It isolates applications to avoid dependency conflicts</li>
          <li>✔️ It speeds up development, scaling, and CI/CD workflows</li>
        </ul>
      </div>

      <h2 id="what-is-ngrok" className="font-semibold text-xl mb-2"> What is ngrok?</h2>
      <p>
        <strong>ngrok</strong> is a tunneling tool that exposes your local
        server to the internet using a secure public URL. This is incredibly
        useful for testing webhooks, APIs, and online integrations without
        hosting your app on a live server.
      </p>
      <p>
        Developers use ngrok to quickly share local projects, test payment
        integrations, receive WhatsApp or webhook events, or preview work from
        any device anywhere in the world.
      </p>

      <div className="bg-purple-100 dark:bg-purple-900/20 p-6 rounded-xl my-6">
        <p className="font-semibold text-lg mb-3">Why people use ngrok:</p>
        <ul className="space-y-2">
          <li>
            ✔️ It creates instant secure public URLs for your local server
          </li>
          <li>✔️ It's perfect for testing webhooks and API callbacks</li>
          <li>
            ✔️ It removes the need for manual server deployment during
            development
          </li>
          <li>
            ✔️ It allows easy sharing of local apps with clients or teammates
          </li>
          <li>✔️ It provides free static domains with HTTPS</li>
        </ul>
      </div>

      <img
      loading="lazy"
        src={ngrokDiagram}
        alt="Ngrok Working Diagram"
        className="w-full h-auto mb-6 rounded-3xl"
      />

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <p className="font-semibold text-lg mb-2">🎯 What This Guide Covers:</p>
        <p>
          By the end of this tutorial, you'll have a production-ready n8n
          instance running on your computer but accessible from anywhere in the
          world. You'll be able to integrate with services like Telegram,
          Stripe, Google, and more — all without paying for hosting or a domain
          name.
        </p>
      </div>

      {/* PREREQUISITES */}
      <h2 id="prerequisites" className="font-semibold text-xl mb-2">Prerequisites</h2>
      <p>Before we begin, make sure you have the following installed:</p>

      <table className="w-full border-collapse my-6 text-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">
              Tool
            </th>
            <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">
              Version
            </th>
            <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">
              Purpose
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              Docker Desktop
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              Latest
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              Runs n8n container
            </td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-900/50">
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              Ngrok Account
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              Free
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              Expose local n8n to the internet
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              Terminal/Command Prompt
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              Built-in
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              Run commands
            </td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-900/50">
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              Node.js (optional)
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              16+
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              CLI tools / scripting
            </td>
          </tr>
        </tbody>
      </table>

      {/* INSTALLATION */}
      <h2 id="step-1-docker-volume" className="font-semibold text-xl mb-2 mt-6">
        Step 1 — Create a Docker Volume for Persistent Data
      </h2>
      <p>
        This is the most important step. Creating a Docker volume ensures your
        workflows, credentials, and execution history{" "}
        <strong>don't get deleted</strong> when the container stops or gets
        removed.
      </p>
      <p>
        Think of a volume as a special storage box that lives outside your
        container. Even if you delete the container, the box (and all your data)
        stays safe.
      </p>
      <pre className="language-bash rounded-xl">
        <code>{`docker volume create n8n_data`}</code>
      </pre>
      <p className="mt-4">You can verify the volume was created by running:</p>
      <pre className="language-bash rounded-xl">
        <code>{`docker volume ls`}</code>
      </pre>

      <h2 id="step-2-run-n8n-initial" className="font-semibold text-xl mb-2 mt-8">
        Step 2 — Run n8n with Docker (Initial Setup)
      </h2>
      <p>
        Now let's start n8n for the first time. This command will download the
        n8n image and run it with our persistent volume attached:
      </p>
      <pre className="language-bash rounded-xl">
        <code>
          {`docker run -it --rm \\
  --name n8n \\
  -p 5678:5678 \\
  -v n8n_data:/home/node/.n8n \\
  n8nio/n8n`}
        </code>
      </pre>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
        <p className="font-semibold mb-2">📝 What this command does:</p>
        <ul className="space-y-2 text-sm">
          <li>
            <code>-it</code> — Interactive mode (you can see logs)
          </li>
          <li>
            <code>--rm</code> — Remove container when it stops (data stays in
            volume)
          </li>
          <li>
            <code>--name n8n</code> — Names the container "n8n"
          </li>
          <li>
            <code>-p 5678:5678</code> — Maps port 5678 on your computer to port
            5678 in the container
          </li>
          <li>
            <code>-v n8n_data:/home/node/.n8n</code> — Attaches our volume to
            store data
          </li>
          <li>
            <code>n8nio/n8n</code> — The official n8n Docker image
          </li>
        </ul>
      </div>

      <p className="mt-4">
        Once the container starts, visit:{" "}
        <code className="text-blue-600 dark:text-blue-400">
          http://localhost:5678
        </code>
      </p>
      <p>
        You'll be prompted to create an admin account. Go ahead and set up your
        username and password — this will be saved in your persistent volume.
      </p>

      <h2 id="localhost-problem" className="font-semibold text-xl mb-2 mt-8 ">
        The Problem with Localhost
      </h2>
      <p>
        Right now, your n8n instance is only accessible from your computer using
        <code>localhost:5678</code>. This creates several limitations:
      </p>
      <ul className="space-y-2 mt-2 mb-2">
        <li>❌ You can't access it from your phone or other devices</li>
        <li>
          ❌ Services like Telegram, Stripe, or Google can't send webhooks to it
        </li>
        <li>❌ You can't share workflows with teammates or clients</li>
        <li>❌ You can't test integrations that require a public URL</li>
      </ul>
      <p>
        Most cloud services and APIs require a <strong>public domain</strong>{" "}
        with HTTPS to send webhook notifications. They don't accept raw IP
        addresses or localhost.
      </p>
      <p>
        This is where ngrok comes in — it gives us a free public domain that
        tunnels directly to our local server. Let's set it up!
      </p>

      <h2  id="step-3-ngrok-account" className="font-semibold text-xl mb-2 mt-4">
        Step 3 — Set Up Your Ngrok Account
      </h2>
      <p>
        Before we can expose n8n to the internet, you need to create an ngrok
        account and get your authentication token.
      </p>
      <ol className="space-y-2">
        <li>
          Go to{" "}
          <a href="https://ngrok.com" target="_blank" rel="noopener noreferrer">
            ngrok.com
          </a>{" "}
          and sign up for a free account
        </li>
        <li>Once logged in, you'll land on your ngrok dashboard</li>
        <li>
          The dashboard will show you instructions for installation and setup
        </li>
        <li>
          Keep this tab open — we'll need information from here in the next
          steps
        </li>
      </ol>

      <h2 id="step-4-install-ngrok" className="font-semibold text-xl mb-2 mt-4">
        Step 4 — Install Ngrok on Your Machine
      </h2>
      <p>
        You can either follow the CLI instructions in the dashboard or download
        and unzip ngrok directly. Here's the manual method:
      </p>
      <ol className="space-y-2">
        <li>Download ngrok for your operating system from the dashboard</li>
        <li>
          Unzip the downloaded file to a folder of your choice (e.g.,{" "}
          <code>~/ngrok</code> or <code>C:\ngrok</code>)
        </li>
        <li>
          Remember this location — you'll need to navigate to it in your
          terminal
        </li>
      </ol>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <p className="font-semibold mb-2">💡 Tip for Mac/Linux users:</p>
        <p className="text-sm">
          You can move ngrok to <code>/usr/local/bin</code> to run it from
          anywhere:
        </p>
        <pre className="language-bash mt-2 rounded-xl">
          <code>{`sudo mv ngrok /usr/local/bin/`}</code>
        </pre>
      </div>

      <h2 id="step-5-authenticate-ngrok" className="font-semibold text-xl mb-2 mt-4 ">
        {" "}
        Step 5 — Authenticate Ngrok
      </h2>
      <p>
        After unzipping ngrok, you need to add your authentication token to link
        your local machine to your ngrok account. This token acts like a
        password that tells ngrok "this domain belongs to me."
      </p>
      <p>
        Open your terminal and navigate to the folder where you unzipped ngrok:
      </p>
      <pre className="language-bash rounded-xl">
        <code>{`# Check where you are
pwd

# Navigate to ngrok folder (example)
cd ~/Downloads/ngrok

# Or on Windows
cd C:\\ngrok`}</code>
      </pre>
      <p className="mt-4">
        Now run the authentication command. You can find your auth token in the
        ngrok dashboard:
      </p>
      <pre className="language-bash rounded-xl">
        <code>{`# On Windows:
ngrok config add-authtoken YOUR_AUTH_TOKEN_HERE

# On Mac/Linux:
./ngrok config add-authtoken YOUR_AUTH_TOKEN_HERE`}</code>
      </pre>
      <p className="mt-4">
        This command stores your token in a config file called{" "}
        <code>ngrok.yml</code> on your local system. If you're curious where
        this file is stored, it's typically in:
      </p>
      <ul className="text-sm">
        <li>
          Windows: <code>C:\Users\YourName\.ngrok2\ngrok.yml</code>
        </li>
        <li>
          Mac/Linux: <code>~/.ngrok2/ngrok.yml</code>
        </li>
      </ul>

      <h2 id="step-6-claim-static-domain"  className="font-semibold text-lg mb-2 mt-4 ">
        Step 6 — Claim a Static Domain (Free)
      </h2>
      <p>
        One of the best features of ngrok's free plan is the ability to claim a
        static domain that doesn't change every time you restart the tunnel.
        This is crucial for n8n because we'll configure this domain in our
        environment variables.
      </p>
      <ol className="space-y-2">
        <li>In your ngrok dashboard, look for the option to claim a domain</li>
        <li>
          Click on it and claim your free static domain (e.g.,{" "}
          <code>your-name-12345.ngrok-free.app</code>)
        </li>
        <li>
          Copy this entire URL including the <code>https://</code> part
        </li>
        <li>
          Save it somewhere — you'll need it multiple times in the next steps
        </li>
      </ol>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
        <p className="font-semibold mb-2">⚠️ Important:</p>
        <p>
          Your static domain won't work until you actually start the ngrok
          tunnel (which we'll do in Step 9). For now, just copy and save the
          URL.
        </p>
      </div>

      <h2 id="step-7-stop-initial-container"  className="font-semibold text-lg mb-2 mt-4 ">
        Step 7 — Stop the Initial n8n Container
      </h2>
      <p>
        Before we upgrade our setup with proper environment variables, we need
        to stop the container we started in Step 2. But don't worry — your data
        is completely safe because it's stored in the <code>n8n_data</code>{" "}
        volume we created.
      </p>
      <p>In your terminal where n8n is running, press:</p>
      <ul>
        <li>
          <code>Ctrl + C</code> to stop the container
        </li>
      </ul>
      <p className="mt-4">
        Or if you started it in detached mode, you can stop it via Docker
        Desktop or with this command:
      </p>
      <pre className="language-bash rounded-xl">
        <code>{`docker stop n8n`}</code>
      </pre>
 
      <h2  id="step-8-production-config" className="font-semibold text-lg mb-2 mt-4">
        Step 8 — Launch n8n with Production Configuration
      </h2>
      <p>
        Now we'll create a new n8n container with all the environment variables
        needed for production use. This includes webhook support, community node
        installation, and optimized file handling.
      </p>

      <pre className="language-bash rounded-xl">
        <code>
          {`docker run -d \\
  --name n8n \\
  -p 5555:5678 \\
  -v n8n_data:/home/node/.n8n \\
  -e N8N_EDITOR_BASE_URL=https://your-name-12345.ngrok-free.app \\
  -e WEBHOOK_URL=https://your-name-12345.ngrok-free.app \\
  -e EXECUTIONS_MODE=regular \\
  -e N8N_DIAGNOSTICS_ENABLED=false \\
  -e N8N_COMMUNITY_PACKAGES_ENABLED=true \\
  -e N8N_DEFAULT_BINARY_DATA_MODE=filesystem \\
  n8nio/n8n`}
        </code>
      </pre>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
        <p className="font-semibold mb-2">🔴 Important:</p>
        <p>
          Replace <code>https://your-name-12345.ngrok-free.app</code> with the
          actual ngrok domain you claimed in Step 6. Make sure to include
          <code>https://</code> at the beginning!
        </p>
      </div>

      <h3 id="environment-variables"  className="text-xl font-semibold mt-8 mb-4">
        Understanding Each Environment Variable:
      </h3>

      <div className="space-y-6">
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
          <p className="font-semibold text-lg mb-2">
            <code>N8N_EDITOR_BASE_URL</code>
          </p>
          <p>
            This is the main access point for the n8n frontend interface.
            Instead of accessing n8n through <code>localhost</code>, we use your
            ngrok domain so you can access n8n from any device, anywhere in the
            world. This URL appears in emails, execution logs, and when sharing
            workflows.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
          <p className="font-semibold text-lg mb-2">
            <code>WEBHOOK_URL</code>
          </p>
          <p>
            This is <strong>critical</strong> for integrations. When services
            like Telegram, Stripe, or Google need to send data to your
            workflows, they'll use this URL. It must be public and secure
            (HTTPS). Without this, webhook nodes won't work properly.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
          <p className="font-semibold text-lg mb-2">
            <code>N8N_COMMUNITY_PACKAGES_ENABLED=true</code>
          </p>
          <p>
            This allows you to install custom nodes from the n8n community
            marketplace. This includes specialized integrations like MCP nodes,
            AI model nodes, or custom API connectors that aren't available in
            the default installation.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
          <p className="font-semibold text-lg mb-2">
            <code>N8N_DEFAULT_BINARY_DATA_MODE=filesystem</code>
          </p>
          <p>
            This tells n8n to store large files (PDFs, images, videos, audio) on
            disk instead of in memory (RAM). This is crucial for performance and
            stability. If you process heavy files and keep everything in memory,
            your container could slow down or crash. With filesystem mode, files
            are temporarily saved to disk during workflow execution.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
          <p className="font-semibold text-lg mb-2">
            Port Mapping: <code>-p 5555:5678</code>
          </p>
          <p>
            We're using port <code>5555</code> on your host machine instead of
            <code>5678</code>. This is useful if you want to run multiple n8n
            instances or if port 5678 is already in use. You can change this to
            any available port. Inside the container, n8n still runs on port
            5678.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
          <p className="font-semibold text-lg mb-2">
            Volume Mapping: <code>-v n8n_data:/home/node/.n8n</code>
          </p>
          <p>
            This is how we preserve data. The volume <code>n8n_data</code> on
            your computer is linked to <code>/home/node/.n8n</code> inside the
            container. This means:
          </p>
          <ul className="mt-2 space-y-1 text-sm ml-4">
            <li>• Workflows are saved permanently</li>
            <li>• Credentials are preserved</li>
            <li>• Execution history persists</li>
            <li>• Community nodes stay installed</li>
            <li>• All settings are retained</li>
          </ul>
        </div>
      </div>

      <h2 id="step-9-start-ngrok" className="text-xl font-semibold mt-8 mb-3">
        Step 9 — Start the Ngrok Tunnel
      </h2>
      <p>
        Now that your n8n container is running with the correct configuration,
        let's connect it to the internet via ngrok. Open a{" "}
        <strong>new terminal window</strong> (keep the Docker container running
        in the other one).
      </p>
      <p>Navigate to your ngrok folder:</p>
      <pre className="language-bash rounded-xl">
        <code>{`cd /path/to/your/ngrok/folder`}</code>
      </pre>
      <p className="mt-4">Now start the tunnel pointing to port 5555:</p>
      <pre className="language-bash rounded-xl">
        <code>{`# On Windows:
ngrok http 5555

# On Mac/Linux:
./ngrok http 5555

# Or if you moved it to /usr/local/bin:
ngrok http 5555`}</code>
      </pre>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
        <p className="font-semibold mb-2">✅ Success!</p>
        <p>
          You should see output showing your public URL is now active and
          forwarding traffic to <code>localhost:5555</code>. The ngrok interface
          will show:
        </p>
        <ul className="mt-2 space-y-1 text-sm">
          <li>• Your session status</li>
          <li>• The public URL (should match the domain you claimed)</li>
          <li>• Connection info and request logs</li>
        </ul>
      </div>

      <p className="mt-4">
        <strong>Keep this terminal window open!</strong> The tunnel only works
        while this command is running. If you close it, your public URL will
        stop working.
      </p>

      <h2 id="step-10-verify" className="font-semibold mt-4 text-xl mb-2">
        Step 10 — Verify Everything Works
      </h2>
      <p>
        Let's make sure your setup is working correctly from both local and
        public access.
      </p>

      <h3 id="test-local-access" className="text-xl font-semibold mt-6 mb-3">Test 1: Local Access</h3>
      <ol className="space-y-2">
        <li>
          Open your browser and go to <code>http://localhost:5555</code>
        </li>
        <li>Log in with the credentials you created earlier</li>
        <li>Verify all your previous workflows are still there</li>
        <li>Check that your settings and credentials are intact</li>
      </ol>
      <p className="mt-2">
        ✅ If you see your workflows, your volume mapping worked perfectly!
      </p>

      <h3 id="test-public-access" className="text-xl font-semibold mt-8 mb-3">Test 2: Public Access</h3>
      <ol className="space-y-2">
        <li>Open a new browser tab (or grab your phone)</li>
        <li>
          Visit your ngrok URL:{" "}
          <code className="text-blue-600 dark:text-blue-400">
            https://your-name-12345.ngrok-free.app
          </code>
        </li>
        <li>You might see an ngrok warning page — click "Visit Site"</li>
        <li>You should see your n8n login page</li>
        <li>Log in and confirm everything works</li>
      </ol>

      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg my-8">
        <p className="text-2xl font-bold mb-2">🎉 Congratulations!</p>
        <p className="text-lg">
          Your local n8n instance is now accessible from anywhere in the world
          with a secure HTTPS domain. You've successfully gone from local to
          production!
        </p>
      </div>

      <h2 id="understanding-webhooks" className="text-xl font-semibold mt-8 mb-3" >Understanding Webhooks: Why This Matters</h2>
      <p>
        Now that we have a public URL, let's understand why this is so powerful
        for automation workflows.
      </p>
      <p>
        A <strong>webhook</strong> is a way for external services to notify your
        server in real time when something happens. Think of it as a doorbell —
        when someone presses it, you get notified immediately.
      </p>

      <h3 id="webhook-examples" className="text-xl font-semibold mt-6 mb-3">Real-World Examples:</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-1">📱 Telegram Bot</p>
          <p className="text-sm">
            When a user sends a message to your bot, Telegram sends that message
            to your webhook URL. Your n8n workflow receives it instantly and can
            respond automatically.
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-1">💳 Stripe Payments</p>
          <p className="text-sm">
            When a payment is completed, Stripe sends payment details to your
            webhook. Your workflow can then send a confirmation email, update a
            database, or trigger fulfillment.
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-1">📺 YouTube Notifications</p>
          <p className="text-sm">
            When someone comments on your video, YouTube can notify your
            webhook. Your workflow can auto-moderate, send alerts, or post to
            Discord.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-1">📋 Form Submissions</p>
          <p className="text-sm">
            When someone submits a form on your website, the data is sent to
            your webhook. Your workflow can save it to Google Sheets, send
            notifications, or trigger follow-up emails.
          </p>
        </div>
      </div>

      <p className="mt-6">
        All of these events rely on a{" "}
        <strong>public, secure webhook URL</strong> — an address that these
        services can use to send data to n8n. By setting your webhook URL to
        your ngrok domain, you're telling services like Telegram or Stripe:{" "}
        <em>
          "Hey, here's my webhook. Notify me here when something happens."
        </em>
      </p>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
        <p className="font-semibold mb-2">❌ Why Localhost Doesn't Work:</p>
        <p>
          Services like Telegram and Stripe can't reach your computer directly.
          They're on the internet, and your localhost is isolated on your
          private network. That's why we need ngrok — it creates a secure bridge
          from the public internet to your local machine.
        </p>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-3" id="docker-compose-alternative" >Alternative: Docker Compose Setup</h2>
      <p>
        If you prefer using Docker Compose for easier management and automatic
        restarts, here's a complete configuration file you can use:
      </p>
      <pre className="language-yaml rounded-xl">
        <code>
          {`version: '3.8'

services:
  n8n:
    image: n8nio/n8n:latest
    container_name: n8n
    restart: unless-stopped
    ports:
      - "5555:5678"
    volumes:
      - n8n_data:/home/node/.n8n
    environment:
      - N8N_EDITOR_BASE_URL=https://your-name-12345.ngrok-free.app
      - WEBHOOK_URL=https://your-name-12345.ngrok-free.app
      - N8N_COMMUNITY_PACKAGES_ENABLED=true
      - N8N_DEFAULT_BINARY_DATA_MODE=filesystem
      - EXECUTIONS_MODE=regular
      - N8N_DIAGNOSTICS_ENABLED=false

volumes:
  n8n_data:
    external: true`}
        </code>
      </pre>

      <p className="mt-4">
        Save this as <code>docker-compose.yml</code> in a folder, then run:
      </p>
      <pre className="language-bash rounded-xl">
        <code>{`# Start n8n
docker-compose up -d

# View logs
docker-compose logs -f

# Stop n8n
docker-compose down

# Stop and remove (data stays in volume)
docker-compose down`}</code>
      </pre>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
        <p className="font-semibold mb-2">💡 Benefits of Docker Compose:</p>
        <ul className="space-y-1 text-sm">
          <li>✅ Easier to manage and restart</li>
          <li>
            ✅ Configuration is stored in a file (version control friendly)
          </li>
          <li>
            ✅ Automatic restart with <code>restart: unless-stopped</code>
          </li>
          <li>✅ Can add multiple services (database, Redis, etc.)</li>
          <li>✅ Simpler commands to remember</li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-3" id="data-persistence" >Understanding Data Persistence</h2>
      <p>
        Let's clarify how your data is stored and why it's safe even when you
        delete or recreate containers.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
          <p className="font-semibold text-lg mb-2">🗂️ Host Path</p>
          <p>
            This is the <code>n8n_data</code> volume on your computer. Docker
            manages this in a special location:
          </p>
          <ul className="mt-2 space-y-1 text-sm ml-4">
            <li>
              • Linux: <code>/var/lib/docker/volumes/n8n_data/_data</code>
            </li>
            <li>
              • Mac:{" "}
              <code>~/Library/Containers/com.docker.docker/Data/...</code>
            </li>
            <li>
              • Windows:{" "}
              <code>
                \\wsl$\docker-desktop-data\data\docker\volumes\n8n_data
              </code>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
          <p className="font-semibold text-lg mb-2">📦 Container Path</p>
          <p>
            This is <code>/home/node/.n8n</code> inside Docker where n8n stores
            data internally while running. This path only exists inside the
            container.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
          <p className="font-semibold text-lg mb-2">🔗 The Link</p>
          <p>
            These paths are linked, so they always reflect the same data. When
            n8n writes to <code>/home/node/.n8n</code> inside the container,
            it's actually writing to the <code>n8n_data</code> volume on your
            computer.
          </p>
          <p className="mt-2 text-sm">
            <strong>Result:</strong> Even if you delete or recreate the
            container, your workflows, credentials, and settings stay intact as
            long as the volume exists.
          </p>
        </div>
      </div>

      <h3 id="volume-contents" className="text-xl font-semibold mt-8 mb-3">
        What's Stored in the Volume:
      </h3>
      <ul className="space-y-1">
        <li>✅ All your workflows and their versions</li>
        <li>✅ Saved credentials (encrypted)</li>
        <li>✅ Execution history and logs</li>
        <li>✅ Installed community nodes</li>
        <li>✅ User accounts and settings</li>
        <li>✅ Binary files from workflow executions</li>
      </ul>

      <h2 id="performance-optimization" >Performance Optimization Tips</h2>

      <div className="space-y-4 my-6">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
          <p className="font-semibold text-lg mb-2">💾 Binary Data Mode</p>
          <p>
            Always use <code>filesystem</code> mode for production. This
            prevents memory issues when processing large files. If you're
            working with images, PDFs, videos, or audio files, this setting is
            crucial for stability.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
          <p className="font-semibold text-lg mb-2">🧠 RAM Requirements</p>
          <p>
            Make sure your system has at least <strong>4GB RAM</strong>{" "}
            available for smooth workflow execution. If you're running complex
            workflows with AI models or heavy data processing, consider 8GB or
            more.
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
          <p className="font-semibold text-lg mb-2">📊 Ngrok Bandwidth</p>
          <p>
            The free tier has bandwidth limits (typically 1GB/month). For
            high-traffic workflows or production use, consider ngrok's paid
            plans which offer:
          </p>
          <ul className="mt-2 space-y-1 text-sm ml-4">
            <li>• Unlimited bandwidth</li>
            <li>• Custom domains</li>
            <li>• More simultaneous tunnels</li>
            <li>• Reserved domains (won't change)</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
          <p className="font-semibold text-lg mb-2">
            🔄 Container Restart Policy
          </p>
          <p>
            Use <code>restart: unless-stopped</code> in Docker Compose so n8n
            automatically restarts if:
          </p>
          <ul className="mt-2 space-y-1 text-sm ml-4">
            <li>• Your computer reboots</li>
            <li>• Docker restarts</li>
            <li>• The container crashes</li>
          </ul>
        </div>
      </div>

      <h2 id="cost-comparison" className="font-semibold text-xl mb-2">
        Cost Comparison: Self-Hosted vs Cloud
      </h2>

      <table className="w-full border-collapse my-6 text-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">
              Feature
            </th>
            <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">
              Self-Hosted (This Guide)
            </th>
            <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">
              n8n Cloud
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
              Monthly Cost
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">
              $0 (Free)
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              $20-$50+/month
            </td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-900/50">
            <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
              Workflow Limit
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">
              Unlimited
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              Varies by plan
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
              Execution Limit
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">
              Unlimited
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              Limited by plan
            </td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-900/50">
            <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
              Setup Time
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              30-60 minutes
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">
              5 minutes
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
              Maintenance
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              You handle updates
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">
              Automatic
            </td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-900/50">
            <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
              Data Control
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">
              100% yours
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              Stored on their servers
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">
              Performance
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3">
              Depends on your machine
            </td>
            <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">
              Optimized servers
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
