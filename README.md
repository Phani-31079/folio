# React Developer Portfolio template
#### Live Demo https://phannindra.netlify.app/
#### Figma Design https://www.figma.com/proto/M3unAzuPEQwemGAdKszYJw/Developer-Portfolio-Design-(Community)?node-id=21-245&t=Dz9FtAs2jAoSAwO0-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1
### Preview ( Dark Mode )

<img src="/preview.gif" alt="preview" width="600px" />

## Follow Below instructions to add your deatils in the portfolio.

### Change and customize every section according to your need, All you need to do is edit `/src/Details.js`

#### Open `/src/Details.js` & modify it as per your need.

```javascript
/ Enter your Personal Details here
export const personalDetails = {
  name: "Pavan MG",
  tagline: "I build things for web",
  img: profile,
  about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  }
];

// Enter your Education Details here
export const eduDetails = { ... };

// Tech Stack and Tools
export const techStackDetails = { ... };

// Enter your Project Details here
export const projectDetails = [ ... ];

// Enter your Contact Details here
export const contactDetails = { ... };
```
