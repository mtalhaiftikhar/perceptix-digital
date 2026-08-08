import useInView from '../hooks/useInView';

/**
 * Animate — wraps any element with a smooth entrance animation.
 *
 * Props:
 *  variant  : 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'scale' | 'scale-up'
 *  delay    : 0–6 (maps to 0.08s steps)
 *  duration : 'fast' (0.35s) | 'normal' (0.55s, default) | 'slow' (0.75s)
 *  className: extra classes to forward to wrapper <div>
 *  tag      : HTML tag to render (default 'div')
 *  threshold: IntersectionObserver threshold (default 0.12)
 */
export default function Animate({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 'normal',
  className = '',
  tag: Tag = 'div',
  threshold = 0.12,
}) {
  const [ref, inView] = useInView(threshold, '0px 0px -50px 0px', true);

  const durationMap = { fast: '0.35s', normal: '0.55s', slow: '0.75s' };

  return (
    <Tag
      ref={ref}
      className={`anim anim-${variant}${delay ? ` anim-delay-${delay}` : ''}${inView ? ' in-view' : ''} ${className}`}
      style={{ transitionDuration: durationMap[duration] || '0.55s' }}
    >
      {children}
    </Tag>
  );
}
