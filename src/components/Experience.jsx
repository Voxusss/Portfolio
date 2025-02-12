import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motions"
import ReactMarkdown from "react-markdown"

const ExperienceCard = ({experience}) => (
    <VerticalTimelineElement
      contentStyle={{ background: '#301c10', color:'#fff'}}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[85%] h-[85%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p 
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0}}>{experience.company_name}</p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            <ReactMarkdown>{point}</ReactMarkdown>
          </li>
          ))}

      </ul>
    </VerticalTimelineElement>
)
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-10`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} `}>Experience.</h2>
      </motion.div>
      <div className="flex flex-col">
        <VerticalTimeline layout={'1-column-left'}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")