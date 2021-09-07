import React from 'react'
import ContentLoader from 'react-content-loader'
function LoadingPizzaBlock() {
    return (
        <div>
    <ContentLoader 
        speed={2}
        width={280}
        height={260}
        viewBox="0 0 280 260"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
    <circle cx="398" cy="279" r="20" /> 
    <rect x="42" y="257" rx="0" ry="0" width="186" height="28" /> 
    <circle cx="132" cy="91" r="90" /> 
    <rect x="38" y="190" rx="0" ry="0" width="189" height="22" /> 
    <rect x="44" y="227" rx="0" ry="0" width="71" height="35" /> 
    <rect x="146" y="232" rx="0" ry="0" width="73" height="25" /> 
    <rect x="41" y="217" rx="0" ry="0" width="186" height="58" />
  </ContentLoader>
        </div>
    )
}

export default LoadingPizzaBlock;
