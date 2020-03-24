export interface EvidenceType {
  name: string;
  evidence: array;
  icon: string;
}

export interface EvidenceTypes {
  MoA: EvidenceType;
  InVitro: EvidenceType;
  InVivo: EvidenceType;
  Human: EvidenceType;
}

export const interventionTypes = [
  {
    id: 1,
    name: "Vaccines",
    description: "RNA vaccines etc",
  },
  { id: 2, name: "Anti-Virals", description: "Antivirals" },
  { id: 3, name: "Anti-Inflammatories", description: "IL-6 inhibitors, etc" },
  { id: 4, name: "Other", description: "Vasodilators etc." },
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
      InVivo: { name: "In Vivo", icon: null },
      Human: {
        name: "Human",
        icon: "check",
        evidence: [
          {
            certaintyIcon: "signal-2",
            icon: "check",
            url:
              "https://www.sciencedirect.com/science/article/pii/S0924857920300996?via%3Dihub",
            title:
              "Hydroxychloroquine and azithromycin as a treatment of COVID-19: results of an open-label non-randomized clinical trial",
          },
        ],
      },
    },
    stages: [2],
  },
  {
    id: 2,
    name: "Lopinavir–Ritonavir",
    description:
      "An investigational nucleotide analog with broad-spectrum antiviral activity.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: { name: "In Vivo", icon: "times" },
      Human: {
        name: "Human",
        icon: "times",
        evidence: [
          {
            certaintyIcon: "signal",
            icon: "times",
            url: "https://www.nejm.org/doi/10.1056/NEJMoa2001282",
            title:
              "A Trial of Lopinavir–Ritonavir in Adults Hospitalized with Severe Covid-19",
          },
        ],
      },
    },
    stages: [2],
  },
  {
    id: 3,
    name: "Inhaled Nitric Oxide",
    description:
      "Role in including vasodilation, inflammation, and neurotransmission.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: {
        name: "In Vitro (indirect)",
        icon: "check",
        evidence: [
          {
            icon: "check",
            url: "https://jvi.asm.org/content/79/3/1966",
            title:
              "Nitric Oxide Inhibits the Replication Cycle of Severe Acute Respiratory Syndrome Coronavirus",
          },
        ],
      },
      InVivo: { name: "In Vivo", icon: null },
      Human: {
        name: "Human (indirect)",
        icon: "check",
        evidence: [
          {
            certaintyIcon: "signal-2",
            icon: "check",
            url: "https://academic.oup.com/cid/article/39/10/1531/460542",
            title:
              "Inhalation of Nitric Oxide in the Treatment of Severe Acute Respiratory Syndrome: A Rescue Trial in Beijing",
          },
        ],
      },
    },
    stages: [2, 3],
  },
  {
    id: 4,
    name: "Bevacizumab",
    description:
      "A recombinant humanized monoclonal antibody directed against the vascular endothelial growth factor (VEGF), a pro-angiogenic cytokine.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [3],
  },
  {
    id: 5,
    name: "Arbidol",
    description:
      "Inhibits fusion between the viral envelope and the cell membrane of the target cell, thus preventing the virus from entering.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: { name: "In Vivo", icon: null },
      Human: {
        name: "Human",
        icon: "question-circle",
        evidence: [
          {
            icon: "check",
            certaintyIcon: "signal-2",
            url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3542148",
            title:
              "Clinical Efficacy of Arbidol in Patients with 2019 Novel Coronavirus-Infected Pneumonia: A Retrospective Cohort Study",
          },
          {
            icon: "minus",
            certaintyIcon: "signal-3",
            url:
              "https://www.medrxiv.org/content/10.1101/2020.03.17.20037432v1",
            title:
              "Favipiravir versus Arbidol for COVID-19: A Randomized Clinical Trial",
          },
        ],
      },
    },
    stages: [2],
  },
  {
    id: 6,
    name: "Aviptadil",
    description:
      "An injectable formulation of vasoactive intestinal polypeptide combined with the adrenergic drug phentolamine.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [4],
  },
  {
    id: 7,
    name: "Azithromycin",
    description:
      "An azalide, derived from erythromycin, and a member of a subclass of macrolide antibiotics with bacteriocidal and bacteriostatic activities.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: { name: "In Vivo", icon: null },
      Human: {
        name: "Human",
        icon: "question-circle",
        evidence: [
          {
            icon: "check",
            certaintyIcon: "signal-1",
            url:
              "https://www.sciencedirect.com/science/article/pii/S0924857920300996?via%3Dihub",
            title:
              "Hydroxychloroquine and azithromycin as a treatment of COVID-19: results of an open-label non-randomized clinical trial",
          },
        ],
      },
    },
    stages: [2],
  },
  {
    id: 8,
    name: "mRNA-1273",
    description:
      "An mRNA vaccine against the novel coronavirus encoding for a prefusion stabilized form of the Spike (S) protein.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [1],
  },
  {
    id: 9,
    name: "Favipiravir",
    description:
      "A pyrazinecarboxamide derivative with activity against RNA viruses. Favipiravir is converted to the ribofuranosyltriphosphate derivative by host enzymes and selectively inhibits the influenza viral RNA-dependent RNA polymerase.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: {
        name: "In Vitro",
        icon: "times",
        evidence: [
          {
            icon: "times",
            url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7054408/",
            title:
              "Remdesivir and chloroquine effectively inhibit the recently emerged novel coronavirus (2019-nCoV) in vitro",
          },
        ],
      },
      InVivo: { name: "In Vivo", icon: null },
      Human: {
        name: "Human",
        icon: "check",
        evidence: [
          {
            icon: "check",
            certaintyIcon: "signal-3",
            url:
              "https://www.sciencedirect.com/science/article/pii/S2095809920300631",
            title:
              "Experimental Treatment with Favipiravir for COVID-19: An Open-Label Control Study",
          },
          {
            icon: "check",
            certaintyIcon: "signal-4",
            url:
              "https://www.medrxiv.org/content/10.1101/2020.03.17.20037432v1",
            title:
              "Favipiravir versus Arbidol for COVID-19: A Randomized Clinical Trial",
          },
        ],
      },
    },
    stages: [2],
  },
  {
    id: 10,
    name: "Remdesivir",
    description:
      "An investigational nucleotide analog with broad-spectrum antiviral activity.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: {
        name: "In Vitro",
        icon: "check",
        evidence: [
          {
            icon: "check",
            url: "https://www.nature.com/articles/s41422-020-0282-0",
            title:
              "Remdesivir and chloroquine effectively inhibit the recently emerged novel coronavirus (2019-nCoV) in vitro",
          },
        ],
      },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [2],
  },
  {
    id: 11,
    name: "Chloroquine",
    description:
      "A 4-aminoquinoline with antimalarial, anti-inflammatory, and potential chemosensitization and radiosensitization activities.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: {
        name: "In Vitro",
        icon: "check",
        evidence: [
          {
            icon: "check",
            url: "https://www.nature.com/articles/s41422-020-0282-0",
            title:
              "Remdesivir and chloroquine effectively inhibit the recently emerged novel coronavirus (2019-nCoV) in vitro",
          },
        ],
      },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [2],
  },
  {
    id: 12,
    name: "Cepharanthine",
    description:
      "Isoquinoline alkaloid from tubers of Stephania; stimulates recovery of immunologic function in lymphatic system.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: {
        name: "In Vitro",
        icon: "check",
        evidence: [
          {
            icon: "check",
            url: "https://www.ncbi.nlm.nih.gov/pubmed/32149769",
            title:
              "Repurposing of clinically approved drugs for treatment of coronavirus disease 2019 in a 2019-novel coronavirus (2019-nCoV) related coronavirus model.",
          },
        ],
      },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [4],
  },
  {
    id: 13,
    name: "Selamectin",
    description: "A broad-spectrum endectocide.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: {
        name: "In Vitro",
        icon: "check",
        evidence: [
          {
            icon: "check",
            url: "https://www.ncbi.nlm.nih.gov/pubmed/32149769",
            title:
              "Repurposing of clinically approved drugs for treatment of coronavirus disease 2019 in a 2019-novel coronavirus (2019-nCoV) related coronavirus model.",
          },
        ],
      },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [4],
  },
  {
    id: 14,
    name: "Mefloquine",
    description:
      "This agent acts as a blood schizonticide and probably exert its actions by interacting with the phospholipid bilayer, thereby interfering with the stability of the cell membrane and causing cell lysis.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: {
        name: "In Vitro",
        icon: "check",
        evidence: [
          {
            icon: "check",
            url: "https://www.ncbi.nlm.nih.gov/pubmed/32149769",
            title:
              "Repurposing of clinically approved drugs for treatment of coronavirus disease 2019 in a 2019-novel coronavirus (2019-nCoV) related coronavirus model.",
          },
        ],
      },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [2],
  },
  {
    id: 15,
    name: "Nitazoxanide",
    description: "A synthetic benzamide with antiprotozoal activity.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: {
        name: "In Vitro",
        icon: "check",
        evidence: [
          {
            icon: "check",
            url: "https://www.nature.com/articles/s41422-020-0282-0.pdf",
            title:
              "Remdesivir and chloroquine effectively inhibit the recently emerged novel coronavirus (2019-nCoV) in vitro",
          },
        ],
      },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [4],
  },
  {
    id: 16,
    name: "Tocilizumab",
    description:
      "A recombinant, humanized IgG1 monoclonal antibody directed against the interleukin-6 receptor (IL-6R) with immunosuppressant activity.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: { name: "In Vivo", icon: null },
      Human: {
        name: "Human",
        icon: "question",
        evidence: [
          {
            confidenceIcon: "signal-1",
            icon: "check",
            url:
              "https://www.ser.es/wp-content/uploads/2020/03/TCZ-and-COVID-19.pdf",
            title:
              "Effective Treatment of Severe COVID-19 Patients with Tocilizumab",
          },
        ],
      },
    },
    stages: [3],
  },
  {
    id: 17,
    name: "Ifenprodil",
    description: "An NMDA receptor antagonist.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: {
        name: "In Vivo (indirect)",
        icon: "check",
        evidence: [
          {
            icon: "check",
            url: "https://www.ncbi.nlm.nih.gov/pubmed/31822599",
            title:
              "Ifenprodil and Flavopiridol Identified by Genomewide RNA Interference Screening as Effective Drugs To Ameliorate Murine Acute Lung Injury after Influenza A H5N1 Virus Infection.",
          },
        ],
      },
      Human: { name: "Human", icon: null },
    },
    stages: [4],
  },
  {
    id: 18,
    name: "Ampligen",
    description:
      "Mismatched double-stranded RNA with 12 cytidines for each uridine in the latter strand.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: {
        name: "In Vivo (indirect)",
        icon: "check",
        evidence: [
          {
            icon: "check",
            url: "https://www.ncbi.nlm.nih.gov/pubmed/17176632",
            title:
              "Evaluation of immunomodulators, interferons and known in vitro SARS-coV inhibitors for inhibition of SARS-coV replication in BALB/c mice.",
          },
        ],
      },
      Human: { name: "Human", icon: null },
    },
    stages: [4],
  },
  {
    id: 19,
    name: "IFN-alpha",
    description:
      "Alpha interferons are cytokines produced by nucleated cells (predominantly natural killer (NK) leukocytes) upon exposure to live or inactivated virus, double-stranded RNA or bacterial products.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      IndirectInVivo: {
        name: "In Vivo (indirect)",
        icon: "check",
        evidence: [
          {
            icon: "check",
            url: "https://www.ncbi.nlm.nih.gov/pubmed/17176632",
            title:
              "Evaluation of immunomodulators, interferons and known in vitro SARS-coV inhibitors for inhibition of SARS-coV replication in BALB/c mice.",
          },
        ],
      },
      Human: { name: "Human", icon: null },
    },
    stages: [3],
  },
  {
    id: 20,
    name: "TZLS-501",
    description: "Reduces interleukin-6 (IL-6) levels in the blood.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [3],
  },
  {
    id: 21,
    name: "TAK-888",
    description:
      "An anti-SARS-CoV-2 polyclonal hyperimmune globulin (H-IG). H-IG works by concentrating the pathogen-specific antibodies from plasma collected from recovered patients. When transferred to a new patient, those antibodies may their immune system respond to the infection.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [2],
  },
  {
    id: 22,
    name: "Siltuximab",
    description:
      "A chimeric, human-murine, monoclonal antibody targeting the pro-inflammatory cytokine interleukin 6 (IL-6), with antitumor and anti-inflammatory activities.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [3],
  },
  {
    id: 23,
    name: "Sarilumab",
    description: "An IL-6 receptor antagonist.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [3],
  },
  {
    id: 24,
    name: "Remestemcel-L",
    description:
      "Human mesenchymal stem cells (MSCs) harvested from bone marrow of healthy adult donors and expanded ex vivo, with potential immunosuppressive application. Allogeneic adult MSCs are hypo-immunogenic due to lack of major histocompatibility II (MHC II) molecule expression, and thereby elicit none or minimal immune response upon intravenous infusion. MSCs are pluripotent, and are capable of being recruited to damaged tissue sites and differentiating along specific lineages when stimulated. Infusion of MSCs results in: a) increased production of anti-inflammatory cytokines, such as interleukin-10, prostaglandin E, and hepatocyte growth factor; b) decreased mononuclear phagocyte expression of indoleamine 2,3,-dioxygenase, which catabolizes L-tryptophan into its metabolites, which in turn contribute to inflammation; and c) modulated dendritic cell maturation and disrupted activities of natural killer cells, CD8+ and CD4+ T cells.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [4],
  },
  {
    id: 25,
    name: "Gimsilumab",
    description:
      "A clinical-stage, fully human anti-granulocyte-macrophage colony stimulating factor (GM-CSF) monoclonal antibody. GM-CSF is a cytokine implicated in many autoimmune disorders that acts as a pro-inflammatory signal, prompting macrophages to launch an immune cascade that ultimately results in tissue damage.",
    evidenceTypes: {
      MoA: { name: "MoA", icon: null },
      InVitro: { name: "In Vitro", icon: null },
      InVivo: { name: "In Vivo", icon: null },
      Human: { name: "Human", icon: null },
    },
    stages: [3],
  },
];
