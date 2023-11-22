import React, { ReactNode } from "react";
import "./Step.scss";

type StepProps = {
  children: React.ReactNode;
  title?: string;
  desc?: string;
};

const Step = ({ children, title, desc }: StepProps) => {
  return (
    <main className="step mx-auto p-4 rounded-3 shadow">
      {title ? (
        <>
          <h2 className="step__title">{title}</h2>
          <p className="step__desc">{desc}</p>
        </>
      ) : null}
      {children}
    </main>
  );
};

export default Step;
