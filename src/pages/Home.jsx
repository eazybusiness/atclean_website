import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Membership from '../components/Membership'
import TeamSection from '../components/TeamSection'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Services />
      <About />
      <Membership />
      <TeamSection />
      <Contact />
    </>
  );
}
