"use client";

import { useEffect, useState } from "react";

export default function ProjectPreview({ url, title }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setExpanded(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [expanded]);

  return (
    <>
      <div className="live-preview">
        <div className="live-preview-bar">
          <span /><span /><span />
          <small>{new URL(url).hostname}</small>
          <a href={url} target="_blank" rel="noreferrer">OPEN SITE ↗</a>
        </div>
        <div className="live-preview-viewport">
          <iframe src={url} title={`${title} live website preview`} loading="lazy" />
          <button type="button" className="preview-expand" onClick={() => setExpanded(true)}>
            EXPAND PREVIEW ↗
          </button>
        </div>
      </div>
      {expanded && (
        <div className="preview-modal" role="dialog" aria-modal="true" aria-label={`${title} expanded preview`} onMouseDown={(event) => {
          if (event.target === event.currentTarget) setExpanded(false);
        }}>
          <div className="preview-modal-panel">
            <div className="preview-modal-head">
              <div><strong>{title}</strong><span>LIVE WEBSITE PREVIEW</span></div>
              <div className="preview-modal-actions">
                <a href={url} target="_blank" rel="noreferrer">OPEN IN NEW TAB ↗</a>
                <button type="button" onClick={() => setExpanded(false)} aria-label="Close expanded preview">CLOSE ✕</button>
              </div>
            </div>
            <iframe src={url} title={`${title} expanded live website preview`} />
          </div>
        </div>
      )}
    </>
  );
}
