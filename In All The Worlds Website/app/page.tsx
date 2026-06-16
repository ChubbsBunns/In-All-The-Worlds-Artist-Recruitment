import { HeroSection } from '@/components/Hero/HeroSection';
import { SynopsisSection } from '@/components/Synopsis/SynopsisSection';
import { CharactersSection } from '@/components/Characters/CharactersSection';
import { MoodBoardSection } from '@/components/MoodBoard/MoodBoardSection';
import { TheRoleSection } from '@/components/TheRole/TheRoleSection';
import { ContactSection } from '@/components/Contact/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SynopsisSection />
      <CharactersSection />
      <MoodBoardSection />
      <TheRoleSection />
      <ContactSection />
    </>
  );
}
