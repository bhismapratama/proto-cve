// Original file: ../protobuf/hacking.proto

import type { CVEID as _CVECatalog_CVEID, CVEID__Output as _CVECatalog_CVEID__Output } from '../CVECatalog/CVEID';
import type { CVE as _CVECatalog_CVE, CVE__Output as _CVECatalog_CVE__Output } from '../CVECatalog/CVE';

export interface CVEWithID {
  'cveId'?: (_CVECatalog_CVEID | null);
  'cve'?: (_CVECatalog_CVE | null);
}

export interface CVEWithID__Output {
  'cveId'?: (_CVECatalog_CVEID__Output);
  'cve'?: (_CVECatalog_CVE__Output);
}
