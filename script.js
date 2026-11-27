(function () {
  // English text lives in index.html (default). Danish translations live here.
  var DA = {
    'skip': 'Gå til indhold',
    'nav.about': 'Om mig',
    'nav.skills': 'Kompetencer',
    'nav.exp': 'Erfaring',
    'nav.projects': 'Projekter',
    'nav.cert': 'Certificeringer',
    'nav.edu': 'Uddannelse',
    'nav.site': 'Dette site',
    'nav.contact': 'Kontakt',
    'hero.hello': 'Hej, jeg er',
    'hero.lead': 'IT-support og kvalitetssikring med over ti års praktisk erfaring. Jeg supporterer brugere og udstyr med Microsoft 365, Entra ID og ServiceNow og automatiserer regressions- og API-test med Cypress, TypeScript og Postman.',
    'hero.loc': 'Taastrup, Danmark',
    'hero.cta': 'Kontakt mig',
    'hero.cv': 'Se QA-CV',
    'hero.cv2': 'Se IT-support-CV',
    'about.t': 'Om mig',
    'about.p': 'IT-supporter og QA Engineer med over ti års erfaring i IT. Jeg startede i field engineering og 1. og 2. level support og gik videre til applikationssupport og kvalitetssikring hos Sapiens. Jeg administrerer brugere, udstyr og adgange i Microsoft 365, Entra ID og Active Directory og automatiserer regressions- og REST API-test med Cypress og Postman. Jeg har baggrund i applikationssupport og kender derfor kundernes problemer fra supportsiden, fordi jeg i mange år har genskabt og løst dem.',
    'stat.1': 'i IT siden',
    'stat.2': 'år hos Sapiens',
    'stat.3': 'Microsoft-certificeringer',
    'stat.4': 'Datalogi',
    'skills.t': 'Kompetencer',
    'sk.1': 'Test og automatisering',
    'sk.2': 'Data og CI/CD',
    'sk.3': 'Cloud og identitet',
    'sk.4': 'Værktøjer og support',
    'sk.5': 'IT-support og udstyr',
    'chip.onb': 'On- og offboarding',
    'chip.dep': 'Udrulning af Windows og macOS',
    'chip.net': 'LAN/WAN og netværksudstyr',
    'chip.sec': 'Wazuh SIEM (hjemmelab)',
    'chip.scr': 'Python og shell-scripting',
    'chip.cmdb': 'CMDB og asset management',
    'chip.kb': 'Dokumentation i vidensbase',
    'chip.apitest': 'API-test',
    'chip.reg': 'Regressionstest',
    'chip.man': 'Manuel test',
    'chip.ai': 'AI-understøttet test (Claude Code)',
    'chip.ora': 'Oracle DB-validering',
    'chip.data': 'Generering af testdata',
    'chip.sup': '1. og 2. level IT-support',
    'exp.t': 'Erhvervserfaring',
    'exp.1.when': 'Dec 2025 – okt 2026',
    'exp.1.1': 'Udførte regressionstest for at sikre applikationens stabilitet efter releases',
    'exp.1.2': 'Udviklede og vedligeholdt Cypress end-to-end-test i TypeScript på tværs af flere webapplikationer med Page Object Model og genbrugelige testhjælpere',
    'exp.1.3': 'Verificerede data i Oracle-databasen som en del af UI- og API-test',
    'exp.1.4': 'Lavede Allure-testrapporter og kørte testsuiter mod flere testmiljøer',
    'exp.1.5': 'Brugte Claude AI (Claude Code) til at skrive og gennemgå Cypress-test hurtigere, hvor hver test blev gennemgået af et menneske, før den blev tilføjet',
    'exp.1.6': 'Overvågede automatiserede testpipelines i Jenkins',
    'exp.1.7': 'Testede REST API-endpoints med Postman',
    'exp.tools': 'Værktøjer:',
    'exp.2.1': 'Applikationssupport til kunder',
    'exp.2.2': 'Hjalp, fejlsøgte og gav teknisk vejledning til kunder med forsikringssoftware, med eskalering ved behov',
    'exp.2.3': 'Overvågede Datadog-alarmer for kunders cloudmiljøer',
    'exp.2.4': 'Genskabte fejl rapporteret af kunder og fulgte dem til eskalering i ServiceNow og Jira',
    'exp.2.5': 'Opdaterede vidensbasen med tekniske guides og tips',
    'exp.2.6': 'Styring af hotfix-releases',
    'exp.3.1': '1. og 2. level IT-support og onboarding af nye medarbejdere',
    'exp.3.2': 'Image og udrulning af Windows/macOS-enheder, overvåget via VMware Workspace ONE',
    'exp.3.3': 'ServiceNow-dashboards, dokumentation og asset management i CMDB',
    'exp.3.4': 'Active Directory, Slack, Okta, Google Workspace og Citrix',
    'exp.3.5': 'Skrev og vedligeholdt vidensbase-manualer til IT-helpdesken',
    'exp.3.6': 'Udrullede og klargjorde 150 enheder til vinter-OL',
    'exp.4.1': '1. og 2. level IT-support (J.P. Morgan / Nielsen Media / Club Car / Dentsu)',
    'exp.4.2': 'Microsoft i Lyngby: hardwarefejlsøgning på den 84 tommer store Microsoft Surface Hub',
    'exp.4.4': 'LAN- og WAN-support, montering af routere samt installation og fejlsøgning af computere, drivere og software',
    'exp.4.5': 'Foot Locker: udrullede Dell OptiPlex-maskiner med Windows 10; Nordea: rack og stack af Cisco-routere',
    'exp.4.3': 'Nike i Herlev og Ringsted: installation af HP-kasseoptællere, site surveys og vedligeholdelse',
    'proj.t': 'Projekter',
    'proj.intro': 'Personlige øveprojekter, lavet i min fritid. De bruger offentlige øvesider og indeholder ingen kode fra min arbejdsgiver.',
    'proj.1.d': 'En lille app, der er testet på flere niveauer: unit, API, UI, tilgængelighed, sikkerhed og en simpel belastningstest. De samme brugerforløb er skrevet i både Playwright og Cypress, med en GitHub Actions-pipeline.',
    'proj.1.l': 'Se project-demo på GitHub →',
    'proj.2.d': 'API- og UI-test af offentlige øvesider i Playwright, Cypress og Newman. Playwright API-testene dækker login, oprettelse, opdatering, sletning, forbudte kald og ugyldige data, og hver test rydder op efter sig selv. Køres af en Jenkins-pipeline på min egen Ubuntu-server med Allure-rapporter.',
    'proj.3.h': 'Hjemmelab til sikkerhedsdrift (under udvikling)',
    'proj.3.d': 'Et Wazuh SIEM (manager, indexer og dashboard) på en virtuel Ubuntu Server-maskine med en agent på en Linux-applikationsserver, der sender system- og applikationslogs. Næste skridt: simulere angreb fra en Kali Linux VM og undersøge alarmerne i Wazuh.',
    'proj.2.l': 'Se jenkin på GitHub →',
    'proj.2.l2': 'Se testrapporter →',
    'cert.t': 'Certificeringer',
    'edu.t': 'Uddannelse og sprog',
    'edu.h': 'Uddannelse',
    'edu.deg': 'M.S. i datalogi',
    'edu.uni': 'Blekinge Tekniska Högskola (Sverige), 2011',
    'lang.h': 'Sprog',
    'lang.en': 'Engelsk',
    'lang.en.l': 'Professionelt',
    'lang.da': 'Dansk',
    'lang.da.l': 'Mellemniveau',
    'site.t': 'Om dette site',
    'site.p': 'Siden er testet og udrullet som et rigtigt projekt. Hver push kører automatiske Playwright-test på desktop og mobil Chrome, og siden bliver kun udgivet, hvis de består.',
    'flow.1': 'git push til main',
    'site.link': 'Se kildekoden på GitHub →',
    'con.t': 'Kontakt',
    'con.p': 'Åben for nye roller inden for IT-support, IT-drift og QA/testautomatisering og kan starte med det samme. Skriv gerne, hvis du vil snakke om IT-support, QA, testautomatisering eller IT-kvalitet.',
    'con.loc': 'Taastrup, Danmark',
    'con.dl': 'Download CV – QA (PDF)',
    'con.dl2': 'Download CV – IT-support (PDF)'
  };
  var TITLE = { en: document.title, da: 'M. Sajjad – IT-supporter og QA Engineer' };
  var metaEl = document.querySelector('meta[name="description"]');
  var META = {
    en: metaEl.getAttribute('content'),
    da: 'Profil for M. Sajjad, IT-supporter og QA Engineer i Taastrup, Danmark. Microsoft 365, Entra ID, ServiceNow, Cypress, TypeScript, Postman og regressionstest.'
  };

  var nodes = document.querySelectorAll('[data-i18n]');
  var EN = {};
  nodes.forEach(function (el) { EN[el.dataset.i18n] = el.textContent; });

  function setLang(lang) {
    var dict = lang === 'da' ? DA : EN;
    nodes.forEach(function (el) {
      var v = dict[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });
    document.documentElement.lang = lang;
    document.title = TITLE[lang];
    metaEl.setAttribute('content', META[lang]);
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (saved === 'da') setLang('da');
})();
