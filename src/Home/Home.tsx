// ✅ src/Home/Home.tsx
import Hero from '@/Home/components/Hero';
import About from '@/Home/components/About';
import Services from '@/Home/components/Services';
import Feature from '@/Home/components/Feature';
import { PortfolioGallery } from '@/Home/components/Portfolio';
import SectionContainer from '@/Home/common/SectionContainer';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col scroll-smooth">
      {/* ✅ Hero Section */}
      <section id="hero" aria-labelledby="hero-title" className="scroll-mt-20">
        <Hero />
      </section>

      {/* ✅ About Section */}
      <section id="about" aria-labelledby="about-title" className="scroll-mt-20 py-16 md:py-24">
        <SectionContainer>
          <About />
        </SectionContainer>
      </section>

      {/* ✅ Services Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section id="services" aria-labelledby="services-title" className="scroll-mt-20 py-16 md:py-24 bg-base-100">
=======
>>>>>>> b269264 (update)
      <section
        id="services"
        aria-labelledby="services-title"
        className="scroll-mt-20 py-16 md:py-24 bg-base-100"
      >
<<<<<<< HEAD
=======
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
        <SectionContainer>
          <Services />
        </SectionContainer>
      </section>

      {/* ✅ Feature Section */}
      <section id="feature" aria-labelledby="feature-title" className="scroll-mt-20 py-16 md:py-24">
        <SectionContainer>
          <Feature />
        </SectionContainer>
      </section>

      {/* ✅ Portfolio Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section id="portfolio" aria-labelledby="portfolio-title" className="scroll-mt-20 py-16 md:py-24 bg-base-100">
=======
>>>>>>> b269264 (update)
      <section
        id="portfolio"
        aria-labelledby="portfolio-title"
        className="scroll-mt-20 py-16 md:py-24 bg-base-100"
      >
<<<<<<< HEAD
=======
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
        <SectionContainer>
          <PortfolioGallery />
        </SectionContainer>
      </section>
    </main>
  );
};

<<<<<<< HEAD
export default Home;
=======
<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
