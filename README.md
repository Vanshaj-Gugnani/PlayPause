# PlayPause Chrome Extension 🎬

**PlayPause** is a simple yet powerful Chrome extension that pauses videos when the tab is changed, goes out of scope, or the application focus is switched. Never miss a moment of your favorite videos again!

---

## ✨ Features

- **Automatic Video Pause**: Automatically pauses any playing video when you switch tabs or applications.
- **Seamless Integration**: Works across all major video platforms.
- **Lightweight & Fast**: Minimal impact on your browser's performance.
- **User-Friendly**: No additional setup required—just install and enjoy!

---

## 🚀 Installation Guide

### Step 1: Clone or Download the Repository

1. Go to the [PlayPause GitHub repository](https://github.com/Vanshaj-Gugnani/PlayPause).
2. Click the **Code** button and select **Download ZIP**, or use the following command to clone the repository:
   ```bash
   git clone https://github.com/vanshaj-gugnani/PlayPause.git
   ```

### Step 2: Open Chrome Extensions Settings

1. Open your Chrome browser.
2. Navigate to `chrome://extensions/` in the address bar.
3. Enable **Developer Mode** using the toggle in the top-right corner.

### Step 3: Load the Extension

1. Click on the **Load unpacked** button.
2. Select the folder where you downloaded or cloned the **PlayPause** repository.
3. The extension will now appear in your extensions list.

### Step 4: Pin the Extension (Optional)

1. Click on the puzzle piece icon in the top-right corner of Chrome.
2. Pin the **PlayPause** extension for quick access.

---

## 💻 Usage

1. Open any video on YouTube.
2. Play the video.
3. Switch to another tab or application—the video will automatically pause.
4. Return to the tab, and the video is ready to resume.

---

## 🛠️ Development

### Prerequisites

- [Node.js](https://nodejs.org/) (optional, for advanced development)
- [Git](https://git-scm.com/) (optional, for cloning the repository)

### File Structure

- `manifest.json`: Defines the extension's metadata and permissions.
- `background.js`: Handles tab and application focus detection.
- `content.js`: Injected into web pages to control video playback.
- `icons/`: Contains extension icons.

### Build & Test

1. Modify the files as needed.
2. Reload the extension in `chrome://extensions/` after making changes.

---



## 🖼️ Screenshots

![PlayPause in Action](./image.png)

---


Enjoy a more convenient video-watching experience with PlayPause! 🚀
