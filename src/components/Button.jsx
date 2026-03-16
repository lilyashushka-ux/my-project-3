const Button = ({
    className = '',
    size = 'default',
    children,

}) => {
    const baseClasses = "rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground bg-blue-600 text-primary-foreground hover:bg-blue-600/90 shadow-lg shadow-blue-600/25"
    return (
        <button className={`${baseClasses} ${className}`}>
      {children}
    </button>
    );
}

export default Button;