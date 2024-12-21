// Enter all your detials in this file
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import awscloud from "./assets/techstack/awscloud.png";
import canva from "./assets/techstack/canva.png";
import django from "./assets/techstack/django.png";
import fusion from  "./assets/techstack/fusion.png";
import ml from "./assets/techstack/ML.png";
import vscode from "./assets/techstack/vscode.png";
import nodejs from "./assets/techstack/nodejs.png";
import powerbi from "./assets/techstack/powerbi.png";
import css from "./assets/techstack/css.png";
import figma from "./assets/techstack/figma.png";
import c from "./assets/techstack/c.png";
import java from "./assets/techstack/java.png";
import python from "./assets/techstack/python.png";
import mysql from "./assets/techstack/mysql.png";
import spring from "./assets/techstack/spring.png";
import aws from "./assets/certifications/aws.png";
import azure from "./assets/certifications/azure.png";
import oracle from "./assets/certifications/oracle.png";
import redhat from "./assets/certifications/redhat.png";
import tf from "./assets/certifications/tf.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";

// Enter your Personal Details here
export const personalDetails = {
  name: "Phannindra Kandula",
  tagline: " ",
  img: profile,
  about: `I am a Full Stack Developer with a passion for creating beautiful and responsive web applications. I have experience in building web applications using modern technologies like React, Java - SpringBoot, MySQL. I am always eager to learn new technologies and improve my skills. I am a team player and have good communication skills. I am looking for an opportunity to work in a challenging environment and grow as a professional.`
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/phannindra/",
  github: "https://www.github.com/phani-31079",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Amazon ML Summer School 24",
    Company: `Amazon`,
    Location: "Remote",
    Type: "Integrated learning experience on ML topics",
    Duration: "July 2024 - Aug 2024",
    Link: "https://drive.google.com/file/d/1jStri9iENXi6ilHDBaD4JqDLbfO9eQY7/view",
  },
  {
    Position: "Virtual Intern in Machine Learning",
    Company: `AICTE`,
    Location: "Remote",
    Type: "Virtual Internship",
    Duration: "May 2023 - July 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Koneru Lakshmaiah Education Foundation",
    Company: "Computer Science & Engineering",
    Location: "Vaddeswaram Campus",
    Type: "9.39/10.00",
    Duration: "Aug 2021 - Present",
  },
  {
    Position: "Tirumala Junior College",
    Company: `AP Board of Intermediate,   M P C`,
    Location: "Rajahmundry",
    Type: "90.4%",
    Duration: "Jun 2019 - March 2021",
  },
  {
    Position: "Sri Chaitanya Techno School",
    Company: `AP Board of Secondary Education, SSC`,
    Location: "Jaggampeta",
    Type: "9.3/10",
    Duration: "Jun 2018 - April 2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  c: c,
  java: java,
  python: python,
  mysql: mysql,
  figma: figma,
  spring: spring,
  awscloud: awscloud,
  django: django,
  fusion: fusion,
  ml: ml,
  powerbi: powerbi,
  canva: canva,
  nodejs: nodejs,
  vscode: vscode,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Drowsiness Detection System",
    image: projectImage1,
    description: `We used a YOLOv5 model to predict wether a person feels drowsy or not, basing upon if the eyes are closed or
open. If a yawn is detected then buzzer rings. We used OpenCV to detect the face and eyes and Dlib to detect the facial landmarks and also Pygame to play the alarm sound.`,
    techstack: "OpenCv, YOLOv5, Dlib, Pygame, Python, Pytorch",
    githubLink: "/under-development",
  },
  {
    title: "Employee Leave Management System",
    image: projectImage2,
    description: `This system was developed with 3-tier architecture model and implemented using web based
technologies which serves as improvement maintaining accuracy, and highlight the need to integrate transparency
in employee record and they can track their progress.`,
    techstack: "Java, Spring Boot, MySQL, Eureka Microservices, JSP",
    githubLink: "/under-development",
  },
  {
    title: "Rental Management System",
    image: projectImage3,
    description: `A Rental Management System (RMS) is a web application that facilitates a hotel's reservation
     management and administrative tasks. The most important functions include front-desk operations, reservations,
     channel management, housekeeping, rate and occupancy management, and payment.`,
    techstack: "Django, Python, HTML/CSS, JavaScript, SQLite3",
    githubLink: "/under-development",
  },
  {
    title: "Online Banking System",
    image: projectImage4,
    description: `Online banking is a critical financial service enabling users to manage their accounts remotely. Key activities include check balance, transaction history, 
    transfer funds. Security is paramount, with a focus on protecting transactions and login activities from unauthorized access or breaches.`,
    techstack: "ReactJs, NodeJs, MongoDB, HTML/CSS, JavaScript",
    githubLink: "/under-development",
  },
  {
    title: "My Portfolio Website",
    image: projectImage5,
    description: `This portfolio website is built using ReactJs. It showcases my skills, projects and certifications. It is fully responsive which has a clean and minimalistic design with basic understanding in react.
    People can find more about me and my work through this website rather than my resume.`,
    techstack: "ReactJs, JavaScript, GitHub Pages",
    githubLink: "/under-development",
  },
];

// Enter your Contact Details here
export const certificationsDetails = {
  aws: aws,
  azure: azure,
  oracle: oracle,
  redhat: redhat,
  tf: tf,
};


export const resume={
  link: 'https://drive.google.com/file/d/1M_0V03IWIAu_ZDqxIoEGHY8ONLw5nWxc/view?usp=sharing'
};