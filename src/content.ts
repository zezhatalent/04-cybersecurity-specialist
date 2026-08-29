import type { Content } from './components/Sections';

export const content: Content = {
  name: 'Omar Haddad',
  role: 'Cybersecurity Specialist',
  tagline: 'Securing digital frontiers',
  photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  email: 'omar@securefrontiers.io',
  phone: '+971 50 123 4567',
  location: 'Dubai, UAE',
  languages: ['Arabic', 'English', 'French'],
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Bug Bounty', href: 'https://hackerone.com' },
  ],
  about: [
    'I am a cybersecurity specialist with 7 years of experience defending networks, hardening systems and finding vulnerabilities before attackers do. I live at the intersection of offensive and defensive security — I break things to learn how to fix them, then build the defenses that keep them fixed.',
    'From penetration testing to building security operations, I help organisations reduce risk with a calm, methodical approach. I believe great security is invisible — it protects without slowing the business down, and it earns trust by never crying wolf.',
  ],
  services: [
    { title: 'Penetration Testing', desc: 'Web, network and mobile penetration tests that find real, exploitable risk and deliver fix-first reports.', icon: '🕵️' },
    { title: 'Incident Response', desc: 'Around-the-clock containment, eradication and recovery for ransomware and intrusion events.', icon: '🚨' },
    { title: 'SOC Engineering', desc: 'Designing SIEM detection rules and monitoring that surface threats fast and reduce alert fatigue.', icon: '🛡️' },
    { title: 'Zero-Trust Architecture', desc: 'IAM, MFA and network segmentation that shrink the attack surface without breaking the workflow.', icon: '🔐' },
    { title: 'Threat Hunting', desc: 'Proactive forensic hunts for stealthy attackers hiding inside the network before they strike.', icon: '🔍' },
    { title: 'Security Training', desc: 'Human-risk workshops and phishing simulations that turn your weakest link into your first defense.', icon: '🎓' },
  ],
  skills: [
    { name: 'Penetration Testing', level: 92, note: '80+ engagements' },
    { name: 'SIEM', level: 85, note: 'Splunk, Sentinel' },
    { name: 'Network Security', level: 90, note: 'Segmentation & zero-trust' },
    { name: 'Ethical Hacking', level: 88, note: 'Offensive tooling' },
    { name: 'Forensics', level: 82, note: 'Memory & disk analysis' },
  ],
  skillsIcons: [
    { name: 'Python', note: 'Exploit & automation', icon: '🐍' },
    { name: 'Burp Suite', note: 'Web app testing', icon: '🧰' },
    { name: 'Cloud Security', note: 'AWS, Azure hardening', icon: '☁️' },
    { name: 'OSINT', note: 'Reconnaissance', icon: '🕸️' },
  ],
  stats: [
    { label: 'Vulnerabilities found', value: 450, suffix: '+' },
    { label: 'Security audits', value: 120, suffix: '+' },
    { label: 'Critical incidents resolved', value: 60, suffix: '+' },
    { label: 'Systems hardened', value: 1000, suffix: '+' },
  ],
  experience: [
    {
      role: 'Senior Security Engineer',
      company: 'SecureShield',
      period: '2022 — Present',
      desc: 'Lead red-team engagements and build SIEM detection rules. Reduced mean time to detect threats by 60%.',
    },
    {
      role: 'Penetration Tester',
      company: 'Cryptic Labs',
      period: '2019 — 2022',
      desc: 'Performed 80+ web, network and mobile penetration tests across banking, healthcare and retail clients.',
    },
    {
      role: 'SOC Analyst',
      company: 'NetWatch',
      period: '2018 — 2019',
      desc: 'Monitored 24/7 security operations, triaging alerts and coordinating incident response for enterprise clients.',
    },
  ],
  education: [
    {
      degree: 'MSc Cyber Security',
      school: 'Khalifa University',
      period: '2015 — 2017',
      desc: 'Focused on network defense, cryptography and ethical hacking, graduating with distinction.',
    },
    {
      degree: 'B.E. Computer Science',
      school: 'American University of Beirut',
      period: '2011 — 2015',
      desc: 'Specialised in information systems and advanced networking.',
    },
  ],
  certificates: [
    'Certified Ethical Hacker (CEH)',
    'CISSP',
    'CompTIA Security+',
    'OSCP',
  ],
  awards: [
    { title: 'Top Bug Hunter', detail: 'Ranked in the top 1% of a leading vulnerability disclosure program for a critical chain of findings.', year: '2023' },
    { title: 'Security Team Award', detail: 'Recognised for leading the fastest ransomware recovery in the firm\'s history.', year: '2022' },
    { title: 'Research Disclosure', detail: 'Responsibly disclosed a remote code execution flaw adopted into a major advisory.', year: '2021' },
  ],
  cards: [
    {
      title: 'Web App Pentest — Fintech',
      desc: 'Uncovered critical auth bypass and IDOR flaws in a banking portal. Delivered a fix-first report and validation retest.',
      stack: 'Burp Suite, OWASP',
      metric: '3 critical → patched',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
    },
    {
      title: 'Ransomware Incident Response',
      desc: 'Led containment and recovery for a hospital hit by ransomware. Restored 100% of critical systems in 72 hours.',
      stack: 'EDR, IR, forensics',
      metric: '100% restored in 72h',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop',
    },
    {
      title: 'Zero-Trust Network Rollout',
      desc: 'Designed and implemented a zero-trust architecture for a 5,000-user enterprise, cutting the attack surface dramatically.',
      stack: 'IAM, MFA, segmentation',
      metric: 'attack surface reduced',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    },
  ],
  projects: [
    {
      title: 'SOC Detection Playbook',
      desc: 'A library of detection rules and runbooks that cut false-positive alerts by 45% for a managed SOC.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop',
      tags: ['SIEM', 'Detection'],
    },
    {
      title: 'Red Team Engagement Tool',
      desc: 'Internal automation for reconnaissance and reporting that halved the time per engagement.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
      tags: ['Automation', 'Offensive'],
    },
    {
      title: 'Phishing Resilience Program',
      desc: 'Security awareness training that cut simulated-phishing click rates from 28% to 9% in two quarters.',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=500&fit=crop',
      tags: ['Training', 'Human risk'],
    },
  ],
  hobbies: [
    { name: 'CTF Competitions', note: 'Weekly capture-the-flag', icon: '🚩' },
    { name: 'Bug Bounty', note: 'Weekend responsibly hunting', icon: '🐛' },
    { name: 'Lockpicking', note: 'Physical security enthusiast', icon: '🔓' },
    { name: 'Chess', note: 'Patient strategic play', icon: '♟️' },
  ],
  testimonials: [
    {
      quote:
        'Omar found issues our own tooling missed and explained them in a way our engineers could act on immediately.',
      author: 'Lena Weber',
      role: 'CISO, SecureShield',
    },
    {
      quote:
        'Calm under pressure, meticulous in detail. Exactly who you want running your incident response.',
      author: 'James Okafor',
      role: 'CTO, Cryptic Labs',
    },
  ],
  footnote: '© Omar Haddad · React, TypeScript & Framer Motion',
  ticker: ['Penetration Testing', 'Threat Hunting', 'Incident Response', 'Zero-Trust', 'SOC Engineering', 'Ethical Hacking'],

  blogPosts: [
    { title: 'Zero Trust Architecture Implementation', excerpt: 'A step-by-step guide to implementing zero trust security principles in enterprise environments.', date: '2024-01-08', tags: ['Zero Trust', 'Security'], readTime: '12 min' },
    { title: 'Incident Response: Lessons from Major Breaches', excerpt: 'What we can learn from recent cybersecurity incidents and how to strengthen your defenses.', date: '2023-12-20', tags: ['Incident Response', 'Threat Analysis'], readTime: '9 min' },
  ],

  faqItems: [
    { question: 'What security frameworks do you follow?', answer: 'I implement NIST CSF, ISO 27001, and CIS Controls, tailoring the approach to each organization\'s specific needs and compliance requirements.' },
    { question: 'How do you approach penetration testing?', answer: 'I follow a structured methodology including reconnaissance, scanning, exploitation, and reporting, with focus on both technical and business risks.' },
    { question: 'What is your experience with compliance?', answer: 'I have extensive experience with SOC 2, HIPAA, PCI DSS, GDPR, and FedRAMP compliance frameworks.' },
    { question: 'How do you handle security incidents?', answer: 'I follow established incident response procedures including containment, eradication, recovery, and post-incident analysis.' },
  ],

  skillsDetailed: [
    { category: 'Security Tools', items: [
      { name: 'SIEM/SOC', level: 92 },
      { name: 'Penetration Testing', level: 88 },
      { name: 'Vulnerability Assessment', level: 90 },
    ]},
    { category: 'Compliance', items: [
      { name: 'NIST Framework', level: 95 },
      { name: 'ISO 27001', level: 88 },
      { name: 'PCI DSS', level: 85 },
    ]},
  ],

  contactMethods: [
    { type: 'Email', value: 'security.specialist@email.com', icon: '📧', href: 'mailto:security.specialist@email.com' },
    { type: 'Security Blog', value: 'securityblog.com', icon: '🔒', href: 'https://securityblog.com' },
  ],
};
