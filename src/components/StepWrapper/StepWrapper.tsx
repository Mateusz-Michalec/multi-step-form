import React from "react";
import "./StepWrapper.scss";

type StepWrapperProps = {
  desc: string;
  title: string;
  children: React.ReactNode;
};

const StepWrapper = ({ desc, title, children }: StepWrapperProps) => {
  return (
    <main className="step mx-3 p-4 rounded-3 shadow bg-white">
      {desc && title ? (
        <>
          <h2 className="step__title">{title}</h2>
          <p className="step__desc">{desc}</p>
        </>
      ) : null}
      {children}
    </main>
  );
};

export default StepWrapper;
