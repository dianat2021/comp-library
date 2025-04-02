import buttonStyles from "./Button.module.css";

const Button = ({
  children = "Click",
  onClick,
  className,
  disabled = false,
  ariaLabel,
}) => {
  return (
    <button
      className={`${className} ${buttonStyles.button} `}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;

// Since CSS Modules scope the styles to the component where they’re defined and imported (like Counter),
//  the Button component can use those styles indirectly by applying the className string, without needing
// direct access to the CSS file.

// let me see if i got it clearly. Although we say css modules make the classes scoped,
// it means it makes unique class names but these unique classnames are not in fact scoped but available globally in the DOM,
//  the thing is CSS module prevents the same classname to be produced twice?
