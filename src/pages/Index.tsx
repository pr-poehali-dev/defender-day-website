import React from "react";
import HeroSection from "@/components/HeroSection";
import HistoryTimeline from "@/components/HistoryTimeline";
import DefendersGallery from "@/components/DefendersGallery";
import HonorsSection from "@/components/HonorsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HistoryTimeline />
      <DefendersGallery />
      <HonorsSection />
    </div>
  );
};

export default Index;
