export interface EvidenceTypes {
  MoA: object;
  InVitro: object;
  InVivo: object;
  Human: object;
}

export interface EvidenceType {
  icon: string;
}

export const clinicalCourse = [
  {
    id: 1,
    name: "Pre-Exposure",
    description: "Vaccines and to a lesser extent antivirals",
  },
  { id: 2, name: "Infected", description: "Antivirals" },
  { id: 3, name: "Symptomatic", description: "Antivirals" },
  { id: 4, name: "Severe", description: "Anti-inflammatories, vasodilators" },
  { id: 5, name: "Critical", description: "Anti-inflammatories, vasodilators" },
];

export const interventions = [
  {
    id: 1,
    name: "Hydroxychloroquine",
    description:
      "Has immunosuppressive, antiautophagy, and antimalarial activities.",
    evidenceTypes: {
      MoA: {
        name: "MoA",
        icon: "check",
        evidence: [
          {
            icon: "check",
            url:
              "https://www.sciencedirect.com/science/article/pii/S0924857920300959?via%3Dihub",
            title:
              "Aminoquinolines Against Coronavirus Disease 2019 (COVID-19): Chloroquine or Hydroxychloroquine",
          },
        ],
      },
      InVitro: {
        name: "In Vitro",
        icon: "check",
        evidence: [
          {
            icon: "check",
            url:
              "https://academic.oup.com/cid/advance-article/doi/10.1093/cid/ciaa237/5801998",
            title:
              "In Vitro Antiviral Activity and Projection of Optimized Dosing Design of Hydroxychloroquine for the Treatment of Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2)",
          },
        ],
      },
      InVivo: { name: "In Vivo", icon: "question" },
      Human: {
        name: "Human",
        icon: "question",
        evidence: [
          {
            url:
              "https://www.sciencedirect.com/science/article/pii/S0924857920300996?via%3Dihub",
            title:
              "Hydroxychloroquine and azithromycin as a treatment of COVID-19: results of an open-label non-randomized clinical trial",
          },
        ],
      },
    },
    stages: [4, 5],
  },
  {
    id: 2,
    name: "Lopinavir–Ritonavir",
    description:
      "An investigational nucleotide analog with broad-spectrum antiviral activity.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: "check" },
      InVitro: { name: "In Vitro", icon: "check" },
      InVivo: { name: "In Vivo", icon: "minus" },
      Human: {
        name: "Human",
        icon: "times",
        evidence: [
          {
            icon: "times",
            url: "https://www.nejm.org/doi/10.1056/NEJMoa2001282",
            title:
              "A Trial of Lopinavir–Ritonavir in Adults Hospitalized with Severe Covid-19",
          },
        ],
      },
    },
    stages: [3, 4, 5],
  },
  {
    id: 3,
    name: "Nitric Oxide",
    description:
      "Role in including vasodilation, inflammation, and neurotransmission.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: "check" },
      InVitro: { name: "In Vitro", icon: "check" },
      InVivo: { name: "In Vivo", icon: "minus" },
      Human: { name: "Human", icon: "times" },
    },
    stages: [4, 5],
  },
  {
    id: 4,
    name: "Bevacizumab",
    description:
      "A recombinant humanized monoclonal antibody directed against the vascular endothelial growth factor (VEGF), a pro-angiogenic cytokine.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: "check" },
      InVitro: { name: "In Vitro", icon: "check" },
      InVivo: { name: "In Vivo", icon: "minus" },
      Human: { name: "Human", icon: "times" },
    },
    stages: [4, 5],
  },
  {
    id: 5,
    name: "Arbidol",
    description:
      "Inhibits fusion between the viral envelope and the cell membrane of the target cell, thus preventing the virus from entering.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: "check" },
      InVitro: { name: "In Vitro", icon: "check" },
      InVivo: { name: "In Vivo", icon: "minus" },
      Human: { name: "Human", icon: "times" },
    },
    stages: [2, 3, 4, 5],
  },
  {
    id: 6,
    name: "Aviptadil",
    description:
      "An injectable formulation of vasoactive intestinal polypeptide combined with the adrenergic drug phentolamine.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: "check" },
      InVitro: { name: "In Vitro", icon: "check" },
      InVivo: { name: "In Vivo", icon: "minus" },
      Human: { name: "Human", icon: "times" },
    },
    stages: [4, 5],
  },
  {
    id: 7,
    name: "Azithromycin",
    description:
      "An azalide, derived from erythromycin, and a member of a subclass of macrolide antibiotics with bacteriocidal and bacteriostatic activities.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: "check" },
      InVitro: { name: "In Vitro", icon: "check" },
      InVivo: { name: "In Vivo", icon: "minus" },
      Human: { name: "Human", icon: "times" },
    },
    stages: [2, 3, 4, 5],
  },
  {
    id: 8,
    name: "mRNA-1273",
    description:
      "An mRNA vaccine against the novel coronavirus encoding for a prefusion stabilized form of the Spike (S) protein.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: "check" },
      InVitro: { name: "In Vitro", icon: "check" },
      InVivo: { name: "In Vivo", icon: "minus" },
      Human: { name: "Human", icon: "times" },
    },
    stages: [1],
  },
];
