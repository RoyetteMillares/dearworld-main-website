## 🛠️ Tech Stack Configuration

* **Framework:** Next.js 16.1.4 (App Router)
* **Core:** React 19.2.3
* **Styling:** Tailwind CSS
* **Components:** shadcn/ui (Radix UI primitives)
* **Icons:** Lucide React (standard) + Custom Hand-drawn SVG assets

---

## 🎨 Global Design System: Dear World

### 1. Brand Essence & Tone

* **Purpose:** Storytelling that inspires and connects. Dual-focus on Commercial (L&D) and Social Impact (Foundation).
* **Visual Tone:** High-contrast, bold, human-centric, and creative. Use hand-drawn elements to soften the minimalist Helvetica structure.
* **Logo Usage:** The Logo is located in the `public/brandings` folder. 

### 2. Color Palette (Strict Compliance)

| Token | HEX | Usage |
| --- | --- | --- |
| **Primary (Yellow)** | `#FFB300` | CTAs, Highlights, Brand accents |
| **Background/Text** | `#000000` | Primary backgrounds or primary text |
| **Contrast** | `#FFFFFF` | Secondary backgrounds or primary text |

### 3. Typography

* **Primary Typeface:** **Helvetica** (Bold, Regular, Light)
* *Usage:* All headers and body text.

* **Secondary Typeface:** **Helvetica Neue Condensed** (Bold, Black)
* *Usage:* Secondary design elements, labels, and specialized UI components.

* **Emotive Messaging:** Use custom font or SVG for the **"Brain Tattoo" handwriting style** for quotes/messages.

### 4. Component Rules (shadcn/ui Customization)

* **Buttons:** Must be sharp-edged (no `rounded-md`) or have a very specific "thick border" look in Black/Yellow.
* **Cards:** Avoid soft shadows. Use solid borders (`border-2 border-black`) or high-contrast backgrounds.
* **Hand-drawn Accents:**
    * Use `circles` (Heavy/Light) as decorative backgrounds for icons.
    * Implement `lines & scribbles` as section dividers or text underlines for emphasis.

### 5. Identity Architecture

* **Main Navigation:** Use the **Horizontal Lockup** (limited vertical space).
* **General Landing:** Use the **Stacked Lockup** (Primary Identity).
* **NGO Pages:** Must use the **Dear World Foundation** lockup; the text "Foundation" is mandatory.
* **Sub-brands (Prtrait, Loyl, Brain Tattoo):** "By Dear World" sub-text is optional based on layout density.
