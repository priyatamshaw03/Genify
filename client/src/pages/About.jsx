import React from "react";
import {
  FileText,
  Type,
  Image as ImageIcon,
  Scissors,
  Eraser,
  ClipboardCheck,
  HashIcon,
} from "lucide-react";

const About = () => {
  const tools = [
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "AI Article Writer",
      description:
        "Generate high-quality, engaging articles on any topic in minutes.",
    },
    {
      icon: <HashIcon className="w-10 h-10 text-primary" />,
      title: "Blog Title Generator",
      description: "Find catchy, optimized titles for your blog posts instantly.",
    },
    {
      icon: <ImageIcon className="w-10 h-10 text-primary" />,
      title: "AI Image Generation",
      description:
        "Create stunning visuals in different styles — realistic, anime, cartoon, 3D, and more.",
    },
    {
      icon: <Scissors className="w-10 h-10 text-primary" />,
      title: "Background Removal",
      description:
        "Effortlessly remove backgrounds from images with AI precision.",
    },
    {
      icon: <Eraser className="w-10 h-10 text-primary" />,
      title: "Object Removal",
      description:
        "Remove unwanted objects from your photos seamlessly with AI tools.",
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-primary" />,
      title: "Resume Reviewer",
      description:
        "Get AI-powered insights to improve your resume and boost career opportunities.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      {/* Heading */}
      <h1 className="text-4xl text-center font-bold text-primary mb-6">
        About Genify
      </h1>
      <p className="text-lg mb-10 text-center">
        Welcome to <strong>Genify</strong>, your all-in-one AI companion designed
        to create, enhance, and optimize content with powerful, easy-to-use tools.
      </p>

      {/* Our Story */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-4">✨ Our Story</h2>
        <p>
          Genify was born with a vision: to make cutting-edge AI accessible to
          everyone — from students and professionals to content creators and
          businesses. We understand how valuable time and creativity are, so our
          mission is simple: help you work smarter, not harder.
        </p>
        <p className="mt-4">
          Whether it’s writing, designing, or refining, Genify is here to empower
          your creativity and productivity.
        </p>
      </section>

      {/* Why Choose Us (Cards) */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-8">
          ⚡ Why Choose Genify?
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-primary shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{tool.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {tool.title}
              </h3>
              <p className="text-gray-600 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Vision */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-4">🌍 Our Vision</h2>
        <p>
          At <strong>Genify</strong>, we believe AI should amplify human potential,
          not replace it. That’s why we focus on tools that encourage{" "}
          <strong>creativity, productivity, and accessibility</strong>. Our goal
          is to bridge the gap between ideas and execution with AI-powered
          innovation.
        </p>
      </section>

      {/* Join the Community */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-4">🚀 Join the Genify Community</h2>
        <p>
          Thousands of creators, students, and professionals already use Genify to
          supercharge their workflows. From crafting the perfect blog post to
          designing visuals that inspire, Genify is your partner in unlocking the
          true power of AI.
        </p>
      </section>

      <p className="text-xl font-semibold text-primary mt-8 text-center">
        Genify — Powering Creativity, One Idea at a Time.
      </p>
    </div>
  );
};

export default About;
