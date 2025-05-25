import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select onChange={changeLanguage} value={i18n.language} className="language-dropdown">
      <option value="en">English - En</option>
      <option value="ar">العربية - Ar</option>
    </select>
  );
};

export default LanguageSwitcher;
