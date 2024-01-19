import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar d-flex align-item-center justify-content-between">
      <div className="navbar-search">
        <div className="search-container">
          <input type="search" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_15_152)">
              <rect width="24" height="24" fill="white" />
              <circle
                cx="10.5"
                cy="10.5"
                r="6.5"
                stroke="#000000"
                stroke-linejoin="round"
              />
              <path
                d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                fill="#000000"
              />
            </g>
            <defs>
              <clipPath id="clip0_15_152">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="navbar-links auth-btns">
        <ul className="d-flex align-item-center gap-3 justify-content-end">
          <li>
            <Link to="/sign">
              <button className="sign">Sign<i class="bi bi-box-arrow-in-right"></i></button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className="login">Login<i class="bi bi-person-add"></i></button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
