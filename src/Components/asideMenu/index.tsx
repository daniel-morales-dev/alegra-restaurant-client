import { Link } from "react-router-dom";
import AlegraLogo from "../../assets/640px-Logo_de_Alegra.png";
const AsideMenu = () => {
  return (
    <aside className="aside-menu">
      <img src={AlegraLogo} alt="Alegra logo" />
      <nav>
        <ul>
          <Link to="/">
            <li>Ordenes</li>
          </Link>
          <Link to="/kitchen">
            <li>Kitchen</li>
          </Link>
          <Link to="/warehouse">
            <li>Warehouse</li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default AsideMenu;
