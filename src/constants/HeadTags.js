/* eslint-disable */
// all.scripts: scripts that are used on all pages
// PAGENAME.scripts: scripts that are used on the associated page
// scripts accepts an array of strings that are script URLs to inject into the head of the page.
// PAGENAME.title accepts a string. The string is the title that will be displayed in the browser tab and
// will be displayed when shared on social media.
// title also accepts an array of strings. The first string is the title and the second will be
// displayed when shared on social media. If a 3rd string is provided the 3rd string will be
// displayed when shared on Twitter.
// PAGENAME.description accepts a string. The string is the description that will be displayed in the
// browser tab and will be displayed when shared on social media.
// description also accepts an array of strings. The first string is the description that will
// be displayed when shared on social media. If a 3rd string is provided the 3rd string will be
// displayed when shared on Twitter.
export const HeadTags = {
  all: {
    siteUrl: "https://www.rethinkbronchiectasis.com",
    scripts: [],
  },
  index: {
    title: ["Rethink Bronchiectasis | Educational Website for HCPs", "Learn about bronchiectasis", "Learn about bronchiectasis at Rethink Bronchiectasis"],
    description: [
      "Information and updates about non-cystic fibrosis bronchiectasis for healthcare professionals managing and treating patients with this disease.",
      "Information and updates about non-cystic fibrosis bronchiectasis for healthcare professionals managing and treating patients with this disease.",
      "Information and updates about non-cystic fibrosis bronchiectasis for healthcare professionals managing and treating patients with this disease.",
    ],
    raw: `{"@context":"http://schema.org","@type":"MedicalWebPage","name":"Rethink Bronchiectasis","url":"https://rethinkbronchiectasis.com","description":"Information and updates about non-cystic fibrosis bronchiectasis for healthcare professionals managing and treating patients with this disease.","about":{"@type":"MedicalCondition","name":"Bronchiectasis","naturalProgression":"Neutrophils and neutrophil serine proteases (NSPs) normally help protect the lungs from harm, but in bronchiectasis they can contribute to inflammation and lung destruction. Too many neutrophils releasing an excess of NSPs can cause inflammation—a key component of bronchiectasis with limited treatment options. This neutrophilic inflammation can lead to devastating consequences, including increased exacerbation frequency and disease progression. "},"audience":"Health Care Professionals","publisher":{"@type":"Organization","name":"Insmed Incorporated"}}}`,
  },
  DiseaseOverview: {
    slug : "disease-overview",
    title: [
      "Bronchiectasis Causes, Symptoms, and Exacerbations | Rethink Bronchiectasis",
      "Read an overview about bronchiectasis",
      "Read about bronchiectasis causes, symptoms, and exacerbations",
    ],
    description: "Learn more about non-cystic fibrosis bronchiectasis, including disease background and exacerbation burden.",
    raw: `{"@context":"http://schema.org/","@type":"MedicalCondition","name":"Bronchiectasis","description":"Bronchiectasis is a chronic lung disease usually marked by permanent, abnormal dilation and persistent inflammation of the airways. Bronchiectasis is a chronic and progressive disease often marked by unpredictable exacerbations","signOrSymptom":[{"@type":"MedicalSignOrSymptom","name":"Chronic cough"},{"@type":"MedicalSignOrSymptom","name":"Dyspnea"},{"@type":"MedicalSignOrSymptom","name":" Daily sputum production"},{"@type":"MedicalSignOrSymptom","name":"Fatigue"},{"@type":"MedicalSignOrSymptom","name":"Recurrent infections"},{"@type":"MedicalSignOrSymptom","name":"Hemoptysis"}],"possibleComplication":"Exacerbations play a critical role in bronchiectasis disease progression, with serious consequences for patients. Patients with bronchiectasis often suffer from periods of worsening symptoms, or exacerbations, which contribute to the burden of disease and can affect patients’ quality of life. Although exacerbations are considered separate from daily symptom burdens, many patients view them as a continuum of the disease and a part of daily life. It’s important that patients are educated about the consequences of exacerbations and the appropriate actions to take, including when to seek medical help."}`,
  },
  Pathophysiology: {
    slug : "bronchiectasis-pathophysiology",
    title: [
      "Pathophysiology and Neutrophilic Inflammation | Rethink Bronchiectasis",
      "See bronchiectasis’s pathophysiology",
      "Read about the pathophysiology of bronchiectasis",
    ],
    description:
      "Learn how the 4 primary drivers of non-cystic fibrosis bronchiectasis contribute to disease progression. See more info about neutrophilic inflammation.",
    raw: `{"@context":"http://schema.org/","@type":"MedicalCondition","name":"Bronchiectasis","pathophysiology":"Bronchiectasis has been characterized in scientific literature as a vicious cycle or vortex consisting of 4 primary drivers: chronic airway infection, chronic airway inflammation—primarily neutrophilic, impaired mucociliary clearance, and lung destruction. Within the self-perpetuating cycle of bronchiectasis, each driver can lead to the worsening of the others and contribute to progressive lung damage and exacerbations."}`,
  },
  TakeAction: {
    slug : "take-action",
    title: ["Take Action | Rethink Bronchiectasis", "Learn about bronchiectasis management", "Learn about treatment and management for bronchiectasis"],
    description: [
      "Learn about a multimodal treatment plan for non-cystic fibrosis bronchiectasis, including managing chronic airway infection, chronic airway inflammation, and mucociliary clearance.",
      "Learn about a multimodal treatment plan for non-cystic fibrosis bronchiectasis, including managing chronic airway infection, chronic airway inflammation, and mucociliary clearance.",
      "Learn about a multimodal treatment plan for non-cystic fibrosis bronchiectasis, including managing chronic airway infection, chronic airway inflammation, and mucociliary clearance.",
    ],
    raw: `{"@context":"http://schema.org/","@type":"MedicalCondition","name":"Bronchiectasis","signOrSymptom":[{"@type":"MedicalSignOrSymptom","name":"Chronic airway infection","possibleTreatment":"It’s important to conduct routine sputum collection to identify pathogens causing infection, with susceptibility testing to guide antibiotic choice based on resistance patterns. Based on these results, antibiotic treatment for chronic or acute airway infections should be tailored to each patient’s needs."},{"@type":"MedicalSignOrSymptom","name":"Chronic airway inflammation","possibleTreatment":"There are limited options to treat chronic airway inflammation in bronchiectasis. The inflammatory response is currently managed with oral or inhaled steroids and macrolide antibiotics."},{"@type":"MedicalSignOrSymptom","name":"Impaired mucociliary clearance","possibleTreatment":"Impaired mucociliary clearance, which can cause further bacteria colonization, may be treated using airway clearance techniques and mucoactive therapies."},{"@type":"MedicalSignOrSymptom","name":"Lung destruction","possibleTreatment":"Options for addressing the effects of lung destruction may include pulmonary rehabilitation (eg, physical activity or exercise) or surgery."}]}`,
  },
  StayInformed: {
    slug : "stay-informed",
    title: [
      "Sign Up and Stay Informed | Rethink Bronchiectasis",
      "Sign up for bronchiectasis information",
      "Sign up for bronchiectasis information at RethinkBronchiectasis.com",
    ],
    description:
      "Healthcare professionals can stay informed about non-cystic fibrosis bronchiectasis with additional information by signing up on RethinkBronchiectasis.com.",
    raw: ``,
  },
  Chest2023: {
    slug : "CHEST2023",
    title: [
      "The CHEST 2023 Annual Meeting Information | Rethink Bronchiectasis",
      "Join us at the CHEST Annual Meeting 2023",
      "Join us for an expert discussion at the CHEST Annual Meeting 2023",
    ],
    description: ["Join Insmed’s program to review the latest data describing the clinical course, pathophysiology of bronchiectasis exacerbations, disease progression & patient burden."],
    raw: ``,
  },
  PageNotFound: {
    title: ["Page Not Found | Rethink Bronchiectasis"],
    noIndex: true,
  },
  InternalServerError: {
    title: ["Internal Server Error | Rethink Bronchiectasis"],
    noIndex: true,
  },
  Sitemap: {
    title: ["Site Map | Rethink Bronchiectasis"],
    noIndex: true,
  },
  AccessibilityStatement: {
    title: ["Accessibility Statement | Rethink Bronchiectasis"],
    noIndex: true,
  },
  Unsubscribe: {
    slug : "unsubscribe",
    title: ["Unsubscribe | Rethink Bronchiectasis", "Unsubscribe"],
    description: "Healthcare professionals can unsubscribe from updates and information from RethinkBronchiectasis.com.",
    raw: ``,
  },
  SurveyPage: {
    slug : "survey",
    title: ["Survey | Rethink Bronchiectasis", "Take our survey"],
    description: [
      "Take our survey to tell us which non-cystic fibrosis bronchiectasis topics you’d like to know more about.",
      "We want to hear which non-cystic fibrosis bronchiectasis topics you’re most interested in.",
    ],
    raw: ``,
  },
};
