"use client"
export const WhatsappButton = () => {
    const sendMessage = () => {
        const phoneNumber = '918744048768'; // Replace with your phone number
        const message = 'Hello, I have a question.';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      };
    
      return (
        <div className="fixed bottom-10 right-10 z-50">
      <button onClick={sendMessage} className="bg-green-500 hover:bg-green-700 text-white w-6 h-6 font-bold py-2 px-4  rounded-full">
        {/* <img src="whatsapp-logo.png" alt="WhatsApp Logo" className="w-6 h-6 " /> */}
        
      </button>
    </div>
      );
    };
