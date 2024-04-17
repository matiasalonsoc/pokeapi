const colorClasses = {
  red: "bg-red-400",
  green: "bg-green-400",
  yellow: "bg-yellow-400",
};

export const Button = ({ color, onClick, children }) => {
  return (
    <button
      className={`p-4 font-black text-black rounded ${
        colorClasses[color] || ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
