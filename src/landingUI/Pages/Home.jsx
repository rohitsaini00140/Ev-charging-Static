import Appspic from "../component/appsPic/Appspic"
import Banner from "../component/Banner"
import Blog from "../component/blog/Blog"
import ChargingStation from "../component/chargingStation/ChargingStation"
import Quotes from "../component/quotes/Quotes"
import Testimaonils from "../component/testimonails/Testimaonils"
import WhoareWe from "../component/whoWeAre/WhoareWe"
import WhyChoose from "../component/whyChoose/WhyChoose"
// import Blog 
function Home() {
  return (
    <div>
      <Banner />
      <ChargingStation/>
      <WhoareWe/>
      <Quotes/>
      <WhyChoose/>
        <Testimaonils/>
      <Appspic/>
      <Blog/>
    </div>
  )
}
export default Home