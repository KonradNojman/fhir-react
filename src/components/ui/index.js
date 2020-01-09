import React from 'react';

export const Header = props => (
  <div
    style={{
      width: '100%',
      // display: 'inline-block',
      marginBottom: '10px',

      display: 'flex',
      alignItems: 'center',
    }}
  >
    {props.children}
  </div>
);

export const Title = props => (
  <h4 data-testid="title" style={{ marginRight: '10px', marginBottom: '0px' }}>
    {props.children}
  </h4>
);
export const Badge = props => (
  <span data-testid={props['data-testid']} className="badge badge-secondary">
    {props.children}
  </span>
);
export const BadgeSecoundary = props => (
  <span data-testid={props['data-testid']} className="badge badge-light">
    {props.children}
  </span>
);
export const Body = props => <div>{props.children}</div>;
export const Value = props => (
  <div>
    <label
      className="text-uppercase text-muted font-weight-bold"
      style={{ marginRight: '10px' }}
    >
      {props.label}
    </label>
    <div style={{ display: 'inline-block' }} data-testid={props['data-testid']}>
      {props.children}
    </div>
  </div>
);