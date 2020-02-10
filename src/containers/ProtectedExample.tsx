import React, {Component} from 'react';
import ProtectedExampleView from '../views/ProtectedExampleView';

interface ProtectedExamplePageProps {}

interface ProtectedExamplePageState {}

export class ProtectedExample extends Component<
  ProtectedExamplePageProps,
  ProtectedExamplePageState
> {
  render() {
    return <ProtectedExampleView />;
  }
}

export default ProtectedExample;
