"use client";
import { useState } from "react";

function Card({ titulo, valor }) {
  return (
    <div className="bg-white rounded-[28px] p-7 shadow-lg border border-slate-100">
      <p className="text-slate-500 text-sm mb-2">{titulo}</p>
      <h2 className="text-4xl font-bold text-slate-800">{valor}</h2>
    </div>
  );
}

export default function DashboardEnergiaSolar() {
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [senha, setSenha] = useState("");
  const [autenticado, setAutenticado] = useState(false);

  const meses = [
    "Out/24",
    "Nov/24",
    "Dez/24",
    "Jan/25",
    "Fev/25",
    "Mar/25",
    "Abr/25",
    "Mai/25",
    "Jun/25",
    "Jul/25",
    "Ago/25",
    "Set/25",
    "Out/25",
    "Nov/25",
    "Dez/25",
    "Jan/26",
    "Fev/26",
    "Mar/26",
    "Abr/26",
  ];

  const clientes = [
    {
      nome: "Loja 2",
      consumo: [789,810,840,910,950,980,1020,1040,1080,1120,1140,1160,1180,1200,1210,1220,1230,1240,1250],
      compensada: [759,780,810,870,920,940,980,1000,1040,1080,1100,1120,1140,1160,1170,1180,1190,1200,1210],
      cosern: [33,40,42,45,48,50,53,54,56,58,60,61,63,65,66,67,68,69,70],
      economia: [210,180,196,246,274,294,326,336,364,393,406,420,433,447,453,460,466,473,480],
    },
    {
      nome: "Loja 3",
      consumo: [988,1040,1120,1180,1240,1360,1420,1460,1490,1510,1540,1580,1620,1660,1700,1750,1800,1840,1890],
      compensada: [958,990,1080,1130,1200,1290,1380,1400,1440,1460,1490,1520,1560,1600,1640,1680,1720,1760,1810],
      cosern: [33,54,61,72,88,94,106,110,114,116,120,122,124,126,128,132,136,140,144],
      economia: [260,298,344,372,404,479,533,549,568,581,600,618,637,655,674,698,722,746,772],
    },
    {
      nome: "Rua Alberto Silva",
      consumo: [1320,1440,1510,1620,1740,1860,1980,2050,2100,2180,2240,2290,2350,2400,2440,2480,2520,2550,2580],
      compensada: [1260,1380,1450,1540,1680,1780,1900,1980,2040,2120,2180,2230,2290,2340,2380,2420,2460,2490,2520],
      cosern: [102,118,121,140,152,166,178,184,190,194,198,202,206,210,214,218,222,226,230],
      economia: [250,332,387,463,560,647,726,758,786,822,856,888,920,954,980,1006,1033,1054,1078],
    },
    {
      nome: "Loja Prudente",
      consumo: [1775,2010,1680,1840,1990,2210,2088,2144,1980,2020,2150,2090,2240,2300,2210,2390,2440,2480,2510],
      compensada: [1675,1074,1600,1760,1920,2100,2010,2080,1900,1980,2100,2030,2180,2210,2140,2310,2380,2410,2450],
      cosern: [114,1086,420,398,510,488,450,472,490,501,520,530,560,580,610,620,640,650,670],
      economia: [420,380,256,300,402,491,437,455,514,534,564,558,602,608,579,656,694,724,737],
    },
  ];

  const fazerLogin = () => {
    if (senha === "123") {
      setAutenticado(true);
    } else {
      alert("Senha inválida");
    }
  };

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
        {!clienteSelecionado ? (
          <div className="max-w-6xl w-full bg-white rounded-[32px] shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-950 to-blue-700 p-10 text-white">
              <h1 className="text-5xl font-bold">Portal Solar</h1>
              <p className="text-blue-100 text-xl mt-3">
                Selecione o cliente para acessar
              </p>
            </div>

            <div className="p-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {clientes.map((cliente) => (
                <button
                  key={cliente.nome}
                  onClick={() => setClienteSelecionado(cliente.nome)}
                  className="bg-white border border-slate-200 rounded-[28px] p-8 text-left hover:border-blue-500 hover:shadow-xl transition"
                >
                  <h2 className="text-2xl font-bold text-slate-800">
                    {cliente.nome}
                  </h2>

                  <p className="text-slate-500 mt-3">
                    Clique para entrar
                  </p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white w-full max-w-md rounded-[32px] shadow-2xl p-10 border border-slate-200">
            <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">
              {clienteSelecionado}
            </h1>

            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-lg"
            />

            <button
              onClick={fazerLogin}
              className="w-full mt-5 bg-gradient-to-r from-blue-900 to-blue-600 text-white py-4 rounded-2xl text-lg font-bold"
            >
              Entrar
            </button>

            <button
              onClick={() => setClienteSelecionado(null)}
              className="w-full mt-3 border border-slate-300 text-slate-700 py-4 rounded-2xl text-lg font-semibold"
            >
              Voltar
            </button>
          </div>
        )}
      </div>
    );
  }

  const cliente = clientes.find((c) => c.nome === clienteSelecionado);

  const consumoTotal = cliente.consumo.reduce((a, b) => a + b, 0);
  const compensadaTotal = cliente.compensada.reduce((a, b) => a + b, 0);
  const cosernTotal = cliente.cosern.reduce((a, b) => a + b, 0);
  const economiaTotal = cliente.economia.reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-slate-500">Cliente logado</p>
            <h2 className="text-2xl font-bold">{cliente.nome}</h2>
          </div>

          <button
            onClick={() => {
              setAutenticado(false);
              setClienteSelecionado(null);
              setSenha("");
            }}
            className="bg-white border border-slate-300 px-6 py-4 rounded-2xl font-bold"
          >
            Voltar para Login
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <Card titulo="Energia Consumida" valor={`${consumoTotal.toLocaleString()} kWh`} />
          <Card titulo="Energia Compensada" valor={`${compensadaTotal.toLocaleString()} kWh`} />
          <Card titulo="Pago à Cosern" valor={`R$ ${cosernTotal.toLocaleString()}`} />
          <Card titulo="Economia Total" valor={`R$ ${economiaTotal.toLocaleString()}`} />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-200">
            <h2 className="text-3xl font-bold mb-8">Consumo de Energia</h2>

            <div className="overflow-x-auto">
              <div className="min-w-[1400px] h-[320px] flex items-end gap-4">
                {cliente.consumo.map((valor, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <span className="text-xs font-bold">{valor} kWh</span>

                    <div
                      className="w-full rounded-t-[18px] bg-gradient-to-t from-blue-900 to-blue-400"
                      style={{ height: `${valor / 8}px` }}
                    />

                    <span className="text-xs text-center">{meses[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-200">
            <h2 className="text-3xl font-bold mb-8">Economia do Cliente</h2>

            <div className="overflow-x-auto">
              <div className="min-w-[1400px] h-[320px] flex items-end gap-4">
                {cliente.economia.map((valor, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <span className="text-xs font-bold text-green-700">
                      R$ {valor}
                    </span>

                    <div
                      className="w-full rounded-t-[18px] bg-gradient-to-t from-green-700 to-green-300"
                      style={{ height: `${valor / 3}px` }}
                    />

                    <span className="text-xs text-center">{meses[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[32px] shadow-xl overflow-hidden border border-slate-200">
          <div className="p-8 border-b border-slate-200">
            <h2 className="text-3xl font-bold">Histórico Completo</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-5">Mês</th>
                  <th className="text-left p-5">Consumo (kWh)</th>
                  <th className="text-left p-5">Compensada (kWh)</th>
                  <th className="text-left p-5">Cosern</th>
                  <th className="text-left p-5">Economia</th>
                </tr>
              </thead>

              <tbody>
                {meses.map((mes, i) => (
                  <tr key={mes} className="border-t border-slate-100">
                    <td className="p-5 font-bold">{mes}</td>
                    <td className="p-5">{cliente.consumo[i]} kWh</td>
                    <td className="p-5">{cliente.compensada[i]} kWh</td>
                    <td className="p-5">R$ {cliente.cosern[i]}</td>
                    <td className="p-5 text-green-700 font-bold">R$ {cliente.economia[i]}</td>
                  </tr>
                ))}

                <tr className="border-t-2 border-slate-300 bg-slate-100 font-bold">
                  <td className="p-5">TOTAL</td>
                  <td className="p-5">{consumoTotal.toLocaleString()} kWh</td>
                  <td className="p-5">{compensadaTotal.toLocaleString()} kWh</td>
                  <td className="p-5">R$ {cosernTotal.toLocaleString()}</td>
                  <td className="p-5 text-green-700">R$ {economiaTotal.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
