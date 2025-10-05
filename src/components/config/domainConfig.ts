export const getSubdomain = (): string | null => {
  const host = window.location.hostname;
  const parts = host.split(".");

  // Handle localhost cases like kyc.localhost or admin.localhost
  if (host.includes("localhost")) {
    const sub = parts.length > 1 ? parts[0] : null;
    return sub;
  }

  // Example: kyc.sunnys-group.com → ["kyc", "sunnys-group", "com"]
  if (parts.length >= 3) {
    return parts[0]; // "kyc" or "admin"
  }

  return null;
};
