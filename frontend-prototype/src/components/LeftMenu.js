import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";

export default function LeftMenu() {
  return (
    <div class="sidebar">
      <div className="tumlr">
        <FontAwesomeIcon icon={faTumblr} style={{ color: "#fff" }} />
      </div>
      <div className="circle">
        <FontAwesomeIcon icon={faCircle} style={{ color: "#888" }} />
      </div>
      <div className="circle">
        <FontAwesomeIcon icon={faCircle} style={{ color: "#888" }} />
      </div>
      <div className="circle">
        <FontAwesomeIcon icon={faCircle} style={{ color: "#ffffff" }} />
      </div>
      <div className="circle">
        <FontAwesomeIcon icon={faCircle} style={{ color: "#888" }} />
      </div>
    </div>
  );
}
