export const Button = ({ id, className, title, onClick }) => {
  return (
    <button id={id} className={className} onClick={onClick}>
      {title}
    </button>
  );
};
