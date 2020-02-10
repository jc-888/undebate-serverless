import * as React from 'react';
import Recorder from '../components/Recorder';

type Props = {};

const HomeView: React.FC<Props> = () => {
  return (
    <div>
      <h1>This Is The Home Page</h1>
      <Recorder />
    </div>
  );
};

export default HomeView;
