export const serviceData = [
  {
    serviceNo: 1,
    titleRef: 'firstService',
    title: 'Online-Services MAS Taxi',
    partialText: 'Bei uns können Sie direkt auf der Webseite ein Taxi über das Buchungsformular bestellen.',
    fullText: 'Bei uns können Sie direkt auf der Webseite ein Taxi über das Buchungsformular bestellen. Die Fahrpreise können dazu unter dem Link "Preise" eingesehen werden.'
  },
  {
    serviceNo: 2,
    titleRef: 'secondService',
    title: 'Zu unserem täglichen Leistungsumfang gehören',
    partialText: 'Personen- und Sachbeförderung, Krankenfahrten und Chipkartenfahrten für Menschen mit',
    fullText: 'Personen- und Sachbeförderung, Krankenfahrten und Chipkartenfahrten für Menschen mit Behinderungen, Einkaufsfahrten, eilige Medikamenten-/ Bluttransporte, Schülerfahrten, VIP-/ Eventorganisation, und vieles mehr...'
  },
  {
    serviceNo: 3,
    titleRef: 'thirdService',
    title: 'Ein starker Partner für Firmenkunden',
    partialText: 'Kleine und mittelständische Betriebe nehmen derzeit unsere Dienstleistungen in Anspruch.',
    fullText: 'Kleine und mittelständische Betriebe nehmen derzeit unsere Dienstleistungen in Anspruch. Langjährige Erfahrung mit Unternehmen im gesamten Rhein-Main-Gebiet tragen zur Zufriedenheit unserer Kundschaft und zur Ausarbeitung neuer Servicemodelle bei. Verschiedene Bestellverfahren (Online-Buchung) flexible Bezahlmöglichkeiten, verschiedene Varianten von Rechnungsfahrten (elektronische Buchung), zugeschnittene Webkundenportale u.v.m. sind feste Bestandteile unseres Serviceangebots.'
  }
];

export class Servicetypes {
  serviceNo?: number;
  titleRef: string;
  title: string;
  partialText: string;
  fullText: string;
}
