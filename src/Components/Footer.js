import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
      © Developed using React by  {" "}
        <a
          className="font-medium"
          href="https://www.linkedin.com/in/phannindra/"
          target="_blank"
          rel="noreferrer noopener">
          Phannindra
        </a>{" "}
        <span className="text-gradient font-medium"> </span> 
        <span className="text-gradient font-medium"> </span>
      </p>
    </footer>
  );
}
export default Footer;
