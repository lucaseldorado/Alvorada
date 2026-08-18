import { Divider } from '../../components/ui';
import { pageStyles as styles } from './pageStyles';
import {
  DataSection,
  FeedbackSection,
  FormControlsSection,
  HeroSection,
  IdentitySection,
  IconsSection,
  NavigationSection
} from './sections';

export function DesignSystemPage() {
  return (
    <main className={styles.app}>
      <section className={styles.container}>
        <HeroSection />
        <Divider label="Form controls" />
        <FormControlsSection />
        <Divider label="Feedback" />
        <FeedbackSection />
        <Divider label="Identity and labels" />
        <IdentitySection />
        <Divider label="Icons" />
        <IconsSection />
        <Divider label="Navigation and state" />
        <NavigationSection />
        <Divider label="Data" />
        <DataSection />
      </section>
    </main>
  );
}
