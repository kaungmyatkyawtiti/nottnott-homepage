import { Metadata } from "next";
import WorkSection from "./_components/WorkSection";

export const metadata: Metadata = {
  title: "Works",
};

export default function WorksPage() {
  return (
    <main title="Works" className="page-container relative">
      <WorkSection />
    </main>
  );
}
