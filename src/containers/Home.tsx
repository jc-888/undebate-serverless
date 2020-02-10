import React, {Component} from 'react';
import HomeView from '../views/HomeView';

interface HomePageProps {}

interface HomePageState {}

export class Home extends Component<HomePageProps, HomePageState> {
  render() {
    return <HomeView />;
  }
}

export default Home;
