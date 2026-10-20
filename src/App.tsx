import { useCallback, useState } from "react";
import { ApplicationSection } from "./components/ApplicationForm";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Programs } from "./components/Programs";
import { loadApplications, type Application } from "./lib/storage";

export default function App() {
  const [selectedProgramId, setSelectedProgramId] = useState("");
  const [restored] = useState<Application | null>(() => {
    const list = loadApplications();
    return list.length > 0 ? list[list.length - 1] : null;
  });

  const chooseProgram = useCallback((id: string) => {
    setSelectedProgramId(id);
    document
      .getElementById("application")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const clearSelectedProgram = useCallback(() => {
    setSelectedProgramId("");
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Programs onChoose={chooseProgram} />
        <ApplicationSection
          selectedProgramId={selectedProgramId}
          onProgramIdChange={clearSelectedProgram}
          restored={restored}
        />
      </main>
      <Footer />
    </div>
  );
}
