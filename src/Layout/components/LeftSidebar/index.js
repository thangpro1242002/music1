import classNames from 'classnames/bind';
import styles from './LeftSidebar.module.scss';
import images from '~/assets';

import { Link } from 'react-router-dom';
import Menu from './Menu';
import { MenuItem } from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc, faChartSimple, faRadio, faMusic, faIcons, faStar } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function LeftSidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Link className={cx('logo')} to="/">
                <img src={images.logo} alt="logo" className={cx('logo-img')} />
            </Link>
            <Menu>
                <MenuItem icon={<FontAwesomeIcon icon={faCompactDisc} />} title="Khám Phá" to={'/home'} />
                <MenuItem icon={<FontAwesomeIcon icon={faChartSimple} />} title="Bảng Xếp Hạng" to={'/chart'} />
                <MenuItem icon={<FontAwesomeIcon icon={faRadio} />} title="Radio" to={'/radio'} />
                <MenuItem icon={<FontAwesomeIcon icon={faMusic} />} title="Nhạc Mới" to={'/newmusic'} />
                <MenuItem icon={<FontAwesomeIcon icon={faIcons} />} title="Thể Loại" to={'/category'} />
                <MenuItem icon={<FontAwesomeIcon icon={faStar} />} title="Top 100" to={'/top100'} />
            </Menu>
        </aside>
    );
}

export default LeftSidebar;
