import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Button from "../../../components/CustomButtons/Button";
import List from "@material-ui/core/List";

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import { Apps } from "@material-ui/icons";
// import { useTranslation } from "react-i18next";
import i18n from "../../../Translations/i18n";

const useStyles = makeStyles(styles);

const IndividuumHeaderRightLinks = () => {
  const classes = useStyles();
  // const { t } = useTranslation(["common"]);
  // const [language, setLanguage] = useState("en");
  const handleOnclick = (e) => {
    e.preventDefault();
    // setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value).then();
  };
  return (
    <>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            href="#pablo"
            className={classes.navLink}
            onClick={(e) => e.preventDefault()}
            color="transparent"
          >
            Discover
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="#pablo"
            className={classes.navLink}
            onClick={(e) => e.preventDefault()}
            color="transparent"
          >
            Profile
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="#pablo"
            className={classes.navLink}
            onClick={(e) => e.preventDefault()}
            color="transparent"
          >
            Settings
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Components"
            buttonProps={{
              className: classes.navLink,
              color: "transparent",
            }}
            buttonIcon={Apps}
            dropdownList={[
              <button
                key={"en"}
                value="en"
                className={classes.dropdownLink}
                onClick={handleOnclick}
              >
                EN
              </button>,
              <button
                key={"ru"}
                value="ru"
                className={classes.dropdownLink}
                onClick={handleOnclick}
              >
                RUSSIAN
              </button>,
            ]}
          />
        </ListItem>
      </List>
    </>
  );
};

export default IndividuumHeaderRightLinks;
