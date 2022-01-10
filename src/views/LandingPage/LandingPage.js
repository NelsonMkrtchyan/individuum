import React, { useEffect } from "react";
// import i18n from "i18next";
import { useTranslation } from "react-i18next";
import i18n from "../../Translations/i18n";
// import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { IndividuumHeader } from "../Individuum_Components/index";

// const useStyles = makeStyles(styles);
export default function LandingPage() {
  // const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { t } = useTranslation(["common"]);

  const handleOnclick = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value).then();
  };
  return (
    <div>
      <IndividuumHeader />
      <div style={{ paddingTop: "100px" }}>
        <p>{t("welcome")}</p>
        <button value="en" onClick={handleOnclick}>
          ENa
        </button>
        <button value="ru" onClick={handleOnclick}>
          RU
        </button>
      </div>
    </div>
  );
}
