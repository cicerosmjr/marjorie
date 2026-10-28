import autoridade from '../assets/autoridade.jpg';
import { faqs, knowsAbout, site } from './site';

const portraitUrl = new URL(autoridade.src, site.url).href;

const personId = `${site.url}/#person`;
const practiceId = `${site.url}/#practice`;
const websiteId = `${site.url}/#website`;

const address = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  addressCountry: site.address.country,
};

const person = {
  '@type': 'Person',
  '@id': personId,
  name: site.givenName,
  honorificPrefix: 'Dra.',
  jobTitle: 'Advogada especialista em Direito Médico e da Saúde',
  description:
    'Advogada especialista em Direito Médico e da Saúde e jornalista de formação. Atua na orientação jurídica de pacientes, familiares, médicos e clínicas, com atendimento presencial em Fortaleza e online em todo o Brasil.',
  url: `${site.url}/`,
  image: portraitUrl,
  email: site.email,
  telephone: site.phoneE164,
  address,
  knowsAbout: [...knowsAbout],
  sameAs: [site.linkedin, site.instagram],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidade de Fortaleza',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'registro profissional',
    name: site.oab,
    identifier: site.oabValue,
    recognizedBy: {
      '@type': 'Organization',
      name: 'Ordem dos Advogados do Brasil — Seccional Ceará',
    },
  },
};

const practice = {
  '@type': 'LegalService',
  '@id': practiceId,
  name: `${site.name} — ${site.area}`,
  description: site.description,
  url: `${site.url}/`,
  image: portraitUrl,
  telephone: site.phoneE164,
  email: site.email,
  address,
  areaServed: [
    { '@type': 'City', name: 'Fortaleza' },
    { '@type': 'Country', name: 'Brasil' },
  ],
  availableLanguage: ['pt-BR'],
  knowsAbout: [...knowsAbout],
  serviceType: [
    'Orientação jurídica para pacientes e familiares',
    'Orientação jurídica para médicos e clínicas',
    'Negativas de cobertura de plano de saúde',
    'Home care',
    'Medicamentos de alto custo',
    'Terapias para pessoas com TEA',
    'Documentação médica preventiva',
  ],
  founder: { '@id': personId },
  employee: { '@id': personId },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  sameAs: [site.linkedin, site.instagram],
};

export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${site.url}/`,
        name: site.name,
        description: site.description,
        inLanguage: site.locale,
        publisher: { '@id': personId },
      },
      {
        '@type': 'WebPage',
        '@id': `${site.url}/#webpage`,
        url: `${site.url}/`,
        name: site.title,
        description: site.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': personId },
        inLanguage: site.locale,
      },
      person,
      practice,
      {
        '@type': 'FAQPage',
        '@id': `${site.url}/#faq`,
        url: `${site.url}/#faq`,
        isPartOf: { '@id': websiteId },
        inLanguage: site.locale,
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function privacyJsonLd() {
  const url = `${site.url}/politica-de-privacidade`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: `Política de Privacidade | ${site.name}`,
        description:
          'Como a Dra. Marjorie Cordeiro trata os dados pessoais recebidos pelo site e pelos canais de contato.',
        isPartOf: { '@id': websiteId },
        about: { '@id': personId },
        inLanguage: site.locale,
        dateModified: site.privacyUpdatedIso,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${site.url}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Política de Privacidade',
            item: url,
          },
        ],
      },
      person,
    ],
  };
}

export function serializeLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function llmsTxt() {
  const patientFaqs = faqs.filter((item) => item.audience === 'pacientes');
  const doctorFaqs = faqs.filter((item) => item.audience === 'medicos');
  const blocks = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.name} é advogada especialista em ${site.area} e jornalista de formação, inscrita na ${site.oab}. Atua no encontro entre Direito e Saúde, com orientação jurídica para pacientes, familiares, médicos e clínicas. ${site.attendance}`,
    '',
    `Frase principal: ${site.phrase}`,
    `Assinatura: ${site.signature}`,
    '',
    '## Contato',
    '',
    `- WhatsApp: ${site.phoneDisplay} (${waMe(site.messages.neutral)})`,
    `- E-mail: ${site.email}`,
    `- Endereço: ${site.address.line}`,
    `- Horário: ${site.hours}`,
    `- Presencial em Fortaleza e online em todo o Brasil`,
    '',
    '## Redes',
    '',
    `- LinkedIn: ${site.linkedin}`,
    `- Instagram: ${site.instagram}`,
    '',
    '## Para pacientes e familiares',
    '',
    'Orientação sobre negativas de cobertura, home care, medicamentos de alto custo, terapias para pessoas com TEA e outras questões de planos de saúde e do SUS.',
    '',
    `- Seção: ${site.url}/#pacientes`,
    `- WhatsApp: ${waMe(site.messages.patient)}`,
    '',
    '## Para médicos e clínicas',
    '',
    'Orientação preventiva sobre TCLE, prontuários, organização jurídica de clínicas, equiparação hospitalar, residência médica e direitos profissionais.',
    '',
    `- Seção: ${site.url}/#medicos`,
    `- WhatsApp: ${waMe(site.messages.doctor)}`,
    '',
    '## Páginas',
    '',
    `- [Home](${site.url}/): apresentação, atuação e contato`,
    `- [Para pacientes](${site.url}/#pacientes): direitos e acesso à saúde`,
    `- [Para médicos](${site.url}/#medicos): segurança jurídica para a prática médica`,
    `- [Sobre](${site.url}/#sobre): trajetória da Dra. Marjorie Cordeiro`,
    `- [Dúvidas frequentes](${site.url}/#faq): perguntas de pacientes e de médicos`,
    `- [Política de Privacidade](${site.url}/politica-de-privacidade): tratamento de dados pessoais. Atualizada em ${site.privacyUpdated}.`,
    '',
    '## Dúvidas de pacientes e familiares',
    '',
    ...faqLines(patientFaqs),
    '## Dúvidas de médicos e clínicas',
    '',
    ...faqLines(doctorFaqs),
  ];
  return `${blocks.join('\n').trim()}\n`;
}

function waMe(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function faqLines(items: typeof faqs) {
  return items.flatMap((item) => [`### ${item.question}`, '', item.answer, '']);
}

export function robotsTxt() {
  const bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'];
  const lines = ['User-agent: *', 'Allow: /', ''];
  for (const bot of bots) {
    lines.push(`User-agent: ${bot}`, 'Allow: /', '');
  }
  lines.push(`Sitemap: ${site.url}/sitemap-index.xml`, '');
  return lines.join('\n');
}
