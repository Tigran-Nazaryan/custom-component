const Empty = ({description, img, children, style}) => {
    const defaultStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div style={{...defaultStyle, ...style}}>
            {img ? <div>{img}</div> : null}
            {description && <div>{description}</div>}
            {children}
        </div>
    )
}

export default Empty;