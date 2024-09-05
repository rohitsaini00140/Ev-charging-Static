// import Appspic from "../Component/AppsPic/Appspic"
import Appspic from "../component/appspic/Appspic"
import Banner from "../component/Banner"
import Blog from "../component/blog/Blog"
import Quotes from "../component/quotes/Quotes"
import WhyChoose from "../component/whyChoose/WhyChoose"
// import Blog 
function Home() {
  return (
    <div>
      <Banner />
      <Quotes/>
      <WhyChoose/>
      <Appspic/>
      <Blog/>
    </div>
  )
}
export default Home