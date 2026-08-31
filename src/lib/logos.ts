export function getInstitutionLogo(name?: string): string | null {
  if (!name) return null;
  const n = name.toLowerCase();
  if (n.includes('iiit')) return '/images/logos/iiitd.jpg';
  if (n.includes('ggsipu') || n.includes('indraprastha')) return '/images/logos/ggsipu.jpg';
  if (n.includes('apeejay')) return '/images/logos/apeejay.jpg';
  if (n.includes('lightmetrics')) return '/images/logos/lightmetrics.jpg';
  return null;
}
