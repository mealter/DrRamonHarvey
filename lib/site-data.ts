/*
 * All site content lives here. Edit these arrays to update the site;
 * components render whatever is listed. Publication metadata is taken
 * from https://ramonharvey.com/archives/ (official publications page).
 */

export const siteUrl = 'https://ramonharvey.com'

export const profile = {
  name: 'Ramon Harvey',
  honorific: 'Dr',
  tagline: 'Scholar of Qur\u2019anic Studies, Islamic Theology and Philosophy',
  /** Set to e.g. '/images/ramon-harvey.jpg' once a photograph is available. */
  portrait: "portrait.jpg",
  role: 'Senior Lecturer in Islamic Studies',
  roleDetail: 'Academic Lead within the faculty',
  institution: 'Cambridge Muslim College',
  institutionUrl: 'https://www.cambridgemuslimcollege.org',
  seriesEditor: {
    title: 'Edinburgh Studies in Islamic Scripture and Theology',
    publisher: 'Edinburgh University Press',
    url: 'https://edinburghuniversitypress.com/series-edinburgh-studies-in-islamic-scripture-and-theology.html',
  },
  /** Public address as listed on ramonharvey.com/contact — split to deter scrapers. */
  emailParts: { user: 'rnharvey', domain: 'hotmail.co.uk' },
  twitter: { handle: '@RamonIHarvey', url: 'https://twitter.com/RamonIHarvey' },
}

export const navItems = [
  { label: 'Home', href: '/#top' },
  { label: 'About', href: '/#about' },
  { label: 'Books', href: '/#books' },
  { label: 'Research', href: '/#research' },
  { label: 'Articles', href: '/#articles' },
  { label: 'Teaching', href: '/#teaching' },
  { label: 'Contact', href: '/#contact' },
]

export const researchInterests = [
  'Islamic theology',
  'Qur\u2019anic studies',
  'Islamic philosophy',
  'Analytic philosophy',
  'Husserlian phenomenology',
  'M\u0101tur\u012Bd\u012B theology',
]

export const education = [
  { degree: 'PhD', institution: 'SOAS, University of London' },
  { degree: 'MA', institution: 'SOAS, University of London' },
  { degree: 'BA', institution: 'University of Nottingham' },
]

/** Ordered stages only — dates intentionally omitted until verified. */
export const journey = [
  { label: 'BA', title: 'University of Nottingham', detail: 'Undergraduate study' },
  { label: 'MA', title: 'SOAS, University of London', detail: 'Postgraduate study' },
  { label: 'PhD', title: 'SOAS, University of London', detail: 'Doctoral research' },
  {
    label: 'Now',
    title: 'Cambridge Muslim College',
    detail: 'Senior Lecturer in Islamic Studies and Academic Lead within the faculty',
  },
]

export type Book = {
  slug: string
  title: string
  subtitle?: string
  /** How Ramon Harvey is credited, e.g. "Author" or "Editor, with Daniel Tutt". */
  role: string
  credit: string
  publisher: string
  year: number
  description: string
  /** Real cover image; when omitted a typographic cover is rendered. */
  cover?: string
  link?: { label: string; href: string }
  extras?: { label: string; href: string }[]
}

export const books: Book[] = [
  {
    slug: 'quran-and-the-just-society',
    title: 'The Qur\u2019an and the Just Society',
    role: 'Author',
    credit: 'Ramon Harvey',
    publisher: 'Edinburgh University Press',
    year: 2018,
    description:
      'A study of the Qur\u2019an\u2019s ethical vision of society, reading its teachings on justice as a coherent scriptural account of social and political life.',
    cover: '/covers/quran-just-society.jpg',
    link: {
      label: 'View Book',
      href: 'https://www.amazon.com/Quran-Just-Society-Ramon-Harvey-ebook/dp/B0C4PPS6NC?ref_=ast_author_dp&th=1&psc=1',
    },
  },
  {
    slug: 'transcendent-god-rational-world',
    title: 'Transcendent God, Rational World',
    subtitle: 'A M\u0101tur\u012Bd\u012B Theology',
    role: 'Author',
    credit: 'Ramon Harvey',
    publisher: 'Edinburgh University Press',
    year: 2021,
    description:
      'A constructive work of systematic theology that draws on the thought of Ab\u016B Man\u1E63\u016Br al-M\u0101tur\u012Bd\u012B and brings it into conversation with contemporary philosophy.',
    cover: '/covers/transcendent-god.jpg',
    link: {
      label: 'View Book',
      href: 'https://www.amazon.com/Transcendent-Rational-World-Ramon-Harvey-ebook/dp/B0C151LLHJ?ref_=ast_author_dp&th=1&psc=1',
    },
    extras: [
      {
        label: 'Introduction (PDF)',
        href: 'https://ramonharvey.com/wp-content/uploads/2021/06/transcendent-god-rational-world-introduction.pdf',
      },
    ],
  },
  {
    slug: 'justice-in-islam',
    title: 'Justice in Islam',
    subtitle: 'New Ethical Perspectives',
    role: 'Editor',
    credit: 'Edited by Ramon Harvey and Daniel Tutt',
    publisher: 'International Institute of Islamic Thought',
    year: 2023,
    description:
      'A collected volume bringing together new ethical perspectives on justice in the Islamic tradition.',
    cover: '/covers/justice-in-islam.jpg',
    link: {
      label: 'View Book',
      href: 'https://www.amazon.es/-/en/Ramon-Harvey-Editor-ebook/dp/B0CYCQHKHT',
    },
  },
  {
    slug: 'kitab-al-tawhid',
    title: 'Kit\u0101b al-Taw\u1E25\u012Bd',
    subtitle: 'The Book of Monotheism',
    role: 'Editor',
    credit: 'Ab\u016B Man\u1E63\u016Br al-M\u0101tur\u012Bd\u012B \u00B7 Translated by Tahir Ulu\u00E7, edited by Ramon Harvey',
    publisher: 'Ibn Haldun University Press',
    year: 2025,
    description:
      'An English translation of al-M\u0101tur\u012Bd\u012B\u2019s foundational theological work, edited with annotations and an introduction by Ramon Harvey.',
    cover: '/covers/kitab-al-tawhid.png',
    link: {
      label: 'View Book',
      href: 'https://www.amazon.com/-/he/Kitab-al-Tawhid-Monotheism-Vol-I-II-Volumes/dp/6256055829',
    },
  },
  {
    slug: 'analytic-islamic-epistemology',
    title: 'Analytic Islamic Epistemology',
    subtitle: 'Critical Debates',
    role: 'Editor',
    credit: 'Edited by Safaruk Chowdhury and Ramon Harvey',
    publisher: 'Edinburgh University Press',
    year: 2025,
    description:
      'The first collected volume to bring the Islamic tradition into sustained dialogue with contemporary analytic epistemology \u2014 a founding document for a new subfield.',
    cover: '/covers/analytic-epistemology.jpg',
    link: {
      label: 'View Book',
      href: 'https://www.amazon.com/Analytic-Islamic-Epistemology-Edinburgh-Scripture/dp/1399533134?ref_=ast_author_dp&th=1&psc=1',
    },
    extras: [
      { label: 'Introduction (JSTOR)', href: 'https://www.jstor.org/stable/10.3366/jj.27775799.5' },
    ],
  },
]

export type ResearchArea = {
  numeral: string
  title: string
  summary: string
  themes: string[]
  /** Publication ids from `publications` that illustrate this area. */
  related: string[]
}

export const researchAreas: ResearchArea[] = [
  {
    numeral: 'I',
    title: 'M\u0101tur\u012Bd\u012B Theology',
    summary:
      'Studies of Ab\u016B Man\u1E63\u016Br al-M\u0101tur\u012Bd\u012B and the development of the theological tradition, from its first reception in Samarqand to constructive theology today.',
    themes: ['Divine action and causality', 'Theory of properties', 'Early reception in Samarqand', 'Constructive kal\u0101m'],
    related: ['art-divine-action', 'art-missing-disciple', 'ch-philosopher-samarqand'],
  },
  {
    numeral: 'II',
    title: 'Qur\u2019anic Studies',
    summary:
      'Research into Qur\u2019anic interpretation, ethics, scripture and intellectual history, including the canonical readings and early exegesis.',
    themes: ['Canonical readings (qir\u0101\u02BE\u0101t)', 'Qur\u2019anic rhetoric', 'Early exegesis', 'Scriptural canonization'],
    related: ['art-idealizing-quran', 'art-legal-epistemology', 'art-sabab'],
  },
  {
    numeral: 'III',
    title: 'Islamic Philosophy & Theology',
    summary:
      'The relationship between rational argument, philosophy and theological reasoning \u2014 in dialogue with analytic philosophy and Husserlian phenomenology.',
    themes: ['Epistemology', 'Phenomenology', 'Philosophy of religion', 'Theology and science'],
    related: ['art-unity-divine-complexity', 'art-what-is-first', 'art-lifeworld'],
  },
  {
    numeral: 'IV',
    title: 'Ethics & Justice',
    summary:
      'Qur\u2019anic ethics, social and political justice, distributive justice, and the moral resources of the Islamic tradition in contemporary debate.',
    themes: ['Qur\u2019anic ethics', 'Social and political justice', 'Islamic law and ethics', 'Islamic reform'],
    related: ['ch-whose-justice', 'art-slavery-indenture', 'ch-quranic-values'],
  },
]

export type PublicationType = 'Book' | 'Article' | 'Chapter' | 'Encyclopaedia' | 'Review' | 'Other'

export type Publication = {
  id: string
  type: PublicationType
  title: string
  year: number
  /** Journal, volume or publisher details exactly as cited. */
  venue: string
  authors: string
  doi?: string
  pdf?: string
  link?: string
  note?: string
  /** Short reader-facing summary, shown on featured article cards. */
  summary?: string
}

export const publicationTypeLabels: Record<PublicationType, string> = {
  Book: 'Books',
  Article: 'Articles',
  Chapter: 'Chapters',
  Encyclopaedia: 'Encyclopaedia Entries',
  Review: 'Reviews',
  Other: 'Other',
}

const up = 'https://ramonharvey.com/wp-content/uploads'

export const publications: Publication[] = [
  // Books
  {
    id: 'book-analytic-epistemology',
    type: 'Book',
    title: 'Analytic Islamic Epistemology: Critical Debates',
    year: 2025,
    venue: 'Edinburgh University Press',
    authors: 'Safaruk Chowdhury and Ramon Harvey (eds.)',
    link: 'https://edinburghuniversitypress.com/book-analytic-islamic-epistemology.html',
  },
  {
    id: 'book-kitab-al-tawhid',
    type: 'Book',
    title: 'Abu Mansur al-Maturidi, Kitab al-Tawhid: The Book of Monotheism',
    year: 2025,
    venue: 'Ibn Haldun University Press',
    authors: 'Tr. Tahir Ulu\u00E7, ed. Ramon Harvey',
    link: 'https://www.kitapyurdu.com/kitap/kitb-altawd-the-book-of-monotheism-2-cilt/721004.html',
  },
  {
    id: 'book-justice-in-islam',
    type: 'Book',
    title: 'Justice in Islam: New Ethical Perspectives',
    year: 2023,
    venue: 'International Institute of Islamic Thought',
    authors: 'Ramon Harvey and Daniel Tutt (eds.)',
    pdf: `${up}/2023/07/justice-in-islam-new-ethical-perspectives-harvey-and-tutt.pdf`,
  },
  {
    id: 'book-transcendent-god',
    type: 'Book',
    title: 'Transcendent God, Rational World: A M\u0101tur\u012Bd\u012B Theology',
    year: 2021,
    venue: 'Edinburgh University Press',
    authors: 'Ramon Harvey',
    link: 'https://edinburghuniversitypress.com/transcendent-god-rational-world.html',
    pdf: `${up}/2021/06/transcendent-god-rational-world-introduction.pdf`,
    note: 'PDF: Introduction',
  },
  {
    id: 'book-quran-just-society',
    type: 'Book',
    title: 'The Qur\u2019an and the Just Society',
    year: 2018,
    venue: 'Edinburgh University Press',
    authors: 'Ramon Harvey',
    link: 'https://edinburghuniversitypress.com/book-the-qur-039-an-and-the-just-society-hb.html',
  },

  // Articles
  {
    id: 'art-unity-divine-complexity',
    type: 'Article',
    title: 'Unity in Divine Complexity: A Paracomplete Constructivist Model',
    year: 2026,
    venue: 'TheoLogica, Online First (2026)',
    authors: 'Ramon Harvey',
    pdf: `${up}/2026/07/ramon-harvey-unity-in-divine-complexity-online-first.pdf`,
    summary:
      'Proposes a paracomplete constructivist model for thinking about divine unity together with complexity in the divine nature.',
  },
  {
    id: 'art-what-is-first',
    type: 'Article',
    title: 'What is First? Islamic First Philosophy and Public Warrant',
    year: 2026,
    venue: 'Philosophy East and West 78, no. 1 (2028)',
    authors: 'Ramon Harvey',
    pdf: `${up}/2026/06/00_harvey_pew_manuscript_early-release-version.pdf`,
    note: 'Early Release version',
    summary:
      'Examines what an Islamic first philosophy might look like and how its claims can be warranted in public discourse.',
  },
  {
    id: 'art-idealizing-quran',
    type: 'Article',
    title: 'Idealizing the Qur\u2019an: A Phenomenological Account of Early Islamic Scriptural Canonization',
    year: 2025,
    venue: 'Journal of the American Academy of Religion (2025): 1\u201315',
    authors: 'Ramon Harvey',
    pdf: `${up}/2025/10/idealizing-the-quran-ramon-harvey.pdf`,
    summary:
      'Offers a phenomenological account of how the Qur\u2019an came to be canonized as scripture in early Islam.',
  },
  {
    id: 'art-divine-action',
    type: 'Article',
    title: 'Al-Maturidi\u2019s Divine Action Model: A Distinctive Concurrentist Account of Causality',
    year: 2025,
    venue: 'Journal of Islamic Philosophy 16, no. 1 (2025): 63\u2013106',
    authors: 'Ramon Harvey and David Solomon Jalajel',
    pdf: `${up}/2025/05/al-maturidis-divine-action-model-harvey-and-jalajel.pdf`,
    summary:
      'Reconstructs al-M\u0101tur\u012Bd\u012B\u2019s model of divine action as a distinctive concurrentist account of causality.',
  },
  {
    id: 'art-lifeworld',
    type: 'Article',
    title:
      'Lifeworld Coherentism and Tradition-Based Perspectivalism: A First and Second-Order Proposal for the Justification of Empirical Beliefs',
    year: 2024,
    venue: 'Philosophia (2024): 1\u201320',
    authors: 'Ramon Harvey',
    pdf: `${up}/2024/10/lifeworld-coherentism-ramon-harvey.pdf`,
    summary:
      'A first- and second-order proposal for justifying empirical beliefs, combining lifeworld coherentism with tradition-based perspectivalism.',
  },
  {
    id: 'art-crisis-science',
    type: 'Article',
    title:
      'Islamic Theology and the Crisis of Contemporary Science: Naquib al-Attas\u2019 \u2018Metaphysical Critique\u2019 and a Husserlian Alternative',
    year: 2023,
    venue: 'Theology and Science (2023): 1\u201317',
    authors: 'Ramon Harvey',
    pdf: `${up}/2023/07/islamic-theology-and-the-crisis-of-contemporary-science-naquib-al-attas-metaphysical-critique-and-a-husserlian-alternative.pdf`,
    summary:
      'Engages Naquib al-Attas\u2019 metaphysical critique of modern science and sets out a Husserlian alternative.',
  },
  {
    id: 'art-mistaken-identity',
    type: 'Article',
    title: 'Mistaken Identity: An Investigation into Abu Hanifa\u2019s al-Fiqh al-akbar',
    year: 2022,
    venue: 'Journal of the American Oriental Society 142, no. 3 (2022): 597\u2013620',
    authors: 'Ramon Harvey',
    pdf: `${up}/2022/10/mistaken-identity-ramon-harvey.pdf`,
    summary: 'An investigation into the text attributed to Ab\u016B \u1E24an\u012Bfa as al-Fiqh al-akbar.',
  },
  {
    id: 'art-missing-disciple',
    type: 'Article',
    title:
      'The Case of the Missing Disciple: Abu l-Hasan al-Rustughfani and the First Reception of al-Maturidi\u2019s Theology in Samarqand',
    year: 2021,
    venue: 'Oriens 49, no. 1 (2021): 95\u2013130',
    authors: 'Ramon Harvey',
    pdf: `${up}/2021/11/the-case-of-the-missing-disciple-oriens-ramon-harvey.pdf`,
  },
  {
    id: 'art-sabab',
    type: 'Article',
    title: 'The sabab \u2013 kh\u0101\u1E63\u1E63 \u2013 \u02BF\u0101mm Process as an Instructional Technique within Qur\u2019anic Rhetoric',
    year: 2020,
    venue: 'Journal of Qur\u2019anic Studies 22, no. 1 (2020): 78\u201391',
    authors: 'Ramon Harvey',
    pdf: `${up}/2020/03/the-sabab-khass-amm-process-ramon-harvey.pdf`,
  },
  {
    id: 'art-slavery-indenture',
    type: 'Article',
    title: 'Slavery, Indenture, and Freedom: Exegesis of the \u2018muk\u0101taba Verse\u2019 (Q. 24:33) in Early Islam',
    year: 2019,
    venue: 'Journal of Qur\u2019anic Studies 21, no. 2 (2019): 68\u2013107',
    authors: 'Ramon Harvey',
    pdf: `${up}/2019/06/ramon-harvey-slavery-indenture-and-freedom.pdf`,
    note: 'Arabic translation by Mostafa El-fekey, Markaz Tafsir li-l-Dir\u0101sa al-Qur\u2019\u0101niyya (2021)',
  },
  {
    id: 'art-legal-epistemology',
    type: 'Article',
    title:
      'The Legal Epistemology of Qur\u2019anic Variants: The Readings of Ibn Mas\u02BF\u016Bd in Kufan Fiqh and the \u1E24anaf\u012B Madhhab',
    year: 2017,
    venue: 'Journal of Qur\u2019anic Studies 19, no. 1 (2017): 72\u2013101',
    authors: 'Ramon Harvey',
    pdf: `${up}/2019/06/readings-of-ibn-masud-ramon-harvey.pdf`,
    note: 'Arabic translation by Muhammad \u2018Abd al-Fattah, Markaz Tafsir li-l-Dir\u0101sa al-Qur\u2019\u0101niyya (2019)',
  },
  {
    id: 'art-revelation-mercy',
    type: 'Article',
    title: 'The Revelation of Mercy in the Light of Islamic Theology',
    year: 2016,
    venue: 'Islamochristiana 42 (2016): 11\u201319',
    authors: 'Ramon Harvey',
    pdf: `${up}/2009/09/mercy-islamochristiana-r-harvey.pdf`,
  },
  {
    id: 'art-kisai',
    type: 'Article',
    title: 'The Preferences of al-Kis\u0101\u02BE\u012B (d. 189/805): Grammar and Meaning in a Canonical Reading of the Qur\u2019an',
    year: 2016,
    venue: 'International Journal for the Semiotics of Law 29, no. 2 (2016): 313\u201332',
    authors: 'Ramon Harvey',
    doi: '10.1007/s11196-016-9463-z',
    pdf: `${up}/2016/02/al-kisai-harvey2016.pdf`,
  },

  // Chapters
  {
    id: 'ch-quran-reform',
    type: 'Chapter',
    title: 'The Qur\u2019an and Islamic Reform',
    year: 2026,
    venue: 'In Emad Hamdeh and Natana J. DeLong-Bas (eds.), The Oxford Handbook of Islamic Reform. New York: Oxford University Press',
    authors: 'Ramon Harvey',
    pdf: `${up}/2026/07/the-quran-and-islamic-reform-ramon-harvey.pdf`,
  },
  {
    id: 'ch-jassas',
    type: 'Chapter',
    title: 'Ab\u016B Bakr A\u1E25mad al-Ja\u1E63\u1E63\u0101\u1E63',
    year: 2026,
    venue:
      'In Georges Tamer (ed.), Handbook of Qur\u2019anic Hermeneutics, Vol. 2: Qur\u02BE\u0101nic Hermeneutics from the 9th to the 12th Century. Berlin: DeGruyter Brill',
    authors: 'Ramon Harvey',
    pdf: `${up}/2026/04/ramon-harvey-abu-bakr-al-jassas.pdf`,
  },
  {
    id: 'ch-maturidi-tradition',
    type: 'Chapter',
    title: 'The M\u0101tur\u012Bd\u012B Tradition: Ab\u016B Man\u1E63\u016Br al-M\u0101tur\u012Bd\u012B',
    year: 2026,
    venue: 'In Shoaib Ahmed Malik (ed.), Seven Classical Perspectives for Islam and Science. Routledge',
    authors: 'Ramon Harvey and Kayhan \u00D6zaykal',
    pdf: `${up}/2026/04/abu-mansur-al-maturidi-harvey-and-ozaykal.pdf`,
  },
  {
    id: 'ch-cause-sabab',
    type: 'Chapter',
    title: 'Al-M\u0101tur\u012Bd\u012B on the Cause (sabab) and Human Action between Kal\u0101m and U\u1E63\u016Bl al-Fiqh',
    year: 2025,
    venue: 'In Idris Nassery and Muna Tatari (eds.), Dynamics of Tradition: Islamic Theology and Law in Relation. Brill',
    authors: 'Ramon Harvey',
    pdf: `${up}/2025/09/al-maturidi-on-the-cause-ramon-harvey.pdf`,
  },
  {
    id: 'ch-wise-design',
    type: 'Chapter',
    title:
      'Wise Design and the Metaphysics of Natural Evil: Al-M\u0101tur\u012Bd\u012B\u2019s Divinely Existentiated and Causally Coherent World',
    year: 2024,
    venue:
      'In E. V. R. Kojonen and Shoaib A. Malik (eds.), Design Discourse in Abrahamic Traditions. London: Routledge, 75\u201390',
    authors: 'Ramon Harvey and David Solomon Jalajel',
    pdf: `${up}/2024/12/wise-design-and-the-metaphysics-of-natural-evil-harvey-and-jalajel.pdf`,
  },
  {
    id: 'ch-whose-justice',
    type: 'Chapter',
    title: 'Whose Justice? When M\u0101tur\u012Bd\u012B Meets MacIntyre',
    year: 2023,
    venue:
      'In Ramon Harvey and Daniel Tutt (eds.), Justice in Islam: New Ethical Perspectives and Global Directions. International Institute of Islamic Thought',
    authors: 'Ramon Harvey',
    pdf: `${up}/2023/07/when-maturidi-meets-macintyre-harvey.pdf`,
  },
  {
    id: 'ch-philosopher-samarqand',
    type: 'Chapter',
    title: 'Philosopher of Samarqand: Ab\u016B Man\u1E63\u016Br al-M\u0101tur\u012Bd\u012B\u2019s Theory of Properties',
    year: 2023,
    venue:
      'In Amber L. Griffioen and Marius Backmann (eds.), Pluralizing Philosophy\u2019s Past. London: Palgrave',
    authors: 'Ramon Harvey',
    pdf: `${up}/2023/07/philosopher-of-samarqand-ramon-harvey.pdf`,
  },
  {
    id: 'ch-quranic-values',
    type: 'Chapter',
    title:
      'Qur\u2019anic Values and Modernity in Contemporary Islamic Ethics: Taha Abderrahmane and Fazlur Rahman in Conversation',
    year: 2020,
    venue:
      'In Mohammed Hashas and Mu\u2019taz al-Khatib (eds.), Islamic Ethics and the Trusteeship Paradigm: Taha Abderrahmane\u2019s Philosophy in Comparative Perspectives. Leiden: Brill',
    authors: 'Ramon Harvey',
    pdf: `${up}/2020/09/qurcabeanic-values-and-modernity-in-contemporary-islamic-ethics-ramon-harvey.pdf`,
  },
  {
    id: 'ch-abrogation',
    type: 'Chapter',
    title: 'Al-M\u0101tur\u012Bd\u012B on the Abrogation of the Shar\u012B\u02BFa in the Qur\u2019an and Previous Scriptures',
    year: 2019,
    venue:
      'In Hatice K. Arpagu\u015F, Mehmet \u00DCmit and Bilal K\u0131r (eds.), \u0130m\u00E2m M\u00E2t\u00FCr\u00EEd\u00EE ve Te\u2019v\u00EEl\u00E2t\u00FC\u2019l-Kur\u2019\u00E2n. Istanbul: M.\u00DC. \u0130l\u00E2hiyat Fak\u00FCltesi Vakf\u0131 Yay\u0131nlar\u0131',
    authors: 'Ramon Harvey',
    pdf: `${up}/2019/10/al-maturidi-on-the-abrogation-of-the-sharia-ramon-harvey.pdf`,
  },

  // Encyclopaedia entries
  {
    id: 'enc-fitra',
    type: 'Encyclopaedia',
    title: 'Primordial Human Nature (fi\u1E6Dra)',
    year: 2024,
    venue: 'St Andrews Encyclopaedia of Theology, ed. Brendan N. Wolfe et al.',
    authors: 'Ramon Harvey',
    link: 'https://www.saet.ac.uk/Islam/PrimordialHumanNature',
  },
  {
    id: 'enc-theology-islamic',
    type: 'Encyclopaedia',
    title: 'Theology, Islamic',
    year: 2024,
    venue:
      'Routledge Resources Online \u2013 Medieval Studies, eds. Hannele Klemettil\u00E4 and Jo Van Steenbergen',
    authors: 'Ramon Harvey',
    doi: '10.4324/9780415791182-RMEO476-1',
    pdf: `${up}/2024/12/theology-islamic-ramon-harvey.pdf`,
  },

  // Reviews
  {
    id: 'rev-mullins',
    type: 'Review',
    title: 'Review of Transcendent God, Rational World: A Maturidi Theology, by R. T. Mullins',
    year: 2024,
    venue: 'Religious Studies (2024)',
    authors: 'R. T. Mullins',
    doi: '10.1017/S0034412524000416',
    pdf: `${up}/2026/01/mullins-review-of-transcendent-god-rational-world.pdf`,
    note: 'Review of Ramon Harvey\u2019s book',
  },
  {
    id: 'rev-sabuni',
    type: 'Review',
    title:
      'Review of An Introduction to Islamic Theology: Imam Nur al-Din al-Sabuni\u2019s Al-Bidayah fi usul al-din, by Faraz A. Khan (Zaytuna College, 2020)',
    year: 2022,
    venue: 'Nazariyat 8, no. 1 (2022), 190\u201394',
    authors: 'Ramon Harvey',
    pdf: `${up}/2024/10/review-of-an-introduction-to-islamic-theology-ramon-harvey.pdf`,
  },
  {
    id: 'rev-aldosari',
    type: 'Review',
    title:
      'Review of Hanafi Maturidism: Trajectories of a Theological Legacy, with a Study and Critical Edition of al-Khabbazi\u2019s Kitab al-Hadi, by Ayedh Aldosari (Equinox Press, 2020)',
    year: 2021,
    venue: 'Ilahiyat Studies 12, no. 1 (2021)',
    authors: 'Ramon Harvey',
    pdf: `${up}/2021/11/ilahiyatstudies06_br_harvey.pdf`,
  },
  {
    id: 'rev-pink',
    type: 'Review',
    title:
      'Review of Muslim Qur\u2019anic Interpretation Today: Media, Genealogies and Interpretive Communities, by Johanna Pink (Equinox Press, 2019)',
    year: 2021,
    venue: 'Journal of Qur\u2019anic Studies 23, no. 1 (2021)',
    authors: 'Ramon Harvey',
    pdf: `${up}/2021/11/jqs.2021.0455.pdf`,
  },
  {
    id: 'rev-archer',
    type: 'Review',
    title:
      'Review of A Place Between Two Places: The Qur\u2019anic Barzakh, by George Archer (Gorgias Press, 2017)',
    year: 2019,
    venue: 'Journal of Islamic Studies, online 1 April 2019',
    authors: 'Ramon Harvey',
    pdf: `${up}/2019/04/review-of-archers-a-place-between-two-places-harvey.pdf`,
  },

  // Other
  {
    id: 'oth-maydan',
    type: 'Other',
    title: 'Introducing \u201CTranscendent God, Rational World: A Maturidi Theology\u201D',
    year: 2021,
    venue: 'The Maydan',
    authors: 'Ramon Harvey',
    link: 'https://themaydan.com/2021/08/introducing-transcendent-god-rational-world-a-maturidi-theology-ramon-harvey/',
  },
  {
    id: 'oth-renovatio',
    type: 'Other',
    title: 'Justice and Mercy on the Scale',
    year: 0,
    venue: 'Renovatio: The Journal of Zaytuna College',
    authors: 'Ramon Harvey',
    link: 'https://renovatio.zaytuna.edu/article/justice-and-mercy-on-the-scale',
  },
  {
    id: 'oth-cib2',
    type: 'Other',
    title: 'Contextualising Islam in Britain II',
    year: 2012,
    venue: 'Cambridge Centre of Islamic Studies',
    authors: 'Participant',
    pdf: `${up}/2013/03/cib2-complete-report.pdf`,
  },
  {
    id: 'oth-halal',
    type: 'Other',
    title: 'Certification of Halal Meat in the UK',
    year: 2011,
    venue: 'Cambridge Centre of Islamic Studies',
    authors: 'Ramon Harvey',
    pdf: `${up}/2009/09/report-certification-of-halal-meat-in-the-uk.pdf`,
  },
  {
    id: 'oth-abdel-haleem',
    type: 'Other',
    title: 'Interview with Professor M. A. S. Abdel Haleem',
    year: 2011,
    venue: 'Perspectives Issue 3, pp. 17\u201320',
    authors: 'Ramon Harvey',
    pdf: `${up}/2009/09/perspectives_issue_3.pdf`,
  },
]

/** Ids shown as reader-oriented cards in the Articles section. */
export const featuredArticleIds = [
  'art-unity-divine-complexity',
  'art-idealizing-quran',
  'art-divine-action',
  'art-what-is-first',
  'art-crisis-science',
  'art-lifeworld',
]

export const teachingAreas = [
  {
    title: 'Islamic Theology',
    detail: 'Taught on the BA programme at Cambridge Muslim College.',
  },
  {
    title: '\u02BFIlm al-Kal\u0101m',
    detail: 'The classical discipline of rational theology, its methods and its debates.',
  },
  {
    title: 'Qur\u2019anic Studies',
    detail: 'Scripture, its readings, its interpretation and its history.',
  },
  {
    title: 'Classical Islamic Intellectual History',
    detail: 'The formation of the theological and legal traditions in their historical settings.',
  },
  {
    title: 'M\u0101tur\u012Bd\u012B Theology',
    detail: 'The thought of al-M\u0101tur\u012Bd\u012B and the school that grew from it.',
  },
]

export const onlineCourse = {
  title: 'History of the Qur\u2019an',
  description: 'An online course taught by Ramon Harvey. Details and sign-up are available on the course page.',
  href: 'https://forms.gle/9d2nj44UFnXjFetu9',
}

export const profileLinks = [
  { label: 'Cambridge Muslim College', href: 'https://www.cambridgemuslimcollege.org' },
  {
    label: 'Edinburgh Studies in Islamic Scripture and Theology',
    href: 'https://edinburghuniversitypress.com/series-edinburgh-studies-in-islamic-scripture-and-theology.html',
  },
  { label: 'Twitter / X \u2014 @RamonIHarvey', href: 'https://twitter.com/RamonIHarvey' },
  { label: 'ramonharvey.com', href: 'https://ramonharvey.com' },
]
