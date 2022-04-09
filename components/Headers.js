import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { BadgeCheckIcon,CollectionIcon,HomeIcon,LightningBoltIcon,SearchIcon,UserIcon } from '@heroicons/react/outline'

function Headers() {
  return (
    <header className="flex flex-col  sm:flex-row justify-between items-center mt-4 h-auto">
        <div className="flex  max-w-2xl ">
          <HeaderItem title='HOME' Icon={HomeIcon}/>
          <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
          <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
          <HeaderItem title='COLLECTION' Icon={CollectionIcon}/>
          <HeaderItem title='SEARCH' Icon={SearchIcon}/>
          <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
        </div>
        <Image className="object-contain"
        src='https://links.papareact.com/ua6' width={200} height={100}/>
    </header>
    

  )


}

export default Headers