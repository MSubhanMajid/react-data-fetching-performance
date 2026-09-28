function TabButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ fontWeight: isActive ? "bold" : "normal", marginRight: "8px" }}
    >
      {label}
    </button>
  );
}

export default TabButton;
