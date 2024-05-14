// Original file: ../protobuf/hacking.proto

import type { CVE as _CVECatalog_CVE, CVE__Output as _CVECatalog_CVE__Output } from '../CVECatalog/CVE';

export interface Response {
  'code'?: (string);
  'message'?: (string);
  'cve'?: (_CVECatalog_CVE | null);
}

export interface Response__Output {
  'code'?: (string);
  'message'?: (string);
  'cve'?: (_CVECatalog_CVE__Output);
}
