# A Fund for Veterinary Care Website

A simple, mobile-friendly static website for A Fund for Veterinary Care, a 501(c)(3) veterinary nonprofit based in North Potomac, Maryland.

## Files

- `index.html` — website content and structure
- `styles.css` — all visual styling and responsive design
- `script.js` — mobile menu behavior, donation amount buttons, and payment option guidance

## Donation form

The donation section now includes:

- Quick amount buttons: `$50`, `$250`, `$500`, and `Any amount`
- Custom amount input when “Any amount” is selected
- Donor contact information
- Payment options:
  - Electronic
  - By check
  - By card

Important: Do not collect credit card numbers directly on a static GitHub Pages website. For card payments, link to a secure processor such as Stripe, PayPal, Givebutter, Donorbox, Zeffy, or another compliant donation platform.

## Customize before publishing

Search for these placeholders and replace them:

- `https://formspree.io/f/YOUR_DONATION_FORM_ID`
- `https://formspree.io/f/YOUR_APPOINTMENT_FORM_ID`
- `[Insert phone number]`
- `[Insert email address]`
- `[Insert mailing address]`
- Image placeholder text and background images

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, and `script.js` to the main/root folder of the repo.
3. Go to **Settings** → **Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Click **Save**.
6. Wait a minute or two, then GitHub will show your live website URL.
