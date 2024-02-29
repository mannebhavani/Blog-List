// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {title, description, publishedDate} = itemDetails

  return (
    <li className="list-item">
      <div className="post-text">
        <h1 className="post-heading">{title}</h1>
        <p className="post-date">{publishedDate}</p>
      </div>
      <p className="post-para">{description}</p>
    </li>
  )
}

export default BlogItem
