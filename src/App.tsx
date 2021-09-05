import { Container } from "@material-ui/core";
import Copyright from "./Copyright";
import Table from "./Table";
import Header from "./Header";
import "./i18n";
import { useTranslation } from "react-i18next";

export default function App() {
  const { i18n } = useTranslation();
  i18n.changeLanguage(window.navigator.language);

  return (
    <Container maxWidth="xl">
      <Header />
      <Table />
      <Copyright />
    </Container>
  );
}
