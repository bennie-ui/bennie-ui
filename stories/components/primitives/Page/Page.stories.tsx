import type { Meta, StoryObj } from "@storybook/react";
import { Page, PageActions, PageContent, PageFooter } from "@bennie-ui/page";
import type { PageStyleOverride } from "@bennie-ui/page";
import { css } from "styled-system/css";

const meta: Meta<typeof Page> = {
  title: "Components/Primitives/Page",
  component: Page,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const TitleOnly: Story = {
  name: "Title only",
  render: () => <Page title="Page title" />,
};

export const TitleWithSubtitle: Story = {
  name: "Title + subtitle",
  render: () => <Page title="Page title" subtitle="Subtitle text · last updated today" />,
};

export const TitleWithActions: Story = {
  name: "Title + actions slot",
  render: () => (
    <Page title="Page title">
      <PageActions>
        <button
          className={css({
            px: "4",
            py: "1.5",
            borderRadius: "md",
            fontSize: "sm",
            fontWeight: "500",
            bg: "blue.500",
            color: "white",
            cursor: "pointer",
          })}
        >
          Action
        </button>
      </PageActions>
    </Page>
  ),
};

export const WithContent: Story = {
  name: "Title + content",
  render: () => (
    <Page title="Page title" subtitle="Subtitle text">
      <PageContent>
        <p className={css({ color: "slate.400", fontSize: "sm" })}>Page content goes here.</p>
      </PageContent>
    </Page>
  ),
};

export const WithFooter: Story = {
  name: "Title + content + footer",
  render: () => (
    <Page title="Page title" subtitle="Subtitle text">
      <PageContent>
        <p className={css({ color: "slate.400", fontSize: "sm" })}>Page content goes here.</p>
      </PageContent>
      <PageFooter>
        <p className={css({ color: "slate.500", fontSize: "xs" })}>Footer content.</p>
      </PageFooter>
    </Page>
  ),
};

export const FullPage: Story = {
  name: "Full page",
  render: () => (
    <Page title="Page title" subtitle="Subtitle text · last updated today">
      <PageActions>
        <div className={css({ display: "flex", gap: "2" })}>
          <button
            className={css({
              px: "3",
              py: "1",
              borderRadius: "md",
              fontSize: "xs",
              border: "1px solid",
              borderColor: "slate.700",
              bg: "slate.800",
              color: "slate.300",
              cursor: "pointer",
            })}
          >
            All
          </button>
          <button
            className={css({
              px: "3",
              py: "1",
              borderRadius: "md",
              fontSize: "xs",
              border: "1px solid",
              borderColor: "blue.500",
              bg: "rgba(59,130,246,0.1)",
              color: "blue.400",
              cursor: "pointer",
            })}
          >
            Recent
          </button>
        </div>
      </PageActions>
      <PageContent>
        <p className={css({ color: "slate.400", fontSize: "sm" })}>Main content area.</p>
      </PageContent>
      <PageFooter>
        <p className={css({ color: "slate.500", fontSize: "xs" })}>Footer content.</p>
      </PageFooter>
    </Page>
  ),
};

// ─── styleOverride variants ───────────────────────────────────────────────────

export const OverrideTitleColor: Story = {
  name: "styleOverride · title color",
  render: () => (
    <Page
      title="Page title"
      subtitle="Subtitle stays default"
      styleOverride={{ title: { color: "#3b82f6" } }}
    >
      <PageContent>
        <p className={css({ color: "slate.400", fontSize: "sm" })}>Title uses override color.</p>
      </PageContent>
    </Page>
  ),
};

export const OverrideSubtitleColor: Story = {
  name: "styleOverride · subtitle color",
  render: () => (
    <Page
      title="Page title"
      subtitle="Subtitle with custom color"
      styleOverride={{ subtitle: { color: "#22c55e" } }}
    >
      <PageContent>
        <p className={css({ color: "slate.400", fontSize: "sm" })}>Subtitle uses a custom accent color.</p>
      </PageContent>
    </Page>
  ),
};

export const OverrideAdaptive: Story = {
  name: "styleOverride · adaptive (base + dark)",
  render: () => (
    <Page
      title="Adaptive page"
      subtitle="Colors respond to theme toggle"
      styleOverride={{
        title:    { color: { base: "#0369a1", dark: "#38bdf8" } },
        subtitle: { color: { base: "#64748b", dark: "#94a3b8" } },
      }}
    >
      <PageContent>
        <p className={css({ color: "slate.400", fontSize: "sm" })}>Title and subtitle use adaptive colors.</p>
      </PageContent>
    </Page>
  ),
};

export const OverrideAll: Story = {
  name: "styleOverride · full override",
  render: () => {
    const override: PageStyleOverride = {
      background: "#0d1117",
      title: { color: "#58a6ff" },
      subtitle: { color: "#8b949e" },
    };
    return (
      <Page title="Page title" subtitle="All tokens overridden via styleOverride" styleOverride={override}>
        <PageActions>
          <button style={{ padding: "4px 12px", borderRadius: 6, fontSize: 12, background: "#21262d", color: "#c9d1d9", border: "1px solid #30363d", cursor: "pointer" }}>
            Action
          </button>
        </PageActions>
        <PageContent>
          <p style={{ color: "#8b949e", fontSize: 14 }}>Content area.</p>
        </PageContent>
      </Page>
    );
  },
};
