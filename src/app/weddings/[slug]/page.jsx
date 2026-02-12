'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { weddingGalleries, getPatternForWedding } from '@/data/weddingData';

export default function WeddingGalleryPage() {
  const params = useParams();
  const router = useRouter();
  const [layoutPattern, setLayoutPattern] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const slug = params.slug;
  const wedding = weddingGalleries[slug];

  useEffect(() => {
    if (wedding) {
      // Generate layout pattern once on mount
      setLayoutPattern(getPatternForWedding(slug));
      setIsLoading(false);
    }
  }, [wedding]);

  if (!wedding) {
    return (
      <div className="min-h-screen bg-[#E8E4DC] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{fontFamily: 'Times New Roman, serif'}}>
            Gallery Not Found
          </h1>
          <button
            onClick={() => router.push('/')}
            className="text-orange-500 hover:text-orange-600 underline"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  // Split images according to layout pattern
  const renderGallery = () => {
    const rows = [];
    let imageIndex = 0;

    layoutPattern.forEach((count, rowIndex) => {
      const rowImages = wedding.images.slice(imageIndex, imageIndex + count);
      imageIndex += count;

      rows.push(
        <div
          key={`row-${rowIndex}`}
          className={`
            ${count === 1 ? 'w-full' : ''}
            ${count === 2 ? 'grid grid-cols-2 gap-1 ' : ''}
            ${count === 3 ? 'grid grid-cols-3 gap-1 ' : ''}
          `}
          style={{
            animation: `fadeInUp 0.8s ease-out ${rowIndex * 0.1}s both`
          }}
        >
          {rowImages.map((image, imgIndex) => (
            <div
              key={`img-${rowIndex}-${imgIndex}`}
              className="relative overflow-hidden bg-gray-200 group cursor-pointer"
            >
              <img
                src={image}
                alt={`${wedding.names} - Photo ${imageIndex - count + imgIndex + 1}`}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
            </div>
          ))}
        </div>
      );
    });

    return rows;
  };

  return (
    <div className="min-h-screen bg-[#E8E4DC]">
      
      {/* Header Section */}
      <header className="relative bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-8 md:py-12 md:pt-20">
          
          {/* Back Button */}
          

          {/* Title Section */}
          <div className="space-y-4">
            <h1 
              className="text-5xl md:text-6xl lg:text-9xl leading-tight text-[#dbcbad] font-playfair text-center "
              
            >
              {wedding.names}
            </h1>
            
          </div>
        </div>
      </header>

      {/* Gallery Section */}
      <main className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16 lg:py-20">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Loading gallery...</p>
            </div>
          </div>
        ) : (
          <div className="space-y-2 md:space-y-2">
            {renderGallery()}
          </div>
        )}
      </main>

      {/* Footer Section */}
      

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}