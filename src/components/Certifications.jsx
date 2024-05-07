import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const CertificationsCard = ({ certifications }) => {
  console.log(certifications.points);
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={certifications.date}
      iconStyle={{ background: certifications.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={certifications.icon}
            alt={certifications.type}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {certifications.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {certifications.type}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {certifications.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
            <br></br>
            <a
              href={certifications.credential}
              target="_blank"
              className="text-blue-400"
            >
              {" "}
              See Credentials
            </a>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Explore my Credentials below
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certifications.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {certifications.map((certifications, index) => (
            <CertificationsCard
              key={`experience-${index}`}
              certifications={certifications}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
