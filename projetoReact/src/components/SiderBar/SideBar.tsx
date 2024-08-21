import { useContext } from "react"
import { SideBarFull } from "./SideBarFull"
import { SideBarSmall } from "./SideBarSmall"
import { CreateAppContext } from "../../contexts/AppController"

const SideBar = () => {
  const {data} = useContext(CreateAppContext) 

  if(data.value === false){
    return <SideBarSmall/>
  }  
  return <SideBarFull/>

}

export default SideBar
