// src/data/weddingData.js (WITH PLACEHOLDER IMAGES FOR TESTING)

export const weddingGalleries = {
  'mehal-kajal': {
    names: 'Mehal & Kajal',
    date: 'December 2024',
    location: 'Punjab, India',
    description: 'A celebration of love, tradition, and timeless moments',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    images: [
      '/photography/wedding-1/1.webp',
      '/photography/wedding-1/2.webp',
      '/photography/wedding-1/3.webp',
      '/photography/wedding-1/4.jpg',
      '/photography/wedding-1/5.jpg',
      '/photography/wedding-1/6.jpg',
      '/photography/wedding-1/7.jpg',
      '/photography/wedding-1/8.jpg',
      '/photography/wedding-1/9.jpg',
      '/photography/wedding-1/10.jpg',
      '/photography/wedding-1/11.jpg',
      '/photography/wedding-1/12.jpg',
      '/photography/wedding-1/13.jpg',
      '/photography/wedding-1/14.jpg',
      '/photography/wedding-1/15.jpg',
      '/photography/wedding-1/16.jpg',
      '/photography/wedding-1/17.jpg',
      '/photography/wedding-1/18.jpg',
      '/photography/wedding-1/19.jpg',
      '/photography/wedding-1/20.jpg',
      '/photography/wedding-1/21.jpg',
      '/photography/wedding-1/22.jpg',
      '/photography/wedding-1/23.jpg',
      '/photography/wedding-1/24.jpg',
      '/photography/wedding-1/25.jpg',
    ]
  },
  'preeti-sam': {
    names: 'Preeti & Sam',
    date: 'November 2024',
    location: 'Delhi, India',
    description: 'Where elegance meets tradition in perfect harmony',
    coverImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop',
    images: [
      '/photography/wedding-1/2.webp',
      '/photography/wedding-1/9.jpg',
      '/photography/wedding-1/8.jpg',
      '/photography/wedding-1/7.jpg',
      '/photography/wedding-1/6.jpg',
      '/photography/wedding-1/5.jpg',
      '/photography/wedding-1/4.jpg',
      '/photography/wedding-1/3.webp',
      '/photography/wedding-1/2.webp',
      '/photography/wedding-1/1.webp',
      '/photography/wedding-1/11.jpg',
      '/photography/wedding-1/12.jpg',
      '/photography/wedding-1/13.jpg',
      '/photography/wedding-1/14.jpg',
      '/photography/wedding-1/15.jpg',
      '/photography/wedding-1/16.jpg',
      '/photography/wedding-1/17.jpg',
      '/photography/wedding-1/18.jpg',
      '/photography/wedding-1/19.jpg',
      '/photography/wedding-1/20.jpg',
      '/photography/wedding-1/21.jpg',
      '/photography/wedding-1/22.jpg',
      '/photography/wedding-1/23.jpg',
      '/photography/wedding-1/24.jpg',
      '/photography/wedding-1/25.jpg',
    ]
  },
  'riya-arjun': {
    names: 'Riya & Arjun',
    date: 'October 2024',
    location: 'Jaipur, India',
    description: 'A royal celebration of eternal love',
    coverImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop',
    images: [
      '/photography/wedding-1/1.webp',
      '/photography/wedding-1/2.webp',
      '/photography/wedding-1/3.webp',
      '/photography/wedding-1/4.jpg',
      '/photography/wedding-1/5.jpg',
      '/photography/wedding-1/6.jpg',
      '/photography/wedding-1/7.jpg',
      '/photography/wedding-1/8.jpg',
      '/photography/wedding-1/9.jpg',
      '/photography/wedding-1/10.jpg',
      '/photography/wedding-1/11.jpg',
      '/photography/wedding-1/12.jpg',
      '/photography/wedding-1/13.jpg',
      '/photography/wedding-1/14.jpg',
      '/photography/wedding-1/15.jpg',
      '/photography/wedding-1/16.jpg',
      '/photography/wedding-1/17.jpg',
      '/photography/wedding-1/18.jpg',
      '/photography/wedding-1/19.jpg',
      '/photography/wedding-1/20.jpg',
      '/photography/wedding-1/21.jpg',
      '/photography/wedding-1/22.jpg',
      '/photography/wedding-1/23.jpg',
      '/photography/wedding-1/24.jpg',
      '/photography/wedding-1/25.jpg',
    ]
  }
};

// Helper function to generate balanced layout pattern
export const generateLayoutPattern = (totalImages = 25) => {
  // Fixed pattern that you can plan your images around
  // This pattern always stays the same, so you know exactly which images 
  // will be grouped together when organizing your photos
  
  const fixedPattern = [1, 2, 1, 3, 1, 1, 1, 2, 3, 1, 2, 1, 3, 1]; // Total: 25
  
  // Pattern breakdown for reference:
  // Row 1: Image 1 (single)
  // Row 2: Images 2-3 (pair - SAME HEIGHT)
  // Row 3: Image 4 (single)
  // Row 4: Images 5-7 (trio - SAME HEIGHT)
  // Row 5: Images 8-9 (pair - SAME HEIGHT)
  // Row 6: Image 10 (single)
  // Row 7: Images 11-12 (pair - SAME HEIGHT)
  // Row 8: Images 13-15 (trio - SAME HEIGHT)
  // Row 9: Image 16 (single)
  // Row 10: Images 17-18 (pair - SAME HEIGHT)
  // Row 11: Image 19 (single)
  // Row 12: Images 20-22 (trio - SAME HEIGHT)
  // Row 13: Image 23-25 (trio - SAME HEIGHT)
  
  return fixedPattern;
};

// Optional: If you want different patterns for different weddings, use this instead:
export const getPatternForWedding = (weddingSlug) => {
  const patterns = {
    'mehal-kajal': [1, 2, 1, 3, 1, 1, 1, 2, 3, 1, 2, 1, 2, 1, 1,2],
    'preeti-sam': [1, 1, 3, 1, 2, 2, 1, 3, 2, 1, 2, 1, 3],
    'riya-arjun': [1, 3, 2, 1, 2, 1, 3, 2, 1, 2, 3, 1, 2],
  };
  
  return patterns[weddingSlug] || patterns['mehal-kajal']; // Default pattern
};