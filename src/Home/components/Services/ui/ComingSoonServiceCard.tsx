import React from 'react';

interface ComingSoonProps {
  title: string;
  description: string;
  image: string;
  altText: string;
  comingSoonNote?: string;
}

const ComingSoonServiceCard: React.FC<ComingSoonProps> = ({
  title,
  description,
  image,
  altText,
  comingSoonNote,
}) => {
  return (
    <article
      role="group"
      aria-label={`บริการ ${title} (ยังไม่เปิดให้ใช้งาน${comingSoonNote ? `: ${comingSoonNote}` : ''})`}
      className="relative group flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-md transition hover:shadow-lg"
    >
      {/* Blurred Thumbnail */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={altText}
          loading="lazy"
          className="h-full w-full object-cover filter grayscale blur-sm group-hover:blur-[2px] transition duration-300"
        />
        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/60">
          <span className="text-base sm:text-lg font-bold tracking-wide text-gray-800 dark:text-gray-100">
            COMING SOON
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        {comingSoonNote && (
          <span className="text-xs font-medium text-orange-600 dark:text-orange-400 mt-1">
            {comingSoonNote}
          </span>
        )}
      </div>
    </article>
  );
};

<<<<<<< HEAD
export default ComingSoonServiceCard;
=======
<<<<<<< HEAD
export default ComingSoonServiceCard;
=======
export default ComingSoonServiceCard;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
