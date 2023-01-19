export default function Widget({height, width, content, icon, title}){
    return (
        <div className='widget' style={{height: height, width: width}}>
            <div className="title">{title}</div>
            <div>{content}</div>
        </div>
    )
}