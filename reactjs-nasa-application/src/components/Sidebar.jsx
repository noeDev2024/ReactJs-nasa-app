import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='bgOverlay'></div>
        <div className='sidebarContents'>
            <h2>The Brutal Martian Landscape</h2>
            <div>
                <p>Description</p>
            </div>
            <button>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
  )
}
