import React from "react";
import "./NextStepBtn.scss";

const NextStepBtn = ({ validateStep }: { validateStep: () => void }) => {
  return (
    <div className="bg-white fixed-bottom p-3 shadow">
      <button
        onClick={() => validateStep()}
        type="button"
        className="btn btn-primary multi-step-form__next-btn ms-auto d-block"
      >
        Next Step
      </button>
    </div>
  );
};

export default NextStepBtn;
