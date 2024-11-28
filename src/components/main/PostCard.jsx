
export function PostCard(props){
    const {id = '', title = '', image = '', content = '', tags = [], published = false} = props;
    console.log(props)
    return(
        <div className="card" id={`${id}`}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>{
                tags.map((el)=>{
                    return(
                        <span key={el} > {el}</span>
                    )
                })
                }</p>
                <p className="card-text">{content}</p>
                <a href="#" className="btn btn-primary">add</a>
            </div>
        </div>
    
    )
}