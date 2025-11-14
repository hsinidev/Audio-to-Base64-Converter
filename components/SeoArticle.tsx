
import React, { useState } from 'react';

const ChevronDown: React.FC = () => (
    <svg className="w-5 h-5 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="w-full max-w-4xl mx-auto z-10 my-12 p-6 md:p-8 bg-slate-900/50 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 text-gray-300">
            <div className={`relative space-y-4 overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[2000px]' : 'max-h-24'}`}>
                <h2 className="text-2xl font-bold text-cyan-300">The Ultimate Guide to Audio and Base64 Conversion</h2>
                <p className="text-gray-400">
                    Ever wondered how audio files can be embedded directly into a webpage or sent in a text-based format like JSON? The answer is Base64 encoding. This guide explores the what, why, and how of converting audio to Base64, a fundamental skill for modern web developers.
                </p>
                <div className="space-y-4 text-gray-300/90">
                    <h3 className="text-xl font-semibold text-purple-300 pt-2">What is Base64 Encoding?</h3>
                    <p>
                        Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It's designed to carry data stored in binary formats across channels that only reliably support text content. By converting audio data—which is inherently binary—into a Base64 string, we can treat it like any other piece of text.
                    </p>
                    <h3 className="text-xl font-semibold text-purple-300 pt-2">Why Convert Audio to Base64?</h3>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li><strong>Data URIs</strong>: The primary use case is creating Data URIs. A Data URI (e.g., `data:audio/mp3;base64,...`) allows you to embed the entire audio file into HTML or CSS, eliminating the need for an extra HTTP request to fetch the audio file. This is great for small audio clips like UI sound effects.</li>
                        <li><strong>API Transmission</strong>: When working with APIs that expect data in JSON or XML format, you cannot send raw binary files. Encoding the audio into a Base64 string allows it to be included within a JSON payload seamlessly.</li>
                        <li><strong>No-Server Environments</strong>: For purely client-side applications, embedding small assets as Base64 can simplify deployment as there are fewer files to manage.</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-purple-300 pt-2">The Downside: Size Increase</h3>
                    <p>
                        It's important to know that Base64 encoding is not without its trade-offs. The process increases the file size by approximately 33%. For this reason, it's generally not recommended for large audio files (like songs or podcasts), as it can significantly slow down page load times. For larger files, linking to the source via a URL is far more efficient.
                    </p>

                    <h3 className="text-xl font-semibold text-purple-300 pt-2">Common Audio MIME Types</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-700 bg-black/20 rounded-lg">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Format</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">MIME Type</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                <tr><td className="px-6 py-4">MP3</td><td className="px-6 py-4 font-mono">audio/mpeg</td></tr>
                                <tr><td className="px-6 py-4">WAV</td><td className="px-6 py-4 font-mono">audio/wav</td></tr>
                                <tr><td className="px-6 py-4">OGG</td><td className="px-6 py-4 font-mono">audio/ogg</td></tr>
                                <tr><td className="px-6 py-4">AAC</td><td className="px-6 py-4 font-mono">audio/aac</td></tr>
                                <tr><td className="px-6 py-4">WebM</td><td className="px-6 py-4 font-mono">audio/webm</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-900/50 via-slate-900/50 to-transparent"></div>
                )}
            </div>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-center gap-2 mt-4 py-2 px-4 bg-white/5 hover:bg-white/10 rounded-lg font-semibold transition-colors text-cyan-300"
            >
                <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                <div className={`${isExpanded ? 'rotate-180' : ''} transition-transform`}>
                    <ChevronDown />
                </div>
            </button>
        </div>
    );
};

export default SeoArticle;
