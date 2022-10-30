import type { NextPage } from 'next'
import Head from 'next/head'
import BannerSection from '../components/BannerSection'
import BrowseSection from '../components/BrowseSection'
import CreateSection from '../components/CreateSection'
import ExploreSection from '../components/ExploreSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import JobAbout from '../components/JobAbout'
import JobSection from '../components/JobSection'
import Navbar from '../components/Navbar'
import PostJobSection from '../components/PostJobSection'


const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Aajob</title>
        <meta name="description" content="Aajob-Job finding landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute z-10 w-full py-12">
        <Navbar />
      </div>
      <HeroSection />
      <BannerSection />
      <JobSection />
      <ExploreSection />
      <BrowseSection />
      <PostJobSection />
      <JobAbout />
      <CreateSection />
      <Footer />
    </div>
  )
}

export default Home
