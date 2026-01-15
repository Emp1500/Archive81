import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

// In-memory blog posts storage
const posts = [
  {
    id: 1,
    title: "Mastering Time Management",
    content: `<ul>
      <li><p>Learn how to take control of your time and boost your productivity with these essential tips.</p></li>
      <li><p>Effective time management starts with clarity and focus. Begin by setting SMART goals—Specific, Measurable, Achievable, Relevant, Time‑bound—to direct your daily and long-term actions. Augment this with the Pareto Principle, identifying the 20% of tasks that yield 80% of results and tackling them first (the so-called "eat the frog" approach). To structure your day, use time-blocking: assign dedicated calendar segments for coding, listening to music, creative work, and breaks. Paired with timeboxing, this method eliminates multitasking and keeps you aware of how long you've spent on each activity—studies suggest people who time-block complete up to 53% more tasks</p></li>
      <li><p>Next, work in focused intervals and prioritize breaks. The Pomodoro Technique—25 minutes of concentrated work followed by a 5-minute break—helps maintain attention and minimize interruptions, with a longer break after four rounds. But more recent research highlights flexible rhythm approaches: cycles like 52/17 or 75/33 (work/rest minutes) also show productivity gains by fitting human cognitive patterns. Breaks aren't just time off—they're cognitive resets. Studies have shown that stepping away for a few minutes improves focus, creativity, and reduces stress.</p></li>
      <li><p>But more recent research highlights flexible rhythm approaches: cycles like 52/17 or 75/33 (work/rest minutes) also show productivity gains by fitting human cognitive patterns. Breaks aren't just time off—they're cognitive resets. Studies have shown that stepping away for a few minutes improves focus, creativity, and reduces stress.</p></li>
      <li><p>To make breaks truly restorative, design them mindfully. Rather than scrolling on your phone, opt for micro-breaks—a short walk, stretching, or five minutes of mindfulness—to shift your brain into "diffuse mode," where creative insights emerge. Research from Simon Fraser University and other institutions shows that breaks of 10 minutes or more lead to reduced emotional exhaustion, better job satisfaction, and improved physical health.</p></li>
      <li><p>In summary: Set clear goals, time-block your day, work in focused intervals with intentional breaks, and use reflection as a feedback loop. With practice, you'll find your productivity skyrockets while stress fades—and you have more room for creativity and balance in life.</p></li>
      <li><p>Remember, the key to mastering time management is not just about doing more, but doing what matters most effectively. By implementing these strategies, you can transform your productivity and achieve your goals with less stress.</p></li>
    </ul>`,
    author: "Ron Amron",
    featuredImageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Productivity",
    createdAt: new Date("2025-01-10"),
    excerpt: "Unlock the secrets of time mastery: set achievable goals, break big dreams into actionable steps, and celebrate every win. Learn how to prioritize, focus, and make every minute count with proven techniques."
  },
  {
    id: 2,
    title: "Effective Goal Setting",
    content: `<p>Discover the secrets to setting achievable goals that keep you motivated and on track.</p>
      <p>Goal setting is more than just a buzzword; it's a powerful process that can transform your dreams into actionable plans. To start, ensure your goals are SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. This framework provides clarity and direction, making it easier to track progress and stay motivated.</p>
      <p>Next, break your goals down into smaller, manageable tasks. This not only makes the process less overwhelming but also allows you to celebrate small wins along the way. Use tools like to-do lists or digital planners to keep everything organized and in sight.</p>
      <p>Accountability is another key element in effective goal setting. Share your goals with a friend, mentor, or coach who can provide support and encouragement. Regular check-ins can help you stay on track and make adjustments as needed.</p>
      <p>Finally, don't forget to reflect on your progress. Regularly review your goals and the steps you're taking to achieve them. This reflection will help you identify what's working, what isn't, and where you might need to pivot.</p>
      <p>In summary, effective goal setting involves clarity, breakdown, accountability, and reflection. By implementing these strategies, you can set yourself up for success and make meaningful progress toward your aspirations.</p>`,
    author: "David Kleff",
    featuredImageUrl: "https://plus.unsplash.com/premium_photo-1747852229015-0cae3f3cbd29?q=80&w=687&auto=format&fit=crop",
    category: "Productivity",
    createdAt: new Date("2025-01-11"),
    excerpt: "Set goals that inspire action! Learn to break down ambitions into manageable steps, overcome obstacles, and stay laser-focused. Discover frameworks and tools to track progress and turn your vision into reality."
  },
  {
    id: 3,
    title: "Overcoming Procrastination",
    content: `<p>Find out how to beat procrastination and get things done with practical strategies.</p>
      <p>Procrastination is a common challenge that many people face, but it doesn't have to hold you back. The first step in overcoming procrastination is to understand its root causes. Often, procrastination stems from fear—fear of failure, fear of success, or even fear of the unknown. By identifying these fears, you can begin to address them head-on.</p>
      <p>One effective strategy for combating procrastination is to break tasks into smaller, more manageable steps. This makes the work feel less overwhelming and allows you to focus on one thing at a time. Additionally, setting specific deadlines for each step can create a sense of urgency and help you stay accountable.</p>
      <p>Another helpful technique is to eliminate distractions. Identify what commonly distracts you—whether it's your phone, social media, or a noisy environment—and take steps to minimize these interruptions. This might mean turning off notifications, creating a dedicated workspace, or using apps that block distracting websites.</p>
      <p>Finally, don't underestimate the power of self-compassion. Everyone struggles with procrastination at times, and beating yourself up over it can create a negative feedback loop. Instead, practice self-kindness and remind yourself that it's okay to ask for help or take breaks when needed.</p>
      <p>In summary, overcoming procrastination involves understanding your fears, breaking tasks into smaller steps, eliminating distractions, and practicing self-compassion. By implementing these strategies, you can take control of your time and boost your productivity.</p>`,
    author: "Aron Finch",
    featuredImageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=687&auto=format&fit=crop",
    category: "Productivity",
    createdAt: new Date("2025-01-12"),
    excerpt: "Beat procrastination with science-backed methods. Discover how to rewire your habits, build momentum, and take action—even when motivation is low. Your future self will thank you!"
  }
];

let nextId = 4;

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

app.use(express.static(join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
}); 

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/post1", (req, res) => {
    res.render("post1.ejs");
});

app.get("/post2", (req, res) => {
    res.render("post2.ejs");
});

app.get("/post3", (req, res) => {
    res.render("post3.ejs");
});

// Blog CRUD Routes

// List all posts
app.get("/posts", (req, res) => {
    res.render("posts", { posts: posts });
});

// Show form to create new post
app.get("/posts/new", (req, res) => {
    res.render("posts/new");
});

// Create new post
app.post("/posts", (req, res) => {
    const { title, content, author, featuredImageUrl, category, excerpt } = req.body;
    const newPost = {
        id: nextId++,
        title,
        content,
        author,
        featuredImageUrl: featuredImageUrl || "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80",
        category,
        createdAt: new Date(),
        excerpt: excerpt || content.substring(0, 150).replace(/<[^>]*>/g, '') + "..."
    };
    posts.push(newPost);
    res.redirect("/posts");
});

// Show single post
app.get("/posts/:id", (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("posts/show", { post: post });
});

// Show form to edit post
app.get("/posts/:id/edit", (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("posts/edit", { post: post });
});

// Update post
app.post("/posts/:id", (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).send("Post not found");
    }
    const { title, content, author, featuredImageUrl, category, excerpt } = req.body;
    post.title = title;
    post.content = content;
    post.author = author;
    post.featuredImageUrl = featuredImageUrl;
    post.category = category;
    post.excerpt = excerpt;
    res.redirect(`/posts/${post.id}`);
});

// Delete post
app.post("/posts/:id/delete", (req, res) => {
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        posts.splice(index, 1);
    }
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


