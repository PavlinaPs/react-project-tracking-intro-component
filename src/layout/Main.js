import React from 'react'

const Main = () => {
  return (
    <main className='intro__main'>
      <div className="intro__new-container">
        <div className="intro__new">New</div>
        <p className="intro__new-text">Monograph Dashboard</p>
      </div>
      <h1 className="intro__title">Powerful insights into your team</h1>
      <p className="intro__text">Project planning and time tracking for agile teams</p>
      <div className="intro__CTA-container">
        <button className="intro__CTA-button">Schedule a demo</button>
        <p className="intro__CTA-text">to see a preview</p>
      </div>
    </main>
  )
}

export default Main