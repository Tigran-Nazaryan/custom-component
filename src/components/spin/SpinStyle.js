export const sizes = {
  small: "20px",
  medium: "40px",
  large: "60px",
};

export const getSpinnerStyle = (size = "medium", color = "#1890ff") => ({
  width: sizes[size],
  height: sizes[size],
  color: color,
  animation: "spin 1s linear infinite",
});
