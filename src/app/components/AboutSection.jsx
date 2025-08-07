"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "Languages",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
      </ul>
    ),
  },

  {
    title: "FrameworksAndLibs",
    id: "FrameworksAndLibs",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Vite.js</li>
        <li>Vue.js</li>
        <li>Next.js</li>
      </ul>
    ),
  },

  {
    title: "ToolsAndTech",
    id: "ToolsAndTech",
    content: (
      <ul className="list-disc pl-2">
        <li>Github</li>
        <li>Figma</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Ilustrator</li>
      </ul>
    ),
  },


  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>UTN - Universidad Tecnológica Nacional  - Argentina 2020</li>
        <li>ADA IT Woman- UX/UI - Argentina 2024</li>
        <li>Pinterest Advertising Essentials - 2024</li>
        <li>ADA IT Woman - Front end - Argentina 2025</li>
      </ul>
    ),
  },

];

const AboutSection = () => {
  const [tab, setTab] = useState("Languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white scroll-mt-32 min-h-screen" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/my-cats.jpg" width={500} height={500} rounded-full alt="my-cats"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">✨About Me✨</h2>
          <p className="text-base lg:text-lg">
            Hi! I&apos;m a web developer, UX/UI designer, paleontology student, and proudly from Argentina.
            I&apos;m passionate about creating meaningful, interactive, and responsive web experiences. I&apos;m always eager to learn something new and bring creative ideas to life. My strength lies in front-end development.
          </p>
          <br />
          <p>
            I share my days with two cats who think they are in charge, and I find peace in nature whenever I step away from the screen. I love taking pictures of anything I find beautiful —from a leaf on the ground to a cup of coffee. Whether I&apos;m coding or sketching ideas, I&apos;m always chasing inspiration.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Languages")}
              active={tab === "Languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("FrameworksAndLibs")}
              active={tab === "FrameworksAndLibs"}
            >
              {" "}
              Frameworks and Libs{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("ToolsAndTech")}
              active={tab === "ToolsAndTech"}
            >
              {" "}
              Other Tools{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;