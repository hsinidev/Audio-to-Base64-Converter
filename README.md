
# 🎙️ Audio ↔ Base64 Converter

<p align="center">
  <strong>A modern, secure, client-side tool for encoding and decoding audio files directly in your browser.</strong>
</p>

<p align="center">
  <a href="#-live-demo"><strong>Live Demo</strong></a> ·
  <a href="#-how-it-works"><strong>How It Works</strong></a> ·
  <a href="#-getting-started"><strong>Run Locally</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT">
</p>

<!-- Optional: Add a screenshot of your application here -->
<!-- <p align="center">
  <img src="path/to/screenshot.png" alt="Application Screenshot" width="700px">
</p> -->

This web application provides a seamless, secure, and private way to convert audio files (like MP3, WAV, etc.) into Base64 data URIs and decode them back into playable/downloadable audio. Built with React, TypeScript, and Tailwind CSS, it leverages the power of browser APIs to ensure that **no data ever leaves your machine**.

## ✨ Core Features

-   **🔒 100% Client-Side**: All processing happens in your browser. No server uploads mean your files remain completely private.
-   **🔄 Bidirectional Conversion**:
    -   **Encode**: Convert audio files into a text-based Base64 string.
    -   **Decode**: Transform a Base64 data URI back into an audio file.
-   **🖱️ Drag & Drop Interface**: A user-friendly, modern UI with drag-and-drop support for easy file handling.
-   **▶️ Instant Audio Preview**: Listen to decoded audio directly within the app before downloading.
-   **📋 One-Click Copy**: Easily copy the generated Base64 string to your clipboard.
-   **📱 Fully Responsive**: A clean and consistent experience on desktops, tablets, and mobile devices.
-   **🌌 Immersive Design**: Features a beautiful, animated galaxy background for a visually pleasing experience.

## 🛠️ Technologies & APIs

This project is a showcase of modern frontend technologies and browser capabilities:

-   **Framework**: [React](https://react.dev/) (with TypeScript)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Core Logic**: Web APIs
    -   `FileReader API`: To read local audio files and trigger the Base64 encoding process (`readAsDataURL`).
    -   `Blob API`: To construct an in-memory representation of the audio file from the decoded Base64 data.
    -   `URL.createObjectURL`: To create a temporary, playable URL for the generated audio blob.
    -   `Clipboard API`: For the "Copy to Clipboard" functionality.

## 💡 How It Works

### Encoding Process (Audio → Base64)

1.  The user selects an audio file via the file input or by dragging and dropping.
2.  A `FileReader` instance is created.
3.  The `reader.readAsDataURL(file)` method is called. This reads the binary audio file and converts it into a Base64-encoded data URI string (e.g., `data:audio/mp3;base64,UklGRi...`).
4.  The result is displayed in a textarea, ready to be copied.

### Decoding Process (Base64 → Audio)

1.  The user pastes a full data URI into the input textarea.
2.  The string is split at the comma (`,`) to separate the metadata header from the Base64 data.
3.  The JavaScript function `atob()` is used to decode the Base64 data back into its raw binary string representation.
4.  This binary data is converted into a `Uint8Array`.
5.  A new `Blob` is created from the `Uint8Array` and the MIME type extracted from the data URI header.
6.  `URL.createObjectURL(blob)` generates a temporary local URL for this blob.
7.  This URL is set as the `src` for an `<audio>` element, allowing for immediate playback and download.

## ⚙️ Getting Started (For Developers)

Want to run this project locally or contribute? Follow these steps:

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16 or higher recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/audio-base64-converter.git
    cd audio-base64-converter
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run start
    # or
    yarn start
    ```

    The application should now be running on `http://localhost:3000`.

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features, improvements, or bug fixes, please feel free to:

1.  Fork the repository.
2.  Create a new feature branch (`git checkout -b feature/your-awesome-feature`).
3.  Make your changes and commit them (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/your-awesome-feature`).
5.  Open a Pull Request.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## ✍️ Author

**HSINI MOHAMED**

-   **GitHub**: [@hsinidev](https://github.com/hsinidev)
-   **Email**: hsini.web@gmail.com
-   **Website**: doodax.com
