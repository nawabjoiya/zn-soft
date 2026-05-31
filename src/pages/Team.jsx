import { useOutletContext } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import TeamSection from '../components/home/TeamSection';
import teamData from '../data/Team';

export default function Team() {
  const { settings } = useOutletContext() || {};

  return (
    <>
      <PageHero title="Our Team" breadcrumb="Pages" />

      <TeamSection
        pageMode
        settings={{
          ...settings,
          team_badge: 'Our Smart People',
          team_title: 'Meet Expert & Professional Team Members',
        }}
        team={teamData}
      />
    </>
  );
}