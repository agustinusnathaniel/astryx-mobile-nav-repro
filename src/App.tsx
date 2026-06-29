import { AppShell } from '@astryxdesign/core/AppShell';
import { SideNav, SideNavHeading, SideNavItem, SideNavSection } from '@astryxdesign/core/SideNav';
import { TopNav, TopNavHeading } from '@astryxdesign/core/TopNav';
import { Heading, Text } from '@astryxdesign/core/Text';

function App() {
  return (
    <AppShell
      variant="elevated"
      height="fill"
      contentPadding={4}
      topNav={
        <TopNav
          label="Navigation"
          heading={<TopNavHeading heading="Repro" />}
        />
      }
      sideNav={
        <SideNav
          header={<SideNavHeading heading="Repro" />}
          collapsible
        >
          <SideNavSection title="Nav">
            <SideNavItem label="Dashboard" isSelected />
            <SideNavItem label="Orders" />
            <SideNavItem label="Products" />
          </SideNavSection>
        </SideNav>
      }
    >
      <Heading level={2}>Mobile Nav Bug Repro</Heading>
      <Text>
        Steps to reproduce: 1. Open on mobile or resize below breakpoint 2.
        Click hamburger to open nav 3. Click a menu item 4. Try reopening the
        nav
      </Text>
    </AppShell>
  );
}

export default App;
