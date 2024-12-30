import CompanyLogos from "@/components/frontend/CompanyLogos"
import Hero from "@/components/frontend/Hero"
import NewsUpdate from "@/components/frontend/NewsUpdate"
import Resume from "@/components/frontend/Resume"

const Home = () => {
  return (
    <main>
      <Hero/>
      <CompanyLogos/>      
      <NewsUpdate/>
      <Resume />
    </main>
  )
}
export default Home