import { Divider } from '../../components/ui';
import { pageStyles as styles } from './pageStyles';
import {
  ContentSection,
  DataSection,
  DividerSection,
  FeedbackSection,
  FileUploadSection,
  FormControlsSection,
  HeroSection,
  ImagesSection,
  IdentitySection,
  IconsSection,
  NavigationSection,
  PaginationSection,
  ProgressSection,
  RadioSection,
  RatingSection,
  TabMenuSection,
  TagSection
} from './sections';

export function DesignSystemPage() {
  return (
    <main className={styles.app}>
      <section className={styles.container}>
        <HeroSection />
        <Divider label="Form controls" />
        <FormControlsSection />
        <Divider label="Content" />
        <ContentSection />
        <Divider label="Feedback" />
        <FeedbackSection />
        <Divider label="Identity and labels" />
        <IdentitySection />
        <Divider label="Icons" />
        <IconsSection />
        <Divider label="Divider" />
        <DividerSection />
        <Divider label="File & Upload" />
        <FileUploadSection />
        <Divider label="Images" />
        <ImagesSection />
        <Divider label="Navigation and state" />
        <NavigationSection />
        <Divider label="Pagination" />
        <PaginationSection />
        <Divider label="Progress Bar" />
        <ProgressSection />
        <Divider label="Radio" />
        <RadioSection />
        <Divider label="Rating" />
        <RatingSection />
        <Divider label="Tab Menu" />
        <TabMenuSection />
        <Divider label="Tag" />
        <TagSection />
        <Divider label="Data" />
        <DataSection />
      </section>
    </main>
  );
}
