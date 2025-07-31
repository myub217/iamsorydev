import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  altText: string;
  price: string;
  comingSoonNote?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  altText,
  price,
  comingSoonNote,
}) => {
  return (
    <article
      role="group"
      aria-label={`บริการ: ${title}`}
      className="flex flex-col rounded-2xl bg-white dark:bg-gray-900 p-5 shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-[1.01]"
    >
      {/* Image Block */}
      <div className="w-full rounded-xl overflow-hidden aspect-[4/3] mb-4">
        <img
          src={image}
          alt={altText}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={e => (e.currentTarget.src = '/fallback.jpg')}
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 mb-3">{description}</p>

      {/* Pricing or Coming Soon Note */}
      <div className="mt-auto">
        {comingSoonNote ? (
          <span className="italic text-sm text-yellow-600 dark:text-yellow-400">
            {comingSoonNote}
          </span>
        ) : (
          <span className="text-sm font-semibold text-primary dark:text-primary-light">
            {price}
          </span>
        )}
      </div>

      {/* Optional CTA */}
      {/* 
      <div className="mt-4">
        <button className="btn btn-outline w-full">สนใจบริการนี้</button>
      </div> 
      */}
    </article>
  );
};

export default ServiceCard;
