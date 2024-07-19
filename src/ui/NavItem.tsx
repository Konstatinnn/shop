import '@css/NavItem.scss';

interface NavItemProps {
  parentBlockClass: string;
  image: string;
  description: string;
  onClick?: () => void;
}

const NavItem = ({ parentBlockClass, image, description, onClick }: NavItemProps) => {
  return (
    <a href="#" onClick={onClick} className={`nav-item ${parentBlockClass}`}>
      <img src={image} alt="" className="nav-item__icon" />
      <span className="nav-item__description">{description}</span>
    </a>
  );
};

export default NavItem;
