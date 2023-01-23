import "./Menu.css"
import { Navigate } from "../../components/Navigate/Navigate";
import { Link } from 'react-router-dom';
import photoIcon from './assets/photo.svg'
import audioIcon from './assets/audio.svg'
import textIcon from './assets/text.svg'
import videoIcon from './assets/video.svg'
import { disableContextMenu} from '../../utilits/functions';


const menuData = {
  "items": [
    {
      "name": "Photo",
      "slug": "photo",
      "iconUrl": photoIcon
    },
    {
      "name": "Video",
      "slug": "video",
      "iconUrl": videoIcon
    },
    {
      "name": "Text",
      "slug": "text",
      "iconUrl": textIcon
    },
    {
      "name": "Audio",
      "slug": "radio",
      "iconUrl": audioIcon
    }

  ]
}

export const CategoryBadge = ({ data }: any) => {
  return (
    <Link to={data.slug}>
      <div className={ "category-badge " + "bagde"+data.slug }>
        <img src={data.iconUrl} />
        <div className="category-badge-line"/>
        <h3>{data.name}</h3>
      </div>
    </Link>
  );
}

export const Menu = () => {
  return (
    <div className="holder" onContextMenu={disableContextMenu}>
      <Navigate />
      <div className="menu-holder">
        <div className="category-badges-holder">
          {menuData.items?.map((v: any) => (
            <CategoryBadge key={v.slug} data={v} />
          ))}
        </div>
      </div>
    </div>
  );
};
