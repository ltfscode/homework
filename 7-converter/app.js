function converter(sum, inCurrency, outCurrency) {
  const rub = 1;
  const usd = 89.7;
  const eur = 97.1;
  const cny = 12.33;
  switch (inCurrency) {
    case "rub":
      switch (outCurrency) {
        case "usd":
          return (sum * rub) / usd;

        case "eur":
          return (sum * rub) / eur;

        case "cny":
          return (sum * rub) / cny;

        case "rub":
          return sum;
      }
      break;

    case "usd":
      switch (outCurrency) {
        case "rub":
          return (sum * usd) / rub;

        case "eur":
          return (sum * usd) / eur;

        case "cny":
          return (sum * usd) / cny;

        case "usd":
          return sum;
      }

    case "eur":
      switch (outCurrency) {
        case "rub":
          return (sum * eur) / rub;

        case "usd":
          return (sum * eur) / usd;

        case "cny":
          return (sum * eur) / cny;

        case "eur":
          return sum;
      }

    case "cny":
      switch (outCurrency) {
        case "rub":
          return (sum * cny) / rub;

        case "usd":
          return (sum * cny) / usd;

        case "eur":
          return (sum * cny) / eur;

        case "cny":
          return sum;
      }

    default:
      return null;
  }
}

console.log(converter(2600000, "eur", "cny"));
