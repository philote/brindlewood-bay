export const SCHEMA_IT = {
  rollFormula: "2d6",
  rollResults: {
    crit: {
      start: 12,
      end: null,
      label: "Successo Critico!",
    },
    success: {
      start: 10,
      end: 11,
      label: "Successo!",
    },
    partial: {
      start: 7,
      end: 9,
      label: "Successo Parziale",
    },
    failure: {
      start: null,
      end: 6,
      label: "Mancato...",
    },
  },
  actorTypes: {
    character: {
      stats: {
        vitality: {
          label: "Vigore",
          value: 0,
        },
        composure: {
          label: "Contegno",
          value: 0,
        },
        reason: {
          label: "Raziocinio",
          value: 0,
        },
        presence: {
          label: "Portamento",
          value: 0,
        },
        sensitivity: {
          label: "Sensitività",
          value: 0,
        },
      },
      attrTop: {
        style: {
          label: "Stile",
          description: "Scegline uno o inventane uno.",
          customLabel: false,
          userLabel: false,
          type: "LongText",
          value: "",
        },
        cozyactivity: {
          label: "Attività confortevole",
          description: "Due personaggi non possono avere la stessa attività confortevole.",
          customLabel: false,
          userLabel: false,
          type: "LongText",
          value: "",
        },
        xp: {
          label: "Traccia XP",
          description:
            "Per ogni domanda di Fine Sessione a cui rispondi 'sì', segna un XP.",
          customLabel: false,
          userLabel: false,
          type: "Xp",
          value: 0,
          max: 5,
          steps: [false, false, false, false, false],
        },
        conditions: {
          label: "Condizioni",
          description: null,
          customLabel: false,
          userLabel: false,
          type: "LongText",
          value: "",
        },
      },
      attrLeft: {
        endofsession: {
          label: "Fine della sessione",
          description:
            "La prima domanda è sempre spuntata. Spuntane altre due a inizio sessione (per un totale di 3).",
          customLabel: false,
          userLabel: false,
          type: "ListMany",
          condition: false,
          options: {
            0: {
              label: "Le Signore del Giallo hanno risolto un mistero?",
              value: false,
            },
            1: {
              label:
                "Hai segretamente messo in discredito un’autorità locale?",
              value: false,
            },
            2: {
              label: "Hai condiviso la tua saggezza con una persona più giovane?",
              value: false,
            },
            3: {
              label: "Hai condiviso il ricordo di un compianto familiare?",
              value: false,
            },
            4: {
              label: "Ti sei comportata come una donna con la metà dei tuoi anni?",
              value: false,
            },
            5: {
              label: "Hai spupazzato qualcuno come un nipotino?",
              value: false,
            },
            6: {
              label: "Hai dato dimostrazione di essere ancora in gamba?",
              value: false,
            },
          },
        },
        crownqueen: {
          label: "Corona della Regina",
          description:
            "Quando indossi questa corona, aggiungi una spunta e racconta quello che vuoi.",
          customLabel: false,
          userLabel: false,
          type: "ListMany",
          condition: false,
          options: {
            0: {
              label: "Un flashback del più bel ricordo che hai del tuo partner che non c’è più.",
              value: false,
            },
            1: {
              label:
                "Un flashback che mostra in che modo tu sia stata una sorella o una figlia imperfetta.",
              value: false,
            },
            2: {
              label: "Un flashback che mostra in che modo tu sia stata una madre imperfetta.",
              value: false,
            },
            3: {
              label: "Un flashback del più bel ricordo che hai con uno dei tuoi figli.",
              value: false,
            },
            4: {
              label: "Una scena ambientata nel presente che mostri l’inizio di una storia d’amore.",
              value: false,
            },
            5: {
              label: "Una scena ambientata nel presente che mostri come soddisfi i tuoi bisogni fisici.",
              value: false,
            },
          },
        },
        crownvoid: {
          label: "La Corona del Vuoto",
          description: "Quando indossi questa corona, aggiungi una spunta alla prima casella vuota e applica la regola indicata.",
          customLabel: false,
          userLabel: false,
          type: "ListMany",
          condition: false,
          options: {
            0: {
              label:
                "Un’ombra nel giardino: da questo momento in poi, durante le tue 'scene confortevoli' e tutti gli usi della mossa Coccolarsi che ti coinvolgono, dovrai anche raccontare come delle entità oscure si stiano discretamente rivelando.",
              value: false,
            },
            1: {
              label:
                "Il Carro: il tuo modificatore di Raziocinio è ridotto di 1 punto, quello di Sensitività è aumentato di 1 punto.",
              value: false,
            },
            2: {
              label:
                "La Maschera cinerea: da questo momento in poi, durante tutte le conversazioni intime con un altro personaggio, qualsiasi sia l’argomento trattato, dovrai fare un incidentale riferimento alla morte, all’aldilà o alla fine di ogni cosa.",
              value: false,
            },
            3: {
              label:
                "Il Seme di melagrana: ottieni la condizione 'Ossessionata dal Vuoto'. Non potrà mai essere rimossa.",
              value: false,
            },
            4: {
              label:
                "Il Vuoto: rimuovi dalla partita il tuo personaggio in un modo che mostri come si sia perso nel Vuoto.",
              value: false,
            },
          },
        },
        advancement: {
          label: "Avanzamenti",
          description: null,
          customLabel: false,
          userLabel: false,
          type: "ListMany",
          condition: false,
          options: {
            0: {
              label: "Aggiungi 1 punto ad un’abilità (potrà essere al più pari a 3).",
              value: false,
            },
            1: {
              label: "Aggiungi una nuova mossa delle Signore.",
              value: false,
            },
            2: {
              label: "Togli la spunta a tutti gli oggetti del tuo posticino confortevole.",
              value: false,
            },
          },
        },
      },
      moveTypes: {
        basic: {
          label: "Mosse di Base",
          moves: [],
        },
        class: {
          label: "Mosse delle Signore",
          moves: [],
        },
      },
      equipmentTypes: {
        cozyplace: {
          label: "Il Mio Posticino Confortevole",
          moves: [],
        },
      },
    },
  },
};
