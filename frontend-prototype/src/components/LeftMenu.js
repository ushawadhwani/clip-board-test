import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";

export default function LeftMenu() {
  return (
    <div class="sidebar">
      <div className="tumlr">
        <FontAwesomeIcon icon={faTumblr} className="fa-color" />
      </div>
      <div className="circle">
        <FontAwesomeIcon icon={faCircle} className="fa-color" />
      </div>
    </div>
  );
}
