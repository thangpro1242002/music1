import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import Menu, { MenuItem } from '~/Layout/components/LeftSidebar/Menu';

import Search from '../Search';
import {
    faCompactDisc,
    faChartSimple,
    faRadio,
    faMusic,
    faIcons,
    faStar,
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const [isDisplay, setIsDisplay] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-mobile')}>
                <div className={cx('menu-btn')} onClick={() => setIsDisplay(!isDisplay)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={cx('menu', isDisplay && 'display')}>
                    <Menu>
                        <MenuItem
                            onClick={() => setIsDisplay(!isDisplay)}
                            icon={<FontAwesomeIcon icon={faCompactDisc} />}
                            title="Khám Phá"
                            to={'/'}
                        />
                        <MenuItem
                            onClick={() => setIsDisplay(!isDisplay)}
                            icon={<FontAwesomeIcon icon={faChartSimple} />}
                            title="Bảng Xếp Hạng"
                            to={'/chart'}
                        />
                        <MenuItem
                            onClick={() => setIsDisplay(!isDisplay)}
                            icon={<FontAwesomeIcon icon={faRadio} />}
                            title="Radio"
                            to={'/radio'}
                        />
                        <MenuItem
                            onClick={() => setIsDisplay(!isDisplay)}
                            icon={<FontAwesomeIcon icon={faMusic} />}
                            title="Nhạc Mới"
                            to={'/newmusic'}
                        />
                        <MenuItem
                            onClick={() => setIsDisplay(!isDisplay)}
                            icon={<FontAwesomeIcon icon={faIcons} />}
                            title="Thể Loại"
                            to={'/category'}
                        />
                        <MenuItem
                            onClick={() => setIsDisplay(!isDisplay)}
                            icon={<FontAwesomeIcon icon={faStar} />}
                            title="Top 100"
                            to={'/top100'}
                        />
                    </Menu>
                </div>
            </div>
            <Search />
        </div>
    );
}

export default Header;
