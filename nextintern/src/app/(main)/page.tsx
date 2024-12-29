import CompanyLogos from "@/components/CompanyLogos"
import Hero from "@/components/Hero"
import NewsUpdate from "@/components/NewsUpdate"
import Resume from "@/components/Resume"

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