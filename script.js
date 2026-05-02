const instruments = [
  { symbol: "EURUSD", name: "Euro / US Dollar", group: "Forex Major", type: "forex", base: "EUR", quote: "USD", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "GBPUSD", name: "British Pound / US Dollar", group: "Forex Major", type: "forex", base: "GBP", quote: "USD", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "AUDUSD", name: "Australian Dollar / US Dollar", group: "Forex Major", type: "forex", base: "AUD", quote: "USD", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "NZDUSD", name: "New Zealand Dollar / US Dollar", group: "Forex Major", type: "forex", base: "NZD", quote: "USD", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "USDJPY", name: "US Dollar / Japanese Yen", group: "Forex Major", type: "forex", base: "USD", quote: "JPY", contractSize: 100000, pipSize: 0.01, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "USDCHF", name: "US Dollar / Swiss Franc", group: "Forex Major", type: "forex", base: "USD", quote: "CHF", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "USDCAD", name: "US Dollar / Canadian Dollar", group: "Forex Major", type: "forex", base: "USD", quote: "CAD", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "EURJPY", name: "Euro / Japanese Yen", group: "Forex Minor", type: "forex", base: "EUR", quote: "JPY", contractSize: 100000, pipSize: 0.01, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "GBPJPY", name: "British Pound / Japanese Yen", group: "Forex Minor", type: "forex", base: "GBP", quote: "JPY", contractSize: 100000, pipSize: 0.01, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "AUDJPY", name: "Australian Dollar / Japanese Yen", group: "Forex Minor", type: "forex", base: "AUD", quote: "JPY", contractSize: 100000, pipSize: 0.01, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "CHFJPY", name: "Swiss Franc / Japanese Yen", group: "Forex Minor", type: "forex", base: "CHF", quote: "JPY", contractSize: 100000, pipSize: 0.01, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "CADJPY", name: "Canadian Dollar / Japanese Yen", group: "Forex Minor", type: "forex", base: "CAD", quote: "JPY", contractSize: 100000, pipSize: 0.01, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "EURGBP", name: "Euro / British Pound", group: "Forex Minor", type: "forex", base: "EUR", quote: "GBP", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "EURAUD", name: "Euro / Australian Dollar", group: "Forex Minor", type: "forex", base: "EUR", quote: "AUD", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "EURNZD", name: "Euro / New Zealand Dollar", group: "Forex Minor", type: "forex", base: "EUR", quote: "NZD", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "GBPAUD", name: "British Pound / Australian Dollar", group: "Forex Minor", type: "forex", base: "GBP", quote: "AUD", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "GBPNZD", name: "British Pound / New Zealand Dollar", group: "Forex Minor", type: "forex", base: "GBP", quote: "NZD", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "AUDCAD", name: "Australian Dollar / Canadian Dollar", group: "Forex Minor", type: "forex", base: "AUD", quote: "CAD", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "AUDCHF", name: "Australian Dollar / Swiss Franc", group: "Forex Minor", type: "forex", base: "AUD", quote: "CHF", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "NZDJPY", name: "New Zealand Dollar / Japanese Yen", group: "Forex Minor", type: "forex", base: "NZD", quote: "JPY", contractSize: 100000, pipSize: 0.01, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "USDSEK", name: "US Dollar / Swedish Krona", group: "Forex Exotic", type: "forex", base: "USD", quote: "SEK", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 80, lotStep: 0.01 },
  { symbol: "USDNOK", name: "US Dollar / Norwegian Krone", group: "Forex Exotic", type: "forex", base: "USD", quote: "NOK", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 80, lotStep: 0.01 },
  { symbol: "USDZAR", name: "US Dollar / South African Rand", group: "Forex Exotic", type: "forex", base: "USD", quote: "ZAR", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 60, lotStep: 0.01 },
  { symbol: "USDMXN", name: "US Dollar / Mexican Peso", group: "Forex Exotic", type: "forex", base: "USD", quote: "MXN", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 60, lotStep: 0.01 },
  { symbol: "USDTRY", name: "US Dollar / Turkish Lira", group: "Forex Exotic", type: "forex", base: "USD", quote: "TRY", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 30, lotStep: 0.01 },
  { symbol: "USDSGD", name: "US Dollar / Singapore Dollar", group: "Forex Exotic", type: "forex", base: "USD", quote: "SGD", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 80, lotStep: 0.01 },
  { symbol: "USDHKD", name: "US Dollar / Hong Kong Dollar", group: "Forex Exotic", type: "forex", base: "USD", quote: "HKD", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 80, lotStep: 0.01 },
  { symbol: "EURTRY", name: "Euro / Turkish Lira", group: "Forex Exotic", type: "forex", base: "EUR", quote: "TRY", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 30, lotStep: 0.01 },
  { symbol: "GBPTRY", name: "British Pound / Turkish Lira", group: "Forex Exotic", type: "forex", base: "GBP", quote: "TRY", contractSize: 100000, pipSize: 0.0001, minLot: 0.01, maxLot: 30, lotStep: 0.01 },
  { symbol: "XAUUSD", name: "Gold / US Dollar", group: "Metals", type: "metal", base: "XAU", quote: "USD", contractSize: 100, pipSize: 0.1, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "XAGUSD", name: "Silver / US Dollar", group: "Metals", type: "metal", base: "XAG", quote: "USD", contractSize: 5000, pipSize: 0.01, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "XPTUSD", name: "Platinum / US Dollar", group: "Metals", type: "metal", base: "XPT", quote: "USD", contractSize: 50, pipSize: 0.1, minLot: 0.01, maxLot: 50, lotStep: 0.01 },
  { symbol: "XPDUSD", name: "Palladium / US Dollar", group: "Metals", type: "metal", base: "XPD", quote: "USD", contractSize: 50, pipSize: 0.1, minLot: 0.01, maxLot: 30, lotStep: 0.01 },
  { symbol: "US30USD", name: "Dow Jones 30", group: "Indices", type: "index", base: "US30", quote: "USD", contractSize: 1, pipSize: 1, minLot: 0.1, maxLot: 500, lotStep: 0.1 },
  { symbol: "NAS100USD", name: "NASDAQ 100", group: "Indices", type: "index", base: "NAS100", quote: "USD", contractSize: 1, pipSize: 1, minLot: 0.1, maxLot: 500, lotStep: 0.1 },
  { symbol: "SPX500USD", name: "S&P 500", group: "Indices", type: "index", base: "SPX500", quote: "USD", contractSize: 1, pipSize: 1, minLot: 0.1, maxLot: 500, lotStep: 0.1 },
  { symbol: "GER40EUR", name: "Germany 40", group: "Indices", type: "index", base: "GER40", quote: "EUR", contractSize: 1, pipSize: 1, minLot: 0.1, maxLot: 500, lotStep: 0.1 },
  { symbol: "UK100GBP", name: "UK 100", group: "Indices", type: "index", base: "UK100", quote: "GBP", contractSize: 1, pipSize: 1, minLot: 0.1, maxLot: 500, lotStep: 0.1 },
  { symbol: "JP225JPY", name: "Nikkei 225", group: "Indices", type: "index", base: "JP225", quote: "JPY", contractSize: 1, pipSize: 1, minLot: 0.1, maxLot: 500, lotStep: 0.1 },
  { symbol: "HK50HKD", name: "Hong Kong 50", group: "Indices", type: "index", base: "HK50", quote: "HKD", contractSize: 1, pipSize: 1, minLot: 0.1, maxLot: 500, lotStep: 0.1 },
  { symbol: "XTIUSD", name: "WTI Crude Oil", group: "Energy", type: "energy", base: "XTI", quote: "USD", contractSize: 1000, pipSize: 0.01, minLot: 0.01, maxLot: 200, lotStep: 0.01 },
  { symbol: "XBRUSD", name: "Brent Crude Oil", group: "Energy", type: "energy", base: "XBR", quote: "USD", contractSize: 1000, pipSize: 0.01, minLot: 0.01, maxLot: 200, lotStep: 0.01 },
  { symbol: "XNGUSD", name: "Natural Gas", group: "Energy", type: "energy", base: "XNG", quote: "USD", contractSize: 10000, pipSize: 0.001, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "BTCUSD", name: "Bitcoin / US Dollar", group: "Crypto", type: "crypto", base: "BTC", quote: "USD", contractSize: 1, pipSize: 1, minLot: 0.01, maxLot: 100, lotStep: 0.01 },
  { symbol: "ETHUSD", name: "Ethereum / US Dollar", group: "Crypto", type: "crypto", base: "ETH", quote: "USD", contractSize: 1, pipSize: 0.1, minLot: 0.01, maxLot: 200, lotStep: 0.01 },
  { symbol: "SOLUSD", name: "Solana / US Dollar", group: "Crypto", type: "crypto", base: "SOL", quote: "USD", contractSize: 1, pipSize: 0.01, minLot: 0.01, maxLot: 500, lotStep: 0.01 },
  { symbol: "XRPUSD", name: "Ripple / US Dollar", group: "Crypto", type: "crypto", base: "XRP", quote: "USD", contractSize: 1000, pipSize: 0.0001, minLot: 0.01, maxLot: 500, lotStep: 0.01 },
  { symbol: "ADAUSD", name: "Cardano / US Dollar", group: "Crypto", type: "crypto", base: "ADA", quote: "USD", contractSize: 1000, pipSize: 0.0001, minLot: 0.01, maxLot: 500, lotStep: 0.01 }
];

const cryptoIds = {
  BTCUSD: "bitcoin",
  ETHUSD: "ethereum",
  SOLUSD: "solana",
  XRPUSD: "ripple",
  ADAUSD: "cardano"
};

const stooqSymbolCandidates = {
  XAUUSD: ["xauusd"],
  XAGUSD: ["xagusd"],
  XPTUSD: ["xptusd"],
  XPDUSD: ["xpdusd"],
  US30USD: ["^dji"],
  NAS100USD: ["^ndx"],
  SPX500USD: ["^spx"],
  GER40EUR: ["^dax"],
  UK100GBP: ["^ukx"],
  JP225JPY: ["^nkx"],
  HK50HKD: ["^hsi"],
  XTIUSD: ["cl.f"],
  XBRUSD: ["brn.f", "bz.f", "lco.f"],
  XNGUSD: ["ng.f"]
};

const state = {
  marketRates: {},
  history: [],
  fiatUsdRates: null,
  fiatUpdatedAt: 0,
  priceFetchToken: 0,
  isFetchingPrice: false,
  isSyncingDerivedFields: false,
  lastHistoryKey: ""
};

const form = {
  accountBalance: document.getElementById("accountBalance"),
  accountCurrency: document.getElementById("accountCurrency"),
  riskPercent: document.getElementById("riskPercent"),
  riskFixed: document.getElementById("riskFixed"),
  leverage: document.getElementById("leverage"),
  instrument: document.getElementById("instrument"),
  direction: document.getElementById("direction"),
  currentPrice: document.getElementById("currentPrice"),
  autoPriceEnabled: document.getElementById("autoPriceEnabled"),
  refreshPrice: document.getElementById("refreshPrice"),
  priceStatus: document.getElementById("priceStatus"),
  entryPrice: document.getElementById("entryPrice"),
  stopLossPrice: document.getElementById("stopLossPrice"),
  method: document.getElementById("method"),
  takeProfitPrice: document.getElementById("takeProfitPrice"),
  tpTargetMode: document.getElementById("tpTargetMode"),
  targetRiskReward: document.getElementById("targetRiskReward"),
  takeProfitDistance: document.getElementById("takeProfitDistance"),
  stopLossDistance: document.getElementById("stopLossDistance"),
  spread: document.getElementById("spread"),
  slippage: document.getElementById("slippage"),
  commission: document.getElementById("commission"),
  commissionMode: document.getElementById("commissionMode"),
  swapPerLot: document.getElementById("swapPerLot"),
  presetScalp: document.getElementById("presetScalp"),
  presetSwing: document.getElementById("presetSwing"),
  resetForm: document.getElementById("resetForm"),
  historyBody: document.getElementById("historyBody"),
  resultGrid: document.getElementById("resultGrid"),
  alerts: document.getElementById("alerts"),
  fieldErrors: document.getElementById("fieldErrors"),
  riskBadge: document.getElementById("riskBadge")
};

const ui = {
  stopLossPriceWrap: document.getElementById("stopLossPriceWrap"),
  stopLossPriceLabel: document.getElementById("stopLossPriceLabel"),
  stopLossDistanceWrap: document.getElementById("stopLossDistanceWrap"),
  stopLossDistanceLabel: document.getElementById("stopLossDistanceLabel"),
  takeProfitPriceWrap: document.getElementById("takeProfitPriceWrap"),
  takeProfitPriceLabel: document.getElementById("takeProfitPriceLabel"),
  takeProfitDistanceWrap: document.getElementById("takeProfitDistanceWrap"),
  takeProfitDistanceLabel: document.getElementById("takeProfitDistanceLabel"),
  tpAutoInfo: document.getElementById("tpAutoInfo"),
  slAutoInfo: document.getElementById("slAutoInfo")
};

function numberFrom(el) {
  const value = Number(el.value);
  return Number.isFinite(value) ? value : 0;
}

function roundDown(value, step) {
  const precision = String(step).split(".")[1]?.length || 0;
  const rounded = Math.floor((value + 1e-12) / step) * step;
  return Number(rounded.toFixed(precision));
}

function fmt(value, digits = 2) {
  if (!Number.isFinite(value)) return "-";
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  });
}

function fmtRate(value) {
  if (!Number.isFinite(value)) return "-";
  return value.toLocaleString("en-US", { maximumFractionDigits: 8 });
}

function getSelectedInstrument() {
  return instruments.find((item) => item.symbol === form.instrument.value) || instruments[0];
}

function setPriceStatus(message) {
  form.priceStatus.textContent = message;
}

function isLikelyFiatCurrency(code) {
  return typeof code === "string" && code.length === 3;
}

function populateCurrencies() {
  const baseSet = new Set(["USD", "EUR", "GBP", "JPY", "CHF", "CAD", "AUD", "NZD", "IDR", "SGD", "HKD", "SEK", "NOK", "ZAR", "MXN", "TRY"]);
  instruments.forEach((ins) => {
    if (ins.quote.length === 3) baseSet.add(ins.quote);
  });

  const sorted = [...baseSet].sort();
  const options = sorted.map((ccy) => `<option value="${ccy}" ${ccy === "USD" ? "selected" : ""}>${ccy}</option>`).join("");
  form.accountCurrency.innerHTML = options;
}

function populateInstruments() {
  const groups = instruments.reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {});

  form.instrument.innerHTML = Object.entries(groups)
    .map(([group, items]) => {
      const opts = items.map((item) => `<option value="${item.symbol}">${item.symbol} - ${item.name}</option>`).join("");
      return `<optgroup label="${group}">${opts}</optgroup>`;
    })
    .join("");

  form.instrument.value = "EURUSD";
}

function updateFieldStates() {
  const riskMode = document.querySelector("input[name='riskMode']:checked").value;
  const method = form.method.value;
  const tpMode = method;
  const tpTargetMode = form.tpTargetMode.value;
  const targetRiskRewardWrap = form.targetRiskReward.closest("label");

  form.riskPercent.disabled = riskMode !== "percent";
  form.riskFixed.disabled = riskMode !== "fixed";
  form.stopLossDistance.disabled = method === "price";
  form.takeProfitDistance.disabled = tpMode === "price";
  form.takeProfitPrice.disabled = tpMode !== "price";
  form.targetRiskReward.disabled = false;

  ui.stopLossPriceLabel.textContent = "Stop Loss Price";
  ui.stopLossDistanceLabel.textContent = method === "pip" ? "Stop Loss (pips)" : "Stop Loss (points)";
  ui.stopLossPriceWrap.style.display = method === "price" ? "" : "none";
  ui.stopLossDistanceWrap.style.display = method === "price" ? "none" : "";
  ui.slAutoInfo.style.display = method === "price" ? "none" : "";

  if (targetRiskRewardWrap) targetRiskRewardWrap.style.display = tpTargetMode === "rr" ? "" : "none";

  if (tpTargetMode === "rr") {
    ui.takeProfitDistanceWrap.style.display = "none";
    ui.takeProfitPriceWrap.style.display = "none";
    ui.tpAutoInfo.style.display = "";
    form.takeProfitPrice.disabled = true;
  } else {
    ui.tpAutoInfo.style.display = tpMode === "price" ? "none" : "";
    ui.takeProfitPriceLabel.textContent = "Take Profit Price";
    ui.takeProfitDistanceLabel.textContent = tpMode === "pip" ? "Take Profit (pips)" : "Take Profit (points)";
    ui.takeProfitPriceWrap.style.display = tpMode === "price" ? "" : "none";
    ui.takeProfitDistanceWrap.style.display = tpMode === "price" ? "none" : "";
  }
}

function getPriceDigits(instrument) {
  const pipDecimals = String(instrument.pipSize).split(".")[1]?.length || 0;
  return instrument.pipSize >= 1 ? 2 : Math.min(8, Math.max(2, pipDecimals + 2));
}

function setNumberValue(el, value, digits) {
  if (!Number.isFinite(value)) return;
  el.value = Number(value.toFixed(digits));
}

function getSnapshot() {
  const riskMode = document.querySelector("input[name='riskMode']:checked").value;
  return {
    accountBalance: form.accountBalance.value,
    accountCurrency: form.accountCurrency.value,
    riskMode,
    riskPercent: form.riskPercent.value,
    riskFixed: form.riskFixed.value,
    leverage: form.leverage.value,
    instrument: form.instrument.value,
    direction: form.direction.value,
    currentPrice: form.currentPrice.value,
    autoPriceEnabled: form.autoPriceEnabled.checked,
    entryPrice: form.entryPrice.value,
    stopLossPrice: form.stopLossPrice.value,
    method: form.method.value,
    takeProfitPrice: form.takeProfitPrice.value,
    tpTargetMode: form.tpTargetMode.value,
    targetRiskReward: form.targetRiskReward.value,
    takeProfitDistance: form.takeProfitDistance.value,
    stopLossDistance: form.stopLossDistance.value,
    spread: form.spread.value,
    slippage: form.slippage.value,
    commission: form.commission.value,
    commissionMode: form.commissionMode.value,
    swapPerLot: form.swapPerLot.value
  };
}

function applySnapshot(snapshot) {
  if (!snapshot) return;
  form.accountBalance.value = snapshot.accountBalance ?? form.accountBalance.value;
  form.accountCurrency.value = snapshot.accountCurrency ?? form.accountCurrency.value;
  const riskMode = snapshot.riskMode === "fixed" ? "fixed" : "percent";
  const riskRadio = document.querySelector(`input[name='riskMode'][value='${riskMode}']`);
  if (riskRadio) riskRadio.checked = true;
  form.riskPercent.value = snapshot.riskPercent ?? form.riskPercent.value;
  form.riskFixed.value = snapshot.riskFixed ?? form.riskFixed.value;
  form.leverage.value = snapshot.leverage ?? form.leverage.value;
  form.instrument.value = snapshot.instrument ?? form.instrument.value;
  form.direction.value = snapshot.direction ?? form.direction.value;
  form.currentPrice.value = snapshot.currentPrice ?? form.currentPrice.value;
  form.autoPriceEnabled.checked = Boolean(snapshot.autoPriceEnabled);
  form.entryPrice.value = snapshot.entryPrice ?? form.entryPrice.value;
  form.stopLossPrice.value = snapshot.stopLossPrice ?? form.stopLossPrice.value;
  form.method.value = snapshot.method ?? form.method.value;
  form.takeProfitPrice.value = snapshot.takeProfitPrice ?? form.takeProfitPrice.value;
  form.tpTargetMode.value = snapshot.tpTargetMode ?? form.tpTargetMode.value;
  form.targetRiskReward.value = snapshot.targetRiskReward ?? form.targetRiskReward.value;
  form.takeProfitDistance.value = snapshot.takeProfitDistance ?? form.takeProfitDistance.value;
  form.stopLossDistance.value = snapshot.stopLossDistance ?? form.stopLossDistance.value;
  form.spread.value = snapshot.spread ?? form.spread.value;
  form.slippage.value = snapshot.slippage ?? form.slippage.value;
  form.commission.value = snapshot.commission ?? form.commission.value;
  form.commissionMode.value = snapshot.commissionMode ?? form.commissionMode.value;
  form.swapPerLot.value = snapshot.swapPerLot ?? form.swapPerLot.value;
}

function syncDerivedFields() {
  if (state.isSyncingDerivedFields) return;
  state.isSyncingDerivedFields = true;

  try {
    const instrument = getSelectedInstrument();
    const digits = getPriceDigits(instrument);
    const entry = numberFrom(form.entryPrice);
    if (!(entry > 0)) return;

    const slMode = form.method.value;
    const tpMode = slMode;
    const direction = form.direction.value;
    const slPoints = numberFrom(form.stopLossDistance);
    const tpPoints = numberFrom(form.takeProfitDistance);
    const targetRiskReward = numberFrom(form.targetRiskReward);

    if (slMode !== "price" && slPoints > 0) {
      const slPrice = direction === "buy"
        ? entry - slPoints * instrument.pipSize
        : entry + slPoints * instrument.pipSize;
      setNumberValue(form.stopLossPrice, slPrice, digits);
    } else if (slMode === "price") {
      const stop = numberFrom(form.stopLossPrice);
      if (stop > 0) {
        form.stopLossDistance.value = Number((Math.abs(entry - stop) / instrument.pipSize).toFixed(2));
      }
    }

    let effectiveTpPoints = tpPoints;
    if (form.tpTargetMode.value === "rr" && targetRiskReward > 0) {
      effectiveTpPoints = slPoints > 0 ? slPoints * targetRiskReward : 0;
      if (effectiveTpPoints > 0) {
        form.takeProfitDistance.value = Number(effectiveTpPoints.toFixed(2));
      }
    }

    if (tpMode !== "price" && effectiveTpPoints > 0) {
      const tpPrice = direction === "buy"
        ? entry + effectiveTpPoints * instrument.pipSize
        : entry - effectiveTpPoints * instrument.pipSize;
      setNumberValue(form.takeProfitPrice, tpPrice, digits);
    } else if (tpMode === "price") {
      const tp = numberFrom(form.takeProfitPrice);
      if (tp > 0) {
        form.takeProfitDistance.value = Number((Math.abs(tp - entry) / instrument.pipSize).toFixed(2));
      }
    }

    const slInfo = slMode === "price"
      ? `${Number((Math.abs(entry - numberFrom(form.stopLossPrice)) / instrument.pipSize).toFixed(2))} ${form.method.value}`
      : `${numberFrom(form.stopLossDistance)} ${form.method.value}`;
    const tpPriceNow = numberFrom(form.takeProfitPrice);
    const tpInfo = effectiveTpPoints > 0 && tpPriceNow > 0
      ? `${Number(effectiveTpPoints.toFixed(2))} points | price ${tpPriceNow}`
      : "-";
    ui.tpAutoInfo.textContent = `TP auto from RR: ${tpInfo} | SL basis: ${slInfo}`;

    const stopPriceNow = numberFrom(form.stopLossPrice);
    if (slMode !== "price") {
      ui.slAutoInfo.textContent = stopPriceNow > 0 ? `SL price: ${stopPriceNow}` : "SL price: -";
    }
    if (form.tpTargetMode.value !== "rr" && tpMode !== "price") {
      ui.tpAutoInfo.textContent = tpPriceNow > 0 ? `TP price: ${tpPriceNow}` : "TP price: -";
    }
  } finally {
    state.isSyncingDerivedFields = false;
  }
}

function saveLocalState() {
  const payload = {
    snapshot: getSnapshot(),
    history: state.history
  };
  localStorage.setItem("trade-calculator-v2", JSON.stringify(payload));
}

function loadLocalState() {
  try {
    const raw = localStorage.getItem("trade-calculator-v2");
    if (!raw) return;
    const parsed = JSON.parse(raw);
    applySnapshot(parsed.snapshot);
    state.history = Array.isArray(parsed.history) ? parsed.history.slice(0, 15) : [];
  } catch (error) {
    state.history = [];
  }
}

function renderFieldErrors(errors) {
  if (!errors.length) {
    form.fieldErrors.innerHTML = "";
    return;
  }
  form.fieldErrors.innerHTML = errors.map((msg) => `<div class="field-error-item">${msg}</div>`).join("");
}

function renderRiskBadge({ marginPct, riskDiffPct }) {
  let tone = "safe";
  let message = "Status: Safe setup.";
  if (marginPct > 90 || riskDiffPct > 20) {
    tone = "over-risk";
    message = "Status: Over-risk. Kurangi lot, biaya, atau gunakan leverage lebih kecil.";
  } else if (marginPct > 60 || riskDiffPct > 10) {
    tone = "caution";
    message = "Status: Caution. Perhatikan margin dan deviasi risiko dari target.";
  }
  form.riskBadge.className = `risk-badge ${tone}`;
  form.riskBadge.textContent = `${message} (Margin ${fmt(marginPct, 2)}%, deviasi risiko ${fmt(riskDiffPct, 2)}%)`;
}

function pushHistory(entry) {
  state.history.unshift(entry);
  if (state.history.length > 15) state.history = state.history.slice(0, 15);
}

function renderHistory() {
  if (!state.history.length) {
    form.historyBody.innerHTML = '<tr><td colspan="4" class="muted">No history yet.</td></tr>';
    return;
  }
  form.historyBody.innerHTML = state.history
    .map((row, index) => `
      <tr>
        <td>${row.time}</td>
        <td>${row.instrument}</td>
        <td>${fmt(row.lot, 4)}</td>
        <td><button type="button" class="mini-btn" data-load-history="${index}">Load</button></td>
      </tr>
    `)
    .join("");
}

function applyPresetScalp() {
  form.method.value = "pip";
  form.tpTargetMode.value = "rr";
  form.targetRiskReward.value = "1.5";
  form.stopLossDistance.value = "15";
  form.takeProfitDistance.value = "22.5";
  form.spread.value = "0.8";
  form.slippage.value = "0.2";
  form.commission.value = "7";
  form.commissionMode.value = "roundTurn";
  form.swapPerLot.value = "0";
  calculate();
}

function applyPresetSwing() {
  form.method.value = "pip";
  form.tpTargetMode.value = "rr";
  form.targetRiskReward.value = "2.5";
  form.stopLossDistance.value = "80";
  form.takeProfitDistance.value = "200";
  form.spread.value = "1.4";
  form.slippage.value = "0.4";
  form.commission.value = "7";
  form.commissionMode.value = "roundTurn";
  form.swapPerLot.value = "0.5";
  calculate();
}

function resetToDefault() {
  localStorage.removeItem("trade-calculator-v2");
  location.reload();
}

function updatePriceStep() {
  const ins = getSelectedInstrument();
  const pip = ins.pipSize;
  const priceStep = pip >= 1 ? "1" : pip.toString();
  [form.currentPrice, form.entryPrice, form.stopLossPrice, form.takeProfitPrice].forEach((el) => {
    el.step = priceStep;
  });
}

function buildCurrencyGraph() {
  const graph = {};

  function addEdge(from, to, rate) {
    if (!Number.isFinite(rate) || rate <= 0) return;
    if (!graph[from]) graph[from] = [];
    graph[from].push({ to, rate });
  }

  const selectedInstrument = getSelectedInstrument();
  const currentPrice = numberFrom(form.currentPrice);
  if (selectedInstrument.type === "forex" && currentPrice > 0) {
    state.marketRates[selectedInstrument.symbol] = currentPrice;
  }

  Object.entries(state.marketRates).forEach(([symbol, price]) => {
    const ins = instruments.find((item) => item.symbol === symbol && item.type === "forex");
    if (!ins || !(price > 0)) return;
    addEdge(ins.base, ins.quote, price);
    addEdge(ins.quote, ins.base, 1 / price);
  });

  return graph;
}

function findRate(from, to, graph) {
  if (from === to) return 1;
  if (!graph[from]) return null;

  const queue = [{ ccy: from, rate: 1 }];
  const visited = new Set([from]);

  while (queue.length) {
    const current = queue.shift();
    const edges = graph[current.ccy] || [];

    for (const edge of edges) {
      if (visited.has(edge.to)) continue;
      const nextRate = current.rate * edge.rate;
      if (edge.to === to) return nextRate;
      visited.add(edge.to);
      queue.push({ ccy: edge.to, rate: nextRate });
    }
  }

  return null;
}

function renderAlerts(alerts) {
  if (!alerts.length) {
    form.alerts.innerHTML = "";
    return;
  }

  form.alerts.innerHTML = alerts
    .map((alert) => `<div class="alert ${alert.level}">${alert.message}</div>`)
    .join("");
}

function renderResults(cards) {
  form.resultGrid.innerHTML = cards
    .map((card) => `
      <article class="result-card">
        <p class="result-label">${card.label}</p>
        <p class="result-value ${card.tone || ""}">${card.value}</p>
        <p class="result-sub">${card.sub || " "}</p>
      </article>
    `)
    .join("");
}

async function loadFiatUsdRates(force = false) {
  const ageMs = Date.now() - state.fiatUpdatedAt;
  if (!force && state.fiatUsdRates && ageMs < 10 * 60 * 1000) {
    return true;
  }

  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD", { cache: "no-store" });
    if (!response.ok) return false;

    const json = await response.json();
    if (json.result !== "success" || !json.rates) return false;

    state.fiatUsdRates = json.rates;
    state.fiatUpdatedAt = Date.now();

    instruments.forEach((ins) => {
      if (ins.type !== "forex") return;
      const baseRate = json.rates[ins.base];
      const quoteRate = json.rates[ins.quote];
      if (!(baseRate > 0) || !(quoteRate > 0)) return;
      state.marketRates[ins.symbol] = quoteRate / baseRate;
    });

    return true;
  } catch (error) {
    return false;
  }
}

function parseStooqCsv(text) {
  const lines = text.split(/\r?\n/);
  for (const line of lines) {
    const parts = line.split(",");
    if (parts.length < 7) continue;
    if (parts[0].trim().toUpperCase() === "SYMBOL") continue;
    const closeRaw = parts[6].trim();
    if (closeRaw === "N/D") continue;
    const close = Number(closeRaw);
    if (!Number.isFinite(close)) continue;

    return {
      symbol: parts[0].trim(),
      date: parts[1].trim(),
      time: parts[2].trim(),
      close
    };
  }
  return null;
}

async function fetchFromStooq(symbolCandidate) {
  const endpoint = `https://r.jina.ai/http://stooq.com/q/l/?s=${encodeURIComponent(symbolCandidate)}&f=sd2t2ohlcv&h&e=csv`;
  const response = await fetch(endpoint, { cache: "no-store" });
  if (!response.ok) return null;

  const text = await response.text();
  return parseStooqCsv(text);
}

async function getForexPriceLive(instrument, force = false) {
  const ready = await loadFiatUsdRates(force);
  if (!ready || !state.fiatUsdRates) return null;

  const usdToBase = state.fiatUsdRates[instrument.base];
  const usdToQuote = state.fiatUsdRates[instrument.quote];
  if (!(usdToBase > 0) || !(usdToQuote > 0)) return null;

  return {
    price: usdToQuote / usdToBase,
    source: "open.er-api.com"
  };
}

async function getCryptoPriceLive(instrument) {
  const coinId = cryptoIds[instrument.symbol];
  if (!coinId) return null;

  try {
    const endpoint = `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(coinId)}&vs_currencies=usd`;
    const response = await fetch(endpoint, { cache: "no-store" });
    if (!response.ok) return null;

    const json = await response.json();
    const price = Number(json?.[coinId]?.usd);
    if (!Number.isFinite(price) || price <= 0) return null;

    return {
      price,
      source: "coingecko.com"
    };
  } catch (error) {
    return null;
  }
}

async function getStooqPriceLive(instrument) {
  const candidates = stooqSymbolCandidates[instrument.symbol] || [instrument.symbol.toLowerCase()];

  for (const candidate of candidates) {
    try {
      const row = await fetchFromStooq(candidate);
      if (!row) continue;

      return {
        price: row.close,
        source: `stooq (${row.symbol}) via r.jina.ai`,
        updated: `${row.date} ${row.time}`
      };
    } catch (error) {
      continue;
    }
  }

  return null;
}

async function getLivePriceForInstrument(instrument, force = false) {
  if (instrument.type === "forex" && isLikelyFiatCurrency(instrument.base) && isLikelyFiatCurrency(instrument.quote)) {
    const fiatPrice = await getForexPriceLive(instrument, force);
    if (fiatPrice) return fiatPrice;
  }

  if (instrument.type === "crypto") {
    const cryptoPrice = await getCryptoPriceLive(instrument);
    if (cryptoPrice) return cryptoPrice;
  }

  const stooqPrice = await getStooqPriceLive(instrument);
  if (stooqPrice) return stooqPrice;

  throw new Error("No supported live source for this symbol");
}

async function autoFillCurrentPrice({ force = false, reason = "manual" } = {}) {
  if (!form.autoPriceEnabled.checked && !force) return;
  if (state.isFetchingPrice && !force) return;

  const instrument = getSelectedInstrument();
  const token = ++state.priceFetchToken;
  state.isFetchingPrice = true;
  setPriceStatus(`Price status: fetching ${instrument.symbol}...`);

  try {
    const live = await getLivePriceForInstrument(instrument, force);
    if (token !== state.priceFetchToken) return;

    const pipDecimals = String(instrument.pipSize).split(".")[1]?.length || 0;
    const decimals = instrument.pipSize >= 1 ? 2 : Math.min(8, Math.max(2, pipDecimals + 2));
    const livePrice = Number(live.price);
    form.currentPrice.value = Number(livePrice.toFixed(decimals));

    if (instrument.type === "forex") {
      state.marketRates[instrument.symbol] = livePrice;
    }

    if (reason === "init" && numberFrom(form.entryPrice) <= 0) {
      form.entryPrice.value = form.currentPrice.value;
    }

    const localTime = new Date().toLocaleTimeString("en-GB", { hour12: false });
    const updatedPart = live.updated ? ` | source update ${live.updated}` : "";
    setPriceStatus(`Price status: ${fmtRate(livePrice)} (${instrument.symbol}) | ${live.source}${updatedPart} | synced ${localTime}`);
    calculate();
  } catch (error) {
    if (token !== state.priceFetchToken) return;
    setPriceStatus(`Price status: auto-detect failed (${error.message}). Enter manually or click Refresh.`);
  } finally {
    if (token === state.priceFetchToken) {
      state.isFetchingPrice = false;
    }
  }
}

function calculate() {
  updateFieldStates();
  updatePriceStep();
  syncDerivedFields();

  const alerts = [];
  const fieldErrors = [];
  const instrument = getSelectedInstrument();
  const accountBalance = numberFrom(form.accountBalance);
  const leverage = numberFrom(form.leverage);
  const spread = numberFrom(form.spread);
  const slippage = numberFrom(form.slippage);
  const commission = numberFrom(form.commission);
  const swapPerLot = numberFrom(form.swapPerLot);
  const price = numberFrom(form.currentPrice);
  const entry = numberFrom(form.entryPrice);
  const stop = numberFrom(form.stopLossPrice);
  const tp = numberFrom(form.takeProfitPrice);
  const accountCurrency = form.accountCurrency.value;
  const direction = form.direction.value;
  const tpTargetMode = form.tpTargetMode.value;
  const targetRiskReward = numberFrom(form.targetRiskReward);
  const commissionMode = form.commissionMode.value;

  const riskMode = document.querySelector("input[name='riskMode']:checked").value;
  const method = form.method.value;
  const tpMode = method;

  const riskAmount = riskMode === "percent"
    ? accountBalance * (numberFrom(form.riskPercent) / 100)
    : numberFrom(form.riskFixed);

  const slPoints = method === "price"
    ? (entry > 0 && stop > 0 ? Math.abs(entry - stop) / instrument.pipSize : 0)
    : numberFrom(form.stopLossDistance);

  const tpPoints = tpMode === "price"
    ? (entry > 0 && tp > 0 ? Math.abs(tp - entry) / instrument.pipSize : 0)
    : numberFrom(form.takeProfitDistance);

  if (!(accountBalance > 0)) fieldErrors.push("Account balance harus lebih besar dari 0.");
  if (!(riskAmount > 0)) fieldErrors.push("Risk value harus lebih besar dari 0.");
  if (!(entry > 0)) fieldErrors.push("Entry price harus lebih besar dari 0.");
  if (!(slPoints > 0)) fieldErrors.push("Stop loss tidak valid. Isi SL price atau manual SL pip/points.");
  if (!(tpPoints > 0)) fieldErrors.push("Take profit tidak valid. Isi TP price atau manual TP pip/points.");
  if (!(price > 0)) fieldErrors.push("Current price harus lebih besar dari 0.");
  if (!(leverage > 0)) fieldErrors.push("Leverage harus lebih besar dari 0.");
  if (tpTargetMode === "rr" && !(targetRiskReward > 0)) fieldErrors.push("Target RR harus lebih besar dari 0 saat mode RR aktif.");
  if (spread < 0 || slippage < 0) fieldErrors.push("Spread dan slippage tidak boleh negatif.");
  if (commission < 0) fieldErrors.push("Commission tidak boleh negatif.");

  if (direction === "buy" && method === "price" && stop >= entry && entry > 0 && stop > 0) {
    alerts.push({ level: "warning", message: "For Buy positions, stop loss is usually below entry." });
  }

  if (direction === "sell" && method === "price" && stop <= entry && entry > 0 && stop > 0) {
    alerts.push({ level: "warning", message: "For Sell positions, stop loss is usually above entry." });
  }

  if (tpMode === "price" && direction === "buy" && tp <= entry && entry > 0 && tp > 0) {
    alerts.push({ level: "warning", message: "For Buy positions, take profit is usually above entry." });
  }

  if (tpMode === "price" && direction === "sell" && tp >= entry && entry > 0 && tp > 0) {
    alerts.push({ level: "warning", message: "For Sell positions, take profit is usually below entry." });
  }

  const graph = buildCurrencyGraph();
  const quoteToAccount = findRate(instrument.quote, accountCurrency, graph);
  if (quoteToAccount === null) {
    alerts.push({
      level: "warning",
      message: `No conversion route found for ${instrument.quote} -> ${accountCurrency}. Add a manual rate for better accuracy.`
    });
  }

  const conversion = quoteToAccount ?? Number.NaN;

  const pipValueQuotePerLot = instrument.contractSize * instrument.pipSize;
  const pipValueAccountPerLot = pipValueQuotePerLot * conversion;

  const effectiveStop = slPoints + spread + slippage;
  const commissionRoundTurn = commissionMode === "perSide" ? commission * 2 : commission;
  const perLotRisk = effectiveStop * pipValueAccountPerLot + commissionRoundTurn + swapPerLot;

  let rawLot = perLotRisk > 0 ? riskAmount / perLotRisk : 0;
  if (!Number.isFinite(rawLot)) rawLot = 0;

  let lot = roundDown(rawLot, instrument.lotStep);
  if (lot < instrument.minLot && rawLot > 0) {
    alerts.push({
      level: "warning",
      message: `Calculated lot size (${fmt(rawLot, 4)}) is below instrument minimum (${instrument.minLot}).`
    });
  }

  lot = Math.max(0, Math.min(lot, instrument.maxLot));

  const actualRisk = lot * perLotRisk;
  const units = lot * instrument.contractSize;
  const notionalQuote = units * price;
  const notionalAccount = notionalQuote * conversion;
  const marginAccount = leverage > 0 ? notionalAccount / leverage : 0;
  const marginPct = accountBalance > 0 ? (marginAccount / accountBalance) * 100 : 0;

  const potentialProfit = lot * (tpPoints * pipValueAccountPerLot - commissionRoundTurn - swapPerLot);
  const rr = effectiveStop > 0 ? tpPoints / effectiveStop : 0;
  const riskDiffPct = riskAmount > 0 ? Math.abs((actualRisk - riskAmount) / riskAmount) * 100 : 0;

  if (marginAccount > accountBalance) {
    alerts.push({
      level: "warning",
      message: "Required margin is higher than account balance. Reduce lot size or increase leverage."
    });
  }

  renderAlerts(alerts);
  renderFieldErrors(fieldErrors);
  renderRiskBadge({ marginPct, riskDiffPct });

  const cards = [
    {
      label: "Recommended Lot Size",
      value: fmt(lot, 4),
      sub: `Broker range: ${instrument.minLot} - ${instrument.maxLot} | step ${instrument.lotStep}`
    },
    {
      label: "Position Size",
      value: `${fmt(units, 2)} unit`,
      sub: `${fmt(lot / 0.1, 2)} mini lot | ${fmt(lot / 0.01, 2)} micro lot`
    },
    {
      label: "Pip/Point Value",
      value: `${fmt(pipValueAccountPerLot * lot, 2)} ${accountCurrency}`,
      sub: `Per 1 lot: ${fmt(pipValueAccountPerLot, 2)} ${accountCurrency}`
    },
    {
      label: "Effective Risk",
      value: `${fmt(actualRisk, 2)} ${accountCurrency}`,
      sub: `Target risk: ${fmt(riskAmount, 2)} ${accountCurrency}`
    },
    {
      label: "Estimated Loss at Stop Loss",
      value: `${fmt(actualRisk, 2)} ${accountCurrency}`,
      sub: `Pure SL: ${fmt(lot * slPoints * pipValueAccountPerLot, 2)} ${accountCurrency} | Costs: ${fmt(lot * (spread + slippage) * pipValueAccountPerLot + lot * (commissionRoundTurn + swapPerLot), 2)} ${accountCurrency}`
    },
    {
      label: "Total Stop Distance",
      value: `${fmt(effectiveStop, 2)} pips/points`,
      sub: `Pure SL: ${fmt(slPoints, 2)} + costs: ${fmt(spread + slippage, 2)}`
    },
    {
      label: "Potential Profit (at TP)",
      value: `${fmt(potentialProfit, 2)} ${accountCurrency}`,
      sub: `TP: ${fmt(tpPoints, 2)} pips/points | RR: ${fmt(rr, 2)} : 1${tpTargetMode === "rr" ? ` | Target RR: ${fmt(targetRiskReward, 2)}` : ""}`,
      tone: potentialProfit >= 0 ? "positive" : "negative"
    },
    {
      label: "Position Notional",
      value: `${fmt(notionalAccount, 2)} ${accountCurrency}`,
      sub: `${fmt(notionalQuote, 2)} ${instrument.quote}`
    },
    {
      label: "Estimated Margin",
      value: `${fmt(marginAccount, 2)} ${accountCurrency}`,
      sub: `${fmt(marginPct, 2)}% of account balance`
    }
  ];

  renderResults(cards);
  renderHistory();

  const historyKey = `${instrument.symbol}|${direction}|${fmt(lot, 4)}|${fmt(actualRisk, 2)}|${fmt(rr, 2)}`;
  if (!fieldErrors.length && lot > 0 && historyKey !== state.lastHistoryKey) {
    state.lastHistoryKey = historyKey;
    pushHistory({
      time: new Date().toLocaleTimeString("en-GB", { hour12: false }),
      instrument: instrument.symbol,
      direction,
      lot,
      risk: actualRisk,
      rr,
      snapshot: getSnapshot()
    });
    renderHistory();
  }
  saveLocalState();
}

function bindEvents() {
  const recalcEvents = ["input", "change"];
  const recalculableFields = [
    form.accountBalance,
    form.accountCurrency,
    form.riskPercent,
    form.riskFixed,
    form.leverage,
    form.direction,
    form.currentPrice,
    form.entryPrice,
    form.stopLossPrice,
    form.takeProfitPrice,
    form.method,
    form.tpTargetMode,
    form.targetRiskReward,
    form.takeProfitDistance,
    form.stopLossDistance,
    form.spread,
    form.slippage,
    form.commission,
    form.commissionMode,
    form.swapPerLot
  ];

  recalculableFields.forEach((field) => {
    recalcEvents.forEach((eventName) => field.addEventListener(eventName, calculate));
  });

  form.instrument.addEventListener("change", () => {
    updatePriceStep();
    calculate();
    autoFillCurrentPrice({ reason: "instrument-change" });
  });

  document.querySelectorAll("input[name='riskMode']").forEach((el) => {
    el.addEventListener("change", calculate);
  });

  form.autoPriceEnabled.addEventListener("change", () => {
    if (form.autoPriceEnabled.checked) {
      autoFillCurrentPrice({ force: true, reason: "toggle-on" });
    } else {
      setPriceStatus("Price status: auto-detect disabled. Enter manually or click Refresh.");
    }
  });

  form.refreshPrice.addEventListener("click", () => {
    autoFillCurrentPrice({ force: true, reason: "refresh-button" });
  });

  form.historyBody.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const index = target.getAttribute("data-load-history");
    if (index === null) return;
    const row = state.history[Number(index)];
    if (!row?.snapshot) return;
    applySnapshot(row.snapshot);
    calculate();
  });

  form.tpTargetMode.addEventListener("change", () => {
    if (form.tpTargetMode.value === "rr") {
      form.targetRiskReward.focus();
      form.targetRiskReward.select();
    }
  });

  form.presetScalp.addEventListener("click", applyPresetScalp);
  form.presetSwing.addEventListener("click", applyPresetSwing);
  form.resetForm.addEventListener("click", resetToDefault);
}

async function init() {
  populateCurrencies();
  populateInstruments();
  loadLocalState();
  renderHistory();
  bindEvents();
  calculate();

  await loadFiatUsdRates(true);
  calculate();
  await autoFillCurrentPrice({ force: true, reason: "init" });

  setInterval(() => {
    autoFillCurrentPrice({ reason: "interval" });
  }, 60000);
}

init();

