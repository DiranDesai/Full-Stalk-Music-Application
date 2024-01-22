import React, { useEffect } from 'react'

function NotifyModal({success, message}) {
    useEffect(() => {
        const notifyTimer = setTimeout(() => {
            document.querySelector(".notify-modal").classList.add("scaleOut");
            document.querySelector(".notify-overlay-modal").classList.add("hidden");
        }, 3000);

        return () => clearInterval(notifyTimer)
    }, [])

  return (
    <div className="notify-overlay-modal">
        <div className='notify-modal'>
            <span>{success ? <i class="bi bi-check-circle bi-red"></i> : <i class="bi bi-x-circle"></i> }</span>
            <h2>{success ? "Success!" : "Error"}</h2>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default NotifyModal