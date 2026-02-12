// app/films/page.js

import FilmsHero from '@/components/FilmsHero';
import FilmsShowcase from '@/components/FilmsShowcase';


export default function FilmsPage() {
  return (
    <main>
      <FilmsHero />
      <FilmsShowcase />
    </main>
  );
}