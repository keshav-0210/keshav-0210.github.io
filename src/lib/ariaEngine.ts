import profile from '@/data/profile.json';
import education from '@/data/education.json';
import research from '@/data/research.json';
import projects from '@/data/projects.json';
import experience from '@/data/experience.json';
import personal from '@/data/personal.json';
import social from '@/data/social.json';

export interface AriaResponse {
  text: string;
  scrollTo?: string;
}

interface Rule {
  keywords: string[];
  handler: () => AriaResponse;
}

const bulletList = (items: string[]) => items.map((i) => `• ${i}`).join('\n');

const rules: Rule[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    handler: () => ({
      text: `Hey, I'm ARIA — ${profile.displayName}'s digital assistant. Ask me about his research, projects, experience, education, or how to get in touch.`,
    }),
  },
  {
    keywords: ['who are you', 'what are you', 'your name'],
    handler: () => ({
      text: `I'm ARIA, a rule-based assistant built into ${profile.displayName}'s site. I answer using his real profile data — no guessing, no hallucination.`,
    }),
  },
  {
    keywords: ['who is keshav', 'introduce', 'bio', 'tell me about him', 'tell me about keshav'],
    handler: () => ({
      text: `${profile.name} is a ${profile.title} at ${profile.subtitle}. ${profile.introduction}`,
      scrollTo: 'about',
    }),
  },
  {
    keywords: ['education', 'degree', 'college', 'school', 'university', 'cgpa', 'study'],
    handler: () => ({
      text: `Education timeline:\n${bulletList(
        education.education.map(
          (e: any) => `${e.displayAs || e.degree} — ${e.universityShort || e.university || e.school} (${e.startYear}-${e.endYear})${e.cgpa ? `, CGPA ${e.cgpa}` : ''}`
        )
      )}`,
      scrollTo: 'about',
    }),
  },
  {
    keywords: ['research', 'thesis', 'lab', 'guide', 'supervisor', 'phd', 'continual learning', 'novelty'],
    handler: () => ({
      text: `Thesis: "${research.thesis.title}" at ${research.thesis.lab}, guided by ${research.thesis.guide}. ${research.thesis.description}`,
      scrollTo: 'research',
    }),
  },
  {
    keywords: ['skills', 'technical', 'tech stack', 'programming', 'tools', 'frameworks'],
    handler: () => {
      const s = research.technicalSkills as Record<string, string[]>;
      const lines = Object.entries(s).map(([cat, items]) => `${cat}: ${items.join(', ')}`);
      return { text: `Technical skills —\n${bulletList(lines)}`, scrollTo: 'research' };
    },
  },
  {
    keywords: ['project', 'built', 'work on', 'portfolio', 'github repo'],
    handler: () => ({
      text: `Projects:\n${bulletList(
        projects.projects.map((p: any) => `${p.title} — ${p.problem}`)
      )}\nAsk me about any one by name for more detail.`,
      scrollTo: 'projects',
    }),
  },
  {
    keywords: ['experience', 'internship', 'job', 'work history', 'lightmetrics'],
    handler: () => ({
      text: `Work experience:\n${bulletList(
        experience.experience.map((e: any) => `${e.role || e.title} at ${e.company || e.organization} (${e.startDate}–${e.endDate || 'Present'})`)
      )}`,
      scrollTo: 'experience',
    }),
  },
  {
    keywords: ['teaching', 'ta', 'teaching assistant', 'mentor'],
    handler: () => ({
      text: `Teaching roles:\n${bulletList(
        experience.teaching.map((t: any) => `${t.role || t.position} — ${t.course}`)
      )}`,
      scrollTo: 'experience',
    }),
  },
  {
    keywords: ['award', 'achievement', 'honor', 'recognition', 'hackathon'],
    handler: () => ({
      text: `Awards & achievements:\n${bulletList(experience.awards.map((a: any) => a.title))}`,
      scrollTo: 'experience',
    }),
  },
  {
    keywords: ['hobby', 'hobbies', 'interest', 'fun', 'personal', 'free time'],
    handler: () => ({
      text: `Outside of work: ${personal.hobbies.map((h: any) => h.name || h).join(', ')}.`,
      scrollTo: 'personal',
    }),
  },
  {
    keywords: ['travel', 'trip', 'trek', 'mountain', 'visited'],
    handler: () => ({
      text: `Travel is part of his personal world — check the Personal World section for locations and stories.`,
      scrollTo: 'personal',
    }),
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'connect', 'linkedin', 'github', 'social'],
    handler: () => {
      const links = social.social
        .filter((s: any) => !s.status || s.status !== 'placeholder')
        .map((s: any) => `${s.platform}: ${s.url}`);
      return {
        text: `You can reach ${profile.displayName} at ${profile.email} or ${profile.phone}.\n${bulletList(links)}`,
        scrollTo: 'connect',
      };
    },
  },
  {
    keywords: ['location', 'where is he', 'based', 'city'],
    handler: () => ({ text: `${profile.displayName} is based in ${profile.location}.` }),
  },
];

const fallback: AriaResponse = {
  text: "I couldn't match that to something I know. Try asking about research, projects, experience, education, or contact info.",
};

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Word-boundary match so short keywords (e.g. "hi") don't match inside other words (e.g. "his")
function matchesKeyword(text: string, keyword: string): boolean {
  const pattern = new RegExp(`\\b${escapeRegExp(keyword)}\\b`, 'i');
  return pattern.test(text);
}

export function getAriaResponse(input: string): AriaResponse {
  const normalized = input.toLowerCase().trim();
  if (!normalized) return fallback;

  for (const rule of rules) {
    if (rule.keywords.some((k) => matchesKeyword(normalized, k))) {
      return rule.handler();
    }
  }
  return fallback;
}
