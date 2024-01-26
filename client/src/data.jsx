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
export const EduConnectOpportunities = [
   {
    schoolFees:"Request for School fees"
  }
,{
  Learning:[
 {
  field:
  [
    {
      name: "Introduction to Agriculture",
      about: "Exploring Sustainable Farming Practices",
      date: "02 Feb - 12 Feb 2024",
      location: "Rwanda",
    },
    {
      name: "Community Health Workshop",
      about: "Promoting Healthcare in Local Communities",
      date: "15 Mar - 25 Mar 2024",
      location: "Kenya",
    },
    {
      name: "Entrepreneurship and Small Business",
      about: "Building Business Skills for Local Enterprises",
      date: "10 Apr - 20 Apr 2024",
      location: "Bangladesh",
    },
    {
      name: "IT Essentials",
      about: "Fundamentals of Information Technology",
      date: "05 May - 15 May 2024",
      location: "Nepal",
    },
    {
      name: "Biology Foundations",
      about: "Understanding Basics of Biological Sciences",
      date: "20 Jun - 30 Jun 2024",
      location: "Mozambique",
    },
  ]
 
 },
   ]
}
 ]


