import { createPortal } from "react-dom";
import "./command-menu.css";
import { useEffect, useState } from "react";

const menu_content: RawMenuData = [
  {
    name: "Abastecimentos",
    icon: "icon-IconBWorkFuel-48",
    subModules: [
      {
        name: "Abastecimento TFC",
        icon: null,
        subModules: [],
        entries: [
          {
            name: "Comboios",
            url: "reports/supply/tfc/convoy",
            fatherName: "Abastecimento TFC",
            toolId: 91,
          },
          {
            name: "Máquinas",
            url: "reports/supply/tfc/vehicle",
            fatherName: "Abastecimento TFC",
            toolId: 90,
          },
          {
            name: "Extrato Comboios",
            url: "reports/supply/tfc/convoyExtract",
            fatherName: "Abastecimento TFC",
            toolId: 95,
          },
        ],
      },
    ],
    entries: [
      {
        name: "Abastecimento de Insumos",
        url: "reports/input",
        toolId: 78,
      },
      {
        name: "Abastecimentos",
        url: "reports/supply",
        toolId: 31,
      },
      {
        name: "Abastecimentos de Comboios",
        url: "reports/supplyThird",
        toolId: 69,
      },
      {
        name: "Painel de Abastecimento",
        url: "supply/panel",
        toolId: 143,
      },
    ],
  },
  {
    name: "Administração",
    icon: "icon-IconBSettings-48",
    subModules: [
      {
        name: "Configurações",
        icon: null,
        subModules: [],
        entries: [
          {
            name: "Multifleet Administrador",
            url: "sfPanel",
            fatherName: "Configuração",
            toolId: 153,
          },
          {
            name: "Documentação",
            url: "tools",
            fatherName: "Configuração",
            toolId: 79,
          },
          {
            name: "Formulários",
            url: "messages/forms",
            fatherName: "Configuração",
            toolId: 38,
          },
          {
            name: "Formulários Inteligentes",
            url: "messages/smartforms",
            fatherName: "Configuração",
            toolId: 152,
          },
          {
            name: "Marca de Máquinas",
            url: "vehicles/marks",
            fatherName: "Configuração",
            toolId: 9,
          },
          {
            name: "Mensagens Rápidas (From Garmin)",
            url: "messages/returnquickmessages",
            fatherName: "Configuração",
            toolId: 46,
          },
          {
            name: "Mensagens Rápidas (To Garmin)",
            url: "messages/forwardquickmessages",
            fatherName: "Configuração",
            toolId: 45,
          },
          {
            name: "Modelos de Máquinas",
            url: "vehicles/models",
            fatherName: "Configuração",
            toolId: 8,
          },
          {
            name: "Tipos de Operadores",
            url: "operators/types",
            fatherName: "Configuração",
            toolId: 10,
          },
          {
            name: "Tipos de Alertas",
            url: "alerts/types",
            fatherName: "Configuração",
            toolId: 11,
          },
        ],
      },
    ],
    entries: [
      {
        name: "Centro de custos",
        url: "costs/centers",
        toolId: 18,
      },
      {
        name: "Clientes",
        url: "clients",
        toolId: 1,
      },
      {
        name: "Equações de Rendimento",
        url: "income",
        toolId: 86,
      },
      {
        name: "Equipamentos",
        url: "equips",
        toolId: 4,
      },
      {
        name: "Fornecedores",
        url: "providers",
        toolId: 5,
      },
      {
        name: "Perfis",
        url: "profiles",
        toolId: 2,
      },
      {
        name: "Regional",
        url: "regional",
        toolId: 163,
      },
      {
        name: "Status de Talhões",
        url: "plot/status",
        toolId: 72,
      },
      {
        name: "Usuários",
        url: "users",
        toolId: 3,
      },
    ],
  },
  {
    name: "Comunicação",
    icon: "icon-IconBMessages2-24",
    subModules: [],
    entries: [
      {
        name: "Comandos",
        url: "communication/commands",
        toolId: 68,
      },
      {
        name: "Extrato",
        url: "reports/extract",
        toolId: 59,
      },
      {
        name: "Pacotes Enviados",
        url: "reports/communication/forward",
        toolId: 36,
      },
      {
        name: "Pacotes Recebidos",
        url: "reports/communication/received",
        toolId: 35,
      },
      {
        name: "Teste de Hardware",
        url: "testHardware",
        toolId: 165,
      },
    ],
  },
  {
    name: "Dashboard",
    icon: "icon-IconBDashboard-24",
    subModules: [],
    entries: [
      {
        name: "Dashboard Mecânicos",
        url: "dashboard/mechanics",
        toolId: 130,
      },
      {
        name: "Dashboard Operacional",
        url: "dashboard/operational",
        toolId: 120,
      },
      {
        name: "Dashboard Operadores",
        url: "dashboard/operators",
        toolId: 129,
      },
      {
        name: "Dashboard Ordens de Serviço",
        url: "dashboard/service-order",
        toolId: 144,
      },
      {
        name: "Dashboard PCM",
        url: "dashboard/pcm",
        toolId: 121,
      },
      {
        name: "Metas de Status",
        url: "dashboard/status-goals",
        toolId: 138,
      },
    ],
  },
  {
    name: "Manutenções",
    icon: "icon-IconBMaintenance-48",
    subModules: [],
    entries: [
      {
        name: "Agendamentos",
        url: "maintenance/schedules",
        toolId: 19,
      },
      {
        name: "Atendimento",
        url: "maintenance/directions",
        toolId: 37,
      },
      {
        name: "Categoria de Agendamento",
        url: "maintenance/schedules/categories",
        toolId: 22,
      },
      {
        name: "Manutenções",
        url: "maintenance",
        toolId: 20,
      },
      {
        name: "Ordens de Serviço",
        url: "services/orders",
        toolId: 21,
      },
    ],
  },
  {
    name: "Operacional",
    icon: "icon-IconBOperations-24",
    subModules: [
      {
        name: "Configuração",
        icon: null,
        subModules: [],
        entries: [
          {
            name: "Atividades",
            url: "activities",
            fatherName: "Configuração",
            toolId: 71,
          },
          {
            name: "Cercas",
            url: "fences",
            fatherName: "Configuração",
            toolId: 162,
          },
          {
            name: "Fazenda",
            url: "farms",
            fatherName: "Configuração",
            toolId: 58,
          },
          {
            name: "Implemento",
            url: "implements",
            fatherName: "Configuração",
            toolId: 57,
          },
          {
            name: "Local",
            url: "places",
            fatherName: "Configuração",
            toolId: 73,
          },
          {
            name: "Metas de Operações",
            url: "operations/goals",
            fatherName: "Configuração",
            toolId: 154,
          },
          {
            name: "Operadores",
            url: "operators",
            fatherName: "Configuração",
            toolId: 13,
          },
          {
            name: "Operação",
            url: "operations",
            fatherName: "Configuração",
            toolId: 12,
          },
          {
            name: "Paradas Operacionais",
            url: "stops",
            fatherName: "Configuração",
            toolId: 127,
          },
          {
            name: "Produtos",
            url: "products",
            fatherName: "Configuração",
            toolId: 159,
          },
          {
            name: "Máquinas",
            url: "vehicles",
            fatherName: "Configuração",
            toolId: 14,
          },
        ],
      },
    ],
    entries: [
      {
        name: "Mapa",
        url: "maps",
        toolId: 15,
      },
      {
        name: "Painel Comboios",
        url: "operations/convoy/panel",
        toolId: 94,
      },
      {
        name: "Painel Desempenho",
        url: "operations/performance/panel",
        toolId: 112,
      },
      {
        name: "Painel Operacional",
        url: "operations/control/panel",
        toolId: 39,
      },
      {
        name: "Painel de Contadores",
        url: "operations/counter/panel",
        toolId: 75,
      },
      {
        name: "Painel de Resultados",
        url: "operations/control/resultsPanel",
        toolId: 149,
      },
      {
        name: "Roteiros",
        url: "reports/routes",
        toolId: 166,
      },
      {
        name: "Simulador de Teclado",
        url: "simulator",
        toolId: 55,
      },
      {
        name: "Talhões",
        url: "operations/plots",
        toolId: 67,
      },
    ],
  },
  {
    name: "PCM",
    icon: "icon-IconBMaintenance-48",
    subModules: [
      {
        name: "Relatórios",
        icon: null,
        subModules: [],
        entries: [
          {
            name: "Manutenções",
            url: "reports/emergency",
            fatherName: "PCM Relatórios",
            toolId: 113,
          },
          {
            name: "Atendimentos",
            url: "pcm/reports/calls",
            fatherName: "PCM Relatórios",
            toolId: 104,
          },
          {
            name: "CNM em Aberto",
            url: "pcm/reports/openMaintenances",
            fatherName: "PCM Relatórios",
            toolId: 108,
          },
          {
            name: "Checklist",
            url: "reports/checklist",
            fatherName: "PCM Relatórios",
            toolId: 114,
          },
          {
            name: "Estatísticas",
            url: "pcm/reports/statistics",
            fatherName: "PCM Relatórios",
            toolId: 102,
          },
          {
            name: "Aguard Manuntenção",
            url: "reports/breakdown",
            fatherName: "PCM Relatórios",
            toolId: 115,
          },
        ],
      },
    ],
    entries: [
      {
        name: "Motivos de Manutenção",
        url: "pcm/motives",
        toolId: 124,
      },
      {
        name: "Notas de Manutenção (CNM)",
        url: "pcm/list",
        toolId: 99,
      },
      {
        name: "Ordens de Serviço",
        url: "pcm/services/orders",
        toolId: 100,
      },
      {
        name: "Painel Preventivas",
        url: "pcm/panel/preventive",
        toolId: 107,
      },
      {
        name: "Painel de Ordens de Serviço",
        url: "pcm/panel",
        toolId: 101,
      },
      {
        name: "Planos",
        url: "pcm/plans",
        toolId: 97,
      },
      {
        name: "Programas",
        url: "pcm/program",
        toolId: 98,
      },
    ],
  },
  {
    name: "Relatórios",
    icon: "icon-IconBReport-24",
    subModules: [
      {
        name: "Gerencial",
        icon: null,
        subModules: [],
        entries: [
          {
            name: "Contadores",
            url: "reports/counters",
            fatherName: "Gerencial",
            toolId: 146,
          },
          {
            name: "Contratos",
            url: "reports/contracts",
            fatherName: "Gerencial",
            toolId: 160,
          },
          {
            name: "Disponibilidade Operacional",
            url: "reports/statusOverTime",
            fatherName: "Gerencial",
            toolId: 133,
          },
          {
            name: "Ef. Op Operadores",
            url: "reports/efficiency/operator",
            fatherName: "Gerencial",
            toolId: 89,
          },
          {
            name: "Ef. Op / DM",
            url: "reports/efficiency/evolution",
            fatherName: "Gerencial",
            toolId: 88,
          },
          {
            name: "Histórico de Status",
            url: "reports/statusHistory",
            fatherName: "Gerencial",
            toolId: 106,
          },
          {
            name: "Motor Ligado/Parado",
            url: "reports/engineOnStopped",
            fatherName: "Gerencial",
            toolId: 132,
          },
          {
            name: "Operações por Talhão",
            url: "reports/plot/operation",
            fatherName: "Gerencial",
            toolId: 83,
          },
          {
            name: "KPIs",
            url: "reports/indicators",
            fatherName: "Gerencial",
            toolId: 131,
          },
          {
            name: "Rendimentos",
            url: "reports/income",
            fatherName: "Gerencial",
            toolId: 87,
          },
        ],
      },
      {
        name: "Manutenção",
        icon: null,
        subModules: [],
        entries: [
          {
            name: "Manutenções",
            url: "reports/emergency",
            fatherName: "Manuntenção",
            toolId: 24,
          },
          {
            name: "Checklist",
            url: "reports/checklist",
            fatherName: "Manuntenção",
            toolId: 25,
          },
          {
            name: "Etiquetas de Manutenção",
            url: "reports/cenibra",
            fatherName: "Manuntenção",
            toolId: 111,
          },
          {
            name: "Aguard Manuntenção",
            url: "reports/breakdown",
            fatherName: "Manuntenção",
            toolId: 32,
          },
        ],
      },
      {
        name: "Monitoramento",
        icon: null,
        subModules: [],
        entries: [
          {
            name: "Registro de Acessos",
            url: "reports/logins",
            fatherName: "Monitoramento",
            toolId: 76,
          },
          {
            name: "menu.proximity_alert",
            url: "reports/proximity_alert",
            fatherName: "Monitoramento",
            toolId: 167,
          },
          {
            name: "Alertas",
            url: "reports/alerts",
            fatherName: "Monitoramento",
            toolId: 40,
          },
          {
            name: "Eventos",
            url: "reports/events",
            fatherName: "Monitoramento",
            toolId: 48,
          },
          {
            name: "Excessos de Velocidade",
            url: "reports/speedViolation",
            fatherName: "Monitoramento",
            toolId: 145,
          },
          {
            name: "Registro de Formulários",
            url: "reports/form",
            fatherName: "Monitoramento",
            toolId: 84,
          },
          {
            name: "Histórico de Equipamentos",
            url: "equips/history",
            fatherName: "Monitoramento",
            toolId: 52,
          },
          {
            name: "Horímetro Digitado",
            url: "reports/typedHourmeter",
            fatherName: "Monitoramento",
            toolId: 117,
          },
          {
            name: "Mensagens",
            url: "reports/textMessages",
            fatherName: "Monitoramento",
            toolId: 60,
          },
          {
            name: "Odômetro Digitado",
            url: "reports/typedOdometer",
            fatherName: "Monitoramento",
            toolId: 126,
          },
          {
            name: "Registro de Material de Corte",
            url: "reports/production/materials",
            fatherName: "Monitoramento",
            toolId: 158,
          },
          {
            name: "Roteiro",
            url: "reports/route",
            fatherName: "Monitoramento",
            toolId: 96,
          },
          {
            name: "Registro de Testes",
            url: "reports/test",
            fatherName: "Monitoramento",
            toolId: 63,
          },
        ],
      },
      {
        name: "Operacional",
        icon: null,
        subModules: [],
        entries: [
          {
            name: "Apropriação (Resumo)",
            url: "reports/appropriationResume",
            fatherName: "Operação",
            toolId: 82,
          },
          {
            name: "Arauco",
            url: "reports/arauco",
            fatherName: "Operação",
            toolId: 81,
          },
          {
            name: "Atividades",
            url: "reports/activity",
            fatherName: "Operação",
            toolId: 74,
          },
          {
            name: "BBM",
            url: "reports/bbm",
            fatherName: "Operação",
            toolId: 103,
          },
          {
            name: "Evolução do Horímetro",
            url: "reports/hourmeter/evolution",
            fatherName: "Operação",
            toolId: 53,
          },
          {
            name: "Evolução do Odômetro",
            url: "reports/odometer/evolution",
            fatherName: "Operação",
            toolId: 125,
          },
          {
            name: "IPaper",
            url: "reports/ipaper",
            fatherName: "Operação",
            toolId: 119,
          },
          {
            name: "Motivos de Atraso",
            url: "reports/delayReasons",
            fatherName: "Operação",
            toolId: 164,
          },
          {
            name: "Operação",
            url: "reports/operation",
            fatherName: "Operação",
            toolId: 51,
          },
          {
            name: "Paradas",
            url: "reports/stops",
            fatherName: "Operação",
            toolId: 28,
          },
          {
            name: "Refeição",
            url: "reports/meal",
            fatherName: "Operação",
            toolId: 62,
          },
          {
            name: "Turnos",
            url: "reports/shifts",
            fatherName: "Operação",
            toolId: 26,
          },
        ],
      },
      {
        name: "Produtividade",
        icon: null,
        subModules: [],
        entries: [
          {
            name: "Área Operada",
            url: "reports/production/operatedArea",
            fatherName: "Produtividade",
            toolId: 155,
          },
          {
            name: "Balança",
            url: "reports/production/balance",
            fatherName: "Produtividade",
            toolId: 156,
          },
          {
            name: "Plantma-X",
            url: "reports/production/seedlings",
            fatherName: "Produtividade",
            toolId: 157,
          },
          {
            name: "Produção X Consumo",
            url: "reports/productionVersusConsumption",
            fatherName: "Produtividade",
            toolId: 161,
          },
          {
            name: "Registro de Baldeio",
            url: "reports/travel",
            fatherName: "Produtividade",
            toolId: 50,
          },
          {
            name: "Registro de Carga",
            url: "reports/load",
            fatherName: "Produtividade",
            toolId: 64,
          },
          {
            name: "Registro de Carga BBM",
            url: "reports/loadbbm",
            fatherName: "Produtividade",
            toolId: 122,
          },
          {
            name: "Registro de Descarga",
            url: "reports/unload",
            fatherName: "Produtividade",
            toolId: 77,
          },
          {
            name: "Registro de Descarga BBM",
            url: "reports/unloadbbm",
            fatherName: "Produtividade",
            toolId: 123,
          },
          {
            name: "Registro de Produção",
            url: "reports/production",
            fatherName: "Produtividade",
            toolId: 49,
          },
          {
            name: "Registro de Produção BBM",
            url: "reports/production/bbm",
            fatherName: "Produtividade",
            toolId: 128,
          },
          {
            name: "Registro de Serviços",
            url: "reports/service",
            fatherName: "Produtividade",
            toolId: 61,
          },
          {
            name: "Registro de Transporte",
            url: "reports/trip",
            fatherName: "Produtividade",
            toolId: 93,
          },
          {
            name: "Relatório DdD/CMPC",
            url: "reports/ddd",
            fatherName: "Produtividade",
            toolId: 141,
          },
          {
            name: "Resumo Operativo",
            url: "reports/operatingSummary",
            fatherName: "Produtividade",
            toolId: 147,
          },
          {
            name: "Resumo Produtivo",
            url: "reports/productiveSummary",
            fatherName: "Produtividade",
            toolId: 148,
          },
        ],
      },
    ],
    entries: [
      {
        name: "Aproveitamento",
        url: "reports/productivity",
        toolId: 41,
      },
      {
        name: "Consolidado",
        url: "reports/consolidated",
        toolId: 54,
      },
      {
        name: "Dinâmico",
        url: "reports/dynamic",
        toolId: 70,
      },
      {
        name: "Linha do Tempo",
        url: "reports/timeline",
        toolId: 118,
      },
      {
        name: "Pressão dos Pneus",
        url: "reports/pressure",
        toolId: 92,
      },
    ],
  },
];

type RawMenuData = {
  name: string;
  icon: string;
  subModules: {
    name: string;
    icon: null;
    subModules: never[];
    entries: {
      name: string;
      url: string;
      fatherName: string;
      toolId: number;
    }[];
  }[];
  entries: {
    name: string;
    url: string;
    toolId: number;
  }[];
}[];

type MenuEntries = {
  module: {
    name: string;
    icon: string;
  };
  entries: {
    name: string;
    fatherName?: string;
    url: string;
    toolId: number;
  }[];
};

export function CommandMenu() {
  const [searchVisibility, setSearchVisibility] = useState(true);
  const [content, setContent] = useState(null);
  const menuEntries = menu_content.map((module) => {
    return {
      module: {
        name: module.name,
        icon: module.icon,
      },
      entries: [
        ...module.entries,
        ...module.subModules
          .map((module) => {
            return module.entries.map((entry) => ({
              name: entry.name,
              url: entry.url,
            }));
          })
          .flat(2),
      ],
    } as unknown as MenuEntries;
  });
  const [filteredEntries, setFilteredEntries] =
    useState<MenuEntries[]>(menuEntries);

  useEffect(function getValidDOMPortalElement() {
    setContent(document.querySelector(".content"));
  }, []);

  useEffect(
    function handleKeyboardClose() {
      if (!searchVisibility) return;
      function closeWhenPressEsc(e: KeyboardEvent) {
        const userWantsToClose = e.key === "Escape";
        if (userWantsToClose) handleClose();
      }
      document.body.addEventListener("keydown", closeWhenPressEsc);
      return () =>
        document.body.removeEventListener("keydown", closeWhenPressEsc);
    },
    [searchVisibility]
  );

  useEffect(function handleKeyboardToggle() {
    function closeWhenPressEsc(e: KeyboardEvent) {
      const userWantsToToggle = e.ctrlKey && e.key === "k";
      if (userWantsToToggle) {
        handleToggle();
        e.preventDefault();
      }
    }
    document.body.addEventListener("keydown", closeWhenPressEsc);
    return () =>
      document.body.removeEventListener("keydown", closeWhenPressEsc);
  }, []);

  function handleClose() {
    setSearchVisibility(false);
  }

  function handleToggle() {
    setSearchVisibility((state) => !state);
  }

  function handleSearchFilter(e: InputEvent) {
    const searchValue = (e.currentTarget as HTMLInputElement).value ?? "";
    const searchKeywords = searchValue
      .toLowerCase()
      .split(",")
      .filter((keyword) => keyword);
    setFilteredEntries(() => {
      if (searchKeywords.length === 0) return menuEntries;
      return menuEntries
        .map(({ module, entries: _entries }) => {
          let matchScore = 0;
          const entries = _entries
            .map(({ name, fatherName, url, toolId }) => {
              let matchScore = 0;
              const formattedFatherName = fatherName ? `${fatherName} >` : "";
              const entryText = `${formattedFatherName} ${name}`;
              // biome-ignore lint/complexity/noForEach: <explanation>
              searchKeywords.forEach((keyword) => {
                const searchMatchesEntry = entryText
                  .toLowerCase()
                  .includes(keyword);
                if (searchMatchesEntry) matchScore++;
              });
              return { name, fatherName, score: matchScore, toolId, url };
            })
            .filter(({ score }) => score)
            .sort((a, b) => (a.score > b.score ? -1 : 1));
          // biome-ignore lint/complexity/noForEach: <explanation>
          searchKeywords.forEach((keyword) => {
            const searchMatchesModule = module.name
              .toLowerCase()
              .includes(keyword);
            if (searchMatchesModule) matchScore += 100;
          });
          // biome-ignore lint/complexity/noForEach: <explanation>
          // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
          entries.forEach(({ score }) => (matchScore += score));
          return { module, entries, score: matchScore };
        })
        .filter(({ score }) => score)
        .sort((a, b) => (a.score > b.score ? -1 : 1));
    }) as unknown as MenuEntries[];
  }

  return (
    <>
      <div className="command-menu__toggle_button" onClick={handleToggle}>
        <i className="fa fa-search"></i>
      </div>
      {content &&
        searchVisibility &&
        createPortal(
          <div className="command-menu__modal">
            <div className="command-menu__modal-content">
              <div className="command-menu__header">
                <div className="command-menu__magnifier-icon">
                  <i className="fa fa-search" />
                </div>
                <input
                  className="command-menu__search"
                  placeholder="Pesquisar no menu"
                  onKeyUp={handleSearchFilter}
                />
                <div
                  className="command-menu__close-button"
                  onClick={handleClose}
                >
                  <pre>Esc</pre>
                  <i className="fa fa-close" />
                </div>
              </div>
              <div className="command-menu__results">
                {filteredEntries.map(({ module, entries }) => {
                  return (
                    <div className="command-menu__section" key={module.name}>
                      <div className="command-menu__title">{module.name}</div>

                      {entries.map(
                        (entry: {
                          name: string;
                          fatherName?: string;
                          url: string;
                        }) => {
                          return (
                            <div className="command-menu__link">
                              <div className="command-menu__link-icon">
                                <i
                                  className={`fa fa-bars ${module.icon} icon-menu`}
                                />
                              </div>

                              <div className="command-menu__link-text">
                                {entry.fatherName && (
                                  <span className="command-menu__link-submenu-name">
                                    {entry.fatherName}
                                    {" > "}
                                  </span>
                                )}
                                {entry.name}
                              </div>

                              <div className="command-menu__enter-icon">
                                <i className="fa fa-arrow-left" />
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>,
          content
        )}
    </>
  );
}
