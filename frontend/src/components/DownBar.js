import React from 'react'

function DownBar() {
  return (
    <div className='downbar d-flex justify-content-around align-items-center'>
        <div>
            <a href="#">
                <i class="bi bi-house-door"></i>
                <span>Home</span>
            </a>
        </div>
        <div>
            <a href="#">
                <i class="bi bi-search"></i>
                <span>Search</span>
            </a>
        </div>
        <div>
            <a href="#">
                <i class="bi bi-browser-chrome"></i>
                <span>Browse</span>
            </a>
        </div>
        <div>
            <a href="#">
                <i class="bi bi-person"></i>
                <span>Login</span>
            </a>
        </div>
    </div>
  )
}

export default DownBar