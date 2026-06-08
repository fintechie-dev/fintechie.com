import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const whatsappUrl =
    "https://wa.me/96898774277?text=Hi%20FinTechie,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#0B192B] hover:bg-[#19283b] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    >
      <MessageCircle size={28} />
    </a>
  );
}