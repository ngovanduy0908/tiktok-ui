import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
// import { useRef } from 'react';
const cx = classNames.bind(styles);

function Header() {
    // const inputRef = useRef(null);
    // const searchRef = useRef(null);

    // const handleInput = (e) => {
    //     if (e.target.value.length > 0) {
    //         searchRef.current.style.color = 'rgba(22, 24, 35, 0.75)';
    //     } else {
    //         searchRef.current.style.color = '';
    //     }
    // };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <img src={images.logo} alt="logo" />

                {/* search */}
                <div className={cx('search')}>
                    <input
                        // ref={inputRef}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        // onChange={(e) => handleInput(e)}
                    />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* loading */}
                    <FontAwesomeIcon
                        className={cx('loading')}
                        icon={faSpinner}
                    />

                    <button /*ref={searchRef}*/
                        className={cx('search-btn')}
                        tabIndex={-1}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
