import AboutKanabagiSection from '@/components/About/AboutKanabagiSection';
import ServiceSection from '@/components/About/ServiceSection';
import TechStackSection from '@/components/About/TechStackSection';
import AboutHeader from '@/components/About/TitleSection';
import WhySection from '@/components/About/WhySection';

const AboutUs = () => {
  return (
    <div className="mb-56">
      <AboutHeader title="Company Profile" />
      <AboutKanabagiSection />
      <WhySection />
      <TechStackSection />
      <ServiceSection />
    </div>
  );
};

export default AboutUs;
