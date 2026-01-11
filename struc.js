const fs = require("fs");
const path = require("path");

// Folders to ignore to keep the output clean
const IGNORE_DIRS = ["node_modules", ".git", "build", "dist", ".vscode"];

function printStructure(dir, depth = 0) {
  const indent = "│   ".repeat(depth);
  const files = fs.readdirSync(dir);

  files.forEach((file, index) => {
    // Skip hidden files (starting with .) or ignored directories
    if (file.startsWith(".") || IGNORE_DIRS.includes(file)) return;

    const fullPath = path.join(dir, file);
    const isDirectory = fs.statSync(fullPath).isDirectory();
    const isLast = index === files.length - 1;
    const marker = isLast ? "└── " : "├── ";

    console.log(`${indent}${marker}${file}`);

    if (isDirectory) {
      printStructure(fullPath, depth + 1);
    }
  });
}

console.log(`\n📂 Project Structure for: ${path.basename(process.cwd())}\n`);
printStructure("./src"); // Only scanning 'src' folder for clarity
console.log("\n-----------------------------------");
console.log("Checking specifically for Blog Data...");

// Special check to read your blogs configuration
const blogDataPath = path.join(__dirname, "src", "blogsData", "blogs.json");
if (fs.existsSync(blogDataPath)) {
  console.log("✅ Found src/blogsData/blogs.json");
  try {
    const blogs = JSON.parse(fs.readFileSync(blogDataPath, "utf8"));
    console.log(`📊 Found ${blogs.length} blog posts defined.`);
    console.log("   Slugs found (these need to be crawled):");
    blogs.forEach((b) => console.log(`   - /blog/${b.slug}`));
  } catch (e) {
    console.log("❌ Error reading blogs.json:", e.message);
  }
} else {
  console.log("❌ Could not find src/blogsData/blogs.json");
}
