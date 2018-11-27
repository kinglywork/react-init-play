import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';

import Header from './Header';
import Navigation from './Navigation';

const About = Loadable({
	loader: () => import('./About'),
	loading: Loading
});

const Contact = Loadable({
	loader: () => import('./Contact'),
	loading: Loading
});

const Home = Loadable({
	loader: () => import('./Home'),
	loading: Loading
});

export {
	Home,
	Contact,
	About,
	Header,
	Navigation
};
