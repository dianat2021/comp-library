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
      className={`${buttonStyles.button} ${className}`}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;

// Accessible Description:

//If the button doesn't have visible text (e.g., it's represented by an icon), the aria-label provides the text that a screen reader will announce. For example, if you have a button with a "thumbs-up" icon, setting aria-label="Like" ensures screen readers understand its purpose.

//Clarifying Actions:

//Even if the button has visible text, the aria-label can offer additional context or a more detailed explanation. For example, a button labeled "Submit" could have aria-label="Submit your response" to give more clarity.
