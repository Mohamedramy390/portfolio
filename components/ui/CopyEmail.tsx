"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyEmailProps {
  email: string;
}

export function CopyEmail({ email }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // copy fallback failed
      }
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer group"
      title={copied ? "Copied!" : "Click to copy email"}
      id="copy-email-button"
    >
      <span className="font-mono text-sm">{email}</span>
      {copied ? (
        <Check className="w-4 h-4 text-success" />
      ) : (
        <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  );
}
