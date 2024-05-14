import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CVECatalogServiceClient as _CVECatalog_CVECatalogServiceClient, CVECatalogServiceDefinition as _CVECatalog_CVECatalogServiceDefinition } from './CVECatalog/CVECatalogService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  CVECatalog: {
    CVE: MessageTypeDefinition
    CVECatalogService: SubtypeConstructor<typeof grpc.Client, _CVECatalog_CVECatalogServiceClient> & { service: _CVECatalog_CVECatalogServiceDefinition }
    CVEID: MessageTypeDefinition
    CVEWithID: MessageTypeDefinition
    CVEs: MessageTypeDefinition
    Empty: MessageTypeDefinition
    Response: MessageTypeDefinition
  }
}

