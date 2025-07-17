export const sizes = {
    small: '20px',
    medium: '40px',
    large: '60px',
};

export const getSpinnerStyle = (size = 'medium', color = '#1890ff') => ({
    width: sizes[size],
    height: sizes[size],
    border: `4px solid ${color}`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
});
