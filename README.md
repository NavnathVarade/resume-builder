# 🧾 Resume Builder – Instant Resume Creator

A sleek, modern CV builder built with **React + TypeScript**, offering real-time preview, section-wise editing, and instant export options. Whether you're a student or a professional, this tool helps you craft your resume quickly and efficiently.

---

## 🚀 Features

- 📝 **Live Preview** – See updates instantly as you edit  
- 🔧 **Modular Editing** – Fill in details section by section: personal info, summary, skills, education, experience, and more  
- ⚡ **Test Autofill** – Instantly populate with sample data  
- 📤 **Export as PDF** or **Copy as Text**  
- 💡 **User-Friendly UI** – Clean, minimal, and responsive  
- ⚙️ **Tech Stack** – Built with React, TypeScript, Context API, and Vite  

---

## 🧩 Tech Stack

- ⚛️ **React** with functional components and hooks  
- 🟦 **TypeScript** for type safety and scalability  
- 🌐 **Context API** for global state management  
- ⚡ **Vite** for lightning-fast dev experience  
- ✨ **Lucide Icons** for elegant SVG icons  

---

## 📁 Folder Structure

```

src/
├── components/
│   ├── form/
│   │   ├── PersonalInfoForm.tsx
│   │   ├── SummaryForm.tsx
│   │   ├── SkillsForm.tsx
│   │   ├── EducationForm.tsx
│   │   ├── ExperienceForm.tsx
│   │   ├── ProjectsForm.tsx
│   │   ├── LinksForm.tsx
│   │   ├── CertificationsForm.tsx
│   │   ├── LanguagesForm.tsx
│   │   └── AwardsForm.tsx
│   ├── preview/
│   │   └── CVPreview\.tsx
│   ├── CVCreater.tsx
│   └── CVForm.tsx
│
├── context/
│   └── CVContext.tsx
│
├── types/
│   └── CVTypes.ts
│
├── utils/
│   ├── initialData.ts
│   └── pdfUtils.ts
│
├── App.tsx
└── main.tsx

````

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/NavnathVarade/resume-builder.git
cd resume-builder
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

---

## 🧪 Quick Test Features

* 🧙‍♂️ Click **"Test Autofill"** to auto-populate sample content
* ✍️ Edit fields in each section with immediate preview
* 🖨️ Export your resume using **Print to PDF**
* 📋 Copy your resume as plain text with one click

---

## 📤 Export Options

* 🖨️ **Download as PDF** – Uses browser’s native print/export feature
* 📋 **Copy as Text** – Copies preview content to clipboard

---

## 🙌 Contributing

Contributions are welcome! You can:

* 🚀 Improve UI/UX
* 🌈 Add features (themes, templates, export styles, etc.)
* 🐛 Fix bugs or optimize components

Feel free to open an issue or submit a pull request.

---

## 📄 License

MIT License
© 2025 [Navnath Varade](https://github.com/NavnathVarade)

