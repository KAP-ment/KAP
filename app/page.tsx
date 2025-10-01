import Hero from './components/Hero'
import Features from './components/Features'
import CoreValues from './components/CoreValues'
import QuickStart from './components/QuickStart'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <section id="features"><Features /></section>
      <section id="core-values"><CoreValues /></section>
      <section id="quick-start"><QuickStart /></section>
      <section id="showcase"><Showcase /></section>
      <section id="testimonials"><Testimonials /></section>
    </>
  )
}
