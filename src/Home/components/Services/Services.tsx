// ✅ src/Home/components/Services/Services.tsx — บริการหลัก JP Visual & Docs

import React from 'react';
import { jpServices } from '@/data/services';
import ServiceCard from './ui/ServiceCard';
import ComingSoonServiceCard from './ui/ComingSoonServiceCard';

const Services: React.FC = () => {
<<<<<<< HEAD
  const availableServices = jpServices.filter(service => service.available);
  const comingSoonServices = jpServices.filter(service => !service.available);
=======
<<<<<<< HEAD
  const availableServices = jpServices.filter((service) => service.available);
  const comingSoonServices = jpServices.filter((service) => !service.available);
=======
  const availableServices = jpServices.filter(service => service.available);
  const comingSoonServices = jpServices.filter(service => !service.available);
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 id="services-title" className="text-4xl font-bold tracking-tight">
            บริการของเรา
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            รวมทุกบริการที่ตอบโจทย์ พร้อมทีมงานดูแลมืออาชีพ
          </p>
        </header>

        {/* ✅ Available Services */}
        <section aria-labelledby="available-services-title" className="mb-16">
          <h3 id="available-services-title" className="sr-only">
            บริการที่พร้อมใช้งาน
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {availableServices.length > 0 ? (
<<<<<<< HEAD
              availableServices.map(service => (
=======
<<<<<<< HEAD
              availableServices.map((service) => (
=======
              availableServices.map(service => (
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  altText={service.altText}
                  price={service.price}
                  comingSoonNote={service.comingSoonNote}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
                ขณะนี้ยังไม่มีบริการที่พร้อมใช้งาน
              </p>
            )}
          </div>
        </section>

        {/* ✅ Divider */}
        {comingSoonServices.length > 0 && availableServices.length > 0 && (
          <hr className="my-12 border-t border-gray-300 dark:border-gray-700" />
        )}

        {/* ✅ Coming Soon Services */}
        {comingSoonServices.length > 0 && (
          <section aria-labelledby="coming-soon-title">
            <h3
              id="coming-soon-title"
              className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200"
            >
              บริการที่จะเปิดตัวเร็ว ๆ นี้
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
<<<<<<< HEAD
              {comingSoonServices.map(service => (
=======
<<<<<<< HEAD
              {comingSoonServices.map((service) => (
=======
              {comingSoonServices.map(service => (
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
                <ComingSoonServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  altText={service.altText}
                  comingSoonNote={service.comingSoonNote}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Services;
=======
<<<<<<< HEAD
export default Services;
=======
export default Services;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
