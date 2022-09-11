import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink
            className={(nav) => {
                console.log(nav);
                return cx('menu-item', { active: nav.isActive ? true : false });
            }}
            to={to}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
