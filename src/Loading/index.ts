import PropTypes from './props';
import _assertComponent from '../_util/assert-component2';

const Component = ({ type, color, size, style, className }: { type?: string; color?: string; size?: string; style?: string; className?: string }) => (
  <div>
    {type && typeof type === 'string' ? (
      <>
        <i class={`spin ${style || ''} spin-${color}`}>{type}</i>
      </>
    ) : null}
    {className && className.includes('loading') && (
      <div style={{ color }}>{/* ... */}</div> // Placeholder for the loading message or content
    )}
  </div>
);

_assertComponent(Component, PropTypes);