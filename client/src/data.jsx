import { nanoid } from 'nanoid';
import react from "react"
//////
export const availableOpportunities = [{
    id:nanoid(),
    title:"Europe",
    href:"https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url:"https://www.alueducation.com/",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur tortor sit amet metus feugiat,"
  },
  {
    id:nanoid(),
    title:"Africa",
    href:"https://images.pexels.com/photos/2574616/pexels-photo-2574616.jpeg?auto=compress&cs=tinysrgb&w=800",
    url:"https://www.alueducation.com/",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur tortor sit amet metus feugiat,"
  },
  {
    id:nanoid(),
    title:"Asia",
    href:"https://images.pexels.com/photos/448877/pexels-photo-448877.jpeg?auto=compress&cs=tinysrgb&w=800",
    url:"https://www.alueducation.com/",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur tortor sit amet metus feugiat,"
  }

]


////// skills
export const skillsAvailable = [
  {
    field:"Science",
    courses:["Biology","Chemistry","Geography"]
  },
  {
    field:"Technology",
    courses:["Networking","Software Dev","Robotics"]
  },
  {
    field:"Social skills",
    courses:["Communication","Leadership"]
  }
]