export const AddButton = ({ className, text, onAdd }) => {
  return (
    <button
      key={`button-${className}`}
      className={className}
      type="button"
      onClick={onAdd}
    >
      <span className="button-text">{text}</span>
    </button>
  );
};
