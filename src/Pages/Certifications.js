import React from "react";
import { certificationsDetails } from "../Details";

function Certifications() {
  const {
     aws,
     azure,
     oracle,
     redhat,
      tf,
  } = certificationsDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Certifications
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Certifications I've completed
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <a href="https://www.credly.com/badges/ab04895c-cdbb-48be-8ef9-240a4247c060/linked_in?t=ro0o24">
            <img src={azure} title="Azure AI fundamentals (AI-900)" alt="" />
          </a>
          <a href="https://rhtapps.redhat.com/verify?certId=230-177-941">
            <img src={redhat} title="Enterprise Application Developer (EX-183)" alt="" />
          </a>
          <a href="https://www.credly.com/badges/6fcaf519-4fbd-4684-8fa4-59250518506a/public_url">
            <img src={aws} title="AWS Cloud Practitioner" alt="" />
          </a>
          <a href="https://www.credential.net/03c27f79-a9a5-4127-93cc-cd02ae020498##gs.8nzq7x">
            <img src={tf} title="Google TensorFlow Developer" alt="" />
          </a>
          <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=526297F330E7C2D5E5538E096E48AD999EEE11FB4A7F2B80A4D499B57CB5C9E7">
            <img src={oracle} title="Data Science Professional" alt="" /> </a>
      </section>
    </main>
  );
}
export default Certifications;