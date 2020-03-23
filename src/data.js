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
      MoA: { name: "MoA", icon: "check" },
      InVitro: { name: "In Vitro", icon: "check" },
      InVivo: { name: "In Vivo", icon: "question" },
      Human: { name: "Human", icon: "question" },
    },
    stages: [4, 5],
  },
  {
    id: 2,
    name: "Remdesivir",
    description:
      "An investigational nucleotide analog with broad-spectrum antiviral activity.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: "check" },
      InVitro: { name: "In Vitro", icon: "check" },
      InVivo: { name: "In Vivo", icon: "minus" },
      Human: { name: "Human", icon: "times" },
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
