const findMonth = (monthNumber: number): string => {
  let month: string;

  switch (monthNumber) {
    case 1:
      month = "Gennaio";
      break;
    case 2:
      month = "Febbraio";
      break;
    case 3:
      month = "Marzo";
      break;
    case 4:
      month = "Aprile";
      break;
    case 5:
      month = "Maggio";
      break;
    case 6:
      month = "Giugno";
      break;
    case 7:
      month = "Luglio";
      break;
    case 8:
      month = "Agosto";
      break;
    case 9:
      month = "Settembre";
      break;
    case 10:
      month = "Ottobre";
      break;
    case 11:
      month = "Novembre";
      break;
    case 12:
      month = "Dicembre";
      break;
    default:
      month = "Novembre";
  }

  return month;
};

const reverseMonth = (month: string): string => {
  let monthNumber: number;

  switch (month) {
    case "Gennaio":
      monthNumber = 1;
      break;
    case "Febbraio":
      monthNumber = 2;
      break;
    case "Marzo":
      monthNumber = 3;
      break;
    case "Aprile":
      monthNumber = 4;
      break;
    case "Maggio":
      monthNumber = 5;
      break;
    case "Giugno":
      monthNumber = 6;
      break;
    case "Luglio":
      monthNumber = 7;
      break;
    case "Agosto":
      monthNumber = 8;
      break;
    case "Settembre":
      monthNumber = 9;
      break;
    case "Ottobre":
      monthNumber = 10;
      break;
    case "Novembre":
      monthNumber = 11;
      break;
    case "Dicembre":
      monthNumber = 12;
      break;
    default:
      monthNumber = 11;
  }

  return String(monthNumber);
}

export { findMonth, reverseMonth }