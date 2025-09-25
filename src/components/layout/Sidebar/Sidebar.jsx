// src/components/layout/Sidebar.jsx

import './Sidebar.css';
// 1. Importar os ícones desejados da biblioteca 'react-icons'
import {
  HiOutlineHome,
  HiOutlineLink,
  HiOutlineBriefcase,
  HiOutlineQuestionMarkCircle,
  HiOutlineChip,
  HiOutlineCog
} from 'react-icons/hi';

const Sidebar = () => {
  // 2. Substituir os componentes SVG pelos ícones importados
  const navItems = [
    { name: 'Dashboard', icon: <HiOutlineHome /> },
    { name: 'Integrations', icon: <HiOutlineLink /> },
    { name: 'Portfolio', icon: <HiOutlineBriefcase /> },
    { name: 'FAQs', icon: <HiOutlineQuestionMarkCircle /> },
    { name: 'Bots', icon: <HiOutlineChip /> },
    { name: 'Settings', icon: <HiOutlineCog /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/humanizy-logo.png" alt="Humanizy Logo" className="sidebar-logo" />
        <span className="sidebar-brand-name">humanizy</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className={item.name === 'Dashboard' ? 'active' : ''}>
              <a href="#">
                {/* 3. Adicionar uma div wrapper para controlar o tamanho do ícone */}
                <div className="nav-icon-wrapper">
                  {item.icon}
                </div>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;