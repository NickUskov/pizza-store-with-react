import React from 'react';
import ContentLoader from 'react-content-loader'

const MyComponent = () => {
return (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="129" cy="158" r="119" />
    <rect x="0" y="295" rx="0" ry="0" width="277" height="19" />
    <rect x="0" y="327" rx="10" ry="10" width="280" height="84" />
  </ContentLoader>
)
};

export default MyComponent;
