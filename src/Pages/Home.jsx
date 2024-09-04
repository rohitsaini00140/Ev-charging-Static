import Appspic from "../Component/AppsPic/Appspic"
import Banner from "../Component/Banner"
import Blog from "./Blog/Blog"
function Home() {
  return (
    <div>
      <Banner />
      <Appspic/>
      <Blog/>
    </div>
  )
}
export default Home