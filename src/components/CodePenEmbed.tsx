import React, { useEffect } from 'react';

export default function CodePenEmbed({ slugHash, user, title, height = 300 }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <p 
      className="codepen" 
      data-height={height} 
      data-default-tab="html,result" 
      data-slug-hash={slugHash} 
      data-user={user}
      style={{
        height: `${height}px`,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid',
        margin: '1em 0',
        padding: '1em',
      }}
    >
      <span>See the Pen <a href={`https://codepen.io/${user}/pen/${slugHash}`}>
        {title}</a> by {user} (<a href={`https://codepen.io/${user}`}>@{user}</a>)
        on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
  );
}