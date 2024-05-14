// Original file: ../protobuf/hacking.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CVE as _CVECatalog_CVE, CVE__Output as _CVECatalog_CVE__Output } from '../CVECatalog/CVE';
import type { CVEID as _CVECatalog_CVEID, CVEID__Output as _CVECatalog_CVEID__Output } from '../CVECatalog/CVEID';
import type { CVEWithID as _CVECatalog_CVEWithID, CVEWithID__Output as _CVECatalog_CVEWithID__Output } from '../CVECatalog/CVEWithID';
import type { CVEs as _CVECatalog_CVEs, CVEs__Output as _CVECatalog_CVEs__Output } from '../CVECatalog/CVEs';
import type { Empty as _CVECatalog_Empty, Empty__Output as _CVECatalog_Empty__Output } from '../CVECatalog/Empty';
import type { Response as _CVECatalog_Response, Response__Output as _CVECatalog_Response__Output } from '../CVECatalog/Response';

export interface CVECatalogServiceClient extends grpc.Client {
  AddCVE(argument: _CVECatalog_CVE, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  AddCVE(argument: _CVECatalog_CVE, metadata: grpc.Metadata, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  AddCVE(argument: _CVECatalog_CVE, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  AddCVE(argument: _CVECatalog_CVE, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  addCve(argument: _CVECatalog_CVE, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  addCve(argument: _CVECatalog_CVE, metadata: grpc.Metadata, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  addCve(argument: _CVECatalog_CVE, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  addCve(argument: _CVECatalog_CVE, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  
  DeleteCVE(argument: _CVECatalog_CVEID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  DeleteCVE(argument: _CVECatalog_CVEID, metadata: grpc.Metadata, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  DeleteCVE(argument: _CVECatalog_CVEID, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  DeleteCVE(argument: _CVECatalog_CVEID, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  deleteCve(argument: _CVECatalog_CVEID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  deleteCve(argument: _CVECatalog_CVEID, metadata: grpc.Metadata, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  deleteCve(argument: _CVECatalog_CVEID, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  deleteCve(argument: _CVECatalog_CVEID, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  
  GetAllCVEs(argument: _CVECatalog_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_CVEs__Output>): grpc.ClientUnaryCall;
  GetAllCVEs(argument: _CVECatalog_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_CVECatalog_CVEs__Output>): grpc.ClientUnaryCall;
  GetAllCVEs(argument: _CVECatalog_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_CVEs__Output>): grpc.ClientUnaryCall;
  GetAllCVEs(argument: _CVECatalog_Empty, callback: grpc.requestCallback<_CVECatalog_CVEs__Output>): grpc.ClientUnaryCall;
  getAllCvEs(argument: _CVECatalog_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_CVEs__Output>): grpc.ClientUnaryCall;
  getAllCvEs(argument: _CVECatalog_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_CVECatalog_CVEs__Output>): grpc.ClientUnaryCall;
  getAllCvEs(argument: _CVECatalog_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_CVEs__Output>): grpc.ClientUnaryCall;
  getAllCvEs(argument: _CVECatalog_Empty, callback: grpc.requestCallback<_CVECatalog_CVEs__Output>): grpc.ClientUnaryCall;
  
  GetCVEByID(argument: _CVECatalog_CVEID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_CVE__Output>): grpc.ClientUnaryCall;
  GetCVEByID(argument: _CVECatalog_CVEID, metadata: grpc.Metadata, callback: grpc.requestCallback<_CVECatalog_CVE__Output>): grpc.ClientUnaryCall;
  GetCVEByID(argument: _CVECatalog_CVEID, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_CVE__Output>): grpc.ClientUnaryCall;
  GetCVEByID(argument: _CVECatalog_CVEID, callback: grpc.requestCallback<_CVECatalog_CVE__Output>): grpc.ClientUnaryCall;
  getCveById(argument: _CVECatalog_CVEID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_CVE__Output>): grpc.ClientUnaryCall;
  getCveById(argument: _CVECatalog_CVEID, metadata: grpc.Metadata, callback: grpc.requestCallback<_CVECatalog_CVE__Output>): grpc.ClientUnaryCall;
  getCveById(argument: _CVECatalog_CVEID, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_CVE__Output>): grpc.ClientUnaryCall;
  getCveById(argument: _CVECatalog_CVEID, callback: grpc.requestCallback<_CVECatalog_CVE__Output>): grpc.ClientUnaryCall;
  
  UpdateCVE(argument: _CVECatalog_CVEWithID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  UpdateCVE(argument: _CVECatalog_CVEWithID, metadata: grpc.Metadata, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  UpdateCVE(argument: _CVECatalog_CVEWithID, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  UpdateCVE(argument: _CVECatalog_CVEWithID, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  updateCve(argument: _CVECatalog_CVEWithID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  updateCve(argument: _CVECatalog_CVEWithID, metadata: grpc.Metadata, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  updateCve(argument: _CVECatalog_CVEWithID, options: grpc.CallOptions, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  updateCve(argument: _CVECatalog_CVEWithID, callback: grpc.requestCallback<_CVECatalog_Response__Output>): grpc.ClientUnaryCall;
  
}

export interface CVECatalogServiceHandlers extends grpc.UntypedServiceImplementation {
  AddCVE: grpc.handleUnaryCall<_CVECatalog_CVE__Output, _CVECatalog_Response>;
  
  DeleteCVE: grpc.handleUnaryCall<_CVECatalog_CVEID__Output, _CVECatalog_Response>;
  
  GetAllCVEs: grpc.handleUnaryCall<_CVECatalog_Empty__Output, _CVECatalog_CVEs>;
  
  GetCVEByID: grpc.handleUnaryCall<_CVECatalog_CVEID__Output, _CVECatalog_CVE>;
  
  UpdateCVE: grpc.handleUnaryCall<_CVECatalog_CVEWithID__Output, _CVECatalog_Response>;
  
}

export interface CVECatalogServiceDefinition extends grpc.ServiceDefinition {
  AddCVE: MethodDefinition<_CVECatalog_CVE, _CVECatalog_Response, _CVECatalog_CVE__Output, _CVECatalog_Response__Output>
  DeleteCVE: MethodDefinition<_CVECatalog_CVEID, _CVECatalog_Response, _CVECatalog_CVEID__Output, _CVECatalog_Response__Output>
  GetAllCVEs: MethodDefinition<_CVECatalog_Empty, _CVECatalog_CVEs, _CVECatalog_Empty__Output, _CVECatalog_CVEs__Output>
  GetCVEByID: MethodDefinition<_CVECatalog_CVEID, _CVECatalog_CVE, _CVECatalog_CVEID__Output, _CVECatalog_CVE__Output>
  UpdateCVE: MethodDefinition<_CVECatalog_CVEWithID, _CVECatalog_Response, _CVECatalog_CVEWithID__Output, _CVECatalog_Response__Output>
}
