# Adepu Saiteja — Professional Portfolio

React portfolio for Adepu Saiteja — Java Full Stack Developer | AI/ML Engineer.

## Stack
- React
- Framer Motion
- React Icons
- CSS
- Vercel deployment
- EmailJS REST API for the contact form

## Run locally

```bash
npm install
npm start
```

## Production build

```bash
npm run build
```

## Contact form setup

The contact form uses EmailJS without exposing an email password in the browser.

1. Create an EmailJS account and configure an email service.
2. Create an email template using the fields `from_name`, `from_email`, `message`, and `to_email`.
3. Copy `.env.example` to `.env`.
4. Add your EmailJS Service ID, Template ID and Public Key.
5. Restart the development server.
6. For Vercel, add the same three variables under Project Settings → Environment Variables and redeploy.

Do not commit `.env` to GitHub.

## Resume

The current resume is stored at `public/resume.pdf`. Replace that file whenever the resume is updated.

## Deployment

This is a Create React App project and can be deployed to Vercel. Use the default build command `npm run build` and output directory `build`.
