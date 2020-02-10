import * as React from 'react';

type Props = {};

const ProtectedExampleView: React.FC<Props> = props => {
  return (
    <div>
      <p>This is a protected page</p>
    </div>
  );
};

export default ProtectedExampleView;
