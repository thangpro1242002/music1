import classNames from 'classnames/bind';
import Header from '../components/Header/Header';
import styles from './DefaultLayout.module.scss';
import LeftSidebar from '../components/LeftSidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left-content')}>
                    <LeftSidebar />
                </div>
                <div className={cx('content')}>
                    <Header />
                    <div className={cx('page')}>{children}</div>
                </div>
                <div className={cx('right-content')}>{/* <RightSidebar /> */}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
