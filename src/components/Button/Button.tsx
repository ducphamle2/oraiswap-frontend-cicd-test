import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(styles);
type ButtonType = 'primary' | 'secondary' | 'primary-sm';
interface Props {
  type: ButtonType;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactElement | React.ReactNode;
}

export const Button: React.FC<Props> = ({ children, onClick, type }) => {
  return (
    <button onClick={(event) => onClick(event)} className={cx('button', type)}>
      {children}
    </button>
  );
};
