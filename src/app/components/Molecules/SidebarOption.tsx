import css from 'styled-jsx/css';
import theme from '~/app/styles/theme';
import classNames from 'classnames';

const styles = css`
  .sidebar-option-list {
    display: flex;
    gap: 20px;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
  }

  .sidebar-option-list--active {
    color: ${theme.colors.primary};
  }

  .sidebar-option-list + .sidebar-option-list {
    margin-top: 12px;
  }

  .sidebar-option-list:hover {
    background-color: #e8f5fe;
    color: ${theme.colors.primary};
  }

  .sidebar-option-list-text {
    font-size: 20px;
    margin-right: 20px;
    font-weight: 700;
  }
`;

interface SidebarOptionProps {
  text: string;
  Icon: any; // FIX ME: 適切な型定義が必要
  active?: boolean;
}

const SidebarOption = ({ text, Icon, active }: SidebarOptionProps) => {
  return (
    <>
      <style jsx>{styles}</style>
      <div className={classNames('sidebar-option-list', {'sidebar-option-list--active': active})}>
        <Icon className='sidebar-option-list-icon' />
        <h2 className='sidebar-option-list-text'>{text}</h2>
      </div>
    </>
  );
};

export default SidebarOption;
