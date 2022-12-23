import Image from 'next/image'
import Today from './(home)/Today'
import BigTech from './(home)/BigTech'
import Subscribe from './(components)/Subscribe'
import Sidebar from './(components)/Sidebar'
import NewsCarousel from './(home)/NewsCarousel'
import Other from './(home)/Other'


export default function Home() {
  return (
    <main className="leading-7 px-10">
      <div className="max-w-maxw mx-auto">
        <Today />
        <div className="md:flex gap-10 mb-5">
          <div className="basis-3/4">
            <BigTech />
          </div>
          <div className="basis-1/4">
            <Sidebar />
          </div>
        </div>
        <NewsCarousel/>        
        <Other/>
      </div>
    </main>
  )
}
