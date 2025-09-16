import React from "react";

// PrivacyPolicy.jsx
// A simplified, attractive Privacy Policy page with good spacing
// Uses Tailwind CSS for styling.

export default function PrivacyPolicy({ siteName = "Genify", year = 2025, contactEmail = "privacy@genify.ai" }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-md leading-relaxed space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last updated: January 1, {year}</p>
      </header>

      <section className="space-y-6 text-gray-700">
        <p>
          Welcome to <strong>{siteName}</strong>. Your privacy is important to us. This page explains how we collect,
          use, and protect your personal information when you use our services.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Personal details you provide (name, email, account info).</li>
            <li>Usage data such as pages visited, browser type, and device details.</li>
            <li>Cookies for login, preferences, and analytics.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">How We Use Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide and improve our services.</li>
            <li>To communicate important updates and support messages.</li>
            <li>To protect against fraud and security risks.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Sharing Information</h2>
          <p>
            We only share your data with trusted service providers (like hosting, payment, or analytics) and when
            legally required.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your data anytime. Reach us at
            <a className="text-blue-600 underline ml-1" href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>
            For any privacy concerns or questions, email us at
            <a className="text-blue-600 underline ml-1" href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </div>
      </section>

      <footer className="pt-6 border-t text-center space-y-1">
        <p className="text-sm">Copyright © {year} {siteName}. All Rights Reserved.</p>
        <p className="text-sm">Developed by Priyatam</p>
      </footer>
    </div>
  );
}