export const LONDON_POSTCODES = [
  "E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","E11","E12","E13","E14","E15","E16","E17","E18",
  "EC1","EC2","EC3","EC4",
  "N1","N2","N3","N4","N5","N6","N7","N8","N9","N10","N11","N12","N13","N14","N15","N16","N17","N18","N19","N20","N21","N22",
  "NW1","NW2","NW3","NW4","NW5","NW6","NW7","NW8","NW9","NW10","NW11",
  "SE1","SE2","SE3","SE4","SE5","SE6","SE7","SE8","SE9","SE10","SE11","SE12","SE13","SE14","SE15","SE16","SE17","SE18","SE19","SE20","SE21","SE22","SE23","SE24","SE25","SE26","SE27","SE28",
  "SW1","SW2","SW3","SW4","SW5","SW6","SW7","SW8","SW9","SW10","SW11","SW12","SW13","SW14","SW15","SW16","SW17","SW18","SW19","SW20",
  "W1","W2","W3","W4","W5","W6","W7","W8","W9","W10","W11","W12","W13","W14",
  "WC1","WC2"
];

const SCORES = {
  "E1": { rent:72, nightlife:88, transport:82, greenery:38, age:85, culture:90 },
  "E2": { rent:68, nightlife:80, transport:76, greenery:52, age:82, culture:78 },
  "E3": { rent:74, nightlife:60, transport:70, greenery:62, age:75, culture:58 },
  "E8": { rent:65, nightlife:84, transport:72, greenery:65, age:88, culture:82 },
  "E9": { rent:70, nightlife:66, transport:68, greenery:58, age:80, culture:62 },
  "EC1":{ rent:44, nightlife:78, transport:92, greenery:28, age:65, culture:88 },
  "N1": { rent:52, nightlife:76, transport:84, greenery:54, age:74, culture:84 },
  "N4": { rent:72, nightlife:62, transport:74, greenery:68, age:76, culture:64 },
  "N5": { rent:62, nightlife:56, transport:70, greenery:72, age:70, culture:62 },
  "N16":{ rent:70, nightlife:72, transport:66, greenery:70, age:82, culture:74 },
  "NW1":{ rent:50, nightlife:86, transport:86, greenery:55, age:72, culture:88 },
  "NW3":{ rent:28, nightlife:40, transport:62, greenery:92, age:44, culture:68 },
  "NW5":{ rent:62, nightlife:66, transport:72, greenery:60, age:72, culture:68 },
  "NW6":{ rent:58, nightlife:60, transport:76, greenery:64, age:74, culture:66 },
  "SE1":{ rent:48, nightlife:80, transport:88, greenery:42, age:70, culture:86 },
  "SE4":{ rent:74, nightlife:58, transport:68, greenery:66, age:78, culture:60 },
  "SE5":{ rent:72, nightlife:64, transport:66, greenery:58, age:76, culture:68 },
  "SE8":{ rent:76, nightlife:70, transport:68, greenery:54, age:80, culture:66 },
  "SE11":{ rent:60, nightlife:68, transport:82, greenery:52, age:70, culture:72 },
  "SE15":{ rent:74, nightlife:82, transport:70, greenery:56, age:83, culture:80 },
  "SW4":{ rent:56, nightlife:78, transport:78, greenery:66, age:76, culture:72 },
  "SW9":{ rent:66, nightlife:88, transport:80, greenery:50, age:80, culture:86 },
  "SW11":{ rent:50, nightlife:70, transport:74, greenery:68, age:68, culture:68 },
  "W1": { rent:30, nightlife:94, transport:94, greenery:38, age:60, culture:96 },
  "W11":{ rent:28, nightlife:72, transport:76, greenery:68, age:55, culture:84 },
  "W12":{ rent:56, nightlife:68, transport:80, greenery:52, age:68, culture:70 },
  "WC1":{ rent:38, nightlife:68, transport:92, greenery:48, age:62, culture:84 },
};

function placeholderScores(code) {
  const seed = code.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const r = (min, max, offset) => min + ((seed + offset) % (max - min));
  return {
    rent:      r(40, 80, 1),
    nightlife: r(30, 85, 2),
    transport: r(45, 90, 3),
    greenery:  r(30, 80, 4),
    age:       r(40, 85, 5),
    culture:   r(30, 85, 6),
  };
}

export async function fetchPostcodeData(code) {
  try {
    const res = await fetch(
      `https://api.postcodes.io/outcodes/${encodeURIComponent(code)}`
    );
    const data = await res.json();
    if (data.status !== 200) return null;

    return {
      code,
      area: data.result.admin_district?.[0] ?? data.result.parliamentary_constituency?.[0] ?? code,
      ...(SCORES[code] ?? placeholderScores(code)),
    };
  } catch {
    return null;
  }
}