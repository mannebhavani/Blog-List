// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogDetails} = props
  return (
    <ul className="list-container">
      {blogDetails.map(eachItem => (
        <BlogItem itemDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}
export default BlogList
