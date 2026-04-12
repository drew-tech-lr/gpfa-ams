import React, { ReactNode } from "react";

interface SectionProps {
    onActive: () => void;
    children: ReactNode;
}

const SectionWrapper = ({onActive, children}: SectionProps) => {
  return (
    <section
      onFocusCapture={onActive}
      onClick={onActive} // fallback for non-input clicks
      className=""
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
