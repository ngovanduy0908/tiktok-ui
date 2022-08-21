import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/687b3abf39cd1f2a0455d659f4f237ab~c5_300x300.webp?x-expires=1661234400&x-signature=TUUQnN1qIStBSyEJEUXWy5XljI0%3D"
                alt="hoa"
            />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hoa Bu Bim</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>hoabubim</span>
            </div>
        </div>
    );
}

export default AccountItem;
