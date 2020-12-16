import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        className='pizza-block'
        speed={12}
        width={280}
        height={456}
        viewBox="0 0 280 456"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="130" cy="130" r="130" />
        <rect x="0" y="269" rx="10" ry="10" width="280" height="25" />
        <rect x="0" y="309" rx="15" ry="15" width="280" height="78" />
        <rect x="0" y="411" rx="5" ry="5" width="100" height="14" />
        <rect x="123" y="399" rx="20" ry="20" width="150" height="32" />
    </ContentLoader>
)

export default MyLoader