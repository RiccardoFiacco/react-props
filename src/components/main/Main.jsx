import { Row, Container } from "react-bootstrap";
import style from "./Main.module.css"
import { posts } from "../../posts.js"
import { PostCard } from "./PostCard.jsx";
export function Main() {
  return (
    <div className={`${style.bgcolor_lightGrey} ${style.flex_grow_1}`}>
      <Container>
        <Row className={[style.justify_center, style.align_center, style.padding_top_50]}>
          {posts.map((el, i)=>{
            return(
              <div key = {i} className="col-12 col-sm-6 col-md-4 col-xl-2">
                <PostCard 
                id= {el.id}
                title = {el.title}
                image = {el.image}
                content = {el.content}
                tags = {el.tags}
                published = {el.published}/>
              </div> 
            )
          })}
        </Row>
      </Container>
    </div>
  );
}
