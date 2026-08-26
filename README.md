# 📄 Paper Calculator

A cross-platform mobile application built with **React Native and Expo** that calculates the total weight of paper based on the number of sheets, paper dimensions, and paper grammage.

The application supports predefined paper sizes and formats as well as custom dimensions and grammage values.

---

## ✨ Features

* 📄 Calculate the total weight of paper sheets
* 🔢 Adjust the number of sheets
* 📐 Select from predefined paper sizes
* 📏 Customize paper length and width
* ⚖️ Select paper grammage
* ✏️ Enter custom grammage values
* 📱 Responsive mobile interface
* 🌐 Runs on Android, iOS, and the web through Expo

---

## 🧮 How It Works

The total paper weight is calculated using:

```text
Total Weight = Number of Sheets × Paper Area × Grammage
```

Where:

* **Paper Area** = Length × Width
* Length and width are converted from millimeters to meters
* **Grammage** represents the paper weight in grams per square meter (g/m²)

The application automatically recalculates the total weight whenever the sheet count, dimensions, or grammage changes.

---

## 📐 Supported Paper Sizes

The application includes predefined paper sizes such as:

* A2
* A3
* A4
* A5
* A6
* DIN Lang
* Custom size

Users can also manually adjust the paper dimensions to calculate the weight of custom-sized paper.

---

## ⚙️ Paper Formats

The application provides predefined paper format options with associated grammage values, along with a custom option that allows users to enter their own grammage.

---

## 🛠️ Tech Stack

* **React Native**
* **React**
* **Expo**
* **React Native Web**
* **React Native Elements**
* **React Native Vector Icons**
* **Expo Google Fonts**
* **JavaScript**

The project uses Expo scripts to run on Android, iOS, and the web.

---

## 📁 Project Structure

```text
paper-calculator/
│
├── assets/
│   ├── fonts/
│   └── images/
│
├── components/
│   ├── BottomSection.jsx
│   ├── ImageButton.jsx
│   ├── MiddleSection.jsx
│   ├── Navbar.jsx
│   ├── SliderRow.jsx
│   └── TopArea.jsx
│
├── constants/
│   ├── colors.js
│   ├── dimens.js
│   └── images.js
│
├── App.js
├── app.json
├── babel.config.js
├── package.json
└── README.md
```

The application is organized into reusable UI components, shared constants, assets, and a central `App.js` file that manages the calculator state and calculation logic.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm or Yarn
* Expo Go app for testing on a physical device (optional)

---

### 1. Clone the repository

```bash
git clone https://github.com/tehreemtalat7/paper-calculator.git
```

### 2. Navigate to the project

```bash
cd paper-calculator
```

### 3. Install dependencies

Using npm:

```bash
npm install
```

Or using Yarn:

```bash
yarn install
```

### 4. Start the Expo development server

```bash
npm start
```

or:

```bash
yarn start
```

---

## 📱 Running the Application

### Android

```bash
npm run android
```

### iOS

```bash
npm run ios
```

### Web

```bash
npm run web
```

These scripts are configured through Expo in the project's `package.json`.

---

## 🧠 Application Logic

The application maintains state for:

* Number of paper sheets
* Selected paper size
* Selected paper format
* Paper length
* Paper width
* Paper grammage
* Calculated total weight

Whenever one of these values changes, React recalculates the total paper weight automatically. The calculation logic is handled through React state and effects in `App.js`.

---

## 🎨 UI Components

The interface is divided into reusable components:

| Component       | Purpose                                                    |
| --------------- | ---------------------------------------------------------- |
| `Navbar`        | Displays the application header                            |
| `TopArea`       | Handles the sheet count and displays the calculated weight |
| `MiddleSection` | Allows users to select paper sizes and formats             |
| `BottomSection` | Provides controls for custom dimensions and grammage       |
| `SliderRow`     | Reusable slider control                                    |
| `ImageButton`   | Reusable image-based button                                |

This component-based structure keeps the application modular and easier to maintain.

---

## 🔮 Future Improvements

Potential improvements include:

* [ ] Add more international paper sizes
* [ ] Support additional units such as inches and pounds
* [ ] Add paper cost calculation
* [ ] Save previous calculations
* [ ] Add calculation history
* [ ] Add dark mode
* [ ] Improve accessibility
* [ ] Add unit conversion
* [ ] Upgrade to a newer Expo SDK
* [ ] Add automated tests

---

## 👩‍💻 Author

**Tehreem Talat**

GitHub: [@tehreemtalat7](https://github.com/tehreemtalat7?utm_source=chatgpt.com)

---

## 📄 License

This project is intended for educational and portfolio purposes.

---

<p align="center">
  Built with React Native and Expo 📱
</p>
