import className from 'classnames';
import { GoSync } from 'react-icons/go';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  loading,
  ...rest
}) {
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border h-8',
    {
      'opacity-80': loading,
      'border-blue-500 bg-blue-500 text-white': primary && !outline,
      'border-gray-900 bg-gray-900 text-white': secondary && !outline,
      'border-green-500 bg-green-500 text-white': success && !outline,
      'border-yellow-400 bg-yellow-400 text-white': warning && !outline,
      'border-red-500 bg-red-500 text-white': danger && !outline,
      'rounded-full': rounded,
      'bg-white ': outline,
      'bg-white text-blue-500 border-blue-500': outline && primary,
      'bg-white text-gray-900 border-gray-900': outline && secondary,
      'bg-white text-green-500 border-green-500': outline && success,
      'bg-white text-yellow-400 border-yellow-400': outline && warning,
      'bg-white text-red-500 border-red-500': outline && danger,
    }
  );

  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;
