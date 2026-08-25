import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-background shadow-card transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp sm:size-16"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
