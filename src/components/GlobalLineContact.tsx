import { MessageCircle } from 'lucide-react';

export default function GlobalLineContact() {
  const lineUrl = 'https://line.me/R/ti/p/%40593cexey';

  return (
    <>
      {/* Floating Button (Visible on both mobile and desktop) */}
      <div className="fixed bottom-20 right-6 md:bottom-8 md:right-8 z-50">
        <a 
          href={lineUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#00B900] hover:bg-[#009900] text-white rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#00B900]/30"
          title="透過 LINE 聯絡我們"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </>
  );
}
