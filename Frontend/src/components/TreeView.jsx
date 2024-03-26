
import "./App.css";

function Dropdown({menuData}) {
  menuData = JSON.parse(menuData);
  console.log(typeof(menuData));
    const toggleSubMenu = (e) => {
        e.stopPropagation();
    
        let submenu = e.target.querySelector("ul");
    
        if (!submenu) return;
    
        if (submenu.style.display === "none" || !submenu.style.display) {
          submenu.style.display = "block";
        } else {
          submenu.style.display = "none";
        }
      };
    
      const renderSubMenu = (subMenu) => {
        return (
          <ul className="submenu">
            {subMenu.map((subItem, index) => (
              <li key={index} onClick={toggleSubMenu}>
                {subItem.label}
                <a href={`/Company/PPPO/Sons?parentId=${subItem.parentId}`}>+</a>
                {subItem.submenu && renderSubMenu(subItem.submenu)}
              </li>
            ))}
          </ul>
        );
      };
    
      return (
        <div>
          <ul>
            {menuData.map((item, index) => (
              <li key={index} onClick={toggleSubMenu}>
                {item.label}
                <a href={`/Company/PPPO/Sons?parentId=${item.parentId}`}>+</a>
                {item.submenu && renderSubMenu(item.submenu)}
              </li>
            ))}
          </ul>
        </div>
      );
}


export default Dropdown;
