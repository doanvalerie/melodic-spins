import { FaRegUser } from 'react-icons/fa';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdOutlineExplore, MdOutlineForum } from 'react-icons/md';
import { TbLogout } from 'react-icons/tb';

interface IconRegistry {
  [key: string]: React.ReactNode;
}

const iconRegistry: IconRegistry = {
  FaRegUser: <FaRegUser />,
  IoMdHelpCircleOutline: <IoMdHelpCircleOutline />,
  IoSettingsOutline: <IoSettingsOutline />,
  LuLayoutDashboard: <LuLayoutDashboard />,
  MdOutlineExplore: <MdOutlineExplore />,
  MdOutlineForum: <MdOutlineForum />,
  TbLogout: <TbLogout />,
};

export default iconRegistry;
