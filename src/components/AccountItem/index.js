import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img src={data.thumbnailM} alt={data.title} className={cx('avatar')} />
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={faPlayCircle} />
            </div>
            <div className={cx('info')}>
                <h4 className={cx('name')}>{data.title}</h4>
                <span className={cx('desc')}>{data.artistsNames}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
