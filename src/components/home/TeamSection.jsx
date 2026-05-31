import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa';

import AnimateIn from '../animation/AnimateIn';
import { Stagger, StaggerItem } from '../animation/Stagger';
import { fadeInLeft, fadeInRight, fadeInUp } from '../animation/variants';
import SectionBadge from '../ui/SectionBadge';

const SOCIAL = [
  { key: 'twitter', Icon: FaTwitter, base: 'https://twitter.com' },
  { key: 'facebook', Icon: FaFacebookF, base: 'https://facebook.com' },
  { key: 'linkedin', Icon: FaLinkedinIn, base: 'https://linkedin.com' },
  { key: 'pinterest', Icon: FaPinterestP, base: 'https://pinterest.com' },
];

const CARD_ANIMS = [fadeInLeft, fadeInUp, fadeInRight];

// 🔥 STATIC TEAM DATA (replace with your real content)
const TEAM = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO & Founder',
    image: '/assets/images/team/team-1-1.jpg',
    twitter: '#',
    facebook: '#',
    linkedin: '#',
    pinterest: '#',
  },
  {
    id: 2,
    name: 'Sarah Khan',
    role: 'UI/UX Designer',
    image: '/assets/images/team/team-1-2.jpg',
    twitter: '#',
    facebook: '#',
    linkedin: '#',
    pinterest: '#',
  },
  {
    id: 3,
    name: 'Ali Ahmed',
    role: 'Full Stack Developer',
    image: '/assets/images/team/team-1-3.jpg',
    twitter: '#',
    facebook: '#',
    linkedin: '#',
    pinterest: '#',
  },
  {
    id: 4,
    name: 'Emma Wilson',
    role: 'Marketing Lead',
    image: '/assets/images/team/team-1-1.jpg',
    twitter: '#',
    facebook: '#',
    linkedin: '#',
    pinterest: '#',
  },
];

export default function TeamSection({ pageMode = false }) {
  const members = pageMode ? TEAM : TEAM.slice(0, 3);

  const tagline = pageMode ? 'Our Smart People' : 'Expert Members';
  const title = pageMode
    ? 'Meet Expert & Professional Team Members'
    : 'Meet Our Professional Team';

  const gridClass = pageMode
    ? 'grid grid-cols-1 gap-x-[30px] md:grid-cols-2 xl:grid-cols-4'
    : 'grid grid-cols-1 gap-x-[30px] md:grid-cols-2 lg:grid-cols-3';

  return (
    <section
      className={`relative z-[1] ${
        pageMode
          ? 'bg-[#f8f8f8] pb-[90px] pt-20'
          : 'bg-white py-20 md:pb-[90px] md:pt-[120px]'
      }`}
    >
      {!pageMode && (
        <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[#141414] md:h-[508px]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06] mix-blend-luminosity"
            style={{
              backgroundImage:
                "url('/assets/images/backgrounds/team-one-bg.jpg')",
            }}
          />
        </div>
      )}

      <div className="container-site">
        <AnimateIn variant="fadeInUp" className="mb-[50px] text-center">
          <SectionBadge>{tagline}</SectionBadge>
          <h2
            className={`mt-[7px] text-[26px] font-semibold leading-[36px] md:text-[45px] md:leading-[55px] ${
              pageMode ? 'text-[#141414]' : 'text-white'
            }`}
          >
            {title}
          </h2>
        </AnimateIn>

        <Stagger className={gridClass} stagger={0.1}>
          {members.map((member, i) => (
            <StaggerItem
              key={member.id}
              variant={CARD_ANIMS[i % CARD_ANIMS.length]}
            >
              <article className="group relative mb-[30px]">
                <div className="relative overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:bg-[#141414]/30 after:opacity-0 after:transition-opacity after:duration-500 group-hover:after:opacity-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="block w-full origin-[70%_80%] scale-[1.01] transition-transform duration-500 ease-out group-hover:scale-[1.036] group-hover:duration-700"
                  />
                </div>

                <div className="relative mx-5 -mt-[62px] shadow-[0_10px_60px_rgba(0,0,0,0.07)]">
                  <div className="relative z-[2] bg-white px-[30px] pb-10 pt-[30px] text-center [clip-path:polygon(0_0,100%_15%,100%_100%,0_100%)]">
                    <h3 className="text-[20px] font-semibold leading-[30px] text-[#141414] md:text-2xl md:leading-[34px]">
                      <Link
                        to="/team"
                        className="transition-colors duration-300 hover:text-brand"
                      >
                        {member.name}
                      </Link>
                    </h3>

                    <p className="mb-[18px] mt-[9px] text-[15px] leading-normal text-[#6c6b6f]">
                      {member.role}
                    </p>

                    <div className="flex items-center justify-center gap-4">
                      {SOCIAL.map(({ key, Icon }) => {
                        const url = member[key];

                        return (
                          <a
                            key={key}
                            href={url}
                            aria-label={key}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex items-center text-base text-[#141414] transition-colors duration-300 hover:text-brand"
                          >
                            <Icon />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}