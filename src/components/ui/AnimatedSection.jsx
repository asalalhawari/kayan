import React from 'react';
import PropTypes from 'prop-types';

/**
 * AnimatedSection - Fades in (and optionally out) when entering/leaving viewport.
 * @param {ReactNode} children - Section content
 * @param {boolean} fadeOut - If true, fades out when leaving viewport
 * @param {string} className - Additional classes
 * @param {object} style - Inline styles
 */
const AnimatedSection = ({ children, fadeOut = false, className = '', style = {} }) => {
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else if (fadeOut) {
          setVisible(false);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [fadeOut]);

  return (
    <section
      ref={ref}
      className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'} ${className}`}
      style={{ willChange: 'opacity, filter', ...style }}
    >
      {children}
    </section>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  fadeOut: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default AnimatedSection; 