import { openGraph } from "@/lib/og";

describe("Open Graph function should work correctly", () => {
  it("should not return templateTitle when not specified", () => {
    const result = openGraph({
      description: "SnapZen Test description",
      siteName: "Test Snapzen",
    });
    expect(result).not.toContain("&templateTitle=");
  });

  it("should return templateTitle when specified", () => {
    const result = openGraph({
      templateTitle: "Snapzen Test",
      description: "Snapzen Test description",
      siteName: "Test Snapzen",
    });
    expect(result).toContain("&templateTitle=Test%20Template%20Title");
  });
});
