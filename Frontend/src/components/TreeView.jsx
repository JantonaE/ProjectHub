
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
                <svg className="inline-block icon icon-tabler icons-tabler-outline icon-tabler-chevron-down" xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg> {subItem.label}
                <a className="inline-block align-middle" href={`/Company/PPPO/Sons?parentId=${subItem.parentId}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-link">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 15l6 -6" />
                  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                </svg>
                </a>
                <div className="ml-3">
                {subItem.submenu && renderSubMenu(subItem.submenu)}
                </div>
                
              </li>
            ))}
          </ul>
        );
      };
    
      return (
        <div>
          <ul>
            {menuData.map((item, index) => (
              <div className="flex items-center">
              <li key={index} onClick={toggleSubMenu}>
              <svg className="inline-block icon icon-tabler icons-tabler-outline icon-tabler-chevron-down" xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg> {item.label} 
                <a className="inline-block align-middle" href={`/Company/PPPO/Sons?parentId=${item.parentId}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-link">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 15l6 -6" />
                  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                </svg>
                </a>
                <div className="ml-3">
                  {item.submenu && renderSubMenu(item.submenu)}
                </div>
                
              </li>
              </div>
              
            ))}
          </ul>
        </div>
      );
}


export default Dropdown;
