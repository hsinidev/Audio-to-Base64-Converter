
import React, { useState } from 'react';
import { ConversionMode, ModalType } from './types';
import AudioEncoder from './components/AudioEncoder';
import AudioDecoder from './components/AudioDecoder';
import Modal from './components/Modal';
import GalaxyBackground from './components/GalaxyBackground';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  const [mode, setMode] = useState<ConversionMode>(ConversionMode.ENCODE);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const getModalContent = () => {
    switch (activeModal) {
      case 'about':
        return {
          title: 'About This Tool',
          content: (
            <div className="space-y-4 text-gray-300">
              <p>This Audio to Base64 Converter is a client-side tool built with React, TypeScript, and Tailwind CSS. It empowers users to seamlessly convert audio files into Base64 data URIs and vice versa, directly in their browser.</p>
              <p>All encoding and decoding operations are performed locally on your machine, ensuring your data remains private and secure. No files are ever uploaded to a server.</p>
              <p>The beautiful, animated galaxy background provides a visually stunning experience while you work.</p>
            </div>
          ),
        };
      case 'guide':
        return {
          title: 'Quick User Guide',
          content: (
             <div className="space-y-4 text-gray-300 text-sm">
                <h3 className="text-lg font-bold text-cyan-300">Encoding</h3>
                <p>1. In the "Encode" tab, drag & drop or click to upload an audio file.</p>
                <p>2. The Base64 data will be generated. Click "Copy Base64".</p>
                <h3 className="text-lg font-bold text-cyan-300">Decoding</h3>
                <p>1. In the "Decode" tab, paste a Base64 data URI.</p>
                <p>2. Click "Decode & Preview" to listen and then download the audio.</p>
                <p className="pt-4">For a detailed explanation, please see the guide section on our main page.</p>
            </div>
          ),
        };
      case 'contact':
        return {
          title: 'Contact Us',
          content: <p className="text-gray-300">For inquiries, please reach out to hsini.web@gmail.com or visit doodax.com.</p>,
        };
      case 'privacy':
        return {
            title: 'Privacy Policy',
            content: <p className="text-gray-300">We respect your privacy. All file processing is done locally in your browser. No data or files are ever sent to our servers.</p>
        };
      case 'terms':
          return {
              title: 'Terms of Service',
              content: <p className="text-gray-300">This tool is provided "as is" without warranty of any kind. Use it at your own risk. We are not responsible for any data loss or issues that may arise from its use.</p>
          };
      case 'dmca':
        return {
            title: 'DMCA',
            content: <p className="text-gray-300">We respect intellectual property rights. As this tool operates entirely on the client-side, we do not host any user data. If you have a copyright concern, please contact the appropriate parties responsible for the data you are processing.</p>
        };
      default:
        return { title: '', content: null };
    }
  };

  const { title, content } = getModalContent();
  const navLinks: { label: string; modal: ModalType }[] = [
    { label: 'About', modal: 'about' },
    { label: 'Guide', modal: 'guide' },
    { label: 'Contact', modal: 'contact' },
    { label: 'Privacy', modal: 'privacy' },
    { label: 'Terms', modal: 'terms' },
    { label: 'DMCA', modal: 'dmca' },
  ];

  return (
    <>
      <GalaxyBackground />
      <div className="relative min-h-screen text-white flex flex-col items-center justify-start p-4 font-sans overflow-y-auto">
        
        <header className="w-full max-w-4xl mx-auto p-4 z-20">
            <nav className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">
                {navLinks.map(link => (
                    <button key={link.label} onClick={() => setActiveModal(link.modal)} className="text-gray-300 hover:text-cyan-300 transition-colors text-sm font-medium">
                        {link.label}
                    </button>
                ))}
            </nav>
        </header>

        <main className="w-full max-w-4xl mx-auto z-10 flex flex-col items-center mt-8 md:mt-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 animate-pulse">
            Audio <span className="mx-1">&harr;</span> Base64 Converter
          </h1>
          <p className="text-gray-400 mb-10 text-center text-lg">A secure, client-side tool to encode and decode audio files.</p>

          <div className="w-full bg-slate-900/50 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 overflow-hidden">
            <div className="flex border-b border-white/10">
              <button
                onClick={() => setMode(ConversionMode.ENCODE)}
                className={`flex-1 p-4 text-lg font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${mode === ConversionMode.ENCODE ? 'bg-white/10 text-cyan-300' : 'text-gray-400 hover:bg-white/5'}`}
              >
                Encode Audio to Base64
              </button>
              <button
                onClick={() => setMode(ConversionMode.DECODE)}
                className={`flex-1 p-4 text-lg font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${mode === ConversionMode.DECODE ? 'bg-white/10 text-cyan-300' : 'text-gray-400 hover:bg-white/5'}`}
              >
                Decode Base64 to Audio
              </button>
            </div>
            <div className="p-6 md:p-8">
              {mode === ConversionMode.ENCODE ? <AudioEncoder /> : <AudioDecoder />}
            </div>
          </div>
        </main>

        <SeoArticle /> 

        <footer className="w-full text-center text-gray-500 text-sm z-20 py-8">
          <p>Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline" style={{color: '#FFD700'}}>HSINI MOHAMED</a></p>
          <p className="mt-1">doodax.com | hsini.web@gmail.com</p>
        </footer>
        
        <Modal isOpen={activeModal !== null} onClose={() => setActiveModal(null)} title={title}>
            {content}
        </Modal>
      </div>
    </>
  );
};

export default App;
