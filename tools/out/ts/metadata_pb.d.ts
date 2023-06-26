// package: carboncall.metadata
// file: metadata.proto

import * as jspb from "google-protobuf";

export class SustainabilityReport extends jspb.Message {
  getGRID(): string;
  setGRID(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): void;

  getReport(): string;
  setReport(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SustainabilityReport.AsObject;
  static toObject(includeInstance: boolean, msg: SustainabilityReport): SustainabilityReport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SustainabilityReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SustainabilityReport;
  static deserializeBinaryFromReader(message: SustainabilityReport, reader: jspb.BinaryReader): SustainabilityReport;
}

export namespace SustainabilityReport {
  export type AsObject = {
    gRID: string,
    metadata?: Metadata.AsObject,
    report: string,
  }
}

export class Metadata extends jspb.Message {
  getGRID(): string;
  setGRID(value: string): void;

  getOrganizationIdentifier(): string;
  setOrganizationIdentifier(value: string): void;

  getOrganizationName(): string;
  setOrganizationName(value: string): void;

  getDomicile(): ISO3166_CountryCodeMap[keyof ISO3166_CountryCodeMap];
  setDomicile(value: ISO3166_CountryCodeMap[keyof ISO3166_CountryCodeMap]): void;

  clearOperatingCountriesList(): void;
  getOperatingCountriesList(): Array<ISO3166_CountryCodeMap[keyof ISO3166_CountryCodeMap]>;
  setOperatingCountriesList(value: Array<ISO3166_CountryCodeMap[keyof ISO3166_CountryCodeMap]>): void;
  addOperatingCountries(value: ISO3166_CountryCodeMap[keyof ISO3166_CountryCodeMap], index?: number): ISO3166_CountryCodeMap[keyof ISO3166_CountryCodeMap];

  clearLanguagesList(): void;
  getLanguagesList(): Array<LanguageMap[keyof LanguageMap]>;
  setLanguagesList(value: Array<LanguageMap[keyof LanguageMap]>): void;
  addLanguages(value: LanguageMap[keyof LanguageMap], index?: number): LanguageMap[keyof LanguageMap];

  getReportType(): ReportTypeMap[keyof ReportTypeMap];
  setReportType(value: ReportTypeMap[keyof ReportTypeMap]): void;

  getReportIssueDate(): string;
  setReportIssueDate(value: string): void;

  hasReportingPeriod(): boolean;
  clearReportingPeriod(): void;
  getReportingPeriod(): ReportingPeriod | undefined;
  setReportingPeriod(value?: ReportingPeriod): void;

  getReportReplaces(): string;
  setReportReplaces(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  hasIndustry(): boolean;
  clearIndustry(): void;
  getIndustry(): Industry | undefined;
  setIndustry(value?: Industry): void;

  getPerformance(): string;
  setPerformance(value: string): void;

  getReportFormat(): ReportFormatMap[keyof ReportFormatMap];
  setReportFormat(value: ReportFormatMap[keyof ReportFormatMap]): void;

  getReportingStandard(): ReportingStandardMap[keyof ReportingStandardMap];
  setReportingStandard(value: ReportingStandardMap[keyof ReportingStandardMap]): void;

  getAssurance(): string;
  setAssurance(value: string): void;

  getPriorReport(): string;
  setPriorReport(value: string): void;

  getReportHash(): string;
  setReportHash(value: string): void;

  clearReportContextList(): void;
  getReportContextList(): Array<Metatag>;
  setReportContextList(value: Array<Metatag>): void;
  addReportContext(value?: Metatag, index?: number): Metatag;

  clearPropertyContextsList(): void;
  getPropertyContextsList(): Array<PropertyContext>;
  setPropertyContextsList(value: Array<PropertyContext>): void;
  addPropertyContexts(value?: PropertyContext, index?: number): PropertyContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    gRID: string,
    organizationIdentifier: string,
    organizationName: string,
    domicile: ISO3166_CountryCodeMap[keyof ISO3166_CountryCodeMap],
    operatingCountriesList: Array<ISO3166_CountryCodeMap[keyof ISO3166_CountryCodeMap]>,
    languagesList: Array<LanguageMap[keyof LanguageMap]>,
    reportType: ReportTypeMap[keyof ReportTypeMap],
    reportIssueDate: string,
    reportingPeriod?: ReportingPeriod.AsObject,
    reportReplaces: string,
    location: string,
    industry?: Industry.AsObject,
    performance: string,
    reportFormat: ReportFormatMap[keyof ReportFormatMap],
    reportingStandard: ReportingStandardMap[keyof ReportingStandardMap],
    assurance: string,
    priorReport: string,
    reportHash: string,
    reportContextList: Array<Metatag.AsObject>,
    propertyContextsList: Array<PropertyContext.AsObject>,
  }
}

export class ReportingPeriod extends jspb.Message {
  getStartDate(): string;
  setStartDate(value: string): void;

  getEndDate(): string;
  setEndDate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportingPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: ReportingPeriod): ReportingPeriod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportingPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportingPeriod;
  static deserializeBinaryFromReader(message: ReportingPeriod, reader: jspb.BinaryReader): ReportingPeriod;
}

export namespace ReportingPeriod {
  export type AsObject = {
    startDate: string,
    endDate: string,
  }
}

export class Industry extends jspb.Message {
  getPrefix(): IndustryCodePrefixMap[keyof IndustryCodePrefixMap];
  setPrefix(value: IndustryCodePrefixMap[keyof IndustryCodePrefixMap]): void;

  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Industry.AsObject;
  static toObject(includeInstance: boolean, msg: Industry): Industry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Industry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Industry;
  static deserializeBinaryFromReader(message: Industry, reader: jspb.BinaryReader): Industry;
}

export namespace Industry {
  export type AsObject = {
    prefix: IndustryCodePrefixMap[keyof IndustryCodePrefixMap],
    code: string,
  }
}

export class Metatag extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metatag.AsObject;
  static toObject(includeInstance: boolean, msg: Metatag): Metatag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metatag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metatag;
  static deserializeBinaryFromReader(message: Metatag, reader: jspb.BinaryReader): Metatag;
}

export namespace Metatag {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class PropertyContext extends jspb.Message {
  getProperty(): string;
  setProperty(value: string): void;

  clearMetatagsList(): void;
  getMetatagsList(): Array<Metatag>;
  setMetatagsList(value: Array<Metatag>): void;
  addMetatags(value?: Metatag, index?: number): Metatag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyContext.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyContext): PropertyContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertyContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyContext;
  static deserializeBinaryFromReader(message: PropertyContext, reader: jspb.BinaryReader): PropertyContext;
}

export namespace PropertyContext {
  export type AsObject = {
    property: string,
    metatagsList: Array<Metatag.AsObject>,
  }
}

export interface ISO3166_CountryCodeMap {
  UNKNOWN: 0;
  A_F: 1;
  A_X: 2;
  A_L: 3;
  D_Z: 4;
  A_S: 5;
  A_D: 6;
  A_O: 7;
  A_I: 8;
  A_Q: 9;
  A_G: 10;
  A_R: 11;
  A_M: 12;
  A_W: 13;
  A_U: 14;
  A_T: 15;
  A_Z: 16;
  B_S: 17;
  B_H: 18;
  B_D: 19;
  B_B: 20;
  B_Y: 21;
  B_E: 22;
  B_Z: 23;
  B_J: 24;
  B_M: 25;
  B_T: 26;
  B_O: 27;
  B_Q: 28;
  B_A: 29;
  B_W: 30;
  B_V: 31;
  B_R: 32;
  I_O: 33;
  B_N: 34;
  B_G: 35;
  B_F: 36;
  B_I: 37;
  C_V: 38;
  K_H: 39;
  C_M: 40;
  C_A: 41;
  K_Y: 42;
  C_F: 43;
  T_D: 44;
  C_L: 45;
  C_N: 46;
  C_X: 47;
  C_C: 48;
  C_O: 49;
  K_M: 50;
  C_G: 51;
  C_D: 52;
  C_K: 53;
  C_R: 54;
  C_I: 55;
  H_R: 56;
  C_U: 57;
  C_W: 58;
  C_Y: 59;
  C_Z: 60;
  D_K: 61;
  D_J: 62;
  D_M: 63;
  D_O: 64;
  E_C: 65;
  E_G: 66;
  S_V: 67;
  G_Q: 68;
  E_R: 69;
  E_E: 70;
  E_T: 71;
  F_K: 72;
  F_O: 73;
  F_J: 74;
  F_I: 75;
  F_R: 76;
  G_F: 77;
  P_F: 78;
  T_F: 79;
  G_A: 80;
  G_M: 81;
  G_E: 82;
  D_E: 83;
  G_H: 84;
  G_I: 85;
  G_R: 86;
  G_L: 87;
  G_D: 88;
  G_P: 89;
  G_U: 90;
  G_T: 91;
  G_G: 92;
  G_N: 93;
  G_W: 94;
  G_Y: 95;
  H_T: 96;
  H_M: 97;
  V_A: 98;
  H_N: 99;
  H_K: 100;
  H_U: 101;
  I_S: 102;
  I_N: 103;
  I_D: 104;
  I_R: 105;
  I_Q: 106;
  I_E: 107;
  I_M: 108;
  I_L: 109;
  I_T: 110;
  J_M: 111;
  J_P: 112;
  J_E: 113;
  J_O: 114;
  K_Z: 115;
  K_E: 116;
  K_I: 117;
  K_P: 118;
  K_R: 119;
  K_W: 120;
  K_G: 121;
  L_A: 122;
  L_V: 123;
  L_B: 124;
  L_S: 125;
  L_R: 126;
  L_Y: 127;
  L_I: 128;
  L_T: 129;
  L_U: 130;
  M_O: 131;
  M_K: 132;
  M_G: 133;
  M_W: 134;
  M_Y: 135;
  M_V: 136;
  M_L: 137;
  M_T: 138;
  M_H: 139;
  M_Q: 140;
  M_R: 141;
  M_U: 142;
  Y_T: 143;
  M_X: 144;
  F_M: 145;
  M_D: 146;
  M_C: 147;
  M_N: 148;
  M_E: 149;
  M_S: 150;
  M_A: 151;
  M_Z: 152;
  M_M: 153;
  N_A: 154;
  N_R: 155;
  N_P: 156;
  N_L: 157;
  N_C: 158;
  N_Z: 159;
  N_I: 160;
  N_E: 161;
  N_G: 162;
  N_U: 163;
  N_F: 164;
  M_P: 165;
  N_O: 166;
  O_M: 167;
  P_K: 168;
  P_W: 169;
  P_S: 170;
  P_A: 171;
  P_G: 172;
  P_Y: 173;
  P_E: 174;
  P_H: 175;
  P_N: 176;
  P_L: 177;
  P_T: 178;
  P_R: 179;
  Q_A: 180;
  R_E: 181;
  R_O: 182;
  R_U: 183;
  R_W: 184;
  B_L: 185;
  S_H: 186;
  K_N: 187;
  L_C: 188;
  M_F: 189;
  P_M: 190;
  V_C: 191;
  W_S: 192;
  S_M: 193;
  S_T: 194;
  S_A: 195;
  S_N: 196;
  R_S: 197;
  S_C: 198;
  S_L: 199;
  S_G: 200;
  S_X: 201;
  S_K: 202;
  S_I: 203;
  S_B: 204;
  S_O: 205;
  Z_A: 206;
  G_S: 207;
  S_S: 208;
  E_S: 209;
  L_K: 210;
  S_D: 211;
  S_R: 212;
  S_J: 213;
  S_Z: 214;
  S_E: 215;
  C_H: 216;
  S_Y: 217;
  T_W: 218;
  T_J: 219;
  T_Z: 220;
  T_H: 221;
  T_L: 222;
  T_G: 223;
  T_K: 224;
  T_O: 225;
  T_T: 226;
  T_N: 227;
  T_R: 228;
  T_M: 229;
  T_C: 230;
  T_V: 231;
  U_G: 232;
  U_A: 233;
  A_E: 234;
  G_B: 235;
  U_S: 236;
  U_M: 237;
  U_Y: 238;
  U_Z: 239;
  V_U: 240;
  V_E: 241;
  V_N: 242;
  V_G: 243;
  V_I: 244;
  W_F: 245;
  E_H: 246;
  Y_E: 247;
  Z_M: 248;
  Z_W: 249;
}

export const ISO3166_CountryCode: ISO3166_CountryCodeMap;

export interface LanguageMap {
  EN: 0;
  ES: 1;
  ZH: 2;
  FR: 3;
}

export const Language: LanguageMap;

export interface ReportTypeMap {
  INTEGRATED_REPORT: 0;
  FINANCIAL_REPORT: 1;
  SUSTAINABILITY_REPORT: 2;
  ANNUAL_REPORT: 3;
  PROXY_STATEMENT: 4;
  REGISTRATION_STATEMENT: 5;
  QUARTERLY_REPORT: 6;
  HALF_YEARLY_REPORT: 7;
  OTHER: 8;
}

export const ReportType: ReportTypeMap;

export interface IndustryCodePrefixMap {
  I_S_I_C: 0;
  N_A_I_C_S: 1;
  G_I_C_S: 2;
  S_I_C: 3;
}

export const IndustryCodePrefix: IndustryCodePrefixMap;

export interface ReportFormatMap {
  P_D_F: 0;
  I_X_B_R_L: 1;
  OPEN_XML: 2;
}

export const ReportFormat: ReportFormatMap;

export interface ReportingStandardMap {
  G_A_A_P: 0;
  I_F_R_S: 1;
  I_S_S_B: 2;
  E_F_R_A_G: 3;
  G_R_I: 4;
}

export const ReportingStandard: ReportingStandardMap;

