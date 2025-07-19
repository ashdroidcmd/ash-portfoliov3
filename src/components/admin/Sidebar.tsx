import { Link } from 'react-router-dom';
import { House, GraduationCap, Code, FolderGit2 } from 'lucide-react';

type SidebarProps = {
  collapsed: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  return (
    <ul
      className={`menu text-white min-h-full space-y-2 border-e border-e-gray-700 bg-zinc-900 p-4 text-xl ${
        collapsed ? 'w-20' : 'w-80'
      }`}
    >
      <li>
        <Link title="Home" to="/">
          {collapsed ? (
            <House size={26}/>
          ) : (
            'Home'
          )}
        </Link>
      </li>
      <li>
        <Link title="Qualifications" to="qualifications">
          {collapsed ? (
            <GraduationCap size={26}/>
          ) : (
            'Qualifications'
          )}
        </Link>
      </li>
      <li>
        <Link title="Tech Stack" to="tech-stack">
          {collapsed ? (
            <Code size={26}/>
          ) : (
            'Tech Stack'
          )}
        </Link>
      </li><li>
        <Link title="Projects" to="/">
          {collapsed ? (
            <FolderGit2 size={26}/>
          ) : (
            'Project'
          )}
        </Link>
      </li>
      
    </ul>
  );
};

export default Sidebar;