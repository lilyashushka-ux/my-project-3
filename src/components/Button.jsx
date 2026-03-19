const Button = ({
    className = '',
    size = 'default',
    children,
}) => {
    const baseClasses =
        "rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground bg-blue-600 text-white hover:bg-blue-600/90 shadow-lg shadow-blue-600/25";

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        default: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const classes = `${sizeClasses[size]} ${baseClasses} ${className}`;

    return (
        <button className={classes}>
            {children}
        </button>
    );
};

export default Button;