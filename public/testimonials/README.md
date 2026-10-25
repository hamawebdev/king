# Testimonial screenshots (homepage S13)

Drop the client's WhatsApp review screenshots here (portrait JPG/PNG/WebP, ~1080×1920 or any phone
screenshot, < 300 KB each). Then in `src/pages/home/sections/Testimonials.data.ts` set the review's
`screenshot` to the file name, e.g. `screenshot: 'testimonials/thomas.jpg'` (no leading slash — it is
resolved against the deploy base path so it works under GitHub Pages). Cards without a screenshot show an
empty frame.
