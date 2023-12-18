import styles from "./save-button.module.css";
import { useState } from "react";

export const ButtonSave = ({ className, classNameActive, save }) => {
  const [saving, setSaving] = useState(false);
  const handleSaving = () => {
    setSaving(true);
    save();
    setTimeout(() => setSaving(false), 2000);
  };
  return (
    <button
      key={`button-${className}`}
      className={`${className} ${saving ? classNameActive : ""}`}
      type="button"
      onClick={handleSaving}
      disabled={saving}
    >
      <span className={styles.buttonText}>{saving ? "Saving..." : "Save"}</span>
    </button>
  );
};
