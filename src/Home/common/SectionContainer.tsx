// ✅ src/Home/common/SectionContainer.tsx — Consistent Section Wrapper

import { ReactNode } from 'react';

/**
 * ✅ SectionContainer
 * - ใช้เป็น container กลางสำหรับทุก section
 * - กำหนด max-width, padding, และ responsive margin
 * - ใช้คู่กับ section-level padding (py) ในแต่ละ section
 */
type SectionContainerProps = {
  children: ReactNode;
};

const SectionContainer = ({ children }: SectionContainerProps) => {
<<<<<<< HEAD
  return <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
};

export default SectionContainer;
=======
<<<<<<< HEAD
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default SectionContainer;
=======
  return <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
};

export default SectionContainer;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
