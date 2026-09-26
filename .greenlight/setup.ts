import type { Stagehand } from "@browserbasehq/stagehand";
import type { Page } from "playwright-core";
import type { z as Zod } from "zod";

type SetupContext = {
  stagehand: Stagehand;
  page: Page;
  z: typeof Zod;
  previewUrl: string;
  signal: AbortSignal;
};

export default async function setup({ stagehand, page, signal }: SetupContext) {
  signal.throwIfAborted();

  const readyText = page.getByText("Puppet Art Style", { exact: true }).first();
  if (await readyText.isVisible().catch(() => false)) return;

  const scrolled = await stagehand.act(
    'Scroll down until the option labeled "Puppet" is visible.',
    { page },
  );
  if (!scrolled.success) throw new Error(scrolled.message);

  signal.throwIfAborted();
  const selected = await stagehand.act('Click "Puppet".', { page });
  if (!selected.success) throw new Error(selected.message);

  signal.throwIfAborted();
  await readyText.waitFor({ state: "visible", timeout: 5_000 });
}
