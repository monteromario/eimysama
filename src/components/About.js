function About() {
    
    return (
      <div className="m-4">
        <h1><i className="fa-solid fa-square-info"></i> About</h1>
        <div id="list-example" className="list-group mb-4">
          <a className="list-group-item list-group-item-action" href="#list-item-1"><i className="fa-solid fa-arrow-right"></i> History</a>
          <a className="list-group-item list-group-item-action" href="#list-item-2"><i className="fa-solid fa-arrow-right"></i> Mission</a>
          <a className="list-group-item list-group-item-action" href="#list-item-3"><i className="fa-solid fa-arrow-right"></i> Vision</a>
          <a className="list-group-item list-group-item-action" href="#list-item-4"><i className="fa-solid fa-arrow-right"></i> Values</a>
        </div>
        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabindex="0">
          <h4 id="list-item-1">History</h4>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
          <h4 id="list-item-2">Mission</h4>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
          <h4 id="list-item-3">Vision</h4>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
          <h4 id="list-item-4">Values</h4>
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        </div>
      </div>
    );
  }
  
  export default About;