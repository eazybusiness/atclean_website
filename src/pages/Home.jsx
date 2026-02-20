import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Membership from '../components/Membership'
import TeamSection from '../components/TeamSection'
import References from '../components/References'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <References />
      <Services />
      <About />
      <Membership />
      <TeamSection />
      <Contact />
    </>
  );
}
