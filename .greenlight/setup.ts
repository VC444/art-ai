export default async function setup({ page, signal }) {
  if (signal.aborted) {
    throw new Error("Greenlight setup was aborted before selecting Caricature");
  }

  const caricatureTab = page.getByRole("tab", { name: "Caricature", exact: true });
  await caricatureTab.scrollIntoViewIfNeeded();

  if (signal.aborted) {
    throw new Error("Greenlight setup was aborted before clicking Caricature");
  }

  await caricatureTab.click({ timeout: 10_000 });
  await caricatureTab.waitFor({ state: "visible", timeout: 10_000 });

  if ((await caricatureTab.getAttribute("aria-selected")) !== "true") {
    throw new Error("Caricature tab did not become selected");
  }

  await page
    .getByRole("tabpanel")
    .getByRole("heading", { name: "Caricature Art Style", exact: true })
    .waitFor({ state: "visible", timeout: 10_000 });

  if (signal.aborted) {
    throw new Error("Greenlight setup was aborted after selecting Caricature");
  }
}
