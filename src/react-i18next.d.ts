import "react-i18next";
import type { AppResources } from "./i18n";

declare module "react-i18next" {
  interface Resources extends AppResources {}
}
