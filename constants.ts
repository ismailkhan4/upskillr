export const courseJson = [
  {
    id: 1,
    cid: "b10ec452-c83f-41dd-9bb8-b4dabca39e7d",
    userEmail: "ismaeel.kheshgi@gmail.com",
    completedChapters: null,
    course: {
      id: 5,
      cid: "b10ec452-c83f-41dd-9bb8-b4dabca39e7d",
      name: "Next JS",
      description: "Next JS for complete beginners",
      noOfChapters: 4,
      includeVideo: false,
      level: "beginner",
      category: "Next JS, Frontend",
      courseJson: {
        course: {
          name: "Next.js for Beginners",
          description:
            "A comprehensive guide to Next.js for complete beginners. Learn the fundamentals and build your first Next.js application.",
          category: "Next JS, Frontend",
          level: "beginner",
          includeVideo: false,
          noOfChapters: 4,
          bannerImagePrompt:
            "Create a modern, flat-style 2D digital illustration representing Next.js development. Include UI/UX elements such as mockup screens displaying Next.js code, text blocks explaining key concepts, icons representing React components and API routes, buttons simulating user interactions, and creative workspace tools like code editors and terminal windows. Add symbolic elements related to Next.js, like the Next.js logo, serverless functions, and client-side rendering visualizations. Use a vibrant color palette (blues, purples, oranges) with a clean, professional look. The illustration should feel creative, tech-savvy, and educational, ideal for visualizing concepts in Next.js.",
          chapters: [
            {
              chapterName: "Introduction to Next.js",
              duration: "1 hour",
              topics: [
                "What is Next.js?",
                "Why use Next.js?",
                "Key Features of Next.js",
                "Setting up your development environment",
                "Creating your first Next.js project",
              ],
            },
            {
              chapterName: "Pages and Routing",
              duration: "1.5 hours",
              topics: [
                "Understanding the pages directory",
                "Creating dynamic routes",
                "Linking between pages",
                "Using the Next.js Router",
                "Client-side Navigation",
              ],
            },
            {
              chapterName: "Data Fetching",
              duration: "2 hours",
              topics: [
                "getServerSideProps",
                "getStaticProps",
                "getStaticPaths",
                "Client-Side Data Fetching",
                "Choosing the right data fetching method",
              ],
            },
            {
              chapterName: "Styling and Deployment",
              duration: "1.5 hours",
              topics: [
                "Global Styles",
                "CSS Modules",
                "Styled Components",
                "Tailwind CSS",
                "Deploying your Next.js application to Vercel",
              ],
            },
          ],
        },
      },
      userEmail: "ismaeel.kheshgi@gmail.com",
      bannerImageUrl:
        "https://firebasestorage.googleapis.com/v0/b/projects-2025-71366.firebasestorage.app/o/ai-guru-lab-images%2F1757917855433.png?alt=media&token=98fcd699-9639-4ae2-b70b-ca98685d76ed",
      courseContent: [
        {
          youtubeVideo: [
            { videoId: "nresBvpaVH0", title: "NextJs in 7 Minutes 🔥" },
            {
              videoId: "Sklc_fQBmcs",
              title:
                "Next.js in 100 Seconds // Plus Full Beginner&#39;s Tutorial",
            },
            { videoId: "xnOwOBYaA3w", title: "Learn NextJS in 7 Minutes" },
            {
              videoId: "ZVnjOPwW4ZA",
              title:
                "Next js Tutorial for Beginners | Nextjs 13 (App Router) with TypeScript",
            },
            {
              videoId: "DZKOunP-WLQ",
              title:
                "Introduction to Next.js | NextJs Tutorial for Beginners #1",
            },
          ],
          courseData: {
            chapterName: "Introduction to Next.js",
            topics: [
              {
                topic: "What is Next.js?",
                content:
                  "<h1>What is Next.js?</h1>\n<p>Next.js is a React framework for building modern web applications. It provides a structure and additional features on top of React, making it easier to develop complex, high-performance, and SEO-friendly web applications.</p>\n\n<p>Think of it as React, but with built-in tooling and features to handle common web development challenges, such as:</p>\n\n<ul>\n  <li><b>Routing:</b> Defining how different pages are navigated.</li>\n  <li><b>Server-Side Rendering (SSR):</b> Rendering React components on the server to improve SEO and initial load time.</li>\n  <li><b>Static Site Generation (SSG):</b> Generating static HTML files at build time for faster performance.</li>\n  <li><b>API Routes:</b> Creating backend endpoints directly within your Next.js application.</li>\n  <li><b>Image Optimization:</b> Automatically optimizing images for different devices and screen sizes.</li>\n</ul>\n\n<p>In essence, Next.js simplifies the process of building production-ready React applications.</p>",
              },
              {
                topic: "Why use Next.js?",
                content:
                  "<h1>Why use Next.js?</h1>\n<p>Next.js offers numerous benefits that make it a popular choice for web development:</p>\n\n<ul>\n  <li><b>Improved SEO:</b> Server-side rendering allows search engine crawlers to easily index your content, leading to better search engine rankings.</li>\n  <li><b>Faster Initial Load Time:</b> SSR and SSG reduce the time it takes for users to see the initial content of your page, resulting in a better user experience.</li>\n  <li><b>Better User Experience:</b> Faster load times and smooth transitions between pages contribute to a more enjoyable browsing experience.</li>\n  <li><b>Simplified Development:</b> Next.js provides a clear structure and conventions, making it easier to organize and maintain your codebase.</li>\n  <li><b>Built-in Features:</b>  Next.js comes with many features out of the box, such as routing, image optimization, and API routes, reducing the need for third-party libraries.</li>\n  <li><b>Scalability:</b>  Next.js can handle complex applications and scale as your needs grow.</li>\n  <li><b>Large Community and Ecosystem:</b> Next.js has a vibrant community and a rich ecosystem of libraries and tools, providing ample support and resources.</li>\n</ul>\n\n<p>Choosing Next.js often translates to building faster, more SEO-friendly, and easier-to-maintain web applications.</p>",
              },
              {
                topic: "Key Features of Next.js",
                content:
                  "<h1>Key Features of Next.js</h1>\n<p>Next.js boasts a robust set of features that streamline web development:</p>\n\n<ul>\n  <li><b>Server-Side Rendering (SSR):</b>  Renders React components on the server, improving SEO and initial load time.</li>\n  <li><b>Static Site Generation (SSG):</b> Generates static HTML files at build time, resulting in extremely fast performance.</li>\n  <li><b>Automatic Code Splitting:</b> Splits your code into smaller chunks, loading only the necessary code for each page, improving performance.</li>\n  <li><b>File-based Routing:</b>  Defines routes based on the file structure in your `pages` directory, simplifying routing configuration.</li>\n  <li><b>API Routes:</b> Allows you to create API endpoints directly within your Next.js application, enabling you to build full-stack applications.</li>\n  <li><b>Image Optimization:</b> Automatically optimizes images for different devices and screen sizes, improving performance and reducing bandwidth usage.</li>\n  <li><b>Fast Refresh:</b>  Provides near-instant feedback during development, allowing you to see changes in your browser almost immediately.</li>\n  <li><b>TypeScript Support:</b>  Offers built-in support for TypeScript, enabling you to write more maintainable and robust code.</li>\n</ul>",
              },
              {
                topic: "Setting up your development environment",
                content:
                  "<h1>Setting up your development environment</h1>\n<p>Before you start building with Next.js, you'll need to set up your development environment. Here's a step-by-step guide:</p>\n\n<ol>\n  <li><b>Install Node.js and npm (or yarn):</b>  Make sure you have Node.js and npm (or yarn) installed on your system. You can download them from the official Node.js website: <a href=\"https://nodejs.org\">https://nodejs.org</a>.  NPM usually comes bundled with Node.js.</li>\n  <li><b>Create a Project Directory:</b> Create a new directory for your Next.js project.  For example: `mkdir my-nextjs-app`</li>\n  <li><b>Navigate to the Project Directory:</b>  Open your terminal or command prompt and navigate to the project directory: `cd my-nextjs-app`</li>\n  <li><b>Initialize a New Next.js Project:</b>  Use the `create-next-app` CLI tool to initialize a new Next.js project: `npx create-next-app .` (The `.` specifies current directory, this avoids creating a nested directory.)  You may also use `yarn create next-app .` if you are using Yarn.</li>\n  <li><b>Follow the Prompts:</b> The CLI tool will prompt you for some information, such as the project name, whether to use TypeScript, ESLint, Tailwind CSS etc.  Choose the options that best suit your needs.</li>\n  <li><b>Start the Development Server:</b>  Once the project is initialized, start the development server by running: `npm run dev` (or `yarn dev` if you are using Yarn).</li>\n  <li><b>Open Your Browser:</b>  Open your web browser and navigate to <code>http://localhost:3000</code> to see your Next.js application running.</li>\n</ol>\n\n<p>You now have a working Next.js development environment!</p>",
              },
              {
                topic: "Creating your first Next.js project",
                content:
                  "<h1>Creating your first Next.js project</h1>\n<p>Now that you have your development environment set up, let's create a simple Next.js project.</p>\n\n<ol>\n  <li><b>Explore the Project Structure:</b> Open your project directory in your code editor. You'll see the following key files and directories:\n    <ul>\n      <li><b>`pages/` directory:</b> Contains your application's pages. Each file in this directory corresponds to a route.</li>\n      <li><b>`public/` directory:</b> Contains static assets, such as images and fonts.</li>\n      <li><b>`styles/` directory:</b> Contains your CSS stylesheets.</li>\n      <li><b>`package.json`:</b>  Contains your project's dependencies and scripts.</li>\n      <li><b>`next.config.js`:</b> (Optional)  Allows you to configure Next.js.</li>\n    </ul>\n  </li>\n\n  <li><b>Modify the `pages/index.js` file:</b> Open the `pages/index.js` file. This file represents the homepage of your application. Replace the existing content with the following code:\n\n    <pre><code>function HomePage() {\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;Welcome to Next.js!&lt;/h1&gt;\n      &lt;p&gt;This is your first Next.js project.&lt;/p&gt;\n    &lt;/div&gt;\n  );\n}\n\nexport default HomePage;\n</code></pre>\n\n  </li>\n\n  <li><b>See the Changes in Your Browser:</b> Save the `pages/index.js` file.  Your browser should automatically refresh and display the updated homepage with the new heading and paragraph.</li>\n\n  <li><b>Create a New Page:</b>  Create a new file in the `pages/` directory called `about.js`. Add the following content:\n\n    <pre><code>function AboutPage() {\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;About Us&lt;/h1&gt;\n      &lt;p&gt;This is the about page.&lt;/p&gt;\n    &lt;/div&gt;\n  );\n}\n\nexport default AboutPage;\n</code></pre>\n  </li>\n  <li><b>Navigate to the New Page:</b>  Open your browser and navigate to <code>http://localhost:3000/about</code>. You should see the about page displayed.</li>\n\n</ol>\n\n<p>Congratulations! You've created your first Next.js project and learned how to create and navigate between pages.</p>",
              },
            ],
          },
        },
        {
          youtubeVideo: [
            {
              videoId: "ZP8QyCIUeIA",
              title:
                "React Router: Routing in React | Sigma Web Development Course - Tutorial #115",
            },
            { videoId: "dz1N--SVNbM", title: "Pages and Routing in Next js" },
            {
              videoId: "qNoG4hDZZik",
              title: "Pages &amp; Routing | #3 | Next js tutorial in Hindi",
            },
            {
              videoId: "Zqa0Ardm95E",
              title:
                "Next.js: Add Navbar/Footer to Only Some Pages (Route Groups) 💡 #nextjs #nextjs13 #nextjstutorial",
            },
            {
              videoId: "P5iczc1_6GY",
              title: "Next.js #2 - Pages &amp; Routing",
            },
          ],
          courseData: {
            chapterName: "Pages and Routing",
            topics: [
              {
                topic: "Understanding the pages directory",
                content:
                  '<h1>The <code>pages</code> Directory</h1>\n<p>The <code>pages</code> directory is a core concept in Next.js. Every file inside this directory becomes a route based on its filename. For example:</p>\n\n<ul>\n  <li><code>pages/index.js</code> - Becomes the root route (<code>/</code>)</li>\n  <li><code>pages/about.js</code> - Becomes the <code>/about</code> route</li>\n  <li><code>pages/blog.js</code> - Becomes the <code>/blog</code> route</li>\n</ul>\n\n<p>Next.js automatically handles routing and code splitting for each page in the <code>pages</code> directory. You don\'t need to configure routes manually.</p>\n\n<h2>Key Features</h2>\n\n<ul>\n  <li><strong>Automatic Routing:</strong> Files are automatically routed.</li>\n  <li><strong>Code Splitting:</strong> Each page is its own JavaScript bundle, improving initial load times.</li>\n  <li><strong>Pre-rendering:</strong> Next.js pre-renders pages for better SEO and performance.</li>\n</ul>\n\n<p><strong>Example (<code>pages/about.js</code>):</strong></p>\n\n<pre><code class="language-javascript">function AboutPage() {\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;About Us&lt;/h1&gt;\n      &lt;p&gt;This is the about page.&lt;/p&gt;\n    &lt;/div&gt;\n  );\n}\n\nexport default AboutPage;\n</code></pre>\n',
              },
              {
                topic: "Creating dynamic routes",
                content:
                  "<h1>Dynamic Routes</h1>\n<p>Next.js allows you to create dynamic routes using brackets in the filename. This is useful for scenarios where you need to generate routes based on data, such as blog posts or product details.</p>\n\n<p>For example, if you have a blog and want to create a route for each blog post, you can use <code>pages/blog/[id].js</code>. The <code>[id]</code> portion of the filename becomes a parameter that you can access in your component.</p>\n\n<h2>How it works</h2>\n\n<ol>\n  <li>Create a file with brackets, e.g., <code>pages/blog/[id].js</code>.</li>\n  <li>Access the <code>id</code> parameter using <code>useRouter</code> from <code>next/router</code>.</li>\n  <li>Use the <code>id</code> to fetch data and render the page.</li>\n</ol>\n\n<p><strong>Example (<code>pages/blog/[id].js</code>):</strong></p>\n\n<pre><code class=\"language-javascript\">import { useRouter } from 'next/router';\n\nfunction BlogPost() {\n  const router = useRouter();\n  const { id } = router.query;\n\n  // Fetch blog post data based on the 'id'\n  // e.g., fetch(`/api/blog/${id}`)\n\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;Blog Post: {id}&lt;/h1&gt;\n      &lt;p&gt;Content for blog post {id}&lt;/p&gt;\n    &lt;/div&gt;\n  );\n}\n\nexport default BlogPost;\n</code></pre>\n\n<p>In this example, if you navigate to <code>/blog/123</code>, the <code>id</code> parameter will be <code>123</code>, and the component will render accordingly.</p>",
              },
              {
                topic: "Linking between pages",
                content:
                  '<h1>Linking Between Pages</h1>\n<p>To navigate between pages in your Next.js application, you should use the <code>&lt;Link&gt;</code> component from <code>next/link</code>. This provides client-side navigation, which is faster and smoother than traditional server-side navigation.</p>\n\n<h2>Using the <code>&lt;Link&gt;</code> Component</h2>\n\n<p>The <code>&lt;Link&gt;</code> component takes an <code>href</code> prop, which specifies the destination URL. You wrap an <code>&lt;a&gt;</code> tag or any other valid HTML element within the <code>&lt;Link&gt;</code> component.</p>\n\n<p><strong>Example:</strong></p>\n\n<pre><code class="language-javascript">import Link from \'next/link\';\n\nfunction HomePage() {\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;Home Page&lt;/h1&gt;\n      &lt;Link href="/about"&gt;\n        &lt;a&gt;Go to About Page&lt;/a&gt;\n      &lt;/Link&gt;\n    &lt;/div&gt;\n  );\n}\n\nexport default HomePage;\n</code></pre>\n\n<p>In this example, clicking the "Go to About Page" link will navigate the user to the <code>/about</code> route without a full page reload.</p>\n\n<h2>Advantages of using <code>&lt;Link&gt;</code></h2>\n\n<ul>\n  <li><strong>Client-Side Navigation:</strong> Faster and smoother navigation.</li>\n  <li><strong>Pre-fetching:</strong> Next.js automatically pre-fetches the linked page in the background, further improving performance.</li>\n</ul>',
              },
              {
                topic: "Using the Next.js Router",
                content:
                  "<h1>Using the Next.js Router</h1>\n<p>The Next.js Router provides programmatic access to the routing system. You can use it to navigate between pages, access route parameters, and more.  The `useRouter` hook from `next/router` provides access to the router object.</p>\n\n<h2>Accessing the Router</h2>\n\n<p>Import the <code>useRouter</code> hook from <code>next/router</code> in your component.</p>\n\n<pre><code class=\"language-javascript\">import { useRouter } from 'next/router';\n</code></pre>\n\n<h2>Router Object Properties</h2>\n\n<ul>\n  <li><code>pathname</code>: The current route.</li>\n  <li><code>query</code>: An object containing the query parameters of the URL.</li>\n  <li><code>asPath</code>: The path as displayed in the browser (including query parameters).</li>\n</ul>\n\n<h2>Programmatic Navigation</h2>\n\n<p>You can use the <code>router.push()</code> method to navigate to a new page programmatically.</p>\n\n<pre><code class=\"language-javascript\">import { useRouter } from 'next/router';\n\nfunction MyComponent() {\n  const router = useRouter();\n\n  const handleClick = () => {\n    router.push('/about');\n  };\n\n  return (\n    &lt;button onClick={handleClick}&gt;\n      Go to About Page\n    &lt;/button&gt;\n  );\n}\n\nexport default MyComponent;\n</code></pre>\n\n<p>This example shows how to navigate to the <code>/about</code> route when a button is clicked.</p>\n\n<h2>Other Router Methods</h2>\n\n<ul>\n  <li><code>router.replace()</code>: Replaces the current history entry.</li>\n  <li><code>router.reload()</code>: Reloads the current page.</li>\n</ul>",
              },
              {
                topic: "Client-side Navigation",
                content:
                  '<h1>Client-Side Navigation</h1>\n<p>Client-side navigation in Next.js refers to navigating between pages without a full page reload. This is achieved using the <code>&lt;Link&gt;</code> component and the Next.js Router.</p>\n\n<h2>Benefits of Client-Side Navigation</h2>\n\n<ul>\n  <li><strong>Faster Navigation:</strong> Reduces the time it takes to load a new page, as only the necessary components are updated.</li>\n  <li><strong>Improved User Experience:</strong> Provides a smoother and more responsive user experience.</li>\n  <li><strong>Preserves Component State:</strong> Maintains the state of components during navigation.</li>\n</ul>\n\n<h2>How it Works</h2>\n\n<ol>\n  <li>When you use the <code>&lt;Link&gt;</code> component, Next.js pre-fetches the linked page in the background.</li>\n  <li>When the user clicks the link, Next.js uses the pre-fetched data to render the new page without a full page reload.</li>\n  <li>The Next.js Router handles the update of the URL in the browser\'s address bar.</li>\n</ol>\n\n<h2>Example</h2>\n\n<pre><code class="language-javascript">import Link from \'next/link\';\n\nfunction HomePage() {\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;Home Page&lt;/h1&gt;\n      &lt;Link href="/about"&gt;\n        &lt;a&gt;Go to About Page&lt;/a&gt;\n      &lt;/Link&gt;\n    &lt;/div&gt;\n  );\n}\n\nexport default HomePage;\n</code></pre>\n\n<p>In this example, navigating from the home page to the about page will be done client-side, resulting in a faster and smoother experience.</p>',
              },
            ],
          },
        },
        {
          youtubeVideo: [
            {
              videoId: "00lxm_doFYw",
              title: "Fetching Data in React - Complete Tutorial",
            },
            {
              videoId: "37vxWr0WgQk",
              title: "How to FETCH data from an API using JavaScript ↩️",
            },
            {
              videoId: "MBlZ8Wzkbi4",
              title: "Modern Data Fetching in React (Complete Guide)",
            },
            {
              videoId: "bKm1rNaCFOo",
              title:
                "This Next.js Data Fetching Pattern Is CRITICAL For Every Developer",
            },
            {
              videoId: "Umdjl5QD3Dc",
              title: "Data Fetching | NextJS For Beginners | Crash Course",
            },
          ],
          courseData: {
            chapterName: "Data Fetching",
            topics: [
              {
                topic: "getServerSideProps",
                content:
                  '<div>\n <h2>getServerSideProps</h2>\n <p><code>getServerSideProps</code> is a function you can export from a Next.js page. It will be executed on <strong>every request</strong> to the page.  Use it when you need data that is constantly changing or personalized, and you need to ensure it\'s always up-to-date.</p>\n\n <h3>Key Characteristics:</h3>\n <ul>\n  <li><strong>Executed Server-Side:</strong>  The code inside <code>getServerSideProps</code> runs only on the server (Node.js environment).  Client-side code or browser APIs are not accessible.</li>\n  <li><strong>Runs on Every Request:</strong> Data is fetched and rendered server-side for each incoming request. This makes it suitable for dynamic and user-specific content.</li>\n  <li><strong>Context Object:</strong>  Receives a <code>context</code> object that contains information about the request, such as query parameters, cookies, and headers.</li>\n  <li><strong>Return Value:</strong>  Must return an object with a <code>props</code> key. The value of the <code>props</code> key will be passed as props to the page component.  You can also return <code>notFound: true</code> to return a 404, or <code>redirect</code> to redirect the user.</li>\n </ul>\n\n <h3>Example:</h3>\n <pre><code class="language-javascript">\n export async function getServerSideProps(context) {\n  const { params, req, res, query } = context;\n  const data = await fetchDataFromAPI(query.id);\n\n  if (!data) {\n   return {\n    notFound: true,\n   }\n  }\n\n  return {\n   props: { data }, // will be passed to the page component as props\n  }\n }\n </code></pre>\n\n <h3>When to Use:</h3>\n <ul>\n  <li>When you need to fetch data on every request.</li>\n  <li>When you need access to the request context (cookies, headers, etc.).</li>\n  <li>When you need to render user-specific content.</li>\n </ul>\n</div>',
              },
              {
                topic: "getStaticProps",
                content:
                  '<div>\n <h2>getStaticProps</h2>\n <p><code>getStaticProps</code> is a function you can export from a Next.js page. It will be executed at <strong>build time</strong>. Use it when you can pre-render the page with data fetched during the build process.</p>\n\n <h3>Key Characteristics:</h3>\n <ul>\n  <li><strong>Executed at Build Time:</strong> The code inside <code>getStaticProps</code> runs only during the build process. This means the data is fetched and the page is rendered before deployment.</li>\n  <li><strong>No Request Context:</strong> <code>getStaticProps</code> does not have access to the request context (cookies, headers, etc.) because it runs at build time, not on each request.</li>\n  <li><strong>Static Generation:</strong> The resulting HTML and JSON data are statically generated and can be cached by a CDN for extremely fast performance.</li>\n  <li><strong>Return Value:</strong> Must return an object with a <code>props</code> key. The value of the <code>props</code> key will be passed as props to the page component. You can also return <code>notFound: true</code> to return a 404, or <code>redirect</code> to redirect the user.  You can also use <code>revalidate</code> to enable Incremental Static Regeneration (ISR).</li>\n </ul>\n\n <h3>Example:</h3>\n <pre><code class="language-javascript">\n export async function getStaticProps(context) {\n  const data = await fetchDataFromAPI();\n\n  if (!data) {\n   return {\n    notFound: true,\n   }\n  }\n\n  return {\n   props: { data }, // will be passed to the page component as props\n   revalidate: 60, // Regenerate the page every 60 seconds\n  }\n }\n </code></pre>\n\n <h3>When to Use:</h3>\n <ul>\n  <li>When you can pre-render the page with data fetched at build time.</li>\n  <li>When the data is not user-specific and doesn\'t change frequently.</li>\n  <li>For marketing pages, blog posts, and other static content.</li>\n </ul>\n\n <h3>Incremental Static Regeneration (ISR):</h3>\n <p>With the <code>revalidate</code> key, you can enable ISR. This allows you to update statically generated pages without redeploying your entire application. Next.js will regenerate the page in the background after the specified time interval (in seconds).</p>\n</div>',
              },
              {
                topic: "getStaticPaths",
                content:
                  "<div>\n <h2>getStaticPaths</h2>\n <p><code>getStaticPaths</code> is a function you can export from a dynamic route page in Next.js (e.g., <code>pages/posts/[id].js</code>). It defines a list of paths that should be statically generated when using <code>getStaticProps</code>.</p>\n\n <h3>Key Characteristics:</h3>\n <ul>\n  <li><strong>Used with Dynamic Routes:</strong>  Essential for pre-rendering dynamic routes with <code>getStaticProps</code>.</li>\n  <li><strong>Defines Possible Paths:</strong>  Specifies the possible values for the dynamic route parameter (e.g., <code>id</code> in <code>pages/posts/[id].js</code>).</li>\n  <li><strong>Build Time Execution:</strong> Runs during the build process to determine which pages to pre-render.</li>\n  <li><strong>Return Value:</strong> Must return an object with two keys: <code>paths</code> and <code>fallback</code>.</li>\n  <li><code>paths</code>: An array of objects, where each object has a <code>params</code> key that contains the route parameters.</li>\n  <li><code>fallback</code>:  Determines how to handle requests for paths that are not in the <code>paths</code> array. It can be <code>false</code> (return a 404), <code>true</code> (render the page on demand), or <code>'blocking'</code> (render the page on demand, but block until it's finished).</li>\n </ul>\n\n <h3>Example:</h3>\n <pre><code class=\"language-javascript\">\n export async function getStaticPaths() {\n  const posts = await fetchAllPostIds();\n\n  const paths = posts.map((post) => ({\n   params: { id: post.id },\n  }))\n\n  return {\n   paths,\n   fallback: false, // Returns a 404 if the path doesn't exist\n  }\n }\n\n export async function getStaticProps({ params }) {\n  const post = await fetchPostData(params.id)\n  return {\n   props: {\n    post,\n   }\n  }\n }\n </code></pre>\n\n <h3>When to Use:</h3>\n <ul>\n  <li>When you have dynamic routes and want to pre-render specific paths.</li>\n  <li>When you have a finite list of possible values for the dynamic route parameter.</li>\n </ul>\n\n <h3>Fallback Options:</h3>\n <ul>\n  <li><strong><code>fallback: false</code>:</strong>  If a user requests a path that is not in the <code>paths</code> array, Next.js will return a 404 error.</li>\n  <li><strong><code>fallback: true</code>:</strong>  If a user requests a path that is not in the <code>paths</code> array, Next.js will initially serve a fallback page (often a loading state). It will then fetch the data in the background and update the page.  Useful when not all possible paths are known at build time, but you want to provide a good user experience.</li>\n  <li><strong><code>fallback: 'blocking'</code>:</strong> Similar to <code>fallback: true</code>, but Next.js will block the request until the page is generated. This ensures that the user always sees the complete page, but may result in a slightly longer initial load time.</li>\n </ul>\n</div>",
              },
              {
                topic: "Client-Side Data Fetching",
                content:
                  "<div>\n <h2>Client-Side Data Fetching</h2>\n <p>Client-side data fetching involves fetching data directly in the browser using JavaScript, typically with <code>useEffect</code> and a library like <code>fetch</code> or <code>axios</code>.  This is useful when you need to fetch data that is specific to the user's interaction or changes frequently.</p>\n\n <h3>Key Characteristics:</h3>\n <ul>\n  <li><strong>Executed in the Browser:</strong>  Data fetching happens after the page has been initially rendered on the server.</li>\n  <li><strong>Dynamic Data:</strong> Suitable for data that changes frequently or is specific to user interactions.</li>\n  <li><strong><code>useEffect</code> Hook:</strong>  Typically uses the <code>useEffect</code> hook to fetch data after the component has mounted.</li>\n  <li><strong>Loading States:</strong>  Requires handling loading states to provide a good user experience while the data is being fetched.</li>\n </ul>\n\n <h3>Example:</h3>\n <pre><code class=\"language-javascript\">\n import { useState, useEffect } from 'react';\n\n function MyComponent() {\n  const [data, setData] = useState(null);\n  const [isLoading, setIsLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n   async function fetchData() {\n    try {\n     const res = await fetch('/api/data');\n     const json = await res.json();\n     setData(json);\n    } catch (error) {\n     setError(error);\n    } finally {\n     setIsLoading(false);\n    }\n   }\n\n   fetchData();\n  }, []);\n\n  if (isLoading) return &lt;p&gt;Loading...&lt;/p&gt;;\n  if (error) return &lt;p&gt;Error: {error.message}&lt;/p&gt;;\n  if (!data) return &lt;p&gt;No data&lt;/p&gt;;\n\n  return &lt;div&gt;{JSON.stringify(data)}&lt;/div&gt;;\n }\n\n export default MyComponent;\n </code></pre>\n\n <h3>When to Use:</h3>\n <ul>\n  <li>When you need to fetch data that is specific to user interactions.</li>\n  <li>When you need to fetch data that changes frequently.</li>\n  <li>When you don't need SEO for the data being fetched.</li>\n </ul>\n\n <h3>Considerations:</h3>\n <ul>\n  <li><strong>SEO:</strong>  Client-side fetched data is generally not indexed by search engines.</li>\n  <li><strong>Loading States:</strong>  Provide appropriate loading states to avoid a jarring user experience.</li>\n  <li><strong>Error Handling:</strong> Implement error handling to gracefully handle potential data fetching failures.</li>\n </ul>\n</div>",
              },
              {
                topic: "Choosing the right data fetching method",
                content:
                  "<div>\n <h2>Choosing the Right Data Fetching Method</h2>\n <p>Selecting the appropriate data fetching method in Next.js depends on several factors, including the frequency of data updates, the need for SEO, and whether the data is user-specific.</p>\n\n <h3>Decision Factors:</h3>\n <ul>\n  <li><strong>Data Update Frequency:</strong></li>\n  <ul>\n   <li><strong>Static Data:</strong> Use <code>getStaticProps</code> for data that doesn't change frequently or is known at build time.</li>\n   <li><strong>Infrequent Updates:</strong> Use <code>getStaticProps</code> with Incremental Static Regeneration (ISR) for data that updates periodically.</li>\n   <li><strong>Frequent Updates:</strong> Use <code>getServerSideProps</code> for data that needs to be fetched on every request.</li>\n   <li><strong>User-Specific Data:</strong>  Consider client-side data fetching for data that is specific to the user and changes frequently based on their actions.</li>\n  </ul>\n  <li><strong>SEO Requirements:</strong></li>\n  <ul>\n   <li><strong>SEO Required:</strong> Use <code>getStaticProps</code> or <code>getServerSideProps</code> to ensure that the data is rendered on the server and indexed by search engines.</li>\n   <li><strong>SEO Not Required:</strong>  Client-side data fetching is acceptable when SEO is not a primary concern (e.g., for user dashboards or interactive components).</li>\n  </ul>\n  <li><strong>Dynamic Routes:</strong></li>\n  <ul>\n   <li>Use <code>getStaticPaths</code> and <code>getStaticProps</code> for pre-rendering dynamic routes with a known set of paths.</li>\n   <li>Use <code>getStaticPaths</code> with <code>fallback: true</code> or <code>fallback: 'blocking'</code> for dynamic routes where not all paths are known at build time.</li>\n  </ul>\n  <li><strong>Performance:</strong></li>\n   <ul>\n   <li><code>getStaticProps</code> provides the best performance as the data is fetched at build time and cached by a CDN.</li>\n   <li><code>getServerSideProps</code> has a slight performance overhead as data is fetched on every request.</li>\n   <li>Client-side fetching impacts the initial page load performance, but can be optimized with code splitting and lazy loading.</li>\n  </ul>\n </ul>\n\n <h3>Summary Table:</h3>\n <table>\n  <thead>\n   <tr>\n    <th>Method</th>\n    <th>When to Use</th>\n    <th>SEO</th>\n    <th>Performance</th>\n   </tr>\n  </thead>\n  <tbody>\n   <tr>\n    <td><code>getStaticProps</code></td>\n    <td>Static data, known at build time</td>\n    <td>Excellent</td>\n    <td>Best</td>\n   </tr>\n   <tr>\n    <td><code>getStaticProps</code> (ISR)</td>\n    <td>Data that updates periodically</td>\n    <td>Excellent</td>\n    <td>Good</td>\n   </tr>\n   <tr>\n    <td><code>getServerSideProps</code></td>\n    <td>Data that needs to be fetched on every request</td>\n    <td>Good</td>\n    <td>Moderate</td>\n   </tr>\n   <tr>\n    <td>Client-Side Fetching</td>\n    <td>User-specific data, frequent updates, SEO not required</td>\n    <td>Poor</td>\n    <td>Depends on implementation</td>\n   </tr>\n  </tbody>\n </table>\n\n <h3>Example Scenarios:</h3>\n <ul>\n  <li><strong>Blog Posts:</strong>  <code>getStaticProps</code> (with ISR for updates).</li>\n  <li><strong>E-commerce Product Pages:</strong> <code>getStaticPaths</code> and <code>getStaticProps</code> (or ISR for price changes).</li>\n  <li><strong>User Dashboard:</strong> Client-side data fetching for personalized data.</li>\n  <li><strong>News Articles:</strong>  <code>getServerSideProps</code> for breaking news or <code>getStaticProps</code> with ISR for less time-sensitive content.</li>\n </ul>\n</div>",
              },
            ],
          },
        },
        {
          youtubeVideo: [
            {
              videoId: "nZcCblPlMfY",
              title: "Introduction to Deployment styles - why we need them ?",
            },
            {
              videoId: "Qr15QoXBfEc",
              title:
                "Cron-Style Automatic Kubernetes Deployment Scaling (Up &amp; Down)",
            },
            {
              videoId: "zqKFcF1b_TU",
              title: "CIT228 Lesson 8 part 3 styling and deployment overview",
            },
            {
              videoId: "cuGFjE8REpU",
              title:
                "Stop Adding Login and Signup to Your Web Apps  #webdevelopment",
            },
            {
              videoId: "B-aRaDvTsi4",
              title: "Final Episode: Styling and Deploying",
            },
          ],
          courseData: {
            chapterName: "Styling and Deployment",
            topics: [
              {
                topic: "Global Styles",
                content:
                  "<div>\n  <h2>Global Styles</h2>\n  <p>Global styles are CSS rules that apply to the entire application.  They are typically defined in a single CSS file (e.g., <code>styles.css</code>) and imported into the main component or layout.</p>\n  \n  <h3>When to Use</h3>\n  <ul>\n    <li>Setting default font families and sizes.</li>\n    <li>Defining consistent spacing and margins.</li>\n    <li>Creating reusable CSS variables (custom properties).</li>\n  </ul>\n\n  <h3>Implementation</h3>\n  <p>In Next.js, you can import your global CSS file in the <code>_app.js</code> or <code>_app.tsx</code> file. Next.js will automatically include this stylesheet in every page.</p>\n\n  <pre>\n    <code>\n// pages/_app.js or pages/_app.tsx\nimport '../styles/globals.css';\n\nfunction MyApp({ Component, pageProps }) {\n  return <Component {...pageProps} />\n}\n\nexport default MyApp;\n    </code>\n  </pre>\n\n  <h3>Example <code>globals.css</code></h3>\n  <pre>\n    <code>\n:root {\n  --primary-color: #3498db;\n  --secondary-color: #e74c3c;\n  --font-family: sans-serif;\n}\n\nbody {\n  font-family: var(--font-family);\n  margin: 0;\n  padding: 0;\n  background-color: #f4f4f4;\n}\n\na {\n  color: var(--primary-color);\n  text-decoration: none;\n}\n    </code>\n  </pre>\n\n  <h3>Considerations</h3>\n  <ul>\n    <li>Global styles can be difficult to manage in large projects, as they can lead to naming conflicts and unexpected side effects.</li>\n    <li>Consider using more modular approaches like CSS Modules or Styled Components for better organization and maintainability, especially in larger projects.</li>\n  </ul>\n</div>",
              },
              {
                topic: "CSS Modules",
                content:
                  "<div>\n  <h2>CSS Modules</h2>\n  <p>CSS Modules are a way to write CSS that is locally scoped to a component.  This means that class names are automatically modified to be unique, preventing naming collisions and making it easier to manage styles in large projects.</p>\n\n  <h3>How They Work</h3>\n  <p>When you import a CSS Module in a JavaScript file, you receive an object where the keys are the class names you defined in the CSS file, and the values are the unique class names that Next.js generates.</p>\n\n  <h3>Implementation</h3>\n  <ol>\n    <li>Create a CSS file with the <code>.module.css</code> extension (e.g., <code>MyComponent.module.css</code>).</li>\n    <li>Define your CSS rules in the file.</li>\n    <li>Import the CSS file into your component.</li>\n    <li>Use the generated class names in your JSX.</li>\n  </ol>\n\n  <h3>Example</h3>\n  <p><code>MyComponent.module.css</code></p>\n  <pre>\n    <code>\n.container {\n  background-color: #fff;\n  padding: 20px;\n  border: 1px solid #ccc;\n}\n\n.title {\n  font-size: 24px;\n  color: #333;\n}\n    </code>\n  </pre>\n\n  <p><code>MyComponent.js</code></p>\n  <pre>\n    <code>\nimport styles from './MyComponent.module.css';\n\nfunction MyComponent() {\n  return (\n    <div className={styles.container}>\n      <h1 className={styles.title}>My Component</h1>\n      <p>This is a styled component using CSS Modules.</p>\n    </div>\n  );\n}\n\nexport default MyComponent;\n    </code>\n  </pre>\n\n  <h3>Benefits</h3>\n  <ul>\n    <li><b>Locally Scoped:</b> Prevents naming collisions.</li>\n    <li><b>Improved Maintainability:</b> Styles are tied to specific components.</li>\n    <li><b>Easy to Use:</b> Simple syntax and integration with Next.js.</li>\n  </ul>\n</div>",
              },
              {
                topic: "Styled Components",
                content:
                  "<div>\n  <h2>Styled Components</h2>\n  <p>Styled Components is a CSS-in-JS library that allows you to write CSS directly within your JavaScript components.  It uses tagged template literals to define styles, which are then automatically applied to the corresponding React elements.</p>\n\n  <h3>Key Features</h3>\n  <ul>\n    <li><b>CSS-in-JS:</b> Write CSS directly in your JavaScript.</li>\n    <li><b>Component-Based:</b> Styles are associated with specific components.</li>\n    <li><b>Dynamic Styling:</b> Easily pass props to style components dynamically.</li>\n    <li><b>Automatic Vendor Prefixing:</b> Handles vendor prefixes automatically.</li>\n    <li><b>Themeing:</b> Supports theming for consistent styling across your application.</li>\n  </ul>\n\n  <h3>Installation</h3>\n  <pre>\n    <code>\nnpm install styled-components\n    </code>\n  </pre>\n\n  <h3>Example</h3>\n  <pre>\n    <code>\nimport styled from 'styled-components';\n\nconst Container = styled.div`\n  background-color: #fff;\n  padding: 20px;\n  border: 1px solid #ccc;\n`;\n\nconst Title = styled.h1`\n  font-size: 24px;\n  color: #333;\n`;\n\nfunction MyComponent() {\n  return (\n    <Container>\n      <Title>My Component</Title>\n      <p>This is a styled component example.</p>\n    </Container>\n  );\n}\n\nexport default MyComponent;\n    </code>\n  </pre>\n\n  <h3>Dynamic Styling with Props</h3>\n  <pre>\n    <code>\nconst Button = styled.button`\n  background-color: ${props => (props.primary ? '#3498db' : '#fff')};\n  color: ${props => (props.primary ? '#fff' : '#333')};\n  padding: 10px 20px;\n  border: 1px solid #ccc;\n  cursor: pointer;\n`;\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Button primary>Primary Button</Button>\n      <Button>Secondary Button</Button>\n    </div>\n  );\n}\n    </code>\n  </pre>\n\n  <h3>Theming</h3>\n  <p>Styled Components supports theming using the <code>ThemeProvider</code> component.  This allows you to define a theme object and access its values within your styled components.</p>\n\n  <p>Example (very basic):</p>\n  <pre>\n    <code>\nimport { ThemeProvider } from 'styled-components';\n\nconst theme = {\n  primaryColor: '#3498db',\n  secondaryColor: '#e74c3c',\n};\n\nconst Title = styled.h1`\n  color: ${props => props.theme.primaryColor};\n`;\n\nfunction App() {\n  return (\n    <ThemeProvider theme={theme}>\n      <Title>My App</Title>\n    </ThemeProvider>\n  );\n}\n\nexport default App;\n    </code>\n  </pre>\n</div>",
              },
              {
                topic: "Tailwind CSS",
                content:
                  '<div>\n  <h2>Tailwind CSS</h2>\n  <p>Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined CSS classes that you can use to style your HTML elements directly.  Instead of writing custom CSS rules, you compose styles by combining these utility classes.</p>\n\n  <h3>Key Features</h3>\n  <ul>\n    <li><b>Utility-First:</b> Style elements using pre-defined utility classes.</li>\n    <li><b>Highly Customizable:</b> Configure Tailwind to match your design system.</li>\n    <li><b>Responsive:</b> Easily create responsive designs with responsive modifiers.</li>\n    <li><b>Purge CSS:</b> Removes unused CSS in production for smaller file sizes.</li>\n  </ul>\n\n  <h3>Installation</h3>\n  <p>Follow Tailwind CSS\'s official instructions on their website, but generally:</p>\n  <ol>\n    <li><code>npm install -D tailwindcss postcss autoprefixer</code></li>\n    <li><code>npx tailwindcss init -p</code></li>\n    <li>Configure your <code>tailwind.config.js</code> file.</li>\n    <li>Add Tailwind directives to your CSS file (e.g., <code>globals.css</code>):</li>\n    <pre>\n      <code>\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n      </code>\n    </pre>\n  </ol>\n\n  <h3>Example</h3>\n  <pre>\n    <code>\n<div className="bg-white p-6 rounded-lg shadow-md">\n  <h2 className="text-2xl font-bold text-gray-800 mb-4">My Component</h2>\n  <p className="text-gray-600">This is a styled component using Tailwind CSS.</p>\n  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">\n    Click me\n  </button>\n</div>\n    </code>\n  </pre>\n\n  <h3>Configuration</h3>\n  <p>Tailwind CSS is highly customizable through the <code>tailwind.config.js</code> file.  You can customize colors, fonts, spacing, breakpoints, and more.</p>\n\n  <h3>Benefits</h3>\n  <ul>\n    <li><b>Rapid Development:</b> Quickly prototype and style elements using utility classes.</li>\n    <li><b>Consistent Styling:</b> Enforces a consistent design system across your application.</li>\n    <li><b>Responsive Design:</b> Easily create responsive layouts with responsive modifiers.</li>\n  </ul>\n\n  <h3>Considerations</h3>\n  <ul>\n      <li>The initial learning curve can be steep due to the large number of utility classes.</li>\n      <li>HTML can become verbose due to the extensive use of classes.</li>\n  </ul>\n</div>',
              },
              {
                topic: "Deploying your Next.js application to Vercel",
                content:
                  '<div>\n  <h2>Deploying your Next.js application to Vercel</h2>\n  <p>Vercel is a platform specifically designed for deploying and hosting Next.js applications.  It offers seamless integration with Next.js, automatic deployments, and global CDN delivery.</p>\n\n  <h3>Prerequisites</h3>\n  <ul>\n    <li>A Next.js application.</li>\n    <li>A Vercel account (you can sign up for free).</li>\n    <li>A Git repository (e.g., GitHub, GitLab, Bitbucket).</li>\n  </ul>\n\n  <h3>Deployment Steps</h3>\n  <ol>\n    <li><b>Connect your Git repository to Vercel:</b>\n      <ul>\n        <li>Log in to your Vercel account.</li>\n        <li>Click on "Add New Project".</li>\n        <li>Choose your Git provider (e.g., GitHub).</li>\n        <li>Select the repository containing your Next.js application.</li>\n      </ul>\n    </li>\n    <li><b>Configure your project:</b>\n      <ul>\n        <li>Vercel usually automatically detects that it\'s a Next.js project. If not, you might have to explicitly set the Framework Preset to \'Next.js\'.</li>\n        <li>You generally don\'t need to change any default settings. Vercel automatically handles the build and deployment process for Next.js applications.</li>\n      </ul>\n    </li>\n    <li><b>Deploy your application:</b>\n      <ul>\n        <li>Click on the "Deploy" button.</li>\n        <li>Vercel will automatically build and deploy your application.</li>\n      </ul>\n    </li>\n    <li><b>Automatic deployments:</b>\n        <ul>\n            <li>Vercel automatically deploys your application whenever you push changes to your Git repository.</li>\n        </ul>\n    </li>\n  </ol>\n\n  <h3>Custom Domains</h3>\n  <p>You can easily configure a custom domain for your Vercel deployment.</p>\n  <ol>\n    <li>Go to your project dashboard on Vercel.</li>\n    <li>Click on "Domains".</li>\n    <li>Enter your custom domain and follow the instructions to configure your DNS records.</li>\n  </ol>\n\n  <h3>Environment Variables</h3>\n  <p>You can define environment variables for your application in the Vercel dashboard.</p>\n  <ol>\n    <li>Go to your project dashboard on Vercel.</li>\n    <li>Click on "Settings".</li>\n    <li>Click on "Environment Variables".</li>\n    <li>Add your environment variables and their values.</li>\n  </ol>\n\n  <h3>Benefits of using Vercel</h3>\n  <ul>\n    <li><b>Easy Deployment:</b> Simple and straightforward deployment process.</li>\n    <li><b>Automatic Deployments:</b> Automatically deploys changes from your Git repository.</li>\n    <li><b>Global CDN:</b> Fast and reliable content delivery.</li>\n    <li><b>Serverless Functions:</b> Supports serverless functions for backend logic.</li>\n    <li><b>Preview Deployments:</b> Automatically creates preview deployments for pull requests.</li>\n  </ul>\n</div>',
              },
            ],
          },
        },
      ],
    },
    user: { id: 1, email: "", subscriptionId: null },
  },
];
