export const Button = ({ color, onClick, children }) => {
  return (
    <button
      className={`bg-${color}-400 p-4 font-black text-black rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
