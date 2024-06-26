import Header from "./Header";
import Hero from "./Hero";
import Intro from "./Intro";
import Carousel from "./Carousel";
import Blog from "./Blog";
import LeftShowcase from "./LeftShowcase";
import taskImage from '../assets/task.webp';
import handOnProjectIcon from '../assets/presentation-play.svg';
import howToRepresentYourselfIcon from '../assets/account-multiple-plus-outline.svg';
import sdlcTechniqueIcon from '../assets/cellphone-link.svg';
import easyToUnderstandIcon from '../assets/playlist-check.svg';
import RightShowcase from "./RightShowcase";
import lmsImage from '../assets/lms.png';
import sellCoursesAndEarnIcon from '../assets/cloud-check-outline.svg';
import certificationIcon from '../assets/magnify-plus-outline.svg';
import courseInUrduIcon from '../assets/information-outline.svg';
import practiceExercisesIcon from '../assets/folder-multiple-outline.svg';
import techInstructorImage from '../assets/instructor.png';
import uploadTutorialIcon from '../assets/text-box-search-outline.svg';
import generateRevenueIcon from '../assets/shape-outline.svg';
import instructorIdentityIcon from '../assets/download.svg';
import perfectShareRatioIcon from '../assets/playlist-check.svg';
import jobImage from '../assets/job.png';
import mobilefriendlyIcon from '../assets/cellphone-link.svg';
import speedUpDesignIcon from '../assets/checkbox-multiple-marked-outline.svg';
import communicationEasierIcon from '../assets/account-multiple-plus-outline.svg';
import addChangesFasterIcon from '../assets/order-bool-ascending-variant.svg';
import WhyInternee from "./WhyInternee";
import Reviews from "./Reviews";
import Footer from "./Footer";

const Home = () => {
  return (
    <div style={{width: "80%", maxWidth: 1440, margin: "0 auto"}}>
      <Header />
      <Hero />
      <Intro />
      <Carousel />
      <Blog />
      <LeftShowcase 
        image= {taskImage}
        subheading="Our own task portal"
        heading="Manage Project Via Own Task Portal"
        description="Welcome to internee.pk task portal. Where Tasks Transform Into Skills"
        data={[
          {
          icon: handOnProjectIcon,
          heading: "Hands on Projects",
          description: "More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities."
          },
          {
          icon: howToRepresentYourselfIcon,
          heading: "How to represent yourself",
          description:" we believe in learning by doing. Dive into hands-on projects that simulate real-world scenarios. From coding challenges to creative projects, every task is crafted to impart practical skills that resonate in professional environments."
          },
          {
          icon: sdlcTechniqueIcon,
          heading: "SDLC Techniques",
          description: "Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency."
          },
          {
          icon: easyToUnderstandIcon,
          heading: "Easy to understand",
          description: "Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner."
          }
        ]}
      />
      <RightShowcase 
        image= {lmsImage}
        subheading="Our LMS"
        heading="Guided Tutorials in Learning Management System"
        description="Want to learn something but don't know what's the roadmap or your english is not too good? That's why we launch LMS for you"
        data={[
          {
          icon: sellCoursesAndEarnIcon,
          heading: "Sell Courses and Earn ",
          description: "Are you an expert in your field? Share your knowledge on our LMS. Create and sell courses, or contribute as an instructor. Empower others on their learning journey while earning rewards for your expertise."
          },
          {
          icon: certificationIcon,
          heading: "Certification ",
          description: "Complete courses on our LMS and earn certifications that validate your expertise. Showcase your accomplishments to potential employers and stand out in a competitive landscape."
          },
          {
          icon: courseInUrduIcon,
          heading: "Courses in Urdu",
          description: " Dive into the world of knowledge with our courses in Urdu. Breaking language barriers, Our LMS ensures that education is accessible and relatable for everyone. Learn, grow, and excel in a language that feels like home."
          },
          {
          icon: practiceExercisesIcon,
          heading: "Practice Exercises",
          description: "Theory is just the beginning. Our LMS goes beyond by offering practical exercises that challenge and refine your skills. Apply your knowledge in real-world scenarios, solidifying your understanding and boosting your confidence"
          }
        ]}
      />
      <LeftShowcase 
        image= {techInstructorImage}
        subheading="Are you Tech Instructor or Content Creator?"
        heading="Create Courses In Local Language & Generate Income"
        description="Are you a professional want to start your journey as a tech instructor and content creator to make some revenue? Just visit Our LMS Intructor Portal"
        data={[
          {
          icon: uploadTutorialIcon,
          heading: "Upload Tutorials & Excersice",
          description: "Transform your expertise into impactful learning materials. As an instructor on Internee.pk LMS, you can effortlessly upload tutorials and exercises, shaping the educational experience for countless learners."
          },
          {
          icon: generateRevenueIcon,
          heading: "Generate Revenue",
          description: "Transform your expertise into impactful learning materials. As an instructor on Internee.pk LMS, you can effortlessly upload tutorials and exercises, shaping the educational experience for countless learners."
          },
          {
          icon: instructorIdentityIcon,
          heading: "Instructor Identity",
          description: "Internee.pk LMS provides a platform for instructors to build their brand. Showcase your skills, experience, and teaching style, creating a unique and recognizable identity in the world of online education."
          },
          {
          icon: perfectShareRatioIcon,
          heading: "Perfact Share Ratio",
          description: " We believe in fair partnerships. we enjoy a perfect share ratio that ensures transparency and fairness. Your hard work deserves to be rewarded, and we make sure you get your share"
          }
        ]}
      />
      <RightShowcase 
        image= {jobImage}
        subheading="Already have a good skill but looking for job?"
        heading="Job Portal, Ultimate Place To Find The Best Job"
        description="Streamline the approval process with your customer to quickly close the deal, get the sale, and start production."
        data={[
          {
          icon: mobilefriendlyIcon,
          heading: "100% Mobile friendly",
          description: "online art approvals"
          },
          {
          icon: speedUpDesignIcon,
          heading: "100% Mobile friendly ",
          description: "Everything is done online, from mockup to final design."
          },
          {
          icon: communicationEasierIcon,
          heading: "Communicate easier",
          description: "Add multiple recipients to an Art Approval to reduce traditional email clutter."
          },
          {
          icon: addChangesFasterIcon,
          heading: "Add changes faster",
          description: "Students can add comments to approvals for changes, saving you both time on finalizing designs."
          }
        ]}
      />
      <WhyInternee />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;