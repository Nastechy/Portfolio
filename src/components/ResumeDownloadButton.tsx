"use client";

import { Download } from "lucide-react";

const ResumeDownloadButton = () => {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-md border border-primary/60 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20 sm:text-sm"
      aria-label="Download resume"
      title="Download resume"
    >
      <Download className="h-3.5 w-3.5" />
      <span>Download</span>
    </button>
  );
};

export default ResumeDownloadButton;
