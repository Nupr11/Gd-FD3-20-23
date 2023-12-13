import { useState } from "react";
import style from "./save-button.module.css";

export const ButtonSave = ({ className }) => {
  const [saving, setSaving] = useState(false);
  const handleSaving = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 2000);
  };
  return (
    <button
      key={`button-${className}`}
      className={`${className} ${saving ? style.clicked : ""}`}
      type="button"
      onClick={handleSaving}
      disabled={saving}
    >
      <span className="button-text">{saving ? "saving..." : "save"}</span>
    </button>
  );
};
