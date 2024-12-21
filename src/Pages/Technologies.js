import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    c,
    java,
    python,
    mysql,
    spring,
    figma,
    awscloud,
    django,
    fusion,
    ml,
    powerbi,
    canva,
    nodejs,
    vscode,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={c} title="C Programming" alt="" />
        <img src={java} title="Java" alt="" />
        <img src={python} title="Python" alt="" />
        <img src={mysql} title="MySQL" alt="" />
        <img src={nodejs} title="Script" alt="" />
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={django} title="Django" alt="" />
        <img src={spring} title="Spring Boot" alt="" />
        <img src={ml} title="Machine Learning" alt="" />
        <img src={awscloud} title="AWS Cloud" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={figma} title="Figma" alt="Figma" />
        <img src={canva} title="Canva" alt="Canva" />
        <img src={powerbi} title="Power BI" alt="Power BI" />
        <img src={fusion} title="Fusion 360" alt="Fusion 360" />
        <img src={vscode} title="VS Code" alt="VS Code" />
      </section>
    </main>
  );
}

export default Technologies;
