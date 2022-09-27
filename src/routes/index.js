import Home from '~/pages/Home';
import Chart from '~/pages/Chart.js';
import Radio from '~/pages/Radio';
import NewMusic from '~/pages/NewMusic';
import Category from '~/pages/Category';
import Top100 from '~/pages/Top100';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/chart', component: Chart },
    { path: '/radio', component: Radio },
    { path: '/newmusic', component: NewMusic },
    {
        path: '/category',
        component: Category,
    },
    {
        path: '/top100',
        component: Top100,
    },
    {
        path: '/search/:keyword',
        component: Search,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
