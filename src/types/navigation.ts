import type { StackScreenProps } from "@react-navigation/stack";

export type ApplicationStackParamList = {
  StartUp:undefined;
  Authorization: undefined;
  Homepage: undefined;
  Loading:undefined;
};

export type AuthorizationStackParamList = {
  SignUp: undefined;
  LogIn: undefined;
};

export type HomepageTabParamList = {
  Group: undefined;
  History: undefined;
  Wallet: undefined;
  Setting: undefined;
};

export type GroupStackParamList = {
  GroupHome: undefined;
  GroupDetail: undefined;
  AddGroupMember: undefined;
  AddGroupInformation: undefined;
  AddGroupRule: undefined;
  GroupJoining: undefined;
};

export type WalletStackParamList = {
  WalletHome: undefined;
  WalletTopUp: undefined;
  WalletExchange: undefined;
  WalletSend: undefined;
};

export type SettingStackParamList = {
  SettingHome: undefined;
  SettingProfile: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
