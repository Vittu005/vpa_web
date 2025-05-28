"use client";

import dynamic from "next/dynamic";

// Dynamically import BotpressChatbot and AccessibilityWidget with SSR disabled
const BotpressChatbot = dynamic(() => import("@/components/botpress-chatbot"), {
  ssr: false,
});

const AccessibilityWidget = dynamic(
  () => import("@/components/accessibility-widget").then((mod) => mod.AccessibilityWidget),
  { ssr: false }
);

export default function ClientFeatures() {
  return (
    <>
      <BotpressChatbot />
      <AccessibilityWidget />
    </>
  );
}