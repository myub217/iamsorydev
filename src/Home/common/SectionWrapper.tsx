<<<<<<< HEAD
import { FC, PropsWithChildren } from 'react';
=======
<<<<<<< HEAD
import { FC, PropsWithChildren } from "react";
=======
import { FC, PropsWithChildren } from 'react';
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)

interface SectionWrapperProps {
  id?: string;
  className?: string; // extra classes for outer <section>
  innerClassName?: string; // control inner container
}

const SectionWrapper: FC<PropsWithChildren<SectionWrapperProps>> = ({
  id,
<<<<<<< HEAD
  className = '',
  innerClassName = '',
  children,
}) => {
  return (
    <section id={id} className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 ${className}`}>
=======
<<<<<<< HEAD
  className = "",
  innerClassName = "",
  children,
}) => {
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 ${className}`}
    >
=======
  className = '',
  innerClassName = '',
  children,
}) => {
  return (
    <section id={id} className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 ${className}`}>
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
      <div className={`max-w-7xl mx-auto ${innerClassName}`}>{children}</div>
    </section>
  );
};

<<<<<<< HEAD
export default SectionWrapper;
=======
<<<<<<< HEAD
export default SectionWrapper;
=======
export default SectionWrapper;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
