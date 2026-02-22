import { Metadata } from "next";
import DigitalArtsSection from "./_components/DigitalArtsSection";

export const metadata: Metadata = {
  title: "Digital Arts",
};

const DigitalArtsPage = () => {
  return (
    <main className='page-container' title="Arts">
      <DigitalArtsSection />
    </main>
  )
}

export default DigitalArtsPage;
