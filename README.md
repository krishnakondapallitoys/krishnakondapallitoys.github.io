# Krishna Toys – Website

Website for **Krishna Toys**, a shop selling handmade Kondapalli wooden toys in Kondapalli, Andhra Pradesh.

**Live website:** https://krishnakondapallitoys.github.io

**GitHub repository:** https://github.com/krishnakondapallitoys/krishnakondapallitoys.github.io

This guide explains, step by step, how to add toys and photos, change settings, build the website and publish it.

---

## Contents

1. [What the website has](#1-what-the-website-has)
2. [Important files](#2-important-files)
3. [One-time setup on a new computer](#3-one-time-setup-on-a-new-computer)
4. [How to add a new toy and its photos](#4-how-to-add-a-new-toy-and-its-photos)
5. [How to change settings (WhatsApp, Google Analytics)](#5-how-to-change-settings-whatsapp-google-analytics)
6. [How to change shop address, phone or timings](#6-how-to-change-shop-address-phone-or-timings)
7. [How to see the website on your computer before publishing](#7-how-to-see-the-website-on-your-computer-before-publishing)
8. [How to build the website](#8-how-to-build-the-website)
9. [How to push to GitHub and make it live](#9-how-to-push-to-github-and-make-it-live)
10. [Quick checklist for every update](#10-quick-checklist-for-every-update)
11. [Google Analytics – how many people visit](#11-google-analytics--how-many-people-visit)
12. [Problems and solutions](#12-problems-and-solutions)
13. [History of changes](#13-history-of-changes)

---

## 1. What the website has

| Section | What it shows |
|---|---|
| **Top menu** | Home, Collection, About, Visit Us. On phones, a ☰ button opens the menu. |
| **Home** | "The Art of Kondapalli" banner with the dancing doll photo. |
| **Collection** | All toys as cards, with a **search box** and **category buttons** (All, Divine, Dolls, Animals, ...). |
| **Toy popup** | Opens when a toy is clicked. Shows the photo (or several photos with arrows, thumbnails and swipe), an **Enquire on WhatsApp** button and a **Share with family** link. Close with ×, a click outside or the **Esc** key. |
| **About** | History of Kondapalli toys, Tella Poniki chekka wood, and how each toy is made. |
| **Visit Our Shop** | Address, shop timings, phone numbers, Google Map, **Get Directions** and **Call Now** buttons. |
| **Footer** | Address, phone numbers, WhatsApp link and timings. |
| **WhatsApp button** | Green round button at the bottom right of every page. |

Contact details used on the site:

- **Address:** D.No 5-44, Khilla Road, Bank Center, Kondapalli, NTR District, Andhra Pradesh - 521228
- **Phone:** +91 96520 20133, +91 98663 72893
- **WhatsApp:** +91 96520 20133
- **Timings:** 9:00 AM – 9:00 PM

The website is built with **Angular** and hosted free on **GitHub Pages**.

---

## 2. Important files

These are the only files you normally need to change:

| File | What to change there |
|---|---|
| `src/app/toys.ts` | **The list of toys**: names, categories, photos, prices. |
| `public/img/` | **The folder for toy photos.** |
| `src/app/site-config.ts` | **Settings**: WhatsApp number, Google Analytics ID, website URL. |
| `src/app/app.component.html` | Page text: About section, shop address, phone numbers, timings, footer. |
| `src/index.html` | Title and description shown in Google and in WhatsApp/Facebook link previews. |

Other folders:

| Folder / file | What it is |
|---|---|
| `docs/` | **The built website** that GitHub Pages shows. It is created by the build command (step 8). **Never edit files in `docs/` by hand.** |
| `src/app/app.component.ts` | Website logic (search, filters, popup, gallery, WhatsApp links, analytics). |
| `src/app/app.component.css` | Website design (colours, sizes, layout). |
| `angular.json` | Build settings. The build output folder is set to `docs/`. |

---

## 3. One-time setup on a new computer

Do this only once per computer.

**Step 1 – Install the tools**

1. **Node.js** (LTS version): download from https://nodejs.org and install with the default options.
2. **Git**: download from https://git-scm.com/download/win and install with the default options.
3. **VS Code** (editor, optional but recommended): https://code.visualstudio.com

**Step 2 – Download the project**

Open **PowerShell** and run:

```powershell
cd $HOME\Desktop
git clone https://github.com/krishnakondapallitoys/krishnakondapallitoys.github.io.git krishna-toys
cd krishna-toys
```

**Step 3 – Install the project packages**

```powershell
npm install
```

This takes a few minutes and creates a `node_modules` folder. You only need to run it again if `package.json` changes.

**Step 4 – Set your Git name and email** (shown on your changes)

```powershell
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

---

## 4. How to add a new toy and its photos

**Step 1 – Prepare the photos**

- Take clear photos on a plain background with good light.
- Give each photo a **simple file name**: lowercase letters, numbers and dashes only, **no spaces**.
  - Good: `ganesha.jpeg`, `ganesha-side.jpeg`, `village-well-set.jpg`
  - Bad: `WhatsApp Image 2026-09-25 at 2.40.22 PM (1).jpeg`
- **Keep photos small (under about 300 KB each).** Phone photos are often 3–5 MB, which makes the site slow on mobile data. To make them smaller:
  - Open https://squoosh.app in the browser, drop the photo in, set the width to **1200** pixels and the quality to about **75**, then download it, **or**
  - In Windows, open the photo in **Photos** → **⋯** → **Resize image** → choose **M** (medium) and save.

**Step 2 – Copy the photos into the image folder**

Copy the photos into:

```
public\img\
```

(Full path on this computer: `C:\Users\user167\Desktop\Toys\krishna-toys\public\img\`)

**Step 3 – Add the toy to the list**

Open `src/app/toys.ts`. At the end of the list, **before the last `];`**, add one line for the new toy:

```ts
  { id: 19, name: 'Lord Ganesha', category: 'Divine', images: ['img/ganesha.jpeg'], price: '₹700' },
```

Rules:

- **`id`**: the next number after the last toy (if the last toy is 18, use 19, then 20, ...). Each toy needs a different id.
- **`name`**: the toy name, inside quotes `'...'`.
- **`category`**: the category, inside quotes. Use the **same spelling** as other toys (for example `'Divine'`, `'Animals'`, `'Village Life'`, `'Sets'`) so they appear under the same button. A new category name automatically gets its own button.
- **`images`**: the photo path(s), starting with `img/`. The **first photo** is shown on the card.
- **`price`**: the price, inside quotes. (Prices are saved but not shown on the website at the moment.)
- Every line ends with a **comma** `,`.

**Several photos for one toy** – list them in the same line, separated by commas:

```ts
  { id: 20, name: 'Ambari Elephant (Large)', category: 'Animals', images: ['img/ambari-large-front.jpeg', 'img/ambari-large-side.jpeg', 'img/ambari-large-back.jpeg'], price: '₹1500' },
```

The card then shows "3 photos", and the popup shows arrows and thumbnails.

**To remove a toy:** delete its line from `src/app/toys.ts` (you can also delete its photo from `public/img/`).

**To rename a toy or change its category:** edit the text inside the quotes on its line.

**Step 4 – Build and publish**

Follow [step 8](#8-how-to-build-the-website) and [step 9](#9-how-to-push-to-github-and-make-it-live).

---

## 5. How to change settings (WhatsApp, Google Analytics)

Open `src/app/site-config.ts`:

```ts
export const WHATSAPP_NUMBER = '919652020133';
export const GA_MEASUREMENT_ID = '';
export const SITE_URL = 'https://krishnakondapallitoys.github.io/';
```

| Setting | How to fill it |
|---|---|
| `WHATSAPP_NUMBER` | Country code + number, **digits only**: no `+`, no spaces. Example: `+91 96520 20133` → `'919652020133'`. All WhatsApp buttons use this number. |
| `GA_MEASUREMENT_ID` | Your Google Analytics ID, starting with **G-**, e.g. `'G-ABC123XYZ9'`. Leave it as `''` to keep analytics off. See [section 11](#11-google-analytics--how-many-people-visit). |
| `SITE_URL` | The website address, used in "Share with family" links. Change it only if the website address changes. |

Then build and publish (steps 8 and 9).

---

## 6. How to change shop address, phone or timings

These are written in `src/app/app.component.html`. Use **Ctrl+F** in VS Code to find the text you want to change.

| What | Search for | Notes |
|---|---|---|
| Address | `Khilla Road` | It appears in the **Visit Our Shop** section, in the **footer**, and inside the **Google Map** and **Get Directions** links. In the links, spaces are written as `%20` and commas as `%2C`. Change all of them. |
| Phone numbers | `96520` or `98663` | Appears in **Visit Our Shop** and the **footer**. Each number is written twice: in `href="tel:+91..."` (no spaces) and as the visible text. The **Call Now** button also uses `tel:+919652020133`. |
| Timings | `9:00 AM` | Appears in **Visit Our Shop** and the **footer**. |
| About text | `About Kondapalli Toys` | The history and toy-making text. |

The **title and description** shown in Google search and in link previews are in `src/index.html` (`<title>` and `<meta name="description">`).

Then build and publish (steps 8 and 9).

---

## 7. How to see the website on your computer before publishing

In **PowerShell**, inside the project folder:

```powershell
cd C:\Users\user167\Desktop\Toys\krishna-toys
npm start
```

Wait until it says `Local: http://localhost:4200/`, then open **http://localhost:4200** in the browser. The page reloads by itself when you save changes.

Press **Ctrl+C** in PowerShell to stop it.

This is only a preview on your computer. Customers do not see it until you build and push (steps 8 and 9).

---

## 8. How to build the website

The build turns the code into the final website files inside the `docs/` folder.

> **⚠️ Important: always run the build in PowerShell (or Command Prompt), NOT in Git Bash.**
> Git Bash changes `--base-href /` into a Windows folder path, and the live website becomes a **blank page**.

**Step 1 – Open PowerShell in the project folder**

```powershell
cd C:\Users\user167\Desktop\Toys\krishna-toys
```

(In VS Code: **Terminal → New Terminal**, and make sure the terminal type is **powershell**.)

**Step 2 – Run the build**

```powershell
npx ng build --base-href /
```

Wait until you see:

```
Application bundle generation complete.
Output location: C:\Users\user167\Desktop\Toys\krishna-toys\docs
```

If you see **red ERROR** lines instead, there is a mistake in a file you changed (often a missing quote `'` or comma `,` in `toys.ts`). Fix it and run the build again.

**Step 3 – Check the base path**

Open `docs/index.html` and check that it contains exactly:

```html
<base href="/">
```

If it shows something like `<base href="C:/Users/...">`, the build was run in Git Bash. Run it again in PowerShell.

---

## 9. How to push to GitHub and make it live

**Step 1 – See what changed**

```powershell
git status
```

Changed files are listed in red.

**Step 2 – Add all changes**

```powershell
git add -A
```

**Step 3 – Save the changes with a short message**

```powershell
git commit -m "Add Lord Ganesha toy"
```

Write what you changed inside the quotes.

**Step 4 – Upload to GitHub**

```powershell
git push origin main
```

If a GitHub login window opens, sign in with the **krishnakondapallitoys** account (or an account that has access; see [problems](#12-problems-and-solutions)).

**Step 5 – Wait and check the live website**

1. Wait **1–2 minutes**. GitHub Pages updates the website automatically.
   You can watch the progress at https://github.com/krishnakondapallitoys/krishnakondapallitoys.github.io/actions. A green ✓ means it is live.
2. Open **https://krishnakondapallitoys.github.io**
3. Press **Ctrl+F5** to reload without the old cached copy.
4. Check your change, also on a phone.

### GitHub Pages settings (already done – for reference only)

In the GitHub repository → **Settings** → **Pages**:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/docs`

Because the repository is named `krishnakondapallitoys.github.io`, the website is at the main address https://krishnakondapallitoys.github.io (no extra folder name), so the build uses `--base-href /`.

---

## 10. Quick checklist for every update

```
1. Make the change            (toys.ts, photos in public\img\, site-config.ts, or app.component.html)
2. Preview (optional)         npm start   →  http://localhost:4200   →  Ctrl+C to stop
3. Build  (PowerShell only!)  npx ng build --base-href /
4. Check                      docs\index.html contains  <base href="/">
5. Save                       git add -A
                              git commit -m "What I changed"
6. Publish                    git push origin main
7. Check live (after 1–2 min) https://krishnakondapallitoys.github.io   →  Ctrl+F5
```

---

## 11. Google Analytics – how many people visit

The website is ready for Google Analytics. It is **off** until the Measurement ID is added.

### Turn it on

1. Go to https://analytics.google.com and sign in.
2. Click **⚙️ Admin** (bottom left) → **Data collection and modification** → **Data streams**.
3. Click the **Web** tab, then the stream **krishnakondapallitoys.github.io** (with the 🌐 globe icon, **not** the Android one).
4. At the top right, copy the **MEASUREMENT ID**. It starts with **G-**.
5. Open `src/app/site-config.ts` and paste it:
   ```ts
   export const GA_MEASUREMENT_ID = 'G-ABC123XYZ9';
   ```
6. Build and publish (steps 8 and 9).
7. Open the website on your phone, then in Google Analytics go to **Reports → Realtime**. You should see 1 visitor within a minute.

### What you can see

| Where in Google Analytics | What it shows |
|---|---|
| **Home**, **Reports → Realtime** | Visitors now, and per day / week / month |
| **Reports → Engagement → Events → `toy_view`** | Which toy photos people open |
| **Reports → Engagement → Events → `contact_click`** | Clicks on WhatsApp, Call Now and Get Directions (`method` = whatsapp / call / directions) |
| **Reports → Engagement → Events → `share_click`** | How many toys were shared with family |
| **Reports → Engagement → Events → `filter_category`** | Which category buttons people use |
| **Reports → User attributes → Demographic details** | Visitors' city and country |

To see **toy names** in reports: **Admin → Custom definitions → Create custom dimension** → Dimension name `Toy name`, Scope **Event**, Event parameter `toy_name` → **Save**. Names appear in reports from then on (allow 24–48 hours).

---

## 12. Problems and solutions

**The live website is a blank dark page**
- The build was probably run in **Git Bash**. Open `docs/index.html`: if `<base href>` is not exactly `"/"`, run the build again in **PowerShell** (step 8), then push (step 9).

**`git push` says `Permission ... denied to <name>` or `403`**
- Git is signed in with a GitHub account that has no access to this repository. Fix it in one of two ways:
  - **Use the owner account:** open Windows **Credential Manager** → **Windows Credentials** → remove `git:https://github.com` → run `git push origin main` again and sign in as **krishnakondapallitoys**.
  - **Give the other account access (permanent):** sign in to GitHub as **krishnakondapallitoys** → repository **Settings** → **Collaborators** → **Add people** → enter the other GitHub username → that person accepts the invitation email.

**`git push` says `rejected` / `fetch first`**
- Someone else pushed changes first. Run:
  ```powershell
  git pull origin main
  ```
  Then build again (step 8), `git add -A`, `git commit -m "Rebuild"`, `git push origin main`.

**The website still shows the old version**
- Wait 2 minutes, then press **Ctrl+F5**. On a phone, close the tab and open the link again.
- Check https://github.com/krishnakondapallitoys/krishnakondapallitoys.github.io/actions for a red ✗ (failed deployment).

**A toy photo does not appear**
- The file name in `toys.ts` must match the file in `public/img/` **exactly**, including capital letters and the extension (`.jpeg` vs `.jpg`). The path must start with `img/`.

**The build shows `ERROR` after editing `toys.ts`**
- Check the line you added: every text value needs quotes on both sides (`'...'`), the line needs `{ ... }` and a comma at the end, and `images` needs square brackets `[ ... ]`.

**`npx` or `npm` is not recognized**
- Node.js is not installed. Install it (step 3) and open a new PowerShell window.

**`ng` is not recognized / build cannot find packages**
- Run `npm install` in the project folder first.

**WhatsApp share preview still shows the old title or photo**
- WhatsApp caches link previews. It updates by itself after some time (sometimes days).

---

## 13. History of changes

| Change | Details |
|---|---|
| **Toy collection** | 18 Kondapalli toys with photos and categories. |
| **Toy popup** | Click a toy to see a large photo. Closes with ×, a click outside or **Esc**. |
| **WhatsApp enquiry** | "Enquire on WhatsApp" button in each toy popup (message names the toy), plus a floating WhatsApp button. Number: +91 96520 20133. |
| **Fixed blank website** | The build had been run in Git Bash, which broke the base path. Builds are now run in PowerShell. |
| **Shop location** | "Visit Our Shop" section with address, embedded Google Map and **Get Directions** button. Address corrected to **Khilla Road**. |
| **Mobile menu** | ☰ menu button on phones (menu links were hidden before). |
| **Google and sharing** | Better page title, description and link-preview image for Google, WhatsApp and Facebook. |
| **About section** | History of Kondapalli toys, Tella Poniki chekka wood, and the 4 steps of toy making. |
| **Phone and timings** | Shop timings 9:00 AM – 9:00 PM, two phone numbers, and a **Call Now** button. |
| **Menu links fixed** | Menu links scroll smoothly to each section and stop below the top bar. Links like `/#location` open at the right section. |
| **Search and categories** | Search box and category filter buttons above the collection. |
| **Photo gallery** | A toy can have several photos: arrows, thumbnails, swipe on phones, and ← → keys. |
| **Share with family** | Share a toy on WhatsApp. The link opens that toy directly (`/#toy-5`). |
| **Footer contact** | Address, phones, WhatsApp and timings at the bottom of every page. |
| **Easy settings** | Toy list in `src/app/toys.ts`, settings in `src/app/site-config.ts`. |
| **Google Analytics (ready)** | Visitor and click tracking, switched on by adding the G- ID in `site-config.ts`. |

### Still to do

- [ ] Add the Google Analytics Measurement ID in `src/app/site-config.ts`.
- [ ] Rename the toy **"Authentic Set"** and its photo file `WhatsApp Image 2026-09-25 at 2.40.22 PM (1).jpeg`.
- [ ] Decide whether to show prices on the website.
- [ ] Add more toys and photos (section 4).
- [ ] Check that the Google Map pin is exactly on the shop. If not, replace the map links with the shop's Google Maps share link.
