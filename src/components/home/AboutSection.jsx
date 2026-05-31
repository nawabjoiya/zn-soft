import { FaComments, FaMoneyBillWave } from 'react-icons/fa';
import AnimateIn from '../animation/AnimateIn';
import { PrimaryButton } from '../ui/PrimaryButton';
import SectionBadge from '../ui/SectionBadge';

const pointIcons = [FaMoneyBillWave, FaComments];

const aboutData = {
  badge: 'About ZN Soft Solutions',
  title: 'Innovative Software Solutions For Modern Businesses',
  description:
    'We help startups, businesses, and enterprises transform their ideas into scalable digital products.',
  paragraph:
    'ZN Soft Solutions specializes in web development, mobile applications, UI/UX design, cloud solutions, and digital transformation services. Our experienced team delivers high-quality, secure, and scalable solutions tailored to business needs.',
  image: '/assets/images/resources/about-one-img-1.jpg',
  features: ['Cost Effective Solutions', 'Client Focused Approach'],
};

function splitFeatureTitle(title) {
  const words = title?.split(' ') ?? [];

  if (words.length <= 2) {
    return { line1: title, line2: '' };
  }

  const mid = Math.ceil(words.length / 2);

  return {
    line1: words.slice(0, mid).join(' '),
    line2: words.slice(mid).join(' '),
  };
}

export default function AboutSection() {
  const {
    badge,
    title,
    description,
    paragraph,
    image,
    features,
  } = aboutData;

  return (
    <section className="relative bg-white pb-[87px]">
      <div className="container-site">
        <div className="grid items-center xl:grid-cols-[5fr_7fr]">

          {/* IMAGE SIDE */}
          <AnimateIn
            variant="slideInLeft"
            className="
              relative
              mr-0
              max-xl:mx-auto
              max-xl:max-w-[600px]
              xl:mr-10
              2xl:-ml-[375px]
            "
          >
            <img
              src={image || '/assets/images/resources/about-one-img-1.jpg'}
              alt={title}
              className="block w-full"
            />
          </AnimateIn>

          {/* CONTENT SIDE */}
          <AnimateIn
            variant="slideInRight"
            delay={0.15}
            className="
              relative
              max-xl:mx-auto
              max-xl:mt-12
              max-xl:max-w-[600px]
            "
          >
            <div className="mb-[22px] text-left">
              <SectionBadge>{badge}</SectionBadge>

              <h2 className="mt-[7px] text-[26px] font-semibold leading-[36px] text-[#141414] md:text-[45px] md:leading-[55px]">
                {title}
              </h2>
            </div>

            <p className="text-[20px] font-semibold leading-[30px] text-brand md:text-[24px] md:leading-[32px]">
              {description}
            </p>

            <p className="mb-[25px] mt-[21px] text-[15px] leading-[26px] text-[#6c6b6f]">
              {paragraph}
            </p>

            {/* FEATURES */}
            <ul className="flex flex-col gap-[30px] md:flex-row md:items-center md:gap-[103px]">
              {features.map((title, i) => {
                const Icon = pointIcons[i % pointIcons.length];
                const { line1, line2 } = splitFeatureTitle(title);

                return (
                  <li
                    key={`${title}-${i}`}
                    className="
                      group
                      relative
                      flex
                      items-center
                      gap-[30px]
                      md:first:before:hidden
                      md:before:absolute
                      md:before:-left-[43px]
                      md:before:top-0
                      md:before:h-[94px]
                      md:before:w-[3px]
                      md:before:bg-brand
                      md:before:content-['']
                    "
                  >
                    <div
                      className="
                        flex
                        h-[92px]
                        w-[92px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-brand
                        text-[36px]
                        text-white
                        transition-transform
                        duration-500
                        group-hover:scale-90
                      "
                    >
                      <Icon aria-hidden />
                    </div>

                    <h4 className="text-[20px] font-semibold leading-[30px] text-[#141414] md:text-[24px] md:leading-[32px]">
                      {line1}
                      {line2 && (
                        <>
                          <br />
                          {line2}
                        </>
                      )}
                    </h4>
                  </li>
                );
              })}
            </ul>

            <div className="mt-[41px]">
              <PrimaryButton to="/contact">
                Get Free Quote
              </PrimaryButton>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}