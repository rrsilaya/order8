import color from "color";
import { Platform, Dimensions, PixelRatio } from "react-native";

import { colors, font } from '../../app/config/theme';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX = platform === "ios" && deviceHeight === 812 && deviceWidth === 375;

export default {
  platformStyle,
  platform,
  // AndroidRipple
  androidRipple: true,
  androidRippleColor: "rgba(255, 255, 255, 0.3)",
  androidRippleColorDark: "rgba(0, 0, 0, 0.15)",

  // Badge
  badgeBg: "#ED1727",
  badgeColor: colors.white,
  // New Variable
  badgePadding: platform === "ios" ? 3 : 0,

  // Button
  btnFontFamily: font,
  btnDisabledBg: "#b5b5b5",
  btnDisabledClr: "#f1f1f1",

  //Android
  btnUppercaseAndroidText: true,

  // CheckBox
  CheckboxRadius: platform === "ios" ? 13 : 0,
  CheckboxBorderWidth: platform === "ios" ? 1 : 2,
  CheckboxPaddingLeft: platform === "ios" ? 4 : 2,
  CheckboxPaddingBottom: platform === "ios" ? 0 : 5,
  CheckboxIconSize: platform === "ios" ? 21 : 14,
  CheckboxIconMarginTop: platform === "ios" ? undefined : 1,
  CheckboxFontSize: platform === "ios" ? 23 / 0.9 : 18,
  DefaultFontSize: 17,
  checkboxBgColor: colors.base,
  checkboxSize: 20,
  checkboxTickColor: colors.white,

  // Segment
  segmentBackgroundColor: "#3F51B5",
  segmentActiveBackgroundColor: colors.white,
  segmentTextColor: colors.white,
  segmentActiveTextColor: "#3F51B5",
  segmentBorderColor: colors.white,
  segmentBorderColorMain: "#3F51B5",

  // New Variable
  get defaultTextColor() {
    return this.textColor;
  },

  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return platform === "ios" ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  buttonPadding: 6,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: colors.white,

  // Color
  brandPrimary: colors.base,
  brandInfo: "#62B1F6",
  brandSuccess: "#5cb85c",
  brandDanger: "#d9534f",
  brandWarning: "#f0ad4e",
  brandSidebar: "#252932",
  brandDark: "#000",
  brandLight: "#666",

  // Font
  fontFamily: font,
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: isIphoneX ? 89 : 55,
  footerDefaultBg: colors.base,
  footerPaddingBottom: isIphoneX ? 34 : 0,

  // FooterTab
  tabBarTextColor: "rgba(255, 255, 255, 0.4)",
  tabBarTextSize: platform === "ios" ? 14 : 11,
  activeTab: platform === "ios" ? "#007aff" : colors.white,
  sTabBarActiveTextColor: "#007aff",
  tabBarActiveTextColor: colors.white,
  tabActiveBgColor: platform === "ios" ? "#1569f4" : undefined,

  // Tab
  tabDefaultBg: colors.base,
  topTabBarTextColor: "#b3c7f9",
  topTabBarActiveTextColor: colors.white,
  topTabActiveBgColor: platform === "ios" ? "#1569f4" : undefined,
  topTabBarBorderColor: colors.white,
  topTabBarActiveBorderColor: colors.white,

  // Header
  toolbarBtnColor: colors.white,
  toolbarDefaultBg: colors.base,
  toolbarHeight: platform === "ios" ? (isIphoneX ? 88 : 64) : 56,
  toolbarIconSize: platform === "ios" ? 20 : 22,
  toolbarSearchIconSize: platform === "ios" ? 20 : 23,
  toolbarInputColor: platform === "ios" ? "#CECDD2" : colors.white,
  searchBarHeight: platform === "ios" ? 30 : 40,
  searchBarInputHeight: platform === "ios" ? 30 : 50,
  toolbarInverseBg: "#222",
  toolbarTextColor: colors.white,
  iosStatusbar: "light-content",
  toolbarDefaultBorder: colors.base,
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },

  // Icon
  iconFamily: "Ionicons",
  iconFontSize: platform === "ios" ? 30 : 28,
  iconMargin: 7,
  iconHeaderSize: platform === "ios" ? 33 : 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: "#D9D5DC",
  inputSuccessBorderColor: "#2b8339",
  inputErrorBorderColor: "#ed2f2f",

  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return "#575757";
  },

  inputGroupMarginBottom: 10,
  inputHeightBase: 50,
  inputPaddingLeft: 5,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: platform === "ios" ? 37 : 30,
  lineHeight: platform === "ios" ? 20 : 24,

  // List
  listBg: colors.white,
  listBorderColor: "#c9c9c9",
  listDividerBg: "#f4f4f4",
  listBtnUnderlayColor: "#DDD",

  // Card
  cardBorderColor: "#ccc",

  // Changed Variable
  listItemPadding: platform === "ios" ? 10 : 12,

  listNoteColor: "#808080",
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: "#E4202D",
  inverseProgressColor: "#1A191B",

  // Radio Button
  radioBtnSize: platform === "ios" ? 25 : 23,
  radioSelectedColorAndroid: "#5067FF",

  // New Variable
  radioBtnLineHeight: platform === "ios" ? 29 : 24,

  radioColor: "#7e7e7e",

  get radioSelectedColor() {
    return color(this.radioColor)
      .darken(0.2)
      .hex();
  },

  // Spinner
  defaultSpinnerColor: "#45D56E",
  inverseSpinnerColor: "#1A191B",

  // Tabs
  tabBgColor: "#F8F8F8",
  tabFontSize: 15,
  tabTextColor: "#222222",

  // Text
  textColor: "#000",
  inverseTextColor: colors.white,
  noteFontSize: 14,

  // Title
  titleFontfamily: font,
  titleFontSize: platform === "ios" ? 17 : 19,
  subTitleFontSize: platform === "ios" ? 12 : 14,
  subtitleColor: colors.white,

  // New Variable
  titleFontColor: colors.white,

  // Other
  borderRadiusBase: platform === "ios" ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,

  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  dropdownBg: "#000",
  dropdownLinkColor: "#414142",
  inputLineHeight: 24,
  jumbotronBg: "#C9C9CE",
  jumbotronPadding: 30,
  deviceWidth,
  deviceHeight,
  isIphoneX,

  // New Variable
  inputGroupRoundedBorderRadius: 30,
};
